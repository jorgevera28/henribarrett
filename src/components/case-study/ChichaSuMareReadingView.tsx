import React from 'react';
import { AppView } from '../../types';

interface ChichaSuMareReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const ChichaSuMareReadingView: React.FC<ChichaSuMareReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>
      
      {/* 2-COLUMN SPLIT LAYOUT: FOTOS A LA IZQUIERDA Y BLOQUE EDITORIAL FIJO A LA DERECHA (STICKY) */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-32 md:pt-36 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24">
          
          {/* =========================================================================
              COLUMNA IZQUIERDA: Galería de imágenes completa del caso
              ========================================================================= */}
          <div className="w-full md:w-[46%] lg:w-[44%] xl:w-[42%] flex flex-col gap-5 sm:gap-6 shrink-0">
            
            {/* 1. Master Illustration & Identity */}
            <div className="w-full overflow-hidden shadow-sm aspect-[16/9] bg-gradient-to-br from-[#FB6AE6] via-[#909FF4] to-[#FEF609] rounded-[2px]">
              <img
                src="/assets/aistudio/SG_ChicaSumare_header_b9cd59aa.png"
                alt="Chicha Su Mare - Master Artwork"
                className="w-full h-full object-cover object-center pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* 2. Color Bar Strip */}
            <div className={`p-6 sm:p-8 rounded-[2px] ${
              isDark ? 'bg-[#151517] border border-white/5' : 'bg-[#fafafa] border border-black/5'
            }`}>
              <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium block mb-4">
                (02) Chromatic Energy
              </span>
              <div className="flex h-12 w-full rounded-[2px] overflow-hidden mb-3">
                <div className="flex-1 bg-[#FB6AE6]" />
                <div className="flex-1 bg-[#909FF4]" />
                <div className="flex-1 bg-[#38D9A9]" />
                <div className="flex-1 bg-[#FEF609]" />
                <div className="flex-1 bg-[#FF6B35]" />
              </div>
              <p className="text-xs text-black/60 dark:text-white/60 font-light">
                Screen-printed Lima poster fluorescent ink system.
              </p>
            </div>

            {/* 3. Vernacular Type Specimen */}
            <div className={`p-8 sm:p-10 rounded-[2px] ${
              isDark ? 'bg-[#151517] border border-white/5' : 'bg-[#fafafa] border border-black/5'
            }`}>
              <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium block mb-3">
                (03) Sign-Painting Typography
              </span>
              <span className="text-4xl font-extrabold uppercase bg-gradient-to-r from-[#FB6AE6] via-[#FF6B35] to-[#FEF609] bg-clip-text text-transparent block">
                CHICHA SU MARE
              </span>
              <p className="text-xs text-black/60 dark:text-white/60 font-light mt-2">
                Handcrafted letterforms celebrating popular Peruvian street culture.
              </p>
            </div>

          </div>

          {/* =========================================================================
              COLUMNA DERECHA: Bloque editorial sticky
              ========================================================================= */}
          <div className="w-full md:w-[54%] lg:w-[56%] xl:w-[58%]">
            <div className="md:sticky md:top-28 lg:top-32 flex flex-col pt-2">
              
              {/* Encabezado: (01) Project Overview */}
              <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
                isDark ? 'text-white/80' : 'text-black/85'
              } select-none mb-6`}>
                <span>(01) Project Overview</span>
              </div>
              
              {/* Titular Principal Exacto a la Imagen */}
              <h1 className={`text-[2rem] sm:text-[2.6rem] lg:text-[3.25rem] font-[350] tracking-[-0.025em] leading-[1.1] ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Bringing Chicha culture into a new generation
              </h1>
              
              {/* Párrafos Editoriales Exactos a la Imagen */}
              <div className={`flex flex-col gap-5 sm:gap-6 text-[1rem] sm:text-[1.08rem] ${
                isDark ? 'text-gray-300' : 'text-[#2a2a2a]'
              } font-light leading-[1.65] mt-8 sm:mt-10 max-w-[760px]`}>
                <p>
                  Chicha Su Mare is a Peruvian music festival created to bring Chicha culture closer to new audiences, celebrating its roots while giving it a contemporary voice. Born from the fusion of Andean, Amazonian, and urban influences, Chicha represents more than music — it is an expression of cultural identity, resilience, and collective energy. The festival embraces this heritage, transforming its vibrant spirit into an experience that connects tradition with new generations.
                </p>
                <p>
                  The visual identity reinterprets traditional Chicha graphics through bold typography, vibrant color contrasts, expressive illustrations, and a dynamic modular system. Inspired by the cultural fusion behind the genre, the graphic language incorporates Andean and Shipibo-inspired patterns, symbolic characters, and playful motion. At its core, the Chicha Gene represents the rhythm that connects individuals through music and shared experiences, creating a flexible identity that celebrates Chicha's past while projecting its energy into the future.
                </p>
              </div>
              
              {/* Tabla de Detalles */}
              <div className="flex flex-col text-[0.92rem] sm:text-[0.98rem] max-w-[760px] mt-10 sm:mt-12">
                <div className={`pb-3 border-b ${
                  isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'
                } font-medium tracking-wide`}>
                  <span>(DETAILS)</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 border-b ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#444]'}>Type</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Music Festival Identity</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 border-b ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#444]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2025</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 border-b ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#444]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 border-b ${
                  isDark ? 'border-white/15' : 'border-black/15'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#444]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right leading-snug`}>
                    Branding, Graphic Design,<br className="hidden sm:inline" /> Illustration & Motion Design
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
