<<<<<<< HEAD
import React, { useState, useMemo, useEffect } from 'react';
=======
import React, { useState, useMemo } from 'react';
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import CardPartido from './components/CardPartido';
import BracketCopa from './components/BracketCopa';
import TablaLiga from './components/TablaLiga';
import CardJugador from './components/CardJugador';
import ModalNoticia from './components/ModalNoticia';
import TestimoniosCarrusel from './components/TestimoniosCarrusel';

// Todos los datos de mamasData
import {
  todosLosPartidos,
  ultimosPartidos,
  tablaJRS,
  tablaPegeche,
  grupoA,
  grupoB,
<<<<<<< HEAD
  plantelJugadores as initialPlantelJugadores,
=======
  plantelJugadores,
  statsTotales,
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
  noticias,
} from './data/mamasData';

// Tipo Noticia
interface Noticia {
  id: number;
  tipo: 'destacada' | 'normal' | 'pequena';
  titulo: string;
  fecha: string;
  contenido: string;
  resumen?: string;
  media?: string;
  categoria?: string;
  tiempo?: string;
}

function App() {
<<<<<<< HEAD
  // Estados principales
=======
  // Estados
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
  const [activeTab, setActiveTab] = useState('COPA JRS');
  const [showAll, setShowAll] = useState(false);
  const [filtroJugadores, setFiltroJugadores] = useState('TODOS');
  const [modalOpen, setModalOpen] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState<Noticia | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllJugadores, setShowAllJugadores] = useState(false);
<<<<<<< HEAD
  const [showAdmin, setShowAdmin] = useState(false); // toggle para mostrar botones de edición

  // Estado editable de jugadores (inicia con los valores originales)
  const [jugadores, setJugadores] = useState(initialPlantelJugadores);

  // Estado para detectar scroll y cambiar navbar
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar color de navbar
  useEffect(() => {
    const handleScroll = () => {
      // Cambia cuando scrolleamos más allá de ~800px (ajusta este número si querés que cambie antes o después)
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cálculo automático de estadísticas totales (se actualiza al cambiar jugadores)
  const statsCalculadas = useMemo(() => {
    const activos = jugadores.filter(j => j.activo).length;
    const leyendas = jugadores.filter(j => j.esLeyenda).length;
    const golesTotales = jugadores.reduce((sum, j) => sum + (j.goles || 0), 0);
    const asistenciasTotales = jugadores.reduce((sum, j) => sum + (j.asistencias || 0), 0);

    return { activos, leyendas, golesTotales, asistenciasTotales };
  }, [jugadores]);

  // Filtro de jugadores (usa el estado editable)
  const jugadoresFiltrados = useMemo(() => {
    if (filtroJugadores === 'ACTIVOS') return jugadores.filter(j => j.activo);
    if (filtroJugadores === 'LEYENDAS') return jugadores.filter(j => j.esLeyenda);
    return jugadores;
  }, [filtroJugadores, jugadores]);

  // Función para sumar stat
  const sumarStat = (jugadorId: number, stat: 'partidos' | 'goles' | 'asistencias' | 'vallasInvictas') => {
    setJugadores(prev =>
      prev.map(j =>
        j.id === jugadorId ? { ...j, [stat]: (j[stat] || 0) + 1 } : j
      )
    );
  };

  // Exportar JSON para pegar manualmente en mamasData.ts
  const exportarJSON = () => {
    const jsonString = JSON.stringify({ plantelJugadores: jugadores }, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'plantel-actualizado.json';
    link.click();
    URL.revokeObjectURL(url);
    alert('JSON descargado! Pegalo en mamasData.ts y subilo a GitHub.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f0a] via-black to-black text-white overflow-x-hidden font-sans">
      {/* Navbar con cambio fluido */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center border-b transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white text-black border-gray-200 shadow-lg' 
            : 'bg-black/80 backdrop-blur-md text-white border-green-900/30'
        }`}
      >
        <div className="flex items-center">
          <img
            src="images/jugadores/escudos/White_Black_Gold_Circle_Modern_Football_Club_Logo-removebg-preview.png"
            alt="Mamas FC Logo"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-lg transition-transform hover:scale-110 transform-gpu backface-hidden"
          />
        </div>

=======

  // Filtro de jugadores
  const jugadoresFiltrados = useMemo(() => {
    if (filtroJugadores === 'ACTIVOS') {
      return plantelJugadores.filter((j) => j.activo);
    }
    if (filtroJugadores === 'LEYENDAS') {
      return plantelJugadores.filter((j) => j.esLeyenda);
    }
    return plantelJugadores;
  }, [filtroJugadores]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f0a] via-black to-black text-white overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 py-4 px-6 md:px-12 flex justify-between items-center border-b border-green-900/30">
        <div className="flex items-center">
          <img
            src="/images/jugadores/escudos/White_Black_Gold_Circle_Modern_Football_Club_Logo-removebg-preview.png"
            alt="Mamas FC Logo"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-lg transition-transform hover:scale-110"
          />
        </div>

        {/* Links desktop */}
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
        <ul className="hidden md:flex space-x-8 md:space-x-12 text-base font-medium uppercase tracking-wider">
          {['inicio', 'partidos', 'tabla', 'noticias', 'plantel'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={800}
                spy={true}
<<<<<<< HEAD
                activeClass={`!font-bold ${isScrolled ? 'text-black border-black' : 'text-green-400 border-green-400'} border-b-2 pb-1`}
                className={`cursor-pointer hover:${isScrolled ? 'text-black' : 'text-green-400'} transition-colors duration-300`}
=======
                activeClass="!text-green-400 border-b-2 border-green-400 pb-1"
                className="cursor-pointer hover:text-green-400 transition-colors duration-300"
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

<<<<<<< HEAD
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`text-4xl focus:outline-none p-2 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
=======
        {/* Hamburguesa móvil */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white text-4xl focus:outline-none p-2"
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
          >
            {menuOpen ? '×' : '≡'}
          </button>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              className={`absolute top-full left-0 w-full p-8 flex flex-col gap-8 text-center border-t transition-all duration-500 ${
                isScrolled 
                  ? 'bg-white/95 text-black border-gray-200 shadow-lg' 
                  : 'bg-black/95 text-white border-green-900/30'
              }`}
=======
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md p-8 flex flex-col gap-8 text-center border-t border-green-900/30"
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
            >
              {['inicio', 'partidos', 'tabla', 'noticias', 'plantel'].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={800}
                    spy={true}
                    onClick={() => setMenuOpen(false)}
<<<<<<< HEAD
                    className={`text-2xl font-medium uppercase hover:${isScrolled ? 'text-black' : 'text-green-400'} transition-colors`}
=======
                    className="text-2xl font-medium uppercase hover:text-green-400 transition-colors"
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.08)_0%,transparent_50%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-5xl"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-green-900/40 backdrop-blur-sm border border-green-700/50 rounded-full text-green-400 text-sm font-semibold uppercase tracking-wider mb-8 shadow-md"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Temporada 2026
          </motion.span>

          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mb-6 drop-shadow-[0_0_40px_rgba(0,255,100,0.4)]">
            MAMAS FC
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            14 jugadores. Una familia. Pasión por el Haxball.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
            <Link
              to="partidos"
              smooth={true}
              className="inline-block px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-bold text-lg uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(0,255,100,0.5)] hover:shadow-[0_0_40px_rgba(0,255,100,0.7)] transition-all duration-300 transform hover:scale-105"
            >
              Ver Partidos
            </Link>
            <Link
              to="plantel"
              smooth={true}
              className="inline-block px-10 py-5 bg-transparent border-2 border-green-500 text-green-400 font-bold text-lg uppercase tracking-wider rounded-lg hover:bg-green-500/20 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Conocer al Equipo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Partidos */}
      <section id="partidos" className="py-24 px-6 md:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-4 tracking-tight text-white drop-shadow-lg">
            ÚLTIMOS PARTIDOS
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Seguí el rendimiento del equipo partido a partido
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {(showAll ? todosLosPartidos : ultimosPartidos).map((partido, index) => (
              <CardPartido key={index} partido={partido} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'VER SOLO LOS ÚLTIMOS' : 'VER TODOS LOS PARTIDOS'} →
            </button>
          </div>
        </div>
      </section>

      {/* Tabla */}
      <section id="tabla" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0a2a0a] to-black border-t border-green-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-10 tracking-tight text-white drop-shadow-lg">
            Tabla de Posiciones
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['TABLA JRS', 'TABLA PEGECHE', 'COPA JRS', 'TORNEO JRS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 font-bold text-lg uppercase rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                    : 'bg-gray-800/70 text-gray-300 border border-gray-600 hover:bg-gray-700/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'COPA JRS' ? (
            <BracketCopa />
          ) : activeTab === 'TORNEO JRS' ? (
<<<<<<< HEAD
            <div className="space-y-16">
              <TablaLiga titulo="Grupo A" equipos={grupoA} tipoLiga="jrs" />
              <TablaLiga titulo="Grupo B" equipos={grupoB} tipoLiga="jrs" />
            </div>
          ) : activeTab === 'TABLA JRS' ? (
            <TablaLiga titulo="Tabla JRS" equipos={tablaJRS} tipoLiga="jrs" />
          ) : activeTab === 'TABLA PEGECHE' ? (
            <TablaLiga titulo="Tabla Pegeche" equipos={tablaPegeche} tipoLiga="pegeche" />
=======
            <div>
              <TablaLiga titulo="Grupo A" equipos={grupoA} />
              <TablaLiga titulo="Grupo B" equipos={grupoB} />
            </div>
          ) : activeTab === 'TABLA JRS' ? (
            <TablaLiga titulo="Tabla JRS" equipos={tablaJRS} />
          ) : activeTab === 'TABLA PEGECHE' ? (
            <TablaLiga titulo="Tabla Pegeche" equipos={tablaPegeche} />
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
          ) : null}
        </div>
      </section>

      {/* Noticias */}
<<<<<<< HEAD
      <section id="noticias" className="py-24 px-6 md:px-12 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-6 tracking-tighter text-white drop-shadow-lg">
            NOTICIAS
          </h2>
          <p className="text-center text-gray-400 text-xl mb-16">
            Mantente al día con todo lo que pasa en el club
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {noticias.filter(n => n.tipo === 'destacada').map((noticia) => (
              <div
                key={noticia.id}
                className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl overflow-hidden border border-green-800/40 hover:border-green-600/60 transition-all cursor-pointer group transform-gpu backface-hidden"
                onClick={() => { setNoticiaSeleccionada(noticia); setModalOpen(true); }}
              >
                {noticia.media && (
                  <div className="h-64 sm:h-80 md:h-[400px] lg:h-[500px] overflow-hidden">
                    <img
                      src={noticia.media}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu backface-hidden"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {noticia.categoria}
                    </span>
                    <span className="text-gray-400 text-sm">{noticia.tiempo}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 group-hover:text-green-300 transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6">
                    {noticia.resumen || noticia.contenido.substring(0, 200) + '...'}
                  </p>
                  <span className="text-green-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-base md:text-lg">
                    Leer más →
                  </span>
                </div>
              </div>
            ))}

            <div className="space-y-6 flex flex-col">
              {noticias.filter(n => n.tipo !== 'destacada').map((noticia) => (
                <div
                  key={noticia.id}
                  className="glass-card rounded-xl p-6 border border-green-800/40 hover:border-green-600/60 transition-all cursor-pointer group transform-gpu backface-hidden"
                  onClick={() => { setNoticiaSeleccionada(noticia); setModalOpen(true); }}
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                      {noticia.categoria}
                    </span>
                    <span className="text-gray-500 text-xs">{noticia.tiempo}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {noticia.titulo}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mb-4">
                    {noticia.resumen || noticia.contenido.substring(0, 100) + '...'}
                  </p>
                  <span className="text-green-400 text-sm md:text-base font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Leer más →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ModalNoticia
          noticia={noticiaSeleccionada}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>

=======
<section id="noticias" className="py-24 px-6 md:px-12 bg-black/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-6xl md:text-7xl font-black text-center mb-6 tracking-tighter text-white drop-shadow-lg">
      NOTICIAS
    </h2>
    <p className="text-center text-gray-400 text-xl mb-16">
      Mantente al día con todo lo que pasa en el club
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Destacada grande - ocupa 2 columnas en PC grande, 1 en móvil */}
      {noticias.filter(n => n.tipo === 'destacada').map((noticia) => (
        <div
          key={noticia.id}
          className="md:col-span-2 lg:col-span-2 glass-card rounded-2xl overflow-hidden border border-green-800/40 hover:border-green-600/60 transition-all cursor-pointer group"
          onClick={() => { setNoticiaSeleccionada(noticia); setModalOpen(true); }}
        >
          {noticia.media && (
            <div className="h-64 sm:h-80 md:h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src={noticia.media}
                alt={noticia.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                {noticia.categoria}
              </span>
              <span className="text-gray-400 text-sm">{noticia.tiempo}</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 group-hover:text-green-300 transition-colors">
              {noticia.titulo}
            </h3>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6">
              {noticia.resumen || noticia.contenido.substring(0, 200) + '...'}
            </p>
            <span className="text-green-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-base md:text-lg">
              Leer más →
            </span>
          </div>
        </div>
      ))}

      {/* Pequeñas - 1 columna en móvil, 2 en tablet, 1 en PC grande (para balance) */}
      <div className="space-y-6 flex flex-col">
        {noticias.filter(n => n.tipo !== 'destacada').map((noticia) => (
          <div
            key={noticia.id}
            className="glass-card rounded-xl p-6 border border-green-800/40 hover:border-green-600/60 transition-all cursor-pointer group"
            onClick={() => { setNoticiaSeleccionada(noticia); setModalOpen(true); }}
          >
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                {noticia.categoria}
              </span>
              <span className="text-gray-500 text-xs">{noticia.tiempo}</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              {noticia.titulo}
            </h4>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              {noticia.resumen || noticia.contenido.substring(0, 100) + '...'}
            </p>
            <span className="text-green-400 text-sm md:text-base font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
              Leer más →
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  <ModalNoticia
    noticia={noticiaSeleccionada}
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
  />
</section>
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
      {/* Plantel */}
      <section id="plantel" className="py-24 px-6 md:px-12 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black text-center mb-6 tracking-tighter text-white drop-shadow-lg">
            PLANTEL
          </h2>
          <p className="text-center text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
            Conocé a todos los jugadores que pasaron por Mamas FC
          </p>

<<<<<<< HEAD
          {/* Toggle Modo edición */}
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAdmin(!showAdmin)}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-all"
            >
              {showAdmin ? 'Ocultar edición' : 'Modo edición (solo yo)'}
            </button>
          </div>

          {/* Estadísticas totales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsCalculadas.activos}</div>
              <div className="text-sm text-gray-400 mt-1">Jugadores Activos</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-black p-6 rounded-xl text-center border border-yellow-700/40">
              <div className="text-4xl font-black text-yellow-400">{statsCalculadas.leyendas}</div>
              <div className="text-sm text-gray-400 mt-1">Leyendas</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsCalculadas.golesTotales}</div>
              <div className="text-sm text-gray-400 mt-1">Goles Totales</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsCalculadas.asistenciasTotales}</div>
              <div className="text-sm text-gray-400 mt-1">Asistencias Totales</div>
            </div>
          </div>

          {/* Filtros */}
=======
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['TODOS', 'ACTIVOS', 'LEYENDAS'].map((filtro) => (
              <button
                key={filtro}
                onClick={() => setFiltroJugadores(filtro)}
                className={`px-8 py-3 md:px-10 md:py-4 font-bold uppercase rounded-full transition-all duration-300 shadow-md text-sm md:text-base ${
                  filtroJugadores === filtro
                    ? 'bg-green-500 text-black shadow-green-500/50 scale-105'
                    : 'bg-gray-800/70 text-gray-300 border border-gray-600 hover:bg-gray-700/80'
                }`}
              >
                {filtro}
              </button>
            ))}
          </div>

<<<<<<< HEAD
          {/* Grid de jugadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jugadoresFiltrados.slice(0, showAllJugadores ? jugadoresFiltrados.length : 4).map((jugador) => (
              <div key={jugador.id} className="relative transform-gpu backface-hidden will-change-transform">
                <CardJugador jugador={jugador} />

                {/* Botones de edición */}
                {showAdmin && (
                  <div className="absolute top-2 right-2 flex flex-col gap-1 bg-black/80 p-2 rounded-lg border border-green-700 z-10">
                    <button
                      onClick={() => sumarStat(jugador.id, 'partidos')}
                      className="bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                    >
                      + Partido
                    </button>
                    <button
                      onClick={() => sumarStat(jugador.id, 'goles')}
                      className="bg-green-700 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                    >
                      + Gol
                    </button>
                    <button
                      onClick={() => sumarStat(jugador.id, 'asistencias')}
                      className="bg-purple-700 hover:bg-purple-600 text-white text-xs px-3 py-1 rounded"
                    >
                      + Asist
                    </button>
                    {jugador.posicion.toLowerCase().includes('portero') && (
                      <button
                        onClick={() => sumarStat(jugador.id, 'vallasInvictas')}
                        className="bg-yellow-700 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
                      >
                        + Valla Invicta
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón Ver todos / Ver menos */}
=======
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsTotales.activos}</div>
              <div className="text-sm text-gray-400 mt-1">Jugadores Activos</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-black p-6 rounded-xl text-center border border-yellow-700/40">
              <div className="text-4xl font-black text-yellow-400">{statsTotales.leyendas}</div>
              <div className="text-sm text-gray-400 mt-1">Leyendas</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsTotales.golesTotales}</div>
              <div className="text-sm text-gray-400 mt-1">Goles Totales</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-black p-6 rounded-xl text-center border border-green-800/50">
              <div className="text-4xl font-black text-green-400">{statsTotales.asistenciasTotales}</div>
              <div className="text-sm text-gray-400 mt-1">Asistencias Totales</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jugadoresFiltrados.slice(0, showAllJugadores ? jugadoresFiltrados.length : 4).map((jugador) => (
              <CardJugador key={jugador.id} jugador={jugador} />
            ))}
          </div>

>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
          <div className="text-center mt-12">
            {showAllJugadores ? (
              <button
                onClick={() => setShowAllJugadores(false)}
                className="px-10 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold text-lg uppercase rounded-xl shadow-lg hover:shadow-gray-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Ver menos
              </button>
            ) : jugadoresFiltrados.length > 4 && (
              <button
                onClick={() => setShowAllJugadores(true)}
                className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-lg uppercase rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Ver todos los jugadores
              </button>
            )}
          </div>
<<<<<<< HEAD

          {/* Botón Exportar JSON */}
          {showAdmin && (
            <div className="text-center mt-8">
              <button
                onClick={exportarJSON}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all"
              >
                Exportar JSON actualizado
              </button>
            </div>
          )}
=======
>>>>>>> 0436bc1ec5156746900fe85b6afdfa71232faf2d
        </div>
      </section>

      {/* Testimonios */}
      <TestimoniosCarrusel />
    </div>
  );
}

export default App;