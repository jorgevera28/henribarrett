import React from 'react';
import { AppView } from '../../types';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface TeclabHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}

export const TeclabHeader: React.FC<TeclabHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "light",
}) => {
  return (
    <header className="relative w-full h-screen min-h-[720px] max-h-[1200px] overflow-hidden bg-[#141517] text-white flex flex-col justify-between select-none">
      {/* 1. FONDO EN PANTALLA COMPLETA DEL CASO TECLAB (CONCRETO, DUCTO INDUSTRIAL VERDE LIMA Y PACKAGING TÉCNICO) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#141517]">
        <img
          src="/images/teclab_hero.jpg"
          alt="Teclab Construction and Industrial Packaging Hero"
          className="w-full h-full object-cover object-center pointer-events-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0.95";
          }}
        />
        {/* Sutil overlay de contraste para garantizar legibilidad perfecta del texto y los botones */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/60 pointer-events-none" />
      </div>

      {/* 2. MARQUEE GIGANTE: TECLAB ✹ TECLAB ✹ TECLAB (REPLICA EXACTA DE SG_Teclab.png) */}
      <div className="relative z-10 w-full overflow-hidden pt-24 sm:pt-28 select-none pointer-events-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '40s' }}
        >
          {[0, 1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[350] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                TECLAB
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[350] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                TECLAB
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CONTENIDO EDITORIAL CENTRAL / INFERIOR Y BARRA DE BOTONES */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-8 sm:pb-12 flex flex-col justify-end gap-10 md:gap-12">
        {/* TITULAR EDITORIAL DE TECLAB (EXACTO A SG_Teclab.png) */}
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl pt-2 sm:pt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-[350] md:font-[300] text-white leading-[1.15] tracking-[-0.015em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]">
            With a deep understanding of the construction sector’s evolution, Teclab recognized the considerable innovations in materials, systems, and elements utilized in project execution.
          </h1>
        </div>

        {/* 4. FILA DE CONTROLES INFERIORES: (SCROLL) A LA IZQUIERDA, PILL TOGGLE AL CENTRO Y "See all projects" A LA DERECHA */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 items-center text-white pt-2 sm:pt-4">
          {/* IZQUIERDA: INDICADOR (SCROLL) */}
          <div className="flex items-center justify-start">
            <span className="text-sm sm:text-base font-bold tracking-[0.08em] uppercase select-none opacity-90">
              (SCROLL)
            </span>
          </div>

          {/* CENTRO: SELECTOR DE MODO DE VISTA (VISUAL VIEW / READING VIEW) CON DISEÑO DE CÁPSULA */}
          <div className="flex justify-center items-center">
            <div className="inline-flex items-center p-1 rounded-full border border-white/60 bg-black/35 backdrop-blur-md shadow-2xl relative">
              <button
                onClick={() => setActiveViewMode('visual')}
                className={`relative z-10 px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeViewMode === 'visual'
                    ? 'bg-white text-black shadow-md'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                Visual view
              </button>

              <button
                onClick={() => setActiveViewMode('reading')}
                className={`relative z-10 px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                  activeViewMode === 'reading'
                    ? 'bg-white text-black shadow-md'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                Reading View
              </button>
            </div>
          </div>

          {/* DERECHA: ENLACE SUBRAYADO SEE ALL PROJECTS */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => {
                if (onSeeAllProjects) onSeeAllProjects();
                else onNavigate('work');
              }}
              className="text-sm sm:text-base md:text-lg font-medium tracking-wide underline underline-offset-4 hover:opacity-75 transition-opacity cursor-pointer"
            >
              See all projects
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
