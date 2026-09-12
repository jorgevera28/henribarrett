import React from 'react';
import { MainNav, AppView } from '../../../App';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface RappiHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}

export const RappiHeader: React.FC<RappiHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "dark",
}) => {
  return (
    <header className="relative w-full h-screen min-h-[720px] max-h-[1200px] overflow-hidden bg-[#FF553E] text-white flex flex-col justify-between select-none">
      {/* 1. FONDO CON GRADIENTE CÁLIDO CORAL-ORANGE */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 68% 45%, #FF6750 0%, #FF553E 55%, #F0442D 100%)',
        }}
      >
        <div className="absolute inset-0 bg-radial-vignette opacity-20 pointer-events-none" />
      </div>

      {/* 2. COMPOSICIÓN FOTOGRÁFICA DEL KIT DE MERCHANDISING RAPPI (LATERAL DERECHO) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[64%] lg:w-[58%] pointer-events-none z-10 flex items-center justify-end overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src="/images/rappi_spinning_kit.jpg"
            alt="Rappi Spinning Class Activation Kit"
            className="w-full h-full object-cover object-center md:object-right filter contrast-[1.03] brightness-[1.01]"
            referrerPolicy="no-referrer"
          />
          {/* Difuminado suave hacia el fondo coral a la izquierda y abajo */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 md:w-56 bg-gradient-to-r from-[#FF553E] via-[#FF553E]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FF553E] via-[#FF553E]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FF553E]/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. BARRA DE NAVEGACIÓN SUPERIOR (BLANCA) */}
      <div className="relative z-30 w-full">
        <MainNav 
          currentView="case-study-rappi" 
          setCurrentView={onNavigate} 
          isHome={false} 
          bgColor="bg-transparent" 
        />
      </div>

      {/* 4. MARQUEE GIGANTE SUPERIOR "RAPPI" CON DESTELLOS HENRI BARRETT */}
      <div className="relative z-20 w-full overflow-hidden pt-2 sm:pt-4 select-none pointer-events-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '40s' }}
        >
          {[0, 1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                RAPPI
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                RAPPI
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CONTENIDO EDITORIAL CENTRAL / INFERIOR */}
      <div className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-8 sm:pb-10 flex flex-col justify-end gap-8 md:gap-10">
        {/* TITULAR EDITORIAL DE LA ACTIVACIÓN */}
        <div className="max-w-3xl pt-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-[300] text-white leading-[1.12] tracking-[-0.015em]">
            We designed a spinning class activation revealing “The Secret Routine” of their couriers, handling everything from concept to production.
          </h1>
        </div>

        {/* SELECTOR DE MODO DE VISTA (VISUAL VIEW / READING VIEW) */}
        <div className="w-full flex justify-center items-center my-2 sm:my-3">
          <div className="inline-flex items-center p-1 rounded-full border border-white/40 bg-black/20 backdrop-blur-md shadow-2xl relative">
            <button
              onClick={() => setActiveViewMode('visual')}
              className={`relative z-10 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                activeViewMode === 'visual'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Visual view
            </button>

            <button
              onClick={() => setActiveViewMode('reading')}
              className={`relative z-10 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                activeViewMode === 'reading'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Reading View
            </button>
          </div>
        </div>

        {/* 6. PIE DE PÁGINA DEL HEADER: (SCROLL) A LA IZQUIERDA Y "See all projects" A LA DERECHA */}
        <div className="w-full flex items-center justify-between text-white pt-2">
          {/* INDICADOR (SCROLL) */}
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold tracking-[0.08em] uppercase select-none opacity-90">
              (SCROLL)
            </span>
          </div>

          {/* ENLACE: SEE ALL PROJECTS */}
          <button
            onClick={() => {
              if (onSeeAllProjects) onSeeAllProjects();
              else onNavigate('work');
            }}
            className="text-sm sm:text-base md:text-lg font-medium tracking-wide border-b border-white pb-0.5 hover:opacity-75 transition-opacity cursor-pointer"
          >
            See all projects
          </button>
        </div>
      </div>
    </header>
  );
};
