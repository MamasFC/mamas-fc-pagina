export interface Partido {
  rival: string;
  fecha: string;
  tipo: 'Liga Jrs' | 'Copa Jrs' | 'Amistoso' | 'Express';
  local: boolean;
  resultado: string; // ej: "3 - 1"
  outcome: 'V' | 'E' | 'P';
}

export const todosLosPartidos: Partido[] = [
  {
    rival: "White Panters King",
    fecha: "11 Feb 2026",
    tipo: "Amistoso",
    local: false,
    resultado: "1 - 1",
    outcome: "E",
  },
  {
    rival: "Diblos Rojos",
    fecha: "11 Feb 2026",
    tipo: "Amistoso",
    local: false,
    resultado: "2 - 3",
    outcome: "V",
  },
  {
    rival: "White Panters King",
    fecha: "11 Feb 2026",
    tipo: "Amistoso",
    local: false,
    resultado: "0 - 0",
    outcome: "E",
  },
  // Agrega más si quieres (para probar "ver todos")
  {
    rival: "Pegeche",
    fecha: "17 Ene 2026",
    tipo: "Express",
    local: false,
    resultado: "2 - 4",
    outcome: "P",
  },
  {
    rival: "Galaxy FC",
    fecha: "17 Ene 2026",
    tipo: "Express",
    local: false,
    resultado: "0 - 5",
    outcome: "V",
  },

  {
    rival: "Laira FC",
    fecha: "18 Dic 2025",
    tipo: "Liga Jrs",
    local: false,
    resultado: "5 - 2",
    outcome: "P",
  },

  {
    rival: "Jogo Bonito",
    fecha: "11 Dic 2025",
    tipo: "Liga Jrs",
    local: false,
    resultado: "0 - 4",
    outcome: "V",
  },

  {
    rival: "Aguilas del Condor",
    fecha: "2 Dic 2025",
    tipo: "Liga Jrs",
    local: false,
    resultado: "1 - 5",
    outcome: "V",
  },
];

export const ultimosPartidos = todosLosPartidos.slice(0, 3);

// ... (mantén los partidos anteriores)

// Tablas
export interface Equipo {
  pos: number;
  nombre: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  dg: number;
  pts: number;
  proximoLogo?: string;  // ruta al logo del rival (solo para Mamas FC)
}

export const tablaJRS: Equipo[] = [
  { pos: 1, nombre: 'Mamas FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 2, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 3, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 4, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 5, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 6, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 7, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 8, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 9, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 10, nombre: '-', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
];

export const tablaPegeche: Equipo[] = [
  { pos: 1, nombre: 'Backyardigans', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0,
    proximoLogo: '/images/jugadores/escudos/Monogamia.jpg'
   },
  
  { 
  pos: 2, 
  nombre: 'Mamas FC', 
  pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0,
  proximoLogo: '/images/jugadores/escudos/FSN.jpg'  // cambia por el logo real del rival
},
 
{ pos: 3, nombre: 'Diablos Rojos', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0,
      proximoLogo: '/images/jugadores/escudos/mch.jpg'},
  
      { pos: 4, nombre: 'Monogamia FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  
      { pos: 5, nombre: 'Hawks FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0,  
     proximoLogo: '/images/jugadores/escudos/LDR.jpg'},
  
     { pos: 6, nombre: 'Furros Snowers', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0,
    proximoLogo: '/images/jugadores/escudos/White_Black_Gold_Circle_Modern_Football_Club_Logo-removebg-preview.png' },
  
];

// Para Torneo JRS (dos grupos)
export const grupoA: Equipo[] = [
  { pos: 1, nombre: 'Mamas FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 2, nombre: 'Valunir FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 3, nombre: 'Galaxy FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 4, nombre: 'Los Diablos Rojos', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 5, nombre: 'Cornudos FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 6, nombre: 'Monogamia FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
];

export const grupoB: Equipo[] = [
  { pos: 1, nombre: 'Laira FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 2, nombre: 'Furros Snowers', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 3, nombre: 'Goden Fedi FC', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 4, nombre: 'White Panters King', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 5, nombre: 'BarceLoan', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
  { pos: 6, nombre: 'Montevideo Wanderers', pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 },
];





// ... (mantén partidos y tablas anteriores)

export interface Jugador {
  id: number;
  nombre: string;
  apodo?: string;
  posicion: string;
  partidos: number;
  goles: number;
  asistencias: number;
  vallasInvictas?: number; // opcional para arqueros
  desde: string; // año de ingreso
  esLeyenda: boolean;
  activo: boolean;
  foto?: string; // opcional, puedes agregar URLs o paths locales
}

export const plantelJugadores: Jugador[] = [
  {
    id: 1,
    nombre: 'Duraznito',
    posicion: 'Defensor',
    partidos: 40,
    goles: 17,
    asistencias: 21,
    desde: '2024',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (1).jpg' // Puedes agregar una URL o path a la foto
  },
  {
    id: 2,
    nombre: 'Ruud Gullit',
    posicion: 'Defensor',
    partidos: 28,
    goles: 19,
    asistencias: 28,
    desde: '2025',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (2).jpg'
  },
  {
    id: 3,
    nombre: 'Gersinho',
    posicion: 'Defensor',
    partidos: 24,
    goles: 11,
    asistencias: 15,
    desde: '2025',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (5).jpg'
  },
  {
    id: 4,
    nombre: 'German Lux',
    posicion: 'Arquero',
    partidos: 28,
    goles: 10,
    asistencias: 7,
    desde: '2025',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (6).jpg'
  },

   {
    id: 5,
    nombre: 'Franki',
    posicion: 'Mediocampista',
    partidos: 29,
    goles: 14,
    asistencias: 7,
    desde: '2025',
    esLeyenda: true,
    activo: false,
    foto: 'images/jugadores/MAMAS FC (8).jpg'
  },

   {
    id: 6,
    nombre: 'Campera',
    posicion: 'Mediocampista',
    partidos: 18,
    goles: 12,
    asistencias: 12,
    desde: '2026',
    esLeyenda: false,
    activo: true,
  },

  {
    id: 7,
    nombre: 'Robinho',
    posicion: 'Mediocampista',
    partidos: 12,
    goles: 12,
    asistencias: 8,
    desde: '2026',
    esLeyenda: false,
    activo: true,
  },

  {
    id: 8,
    nombre: 'Gio',
    posicion: 'Defensor',
    partidos: 5,
    goles: 8,
    asistencias: 12,
    desde: '2025',
    esLeyenda: true,
    activo: false,
  },

  {
    id: 9,
    nombre: 'Chisito MVP',
    posicion: 'Arquero',
    partidos: 11,
    goles: 4,
    asistencias: 5,
    desde: '2026',
    esLeyenda: false,
    activo: true,
  },

  {
    id: 10,
    nombre: 'Romo',
    posicion: 'Defensor',
    partidos: 2,
    goles: 0,
    asistencias: 0,
    desde: '2025',
    esLeyenda: true,
    activo: false,
  },

  {
    id: 11,
    nombre: 'JTDQ',
    posicion: 'Delantero',
    partidos: 5,
    goles: 4,
    asistencias: 1,
    desde: '2025',
    esLeyenda: true,
    activo: false,
  },

  {
    id: 12,
    nombre: 'Sharaawy',
    posicion: 'Mediocampista',
    partidos: 22,
    goles: 11,
    asistencias: 6,
    desde: '2025',
    esLeyenda: true,
    activo: false,
    foto: 'images/jugadores/MAMAS FC (3).jpg'
  },

  {
    id: 13,
    nombre: 'Hellfire',
    posicion: 'Defensor',
    partidos: 28,
    goles: 14,
    asistencias: 9,
    desde: '2025',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (12).jpg'
  },

  {
    id: 14,
    nombre: 'Caucho',
    posicion: 'Delantero',
    partidos: 18,
    goles: 9,
    asistencias: 15,
    desde: '2025',
    esLeyenda: true,
    activo: false,
    foto: 'images/jugadores/MAMAS FC (4).jpg'
  },

  {
    id: 15,
    nombre: 'DPL',
    posicion: 'Delantero',
    partidos: 9,
    goles: 12,
    asistencias: 5,
    desde: '2026',
    esLeyenda: false,
    activo: true,
  },

  {
    id: 16,
    nombre: 'Monkey',
    posicion: 'Delantero',
    partidos: 7,
    goles: 5,
    asistencias: 5,
    desde: '2025',
    esLeyenda: false,
    activo: true,
  },

  {
    id: 17,
    nombre: 'Di Maria',
    posicion: 'Delantero',
    partidos: 12,
    goles: 9,
    asistencias: 7,
    desde: '2025',
    esLeyenda: true,
    activo: false,
    foto: 'images/jugadores/MAMAS FC (11).jpg'
  },

  {
    id: 18,
    nombre: 'Bnnx',
    posicion: 'Delantero',
    partidos: 18,
    goles: 12,
    asistencias: 8,
    desde: '2025',
    esLeyenda: false,
    activo: true,
    foto: 'images/jugadores/MAMAS FC (10).jpg'
  },

  
  // Leyendas de ejemplo
  
  // Agrega más jugadores según necesites...
];

export const statsTotales = {
  activos: 14,
  leyendas: 2,
  golesTotales: 688,
  asistenciasTotales: 621,
};

// NOTICIAS ...

export interface Noticia {
  id: number;
  tipo: 'destacada' | 'normal' | 'pequena';
  titulo: string;
  fecha: string;
  contenido: string; // texto completo para el modal
  resumen?: string; // texto corto para card pequeña
  media?: string; // URL de imagen o video (opcional)
  categoria?: string; // ej: LIGA, COPA, FICHAJES
  tiempo?: string; // ej: "Hace 2 días"
}

export const noticias: Noticia[] = [
  {
    id: 1,
    tipo: 'destacada',
    titulo: '¡Arranca la JRS! 🚀',
    fecha: '03/02/2026',
    contenido: 'La liga JRS ya está en marcha. El script principal se encuentra completamente listo y funcionando, y solo queda configurar el VPS para dejar el servidor online Cada vez falta menos para que empiecen los partidos y vuelva la competencia. ¡Prepárense!',
    media: '/images/jugadores/noticias/se-asocia-que-descansar-o-esperar-es-un-tiempo-63BVERJJ65CD5F2GNTOUXLTJL4.jpg', // o URL externa
    categoria: 'LIGA',
    tiempo: '03/02/2026',
    resumen: 'La liga JRS ya está en marcha. El script principal se encuentra completamente...',
  },
  {
    id: 2,
    tipo: 'pequena',
    titulo: 'Nuevo refuerzo para la temporada',
    fecha: '17/01/2026',
    contenido: 'El equipo da la bienvenida a nuestro nuevo integrante Robinho, que viene a fortalecer el mediocampo. Bienvenido!',
    categoria: 'FICHAJES',
    tiempo: '17/01/2026',
  },
  {
    id: 3,
    tipo: 'pequena',
    titulo: 'Perdimos la final contra Laira FC',
    fecha: '25/12/2025',
    contenido: 'Tras un arduo trayecto donde hicimos amigos llego a su fin la liga JRS 2025. En una final muy disputada, caímos ante Laira FC por 5-2. Felicitaciones a ellos por su gran desempeño durante todo el torneo.',
    categoria: 'LIGA',
    tiempo: '25/12/2025',
  },
  {
    id: 4,
    tipo: 'normal',
    titulo: 'Caucho se retira del equipo',
    fecha: '01/01/2026',
    contenido: 'Nos despedimos de Caucho Romero, quien ha decidido retirarse del equipo tras una destacada carrera con nosotros. Le agradecemos por todos los goles y momentos inolvidables que nos brindó. ¡Éxitos en tus futuros proyectos, Caucho!',
    categoria: 'DESPEDIDA',
    tiempo: '01/01/2026',
  },
  // Agrega más según necesites
];


// CARRUSEL 

export interface Testimonio {
  id: number;
  nombre: string;
  rol: string;
  frase: string;
  foto: string;
  esJugadorMamas?: boolean;
}

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'leon._.12.',
    rol: 'Jugador de Galaxy FC',
    frase: '"Mamas fc no se explica, se siente"',
    foto: '/images/carrusel/zeballos.jpg',
    esJugadorMamas: false,
  },
  {
    id: 2,
    nombre: 'Sirinho',
    rol: 'Capitán - Los Cracks FC',
    frase: '"Prefiero perder con los mios, que ganar con desconocidos"',
    foto: '/images/carrusel/sirinho.jpg',
  },
  {
    id: 3,
    nombre: 'Sharaawy',
    rol: 'ExJugador - MamasFC',
    frase: '“Mamás FC es pasión, equipo y orgullo en cada partido.”',
    foto: '/images/carrusel/sharawy.jpg',
  },
  {
    id: 4,
    nombre: 'Tias',
    rol: 'ExJugador - Mamas FC',
    frase: '"Mamas fc no es solo un simple club, es una familia donde te apoyan pase lo que pase"',
    foto: '/images/carrusel/incognito.jpg',
    esJugadorMamas: false,
  },

  {
    id: 5,
    nombre: 'Ruud Gullit',
    rol: 'Jugador Activo',
    frase: '"Mamas fc es mí primer y único club en el que jugué en haxball, mí familia"',
    foto: '/images/carrusel/Ruud.jpg',
    esJugadorMamas: false,
  },
  // Agrega más cuando quieras (mínimo 4–6 para que rote bienn)
];
