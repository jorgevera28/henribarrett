import React from 'react';
import { AppView } from '../../types';
import {
  YummyPatternBannerOne,
  YummyIconGrid,
  YummyPatternBannerTwo,
  YummyThreePhonesMockup,
} from './YummyProjectModules';

interface YummyReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const YummyReadingView: React.FC<YummyReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>
      
      {/* 2-COLUMN SPLIT LAYOUT: FOTOS A LA IZQUIERDA (SCROLL NATURAL) Y BLOQUE EDITORIAL FIJO A LA DERECHA (STICKY) */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-32 md:pt-36 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24">
          
          {/* =========================================================================
              COLUMNA IZQUIERDA: Galería de imágenes completa del caso
              (Se desplaza verticalmente con el scroll hasta la última foto)
              ========================================================================= */}
          <div className="w-full md:w-[46%] lg:w-[44%] xl:w-[42%] flex flex-col gap-5 sm:gap-6 shrink-0">
            
            {/* 1. Friends Dining Table */}
            <div className="w-full overflow-hidden shadow-sm bg-[#C5B4E3]">
              <img 
                src="/images/yummy_friends_dining.jpg" 
                alt="Friends eating Yummy takeout food around table"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 2. Pattern Banner One */}
            <div className="w-full">
              <YummyPatternBannerOne />
            </div>

            {/* 3. Icon Grid */}
            <div className="w-full">
              <YummyIconGrid />
            </div>

            {/* 4. Pattern Banner Two */}
            <div className="w-full">
              <YummyPatternBannerTwo />
            </div>

            {/* 5. Three Phones Mockup */}
            <div className="w-full">
              <YummyThreePhonesMockup />
            </div>

            {/* 6. Guy Eating Burger */}
            <div className="w-full overflow-hidden shadow-sm aspect-[4/5] bg-[#E9E5DD]">
              <img 
                src="/images/yummy_guy_burger.jpg" 
                alt="Man joyfully eating gourmet burger"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 7. Phone Mockup on Spaghetti */}
            <div className="w-full overflow-hidden shadow-sm aspect-[4/5] bg-[#E9E5DD]">
              <img 
                src="/images/yummy_spaghetti_phone.jpg" 
                alt="Phone mockup on spaghetti background"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 8. Subway Station Billboard Mural */}
            <div className="w-full overflow-hidden shadow-sm bg-[#1A1A1A]">
              <img 
                src="/images/yummy_subway_billboard.jpg" 
                alt="Subway station advertising wall mural with Yummy campaign posters"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 9. Bus Stop Shelter Displays */}
            <div className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
              <img 
                src="/images/yummy_bus_shelter.jpg" 
                alt="Urban bus stop shelter with Yummy brand advertising displays"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 10. Green Tote Bag */}
            <div className="w-full overflow-hidden shadow-sm aspect-[3/4] bg-[#E9E5DD]">
              <img 
                src="/images/yummy_tote_bag.jpg" 
                alt="Person holding green Yummy tote bag in sunlight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 11. Courier on Bike */}
            <div className="w-full overflow-hidden shadow-sm aspect-[3/4] bg-[#E9E5DD]">
              <img 
                src="/images/yummy_courier_bike.jpg" 
                alt="Delivery cyclist with green Yummy backpack riding on bridge"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 12. Peruvian Ceviche Feast */}
            <div className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
              <img 
                src="/images/yummy_ceviche_overhead.jpg" 
                alt="Overhead flat-lay view of Peruvian ceviche feast"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

          </div>

          {/* =========================================================================
              COLUMNA DERECHA: Bloque de texto editorial (Sticky / Fijo al hacer scroll)
              ========================================================================= */}
          <div className="w-full md:w-[54%] lg:w-[56%] xl:w-[58%] relative">
            <div className="md:sticky md:top-28 lg:top-36 flex flex-col pt-1 sm:pt-2 max-w-[850px]">
              
              {/* ================= SECCIÓN (01) PROJECT OVERVIEW ================= */}
              <div className="flex flex-col">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${
                  isDark ? 'text-white/85' : 'text-black'
                } select-none mb-6 sm:mb-8`}>
                  <p>(01)</p>
                  <p className="mt-1">Project</p>
                  <p>Overview</p>
                </div>
                
                <h1 className={`text-[1.9rem] sm:text-[2.35rem] lg:text-[2.75rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.12] ${
                  isDark ? 'text-white' : 'text-black'
                } max-w-[850px]`}>
                  Rejuvenating the Latin American Super App experience
                </h1>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    Yummy aimed to transform into a super app and sought our assistance to rejuvenate their brand image. What started as a beloved food delivery platform evolved rapidly into an all-in-one ecosystem encompassing groceries (Yummy Rocket), on-demand transport (Yummy Rides), and instant payments.
                  </p>
                  <p>
                    We built a refreshed identity rooted in optimism, velocity, and effortless urban living. By combining tactile lifestyle photography, high-energy typography, and a distinct palette with fresh lavender and electric green accents, the new Yummy brand resonates with the dynamic, fast-paced lifestyles of millions of daily users.
                  </p>
                </div>
              </div>

              {/* ================= DETAILS TABLE ================= */}
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
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Super App & Rebranding</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2023</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Venezuela & Latam</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Brand Identity, Digital Product, UI/UX</span>
                </div>
              </div>

              {/* ================= SECCIÓN (02) BRAND EXPERIENCE ================= */}
              <div className="flex flex-col mt-12 sm:mt-16 pb-8">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${
                  isDark ? 'text-white/85' : 'text-black'
                } select-none mb-6 sm:mb-8`}>
                  <p>(02)</p>
                  <p className="mt-1">Brand</p>
                  <p>Experience</p>
                </div>
                
                <h2 className={`text-[1.65rem] sm:text-[2rem] lg:text-[2.25rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.14] ${
                  isDark ? 'text-white' : 'text-black'
                } max-w-[850px]`}>
                  The result was a brand that was both dynamic and adaptable, with infinite configurations that kept it attractive and engaging for all users
                </h2>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
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
