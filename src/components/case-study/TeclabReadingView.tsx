import React from 'react';
import { AppView } from '../../types';

export interface TeclabReadingViewProps {
  theme?: "dark" | "light";
  onNavigate: (view: AppView) => void;
}

export const TeclabReadingView: React.FC<TeclabReadingViewProps> = ({
  theme = "light",
  onNavigate
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>
      
      {/* =========================================================================
          2-COLUMN SPLIT LAYOUT:
          Left: Gallery of images scrolling naturally with the page
          Right: Sticky editorial text block staying fixed until all images pass
          ========================================================================= */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-32 md:pt-36 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24">
          
          {/* =========================================================================
              LEFT COLUMN: Full image stack scrolling vertically
              ========================================================================= */}
          <div className="w-full md:w-[46%] lg:w-[44%] xl:w-[42%] flex flex-col gap-4 sm:gap-5 shrink-0">
            
            {/* 1. Industrial Concrete & Pipe Perspective */}
            <div className="w-full overflow-hidden shadow-sm aspect-[4/3] bg-[#141517]">
              <img 
                src="/images/teclab_hero.jpg" 
                alt="Teclab Industrial Packaging and Construction pipe"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 2. Technical details and Packaging focus */}
            <div className="w-full overflow-hidden shadow-sm aspect-[16/10] bg-[#1a1b1e]">
              <img 
                src="/images/teclab_hero.jpg" 
                alt="Teclab precision structural materials and elements"
                className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Sticky editorial block staying fixed until all images pass
              ========================================================================= */}
          <div className="w-full md:w-[54%] lg:w-[56%] xl:w-[58%] relative">
            <div className="md:sticky md:top-28 lg:top-32 xl:top-36 flex flex-col pt-1 sm:pt-2 max-w-[850px] pb-12">
              
              {/* ================= SECCIÓN (01) PROJECT OVERVIEW ================= */}
              <div className="flex flex-col">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${
                  isDark ? 'text-white/85' : 'text-black'
                } select-none mb-6 sm:mb-8`}>
                  <p>(01)</p>
                  <p className="mt-1">Project</p>
                  <p>Overview</p>
                </div>
                
                <h1 className={`text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.12] ${
                  isDark ? 'text-white' : 'text-black'
                } max-w-[820px]`}>
                  With a deep understanding of the construction sector’s evolution, Teclab recognized the considerable innovations in materials, systems, and elements utilized in project execution.
                </h1>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    As urban developments and sustainable building standards demand ever-higher precision, Teclab emerged to bridge the gap between technical material engineering and seamless architectural execution.
                  </p>
                  <p>
                    We engineered a modular visual identity and robust industrial packaging system that mirrors the rigorous structural geometry of modern construction. From high-visibility neon accentuation to durable matte black technical boxes, every asset conveys reliability, precision, and state-of-the-art craftsmanship.
                  </p>
                </div>
              </div>

              {/* ================= (DETAILS) TABLE ================= */}
              <div className="flex flex-col text-[0.95rem] sm:text-[1rem] mt-10 sm:mt-12 max-w-[780px]">
                <div className={`py-3.5 border-b ${
                  isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'
                } font-medium tracking-wide`}>
                  <span>(DETAILS)</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Type</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand & Industrial Identity</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2024</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Branding, Industrial Design, Packaging</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
