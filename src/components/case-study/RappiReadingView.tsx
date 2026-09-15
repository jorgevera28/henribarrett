import React from 'react';
import { UmanaBurstIcon } from './UmanaBurstIcon';
import { AppView } from '../../../App';
import { Heart, Send, Bookmark } from 'lucide-react';

interface RappiReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const RappiReadingView: React.FC<RappiReadingViewProps> = ({ 
  theme = "light",
  onNavigate 
}) => {
  const isDark = theme === "dark";

  // Las 7 imágenes del stack vertical que preceden al contenedor coral de stories
  const showcaseImages = [
    {
      src: '/images/rappi_cyclist_hero.jpg',
      alt: 'Rappi Turbo-Fresh Key Visual Illustration of cyclist hands with fruits basket',
    },
    {
      src: '/images/rappi_flyer_mockup.jpg',
      alt: 'The Secret Routine Turbo-Fresh + Síclo invitation flyer cards',
    },
    {
      src: '/images/rappi_holding_flyer.jpg',
      alt: 'Lifestyle model holding Secret Routine clipboard invitation with fresh produce',
    },
    {
      src: '/images/rappi_spinning_kit.jpg',
      alt: 'White collectible merchandising tray with spinning bikes and Secret Routine booklet',
    },
    {
      src: '/images/rappi_led_studio.jpg',
      alt: 'Dark spinning studio with triple panoramic LED screens displaying Turbo-Fresh visuals',
    },
    {
      src: '/images/rappi_fridge_recipe.jpg',
      alt: 'Recetario Turbo-Fresh checklist clipboard and magnet on refrigerator',
    },
    {
      src: '/images/rappi_neon_moss.jpg',
      alt: 'Turbo-Fresh 10 Min glowing neon sign on living green foliage moss wall',
    },
  ];

  return (
    <div className={`w-full transition-colors duration-500 ${isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"} pb-24`}>
      
      {/* 1. TOP MINIMAL NAVIGATION BAR (BURST ICON CON ® A LA IZQUIERDA, 'WORK WITH US' Y 'MENU' A LA DERECHA) */}
      <nav className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-8 sm:pt-12 pb-8 sm:pb-12 flex items-center justify-between">
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
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24 items-start">

          {/* COLUMNA IZQUIERDA: Galería de imágenes (scroll vertical continuo) */}
          <div className="w-full md:w-[46%] lg:w-[44%] xl:w-[42%] flex flex-col gap-3 sm:gap-4 shrink-0">
            
            {/* 7 IMÁGENES DEL CASO DE ESTUDIO */}
            {showcaseImages.map((img, idx) => (
              <div key={idx} className="w-full overflow-hidden bg-neutral-100 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {/* 8. CONTENEDOR CORAL CON 3 FRAMES DE INSTAGRAM STORIES (EXACTO A SG_showcase_body_visual_view.png) */}
            <div className="w-full bg-[#FF553E] p-4 sm:p-6 lg:p-7 shadow-sm">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                
                {/* STORY 1: The Secret Routine */}
                <div className="w-full aspect-[9/18.5] bg-white rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-md flex flex-col relative border-[2px] sm:border-[3px] border-white">
                  <div className="w-full px-2 pt-2 pb-1 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#FF553E] flex items-center justify-center text-white text-[8px] font-black">
                        R
                      </div>
                      <span className="text-[7px] font-bold text-black tracking-tight">rappi_pe</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full relative overflow-hidden bg-neutral-100">
                    <img 
                      src="/images/rappi_outro_routine.jpg" 
                      alt="The Secret Routine Story"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="text-[7px] font-extrabold uppercase leading-tight">The Secret Routine</p>
                      <p className="text-[6px] opacity-80 leading-none">Turbo - Fresh + Síclo</p>
                    </div>
                  </div>
                  <div className="w-full px-2 py-1.5 flex items-center justify-between text-black/70 bg-white">
                    <Heart size={9} />
                    <Send size={9} />
                    <Bookmark size={9} />
                  </div>
                </div>

                {/* STORY 2: Fresh Produce in Basket */}
                <div className="w-full aspect-[9/18.5] bg-white rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-md flex flex-col relative border-[2px] sm:border-[3px] border-white">
                  <div className="w-full px-2 pt-2 pb-1 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#FF553E] flex items-center justify-center text-white text-[8px] font-black">
                        R
                      </div>
                      <span className="text-[7px] font-bold text-black tracking-tight">rappi_pe</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full relative overflow-hidden bg-neutral-100">
                    <img 
                      src="/images/rappi_story_2.jpg" 
                      alt="Fresh Vegetables Basket Story"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#198754] text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        Turbo-Fresh
                      </span>
                    </div>
                  </div>
                  <div className="w-full px-2 py-1.5 flex items-center justify-between text-black/70 bg-white">
                    <Heart size={9} />
                    <Send size={9} />
                    <Bookmark size={9} />
                  </div>
                </div>

                {/* STORY 3: 10 Min Delivery */}
                <div className="w-full aspect-[9/18.5] bg-white rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-md flex flex-col relative border-[2px] sm:border-[3px] border-white">
                  <div className="w-full px-2 pt-2 pb-1 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-[#FF553E] flex items-center justify-center text-white text-[8px] font-black">
                        R
                      </div>
                      <span className="text-[7px] font-bold text-black tracking-tight">rappi_pe</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full relative overflow-hidden bg-neutral-100">
                    <img 
                      src="/images/rappi_story_3.jpg" 
                      alt="10 Min Super Fresh Grocery Story"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="text-[7px] font-extrabold leading-tight">Tus compras súper frescas en</p>
                      <p className="text-[9px] font-black text-[#FFEB3B] leading-none">10min</p>
                    </div>
                  </div>
                  <div className="w-full px-2 py-1.5 flex items-center justify-between text-black/70 bg-white">
                    <Heart size={9} />
                    <Send size={9} />
                    <Bookmark size={9} />
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: Bloque editorial con secciones (01), Details y (02) */}
          <div className="w-full md:w-[54%] lg:w-[56%] xl:w-[58%] relative">
            <div className="md:sticky md:top-14 flex flex-col pt-2 sm:pt-4">
              
              {/* ================= SECCIÓN (01) PROJECT OVERVIEW ================= */}
              <div className="flex flex-col">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${isDark ? 'text-white/85' : 'text-black'} select-none mb-6 sm:mb-8`}>
                  <p>(01)</p>
                  <p className="mt-1">Project</p>
                  <p>Overview</p>
                </div>
                
                <h1 className={`text-[2rem] sm:text-[2.65rem] lg:text-[3rem] xl:text-[3.25rem] font-[400] tracking-[-0.03em] leading-[1.12] ${isDark ? 'text-white' : 'text-black'} max-w-[850px]`}>
                  Rappi asked us to think in an event concept for the Turbo Fresh platform launch, the event was an activation with a spinning class that revealed “The Secret Routine” of the brand's delivery riders.
                </h1>
                
                <div className={`flex flex-col gap-6 text-[1rem] sm:text-[1.08rem] ${isDark ? 'text-gray-300' : 'text-[#222222]'} font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    We were involved in the whole project from concept, key visual, kits and production.
                  </p>
                  <p>
                    For the “Secret Routine” at the launch of Rappi’s Turbo Fresh platform, we developed the key visual and the whole concept around a loose and dynamic illustrations style that somehow represented the speed of the service to arrive in 10 minutes . The illustrations were animated and used to integrate them into the venue’s stage, to ensure a seamless and immersive experience for the participants.
                  </p>
                </div>
              </div>

              {/* ================= DETAILS TABLE ================= */}
              <div className="flex flex-col text-[0.95rem] sm:text-[1rem] mt-12 sm:mt-14 max-w-[780px]">
                <div className={`py-3.5 border-b ${isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'} font-medium tracking-wide`}>
                  <span>(DETAILS)</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Type</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Rebrand</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2023</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-4 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Social Media, Graphic Design</span>
                </div>
              </div>

              {/* ================= SECCIÓN (02) BRANDING EXPERIENCES ================= */}
              <div className="flex flex-col mt-16 sm:mt-24">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${isDark ? 'text-white/85' : 'text-black'} select-none mb-6 sm:mb-8`}>
                  <p>(02)</p>
                  <p className="mt-1">Branding</p>
                  <p>Experiences</p>
                </div>

                <h2 className={`text-[2rem] sm:text-[2.65rem] lg:text-[3rem] xl:text-[3.25rem] font-[400] tracking-[-0.03em] leading-[1.12] ${isDark ? 'text-white' : 'text-black'} max-w-[850px]`}>
                  The result was a brand that was both dynamic and adaptable, with infinite configurations that kept it attractive and engaging for all users
                </h2>

                <div className={`flex flex-col gap-6 text-[1rem] sm:text-[1.08rem] ${isDark ? 'text-gray-300' : 'text-[#222222]'} font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    Yummy was designed with dynamism and flexibility in mind, making it a brand that put everything at your fingertips.
                  </p>
                  <p>
                    In conclusion, Yummy is a brand that embodied the values of thinking, desire, and satisfaction in a unique and engaging way. The refreshed brand image helped Yummy become a super app that offered a fun and exciting experience to its users.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
