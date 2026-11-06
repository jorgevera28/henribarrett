import React from 'react';
import { AppView } from '../../types';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface ChichaSuMareHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}

export const ChichaSuMareHeader: React.FC<ChichaSuMareHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "light",
}) => {
  return (
    <header className="relative w-full h-screen min-h-[720px] max-h-[1200px] overflow-hidden bg-[#7B42D6] text-white flex flex-col justify-between select-none">
      {/* 1. FONDO EN PANTALLA COMPLETA CON EL ARTE DEL TIGRE Y GRADIENTE PSICODÉLICO CHICHA */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#7B42D6]">
        <img
          src="/images/chicha_su_mare_tiger_clean.png"
          alt="Chicha Su Mare - Peruvian Chicha Tiger and Radiant Neon Gradient"
          className="w-full h-full object-cover object-center pointer-events-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback directo al archivo subido por el usuario
            (e.target as HTMLImageElement).src = "/assets/aistudio/SG_ChicaSumare_header_b9cd59aa.png";
          }}
        />
        {/* Sutil viñeta para asegurar legibilidad cristalina del texto blanco sin restar vibrancia */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. MARQUEE GIGANTE: CHICHA SU MARE ✹ CHICHA SU MARE ✹ CHICHA SU MARE */}
      <div className="relative z-10 w-full overflow-hidden pt-24 sm:pt-28 select-none pointer-events-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '42s' }}
        >
          {[0, 1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[350] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                CHICHA SU MARE
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
              <span className="text-[15vw] md:text-[14vw] lg:text-[13vw] font-[350] uppercase tracking-[-0.03em] leading-none text-white font-sans pr-6 sm:pr-10 md:pr-14">
                CHICHA SU MARE
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className="w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] text-white animate-[spin_30s_linear_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CONTENIDO EDITORIAL CENTRAL / INFERIOR */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-8 sm:pb-10 flex flex-col justify-end gap-8 md:gap-10">
        {/* TITULAR EDITORIAL DE CHICHA SU MARE */}
        <div className="max-w-3xl lg:max-w-4xl pt-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-[300] text-white leading-[1.12] tracking-[-0.015em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            Chicha Su Mare celebrates Peruvian Chicha culture through music, vibrant visuals, and contemporary expression, connecting tradition with new generations.
          </h1>
        </div>

        {/* SELECTOR DE MODO DE VISTA (VISUAL VIEW / READING VIEW) CON DISEÑO DE CÁPSULA */}
        <div className="w-full flex justify-center items-center my-2 sm:my-3">
          <div className="inline-flex items-center p-1 rounded-full border border-white/40 bg-black/25 backdrop-blur-md shadow-2xl relative">
            <button
              onClick={() => setActiveViewMode('visual')}
              className={`relative z-10 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                activeViewMode === 'visual'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Visual view
            </button>

            <button
              onClick={() => setActiveViewMode('reading')}
              className={`relative z-10 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-[0.95rem] font-medium transition-all duration-300 cursor-pointer ${
                activeViewMode === 'reading'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              Reading View
            </button>
          </div>
        </div>

        {/* 4. PIE DE PÁGINA DEL HEADER: (SCROLL) A LA IZQUIERDA Y "See all projects" A LA DERECHA */}
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
            className="animated-underline text-sm sm:text-base md:text-lg font-medium tracking-wide text-white pb-0.5 cursor-pointer"
          >
            See all projects
          </button>
        </div>
      </div>
    </header>
  );
};
