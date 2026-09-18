import React from 'react';
import { AppView } from '../../types';

interface HeinekenFestReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const HeinekenFestReadingView: React.FC<HeinekenFestReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-24 sm:pb-32`}>
      
      {/* =========================================================================
          2-COLUMN SPLIT LAYOUT:
          Left: Gallery of images scrolling naturally with the page
          Right: Sticky editorial text block staying fixed until all images pass
          (Exact replica of SG_showcase_body_reading_view (1).png)
          ========================================================================= */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-32 md:pt-36 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 xl:gap-24">
          
          {/* =========================================================================
              LEFT COLUMN: Full image stack (12 photos) scrolling vertically
              ========================================================================= */}
          <div className="w-full md:w-[46%] lg:w-[44%] xl:w-[42%] flex flex-col gap-4 sm:gap-5 shrink-0">
            
            {/* 1. Open influencer kit packaging box with miniature pitch diorama & VIP pass */}
            <div className="w-full overflow-hidden shadow-sm bg-[#EBECEE]">
              <img 
                src="/images/heineken_open_kit.jpg" 
                alt="Heineken Fest open influencer packaging kit with stadium diorama and VIP pass"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 2. Floating cold Heineken bottle with glowing green neon stadium swirl ribbon */}
            <div className="w-full overflow-hidden shadow-sm bg-[#008234]">
              <img 
                src="/images/heineken_floating_bottle.jpg" 
                alt="Floating Heineken bottle with glowing green neon stadium swirl ribbon"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3. Blueprint drafting: Designer hands sketching venue layout & stages */}
            <div className="w-full overflow-hidden shadow-sm bg-[#E9E5DD]">
              <img 
                src="/images/heineken_sketch_drafting.jpg" 
                alt="Architectural drafting hands sketching stadium layout on technical blueprint paper"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 4. Giant Heineken red star installation on green corrugated steel container wall */}
            <div className="w-full overflow-hidden shadow-sm bg-[#008234]">
              <img 
                src="/images/heineken_red_star_wall.jpg" 
                alt="Heineken giant red star on green corrugated container wall"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 5. Hala Madrid fan celebration illustration banner */}
            <div className="w-full overflow-hidden shadow-sm bg-[#E0E6ED]">
              <img 
                src="/images/heineken_fans_madrid.jpg" 
                alt="Real Madrid fans cheering wildly with Hala Madrid banner"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 6. Liverpool FC fan celebration illustration banner */}
            <div className="w-full overflow-hidden shadow-sm bg-[#FFEAEA]">
              <img 
                src="/images/heineken_fans_liverpool.jpg" 
                alt="Liverpool FC fans cheering with red banner"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 7. Premium closed influencer packaging kit box */}
            <div className="w-full overflow-hidden shadow-sm bg-[#008234]">
              <img 
                src="/images/heineken_kit_box.jpg" 
                alt="Heineken Fest UEFA Champions League custom influencer kit closed box"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 8. UEFA Champions League ball on pedestal with cold Heineken can */}
            <div className="w-full overflow-hidden shadow-sm bg-[#004A20]">
              <img 
                src="/images/heineken_ucl_ball.jpg" 
                alt="UEFA Champions League star match ball on dark pedestal and cold Heineken can"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 9. Futuristic stadium entrance player tunnel with panoramic LED walls */}
            <div className="w-full overflow-hidden shadow-sm bg-[#000E1F]">
              <img 
                src="/images/heineken_tunnel_perspective.jpg" 
                alt="Futuristic player entrance tunnel with panoramic LED screens of cheering fans"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 10. Sculpted marble bust of triumphant football player hero */}
            <div className="w-full overflow-hidden shadow-sm bg-[#101416]">
              <img 
                src="/images/heineken_statue_madrid.jpg" 
                alt="Classical sculpted marble statue bust of triumphant football player"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 11. Sculpted bronze bust in celebration and prayer */}
            <div className="w-full overflow-hidden shadow-sm bg-[#161210]">
              <img 
                src="/images/heineken_statue_liverpool.jpg" 
                alt="Classical sculpted bronze statue bust of football player in prayer and celebration"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 12. Outdoor Heineken Fest festival stage and grounds in Peru */}
            <div className="w-full overflow-hidden shadow-sm bg-[#EBECEE]">
              <img 
                src="/images/heineken_festival_stage.jpg" 
                alt="Outdoor Heineken Fest stage with trusses, green banners and picnic lawn in Peru"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
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
                  Heineken, a primary sponsor of the UEFA Champions League, sought our assistance for their monumental event in Peru, the Heineken Fest.
                </h1>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    This gathering revolved around the Champions League final, and it was packed with exhilaration, memorable moments, and Heineken's unique touch.
                  </p>
                  <p>
                    Despite the hurdles from conception to execution, our team efficiently handled market research, comprehensive planning (from logistics to marketing), and presented engaging activities, such as games, contests, music performances, and food options. We also secured partnerships and sponsorships with local businesses, which helped increase exposure, drive attendance, and generate additional revenue.
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
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Event</span>
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
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Production, Event</span>
                </div>
              </div>

              {/* ================= SECCIÓN (02) BRAND EXPERIENCE ================= */}
              <div className="flex flex-col mt-12 sm:mt-16">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${
                  isDark ? 'text-white/85' : 'text-black'
                } select-none mb-6 sm:mb-8`}>
                  <p>(02)</p>
                  <p className="mt-1">Project</p>
                  <p>Overview</p>
                </div>
                
                <h2 className={`text-[1.75rem] sm:text-[2.15rem] lg:text-[2.5rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.14] ${
                  isDark ? 'text-white' : 'text-black'
                } max-w-[820px]`}>
                  Elevating the guest experience
                </h2>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    We aimed to enhance the guest experience by creating customed influencer kits for special guests and brand friends. Our kits were designed to reflect the event's stadium theme, with a packaging design that showcased a bottle of Heineken as the central element and illustrations of the fans unique characteristics on the stands. These illustrations were later animated to use as part of the event visuals. In addition to the visually appealing packaging, the kits included a super premium VIP pass made in engraved aluminium, an invitation card and brand merchandise.
                  </p>
                  <p>
                    This combination of practical and aesthetic elements created a memorable and valuable experience for the guests, while also increasing brand awareness and engagement on social media. In short, the Heineken Fest influencer kit was the key to a knockout event! By combining a fun concept, engaging visuals, and practical elements, we created a kit that made the guests feel like VIPs and helped the brand shine bright on social media.
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

