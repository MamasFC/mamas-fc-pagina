import React from 'react';
import { Jugador } from '../data/mamasData';

interface Props {
  jugador: Jugador;
}

const CardJugador: React.FC<Props> = ({ jugador }) => {
  return (
    <div
      className={`glass-card rounded-xl overflow-hidden border transition-all duration-500 group
        ${jugador.esLeyenda 
          ? 'border-yellow-500/60 shadow-yellow-500/20' 
          : 'border-green-800/50'}
        hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-[1.03]`}
    >
      {/* Contenedor de la foto */}
      <div className="relative h-56 overflow-hidden">
        {jugador.foto ? (
          <img
            src={jugador.foto}
            alt={`${jugador.nombre} - ${jugador.posicion}`}
            className="w-full h-full object-cover transition-all duration-700 
              grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 
              scale-105 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-7xl font-black text-gray-600 group-hover:text-gray-400 transition-colors">
            {jugador.nombre.charAt(0)}
          </div>
        )}

        {/* Overlay que aparece en hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
          <div className="text-white font-bold text-lg drop-shadow-md">{jugador.posicion}</div>
          <div className="text-green-300 text-sm drop-shadow-md">Desde {jugador.desde}</div>
        </div>

        {/* Badge leyenda */}
        {jugador.esLeyenda && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
            <span>★ Leyenda</span>
          </div>
        )}
      </div>

      {/* Info inferior */}
      <div className="p-6 text-center bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-green-300 transition-colors">
            {jugador.nombre}
          </h3>
          {jugador.apodo && (
            <span className="text-green-400 text-lg italic group-hover:text-green-300 transition-colors">
              "{jugador.apodo}"
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-5 text-sm">
          <div className="bg-black/50 p-3 rounded-lg transition-all group-hover:bg-green-950/50">
            <div className="text-green-400 font-bold text-xl">{jugador.partidos}</div>
            <div className="text-gray-400 text-xs mt-1 group-hover:text-gray-300">Partidos</div>
          </div>
          <div className="bg-black/50 p-3 rounded-lg transition-all group-hover:bg-green-950/50">
            <div className="text-green-400 font-bold text-xl">{jugador.goles}</div>
            <div className="text-gray-400 text-xs mt-1 group-hover:text-gray-300">Goles</div>
          </div>
          <div className="bg-black/50 p-3 rounded-lg transition-all group-hover:bg-green-950/50">
            <div className="text-green-400 font-bold text-xl">{jugador.asistencias}</div>
            <div className="text-gray-400 text-xs mt-1 group-hover:text-gray-300">Asist.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardJugador;