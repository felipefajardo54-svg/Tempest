# TEMPEST SPORT - servidor local

Proyecto web con frontend estatico y backend Node.js + Express. Puede funcionar en modo local sin base remota, y queda listo para conectarse a MongoDB Atlas usando variables de entorno.

## Configurar MongoDB Atlas

1. Crea un cluster en MongoDB Atlas.
2. Crea un usuario de base de datos.
3. Autoriza tu IP en Network Access.
4. Copia `.env.example` como `.env`.
5. Reemplaza `MONGODB_URI` con tu cadena real de Atlas.

Ejemplo:

```env
PORT=8080
MONGODB_URI=mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=tempest_sport
```

Nunca subas `.env` a repositorios publicos.

## Instalar dependencias

```bash
npm install
```

## Insertar productos iniciales en Atlas

Con `.env` configurado:

```bash
npm run seed
```

Esto crea/usa la coleccion `products` e inserta el catalogo actual si esta vacia.

## Ejecutar con Node.js

```bash
node server.js
```

Tambien puedes usar:

```bash
npm start
```

Abrir:

```text
http://localhost:8080
```

Endpoints disponibles:

```text
GET  /api/health
GET  /api/products
POST /api/products
POST /api/orders
GET  /api/orders/:trackingNumber
POST /api/support
POST /api/newsletter
POST /api/seed
```

Para usar otro puerto:

```bash
$env:PORT=3000; node server.js
```

## Ejecutar con npx http-server

Solo sirve archivos estaticos y no habilita las rutas API ni MongoDB Atlas:

```bash
npx http-server . -p 8080 -c-1
```

Abrir:

```text
http://localhost:8080
```

Nota: la primera ejecucion de `npx http-server` puede intentar descargar el paquete si no existe localmente.

## Ejecutar sin Node en Windows

Si no tienes Node.js instalado, ejecuta:

```bat
iniciar-servidor.bat
```

El archivo usa `node server.js` cuando Node existe. Si no existe, levanta `servidor-local.ps1` en el mismo puerto.

## Ejecutar con Live Server en VS Code

1. Instala la extension "Live Server" si no la tienes.
2. Abre esta carpeta en VS Code.
3. Clic derecho sobre `index.html`.
4. Selecciona "Open with Live Server".
5. Si quieres el puerto 8080, configura Live Server con `"liveServer.settings.port": 8080`.
