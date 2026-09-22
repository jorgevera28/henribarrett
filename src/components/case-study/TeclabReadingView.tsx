import React from 'react';
import { AppView } from '../../types';
import {
  TeclabContainerCraneModule,
  TeclabStreetTotemModule,
  TeclabNeonIsotypeSquareModule,
  TeclabIphoneScreenModule,
  TeclabTypeAndColorModule,
  TeclabIconographyGridModule,
  TeclabIsometricSystemModule,
  TeclabBusinessCardsModule,
  TeclabStationeryModule,
  TeclabSocialCarouselModule,
  TeclabWebExperienceModule,
  TeclabHoardingPanoramicModule
} from './TeclabShowcaseModules';

export interface TeclabReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const TeclabReadingView: React.FC<TeclabReadingViewProps> = ({
  theme = "dark",
  onNavigate
}) => {
  const isDark = theme === "dark";

  return (
    <div 
      id="teclab-reading-view"
      className={`w-full transition-colors duration-500 ${
        isDark ? "bg-[#000000] text-[#F3F4F6]" : "bg-[#ffffff] text-[#111111]"
      } pb-20 sm:pb-28`}
    >
      {/* =========================================================================
          2-COLUMN SPLIT READING VIEW (Exact match to SG_showcase_body_reading_view.png)
          Left: Gallery of 12 showcase modules scrolling vertically with natural page scroll
          Right: Sticky editorial Project Overview staying fixed while images scroll
          ========================================================================= */}
      <section className="w-full px-4 sm:px-8 md:px-10 lg:px-14 xl:px-16 max-w-[1900px] mx-auto pt-24 sm:pt-28 md:pt-32">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-14 xl:gap-20 relative">
          
          {/* =========================================================================
              LEFT COLUMN: 12 Visual Showcase Modules stacked vertically
              Displaces with natural scroll as the user browses down
              ========================================================================= */}
          <div className="w-full md:w-[44%] lg:w-[42%] xl:w-[40%] flex flex-col gap-3 sm:gap-4 shrink-0">
            
            {/* 1. Hanging Shipping Container Hero with Industrial Crane Hook */}
            <div id="reading-module-crane" className="w-full">
              <TeclabContainerCraneModule />
            </div>

            {/* 2. Vertical Urban Totem Billboard Lightbox */}
            <div id="reading-module-totem" className="w-full">
              <TeclabStreetTotemModule />
            </div>

            {/* 3. Solid Fluorescent Green Square with Black Teclab Isotype */}
            <div id="reading-module-isotype" className="w-full">
              <TeclabNeonIsotypeSquareModule />
            </div>

            {/* 4. iPhone App Mockup resting on Concrete Surface with iOS Apps */}
            <div id="reading-module-iphone" className="w-full">
              <TeclabIphoneScreenModule />
            </div>

            {/* 5. 4-Column Typography & Color System */}
            <div id="reading-module-typography" className="w-full">
              <TeclabTypeAndColorModule />
            </div>

            {/* 6. Technical Blueprint & 3x4 Iconography Grid */}
            <div id="reading-module-iconography" className="w-full">
              <TeclabIconographyGridModule />
            </div>

            {/* 7. 3-Card Isometric Architectural Systems */}
            <div id="reading-module-isometric" className="w-full">
              <TeclabIsometricSystemModule />
            </div>

            {/* 8. Premium Business Cards on Concrete Surface */}
            <div id="reading-module-cards" className="w-full">
              <TeclabBusinessCardsModule />
            </div>

            {/* 9. Stationery Presentation Folder with Technical Documents */}
            <div id="reading-module-stationery" className="w-full">
              <TeclabStationeryModule />
            </div>

            {/* 10. 3-Post Social Media Content Grid */}
            <div id="reading-module-social" className="w-full">
              <TeclabSocialCarouselModule />
            </div>

            {/* 11. Responsive Web Experience on MacBook Pro Mockup */}
            <div id="reading-module-web" className="w-full">
              <TeclabWebExperienceModule />
            </div>

            {/* 12. Construction Hoarding Wildposting Panoramic View */}
            <div id="reading-module-hoarding" className="w-full">
              <TeclabHoardingPanoramicModule />
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Sticky Editorial Project Overview & Details
              Stays fixed while scrolling through the images on the left
              ========================================================================= */}
          <div className="w-full md:w-[56%] lg:w-[58%] xl:w-[60%] relative self-stretch">
            <div className="md:sticky md:top-28 lg:top-32 xl:top-36 flex flex-col max-w-[840px] pt-1 sm:pt-2 pb-16">
              
              {/* (01) Project Overview eyebrow */}
              <div className="flex flex-col mb-6 sm:mb-8 select-none">
                <span className={`text-[13px] sm:text-[14px] font-mono tracking-wider ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}>
                  (01)
                </span>
                <span className={`text-base sm:text-[17px] font-sans font-medium tracking-tight mt-1.5 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Project
                </span>
                <span className={`text-base sm:text-[17px] font-sans font-medium tracking-tight ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Overview
                </span>
              </div>

              {/* Main Headline exact from SG_showcase_body_reading_view.png */}
              <h1 className={`text-[1.85rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.85rem] font-[350] tracking-[-0.025em] leading-[1.16] ${
                isDark ? 'text-white' : 'text-black'
              } max-w-[820px]`}>
                Teclab, a construction services company, come to us to share their vision of revitalizing their identity.
              </h1>

              {/* Introductory Paragraph */}
              <p className={`text-[0.95rem] sm:text-[1.02rem] md:text-[1.05rem] ${
                isDark ? 'text-gray-300' : 'text-[#333333]'
              } font-light leading-[1.68] max-w-[780px] mt-6 sm:mt-8`}>
                Guided by their vision, we crafted a refreshed logo and iconography, incorporating the essence of Teclab's rich heritage while infusing it with a contemporary touch. Drawing inspiration from the strength and durability found in engineering and architecture, we employed angled elements that resonate with stability and resilience.
              </p>

              {/* (DETAILS) Technical Specs Table */}
              <div className="flex flex-col text-[0.92rem] sm:text-[0.98rem] mt-8 sm:mt-10 max-w-[780px]">
                <div className={`py-3.5 border-b ${
                  isDark ? 'border-white/20 text-white/90' : 'border-black/20 text-black'
                } font-medium tracking-wide text-[13px] uppercase`}>
                  <span>(DETAILS)</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#555555]'}>Type</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Rebrand</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#555555]'}>Year</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2024</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#555555]'}>Country</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/20'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#555555]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>
                    Illustration, Graphic Design
                  </span>
                </div>
              </div>

              {/* Extended Editorial In-Depth Narrative */}
              <div className={`flex flex-col gap-6 text-[0.95rem] sm:text-[1.02rem] md:text-[1.05rem] ${
                isDark ? 'text-gray-300' : 'text-[#333333]'
              } font-light leading-[1.68] max-w-[780px] mt-8 sm:mt-10 pb-6`}>
                
                <p>
                  As experts in their field, they understand the vast range of chemical products available in the construction industry, each with its unique properties, their differentiating factor lies in their unwavering commitment to using the finest materials, adhering to stringent quality standards, and fostering strong client relationships based on trust and reliability. These principles form the bedrock of their brand, distinguishing them as a reliable and respected partner.
                </p>

                <p>
                  Collaborating closely with the Teclab team, we embarked on a comprehensive rebranding process to bring their image into the modern age. Guided by their vision, we crafted a refreshed logo and iconography, incorporating the essence of Teclab's rich heritage while infusing it with a contemporary touch. Drawing inspiration from the strength and durability found in engineering and architecture, we employed angled elements that resonate with stability and resilience. Embracing the layers and composition of flooring materials, we created dynamic patterns that span various applications. Complemented by a sophisticated typographic style and clean illustrations reminiscent of architectural plans and precise line drawings, the overall brand system exudes a sense of structure, modernity, and innovation.
                </p>

                <p>
                  The result is a brand that stands confidently in the present, honoring its roots while embracing the possibilities of the future. Teclab's reimagined identity positions them as a forward-thinking industry leader, ready to take on new challenges and excel in today's ever-changing business landscape. Teclab's successful rebranding journey is a testament to their adaptability and commitment to staying at the forefront of the industry. Their unwavering dedication to delivering the highest standards of quality, customer commitment, and innovative solutions ensures that they remain a trusted partner for corporations seeking excellence in housing and construction.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
