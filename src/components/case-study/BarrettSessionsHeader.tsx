import React from 'react';
import { AppView } from '../../../App';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface BarrettSessionsHeaderProps {
  theme?: "dark" | "light";
  activeViewMode: 'reading' | 'visual';
  setActiveViewMode: (mode: 'reading' | 'visual') => void;
  onNavigate: (view: AppView) => void;
  onSeeAllProjects?: () => void;
}

export const BarrettSessionsHeader: React.FC<BarrettSessionsHeaderProps> = ({
  activeViewMode,
  setActiveViewMode,
  onNavigate,
  onSeeAllProjects,
  theme = "light",
}) => {
  const isDark = theme === "dark";

  return (
    <header className={`relative w-full min-h-screen overflow-hidden flex flex-col justify-between select-none transition-colors duration-500 ${
      isDark ? "bg-[#111111] text-white" : "bg-[#ececeb] text-black"
    }`}>
      
      {/* 1. FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#ececeb]">
        <img
          src="/images/barrett_sessions_pedestal_sign.jpg"
          alt="Barrett Sessions illuminated sign on concrete pedestal"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            isDark ? "brightness-[0.75] contrast-[1.1]" : "contrast-[1.02]"
          }`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 4. MARQUEE GIGANTE SUPERIOR: BARRETT ✹ SESSIONS */}
      <div className="relative z-20 w-full overflow-hidden pt-24 sm:pt-28 select-none pointer-events-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center"
          style={{ animationDuration: '34s' }}
        >
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0">
              {[0, 1, 2].map((repIndex) => (
                <div key={repIndex} className="flex items-center shrink-0">
                  {/* WORD 1: BARRETT */}
                  <span className={`text-[13vw] sm:text-[12vw] md:text-[11.5vw] font-[450] uppercase tracking-[-0.035em] leading-none ${
                    isDark ? "text-white" : "text-black"
                  } font-sans pr-4 sm:pr-8 md:pr-10`}>
                    BARRETT
                  </span>
                  {/* SUNBURST ICON () */}
                  <div className="pr-4 sm:pr-8 md:pr-10 flex items-center justify-center">
                    <UmanaBurstIcon className={`w-[8vw] h-[8vw] min-w-[45px] min-h-[45px] max-w-[120px] max-h-[120px] ${
                      isDark ? "text-white" : "text-black"
                    } animate-[spin_24s_linear_infinite]`} />
                  </div>
                  {/* WORD 2: SESSIONS */}
                  <span className={`text-[13vw] sm:text-[12vw] md:text-[11.5vw] font-[450] uppercase tracking-[-0.035em] leading-none ${
                    isDark ? "text-white" : "text-black"
                  } font-sans pr-4 sm:pr-8 md:pr-10`}>
                    SESSIONS
                  </span>
                  {/* SUNBURST ICON () */}
                  <div className="pr-4 sm:pr-8 md:pr-10 flex items-center justify-center">
                    <UmanaBurstIcon className={`w-[8vw] h-[8vw] min-w-[45px] min-h-[45px] max-w-[120px] max-h-[120px] ${
                      isDark ? "text-white" : "text-black"
                    } animate-[spin_24s_linear_infinite]`} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 5. SECCIÓN CENTRAL: TEXTO INTRODUCTORIO */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-12 md:py-16 flex flex-col justify-center flex-1">
        {/* Párrafo editorial */}
        <h1 className={`text-[2.2rem] sm:text-[2.8rem] md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.85rem] font-[400] tracking-[-0.035em] leading-[1.05] ${
          isDark ? "text-white" : "text-[#111111]"
        } max-w-[950px]`}>
          Welcome to Barrett Sessions, a vibrant musical platform that celebrates local talent through live performances streamed from our offices.
        </h1>
      </div>

      {/* 6. BOTTOM BAR: (SCROLL) A LA IZQUIERDA, SWITCHER AL MEDIO Y 'SEE ALL PROJECTS' A LA DERECHA */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-8 sm:pb-12 flex items-center justify-between text-sm sm:text-base">
        <span className={`font-bold tracking-tight uppercase ${isDark ? "text-white" : "text-black"}`}>
          (SCROLL)
        </span>

        {/* CONTENEDOR SWITCHER PILL (READING VIEW / VISUAL VIEW) CENTRADO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <div className={`inline-flex items-center rounded-full p-1 border transition-all ${
            isDark 
              ? "bg-[#1d1d21]/80 border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
              : "bg-transparent border-black/40"
          }`}>
            
            {/* OPCIÓN 1: READING VIEW */}
            <button
              type="button"
              onClick={() => setActiveViewMode('reading')}
              className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-[0.95rem] font-normal transition-all duration-300 cursor-pointer ${
                activeViewMode === 'reading'
                  ? (isDark ? "bg-white text-black shadow-sm font-medium" : "bg-black text-white shadow-sm font-medium")
                  : (isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")
              }`}
            >
              Reading View
            </button>

            {/* OPCIÓN 2: VISUAL VIEW */}
            <button
              type="button"
              onClick={() => setActiveViewMode('visual')}
              className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-[0.95rem] font-normal transition-all duration-300 cursor-pointer ${
                activeViewMode === 'visual'
                  ? (isDark ? "bg-white text-black shadow-sm font-medium" : "bg-black text-white shadow-sm font-medium")
                  : (isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")
              }`}
            >
              Visual view
            </button>

          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (onSeeAllProjects) onSeeAllProjects();
            else onNavigate('work');
          }}
          className={`border-b border-black pb-0.5 font-medium transition-opacity hover:opacity-60 cursor-pointer ${
            isDark ? "border-white text-white" : "border-black text-black"
          }`}
        >
          See all projects
        </button>
      </div>

    </header>
  );
};
