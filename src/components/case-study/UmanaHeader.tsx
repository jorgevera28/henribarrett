import React from 'react';
import { motion } from 'motion/react';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface UmanaHeaderProps {
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: 'home' | 'about' | 'work' | 'services' | 'quicklys' | 'work-with-us') => void;
  onSeeAllProjects?: () => void;
}

export const UmanaHeader: React.FC<UmanaHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
}) => {
  return (
    <header className="relative w-full h-screen min-h-[700px] max-h-[1200px] overflow-hidden bg-black text-white flex flex-col justify-between select-none">
      {/* 1. FOTOGRAFÍA DE FONDO (TEXTURA OSCURA, MANOS SOSTENIENDO EL CUBO DE CONCRETO Y POLVO) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/umana_powder_cube_1788889215309.jpg"
          alt="Umana Architecture & Design Studio"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Sutil viñeta para asegurar contraste editorial perfecto con las tipografías */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
      </div>

      {/* 2. BARRA DE NAVEGACIÓN SUPERIOR (TRANSPARENTE CON TIPOGRAFÍA EN BLANCO) */}
      <nav className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 pt-7 sm:pt-9 md:pt-10 flex items-center justify-between">
        {/* LOGO HENRI BARRETT */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none shrink-0 group"
          title="Ir a inicio"
        >
          <div className="relative flex items-center">
            {/* Isotipo con rotación elegante */}
            <svg 
              viewBox="0 0 38 38" 
              className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform duration-500 group-hover:rotate-45"
              fill="currentColor"
            >
              <path d="M19 8C19.5523 8 20 8.44772 20 9V14C20 14.5523 19.5523 15 19 15C18.4477 15 18 14.5523 18 14V9C18 8.44772 18.4477 8 19 8Z" />
              <path d="M19 23C19.5523 23 20 23.4477 20 24V29C20 29.5523 19.5523 30 19 30C18.4477 30 18 29.5523 18 29V24C18 23.4477 18.4477 23 19 23Z" />
              <path d="M8 19C8 18.4477 8.44772 18 9 18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H9C8.44772 20 8 19.5523 8 19Z" />
              <path d="M23 19C23 18.4477 23.4477 18 24 18H29C29.5523 18 30 18.4477 30 19C30 19.5523 29.5523 20 29 20H24C23.4477 20 23 19.5523 23 19Z" />
              <circle cx="19" cy="19" r="2.8" />
              <path d="M11.22 11.22C11.61 10.83 12.24 10.83 12.63 11.22L16.16 14.76C16.55 15.15 16.55 15.78 16.16 16.17C15.77 16.56 15.14 16.56 14.75 16.17L11.22 12.63C10.83 12.24 10.83 11.61 11.22 11.22Z" />
              <path d="M21.83 21.83C22.22 21.44 22.85 21.44 23.24 21.83L26.78 25.37C27.17 25.76 27.17 26.39 26.78 26.78C26.39 27.17 25.76 27.17 25.37 26.78L21.83 23.24C21.44 22.85 21.44 22.22 21.83 21.83Z" />
              <path d="M26.78 11.22C27.17 11.61 27.17 12.24 26.78 12.63L23.24 16.17C22.85 16.56 22.22 16.56 21.83 16.17C21.44 15.78 21.44 15.15 21.83 14.76L25.37 11.22C25.76 10.83 26.39 10.83 26.78 11.22Z" />
              <path d="M16.16 21.83C16.55 22.22 16.55 22.85 16.16 23.24L12.63 26.78C12.24 27.17 11.61 27.17 11.22 26.78C10.83 26.39 10.83 25.76 11.22 25.37L14.75 21.83C15.14 21.44 15.77 21.44 16.16 21.83Z" />
            </svg>
            <span className="font-bold tracking-tight text-lg sm:text-xl md:text-2xl ml-2 uppercase text-white">
              Henri Barrett
            </span>
          </div>
        </button>

        {/* ENLACES CENTRALES */}
        <div className="hidden md:flex items-center gap-7 lg:gap-11 text-[0.95rem] lg:text-[1.05rem] font-medium tracking-[0.02em] text-white">
          <button 
            onClick={() => onNavigate('about')} 
            className="hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            About us
          </button>
          <button 
            onClick={() => onNavigate('work')} 
            className="hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Work
          </button>
          <button 
            onClick={() => onNavigate('services')} 
            className="hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Services
          </button>
          <button 
            onClick={() => onNavigate('quicklys')} 
            className="hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Quicklys
          </button>
          <button 
            onClick={() => onNavigate('work-with-us')} 
            className="hover:opacity-70 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
        </div>

        {/* CALL TO ACTION DERECHO */}
        <div className="flex items-center gap-4 text-[0.95rem] sm:text-[1.05rem] md:text-[1.12rem] font-medium tracking-[0.02em] shrink-0 text-white">
          <button 
            onClick={() => onNavigate('work-with-us')} 
            className="relative pb-0.5 border-b border-white hover:opacity-75 transition-opacity whitespace-nowrap cursor-pointer font-medium"
          >
            Work with us
          </button>
        </div>
      </nav>

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
