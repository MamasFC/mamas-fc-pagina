import React from 'react';
import { motion } from 'framer-motion';
import { testimonios } from '../data/mamasData';

// Duplicamos para el efecto infinito
const duplicatedTestimonios = [...testimonios, ...testimonios];

const TestimoniosCarrusel: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black to-[#0a1f0a] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-lg">
          LO QUE DICEN DE NOSOTROS
        </h2>
        <p className="text-gray-400 text-xl mb-16 max-w-3xl mx-auto">
          Respeto, admiración y cariño de quienes nos conocen en la cancha
        </p>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40, // ajustá si querés más lento/rápido
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedTestimonios.map((testimonio, index) => (
              <div
                key={`${testimonio.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 mx-4 md:mx-8"
              >
                <div className="glass-card rounded-2xl overflow-hidden border border-green-800/40 p-6 md:p-8 flex flex-col shadow-lg hover:shadow-green-500/30 transition-shadow min-h-[380px] md:min-h-[420px]">
                  {/* Foto + sello */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-600/60 flex-shrink-0">
                    <img
                      src={testimonio.foto}
                      alt={testimonio.nombre}
                      className="w-full h-full object-cover"
                    />
                    
                  </div>

                  {/* Frase - ahora sin límite de líneas, envuelve todo */}
                  <p className="text-base md:text-lg text-gray-200 italic mb-6 text-center flex-grow leading-relaxed whitespace-normal break-words">
                    "{testimonio.frase}"
                  </p>

                  {/* Nombre y rol */}
                  <div className="text-center mt-auto">
                    <div className="font-bold text-lg md:text-xl text-white">
                      {testimonio.nombre}
                    </div>
                    <div className="text-sm md:text-base text-green-400">
                      {testimonio.rol}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosCarrusel;