import React from 'react';
import { AppView } from '../../types';

interface ChichaSuMareVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const ChichaSuMareVisualView: React.FC<ChichaSuMareVisualViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-24`}>
      
      {/* =========================================================================
          1. MAIN EDITORIAL PROJECT OVERVIEW (01)
          ========================================================================= */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-24 max-w-[1700px] mx-auto">
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
            
            {/* Titular Principal Exacto a la Imagen */}
            <h1 className={`text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] font-[350] tracking-[-0.03em] leading-[1.06] ${
              isDark ? 'text-white' : 'text-black'
            } max-w-[1100px]`}>
              Bringing Chicha culture into a new generation
            </h1>
            
            {/* Párrafos Editoriales Exactos a la Imagen */}
            <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.22rem] ${
              isDark ? 'text-gray-300' : 'text-[#1e1e1e]'
            } font-light leading-[1.62] max-w-[940px] mt-10 sm:mt-14`}>
              <p>
                Chicha Su Mare is a Peruvian music festival created to bring Chicha culture closer to new audiences, celebrating its roots while giving it a contemporary voice. Born from the fusion of Andean, Amazonian, and urban influences, Chicha represents more than music — it is an expression of cultural identity, resilience, and collective energy. The festival embraces this heritage, transforming its vibrant spirit into an experience that connects tradition with new generations.
              </p>
              <p>
                The visual identity reinterprets traditional Chicha graphics through bold typography, vibrant color contrasts, expressive illustrations, and a dynamic modular system. Inspired by the cultural fusion behind the genre, the graphic language incorporates Andean and Shipibo-inspired patterns, symbolic characters, and playful motion. At its core, the Chicha Gene represents the rhythm that connects individuals through music and shared experiences, creating a flexible identity that celebrates Chicha's past while projecting its energy into the future.
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Music Festival Identity</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2025</span>
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right leading-snug`}>
                  Branding, Graphic Design,<br className="hidden sm:inline" /> Illustration & Motion Design
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SHOWCASE MODULES: KEY VISUAL ASSET
          ========================================================================= */}
      <div className="w-full flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        
        {/* MODULE 1: Full-width Header Artwork Showcase */}
        <section className="w-full overflow-hidden shadow-sm aspect-[16/9] bg-gradient-to-br from-[#FB6AE6] via-[#909FF4] to-[#FEF609] relative rounded-[2px]">
          <img 
            src="/assets/aistudio/SG_ChicaSumare_header_b9cd59aa.png" 
            alt="Chicha Su Mare - Full Visual Identity & Tiger Illustration" 
            className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </section>

        {/* MODULE 2: Dual Aesthetic Color & Typography Exploration */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Card 1: Neon Chromatic Palette */}
          <div className={`p-8 sm:p-12 flex flex-col justify-between aspect-[4/3] rounded-[2px] transition-colors ${
            isDark ? 'bg-[#151517] border border-white/5' : 'bg-white border border-black/5 shadow-sm'
          }`}>
            <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium">
              (02) Color System
            </span>
            <div className="flex flex-col gap-3">
              <div className="flex h-14 sm:h-18 w-full rounded-[2px] overflow-hidden">
                <div className="flex-1 bg-[#FB6AE6]" title="Electric Magenta #FB6AE6" />
                <div className="flex-1 bg-[#909FF4]" title="Psychedelic Periwinkle #909FF4" />
                <div className="flex-1 bg-[#38D9A9]" title="Amazonian Mint #38D9A9" />
                <div className="flex-1 bg-[#FEF609]" title="Solar Chicha Yellow #FEF609" />
                <div className="flex-1 bg-[#FF6B35]" title="Andean Sunset Orange #FF6B35" />
              </div>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'} font-light mt-2`}>
                Inspired by the iconic handmade screen-printed Chicha concert posters plastered across Lima's urban avenues.
              </p>
            </div>
            <div className="text-xs text-black/40 dark:text-white/40">
              #FB6AE6 · #909FF4 · #38D9A9 · #FEF609
            </div>
          </div>

          {/* Card 2: Iconic Typography & Energy */}
          <div className={`p-8 sm:p-12 flex flex-col justify-between aspect-[4/3] rounded-[2px] transition-colors ${
            isDark ? 'bg-[#151517] border border-white/5' : 'bg-white border border-black/5 shadow-sm'
          }`}>
            <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium">
              (03) Vernacular Type
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase bg-gradient-to-r from-[#FB6AE6] via-[#FF6B35] to-[#FEF609] bg-clip-text text-transparent">
                CHICHA SU MARE
              </span>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'} font-light mt-1`}>
                Bold, expansive letterforms engineered to roar from festival stages, banners, and digital platforms.
              </p>
            </div>
            <div className="text-xs text-black/40 dark:text-white/40">
              Vernacular Lettering · High Impact Display
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
