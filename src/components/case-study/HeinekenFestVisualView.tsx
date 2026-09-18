import React from 'react';
import { AppView } from '../../types';

interface HeinekenFestVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const HeinekenFestVisualView: React.FC<HeinekenFestVisualViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"
    } pb-16 sm:pb-24`}>
      
      {/* =========================================================================
          1. MAIN EDITORIAL PROJECT OVERVIEW (01)
          Exact match from SG_showcase_body_overview_project.png
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
              Heineken, a primary sponsor of the UEFA Champions League, sought our assistance for their monumental event in Peru, the Heineken Fest.
            </h1>
            
            {/* Párrafos Editoriales */}
            <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
              isDark ? 'text-gray-300' : 'text-[#222222]'
            } font-light leading-[1.65] max-w-[960px] mt-10 sm:mt-14`}>
              <p>
                This gathering revolved around the Champions League final, and it was packed with exhilaration, memorable moments, and Heineken's unique touch.
              </p>
              <p>
                Despite the hurdles from conception to execution, our team efficiently handled market research, comprehensive planning (from logistics to marketing), and presented engaging activities, such as games, contests, music performances, and food options. We also secured partnerships and sponsorships with local businesses, which helped increase exposure, drive attendance, and generate additional revenue.
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Event</span>
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Production, Event</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SHOWCASE GRID MODULES (Exact replication of SG_showcase_grid_modules_visual_view (1).png)
          ========================================================================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        
        {/* MODULE 1: 2-Column Grid (Open Influencer Kit Box + Floating Heineken Bottle 3D) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="w-full overflow-hidden shadow-sm aspect-[3/4] bg-[#EBECEE]">
            <img 
              src="/images/heineken_open_kit.jpg" 
              alt="Heineken Fest open influencer packaging kit with stadium diorama and VIP pass"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full overflow-hidden shadow-sm aspect-[3/4] bg-[#008234]">
            <img 
              src="/images/heineken_floating_bottle.jpg" 
              alt="Floating Heineken bottle with glowing green neon stadium swirl ribbon"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* MODULE 2: Full-Width Architectural Technical Blueprint Sketch */}
        <section className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
          <img 
            src="/images/heineken_sketch_drafting.jpg" 
            alt="Designer hands drafting stadium venue layout and stages with blue and red pens"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 3: Full-Width Giant Red Star on Green Shipping Container Wall */}
        <section className="w-full overflow-hidden shadow-sm bg-[#008234]">
          <img 
            src="/images/heineken_red_star_wall.jpg" 
            alt="Heineken giant red star installation on green corrugated steel container"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 4: Editorial Narrative Section (02 Brand Experience) */}
        <section className="w-full px-2 sm:px-4 md:px-6 py-16 sm:py-24 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
            
            {/* Columna Izquierda: (02) Brand Experience */}
            <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
              isDark ? 'text-white/85' : 'text-black/90'
            } select-none`}>
              <span>(02)</span>
              <div className="mt-8 sm:mt-10">
                Brand<br />
                Experience
              </div>
            </div>
            
            {/* Columna Derecha: Título y Párrafos */}
            <div className="flex flex-col">
              <h2 className={`text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.1] ${
                isDark ? 'text-white' : 'text-black'
              } max-w-[1200px]`}>
                Elevating the guest experience
              </h2>

              <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
                isDark ? 'text-gray-300' : 'text-[#222222]'
              } font-light leading-[1.65] max-w-[960px] mt-10 sm:mt-12`}>
                <p>
                  We aimed to enhance the guest experience by creating customed influencer kits for special guests and brand friends. Our kits were designed to reflect the event's stadium theme, with a packaging design that showcased a bottle of Heineken as the central element and illustrations of the fans unique characteristics on the stands. These illustrations were later animated to use as part of the event visuals. In addition to the visually appealing packaging, the kits included a super premium VIP pass made in engraved aluminium, an invitation card and brand merchandise.
                </p>
                <p>
                  This combination of practical and aesthetic elements created a memorable and valuable experience for the guests, while also increasing brand awareness and engagement on social media. In short, the Heineken Fest influencer kit was the key to a knockout event! By combining a fun concept, engaging visuals, and practical elements, we created a kit that made the guests feel like VIPs and helped the brand shine bright on social media.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MODULE 5: 2-Column Grid of Fan Illustrations (Hala Madrid & Liverpool FC) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="w-full overflow-hidden shadow-sm aspect-square bg-[#E0E6ED]">
            <img 
              src="/images/heineken_fans_madrid.jpg" 
              alt="Hala Madrid fans celebrating banner illustration"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full overflow-hidden shadow-sm aspect-square bg-[#FFEAEA]">
            <img 
              src="/images/heineken_fans_liverpool.jpg" 
              alt="Liverpool FC fans celebrating banner illustration"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* MODULE 6: Full-Width UEFA Champions League Ball & Cold Heineken Can */}
        <section className="w-full overflow-hidden shadow-sm bg-[#004A20]">
          <img 
            src="/images/heineken_ucl_ball.jpg" 
            alt="Official UEFA Champions League match ball on pedestal and Heineken can"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 7: Full-Width 3D Stadium Entrance Player Tunnel Perspective */}
        <section className="w-full overflow-hidden shadow-sm bg-[#000e1f]">
          <img 
            src="/images/heineken_tunnel_perspective.jpg" 
            alt="Futuristic stadium player tunnel with curved LED screens of cheering football fans"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 8: 2-Column Grid of Classical Statue Busts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          <div className="w-full overflow-hidden shadow-sm aspect-square bg-[#101416]">
            <img 
              src="/images/heineken_statue_madrid.jpg" 
              alt="Classical sculpted marble statue bust of triumphant football player"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full overflow-hidden shadow-sm aspect-square bg-[#161210]">
            <img 
              src="/images/heineken_statue_liverpool.jpg" 
              alt="Classical sculpted bronze statue bust of football player in celebration and prayer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* MODULE 9: Full-Width Outdoor Heineken Fest Stage & Event Grounds */}
        <section className="w-full overflow-hidden shadow-sm bg-[#EBECEE]">
          <img 
            src="/images/heineken_festival_stage.jpg" 
            alt="Outdoor festival event in Peru with truss structures and Heineken Fest branding"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

      </div>

    </div>
  );
};
