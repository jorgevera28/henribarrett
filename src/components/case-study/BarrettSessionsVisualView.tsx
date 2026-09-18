import React from 'react';
import { AppView } from '../../types';

interface BarrettSessionsVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const BarrettSessionsVisualView: React.FC<BarrettSessionsVisualViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0c0c0d] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>
      
      {/* 1. MAIN EDITORIAL PROJECT OVERVIEW (01) */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-24 sm:pt-32 pb-20 max-w-[1700px] mx-auto">
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
              More than just showcasing artists, Barrett Sessions is a testament to our love for culture and music, creating a space where you can unwind and immerse yourself in great tunes.
            </h1>
            
            {/* Editorial Paragraphs */}
            <div className={`flex flex-col gap-6 text-[1.05rem] sm:text-[1.15rem] ${isDark ? 'text-neutral-300' : 'text-[#222222]'} font-light leading-[1.6] max-w-[840px] mt-10 sm:mt-14`}>
              <p>
                Our graphics and concept are inspired by fluidity, mirroring the movement and rhythm of music itself. Through dynamic shapes and flowing designs, we capture the essence of musical fluidity and the vibrant energy it evokes. Designed primarily for digital formats, we've also adapted our visuals for print to amplify their impact.
              </p>
              <p>
                Our color palette sets the mood for each live session, with soothing blues for relaxed vibes, energetic reds for lively performances, and a touch of experimental yellow to push boundaries. As we continue to build and develop the platform, we invite you to join us on this musical journey.
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
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2023</span>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Container sin el padding top gigante para que empiece justo debajo del header */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1900px] mx-auto flex flex-col gap-2 sm:gap-3">
        
        {/* ROW 1: Lucho + Fluid Blue */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_lucho_portrait.jpg" alt="Lucho Portrait" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_fluid_blue.jpg" alt="Fluid Blue" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* ROW 2: Blue Container with Phones */}
        <section className="w-full bg-[#4665C5] py-16 sm:py-24 px-4 sm:px-8 flex items-center justify-center">
           <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {/* Phone 1 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#3B54A8] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#3B54A8] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-[#7FB1F5]">
                    <img src="/images/barrett_fluid_blue.jpg" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Phone Screen" />
                 </div>
              </div>
              {/* Phone 2 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#3B54A8] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#3B54A8] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-white flex items-center justify-center">
                    <img src="/images/barrett_blue_star.jpg" className="w-4/5 h-auto object-contain" alt="Phone Screen" />
                 </div>
              </div>
              {/* Phone 3 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#3B54A8] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#3B54A8] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-black">
                    <img src="/images/barrett_lucho_portrait.jpg" className="w-full h-full object-cover" alt="Phone Screen" />
                 </div>
              </div>
           </div>
        </section>

        {/* ROW 3: Marquee */}
        <section className={`w-full overflow-hidden py-3 sm:py-5 border-y ${isDark ? 'border-white/10' : 'border-black/10'} select-none bg-white text-black`}>
          <div className="flex whitespace-nowrap animate-marquee-left text-sm sm:text-base md:text-xl font-medium uppercase tracking-widest">
            <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
            <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
          </div>
        </section>

        {/* ROW 4: 4 Colored Images (Seamless) */}
        <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="w-full aspect-square overflow-hidden bg-neutral-200">
            <img src="/images/barrett_blue_star.jpg" alt="Blue Star" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-square overflow-hidden bg-[#ED4036]">
            <img src="/images/barrett_red_urchin.jpg" alt="Red Urchin" className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-square overflow-hidden bg-[#4665C5]">
            <img src="/images/barrett_blue_splash.jpg" alt="Blue Splash" className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-square overflow-hidden bg-[#E75B5F]">
            <img src="/images/barrett_red_velvet_blob.jpg" alt="Red Velvet Blob" className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* ROW 5: Text Section - Brand Experience */}
        <section className={`w-full py-16 sm:py-24 px-4 sm:px-8 ${isDark ? 'bg-[#0c0c0d]' : 'bg-[#F9F9F9]'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-[1200px] mx-auto">
            <div className="lg:col-span-4 pt-1 sm:pt-2">
              <div className={`text-[13px] sm:text-[14px] font-normal leading-[1.3] ${isDark ? 'text-white' : 'text-black'} select-none`}>
                <p>(02)</p>
                <p className="mt-5 sm:mt-6">Brand</p>
                <p>Experience</p>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col max-w-[800px]">
              <h2 className={`text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-[400] tracking-[-0.035em] leading-[1.12] ${isDark ? 'text-white' : 'text-black'}`}>
                Elevating the guest experience
              </h2>
              <p className={`mt-6 sm:mt-8 text-[0.95rem] sm:text-[1.0625rem] leading-[1.65] font-light ${isDark ? 'text-neutral-300' : 'text-[#1a1a1a]'}`}>
                Embracing the spirit of creativity and camaraderie, our agency team has enthusiastically stepped into the spotlight to embody the characters depicted in our key visuals. With contagious energy and a shared passion for music, we've infused our sessions with our own unique dance moves, enhancing the sense of belonging and community within our platform. By dancing alongside the artists, we're not just spectators — we're active participants, contributing to the vibrant atmosphere and leaving our mark on the musical landscape. Join us as we dance our way to immortality, celebrating the joy of music and the power of unity.
              </p>
            </div>
          </div>
        </section>

        {/* ROW 6: Ruqyay + Red Blob */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_ruqyay_portrait.jpg" alt="Ruqyay Portrait" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#E75B5F]">
            <img src="/images/barrett_red_velvet_blob.jpg" alt="Red Velvet Blob" className="w-full h-full object-cover object-center mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* ROW 7: Red Container with Phones */}
        <section className="w-full bg-[#A2292E] py-16 sm:py-24 px-4 sm:px-8 flex items-center justify-center">
           <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {/* Phone 1 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#892226] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#892226] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-[#E75B5F]">
                    <img src="/images/barrett_red_velvet_blob.jpg" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Phone Screen" />
                 </div>
              </div>
              {/* Phone 2 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#892226] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#892226] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-white flex items-center justify-center">
                    <img src="/images/barrett_red_urchin.jpg" className="w-4/5 h-auto object-contain" alt="Phone Screen" />
                 </div>
              </div>
              {/* Phone 3 */}
              <div className="mx-auto w-full max-w-[300px] aspect-[9/18.5] bg-[#892226] rounded-[34px] sm:rounded-[40px] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[3px] border-[#892226] overflow-hidden relative flex flex-col">
                 <div className="w-full h-full rounded-[26px] sm:rounded-[32px] overflow-hidden border border-black/10 relative bg-black">
                    <img src="/images/barrett_ruqyay_portrait.jpg" className="w-full h-full object-cover" alt="Phone Screen" />
                 </div>
              </div>
           </div>
        </section>

        {/* ROW 8: Marquee */}
        <section className={`w-full overflow-hidden py-3 sm:py-5 border-y ${isDark ? 'border-white/10' : 'border-black/10'} select-none bg-white text-black`}>
          <div className="flex whitespace-nowrap animate-marquee-left text-sm sm:text-base md:text-xl font-medium uppercase tracking-widest">
            <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
            <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
          </div>
        </section>

        {/* ROW 9: Laptop */}
        <section className="w-full aspect-[16/9] sm:aspect-[1.5/1] md:aspect-[1.95/1] overflow-hidden bg-neutral-900 mt-4 sm:mt-8">
          <img src="/images/barrett_laptop_studio.jpg" alt="Laptop Studio" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
        </section>

        {/* ROW 10: Tote Bag + T-shirt */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_tote_bag.jpg" alt="Tote Bag" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_tshirt_back.jpg" alt="T-Shirt Back" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
        </section>

        {/* ROW 11: Pasting Poster + Wall (Asymmetrical) */}
        <section className="w-full flex flex-col md:flex-row gap-2 sm:gap-3 mt-2 sm:mt-3 mb-10">
          <div className="w-full md:w-[35%] aspect-[3/4] sm:aspect-auto overflow-hidden bg-neutral-900">
            <img src="/images/barrett_poster_pasting.jpg" alt="Poster Pasting" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full md:w-[65%] min-h-[400px] md:min-h-[600px] overflow-hidden bg-neutral-900">
            <img src="/images/barrett_wildposting_wall.jpg" alt="Wildposting Wall" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          </div>
        </section>

      </div>
    </div>
  );
};
