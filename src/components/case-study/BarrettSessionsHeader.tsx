import React from 'react';
import { MainNav, AppView } from '../../../App';
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
      isDark ? "bg-[#111111] text-white" : "bg-[#ECECEE] text-black"
    }`}>
      
      {/* 1. STUDIO LIGHTING BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 75% 60%, #1e1e22 0%, #111111 65%, #0a0a0c 100%)'
            : 'radial-gradient(ellipse at 75% 55%, #F4F4F6 0%, #ECECEE 55%, #E2E2E5 100%)',
        }}
      />

      {/* 2. RIGHT-SIDE 3D PEDESTAL & ILLUMINATED LIGHTBOX HERO VISUAL */}
      <div className="absolute right-0 bottom-0 top-16 md:top-24 w-full md:w-[62%] lg:w-[58%] xl:w-[54%] pointer-events-none z-10 flex items-end justify-end overflow-hidden">
        <div className="relative w-full h-full max-h-[92%] flex items-end justify-end">
          
          {/* Main 3D Pedestal Sign Image */}
          <img
            src="/images/barrett_sessions_pedestal_sign.jpg"
            alt="Barrett Sessions illuminated sign on concrete pedestal"
            className={`w-full h-auto max-h-full object-contain object-bottom-right transition-opacity duration-700 ${
              isDark ? "brightness-[0.92] contrast-[1.08]" : "contrast-[1.02]"
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Smooth blend gradients to integrate seamlessly with the studio background */}
          <div className={`absolute inset-y-0 left-0 w-24 sm:w-40 md:w-56 bg-gradient-to-r pointer-events-none ${
            isDark ? "from-[#111111] via-[#111111]/70 to-transparent" : "from-[#ECECEE] via-[#ECECEE]/70 to-transparent"
          }`} />
          <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b pointer-events-none ${
            isDark ? "from-[#111111] via-[#111111]/40 to-transparent" : "from-[#ECECEE] via-[#ECECEE]/40 to-transparent"
          }`} />
          <div className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t pointer-events-none ${
            isDark ? "from-[#111111] to-transparent" : "from-[#E2E2E5]/60 to-transparent"
          }`} />
        </div>
      </div>

      {/* 3. TOP NAVIGATION BAR */}
      <div className="relative z-30 w-full">
        <MainNav 
          currentView="case-study-barrett-sessions" 
          setCurrentView={onNavigate} 
          isHome={false} 
          bgColor="bg-transparent" 
        />
      </div>

      {/* 4. MARQUEE GIGANTE SUPERIOR: BARRETT ✹ SESSIONS (MATCH EXACTO A SG_Barrett Sessions.png) */}
      <div className="relative z-20 w-full overflow-hidden pt-2 sm:pt-4 select-none pointer-events-none">
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

      {/* 5. SECCIÓN CENTRAL: TEXTO INTRODUCTORIO Y SWITCHER DE VISTAS (PILL) */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-12 md:py-16 flex flex-col justify-center max-w-[900px]">
        {/* Párrafo editorial (Match exacto al texto de la carátula) */}
        <h1 className={`text-[1.85rem] sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3rem] font-[400] tracking-[-0.03em] leading-[1.14] ${
          isDark ? "text-white" : "text-black"
        } max-w-[760px]`}>
          Welcome to Barrett Sessions, a vibrant musical platform that celebrates local talent through live performances streamed from our offices.
        </h1>

        {/* CONTENEDOR SWITCHER PILL (READING VIEW / VISUAL VIEW) */}
        <div className="mt-8 sm:mt-12 flex items-center">
          <div className={`inline-flex items-center rounded-full p-1 border transition-all ${
            isDark 
              ? "bg-[#1d1d21]/80 border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
              : "bg-white/80 border-black/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          } backdrop-blur-sm`}>
            
            {/* OPCIÓN 1: READING VIEW */}
            <button
              type="button"
              onClick={() => setActiveViewMode('reading')}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-normal transition-all duration-300 cursor-pointer ${
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
              className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-normal transition-all duration-300 cursor-pointer ${
                activeViewMode === 'visual'
                  ? (isDark ? "bg-white text-black shadow-sm font-medium" : "bg-black text-white shadow-sm font-medium")
                  : (isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")
              }`}
            >
              Visual view
            </button>
          </div>
        </div>
      </div>

      {/* 6. BOTTOM BAR: (SCROLL) A LA IZQUIERDA Y 'SEE ALL PROJECTS' A LA DERECHA */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-8 sm:pb-12 flex items-center justify-between text-sm sm:text-base">
        <span className={`font-bold tracking-tight uppercase ${isDark ? "text-white" : "text-black"}`}>
          (SCROLL)
        </span>

        <button
          type="button"
          onClick={() => {
            if (onSeeAllProjects) onSeeAllProjects();
            else onNavigate('work');
          }}
          className={`border-b pb-0.5 font-medium transition-opacity hover:opacity-60 cursor-pointer ${
            isDark ? "border-white text-white" : "border-black text-black"
          }`}
        >
          See all projects
        </button>
      </div>

    </header>
  );
};
