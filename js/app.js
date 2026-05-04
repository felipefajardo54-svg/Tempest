// =================== DATA ===================
let PRODUCTS = [
  {id:'1',name:'Zapatillas Running Pro',price:519900,image:'https://images.unsplash.com/photo-1765914448116-587acf59e3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Running',description:'Zapatillas de alto rendimiento para corredores profesionales',stock:25},
  {id:'2',name:'Zapatillas Elite Sport',price:599900,image:'https://images.unsplash.com/photo-1765914448164-de1e22b7fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Running',description:'Diseño premium con tecnología de amortiguación avanzada',stock:18},
  {id:'3',name:'Zapatillas Urban Runner',price:359900,image:'https://images.unsplash.com/photo-1774414048865-3998294b4018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Running',description:'Perfectas para entrenamientos urbanos y carreras diarias',stock:32},
  {id:'4',name:'Pesas Profesionales 2kg',price:139900,image:'https://images.unsplash.com/photo-1589955898954-9c8d4bb86823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Pesas de alta calidad para entrenamiento funcional',stock:45},
  {id:'5',name:'Mancuernas Hexagonales',price:239900,image:'https://images.unsplash.com/photo-1584827386894-fc939dad6078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Set de mancuernas con diseño antideslizante',stock:28},
  {id:'6',name:'Máquina Cable Crossover',price:5199900,image:'https://images.unsplash.com/photo-1722925541311-2117dfa21fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Equipo profesional para gimnasio completo',stock:5},
  {id:'7',name:'Balón de Fútbol Pro',price:179900,image:'https://images.unsplash.com/photo-1763775468707-573c7cd6b0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Fútbol',description:'Balón profesional certificado para competencias',stock:60},
  {id:'8',name:'Botines de Fútbol Elite',price:479900,image:'https://images.unsplash.com/photo-1776269028865-d277700e6fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Fútbol',description:'Tacos profesionales con tecnología de tracción avanzada',stock:22},
  {id:'9',name:'Rack de Almacenamiento',price:799900,image:'https://images.unsplash.com/photo-1772909849803-e1c298df3fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Organizador para equipamiento deportivo',stock:15},
  {id:'10',name:'Kit Entrenamiento Funcional',price:719900,image:'https://images.unsplash.com/photo-1728486144678-95cb7c5f7463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Set completo para entrenamiento en casa',stock:20},
  {id:'11',name:'Zapatillas Collection Pro',price:679900,image:'https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Running',description:'Colección exclusiva de zapatillas deportivas',stock:12},
  {id:'12',name:'Barra Olímpica Premium',price:999900,image:'https://images.unsplash.com/photo-1722925541142-5db2668ca492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',category:'Gym',description:'Barra olímpica de 20kg con certificación profesional',stock:10},
  {id:'13',name:'Zapatillas Nike Air Zoom',price:639900,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',category:'Running',description:'Zapatillas con tecnología Air Zoom para máxima respuesta',stock:30},
  {id:'14',name:'Adidas Ultraboost 23',price:759900,image:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',category:'Running',description:'Comodidad y energía en cada zancada',stock:25},
  {id:'15',name:'Asics Gel Kayano 30',price:699900,image:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',category:'Running',description:'Estabilidad y soporte para largas distancias',stock:20},
  {id:'16',name:'New Balance Fresh Foam',price:559900,image:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800',category:'Running',description:'Amortiguación ultrasuave para corredores',stock:35},
  {id:'17',name:'Puma Velocity Nitro',price:499900,image:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800',category:'Running',description:'Ligereza y velocidad en cada paso',stock:28},
  {id:'18',name:'Camiseta Running Dry-Fit',price:139900,image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',category:'Running',description:'Tecnología de secado rápido para máximo rendimiento',stock:100},
  {id:'19',name:'Shorts Running Profesional',price:159900,image:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800',category:'Running',description:'Shorts ligeros con bolsillos internos',stock:80},
  {id:'20',name:'Reloj GPS Garmin Forerunner',price:1199900,image:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800',category:'Running',description:'Monitor de frecuencia cardíaca y GPS integrado',stock:15},
  {id:'21',name:'Calcetines Running Anti-Ampollas',price:75900,image:'https://images.unsplash.com/photo-1556906781-9cba4a7e4576?w=800',category:'Running',description:'Pack de 3 pares con tecnología anti-fricción',stock:150},
  {id:'22',name:'Gorra Running UV Protection',price:99900,image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800',category:'Running',description:'Protección solar UPF 50+ transpirable',stock:60},
  {id:'23',name:'Banco Ajustable Multi-Posición',price:879900,image:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',category:'Gym',description:'Banco profesional con 7 posiciones de ajuste',stock:12},
  {id:'24',name:'Set Discos Olímpicos 100kg',price:1799900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Set completo de discos de goma de alta calidad',stock:8},
  {id:'25',name:'Rack Sentadillas Power Cage',price:3599900,image:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',category:'Gym',description:'Jaula de potencia con barra de dominadas',stock:5},
  {id:'26',name:'Kettlebell 16kg',price:219900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Pesa rusa de hierro fundido profesional',stock:40},
  {id:'27',name:'Bandas de Resistencia Set',price:119900,image:'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800',category:'Gym',description:'Set de 5 bandas con diferentes resistencias',stock:90},
  {id:'28',name:'Colchoneta Yoga Premium',price:199900,image:'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800',category:'Gym',description:'Mat antideslizante de 6mm de grosor',stock:65},
  {id:'29',name:'Guantes Gym Profesionales',price:99900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Protección y agarre para levantamiento',stock:75},
  {id:'30',name:'Cuerda Saltar Velocidad',price:79900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Cuerda ajustable para CrossFit y cardio',stock:100},
  {id:'31',name:'Pelota Medicinal 5kg',price:159900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Pelota de goma para entrenamiento funcional',stock:45},
  {id:'32',name:'TRX Suspension Trainer',price:639900,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',category:'Gym',description:'Sistema de entrenamiento en suspensión completo',stock:30},
  {id:'33',name:'Bicicleta Montaña MTB Pro',price:5199900,image:'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800',category:'Ciclismo',description:'Bicicleta 29" con suspensión completa',stock:10},
  {id:'34',name:'Bicicleta Ruta Carbono',price:7599900,image:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800',category:'Ciclismo',description:'Cuadro de carbono ultra ligero',stock:6},
  {id:'35',name:'Casco Ciclismo Aerodinámico',price:359900,image:'https://images.unsplash.com/photo-1557439846-3bf39ff98794?w=800',category:'Ciclismo',description:'Casco con certificación de seguridad',stock:50},
  {id:'36',name:'Gafas Ciclismo Fotocromáticas',price:259900,image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',category:'Ciclismo',description:'Lentes que se adaptan a la luz',stock:40},
  {id:'37',name:'Jersey Ciclismo Pro Team',price:239900,image:'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800',category:'Ciclismo',description:'Maillot profesional con bolsillos traseros',stock:70},
  {id:'38',name:'Culotte Ciclismo Acolchado',price:279900,image:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',category:'Ciclismo',description:'Badana de gel para máxima comodidad',stock:55},
  {id:'39',name:'Pedales Automáticos Shimano',price:379900,image:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800',category:'Ciclismo',description:'Sistema de calas profesional',stock:35},
  {id:'40',name:'Bomba de Piso Alta Presión',price:159900,image:'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800',category:'Ciclismo',description:'Manómetro digital incluido',stock:60},
  {id:'41',name:'Rodillo Entrenamiento Smart',price:1999900,image:'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800',category:'Ciclismo',description:'Compatible con apps Zwift y TrainerRoad',stock:12},
  {id:'42',name:'Luz Bicicleta LED Recargable',price:139900,image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',category:'Ciclismo',description:'Set delantera y trasera USB',stock:80},
  {id:'43',name:'Balón Adidas Champions League',price:259900,image:'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800',category:'Fútbol',description:'Balón oficial réplica Champions',stock:45},
  {id:'44',name:'Botines Nike Mercurial',price:559900,image:'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800',category:'Fútbol',description:'Velocidad y control en terreno firme',stock:30},
  {id:'45',name:'Guayos Adidas Predator',price:639900,image:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800',category:'Fútbol',description:'Precisión en cada disparo',stock:25},
  {id:'46',name:'Espinilleras Profesionales',price:119900,image:'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800',category:'Fútbol',description:'Protección ligera y resistente',stock:90},
  {id:'47',name:'Camiseta Fútbol Pro',price:199900,image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800',category:'Fútbol',description:'Tecnología Dri-FIT para juego intenso',stock:120},
  {id:'48',name:'Shorts Fútbol Deportivo',price:139900,image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800',category:'Fútbol',description:'Ligeros y transpirables',stock:100},
  {id:'49',name:'Guantes Portero Profesional',price:299900,image:'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800',category:'Fútbol',description:'Latex de alta adherencia',stock:40},
  {id:'50',name:'Red Portería Entrenamiento',price:359900,image:'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800',category:'Fútbol',description:'Portería plegable 180x120cm',stock:20},
  {id:'51',name:'Conos Entrenamiento Set 50',price:99900,image:'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800',category:'Fútbol',description:'Kit completo para entrenamientos',stock:75},
  {id:'52',name:'Bomba Balones Doble Acción',price:51900,image:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',category:'Fútbol',description:'Incluye agujas y adaptadores',stock:110},
  {id:'53',name:'Mochila Trekking 65L',price:599900,image:'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800',category:'Outdoor',description:'Mochila impermeable para montaña',stock:25},
  {id:'54',name:'Carpa 4 Personas Ultralight',price:999900,image:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',category:'Outdoor',description:'Resistente a lluvia y viento',stock:15},
  {id:'55',name:'Saco Dormir -10°C',price:519900,image:'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',category:'Outdoor',description:'Térmico para temperaturas extremas',stock:30},
  {id:'56',name:'Bastones Trekking Carbono',price:319900,image:'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',category:'Outdoor',description:'Ultraligeros y ajustables',stock:45},
  {id:'57',name:'Linterna LED Recargable',price:179900,image:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',category:'Outdoor',description:'1200 lúmenes, resistente al agua',stock:60},
  {id:'58',name:'GPS Garmin Montana',price:1599900,image:'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',category:'Outdoor',description:'Navegador con mapas topográficos',stock:18},
  {id:'59',name:'Navaja Multiherramienta',price:239900,image:'https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=800',category:'Outdoor',description:'15 funciones en acero inoxidable',stock:85},
  {id:'60',name:'Filtro Agua Portátil',price:139900,image:'https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=800',category:'Outdoor',description:'Purifica hasta 1000 litros',stock:50},
  {id:'61',name:'Chaqueta Impermeable Gore-Tex',price:759900,image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800',category:'Outdoor',description:'Transpirable y resistente al viento',stock:35},
  {id:'62',name:'Botas Montaña Impermeables',price:639900,image:'https://images.unsplash.com/photo-1520219750937-a0a2f2c0d94c?w=800',category:'Outdoor',description:'Suela Vibram antideslizante',stock:40},
];

const HERO_IMAGE = 'https://images.unsplash.com/photo-1661439193765-392d81462003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400';
const DEAL_IMAGE = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800';

// =================== STATE ===================
let cart = JSON.parse(localStorage.getItem('ts_cart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('ts_user') || 'null');
let selectedCategory = null;
let filterOpen = false;
let chatOpen = false;
let pendingCheckout = false;
let orders = JSON.parse(localStorage.getItem('ts_orders') || '[]');
let remoteDbReady = false;

// =================== UTILS ===================
function $(id) {
  return document.getElementById(id);
}

function isEmail(value) {
  return /\S+@\S+\.\S+/.test(String(value || '').trim());
}

function svgText(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function productArt(p) {
  const name = p.name.toLowerCase();
  if(p.category === 'Running' && (name.includes('camiseta') || name.includes('dry-fit'))) {
    return `<path d="M205 142 L255 105 L300 132 L345 105 L395 142 L370 220 L338 208 L338 425 L262 425 L262 208 L230 220 Z" fill="#f5c518"/><path d="M263 208 H337 M250 300 H350" stroke="#111" stroke-width="12" stroke-linecap="round"/>`;
  }
  if(p.category === 'Running' && name.includes('reloj')) {
    return `<rect x="258" y="78" width="84" height="142" rx="24" fill="#f5c518"/><rect x="258" y="380" width="84" height="142" rx="24" fill="#f5c518"/><circle cx="300" cy="300" r="102" fill="#f5c518"/><circle cx="300" cy="300" r="72" fill="#1f1f1f" stroke="#111" stroke-width="10"/><path d="M300 258 V306 L335 327" stroke="#f5c518" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  if(p.category === 'Running') {
    return `<path d="M86 352 C160 274 256 246 360 265 C426 277 477 320 532 345 C555 356 564 380 550 400 C536 420 508 432 470 432 H180 C112 432 69 404 63 376 C61 367 70 359 86 352 Z" fill="#f5c518"/><path d="M108 374 C202 350 314 347 420 375 C466 388 502 405 544 411" fill="none" stroke="#111" stroke-width="16" stroke-linecap="round"/><path d="M236 298 L284 366 M318 294 L356 370" stroke="#111" stroke-width="9" stroke-linecap="round"/>`;
  }
  if(p.category === 'Gym' && name.includes('kettlebell')) {
    return `<path d="M245 196 C245 130 355 130 355 196" fill="none" stroke="#f5c518" stroke-width="42" stroke-linecap="round"/><path d="M190 302 C190 220 410 220 410 302 V390 C410 456 365 498 300 498 C235 498 190 456 190 390 Z" fill="#f5c518"/><circle cx="300" cy="352" r="66" fill="#1f1f1f" opacity=".28"/>`;
  }
  if(p.category === 'Gym' && (name.includes('barra') || name.includes('rack'))) {
    return `<rect x="92" y="284" width="416" height="32" rx="16" fill="#f5c518"/><rect x="66" y="246" width="28" height="108" rx="8" fill="#f5c518"/><rect x="506" y="246" width="28" height="108" rx="8" fill="#f5c518"/><rect x="118" y="218" width="30" height="164" rx="8" fill="#f5c518"/><rect x="452" y="218" width="30" height="164" rx="8" fill="#f5c518"/><path d="M170 430 H430 M210 430 V250 M390 430 V250" stroke="#4a4a4a" stroke-width="18" stroke-linecap="round"/>`;
  }
  if(p.category === 'Gym' && name.includes('colchoneta')) {
    return `<path d="M164 198 H420 C470 198 500 228 500 270 V394 C500 418 482 438 456 438 H180 C130 438 100 408 100 366 V242 C100 218 120 198 164 198 Z" fill="#f5c518"/><path d="M165 198 C126 202 100 220 100 244 C100 270 126 288 165 288 H420 C458 288 500 270 500 244 C500 218 458 198 420 198" fill="none" stroke="#111" stroke-width="14" opacity=".75"/><path d="M160 330 H438" stroke="#111" stroke-width="12" stroke-linecap="round" opacity=".55"/>`;
  }
  if(p.category === 'Gym') {
    return `<rect x="78" y="272" width="68" height="96" rx="14" fill="#f5c518"/><rect x="156" y="238" width="54" height="164" rx="14" fill="#f5c518"/><rect x="214" y="289" width="172" height="22" rx="11" fill="#f5c518"/><rect x="390" y="238" width="54" height="164" rx="14" fill="#f5c518"/><rect x="454" y="272" width="68" height="96" rx="14" fill="#f5c518"/><circle cx="300" cy="300" r="96" fill="none" stroke="#555" stroke-width="12"/>`;
  }
  if(p.category === 'Fútbol' && (name.includes('botines') || name.includes('mercurial'))) {
    return `<path d="M112 352 C178 288 274 260 366 278 C423 289 466 324 512 344 C536 355 544 378 531 397 C518 416 491 426 455 426 H194 C138 426 101 403 94 376 C92 368 98 360 112 352 Z" fill="#f5c518"/><path d="M132 374 C216 354 316 354 414 376 C452 385 484 398 520 404" fill="none" stroke="#111" stroke-width="15" stroke-linecap="round"/><path d="M210 430 L188 478 M288 430 L270 480 M366 430 L382 480 M444 430 L474 476" stroke="#f5c518" stroke-width="14" stroke-linecap="round"/>`;
  }
  if(p.category === 'Fútbol' && name.includes('guantes')) {
    return `<path d="M210 140 C230 140 240 158 240 178 V270 H260 V136 C260 114 296 114 296 136 V270 H316 V150 C316 128 352 128 352 150 V278 H372 V184 C372 162 408 162 408 184 V340 C408 432 350 492 282 492 C218 492 170 448 170 376 V220 C170 198 206 198 206 220 V300 H226 V178 C226 158 190 158 190 178 V316" fill="#f5c518"/><path d="M206 300 C210 358 238 392 300 392 C344 392 374 370 408 340" fill="none" stroke="#111" stroke-width="14" stroke-linecap="round" opacity=".65"/>`;
  }
  if(p.category === 'Fútbol' && name.includes('espinilleras')) {
    return `<path d="M205 126 H395 C384 292 360 416 300 492 C240 416 216 292 205 126 Z" fill="#f5c518"/><path d="M250 172 H350 M235 246 H365 M252 320 H348" stroke="#111" stroke-width="14" stroke-linecap="round" opacity=".7"/>`;
  }
  if(p.category === 'Fútbol') {
    return `<circle cx="300" cy="300" r="152" fill="#f5c518"/><path d="M300 174 L372 226 L344 312 H256 L228 226 Z" fill="#111"/><path d="M300 174 V112 M372 226 L432 205 M344 312 L389 372 M256 312 L211 372 M228 226 L168 205" stroke="#111" stroke-width="12" stroke-linecap="round"/><path d="M184 386 C224 446 376 446 416 386" stroke="#111" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  }
  if(p.category === 'Ciclismo' && name.includes('casco')) {
    return `<path d="M110 326 C128 212 218 142 326 152 C424 161 494 226 514 326 H110 Z" fill="#f5c518"/><path d="M156 326 C188 270 240 242 300 242 C360 242 412 270 444 326 M300 154 V326" stroke="#111" stroke-width="14" stroke-linecap="round" opacity=".65"/><path d="M112 326 H514" stroke="#111" stroke-width="18" stroke-linecap="round"/>`;
  }
  if(p.category === 'Ciclismo' && (name.includes('jersey') || name.includes('maillot'))) {
    return `<path d="M188 150 L252 108 L300 138 L348 108 L412 150 L392 238 L356 224 V462 H244 V224 L208 238 Z" fill="#f5c518"/><path d="M244 258 H356 M244 330 H356 M300 138 V462" stroke="#111" stroke-width="12" opacity=".55"/>`;
  }
  if(p.category === 'Ciclismo' && name.includes('pedales')) {
    return `<circle cx="300" cy="300" r="84" fill="none" stroke="#f5c518" stroke-width="28"/><path d="M300 216 V142 M300 384 V458 M216 300 H142 M384 300 H458" stroke="#f5c518" stroke-width="24" stroke-linecap="round"/><rect x="96" y="274" width="92" height="52" rx="14" fill="#f5c518"/><rect x="412" y="274" width="92" height="52" rx="14" fill="#f5c518"/>`;
  }
  if(p.category === 'Ciclismo') {
    return `<circle cx="185" cy="382" r="78" fill="none" stroke="#f5c518" stroke-width="18"/><circle cx="421" cy="382" r="78" fill="none" stroke="#f5c518" stroke-width="18"/><path d="M185 382 L260 260 H356 L421 382 H298 L260 260 M298 382 L348 230 M330 230 H392 M245 230 H300" fill="none" stroke="#f5c518" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>`;
  }
  if(p.category === 'Outdoor' && name.includes('carpa')) {
    return `<path d="M92 430 L300 150 L508 430 Z" fill="#f5c518"/><path d="M300 150 V430 M300 150 L228 430 M300 150 L372 430" stroke="#111" stroke-width="14" stroke-linecap="round" opacity=".7"/><path d="M160 430 H440" stroke="#111" stroke-width="18" stroke-linecap="round"/>`;
  }
  if(p.category === 'Outdoor' && name.includes('mochila')) {
    return `<rect x="188" y="146" width="224" height="330" rx="48" fill="#f5c518"/><path d="M226 146 C232 96 368 96 374 146 M188 258 H412 M238 338 H362 M218 476 L198 526 M382 476 L402 526" stroke="#111" stroke-width="14" stroke-linecap="round" opacity=".65"/><rect x="230" y="312" width="140" height="92" rx="20" fill="#111" opacity=".25"/>`;
  }
  if(p.category === 'Outdoor' && name.includes('saco')) {
    return `<rect x="184" y="96" width="232" height="410" rx="92" fill="#f5c518"/><path d="M252 110 C228 150 214 196 214 254 V430 M300 100 V506 M358 126 C382 182 392 238 386 304" stroke="#111" stroke-width="13" stroke-linecap="round" opacity=".55"/>`;
  }
  if(p.category === 'Outdoor' && name.includes('bastones')) {
    return `<path d="M228 120 L172 492 M372 120 L428 492" stroke="#f5c518" stroke-width="18" stroke-linecap="round"/><path d="M198 258 H258 M342 258 H402 M154 492 H194 M406 492 H446" stroke="#f5c518" stroke-width="14" stroke-linecap="round"/><path d="M226 120 H270 M330 120 H374" stroke="#111" stroke-width="10" stroke-linecap="round"/>`;
  }
  return `<path d="M190 155 L248 112 L300 142 L352 112 L410 155 L386 244 L350 228 V472 H250 V228 L214 244 Z" fill="#f5c518"/><path d="M250 298 H350 M250 376 H350" stroke="#111" stroke-width="12" stroke-linecap="round" opacity=".6"/>`;
}

function createProductImage(p) {
  const title = svgText(p.name);
  const category = svgText(p.category.toUpperCase());
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="${title}">
    <rect width="600" height="600" fill="#1f1f1f"/>
    <circle cx="480" cy="116" r="58" fill="#f5c518" opacity=".22"/>
    <circle cx="120" cy="502" r="76" fill="#f5c518" opacity=".1"/>
    <g>${productArt(p)}</g>
    <rect x="38" y="38" width="168" height="42" rx="10" fill="#f5c518"/>
    <text x="122" y="65" fill="#000" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="800" letter-spacing="1">${category}</text>
    <text x="300" y="548" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="800">${title}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProductImage(productOrId) {
  const product = typeof productOrId === 'object' ? productOrId : PRODUCTS.find(p => p.id === productOrId);
  return product?.image || product?.generatedImage || 'assets/products/placeholder.svg';
}

function getProductFallbackImage(productOrId) {
  const product = typeof productOrId === 'object' ? productOrId : PRODUCTS.find(p => p.id === productOrId);
  return product?.generatedImage || 'assets/products/placeholder.svg';
}

function fmtPrice(p) {
  return new Intl.NumberFormat('es-CO', {style:'currency',currency:'COP',minimumFractionDigits:0}).format(p);
}
function saveCart() { localStorage.setItem('ts_cart', JSON.stringify(cart)); }
function saveOrders() { localStorage.setItem('ts_orders', JSON.stringify(orders)); }

async function apiFetch(path, options = {}) {
  const response = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if(!response.ok) throw new Error(data.error || `Error HTTP ${response.status}`);
  return data;
}

function showToast(msg, type='success') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  const container = $('toast-container');
  if(!container) return;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function timeStr() {
  return new Date().toLocaleTimeString('es-ES', {hour:'2-digit', minute:'2-digit'});
}

// =================== MODALS ===================
function openModal(id) {
  const modal = $(id);
  if(!modal) return;
  modal.classList.add('open');
  if(id === 'cart-modal') renderCart();
  if(id === 'checkout-modal') renderCheckout();
  if(id === 'orders-modal') renderOrders();
}
function closeModal(id) {
  const modal = $(id);
  if(modal) modal.classList.remove('open');
}

// =================== NAV ===================
function openNav() {
  $('nav-overlay')?.classList.add('open');
  $('nav-drawer')?.classList.add('open');
}
function closeNav() {
  $('nav-overlay')?.classList.remove('open');
  $('nav-drawer')?.classList.remove('open');
}

// =================== FILTERS ===================
function toggleFilters() {
  filterOpen = !filterOpen;
  document.getElementById('filter-panel').classList.toggle('open', filterOpen);
}

function updatePriceLabel() {
  const v = document.getElementById('price-range').value;
  document.getElementById('price-label').textContent = fmtPrice(parseInt(v));
}

function filterCategory(cat) {
  selectedCategory = cat;
  applyFilters();
}

function resetFilters() {
  selectedCategory = null;
  document.getElementById('search-input').value = '';
  document.getElementById('sort-select').value = 'relevance';
  document.getElementById('price-range').value = 8000000;
  updatePriceLabel();
  applyFilters();
  window.scrollTo({top:0, behavior:'smooth'});
}

function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const sort = document.getElementById('sort-select').value;
  const maxPrice = parseInt(document.getElementById('price-range').value);

  let products = [...PRODUCTS];

  if(selectedCategory) products = products.filter(p => p.category === selectedCategory);
  if(search) products = products.filter(p => p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search) || p.category.toLowerCase().includes(search));
  products = products.filter(p => p.price <= maxPrice);

  if(sort === 'price-asc') products.sort((a,b) => a.price - b.price);
  else if(sort === 'price-desc') products.sort((a,b) => b.price - a.price);
  else if(sort === 'name') products.sort((a,b) => a.name.localeCompare(b.name));

  // Update heading
  let heading = 'Productos Destacados';
  if(search) heading = `Resultados para "${search}"`;
  else if(selectedCategory) heading = selectedCategory;
  document.getElementById('section-heading').textContent = heading;

  // Tags
  const searchTag = document.getElementById('active-search-tag');
  const catTag = document.getElementById('active-cat-tag');
  const clearBtn = document.getElementById('clear-filters-btn');
  searchTag.style.display = search ? 'inline-flex' : 'none';
  searchTag.textContent = `🔍 "${search}"`;
  catTag.style.display = selectedCategory ? 'inline-flex' : 'none';
  catTag.textContent = selectedCategory || '';
  clearBtn.style.display = (search || selectedCategory || maxPrice < 8000000) ? 'inline-flex' : 'none';

  renderProducts(products);
}

// =================== PRODUCTS ===================
const wishlist = new Set();
const qtySelectors = {};

PRODUCTS.forEach(product => {
  product.generatedImage = createProductImage(product);
});

function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('empty-state');
  if(!products.length) {
    grid.innerHTML = ''; empty.style.display = 'block'; return;
  }
  empty.style.display = 'none';
  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openProductDetail('${p.id}')">
      <div class="product-img">
        <img src="${getProductImage(p)}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${getProductFallbackImage(p)}'">
        <span class="product-category-tag">${p.category}</span>
        <button class="wishlist-btn ${wishlist.has(p.id)?'active':''}" onclick="toggleWishlist(event,'${p.id}')">
          <svg width="16" height="16" fill="${wishlist.has(p.id)?'#ef4444':'none'}" stroke="${wishlist.has(p.id)?'#ef4444':'currentColor'}" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${fmtPrice(p.price)}</div>
        <div class="product-actions" id="actions-${p.id}">
          <button class="btn btn-outline btn-sm btn-full" style="border-color:var(--gold);color:var(--gold)" onclick="event.stopPropagation(); showQty('${p.id}')">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Agregar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function showQty(id) {
  qtySelectors[id] = qtySelectors[id] || 1;
  const el = document.getElementById(`actions-${id}`);
  if(!el) return;
  el.innerHTML = `
    <div class="qty-selector">
      <div class="qty-controls">
        <button class="qty-btn" onclick="event.stopPropagation(); changeQty('${id}',-1)">−</button>
        <span class="qty-num" id="qty-${id}">${qtySelectors[id]}</span>
        <button class="qty-btn" onclick="event.stopPropagation(); changeQty('${id}',1)">+</button>
      </div>
      <div class="qty-row">
        <button class="btn btn-dark btn-sm" style="flex:1" onclick="event.stopPropagation(); cancelQty('${id}')">Cancelar</button>
        <button class="btn btn-gold btn-sm" style="flex:1" onclick="event.stopPropagation(); confirmAdd('${id}')">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          Agregar (${qtySelectors[id]})
        </button>
      </div>
    </div>`;
}

function changeQty(id, delta) {
  qtySelectors[id] = Math.max(1, Math.min(99, (qtySelectors[id]||1) + delta));
  const el = document.getElementById(`qty-${id}`);
  if(el) el.textContent = qtySelectors[id];
  // update button text
  const btn = document.querySelector(`#actions-${id} .btn-gold`);
  if(btn) btn.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg> Agregar (${qtySelectors[id]})`;
}

function cancelQty(id) {
  qtySelectors[id] = 1;
  const el = document.getElementById(`actions-${id}`);
  if(!el) return;
  el.innerHTML = `<button class="btn btn-outline btn-sm btn-full" style="border-color:var(--gold);color:var(--gold)" onclick="event.stopPropagation(); showQty('${id}')">
    <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
    Agregar</button>`;
}

function confirmAdd(id) {
  const qty = qtySelectors[id] || 1;
  addToCart(id, qty);
  cancelQty(id);
}

function addToCart(id, qty=1) {
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return;
  const existing = cart.find(i => i.id === id);
  if(existing) existing.quantity += qty;
  else cart.push({id: product.id, name: product.name, price: product.price, quantity: qty, image: getProductImage(product)});
  saveCart();
  updateCartBadge();
  showToast(qty > 1 ? `${qty} productos agregados al carrito` : 'Producto agregado al carrito');
}

function updateCartBadge() {
  const count = cart.reduce((s,i) => s + i.quantity, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  if(wishlist.has(id)) wishlist.delete(id);
  else { wishlist.add(id); showToast('Agregado a favoritos ❤️'); }
  applyFilters();
}

function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  document.getElementById('detail-modal-title').textContent = p.name;
  document.getElementById('detail-body').innerHTML = `
    <div class="detail-grid">
      <div class="detail-img">
        <img src="${getProductImage(p)}" alt="${p.name}" onerror="this.onerror=null;this.src='${getProductFallbackImage(p)}'">
      </div>
      <div>
        <span class="detail-cat">${p.category}</span>
        <div class="detail-name">${p.name}</div>
        <div class="detail-price">${fmtPrice(p.price)}</div>
        <p class="detail-desc">${p.description}</p>
        <div class="detail-stock">✓ En stock (${p.stock} disponibles)</div>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap">
          <button class="mbtn mbtn-black" style="flex:1; min-width:140px" onclick="addToCart('${p.id}',1); closeModal('detail-modal')">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>`;
  openModal('detail-modal');
}

// =================== CART ===================
function renderCart() {
  const body = document.getElementById('cart-body');
  if(!cart.length) {
    body.innerHTML = `<div style="text-align:center; padding:3rem 1rem">
      <svg style="width:64px;height:64px;color:#d1d5db;margin:0 auto 1rem;display:block" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>
      <h3 style="font-size:1.1rem;font-weight:700;color:#111;margin-bottom:0.5rem">Tu carrito está vacío</h3>
      <p style="color:#9ca3af;margin-bottom:1.5rem">Agrega productos para comenzar tu compra</p>
      <button class="mbtn mbtn-black" onclick="closeModal('cart-modal')">Continuar comprando</button>
    </div>`; return;
  }
  const total = cart.reduce((s,i) => s + i.price * i.quantity, 0);
  body.innerHTML = `
    <div style="max-height:360px; overflow-y:auto">
      ${cart.map(item => `
        <div class="cart-item">
          <img src="${getProductImage(item.id)}" alt="${item.name}" onerror="this.onerror=null;this.src='${getProductFallbackImage(item.id)}'">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${fmtPrice(item.price)}</div>
            <div class="cart-qty">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', ${item.quantity-1})">−</button>
              <span class="cart-qty-num">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', ${item.quantity+1})">+</button>
            </div>
          </div>
          <div style="text-align:right; display:flex; flex-direction:column; align-items:flex-end; gap:0.5rem">
            <div style="font-size:0.8rem;color:#9ca3af">Subtotal</div>
            <div style="font-weight:700;font-size:0.95rem;color:#111">${fmtPrice(item.price*item.quantity)}</div>
            <button class="cart-remove" onclick="removeFromCart('${item.id}')">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>`).join('')}
    </div>
    <div class="cart-total">
      <div class="cart-total-row"><span>Subtotal</span><span>${fmtPrice(total)}</span></div>
      <div class="cart-total-row"><span>Envío</span><span class="free-shipping">Gratis</span></div>
      <div class="cart-total-main"><span>Total</span><span>${fmtPrice(total)}</span></div>
      <button class="mbtn mbtn-black" onclick="handleCheckout()">Proceder al Pago</button>
    </div>`;
}

function updateCartQty(id, qty) {
  if(qty < 1) return;
  const item = cart.find(i => i.id === id);
  if(item) item.quantity = qty;
  saveCart(); updateCartBadge(); renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCart();
  showToast('Producto eliminado del carrito', 'error');
}

function handleCheckout() {
  if(!cart.length) { showToast('Tu carrito está vacío', 'error'); return; }
  if(!currentUser) {
    closeModal('cart-modal');
    pendingCheckout = true;
    openModal('login-modal');
    showToast('Por favor inicia sesión para continuar', 'info');
    return;
  }
  closeModal('cart-modal');
  openModal('checkout-modal');
}

// =================== AUTH ===================
let loginMode = 'login';

function switchLoginTab(mode) {
  loginMode = mode;
  document.getElementById('tab-login').classList.toggle('active', mode==='login');
  document.getElementById('tab-register').classList.toggle('active', mode==='register');
  document.getElementById('register-name-group').style.display = mode==='register'?'block':'none';
  document.getElementById('forgot-row').style.display = mode==='login'?'block':'none';
  document.getElementById('login-btn-text').textContent = mode==='login'?'Iniciar Sesión':'Crear Cuenta';
  document.getElementById('login-modal-title').textContent = mode==='login'?'Iniciar Sesión':'Crear Cuenta';
}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if(!email || !password) { showToast('Por favor completa todos los campos', 'error'); return; }
  if(!/\S+@\S+\.\S+/.test(email)) { showToast('Email inválido', 'error'); return; }
  if(password.length < 6) { showToast('La contraseña debe tener al menos 6 caracteres', 'error'); return; }

  if(loginMode === 'register') {
    const name = document.getElementById('reg-name').value.trim();
    if(!name) { showToast('El nombre es requerido', 'error'); return; }
    currentUser = {id: Date.now().toString(), email, name, role:'cliente', createdAt: new Date().toISOString()};
    localStorage.setItem('ts_user', JSON.stringify(currentUser));
    showToast('¡Cuenta creada exitosamente!');
  } else {
    // Simple demo login — accept any existing or new user
    const saved = JSON.parse(localStorage.getItem('ts_user') || 'null');
    if(saved && saved.email === email) currentUser = saved;
    else currentUser = {id: Date.now().toString(), email, name: email.split('@')[0], role:'cliente', createdAt: new Date().toISOString()};
    localStorage.setItem('ts_user', JSON.stringify(currentUser));
    showToast('¡Inicio de sesión exitoso!');
  }

  updateAuthUI();
  closeModal('login-modal');
  if(pendingCheckout) { pendingCheckout = false; setTimeout(() => openModal('checkout-modal'), 300); }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('ts_user');
  updateAuthUI();
  showToast('Sesión cerrada');
}

function updateAuthUI() {
  const isLogged = !!currentUser;
  const guestEl = $('header-guest');
  const userEl = $('header-user');
  const usernameEl = $('header-username');
  const navLogin = $('nav-login-btn');
  const navOrders = $('nav-orders-btn');
  const navLogout = $('nav-logout-btn');
  if(guestEl) guestEl.style.display = isLogged ? 'none' : '';
  if(userEl) userEl.style.display = isLogged ? 'flex' : 'none';
  if(isLogged && usernameEl) usernameEl.textContent = currentUser.name || currentUser.email || 'Usuario';
  if(navLogin) navLogin.style.display = isLogged ? 'none' : '';
  if(navOrders) navOrders.style.display = isLogged ? 'flex' : 'none';
  if(navLogout) navLogout.style.display = isLogged ? 'flex' : 'none';
}

// =================== CHECKOUT ===================
function renderCheckout() {
  const total = cart.reduce((s,i) => s + i.price * i.quantity, 0);
  document.getElementById('checkout-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
      <div>
        <div class="checkout-section">
          <h3>Datos personales</h3>
          <div class="form-row">
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Nombre</label><input class="form-input" type="text" id="co-name" value="${currentUser?.name||''}" placeholder="Nombre completo"></div>
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Email</label><input class="form-input" type="email" id="co-email" value="${currentUser?.email||''}" placeholder="tu@email.com"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Teléfono</label><input class="form-input" type="tel" id="co-phone" placeholder="+57 300 000 0000"></div>
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Tipo documento</label><select class="form-select" id="co-doc-type"><option>CC</option><option>CE</option><option>NIT</option></select></div>
          </div>
          <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">N° documento</label><input class="form-input" type="text" id="co-doc" placeholder="1234567890"></div>
        </div>
        <div class="checkout-section">
          <h3>Dirección de envío</h3>
          <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Dirección</label><input class="form-input" type="text" id="co-addr" placeholder="Calle, carrera, número"></div>
          <div class="form-row">
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Ciudad</label><input class="form-input" type="text" id="co-city" placeholder="Ciudad"></div>
            <div class="form-group"><label class="form-group label" style="font-size:.8rem;font-weight:600;color:#374151;display:block;margin-bottom:.35rem">Departamento</label><input class="form-input" type="text" id="co-state" placeholder="Departamento"></div>
          </div>
        </div>
        <div class="checkout-section">
          <h3>Método de pago</h3>
          <div style="display:flex;flex-direction:column;gap:0.5rem">
            ${['💳 Tarjeta de crédito/débito','🏦 PSE – Pagos en línea','💵 Efectivo (Efecty)','📱 Nequi / Daviplata'].map((m,i)=>`
              <label style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border:1.5px solid ${i===0?'#111':'#e5e7eb'};border-radius:8px;cursor:pointer;font-size:0.9rem;font-weight:${i===0?700:400}">
                <input type="radio" name="payment" value="${i}" ${i===0?'checked':''} style="accent-color:#111"> ${m}
              </label>`).join('')}
          </div>
        </div>
      </div>
      <div>
        <div class="checkout-section">
          <h3>Resumen del pedido</h3>
          <div class="order-summary">
            ${cart.map(i=>`<div class="order-summary-item"><span>${i.name} x${i.quantity}</span><span>${fmtPrice(i.price*i.quantity)}</span></div>`).join('')}
            <div class="order-total"><span>Total</span><span>${fmtPrice(total)}</span></div>
          </div>
          <div style="margin-top:1rem; padding:0.85rem; background:#dcfce7; border-radius:8px; font-size:0.85rem; color:#166534; font-weight:600">
            ✓ Envío gratuito a toda Colombia
          </div>
        </div>
        <button class="mbtn mbtn-black" onclick="submitOrder()">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Confirmar Pedido
        </button>
        <p style="text-align:center;color:#9ca3af;font-size:0.75rem;margin-top:0.75rem">🔒 Transacción segura y encriptada</p>
      </div>
    </div>`;
}

function submitOrder() {
  const name = $('co-name')?.value.trim();
  const email = $('co-email')?.value.trim();
  const phone = $('co-phone')?.value.trim();
  const doc = $('co-doc')?.value.trim();
  const addr = $('co-addr')?.value.trim();
  const city = $('co-city')?.value.trim();
  const state = $('co-state')?.value.trim();
  if(!name||!email||!phone||!doc||!addr||!city||!state) { showToast('Por favor completa todos los campos', 'error'); return; }
  if(!isEmail(email)) { showToast('Email inválido', 'error'); return; }
  if(phone.replace(/\D/g, '').length < 7) { showToast('Teléfono inválido', 'error'); return; }

  const orderNum = 'TS-' + Math.random().toString(36).substr(2,6).toUpperCase();
  const trackingNum = 'TRK' + Math.random().toString(36).substr(2,8).toUpperCase();
  const total = cart.reduce((s,i) => s + i.price * i.quantity, 0);
  const order = {
    id: Date.now().toString(), orderNumber: orderNum, trackingNumber: trackingNum,
    status: 'confirmed', date: new Date().toLocaleDateString('es-CO'),
    total, items: [...cart], userId: currentUser?.id
  };
  orders.unshift(order);
  saveOrders();
  apiFetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify(order)
  }).catch(error => console.warn('[API] Pedido guardado solo localmente:', error.message));
  cart = []; saveCart(); updateCartBadge();
  closeModal('checkout-modal');
  showToast(`¡Pedido ${orderNum} confirmado! Rastreo: ${trackingNum}`);
}

// =================== ORDERS ===================
function openMyOrders() {
  if(!currentUser) { openModal('login-modal'); return; }
  openModal('orders-modal');
}

function renderOrders() {
  const body = document.getElementById('orders-body');
  const myOrders = orders.filter(o => o.userId === currentUser?.id);
  if(!myOrders.length) {
    body.innerHTML = `<div style="text-align:center;padding:3rem 1rem"><p style="color:#9ca3af">Aún no tienes pedidos realizados.</p></div>`;
    return;
  }
  const statusLabel = {confirmed:'Confirmado',dispatched:'Despachado',in_transit:'En tránsito',delivered:'Entregado',cancelled:'Cancelado'};
  const statusClass = {confirmed:'status-confirmed',in_transit:'status-transit',delivered:'status-delivered',cancelled:'status-cancelled'};
  body.innerHTML = myOrders.map(o => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <div class="order-number">#${o.orderNumber}</div>
          <div class="order-date">${o.date}</div>
        </div>
        <span class="order-status-badge ${statusClass[o.status]||'status-confirmed'}">${statusLabel[o.status]||o.status}</span>
      </div>
      <div class="order-items-mini">${o.items.map(i => `${i.name} x${i.quantity}`).join(' • ')}</div>
      <div class="order-total-line">
        <span style="color:#9ca3af;font-size:0.85rem">Rastreo: <strong style="color:#374151">${o.trackingNumber}</strong></span>
        <strong>${fmtPrice(o.total)}</strong>
      </div>
    </div>`).join('');
}

// =================== TRACKING ===================
function searchTracking() {
  const num = document.getElementById('tracking-input').value.trim();
  if(!num) { showToast('Por favor ingresa un número de seguimiento', 'error'); return; }
  const btn = document.getElementById('tracking-btn');
  btn.disabled = true; btn.textContent = 'Buscando...';
  setTimeout(async () => {
    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="M21 21l-4.35-4.35"/></svg> Rastrear pedido`;
    let order = orders.find(o => o.trackingNumber === num);
    if(!order) {
      try {
        const remote = await apiFetch(`/api/orders/${encodeURIComponent(num)}`);
        order = remote.order;
      } catch(error) {
        console.warn('[API] Rastreo remoto no disponible:', error.message);
      }
    }
    if(order) {
      const statusLabel = {confirmed:'Confirmado',dispatched:'Despachado',in_transit:'En tránsito',delivered:'Entregado',cancelled:'Cancelado'};
      showToast(`Pedido #${order.orderNumber} — Estado: ${statusLabel[order.status]||order.status}`);
    } else {
      showToast('No se encontró ningún pedido con ese número', 'error');
    }
  }, 1200);
}

// =================== SUPPORT ===================
function submitSupport() {
  const name = document.getElementById('support-name').value.trim();
  const email = document.getElementById('support-email').value.trim();
  const type = document.getElementById('support-type').value;
  const desc = document.getElementById('support-desc').value.trim();
  if(!name||!email||!type||!desc) { showToast('Por favor completa todos los campos', 'error'); return; }
  if(!isEmail(email)) { showToast('Email inválido', 'error'); return; }
  apiFetch('/api/support', {
    method: 'POST',
    body: JSON.stringify({ name, email, type, desc })
  }).catch(error => console.warn('[API] Ticket guardado solo en sesión local:', error.message));
  showToast('¡Ticket de soporte técnico creado! Te contactaremos pronto.');
  document.getElementById('support-name').value = '';
  document.getElementById('support-email').value = '';
  document.getElementById('support-type').value = '';
  document.getElementById('support-desc').value = '';
  closeModal('support-modal');
}

// =================== HELP ===================
const helpContent = {
  faq: {
    title: 'Preguntas Frecuentes',
    html: `
      <div class="faq-item"><h3>✅ ¿Cómo puedo rastrear mi pedido?</h3><p>Una vez enviado, recibirás un correo con el número de seguimiento. Puedes rastrear tu pedido usando ese código en la sección "Rastrear Pedido".</p></div>
      <div class="faq-item"><h3>✅ ¿Cuánto tiempo tarda la entrega?</h3><ul><li>Bogotá: 1-2 días hábiles</li><li>Principales ciudades: 2-4 días hábiles</li><li>Resto del país: 4-7 días hábiles</li></ul></div>
      <div class="faq-item"><h3>✅ ¿Puedo cancelar mi pedido?</h3><p>Sí, dentro de las primeras 2 horas. Contáctanos por WhatsApp o email.</p></div>
      <div class="faq-item"><h3>✅ ¿Los productos son originales?</h3><p>Todos nuestros productos son 100% originales y cuentan con garantía oficial del fabricante.</p></div>
      <div class="faq-item"><h3>✅ ¿Tienen tienda física?</h3><p>Somos 100% online, pero puedes visitar nuestro showroom en Bogotá con cita previa por WhatsApp.</p></div>`
  },
  shipping: {
    title: 'Envíos y Devoluciones',
    html: `
      <div class="faq-item"><h3>🚚 Tiempos de envío</h3><ul><li>Bogotá: 1-2 días hábiles</li><li>Medellín, Cali, Barranquilla: 2-3 días hábiles</li><li>Ciudades intermedias: 3-5 días hábiles</li><li>Municipios: 5-7 días hábiles</li></ul></div>
      <div class="faq-item"><h3>💰 Costo de envío</h3><p>Envío gratis en todos los pedidos sin monto mínimo.</p></div>
      <div class="faq-item"><h3>↩️ Política de devoluciones</h3><p>Tienes 30 días para devolver cualquier producto en su estado original. Contáctanos por email a info@tempestsport.co.</p></div>
      <div class="faq-item"><h3>🔄 Cambios</h3><p>Puedes cambiar talla o color dentro de los 15 días siguientes a la recepción del pedido.</p></div>`
  },
  sizes: {
    title: 'Guía de Tallas',
    html: `
      <p style="margin-bottom:1rem;color:#374151;font-size:0.9rem">Usa esta guía para encontrar tu talla perfecta. Si estás entre dos tallas, te recomendamos ir a la mayor.</p>
      <h4 style="font-weight:700;margin-bottom:0.75rem">Zapatillas / Calzado</h4>
      <table class="sizes-table" style="margin-bottom:1.5rem">
        <thead><tr><th>Colombia</th><th>US Hombre</th><th>US Mujer</th><th>EUR</th><th>UK</th></tr></thead>
        <tbody>
          <tr><td>36</td><td>4</td><td>5.5</td><td>36</td><td>3.5</td></tr>
          <tr><td>37</td><td>5</td><td>6.5</td><td>37</td><td>4.5</td></tr>
          <tr><td>38</td><td>6</td><td>7.5</td><td>38</td><td>5.5</td></tr>
          <tr><td>39</td><td>7</td><td>8.5</td><td>39</td><td>6.5</td></tr>
          <tr><td>40</td><td>7.5</td><td>9</td><td>40</td><td>7</td></tr>
          <tr><td>41</td><td>8</td><td>9.5</td><td>41</td><td>7.5</td></tr>
          <tr><td>42</td><td>9</td><td>10.5</td><td>42</td><td>8.5</td></tr>
          <tr><td>43</td><td>10</td><td>11.5</td><td>43</td><td>9.5</td></tr>
          <tr><td>44</td><td>11</td><td>12.5</td><td>44</td><td>10.5</td></tr>
        </tbody>
      </table>
      <h4 style="font-weight:700;margin-bottom:0.75rem">Ropa deportiva</h4>
      <table class="sizes-table">
        <thead><tr><th>Talla</th><th>Pecho (cm)</th><th>Cintura (cm)</th><th>Cadera (cm)</th></tr></thead>
        <tbody>
          <tr><td>XS</td><td>82-86</td><td>62-66</td><td>88-92</td></tr>
          <tr><td>S</td><td>86-90</td><td>66-70</td><td>92-96</td></tr>
          <tr><td>M</td><td>90-94</td><td>70-74</td><td>96-100</td></tr>
          <tr><td>L</td><td>94-98</td><td>74-78</td><td>100-104</td></tr>
          <tr><td>XL</td><td>98-102</td><td>78-82</td><td>104-108</td></tr>
          <tr><td>XXL</td><td>102-108</td><td>82-88</td><td>108-114</td></tr>
        </tbody>
      </table>`
  },
  payment: {
    title: 'Métodos de Pago',
    html: `
      <div class="payment-method"><div class="payment-icon">💳</div><div class="payment-info"><h4>Tarjeta de crédito/débito</h4><p>Visa, Mastercard, American Express. Hasta 36 cuotas.</p></div></div>
      <div class="payment-method"><div class="payment-icon">🏦</div><div class="payment-info"><h4>PSE</h4><p>Débito directo a tu cuenta bancaria. Sin comisiones.</p></div></div>
      <div class="payment-method"><div class="payment-icon">💵</div><div class="payment-info"><h4>Efecty / Baloto</h4><p>Pago en efectivo en más de 8.000 puntos en Colombia.</p></div></div>
      <div class="payment-method"><div class="payment-icon">📱</div><div class="payment-info"><h4>Nequi / Daviplata</h4><p>Transferencia instantánea desde tu billetera digital.</p></div></div>
      <div class="payment-method"><div class="payment-icon">💰</div><div class="payment-info"><h4>Transferencia bancaria</h4><p>Bancolombia, Davivienda, BBVA. Datos disponibles al finalizar la compra.</p></div></div>
      <div style="margin-top:1rem;padding:0.85rem;background:#f0fdf4;border-radius:8px;font-size:0.85rem;color:#166534">🔒 Todas las transacciones están encriptadas con SSL de 256 bits.</div>`
  }
};

function openHelp(type) {
  const h = helpContent[type];
  if(!h) return;
  document.getElementById('help-modal-title').textContent = h.title;
  document.getElementById('help-body').innerHTML = h.html;
  openModal('help-modal');
}

// =================== CHAT ===================
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-window').classList.toggle('open', chatOpen);
  document.getElementById('chat-fab').style.display = chatOpen ? 'none' : 'flex';
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if(!text) return;
  const msgs = document.getElementById('chat-messages');
  msgs.innerHTML += `<div class="chat-msg user"><div class="chat-bubble">${text}</div><div class="chat-time">${timeStr()}</div></div>`;
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(() => {
    msgs.innerHTML += `<div class="chat-msg support"><div class="chat-bubble">Gracias por tu mensaje. Un agente de soporte te responderá pronto.</div><div class="chat-time">${timeStr()}</div></div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 1000);
}

// =================== WHATSAPP ===================
function openWhatsApp() {
  window.open('https://wa.me/573001234567?text=' + encodeURIComponent('¡Hola! Me gustaría obtener más información sobre TEMPEST SPORT'), '_blank');
}

// =================== NEWSLETTER ===================
function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email').value.trim();
  if(!isEmail(email)) { showToast('Por favor ingresa un email válido', 'error'); return; }
  apiFetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email })
  }).catch(error => console.warn('[API] Suscripción remota no disponible:', error.message));
  showToast('¡Suscrito! Recibirás tu código de 10% de descuento pronto 🎉');
  document.getElementById('newsletter-email').value = '';
}

// =================== INIT ===================
function setupHeaderWishlistButton() {
  const headerWishlist = document.querySelector('.header-actions .header-btn:not([onclick])');
  if(!headerWishlist) return;
  headerWishlist.type = 'button';
  headerWishlist.title = 'Ver favoritos';
  headerWishlist.addEventListener('click', () => {
    if(!wishlist.size) {
      showToast('Aún no tienes productos favoritos', 'info');
      return;
    }
    selectedCategory = null;
    const favoriteProducts = PRODUCTS.filter(p => wishlist.has(p.id));
    $('section-heading').textContent = 'Favoritos';
    $('active-search-tag').style.display = 'none';
    $('active-cat-tag').style.display = 'inline-flex';
    $('active-cat-tag').textContent = 'Favoritos';
    $('clear-filters-btn').style.display = 'inline-flex';
    renderProducts(favoriteProducts);
    $('products-section')?.scrollIntoView({behavior:'smooth'});
  });
}

function setupPlaceholderLinks() {
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const label = link.textContent.trim().toLowerCase();
      if(label.includes('contacto')) openModal('support-modal');
      else showToast('Sección informativa en preparación', 'info');
    });
  });
}

function setupHeroImage() {
  const heroImg = document.querySelector('.banner img');
  if(!heroImg) return;
  heroImg.onerror = () => {
    heroImg.onerror = null;
    heroImg.src = 'assets/banner.svg';
  };
  heroImg.src = HERO_IMAGE;
}

function setupDealImage() {
  const dealImg = document.querySelector('.weekly-deal-img img');
  if(!dealImg) return;
  dealImg.onerror = () => {
    dealImg.onerror = null;
    dealImg.src = 'assets/deal.svg';
  };
  dealImg.src = DEAL_IMAGE;
}

async function loadRemoteData() {
  try {
    const health = await apiFetch('/api/health');
    remoteDbReady = !!health.database?.connected;

    if(!remoteDbReady) {
      console.info('[API] Base remota no configurada:', health.database?.message);
      return;
    }

    const data = await apiFetch('/api/products');
    if(Array.isArray(data.products) && data.products.length) {
      PRODUCTS = data.products.map(product => ({
        ...product,
        id: String(product.id)
      }));
      PRODUCTS.forEach(product => {
        product.generatedImage = createProductImage(product);
      });
      applyFilters();
    }
  } catch(error) {
    console.warn('[API] No se pudo cargar información remota:', error.message);
  }
}

function initApp() {
  const chatTime = $('chat-init-time');
  if(chatTime) chatTime.textContent = timeStr();
  setupHeroImage();
  setupDealImage();
  setupHeaderWishlistButton();
  setupPlaceholderLinks();
  updateCartBadge();
  updateAuthUI();
  applyFilters();
  loadRemoteData();
}

if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
