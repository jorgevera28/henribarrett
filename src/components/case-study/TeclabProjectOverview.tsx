import React from 'react';

export interface TeclabProjectOverviewProps {
  theme?: 'dark' | 'light';
}

export const TeclabProjectOverview: React.FC<TeclabProjectOverviewProps> = ({
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id="teclab-project-overview" 
      className={`w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 max-w-[1700px] mx-auto transition-colors duration-500 select-text ${
        isDark ? 'text-white' : 'text-black'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
        
        {/* Columna Izquierda: (01) Project Overview */}
        <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
          isDark ? 'text-white/80' : 'text-black/80'
        } select-none`}>
          <span>(01)</span>
          <div className="mt-8 sm:mt-10 font-normal">
            Project<br />
            Overview
          </div>
        </div>
        
        {/* Columna Derecha: Título, Narrativa Editorial y Tabla de Detalles */}
        <div className="flex flex-col">
          
          {/* Titular Principal - Exacto a SG_showcase_project_overview.png */}
          <h1 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[4.85rem] font-[350] tracking-[-0.035em] leading-[1.08] ${
            isDark ? 'text-white' : 'text-black'
          } max-w-[1280px]`}>
            Teclab, a construction services company, come to us to share their vision of revitalizing their identity.
          </h1>
          
          {/* Párrafo Editorial - Exacto a SG_showcase_project_overview.png */}
          <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] ${
            isDark ? 'text-white/70' : 'text-[#333333]'
          } font-light leading-[1.65] max-w-[980px] mt-10 sm:mt-14`}>
            <p>
              Guided by their vision, we crafted a refreshed logo and iconography, incorporating the essence of Teclab's rich heritage while infusing it with a contemporary touch. Drawing inspiration from the strength and durability found in engineering and architecture, we employed angled elements that resonate with stability and resilience.
            </p>
          </div>
          
          {/* Tabla (DETAILS) con separadores limpios */}
          <div className="flex flex-col text-[0.95rem] sm:text-[1.05rem] max-w-[840px] mt-14 sm:mt-20">
            
            <div className={`pb-4 border-b ${
              isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'
            } font-medium tracking-wide`}>
              <span>(DETAILS)</span>
            </div>
            
            <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
              isDark ? 'border-white/20' : 'border-black/25'
            }`}>
              <span className={isDark ? 'text-white/60' : 'text-[#555]'}>Type</span>
              <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Rebrand</span>
            </div>
            
            <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
              isDark ? 'border-white/20' : 'border-black/25'
            }`}>
              <span className={isDark ? 'text-white/60' : 'text-[#555]'}>Year</span>
              <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2024</span>
            </div>
            
            <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
              isDark ? 'border-white/20' : 'border-black/25'
            }`}>
              <span className={isDark ? 'text-white/60' : 'text-[#555]'}>Country</span>
              <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
            </div>
            
            <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
              isDark ? 'border-white/20' : 'border-black/25'
            }`}>
              <span className={isDark ? 'text-white/60' : 'text-[#555]'}>Sources</span>
              <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Illustration, Graphic Design</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
