import React from 'react';
import React from 'react';

interface Equipo {
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
  proximoLogo?: string;
}

interface Props {
  titulo: string;
  equipos: Equipo[];
  tipoLiga?: 'pegeche' | 'jrs'; // 'pegeche' = amarillo, 'jrs' = rojo apagado
}

const TablaLiga: React.FC<Props> = ({ titulo, equipos, tipoLiga = 'jrs' }) => {
  // Colores según liga
 // Colores sólidos (sin degradado)
const headerBg = tipoLiga === 'pegeche'
  ? 'bg-yellow-700 text-yellow-100'          // amarillo sólido como en la foto de referencia
  : 'bg-red-900 text-red-100';               // rojo apagado sólido

const headerText = tipoLiga === 'pegeche'
  ? 'text-yellow-300 font-bold'
  : 'text-red-300 font-bold';

const columnHighlight = tipoLiga === 'pegeche'
  ? 'text-amber-400 font-bold'               // resalte en columnas clave (Pts, PJ, etc.)
  : 'text-red-400 font-bold';

  return (
    <div className="mb-16">
      <h4 className="text-3xl md:text-4xl font-black text-center mb-8 text-green-400 drop-shadow-lg">
        {titulo}
      </h4>

      <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-800">
        <table className="w-full text-left border-collapse bg-[#0a0a0a]">
          <thead>
            <tr className={`${headerBg} uppercase text-xs md:text-sm tracking-wider`}>
              <th className="p-4 md:p-5 text-center">Pos</th>
              <th className="p-4 md:p-5">Equipo</th>
              
              <th className="p-4 md:p-5 text-center">PJ</th>
              <th className="p-4 md:p-5 text-center">PG</th>
              <th className="p-4 md:p-5 text-center">PE</th>
              <th className="p-4 md:p-5 text-center">PP</th>
              <th className="p-4 md:p-5 text-center">GF</th>
              <th className="p-4 md:p-5 text-center">GC</th>
              <th className="p-4 md:p-5 text-center">DG</th>
              <th className={`p-4 md:p-5 text-center ${headerText}`}>Pts</th>
              <th className="p-4 md:p-5 text-center">Próximo</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm md:text-base">
            {equipos.map((eq, i) => (
              <tr
                key={i}
                className={`border-b border-gray-800/50 transition-colors ${
                  eq.nombre.includes('Mamas FC')
                    ? 'bg-gradient-to-r from-green-950/90 via-green-900/70 to-black/90 text-white font-medium'
                    : 'hover:bg-gray-900/50'
                }`}
              >
                <td className="p-4 md:p-5 text-center font-bold">{eq.pos}</td>
                <td className="p-4 md:p-5 font-medium">{eq.nombre}</td>
                <td className="p-4 md:p-5 text-center font-bold">{eq.pts}</td>
                <td className="p-4 md:p-5 text-center font-bold">{eq.pj}</td>
                <td className="p-4 md:p-5 text-center">{eq.g}</td>
                <td className="p-4 md:p-5 text-center">{eq.e}</td>
                <td className="p-4 md:p-5 text-center">{eq.p}</td>
                <td className="p-4 md:p-5 text-center font-bold">{eq.gf}</td>
                <td className="p-4 md:p-5 text-center font-bold">{eq.gc}</td>
                <td className={`p-4 md:p-5 text-center ${columnHighlight}`}>{eq.dg}</td>

                <td className="p-4 md:p-5 text-center">
                  {eq.proximoLogo ? (
                    <img
                      src={eq.proximoLogo}
                      alt="Próximo rival"
                      className="w-8 h-8 md:w-10 md:h-10 mx-auto object-contain rounded-full border border-gray-700/50 shadow-sm hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-gray-600 text-sm">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaLiga;
