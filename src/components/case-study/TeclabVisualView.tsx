import React from 'react';
import { AppView } from '../../types';

export interface TeclabVisualViewProps {
  theme?: "dark" | "light";
  onNavigate: (view: AppView) => void;
}

export const TeclabVisualView: React.FC<TeclabVisualViewProps> = ({
  theme = "light",
  onNavigate
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f4f4f5] text-[#111111]"
    } pb-16 sm:pb-24`}>
      
      {/* =========================================================================
          1. MAIN EDITORIAL PROJECT OVERVIEW (01)
          ========================================================================= */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
          
          {/* Columna Izquierda: (01) Project Overview */}
          <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
            isDark ? 'text-white/85' : 'text-black/90'
          } select-none`}>
            <span>(01)</span>
            <div className="mt-8 sm:mt-10">
              Project<br />
              Overview
            </div>
          </div>
          
          {/* Columna Derecha: Título, Narrativa Editorial y Tabla de Detalles */}
          <div className="flex flex-col">
            
            {/* Titular Principal */}
            <h1 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.35rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.08] ${
              isDark ? 'text-white' : 'text-black'
            } max-w-[1280px]`}>
              With a deep understanding of the construction sector’s evolution, Teclab recognized the considerable innovations in materials, systems, and elements utilized in project execution.
            </h1>
            
            {/* Párrafos Editoriales */}
            <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
              isDark ? 'text-gray-300' : 'text-[#222222]'
            } font-light leading-[1.65] max-w-[960px] mt-10 sm:mt-14`}>
              <p>
                As urban developments and sustainable building standards demand ever-higher precision, Teclab emerged to bridge the gap between technical material engineering and seamless architectural execution.
              </p>
              <p>
                We engineered a modular visual identity and robust industrial packaging system that mirrors the rigorous structural geometry of modern construction. From high-visibility neon accentuation to durable matte black technical boxes, every asset conveys reliability, precision, and state-of-the-art craftsmanship.
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
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Type</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand & Industrial Identity</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2024</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Country</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Sources</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Branding, Industrial Design, Packaging</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SHOWCASE SHOWPIECE (FOTOGRAFÍA A PANTALLA COMPLETA DEL CASO)
          ========================================================================= */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        <div className="w-full overflow-hidden shadow-sm aspect-[16/9] bg-[#141517] rounded-sm">
          <img 
            src="/images/teclab_hero.jpg" 
            alt="Teclab Industrial Engineering and Packaging"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
