import React from 'react';
import { UmanaBurstIcon } from './UmanaBurstIcon';
import { AppView } from '../../../App';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface RappiVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const RappiVisualView: React.FC<RappiVisualViewProps> = ({ 
  theme = "light",
  onNavigate 
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"} pb-24`}>
      
      {/* 1. TOP MINIMAL NAVIGATION BAR (HB burst logo with ® on left, 'Work with us' & 'Menu' on right) */}
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

      {/* 2. MAIN EDITORIAL PROJECT OVERVIEW (01) */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-10 pb-20 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-8 md:gap-14 lg:gap-20">
          
          {/* Left Column: (01) Project Overview */}
          <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${isDark ? 'text-white/85' : 'text-black/90'} select-none`}>
            <span>(01)</span>
            <div className="mt-8 sm:mt-10">
              Project<br />
              Overview
            </div>
          </div>
          
          {/* Right Column: Title, Narrative and Details */}
          <div className="flex flex-col">
            
            {/* Main Headline */}
            <h1 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.07] ${isDark ? 'text-white' : 'text-black'} max-w-[1250px]`}>
              Rappi asked us to think in an event concept for the Turbo Fresh platform launch, the event was an activation with a spinning class that revealed “The Secret Routine” of the brand's delivery riders.
            </h1>
            
            {/* Editorial Paragraphs */}
            <div className={`flex flex-col gap-6 text-[1.05rem] sm:text-[1.15rem] ${isDark ? 'text-gray-300' : 'text-[#222222]'} font-light leading-[1.6] max-w-[840px] mt-10 sm:mt-14`}>
              <p>
                We were involved in the whole project from concept, key visual, kits and production.
              </p>
              <p>
                For the “Secret Routine” at the launch of Rappi's Turbo Fresh platform, we developed the key visual and the whole concept around a loose and dynamic illustrations style that somehow represented the speed of the service to arrive in 10 minutes . The illustrations were animated and used to integrate them into the venue's stage, to ensure a seamless and immersive experience for the participants.
              </p>
            </div>
            
            {/* (DETAILS) Table with Clean Horizontal Dividers */}
            <div className="flex flex-col text-[0.95rem] sm:text-[1.05rem] max-w-[840px] mt-12 sm:mt-16">
              
              <div className={`py-3.5 border-b ${isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'} font-medium tracking-wide`}>
                <span>(DETAILS)</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Type</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2021</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Country</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Sources</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Production, Event</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. SHOWCASE GRID MODULES (Exact reproduction of SG_showcase_grid_modules_reading_view.png) */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 px-2 sm:px-4 md:px-6 max-w-[1900px] mx-auto">

        {/* MODULE 1: Full-width Hero Cyclist POV Illustration with Cute Fruits & Speed Arrows */}
        <section className="w-full overflow-hidden bg-[#e8edf2] shadow-sm">
          <img
            src="/images/rappi_cyclist_hero.jpg"
            alt="Cyclist Handlebars with Smiling Fresh Fruits in Basket"
            className="w-full h-auto object-cover max-h-[85vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 2: 2-Column Grid (Printed Invitation Mockup & Woman Holding Flyer with Fruits) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
          <div className="w-full overflow-hidden bg-[#e6e6e6] shadow-sm">
            <img
              src="/images/rappi_flyer_mockup.jpg"
              alt="The Secret Routine Event Flyer & Stationery Mockup"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full overflow-hidden bg-[#e6e6e6] shadow-sm">
            <img
              src="/images/rappi_holding_flyer.jpg"
              alt="Athlete holding The Secret Routine printed flyer with fresh melons"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* MODULE 3: Full-width 3D Architectural Isometric Cutaway of Spinning Studio */}
        <section className="w-full overflow-hidden bg-[#FF553E] shadow-sm">
          <img
            src="/images/rappi_3d_studio.jpg"
            alt="3D Isometric Architectural Render of Rappi Spinning Class Space"
            className="w-full h-auto object-cover max-h-[90vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 4: Editorial Narrative Block: (02) Branding Experience */}
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 py-20 sm:py-28 max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-8 md:gap-14 lg:gap-20">
            
            {/* Left Column: (02) Branding Experience */}
            <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${isDark ? 'text-white/85' : 'text-black/90'} select-none`}>
              <span>(02)</span>
              <div className="mt-8 sm:mt-10">
                Branding<br />
                Experience
              </div>
            </div>

            {/* Right Column: Title & Paragraphs */}
            <div className="flex flex-col">
              <h2 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.08] ${isDark ? 'text-white' : 'text-black'} max-w-[1250px]`}>
                Translates data into action to empower marketers like never before.
              </h2>

              <div className={`flex flex-col gap-6 text-[1.05rem] sm:text-[1.12rem] ${isDark ? 'text-gray-300' : 'text-[#222222]'} font-light leading-[1.65] max-w-[850px] mt-10 sm:mt-14`}>
                <p>
                  For the fierce and frazzled digital retail marketer, Parasail offers a way to elevate the customers' experience by providing solutions that help marketers see those customers as individuals, understanding their unique behaviors, intentions, and needs. Motto was hired for a bold rebrand that redefines how brands connect, create, and convert.
                </p>
                <p>
                  We designed a brand where every marketing interaction brings brands closer to their audiences, elevating the customer experience.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MODULE 5: Full-width Dark Spinning Studio with Triple LED Screen Wall */}
        <section className="w-full overflow-hidden bg-black shadow-sm">
          <img
            src="/images/rappi_led_studio.jpg"
            alt="Dark Spinning Studio with Triple Panoramic LED Screens"
            className="w-full h-auto object-cover max-h-[85vh] transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* MODULE 6: 2-Column Grid (Fridge Recipe Clipboard & Green Neon Living Moss Wall) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
          <div className="w-full overflow-hidden bg-[#ededed] shadow-sm">
            <img
              src="/images/rappi_fridge_recipe.jpg"
              alt="Recetario Turbo-Fresh clipboards on stainless steel refrigerator"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full overflow-hidden bg-[#102414] shadow-sm">
            <img
              src="/images/rappi_neon_moss.jpg"
              alt="Turbo-Fresh 10 Min Glowing Neon Sign on Living Foliage Moss Wall"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* MODULE 7: Full-width Coral Red Container with 3 Instagram Mobile Story Frames */}
        <section className="w-full bg-[#FF553E] py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 shadow-sm rounded-none">
          <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            
            {/* STORY 1: Entrance Backdrop */}
            <div className="w-full max-w-[340px] mx-auto aspect-[9/18.5] bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] flex flex-col relative border-[5px] border-white">
              
              {/* Instagram Story Top Header */}
              <div className="w-full px-4 pt-3.5 pb-2 flex items-center justify-between bg-transparent z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FF553E] p-0.5 flex items-center justify-center text-white text-xs font-black shadow-sm">
                    <span className="leading-none text-[11px]">R</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    rappi.pe
                  </span>
                  <svg className="w-3.5 h-3.5 text-blue-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <MoreHorizontal size={18} className="text-white drop-shadow cursor-pointer" />
              </div>

              {/* Story Content Image */}
              <div className="w-full flex-1 relative overflow-hidden -mt-11">
                <img 
                  src="/images/rappi_story_1.jpg" 
                  alt="Story 1: The Secret Routine event entry" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              {/* Instagram Story Bottom Interaction Bar */}
              <div className="w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-between text-white absolute bottom-0 left-0 right-0">
                <div className="flex items-center gap-3.5">
                  <Heart size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <MessageCircle size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <Send size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                </div>
                <Bookmark size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
              </div>
            </div>

            {/* STORY 2: Spinning Bike & Neon Light */}
            <div className="w-full max-w-[340px] mx-auto aspect-[9/18.5] bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] flex flex-col relative border-[5px] border-white">
              
              {/* Instagram Story Top Header */}
              <div className="w-full px-4 pt-3.5 pb-2 flex items-center justify-between bg-transparent z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FF553E] p-0.5 flex items-center justify-center text-white text-xs font-black shadow-sm">
                    <span className="leading-none text-[11px]">R</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    rappi.pe
                  </span>
                  <svg className="w-3.5 h-3.5 text-blue-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <MoreHorizontal size={18} className="text-white drop-shadow cursor-pointer" />
              </div>

              {/* Story Content Image */}
              <div className="w-full flex-1 relative overflow-hidden -mt-11">
                <img 
                  src="/images/rappi_story_2.jpg" 
                  alt="Story 2: Spinning workout with neon sign" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              {/* Instagram Story Bottom Interaction Bar */}
              <div className="w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-between text-white absolute bottom-0 left-0 right-0">
                <div className="flex items-center gap-3.5">
                  <Heart size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <MessageCircle size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <Send size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                </div>
                <Bookmark size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
              </div>
            </div>

            {/* STORY 3: Healthy Catering Buffet */}
            <div className="w-full max-w-[340px] mx-auto aspect-[9/18.5] bg-white rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] flex flex-col relative border-[5px] border-white">
              
              {/* Instagram Story Top Header */}
              <div className="w-full px-4 pt-3.5 pb-2 flex items-center justify-between bg-transparent z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FF553E] p-0.5 flex items-center justify-center text-white text-xs font-black shadow-sm">
                    <span className="leading-none text-[11px]">R</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    rappi.pe
                  </span>
                  <svg className="w-3.5 h-3.5 text-blue-400 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <MoreHorizontal size={18} className="text-white drop-shadow cursor-pointer" />
              </div>

              {/* Story Content Image */}
              <div className="w-full flex-1 relative overflow-hidden -mt-11">
                <img 
                  src="/images/rappi_story_3.jpg" 
                  alt="Story 3: Healthy fresh grocery catering buffet" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>

              {/* Instagram Story Bottom Interaction Bar */}
              <div className="w-full px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-between text-white absolute bottom-0 left-0 right-0">
                <div className="flex items-center gap-3.5">
                  <Heart size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <MessageCircle size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                  <Send size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
                </div>
                <Bookmark size={20} strokeWidth={2} className="cursor-pointer hover:scale-110 transition-transform text-white" />
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
};
