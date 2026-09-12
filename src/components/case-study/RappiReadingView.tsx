import React from 'react';
import { UmanaBurstIcon } from './UmanaBurstIcon';
import { AppView } from '../../../App';

interface RappiReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const RappiReadingView: React.FC<RappiReadingViewProps> = ({ 
  theme = "light",
  onNavigate 
}) => {
  const isDark = theme === "dark";

  const images = [
    '/images/rappi_cyclist_hero.jpg',
    '/images/rappi_flyer_mockup.jpg',
    '/images/rappi_holding_flyer.jpg',
    '/images/rappi_3d_studio.jpg',
    '/images/rappi_led_studio.jpg',
    '/images/rappi_fridge_recipe.jpg',
    '/images/rappi_neon_moss.jpg',
    '/images/rappi_spinning_kit.jpg',
  ];

  return (
    <div className={`w-full transition-colors duration-500 ${isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"} pb-24`}>
      
      {/* 1. TOP MINIMAL NAVIGATION BAR */}
      <nav className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-8 sm:pt-12 pb-8 flex items-center justify-between">
        <button 
          onClick={() => onNavigate && onNavigate('home')} 
          className="flex items-start gap-1 cursor-pointer group focus:outline-none"
          aria-label="Henri Barrett Home"
        >
          <UmanaBurstIcon className={`w-7 h-7 transition-transform duration-500 group-hover:rotate-45 ${isDark ? 'text-white' : 'text-black'}`} />
          <span className={`text-[10px] font-bold leading-none -mt-0.5 ${isDark ? 'text-white' : 'text-black'}`}>®</span>
        </button>

        <div className="flex items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium">
          <button 
            onClick={() => onNavigate && onNavigate('work-with-us')} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-70 cursor-pointer ${isDark ? 'border-white text-white' : 'border-black text-black'}`}
          >
            Work with us
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('work')} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-70 cursor-pointer ${isDark ? 'border-white text-white' : 'border-black text-black'}`}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* 2. READING VIEW 2-COLUMN LAYOUT */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-20 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-28">

          {/* COLUMNA IZQUIERDA: Galería de imágenes (scroll vertical) */}
          <div className="w-full md:w-[50%] lg:w-[46%] flex flex-col gap-6">
            {images.map((src, idx) => (
              <div key={idx} className="w-full relative overflow-hidden shadow-sm group">
                <img
                  src={src}
                  alt={`Rappi project frame ${idx + 1}`}
                  className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA: Bloque editorial sticky */}
          <div className="w-full md:w-[50%] lg:w-[54%] relative">
            <div className="sticky top-28 flex flex-col gap-10">
              
              <div className="flex flex-col">
                <div className={`text-sm sm:text-[0.95rem] font-normal leading-relaxed ${isDark ? 'text-white/85' : 'text-black/90'} select-none mb-8`}>
                  (01)<br />
                  <span className="mt-2 inline-block">Project<br />Overview</span>
                </div>
                
                <h1 className={`text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-[400] tracking-[-0.025em] leading-[1.12] ${isDark ? 'text-white' : 'text-black'}`}>
                  Rappi asked us to think in an event concept for the Turbo Fresh platform launch, the event was an activation with a spinning class that revealed “The Secret Routine” of the brand's delivery riders.
                </h1>
                
                <div className={`flex flex-col gap-5 text-[1rem] sm:text-[1.08rem] ${isDark ? 'text-gray-300' : 'text-[#333333]'} font-light leading-[1.6] mt-8`}>
                  <p>
                    We were involved in the whole project from concept, key visual, kits and production.
                  </p>
                  <p>
                    For the “Secret Routine” at the launch of Rappi's Turbo Fresh platform, we developed the key visual and the whole concept around a loose and dynamic illustrations style that somehow represented the speed of the service to arrive in 10 minutes . The illustrations were animated and used to integrate them into the venue's stage, to ensure a seamless and immersive experience for the participants.
                  </p>
                </div>
              </div>

              {/* DETAILS TABLE */}
              <div className="flex flex-col text-[0.95rem] sm:text-[1rem]">
                <div className={`py-3.5 border-b ${isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'} font-medium tracking-wide`}>
                  <span>(DETAILS)</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Type</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2021</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Production, Event</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
