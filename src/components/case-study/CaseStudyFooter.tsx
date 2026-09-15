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
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-black"
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
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-8 sm:pt-14 pb-12 sm:pb-16 max-w-[1700px] mx-auto">
        <div className="flex flex-col items-start gap-6 sm:gap-10">
          <h2 className="text-[3.25rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.75rem] xl:text-[8.75rem] leading-[0.91] tracking-[-0.04em] font-[450] whitespace-pre-line uppercase font-sans max-w-[1500px]">
            {title}
          </h2>
          
          <button 
            onClick={handleWorkTogether}
            className={`text-base sm:text-lg font-normal tracking-tight pb-0.5 border-b transition-opacity hover:opacity-60 cursor-pointer ${
              isDark ? "border-white text-white" : "border-black text-black"
            }`}
          >
            Let's work together
          </button>
        </div>
      </section>

      {/* 3. TRANSITION / SHOWCASE IMAGE */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1700px] mx-auto">
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[1.62/1] overflow-hidden shadow-sm bg-neutral-900">
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
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1700px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end mt-8 sm:mt-12 mb-12 sm:mb-16 gap-6">
        <p className="text-sm sm:text-base md:text-lg font-normal leading-snug">
          Keep scrolling for the<br />next case study.
        </p>
        
        {/* PROGRESS INDICATOR BARS */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className={`h-[1px] w-16 sm:w-24 ${isDark ? "bg-white/30" : "bg-black/20"}`} />
          <div className={`h-[1px] w-28 sm:w-44 ${isDark ? "bg-white/80" : "bg-black/60"}`} />
        </div>
      </div>

      {/* 5. MARQUEE GIGANTE */}
      <div className="relative z-20 w-full overflow-hidden select-none py-2 sm:py-4">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '30s' }}
        >
          {[0, 1].map((setIndex) => {
            const wordsList = marqueeWords.length > 0 ? marqueeWords : ["RAPPI"];
            return (
              <div key={setIndex} className="flex items-center shrink-0">
                {[0, 1, 2, 3].map((repIndex) => (
                  <div key={repIndex} className="flex items-center shrink-0">
                    {wordsList.map((word, wIdx) => (
                      <div key={wIdx} className="flex items-center shrink-0">
                        <span className={`text-[15vw] sm:text-[14vw] md:text-[13vw] font-[450] uppercase tracking-[-0.035em] leading-none ${
                          isDark ? "text-white" : "text-black"
                        } font-sans pr-4 sm:pr-8 md:pr-12`}>
                          {word}
                        </span>

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
            );
          })}
        </div>
      </div>

      {/* 6. NEXT PROJECT HERO */}
      <div 
        onClick={onNextProjectClick}
        className="w-full overflow-hidden relative cursor-pointer group"
        title={`Discover ${nextProjectTitle}`}
      >
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.1/1] overflow-hidden relative bg-[#EBECEE]">
          <img 
            src={nextProjectHeroImage} 
            alt={nextProjectTitle}
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
    </div>
  );
};
