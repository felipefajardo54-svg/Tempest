require('dotenv').config();

const path = require('path');
const fs = require('fs');
const vm = require('vm');
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const root = __dirname;
const port = Number(process.env.PORT || 8080);
const dbName = process.env.MONGODB_DB || 'tempest_sport';
const mongoUri = process.env.MONGODB_URI;

let mongoClient = null;
let db = null;
let httpServer = null;
let dbStatus = {
  connected: false,
  message: mongoUri ? 'Conectando a MongoDB Atlas...' : 'MONGODB_URI no configurada. Usando modo local sin base remota.'
};

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

function loadSeedProducts() {
  const appJsPath = path.join(root, 'js', 'app.js');
  const appJs = fs.readFileSync(appJsPath, 'utf8');
  const match = appJs.match(/let\s+PRODUCTS\s*=\s*(\[[\s\S]*?\n\]);/);
  if (!match) {
    throw new Error('No se pudo leer el catálogo PRODUCTS desde js/app.js.');
  }

  const context = {};
  vm.createContext(context);
  vm.runInContext(`products = ${match[1]}`, context, { timeout: 1000 });
  return context.products.map(product => ({
    id: String(product.id),
    name: product.name,
    price: Number(product.price || 0),
    image: product.image,
    category: product.category,
    description: product.description,
    stock: Number(product.stock || 0)
  }));
}

async function connectDb() {
  if (!mongoUri) {
    console.warn('[DB] MONGODB_URI no está definida. Crea .env a partir de .env.example para conectar Atlas.');
    return null;
  }

  try {
    mongoClient = new MongoClient(mongoUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      },
      serverSelectionTimeoutMS: 8000
    });

    await mongoClient.connect();
    db = mongoClient.db(dbName);
    await db.command({ ping: 1 });
    await ensureCollections();

    dbStatus = { connected: true, message: `Conectado a MongoDB Atlas: ${dbName}` };
    console.log(`[DB] ${dbStatus.message}`);
    return db;
  } catch (error) {
    dbStatus = { connected: false, message: `No se pudo conectar a MongoDB: ${error.message}` };
    console.error(`[DB] ${dbStatus.message}`);
    return null;
  }
}

async function ensureCollections() {
  if (!db) return;

  await Promise.all([
    db.collection('products').createIndex({ id: 1 }, { unique: true }),
    db.collection('orders').createIndex({ orderNumber: 1 }, { unique: true, sparse: true }),
    db.collection('support_tickets').createIndex({ createdAt: -1 }),
    db.collection('newsletter_subscribers').createIndex({ email: 1 }, { unique: true })
  ]);
}

async function seedDatabase() {
  if (!db) return { ok: false, message: dbStatus.message };

  const products = db.collection('products');
  const existing = await products.countDocuments();
  if (existing === 0) {
    const seedProducts = loadSeedProducts();
    await products.insertMany(seedProducts.map(product => ({ ...product, createdAt: new Date() })));
    return { ok: true, inserted: seedProducts.length, message: `${seedProducts.length} productos insertados en products.` };
  }

  return { ok: true, inserted: 0, message: `La colección products ya contiene ${existing} documento(s).` };
}

function requireDb(res) {
  if (db) return true;
  res.status(503).json({ ok: false, error: dbStatus.message });
  return false;
}

function asyncRoute(handler) {
  return (req, res, next) => Promise.resolve(handler(req, res, next)).catch(next);
}

function isEmail(value) {
  return /\S+@\S+\.\S+/.test(String(value || '').trim());
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    app: 'tempest-sport',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/seed', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  res.json(await seedDatabase());
}));

app.get('/api/products', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const products = await db.collection('products').find({}, { projection: { _id: 0 } }).sort({ category: 1, name: 1 }).toArray();
  res.json({ ok: true, products });
}));

app.post('/api/products', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const product = req.body || {};
  if (!product.id || !product.name || !product.category) {
    res.status(400).json({ ok: false, error: 'Producto inválido: id, name y category son requeridos.' });
    return;
  }

  await db.collection('products').updateOne(
    { id: String(product.id) },
    { $set: { ...product, id: String(product.id), updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
    { upsert: true }
  );
  res.status(201).json({ ok: true, product });
}));

app.post('/api/orders', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const order = req.body || {};
  if (!Array.isArray(order.items) || order.items.length === 0) {
    res.status(400).json({ ok: false, error: 'El pedido debe incluir items.' });
    return;
  }

  const doc = {
    ...order,
    orderNumber: order.orderNumber || `TS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    trackingNumber: order.trackingNumber || `TRK${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
    status: order.status || 'confirmed',
    createdAt: new Date()
  };

  await db.collection('orders').insertOne(doc);
  res.status(201).json({ ok: true, orderNumber: doc.orderNumber, trackingNumber: doc.trackingNumber });
}));

app.get('/api/orders/:trackingNumber', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const order = await db.collection('orders').findOne(
    { trackingNumber: req.params.trackingNumber },
    { projection: { _id: 0 } }
  );

  if (!order) {
    res.status(404).json({ ok: false, error: 'Pedido no encontrado.' });
    return;
  }

  res.json({ ok: true, order });
}));

app.post('/api/support', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const { name, email, type, desc } = req.body || {};
  if (!name || !isEmail(email) || !type || !desc) {
    res.status(400).json({ ok: false, error: 'Ticket inválido. Nombre, email, tipo y descripción son requeridos.' });
    return;
  }

  const ticket = { name, email, type, desc, status: 'open', createdAt: new Date() };
  const result = await db.collection('support_tickets').insertOne(ticket);
  res.status(201).json({ ok: true, ticketId: result.insertedId });
}));

app.post('/api/newsletter', asyncRoute(async (req, res) => {
  if (!requireDb(res)) return;
  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!isEmail(email)) {
    res.status(400).json({ ok: false, error: 'Email inválido.' });
    return;
  }

  await db.collection('newsletter_subscribers').updateOne(
    { email },
    { $setOnInsert: { email, createdAt: new Date() } },
    { upsert: true }
  );
  res.status(201).json({ ok: true });
}));

app.use(express.static(root, {
  extensions: ['html'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'no-store');
  }
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

app.use((error, req, res, next) => {
  console.error('[API]', error);
  res.status(500).json({ ok: false, error: 'Error interno del servidor.' });
});

function listenWithFallback(preferredPort, attempts = 10) {
  return new Promise((resolve, reject) => {
    const tryPort = currentPort => {
      const server = app.listen(currentPort);

      server.once('listening', () => {
        resolve({ server, port: currentPort });
      });

      server.once('error', error => {
        if (error.code === 'EADDRINUSE' && currentPort < preferredPort + attempts) {
          console.warn(`[SERVER] Puerto ${currentPort} ocupado. Probando ${currentPort + 1}...`);
          tryPort(currentPort + 1);
          return;
        }
        reject(error);
      });
    };

    tryPort(preferredPort);
  });
}

async function start() {
  await connectDb();

  if (process.argv.includes('--seed-only')) {
    const result = await seedDatabase();
    console.log(`[DB] ${result.message}`);
    await mongoClient?.close();
    return;
  }

  const result = await listenWithFallback(port);
  httpServer = result.server;
  console.log(`TEMPEST SPORT listo en http://localhost:${result.port}`);
  console.log(`[DB] ${dbStatus.message}`);
}

process.on('SIGINT', async () => {
  await mongoClient?.close();
  process.exit(0);
});

start().catch(error => {
  console.error('[SERVER] No se pudo iniciar:', error);
  process.exit(1);
});
