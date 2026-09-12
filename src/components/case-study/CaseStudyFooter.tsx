import React from 'react';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface CaseStudyFooterProps {
  theme?: "dark" | "light";
  title?: string;
  onWorkTogetherClick?: () => void;
  onNavigate?: (view: any) => void;
  currentProjectImage?: string;
  currentProjectImageAlt?: string;
  marqueeWords?: string[];
  nextProjectTitle?: string;
  nextProjectHeroImage?: string;
  onNextProjectClick?: () => void;
}

export const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({
  title = "ARE YOU READY\nTO RALLY AROUND\nYOUR BIG IDEA?",
  currentProjectImage = "/images/rappi_outro_routine.jpg",
  currentProjectImageAlt = "The Secret Routine Turbo - Fresh + Rappi",
  marqueeWords = ["BARRETT", "SESSIONS"],
  nextProjectHeroImage = "/images/barrett_sessions_hero.jpg",
  nextProjectTitle = "Barrett Sessions",
  onWorkTogetherClick,
  onNavigate,
  onNextProjectClick,
  theme = "light"
}) => {
  const isDark = theme === "dark";

  const handleWorkTogether = () => {
    if (onWorkTogetherClick) {
      onWorkTogetherClick();
    } else if (onNavigate) {
      onNavigate('work-with-us');
    }
  };

  const handleMenuClick = () => {
    if (onNavigate) {
      onNavigate('work');
    }
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className={`w-full flex flex-col transition-colors duration-500 overflow-hidden ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"
    }`}>
      
      {/* 1. TOP MINIMAL NAVIGATION BAR (Burst icon with ® on left, 'Work with us' & 'Menu' on right) */}
      <nav className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-8 sm:pt-12 pb-8 flex items-center justify-between">
        <button 
          onClick={handleHomeClick} 
          className="flex items-start gap-1 cursor-pointer group focus:outline-none"
          aria-label="Henri Barrett Home"
        >
          <UmanaBurstIcon className={`w-7 h-7 transition-transform duration-500 group-hover:rotate-45 ${isDark ? 'text-white' : 'text-black'}`} />
          <span className={`text-[10px] font-bold leading-none -mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>®</span>
        </button>

        <div className="flex items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium">
          <button 
            onClick={handleWorkTogether} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-70 cursor-pointer ${
              isDark ? 'border-white text-white' : 'border-black text-black'
            }`}
          >
            Work with us
          </button>
          <button 
            onClick={handleMenuClick} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-70 cursor-pointer ${
              isDark ? 'border-white text-white' : 'border-black text-black'
            }`}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* 2. MAIN HEADLINE AND 'LET'S WORK TOGETHER' CTA */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-10 pb-16 max-w-[1700px] mx-auto">
        <div className="flex flex-col items-start gap-8 sm:gap-12">
          <h2 className="text-[3rem] sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.5rem] leading-[1.0] tracking-[-0.03em] font-[400] whitespace-pre-line uppercase font-sans max-w-[1400px]">
            {title}
          </h2>
          
          <button 
            onClick={handleWorkTogether}
            className={`text-base sm:text-lg font-medium tracking-wide pb-1 border-b transition-opacity hover:opacity-70 cursor-pointer ${
              isDark ? "border-white/80 text-white" : "border-black/80 text-black"
            }`}
          >
            Let's work together
          </button>
        </div>
      </section>

      {/* 3. TRANSITION IMAGE (RAPPI / CURRENT CASE STUDY OUTRO) */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1700px] mx-auto">
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[1.9/1] overflow-hidden shadow-sm bg-neutral-200">
          <img 
            src={currentProjectImage} 
            alt={currentProjectImageAlt}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 4. 'KEEP SCROLLING FOR THE NEXT CASE STUDY' + PROGRESS BARS */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1700px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end mt-10 sm:mt-14 mb-14 sm:mb-20 gap-8">
        <p className="text-base sm:text-lg font-normal leading-snug">
          Keep scrolling for the<br />next case study.
        </p>
        
        {/* PROGRESS INDICATOR BARS */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className={`h-[1.5px] w-20 sm:w-28 ${isDark ? "bg-white/30" : "bg-black/25"}`} />
          <div className={`h-[1.5px] w-36 sm:w-48 ${isDark ? "bg-white/80" : "bg-black/70"}`} />
        </div>
      </div>

      {/* 5. MARQUEE GIGANTE: BARRETT () SESSIONS */}
      <div className="relative z-20 w-full overflow-hidden select-none py-2 sm:py-4">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '32s' }}
        >
          {/* We render two identical sets so the 0% -> -50% translateX marquee loops seamlessly */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0">
              {[0, 1, 2, 3].map((repIndex) => (
                <div key={repIndex} className="flex items-center shrink-0">
                  {/* WORD 1: BARRETT */}
                  <span className={`text-[15vw] sm:text-[14vw] md:text-[13vw] font-[450] uppercase tracking-[-0.03em] leading-none ${
                    isDark ? "text-white" : "text-black"
                  } font-sans pr-4 sm:pr-8 md:pr-12`}>
                    {marqueeWords[0] || "BARRETT"}
                  </span>

                  {/* SUNBURST ICON () */}
                  <div className="pr-4 sm:pr-8 md:pr-12 flex items-center justify-center">
                    <UmanaBurstIcon className={`w-[9vw] h-[9vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] ${
                      isDark ? "text-white" : "text-black"
                    } animate-[spin_24s_linear_infinite]`} />
                  </div>

                  {/* WORD 2: SESSIONS */}
                  <span className={`text-[15vw] sm:text-[14vw] md:text-[13vw] font-[450] uppercase tracking-[-0.03em] leading-none ${
                    isDark ? "text-white" : "text-black"
                  } font-sans pr-4 sm:pr-8 md:pr-12`}>
                    {marqueeWords[1] || "SESSIONS"}
                  </span>

                  {/* SUNBURST ICON () */}
                  <div className="pr-4 sm:pr-8 md:pr-12 flex items-center justify-center">
                    <UmanaBurstIcon className={`w-[9vw] h-[9vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] ${
                      isDark ? "text-white" : "text-black"
                    } animate-[spin_24s_linear_infinite]`} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 6. NEXT PROJECT HERO (BARRETT SESSIONS - FULL BLEED PORTRAIT) */}
      <div 
        onClick={onNextProjectClick}
        className="w-full overflow-hidden relative cursor-pointer group"
        title={`Discover ${nextProjectTitle}`}
      >
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.1/1] overflow-hidden relative bg-[#0b2b64]">
          <img 
            src={nextProjectHeroImage} 
            alt={nextProjectTitle}
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          {/* Subtle bottom gradient / ambient touch */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
      </div>
      
    </div>
  );
};
