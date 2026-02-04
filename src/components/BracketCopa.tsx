import React from 'react';

const BracketCopa: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto text-center pt-8">
      {/* Temporada arriba (como en la foto, pequeño y centrado) */}
      <div className="text-green-400 text-xl md:text-2xl font-bold uppercase tracking-wider mb-12">
        Temporada 2026
      </div>

      {/* Tabs ya están en la sección principal, aquí solo el bracket */}

      {/* Cuartos de Final 
      <div className="mb-20">
        
        <h4 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">
          Cuartos de Final
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
          {[
            {
              numero: 1,
              local: { name: '-', score: 0, winner: true },
              visitante: { name: '-', score: 0 },
              status: 'A DEFINIR',
            },
            {
              numero: 2,
              local: { name: '-', score: 0 },
              visitante: { name: '-', score: 0 },
              status: 'A DEFINIR',
            },
            {
              numero: 3,
              local: { name: '-', score: 0, winner: true },
              visitante: { name: '-', score: 0 },
              status: 'A DEFINIR',
            },
            {
              numero: 4,
              local: { name: '-', score: 0, winner: true },
              visitante: { name: '-', score: 0 },
              status: 'A DEFINIR',
            },
          ].map((match, i) => (
            <div
              key={i}
              className="bg-[#0f1a0f] border border-[#1a3a1a]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/30 transition-shadow"
            >
              <div className="bg-[#0a2a0a] px-4 py-2 text-sm font-medium text-gray-300 text-center">
                CUARTO {match.numero}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <div className={`text-left font-semibold ${match.local.winner ? 'text-green-500' : 'text-white'}`}>
                    {match.local.name}
                  </div>
                  <div className="text-xl font-black text-green-400 mx-4">{match.local.score}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className={`text-left font-semibold ${!match.local.winner ? 'text-green-500' : 'text-white'}`}>
                    {match.visitante.name}
                  </div>
                  <div className="text-xl font-black text-green-400 mx-4">{match.visitante.score}</div>
                </div>
                {match.status && (
                  <div className="mt-4 text-yellow-500 font-bold text-center text-sm uppercase tracking-wider">
                    {match.status}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>*/}

      {/* Semifinales */}
      <div className="mb-20">
        <h4 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">
          Semifinales
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              numero: 1,
              equipo1: 'Por definir',
              equipo2: 'Por definir',
              status: '',
            },
            {
              numero: 2,
              equipo1: 'Por definir',
              equipo2: 'Por definir',
              status: '',
            },
          ].map((match, i) => (
            <div
              key={i}
              className="bg-[#0f1a0f] border border-[#1a3a1a]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/30 transition-shadow"
            >
              <div className="bg-[#0a2a0a] px-4 py-3 text-base font-medium text-gray-300 text-center">
                SEMIFINAL {match.numero}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <div className="text-white">{match.equipo1}</div>
                  <div className="text-gray-600 mx-6">-</div>
                  <div className="text-white">{match.equipo2}</div>
                </div>
                <div className="mt-5 text-yellow-500 font-bold text-center uppercase tracking-wider text-sm">
                  {match.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final */}
      <div>
        <h4 className="text-5xl md:text-6xl font-black text-yellow-400 mb-10 tracking-tight flex items-center justify-center gap-4">
          <span className="text-6xl">🏆</span> FINAL
        </h4>
        <div className="bg-[#0f1a0f] border border-yellow-600/40 rounded-2xl p-10 max-w-lg mx-auto shadow-2xl">
          <div className="text-3xl font-bold text-gray-300 text-center mb-4">
            Por definir
          </div>
          <div className="text-yellow-500 font-bold text-xl uppercase tracking-widest text-center">
            PENDIENTE
          </div>
        </div>
      </div>
    </div>
  );
};

export default BracketCopa;