import React from 'react';
import { motion } from 'motion/react';
import { UmanaBurstIcon } from './UmanaBurstIcon';

export interface CaseStudyFooterProps {
  theme?: "dark" | "light";
  title?: string;
  nextProjectName?: string;
  nextProjectImage?: string;
  onWorkTogetherClick?: () => void;
}
export const CaseStudyFooter: React.FC<CaseStudyFooterProps> = ({
  title = "ARE YOU READY\nTO RALLY AROUND\nYOUR BIG IDEA?",
  nextProjectName = "UMANA",
  nextProjectImage = "/src/assets/images/umana_powder_cube_1788889215309.jpg",
  onWorkTogetherClick,
  theme = "dark"
}) => {
  return (
    <div className={`w-full flex flex-col pt-24 sm:pt-32 overflow-hidden transition-colors duration-500 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-[#eeeeee] text-black"}` }>
      
      {/* 1. TEXTO PRINCIPAL Y CTA */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col items-start gap-12 sm:gap-16">
        <h2 className="text-[10vw] sm:text-[7vw] md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-[-0.02em] font-[400] whitespace-pre-line uppercase font-sans">
          {title}
        </h2>
        
        <button 
          onClick={onWorkTogetherClick}
          className="text-lg sm:text-xl font-medium tracking-wide pb-1 border-b border-current hover:opacity-70 transition-opacity cursor-pointer"
        >
          Let's work together
        </button>
      </div>

      {/* 2. IMAGEN DEL SIGUIENTE PROYECTO */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 mt-20 sm:mt-24">
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1] overflow-hidden relative">
          <img 
            src={nextProjectImage} 
            alt={`Next case study: ${nextProjectName}`}
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* 3. TEXTO DE TRANSICIÓN E INDICADOR DE SCROLL */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 sm:mt-16 gap-8">
        <p className="text-lg sm:text-xl font-medium leading-snug">
          Keep scrolling for the<br/>next case study.
        </p>
        
        {/* PROGRESS BAR PLACEHOLDER */}
        <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-[300px] h-[1px] ${theme === "dark" ? "bg-white/20" : "bg-black/20"} relative`}>
          <div className={`absolute top-0 left-0 h-full ${theme === "dark" ? "bg-white" : "bg-black"} w-[20%] transition-all duration-300`}></div>
        </div>
      </div>

      {/* 4. MARQUEE GIGANTE FINAL */}
      <div className="relative z-20 w-full overflow-hidden mt-16 sm:mt-24 pb-8 sm:pb-12 select-none">
        <div 
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform items-center" 
          style={{ animationDuration: '40s' }}
        >
          {[0, 1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex items-center shrink-0">
              <span className={`text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none ${theme === "dark" ? "text-white" : "text-black"} font-sans pr-6 sm:pr-10 md:pr-14`}>
                {nextProjectName}
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className={`w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] ${theme === "dark" ? "text-white" : "text-black"} animate-[spin_30s_linear_infinite]`} />
              </div>
              <span className={`text-[15vw] md:text-[14vw] lg:text-[13vw] font-[250] uppercase tracking-[-0.03em] leading-none ${theme === "dark" ? "text-white" : "text-black"} font-sans pr-6 sm:pr-10 md:pr-14`}>
                {nextProjectName}
              </span>
              <div className="pr-6 sm:pr-10 md:pr-14 flex items-center justify-center">
                <UmanaBurstIcon className={`w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] max-w-[130px] max-h-[130px] ${theme === "dark" ? "text-white" : "text-black"} animate-[spin_30s_linear_infinite]`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
