import React from 'react';
import { AppView } from '../../../App';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface PetcoHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}

export const PetcoHeader: React.FC<PetcoHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "light",
}) => {
  return (
    <header className="relative w-full min-h-[100vh] sm:min-h-screen overflow-hidden flex flex-col justify-between select-none bg-[#1975D2] text-white">
      
      {/* 1. MARQUEE GIGANTE: PETCO (ATRAS DEL PERRO) */}
      <div className="absolute top-[25%] sm:top-[22%] left-0 w-full overflow-hidden z-10 pointer-events-none">
        {/* Usamos dos contenedores para la animación infinita suave */}
        <div className="flex w-[200%] animate-marquee-left">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex w-1/2 justify-around items-center">
              {[0, 1, 2].map((repIndex) => (
                <div key={repIndex} className="flex items-center shrink-0">
                  <span className="text-[16vw] sm:text-[15vw] md:text-[14vw] font-[450] uppercase tracking-[-0.035em] leading-none text-white font-sans pr-4 sm:pr-8 md:pr-10">
                    PETCO
                  </span>
                  <div className="pr-4 sm:pr-8 md:pr-10 flex items-center justify-center">
                    {/* Icono rotando */}
                    <UmanaBurstIcon className="w-[10vw] h-[10vw] min-w-[60px] min-h-[60px] max-w-[160px] max-h-[160px] text-white animate-[spin_24s_linear_infinite]" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. DOG IMAGE (ENTRE EL MARQUEE Y EL TEXTO) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-end justify-center">
        <img
          src="/images/petco_header.png"
          alt="Petco Dog"
          className="w-auto h-[70vh] sm:h-[75vh] md:h-[85vh] object-contain object-bottom pointer-events-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200&h=1200"; 
          }}
        />
      </div>

      {/* TOP SPACER PARA EMPUJAR EL CONTENIDO ABAJO */}
      <div className="pt-24 sm:pt-32"></div>

      {/* 3. CENTER CONTENT: TEXT & SWITCHER (FRENTE AL PERRO) */}
      <div className="relative z-30 w-full flex-grow flex flex-col items-center justify-center px-4 sm:px-8 mt-12 sm:mt-16 pointer-events-auto">
        <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-[400] md:font-[350] tracking-[-0.02em] leading-[1.15] text-center max-w-[1250px] mb-12 sm:mb-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] text-white">
          Petco is a brand dedicated to improving pets' and their owners' well-being by providing products that support a healthy diet and enhance quality of life.
        </h1>
        
        {/* Toggle Controls (Reading / Visual View) */}
        <div className="inline-flex items-center p-1.5 sm:p-2 rounded-[2rem] border border-white/40 backdrop-blur-md bg-white/40 shadow-lg">
          <button
            onClick={() => setActiveViewMode('reading')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-[1.5rem] text-[13px] sm:text-[14px] tracking-tight transition-all duration-300 ${
              activeViewMode === 'reading' 
                ? 'bg-black text-white font-medium' 
                : 'text-black hover:bg-white/40'
            }`}
          >
            Reading View
          </button>
          <button
            onClick={() => setActiveViewMode('visual')}
            className={`px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-[1.5rem] text-[13px] sm:text-[14px] tracking-tight transition-all duration-300 ${
              activeViewMode === 'visual' 
                ? 'bg-black text-white font-medium' 
                : 'text-black hover:bg-white/40'
            }`}
          >
            Visual view
          </button>
        </div>
      </div>

      {/* 4. BOTTOM BAR: (SCROLL) + See all projects */}
      <div className="relative z-30 w-full px-6 sm:px-10 pb-8 sm:pb-12 flex justify-between items-end text-sm tracking-tight font-medium text-white">
        <span className="font-bold">(SCROLL)</span>
        {onSeeAllProjects && (
          <button 
            onClick={onSeeAllProjects}
            className="group relative inline-flex items-center text-sm font-normal cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">See all projects</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-right group-hover:scale-x-0"></span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </button>
        )}
      </div>

    </header>
  );
};
