import React from 'react';
import { UmanaBurstIcon } from './UmanaBurstIcon';
import { AppView } from '../../../App';

interface BarrettSessionsReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const BarrettSessionsReadingView: React.FC<BarrettSessionsReadingViewProps> = ({ 
  theme = "light",
  onNavigate 
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full min-h-screen transition-colors duration-500 ${
      isDark ? "bg-[#0c0c0d] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28`}>
      
      {/* 1. TOP MINIMAL NAVIGATION BAR (MATCH EXACTO A 2.png) */}
      <nav className="w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-8 sm:pt-12 pb-12 sm:pb-20 flex items-center justify-between select-none">
        {/* LOGO ISOTIPO SUNBURST CON ® A LA IZQUIERDA */}
        <button 
          onClick={() => onNavigate && onNavigate('home')} 
          className="flex items-start gap-1 cursor-pointer group focus:outline-none"
          aria-label="Henri Barrett Home"
        >
          <UmanaBurstIcon className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-45 ${
            isDark ? 'text-white' : 'text-black'
          }`} />
          <span className={`text-[10px] sm:text-[11px] font-bold leading-none -mt-0.5 ${
            isDark ? 'text-white' : 'text-black'
          }`}>®</span>
        </button>

        {/* ENLACES SUPERIORES A LA DERECHA: 'WORK WITH US' Y 'MENU' SUBRAYADOS */}
        <div className="flex items-center gap-8 sm:gap-12 text-sm sm:text-base font-normal">
          <button 
            onClick={() => onNavigate && onNavigate('work-with-us')} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-60 cursor-pointer ${
              isDark ? 'border-white text-white' : 'border-black text-black'
            }`}
          >
            Work with us
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('work')} 
            className={`border-b pb-0.5 transition-opacity hover:opacity-60 cursor-pointer ${
              isDark ? 'border-white text-white' : 'border-black text-black'
            }`}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* 2. MAIN READING VIEW HERO CONTENT (MATCH EXACTO A 2.png) */}
      <section className="w-full px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">

          {/* COLUMNA IZQUIERDA: (01) Project Overview */}
          <div className="lg:col-span-4 xl:col-span-4 pt-1 sm:pt-2">
            <div className={`text-[14px] sm:text-[15px] font-normal leading-[1.3] ${
              isDark ? 'text-white' : 'text-black'
            } select-none`}>
              <p>(01)</p>
              <p className="mt-5 sm:mt-6">Project</p>
              <p>Overview</p>
            </div>
          </div>

          {/* COLUMNA DERECHA: TITULAR, PÁRRAFOS Y TABLA (DETAILS) */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col max-w-[940px]">
            
            {/* TITULAR PRINCIPAL EDITORIAL (MATCH EXACTO A 2.png) */}
            <h1 className={`text-[2rem] sm:text-[2.65rem] md:text-[3.15rem] lg:text-[3.5rem] xl:text-[3.85rem] font-[400] tracking-[-0.035em] leading-[1.12] ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              More than just showcasing artists, Barrett Sessions is a testament to our love for culture and music, creating a space where you can unwind and immerse yourself in great tunes.
            </h1>

            {/* PÁRRAFO 1 (MATCH EXACTO A 2.png) */}
            <p className={`mt-8 sm:mt-12 text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-[1.65] font-light ${
              isDark ? 'text-neutral-300' : 'text-[#1a1a1a]'
            }`}>
              Our graphics and concept are inspired by fluidity, mirroring the movement and rhythm of music itself. Through dynamic shapes and flowing designs, we capture the essence of musical fluidity and the vibrant energy it evokes. Designed primarily for digital formats, we've also adapted our visuals for print to amplify their impact.
            </p>

            {/* PÁRRAFO 2 (MATCH EXACTO A 2.png) */}
            <p className={`mt-6 sm:mt-8 text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-[1.65] font-light ${
              isDark ? 'text-neutral-300' : 'text-[#1a1a1a]'
            }`}>
              Our color palette sets the mood for each live session, with soothing blues for relaxed vibes, energetic reds for lively performances, and a touch of experimental yellow to push boundaries. As we continue to build and develop the platform, we invite you to join us on this musical journey.
            </p>

            {/* TABLA (DETAILS) (MATCH EXACTO A 2.png) */}
            <div className="mt-14 sm:mt-20 w-full">
              
              {/* TÍTULO DE LA TABLA (DETAILS) */}
              <div className={`pb-4 border-b ${
                isDark ? 'border-white/20 text-white' : 'border-black/30 text-black'
              } text-sm sm:text-base font-normal tracking-wide select-none`}>
                <span>(DETAILS)</span>
              </div>

              {/* FILA 1: Type -> Brand */}
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm sm:text-base`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Type</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand</span>
              </div>

              {/* FILA 2: Year -> 2021 */}
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm sm:text-base`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2021</span>
              </div>

              {/* FILA 3: Country -> Perú */}
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm sm:text-base`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Country</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
              </div>

              {/* FILA 4: Sources -> Production, Event */}
              <div className="flex items-center justify-between py-4 sm:py-5 text-sm sm:text-base">
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Sources</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Production, Event</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDY VISUAL SHOWCASE — MATCH EXACTO A GRID DE "3.png"                */}
      {/* ========================================================================= */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1680px] mx-auto mt-16 sm:mt-24">

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 1 (MATCH EXACTO A 3.png): DUAL VERTICAL (DJ LUCHO + 3D FLUID SCULPTURE) */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          {/* COL 1: DJ Lucho Zeballos Portrait */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img
              src="/images/barrett_lucho_portrait.jpg"
              alt="DJ Lucho Zeballos portrait with sunglasses in studio light"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* COL 2: 3D Blue Fluid Sculpture */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#88B8F7] relative">
            <img
              src="/images/barrett_fluid_blue.jpg"
              alt="Barrett Sessions 3D fluid organic sculpture"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 2 (MATCH EXACTO A 3.png): BLUE 3-PHONE SHOWCASE + CONTINUOUS TICKER  */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full mt-2 sm:mt-3">
          {/* Blue Container with 3 Phones */}
          <div className="w-full bg-[#2353D3] py-12 sm:py-20 px-4 sm:px-8 md:px-12 overflow-hidden">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center justify-center">
              
              {/* PHONE 1: Digital Flyer Poster */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#0A1226] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#7FB1F5] via-[#5C94E5] to-[#407BDB] flex flex-col justify-between p-4 sm:p-5 relative text-black select-none">
                  {/* Top Pill ticker */}
                  <div className="w-full border border-black/25 rounded-full py-1 px-2.5 text-[8.5px] font-mono font-bold tracking-tight text-center truncate bg-white/30 backdrop-blur-xs">
                    » Relax and flow » Music to share • Music to feel »
                  </div>

                  {/* Header flyer */}
                  <div className="pt-2 sm:pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/70">Nº 1</span>
                      <span className="bg-[#EF4444] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Live
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mt-1 leading-none">
                      Barrett<br />Sessions
                    </h4>
                  </div>

                  {/* 3D Fluid Shape Center */}
                  <div className="my-auto py-2 flex items-center justify-center">
                    <div className="w-36 h-36 relative flex items-center justify-center">
                      <img 
                        src="/images/barrett_fluid_blue.jpg" 
                        alt="Barrett Sessions 3D fluid sculpture" 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Bottom session flyer info */}
                  <div className="pt-2 border-t border-black/20">
                    <p className="text-[10px] font-mono font-semibold tracking-wider text-black/80">
                      23 | 02 | 2023 | 5PM
                    </p>
                    <h5 className="text-base sm:text-lg font-black uppercase tracking-tight text-black mt-0.5">
                      Lucho Zeballos
                    </h5>
                    <div className="mt-2 w-full bg-black text-white text-center py-1.5 rounded-full text-[9.5px] font-bold tracking-wider uppercase">
                      Live → Youtube
                    </div>
                  </div>
                </div>
              </div>

              {/* PHONE 2: Kinetic Circular Badge & 3D Star */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#0A1226] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#6BA5F2] to-[#4782E0] flex flex-col justify-between p-4 sm:p-5 relative text-black select-none">
                  {/* Top header navigation */}
                  <div className="w-full flex items-center justify-between text-[9.5px] font-mono font-bold tracking-wider opacity-80">
                    <span>← Relax</span>
                    <span>↔ Feel and relax ↔</span>
                  </div>

                  {/* Rotating Circular Typography Badge with 3D Star */}
                  <div className="my-auto relative flex items-center justify-center w-full aspect-square max-w-[220px] mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_18s_linear_infinite]">
                      <path
                        id="circleTextPath1"
                        d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] uppercase font-black tracking-[0.24em] fill-black">
                        <textPath href="#circleTextPath1" startOffset="0%">
                          • BARRETT SESSIONS • LIVE STREAM • FEEL AND FLOW •
                        </textPath>
                      </text>
                    </svg>

                    {/* 3D Star in Center */}
                    <div className="absolute inset-0 m-auto w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/50">
                      <img 
                        src="/images/barrett_blue_star.jpg" 
                        alt="Barrett 3D organic star" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bottom ticker banner */}
                  <div className="w-full border-t border-black/20 pt-2 flex items-center justify-between text-[9.5px] font-mono font-bold uppercase tracking-wider">
                    <span>← Create and flow</span>
                    <span>Create and flow →</span>
                  </div>
                </div>
              </div>

              {/* PHONE 3: Full-Bleed Stream of Lucho Zeballos */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#0A1226] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col justify-between select-none">
                  <img 
                    src="/images/barrett_lucho_portrait.jpg" 
                    alt="DJ Lucho Zeballos Live session portrait"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

                  {/* Header top bar */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between text-white">
                    <span className="text-xs font-black uppercase tracking-wider">Barrett Sessions</span>
                    <div className="flex items-center gap-1.5 bg-red-600 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      LIVE
                    </div>
                  </div>

                  {/* Bottom DJ title and CTA */}
                  <div className="relative z-10 p-3.5 text-white">
                    <p className="text-[9.5px] font-mono tracking-widest text-white/70 uppercase">
                      ≈ Febrero 23 — 2023 Set ≈
                    </p>
                    <h5 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mt-0.5">
                      Lucho Zeballos
                    </h5>
                    <div className="mt-2 w-full bg-red-600 text-white text-center py-1.5 rounded-full text-[9.5px] font-bold tracking-wider uppercase">
                      tube » • Live → Youtube »
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Marquee Ticker 1 Directly Below Blue Container */}
          <div className={`w-full overflow-hidden py-3 sm:py-4 border-b border-black/15 select-none ${
            isDark ? 'bg-black text-white border-white/15' : 'bg-white text-black'
          }`}>
            <div className="flex whitespace-nowrap animate-marquee-left text-xs sm:text-sm md:text-base font-normal uppercase tracking-widest">
              <span className="mx-4">to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
              <span className="mx-4">to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 3 (MATCH EXACTO A 3.png): 4 COLORWAY SQUARES FLUSH SIDE-BY-SIDE       */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-0 mt-2 sm:mt-3">
          {/* Square 1: Blue Star */}
          <div className="w-full aspect-square bg-[#4F8FE2] overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <img 
              src="/images/barrett_blue_star.jpg" 
              alt="3D blue star organic morph" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Square 2: Red Spiked Urchin */}
          <div className="w-full aspect-square bg-[#DE3C30] overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <img 
              src="/images/barrett_red_urchin.jpg" 
              alt="3D red urchin spike sphere" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Square 3: Periwinkle Molten Splash */}
          <div className="w-full aspect-square bg-[#769BF1] overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <img 
              src="/images/barrett_blue_splash.jpg" 
              alt="3D blue fluid splash droplet" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Square 4: Red Velvet Blob */}
          <div className="w-full aspect-square bg-[#DC3C31] overflow-hidden flex items-center justify-center p-6 sm:p-10">
            <img 
              src="/images/barrett_red_velvet_blob.jpg" 
              alt="3D red velvet organic blob" 
              className="w-full h-full object-contain"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 4 (MATCH EXACTO A 3.png): (02) BRAND EXPERIENCE EDITORIAL TEXT BLOCK */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full py-20 sm:py-28 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">
            {/* Columna Izquierda: (02) Brand Experience */}
            <div className="lg:col-span-4 xl:col-span-4 pt-1 sm:pt-2">
              <div className={`text-[14px] sm:text-[15px] font-normal leading-[1.3] ${
                isDark ? 'text-white' : 'text-black'
              } select-none`}>
                <p>(02)</p>
                <p className="mt-5 sm:mt-6">Brand</p>
                <p>Experience</p>
              </div>
            </div>

            {/* Columna Derecha: Elevating the guest experience + body paragraph */}
            <div className="lg:col-span-8 xl:col-span-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-0.025em] leading-[1.15] mb-8 sm:mb-12">
                Elevating the guest experience
              </h2>
              <p className={`text-base sm:text-lg md:text-[20px] font-light leading-[1.65] max-w-3xl ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                Embracing the spirit of creativity and camaraderie, our agency team has enthusiastically stepped into the spotlight to embody the characters depicted in our key visuals. With contagious energy and a shared passion for music, we've infused our sessions with our own unique dance moves, enhancing the sense of belonging and community within our platform. By dancing alongside the artists, we're not just spectators — we're active participants, contributing to the vibrant atmosphere and leaving our mark on the musical landscape. Join us as we dance our way to immortality, celebrating the joy of music and the power of unity.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 5 (MATCH EXACTO A 3.png): DUAL VERTICAL (RUQYAY WAYRA + 3D RED VELVET) */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          {/* Ruqyay Wayra Portrait */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900">
            <img 
              src="/images/barrett_ruqyay_portrait.jpg" 
              alt="Ruqyay Wayra musical artist portrait in saturated red studio lights" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 3D Red Velvet Blob on Red */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#DE3C30] flex items-center justify-center p-8 sm:p-14">
            <img 
              src="/images/barrett_red_velvet_blob.jpg" 
              alt="3D Red Velvet tactile organic blob" 
              className="w-full h-full object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 6 (MATCH EXACTO A 3.png): RED 3-PHONE SHOWCASE + CONTINUOUS TICKER   */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full mt-2 sm:mt-3">
          {/* Red Container with 3 Phones */}
          <div className="w-full bg-[#DE3C30] py-12 sm:py-20 px-4 sm:px-8 md:px-12 overflow-hidden">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-center justify-center">
              
              {/* PHONE 1: Ruqyay Wayra Digital Poster Flyer */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#1A0605] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#F5786C] via-[#E84E40] to-[#CF3528] flex flex-col justify-between p-4 sm:p-5 relative text-white select-none">
                  {/* Top ticker pill */}
                  <div className="w-full border border-white/30 rounded-full py-1 px-2.5 text-[8.5px] font-mono font-bold tracking-tight text-center truncate bg-white/20 backdrop-blur-xs">
                    » Live » Sacred Sounds » Uruchillay Groove »
                  </div>

                  {/* Header flyer */}
                  <div className="pt-2 sm:pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Nº 6</span>
                      <span className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Live
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1 leading-none">
                      Barrett<br />Sessions
                    </h4>
                  </div>

                  {/* 3D Velvet Blob Center */}
                  <div className="my-auto py-2 flex items-center justify-center">
                    <div className="w-36 h-36 relative flex items-center justify-center">
                      <img 
                        src="/images/barrett_red_velvet_blob.jpg" 
                        alt="Barrett Sessions red velvet shape" 
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Bottom session flyer info */}
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-[10px] font-mono font-semibold tracking-wider text-white/80">
                      11 | 08 | 2023 | 7PM
                    </p>
                    <h5 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mt-0.5">
                      Ruqyay Wayra
                    </h5>
                    <div className="mt-2 w-full bg-white text-black text-center py-1.5 rounded-full text-[9.5px] font-bold tracking-wider uppercase">
                      Live → Youtube
                    </div>
                  </div>
                </div>
              </div>

              {/* PHONE 2: Rotating circular badge with 3D Red Urchin */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#1A0605] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#F26457] to-[#D63A2E] flex flex-col justify-between p-4 sm:p-5 relative text-white select-none">
                  {/* Top header navigation */}
                  <div className="w-full flex items-center justify-between text-[9.5px] font-mono font-bold tracking-wider opacity-85">
                    <span>» Uruchillay</span>
                    <span>Fiesta with the Gods »</span>
                  </div>

                  {/* Rotating Circular Typography Badge with 3D Red Urchin */}
                  <div className="my-auto relative flex items-center justify-center w-full aspect-square max-w-[220px] mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_18s_linear_infinite]">
                      <path
                        id="circleTextPath2"
                        d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] uppercase font-black tracking-[0.24em] fill-white">
                        <textPath href="#circleTextPath2" startOffset="0%">
                          • BARRETT SESSIONS • RUQYAY WAYRA • SACRED SOUNDS •
                        </textPath>
                      </text>
                    </svg>

                    <div className="absolute inset-0 m-auto w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/60">
                      <img 
                        src="/images/barrett_red_urchin.jpg" 
                        alt="Barrett 3D red urchin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bottom ticker banner */}
                  <div className="w-full border-t border-white/20 pt-2 flex items-center justify-between text-[9.5px] font-mono font-bold uppercase tracking-wider">
                    <span>th the gods »</span>
                    <span>Sacred Sounds »</span>
                  </div>
                </div>
              </div>

              {/* PHONE 3: Full-Bleed Stream of Ruqyay Wayra */}
              <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-[#1A0605] rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-900 flex flex-col justify-between overflow-hidden relative text-white">
                <div className="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col justify-between select-none">
                  <img 
                    src="/images/barrett_ruqyay_portrait.jpg" 
                    alt="Ruqyay Wayra live set stream"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

                  {/* Header top bar */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between text-white">
                    <span className="text-xs font-black uppercase tracking-wider">Barrett Sessions</span>
                    <div className="flex items-center gap-1.5 bg-black px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      LIVE
                    </div>
                  </div>

                  {/* Bottom artist name and CTA */}
                  <div className="relative z-10 p-3.5 text-white">
                    <p className="text-[9.5px] font-mono tracking-widest text-white/70 uppercase">
                      Noviembre 10 B2B Set »
                    </p>
                    <h5 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mt-0.5">
                      Ruqyay Wayra
                    </h5>
                    <div className="mt-2 w-full bg-white text-black text-center py-1.5 rounded-full text-[9.5px] font-bold tracking-wider uppercase font-mono">
                      » • Live → Youtube » •
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Marquee Ticker 2 Directly Below Red Container */}
          <div className={`w-full overflow-hidden py-3 sm:py-4 border-b border-black/15 select-none ${
            isDark ? 'bg-black text-white border-white/15' : 'bg-white text-black'
          }`}>
            <div className="flex whitespace-nowrap animate-marquee-left text-xs sm:text-sm md:text-base font-normal uppercase tracking-widest">
              <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
              <span className="mx-4">ove and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow » Music to share ≈ Move and chill » Groove and shine ∞ Chill and flow »</span>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 7 (MATCH EXACTO A 3.png): FULL-WIDTH LANDSCAPE LAPTOP IN STUDIO       */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full mt-2 sm:mt-3 overflow-hidden bg-neutral-950 aspect-[16/9] md:aspect-[1.95/1]">
          <img 
            src="/images/barrett_laptop_studio.jpg" 
            alt="MacBook Pro displaying Barrett Sessions music session flyer resting on acoustic studio foam wedges" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 8 (MATCH EXACTO A 3.png): DUAL VERTICAL (TOTE BAG + T-SHIRT APPAREL) */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">
          {/* Tote Bag */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-100">
            <img 
              src="/images/barrett_tote_bag.jpg" 
              alt="Hand holding red canvas Barrett Sessions screenprinted tote bag" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* T-Shirt Back */}
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-100">
            <img 
              src="/images/barrett_tshirt_back.jpg" 
              alt="Model wearing oversized white Barrett Sessions t-shirt from behind with royal blue fluid graphic print" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* ROW 9 (MATCH EXACTO A 3.png): ASYMMETRICAL DUAL (PASTING POSTER + WALL)   */}
        {/* ----------------------------------------------------------------------- */}
        <section className="w-full flex flex-col md:flex-row gap-2 sm:gap-3 mt-2 sm:mt-3 items-stretch h-auto md:h-[680px] lg:h-[820px]">
          {/* Narrower Col: Pasting Poster on Column (~36% width) */}
          <div className="w-full md:w-[36%] h-[480px] md:h-full overflow-hidden bg-neutral-100">
            <img 
              src="/images/barrett_poster_pasting.jpg" 
              alt="Young creative pasting Barrett Sessions concert poster onto raw urban concrete wall" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Wider Col: Weathered Urban Brick Wall with Posters (~64% width) */}
          <div className="w-full md:w-[64%] h-[480px] md:h-full overflow-hidden bg-neutral-100">
            <img 
              src="/images/barrett_wildposting_wall.jpg" 
              alt="Urban weathered brick and concrete wall covered in Barrett Sessions blue and red gig posters" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 12: NEXT PROJECT FOOTER NAVIGATION                              */}
      {/* ========================================================================= */}
      <footer className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mt-28 sm:mt-40 pt-12 border-t border-current/15 max-w-[1700px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest opacity-50 block mb-1">
              Case Study Finished
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal">
              Barrett Sessions
            </h3>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate && onNavigate('work')}
              className={`text-sm sm:text-base border-b pb-0.5 transition-opacity hover:opacity-60 cursor-pointer ${
                isDark ? 'border-white text-white' : 'border-black text-black'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => onNavigate && onNavigate('case-study-rappi')}
              className={`text-sm sm:text-base border-b pb-0.5 font-medium transition-opacity hover:opacity-60 cursor-pointer ${
                isDark ? 'border-white text-white' : 'border-black text-black'
              }`}
            >
              Next: Rappi →
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
