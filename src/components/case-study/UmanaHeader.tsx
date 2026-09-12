import React from 'react';
import { MainNav, AppView } from '../../../App';
import { motion } from 'motion/react';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface UmanaHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}
export const UmanaHeader: React.FC<UmanaHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "dark",
}) => {
  return (
    <header className={`relative w-full h-screen min-h-[700px] max-h-[1200px] overflow-hidden ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} transition-colors duration-500 flex flex-col justify-between select-none`}>
      {/* 1. FOTOGRAFÍA DE FONDO (TEXTURA OSCURA, MANOS SOSTENIENDO EL CUBO DE CONCRETO Y POLVO) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/umana_powder_cube_1788889215309.jpg"
          alt="Umana Architecture & Design Studio"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Sutil viñeta para asegurar contraste editorial perfecto con las tipografías */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/75" />
        <div className={`absolute inset-0 bg-radial-vignette opacity-40 ${theme === "dark" ? "" : "invert"} pointer-events-none`} />
      </div>

      {/* 2. BARRA DE NAVEGACIÓN SUPERIOR */}
      <MainNav 
        currentView="case-study-umana" 
        setCurrentView={onNavigate} 
        isHome={false} 
        bgColor="bg-transparent" 
      />

      {/* 3. TIRA DE MARQUEE GIGANTE "UMANA" CON EL ICONO DE DESTELLO ARQUITECTÓNICO */}
      <div className="relative z-20 w-full overflow-hidden pt-3 sm:pt-4 select-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '40s' }}
        >
          {/* Loop de bloques idénticos para animación infinita y fluida */}
          {[0, 1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                UMANA
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                UMANA
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CONTENIDO EDITORIAL CENTRAL / INFERIOR */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-8 sm:pb-10 flex flex-col justify-end gap-8 md:gap-10">
        {/* DECLARACIÓN EDITORIAL DE UMANA (IZQUIERDA) */}
        <div className="max-w-4xl pt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-[300] text-white leading-[1.14] tracking-[-0.015em]">
            Umana is a progressive architecture and design studio that prioritizes people-centered design principles.
          </h1>
        </div>

        {/* SELECTOR DE MODO DE VISTA (READING VIEW / VISUAL VIEW) EN EL CENTRO */}
        <div className="w-full flex justify-center items-center my-2 sm:my-3">
          <div className="inline-flex items-center p-1 rounded-full border border-white/40 bg-black/35 backdrop-blur-md shadow-2xl relative">
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
          </div>
        </div>

        {/* 5. PIE DE PÁGINA DEL HEADER: (SCROLL) A LA IZQUIERDA Y "See all projects" A LA DERECHA */}
        <div className="w-full flex items-center justify-between text-white pt-2">
          {/* INDICADOR (SCROLL) */}
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold tracking-[0.08em] uppercase select-none opacity-90">
              (SCROLL)
            </span>
          </div>

          {/* LINK: SEE ALL PROJECTS */}
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
