import React from 'react';
import { Partido } from '../data/mamasData';

interface Props {
  partido: Partido;
}

const CardPartido: React.FC<Props> = ({ partido }) => {
  const colorCircle =
    partido.outcome === 'V' ? 'bg-green-500' :
    partido.outcome === 'E' ? 'bg-yellow-500' :
    'bg-red-500';

  return (
    <div className="glass-card overflow-hidden rounded-xl border border-gray-800 hover:border-green-600/50 transition-all duration-300">
      <div className="bg-black/60 p-4 text-sm font-medium text-gray-300 flex justify-between items-center">
        <span>{partido.tipo.toUpperCase()}</span>
        <span className={`w-8 h-8 rounded-full ${colorCircle} flex items-center justify-center text-white font-black text-xl shadow-md`}>
          {partido.outcome}
        </span>
      </div>
      
      <div className="p-5 text-center">
        <div className="flex items-center justify-between mb-3">
          <div className="text-left">
            <p className="font-bold text-lg">{partido.local ? 'Mamas FC' : partido.rival}</p>
            <p className="text-xs text-gray-400">{partido.local ? 'LOCAL' : 'VISITANTE'}</p>
          </div>
          
          <div className="text-3xl font-black text-green-400 px-4">
            {partido.resultado}
          </div>
          
          <div className="text-right">
            <p className="font-bold text-lg">{partido.local ? partido.rival : 'Mamas FC'}</p>
            <p className="text-xs text-gray-400">{partido.local ? '' : 'LOCAL'}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mt-2">
          {partido.fecha}
        </p>
      </div>
    </div>
  );
};

export default CardPartido;