import React from 'react';
import { AppView } from '../../types';
import {
  YummyPatternBannerOne,
  YummyIconGrid,
  YummyPatternBannerTwo,
  YummyThreePhonesMockup,
} from './YummyProjectModules';

interface YummyVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const YummyVisualView: React.FC<YummyVisualViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"
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
            
            {/* Titular Principal */}
            <h1 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.07] ${
              isDark ? 'text-white' : 'text-black'
            } max-w-[1250px]`}>
              Rejuvenating the Latin American Super App experience
            </h1>
            
            {/* Párrafos Editoriales */}
            <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
              isDark ? 'text-gray-300' : 'text-[#222222]'
            } font-light leading-[1.6] max-w-[920px] mt-10 sm:mt-14`}>
              <p>
                Yummy aimed to transform into a super app and sought our assistance to rejuvenate their brand image. What started as a beloved food delivery platform evolved rapidly into an all-in-one ecosystem encompassing groceries (Yummy Rocket), on-demand transport (Yummy Rides), and instant payments.
              </p>
              <p>
                We built a refreshed identity rooted in optimism, velocity, and effortless urban living. By combining tactile lifestyle photography, high-energy typography, and a distinct palette with fresh lavender and electric green accents, the new Yummy brand resonates with the dynamic, fast-paced lifestyles of millions of daily users.
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Super App & Rebranding</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2023</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Country</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Venezuela & Latam</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Sources</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Brand Identity, Digital Product, UI/UX</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SHOWCASE GRID MODULES (Exact replication of SG_showcase_grid_modules_visual_view.png)
          ========================================================================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        
        {/* MODULE 1: Full-Width Friends Dining Around Table */}
        <section className="w-full overflow-hidden shadow-sm bg-[#C5B4E3]">
          <img 
            src="/images/yummy_friends_dining.jpg" 
            alt="Friends eating Yummy takeout food around table"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </section>

        {/* MODULE 2: Pattern Banner One (Purple chevron, Yellow wave, Red triangles, Orange/teal chevron) */}
        <section className="w-full">
          <YummyPatternBannerOne />
        </section>

        {/* MODULE 3: Icon Grid (20 flat food & service icons on lavender) */}
        <section className="w-full">
          <YummyIconGrid />
        </section>

        {/* MODULE 4: Pattern Banner Two (Red bars, Pink/yellow dots, Purple diagonal, Yellow/magenta chevron) */}
        <section className="w-full">
          <YummyPatternBannerTwo />
        </section>

        {/* MODULE 5: Three Phones Mockup on Warm Beige Background */}
        <section className="w-full">
          <YummyThreePhonesMockup />
        </section>

        {/* MODULE 6: 2-Column Grid (Guy Eating Burger + Phone Mockup on Spaghetti) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="w-full overflow-hidden shadow-sm aspect-[4/5] sm:aspect-[3/4] bg-[#E9E5DD]">
            <img 
              src="/images/yummy_guy_burger.jpg" 
              alt="Man joyfully eating gourmet burger"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden shadow-sm aspect-[4/5] sm:aspect-[3/4] bg-[#E9E5DD]">
            <img 
              src="/images/yummy_spaghetti_phone.jpg" 
              alt="Phone mockup on spaghetti background with woman eating pasta"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </section>

        {/* MODULE 7: Editorial Narrative Block: (02) Brand Experience */}
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-24 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
            
            {/* Left: (02) Brand Experience */}
            <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
              isDark ? 'text-white/85' : 'text-black/90'
            } select-none`}>
              <span>(02)</span>
              <div className="mt-8 sm:mt-10">
                Brand<br />
                Experience
              </div>
            </div>

            {/* Right: Headline & Narrative */}
            <div className="flex flex-col">
              <h2 className={`text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.12] ${
                isDark ? 'text-white' : 'text-black'
              } max-w-[1200px]`}>
                The result was a brand that was both dynamic and adaptable, with infinite configurations that kept it attractive and engaging for all users
              </h2>

              <div className={`flex flex-col gap-6 text-[1.05rem] sm:text-[1.15rem] md:text-[1.18rem] ${
                isDark ? 'text-gray-300' : 'text-[#222222]'
              } font-light leading-[1.65] max-w-[900px] mt-10 sm:mt-14`}>
                <p>
                  Yummy was designed with dynamism and flexibility in mind, making it a brand that put everything at your fingertips.
                </p>
                <p>
                  In conclusion, Yummy is a brand that embodied the values of thinking, desire, and satisfaction in a unique and engaging way. The refreshed brand image helped Yummy become a super app that offered a fun and exciting experience to its users.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MODULE 8: Full-Width Subway Station Billboard Mosaic */}
        <section className="w-full overflow-hidden shadow-sm bg-[#1A1A1A]">
          <img 
            src="/images/yummy_subway_billboard.jpg" 
            alt="Subway station advertising wall mural with Yummy campaign posters"
            className="w-full h-auto object-cover max-h-[85vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </section>

        {/* MODULE 9: Full-Width Bus Stop Shelter Posters */}
        <section className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
          <img 
            src="/images/yummy_bus_shelter.jpg" 
            alt="Urban bus stop shelter with Yummy brand advertising displays"
            className="w-full h-auto object-cover max-h-[85vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </section>

        {/* MODULE 10: 2-Column Grid (Green Tote Bag + Courier Bike) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="w-full overflow-hidden shadow-sm aspect-[3/4] sm:aspect-[3/4] bg-[#E9E5DD]">
            <img 
              src="/images/yummy_tote_bag.jpg" 
              alt="Person holding green Yummy tote bag in sunlight"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden shadow-sm aspect-[3/4] sm:aspect-[3/4] bg-[#E9E5DD]">
            <img 
              src="/images/yummy_courier_bike.jpg" 
              alt="Delivery cyclist with green Yummy backpack riding on bridge"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </section>

        {/* MODULE 11: Full-Width Peruvian Ceviche Feast Overhead View */}
        <section className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
          <img 
            src="/images/yummy_ceviche_overhead.jpg" 
            alt="Overhead flat-lay view of Peruvian ceviche feast with choclo and sweet potato"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </section>

      </div>

    </div>
  );
};
