import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Noticia } from '../data/mamasData';

interface Props {
  noticia: Noticia | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalNoticia: React.FC<Props> = ({ noticia, isOpen, onClose }) => {
  if (!noticia) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-400 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#0a1f0a] to-black text-left align-middle shadow-2xl transition-all border border-green-800/40">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-6 text-gray-400 hover:text-white text-3xl z-10"
                >
                  ×
                </button>

                <div className="p-8 md:p-12">
                  {noticia.media && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-green-700/30 shadow-2xl">
                      <img
                        src={noticia.media}
                        alt={noticia.titulo}
                        className="w-full h-auto max-h-[500px] object-cover"
                      />
                    </div>
                  )}

                  <Dialog.Title as="h2" className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                    {noticia.titulo}
                  </Dialog.Title>

                  <div className="flex items-center gap-4 text-gray-400 mb-8">
                    <span className="text-green-400 font-medium">{noticia.categoria}</span>
                    <span>•</span>
                    <span>{noticia.tiempo}</span>
                  </div>

                  <div className="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
                    {noticia.contenido}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalNoticia;