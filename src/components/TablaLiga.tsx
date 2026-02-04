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
}

interface Props {
  titulo: string;
  equipos: Equipo[];
}

const TablaLiga: React.FC<Props> = ({ titulo, equipos }) => {
  return (
    <div className="mb-16">
      <h4 className="text-3xl md:text-4xl font-black text-center mb-8 text-green-400 drop-shadow-lg">
        {titulo}
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-900/40 text-green-300 uppercase text-sm tracking-wider">
              <th className="p-4">Pos</th>
              <th className="p-4">Equipo</th>
              <th className="p-4 text-center">PJ</th>
              <th className="p-4 text-center">G</th>
              <th className="p-4 text-center">E</th>
              <th className="p-4 text-center">P</th>
              <th className="p-4 text-center">GF</th>
              <th className="p-4 text-center">GC</th>
              <th className="p-4 text-center">DG</th>
              <th className="p-4 text-center font-bold">Pts</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((eq, i) => (
              <tr
                key={i}
                className={`border-b border-gray-800 hover:bg-green-900/20 transition-colors ${
                  eq.nombre.includes('Mamas FC') ? 'bg-green-900/30 font-bold' : ''
                }`}
              >
                <td className="p-4 text-center">{eq.pos}</td>
                <td className="p-4">{eq.nombre}</td>
                <td className="p-4 text-center">{eq.pj}</td>
                <td className="p-4 text-center">{eq.g}</td>
                <td className="p-4 text-center">{eq.e}</td>
                <td className="p-4 text-center">{eq.p}</td>
                <td className="p-4 text-center">{eq.gf}</td>
                <td className="p-4 text-center">{eq.gc}</td>
                <td className="p-4 text-center">{eq.dg}</td>
                <td className="p-4 text-center text-green-400 font-bold">{eq.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaLiga;