import React from 'react';
import { AppView } from '../../types';
import { TeclabProjectOverview } from './TeclabProjectOverview';
import {
  TeclabContainerCraneModule,
  TeclabStreetTotemModule,
  TeclabBrandDuoModule,
  TeclabTypeAndColorModule,
  TeclabIconographyGridModule,
  TeclabIsometricSystemModule,
  TeclabBusinessCardsModule,
  TeclabStationeryModule,
  TeclabSocialCarouselModule,
  TeclabWebExperienceModule,
  TeclabHoardingPanoramicModule
} from './TeclabShowcaseModules';

export interface TeclabVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const TeclabVisualView: React.FC<TeclabVisualViewProps> = ({
  theme = "dark",
  onNavigate
}) => {
  const isDark = theme === "dark";

  return (
    <div 
      id="teclab-visual-view"
      className={`w-full transition-colors duration-500 ${
        isDark ? "bg-[#000000] text-[#F3F4F6]" : "bg-[#f4f4f5] text-[#111111]"
      } pb-16 sm:pb-24`}
    >
      {/* =========================================================================
          1. MAIN EDITORIAL PROJECT OVERVIEW (01)
          Exact match from SG_showcase_project_overview.png
          ========================================================================= */}
      <TeclabProjectOverview theme={theme} />

      {/* =========================================================================
          2. SHOWCASE PHOTO GRID & EDITORIAL LAYOUT MODULES
          Exact match from SG_showcase_grid_visual_view.png
          ========================================================================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1800px] mx-auto">
        
        {/* MODULE 1: Hanging Shipping Container Hero with Industrial Crane Hook */}
        <section id="module-container-crane" className="w-full">
          <TeclabContainerCraneModule />
        </section>

        {/* MODULE 2: Vertical Urban Totem Billboard Lightbox */}
        <section id="module-street-totem" className="w-full">
          <TeclabStreetTotemModule />
        </section>

        {/* MODULE 3: 50 / 50 Split (Neon Green Isotype + iOS iPhone App Mockup) */}
        <section id="module-brand-duo" className="w-full">
          <TeclabBrandDuoModule />
        </section>

        {/* MODULE 4: 4-Column Typography & Color Specification System */}
        <section id="module-type-color" className="w-full">
          <TeclabTypeAndColorModule />
        </section>

        {/* MODULE 5: Technical Iconography System (12 Icons) & Blueprint Grid */}
        <section id="module-iconography-blueprint" className="w-full">
          <TeclabIconographyGridModule />
        </section>

        {/* MODULE 6: 3-Column Isometric Architectural Systems */}
        <section id="module-isometric-systems" className="w-full">
          <TeclabIsometricSystemModule />
        </section>

        {/* MODULE 7: Business Cards with Fluo Painted Edges on Rough Concrete */}
        <section id="module-business-cards" className="w-full">
          <TeclabBusinessCardsModule />
        </section>

        {/* MODULE 8: Stationery Presentation Folder Flatlay */}
        <section id="module-stationery-folder" className="w-full">
          <TeclabStationeryModule />
        </section>

        {/* MODULE 9: 3-Column Social Media Instagram Carousel Posts */}
        <section id="module-social-carousel" className="w-full">
          <TeclabSocialCarouselModule />
        </section>

        {/* MODULE 10: Web Experience on MacBook Pro Mockup */}
        <section id="module-web-experience" className="w-full">
          <TeclabWebExperienceModule />
        </section>

        {/* MODULE 11: Construction Hoarding Wildposting Panoramic View */}
        <section id="module-hoarding-panoramic" className="w-full">
          <TeclabHoardingPanoramicModule />
        </section>

      </div>
    </div>
  );
};
