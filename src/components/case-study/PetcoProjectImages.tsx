import React from 'react';

interface PetcoProjectImagesProps {
  theme?: 'dark' | 'light';
}

export const PetcoProjectImages: React.FC<PetcoProjectImagesProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 max-w-[1700px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
      
      {/* =========================================================================
          MODULE 1: TOP HERO PACKAGING (TWO YELLOW BOXES ON SKY BLUE)
          ========================================================================= */}
      <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] relative flex items-center justify-center min-h-[380px] sm:min-h-[500px] md:min-h-[640px] lg:min-h-[780px]">
        <img 
          src="/images/petco_boxes_hero.jpg" 
          alt="PETCO Cannabidol Packaging Boxes Front and Back View"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* =========================================================================
          MODULE 2: 2-COLUMN SPLIT (DIORAMA BOX SCENE + ILLUSTRATED DOG ON YELLOW)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Left: Grassy hill diorama with CBD box */}
        <div className="w-full overflow-hidden rounded-sm bg-[#4fa5e6] relative aspect-square sm:aspect-[4/3] md:aspect-square flex items-center justify-center">
          <img 
            src="/images/petco_cannabidol.jpg" 
            alt="PETCO Cannabidol Box in Mossy Hill Diorama"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Right: Illustrated white dog mascot on light yellow (#fef387) */}
        <div className="w-full overflow-hidden rounded-sm bg-[#fef387] relative aspect-square sm:aspect-[4/3] md:aspect-square flex items-center justify-center p-8 sm:p-14">
          <svg 
            viewBox="0 0 300 360" 
            className="w-full max-w-[320px] max-h-[380px] drop-shadow-sm select-none"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mascot Dog Illustration matching Petco brand style */}
            <g id="petco-dog-mascot">
              {/* Back right ear (inner brown/tan) */}
              <path d="M195 95 C205 60 225 65 240 85 C245 105 230 125 210 120 Z" fill="#d99960" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
              {/* Left floppy ear */}
              <path d="M105 95 C90 60 70 65 55 85 C50 105 65 125 88 120 Z" fill="#e8ded2" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
              
              {/* Dog head contour */}
              <path d="M92 110 C90 75 205 75 205 110 C218 135 210 170 185 185 C160 195 135 195 110 185 C88 170 80 135 92 110 Z" fill="#ffffff" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
              
              {/* Tan patch over right eye */}
              <path d="M165 92 C185 92 198 108 196 130 C194 150 175 152 162 142 C155 135 155 110 165 92 Z" fill="#e5aa70" opacity="0.85" />
              
              {/* Eyes */}
              <circle cx="126" cy="128" r="4.5" fill="#111111" />
              <circle cx="172" cy="128" r="4.5" fill="#111111" />
              <circle cx="127.5" cy="126.5" r="1.5" fill="#ffffff" />
              <circle cx="173.5" cy="126.5" r="1.5" fill="#ffffff" />

              {/* Eyebrows */}
              <path d="M120 118 Q126 115 132 118" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M166 118 Q172 115 178 118" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

              {/* Snout and nose */}
              <ellipse cx="149" cy="148" rx="8" ry="6" fill="#111111" />
              <path d="M149 154 L149 164" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
              <path d="M140 164 Q149 170 158 164" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />

              {/* Dog body */}
              <path d="M112 188 C95 210 90 270 94 315 L124 315 C128 275 135 240 142 225 C150 240 158 275 162 315 L192 315 C198 270 195 210 178 188 Z" fill="#ffffff" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />

              {/* Front legs / paws */}
              <path d="M118 220 L112 315" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
              <path d="M170 220 L176 315" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

              {/* Hind legs sitting */}
              <path d="M94 285 C80 290 70 305 76 320 C82 325 102 325 110 320" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="#ffffff" />
              <path d="M192 285 C206 290 216 305 210 320 C204 325 184 325 176 320" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="#ffffff" />

              {/* Paw lines */}
              <path d="M100 318 L100 323 M106 318 L106 323" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M180 318 L180 323 M186 318 L186 323" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

              {/* Spots on back */}
              <path d="M174 215 C184 218 188 230 185 240 C180 245 172 242 170 235 Z" fill="#d99960" opacity="0.8" />
              <path d="M102 240 C95 245 92 258 98 266 C105 270 110 262 108 250 Z" fill="#d99960" opacity="0.8" />

              {/* Tail */}
              <path d="M84 290 C62 280 58 250 68 235" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        </div>
      </div>

      {/* =========================================================================
          MODULE 3: FULL-WIDTH PANORAMIC DIORAMA (3 BOXES IN GREEN ROLLING HILLS)
          ========================================================================= */}
      <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] relative min-h-[280px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[680px]">
        <img 
          src="/images/petco_diorama_trio.jpg" 
          alt="PETCO Trio of Packaging Boxes in Miniature Green Hills Diorama"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* =========================================================================
          MODULE 4: 2-COLUMN SPLIT (DISPLAY TYPOGRAPHY + COLOR PALETTE SWATCHES)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Left: Solid Electric Blue (#0060df) with giant organic display 'PET CO' */}
        <div className="w-full overflow-hidden rounded-sm bg-[#0060df] relative aspect-square sm:aspect-[4/3] md:aspect-square flex items-center justify-center p-8 sm:p-16">
          <div className="text-black font-black tracking-[-0.05em] leading-[0.82] select-none flex flex-col items-center justify-center text-[5.5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem]">
            <span>PET</span>
            <span>CO</span>
          </div>
        </div>

        {/* Right: Color swatches stack with exact labels & hex codes */}
        <div className="w-full overflow-hidden rounded-sm flex flex-col aspect-square sm:aspect-[4/3] md:aspect-square">
          {/* Light Yellow #fef387 */}
          <div className="flex-1 bg-[#fef387] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
            <span>Light Yellow #fef387</span>
          </div>
          {/* Light Orange #f79674 */}
          <div className="flex-1 bg-[#f79674] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
            <span>Light Orange #f79674</span>
          </div>
          {/* Light Red #f26d84 */}
          <div className="flex-1 bg-[#f26d84] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
            <span>Light Red #f26d84</span>
          </div>
          {/* Light Green #79c47e */}
          <div className="flex-1 bg-[#79c47e] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
            <span>Light Green #79c47e</span>
          </div>
          {/* Light Lila #b7a8c6 */}
          <div className="flex-1 bg-[#b7a8c6] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
            <span>Light Lila #b7a8c6</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODULE 5: FULL-WIDTH PANORAMIC DIORAMA (PETCO MOBILITY JAR IN PINK DIORAMA)
          ========================================================================= */}
      <div className="w-full overflow-hidden rounded-sm bg-[#f26d84] relative min-h-[280px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[680px]">
        <img 
          src="/images/petco_mobility_jar.jpg" 
          alt="PETCO Mobility Jar in Pink Papercraft Diorama"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* =========================================================================
          MODULE 6: 2-COLUMN SPLIT (PACKAGING DIELINE BLUEPRINT + DROPPER BOTTLE)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Left: Dieline Blueprint on Coral Pink (#f26d84) */}
        <div className="w-full overflow-hidden rounded-sm bg-[#f26d84] relative aspect-square sm:aspect-[4/3] md:aspect-square p-4 sm:p-6 md:p-8 flex items-center justify-center">
          <div className="w-full h-full max-w-[480px] max-h-[480px] border-2 border-dashed border-black/30 p-2 sm:p-3 relative flex flex-col justify-between">
            
            {/* Top flaps outline */}
            <div className="w-full h-8 sm:h-12 border border-black/25 flex items-center justify-around text-[9px] sm:text-[10px] text-black/70 font-mono">
              <span className="rotate-180">CBD Mobility</span>
              <span className="rotate-180">Cannabidol</span>
            </div>

            {/* Main panels */}
            <div className="flex-1 my-2 grid grid-cols-4 gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] text-black leading-tight">
              {/* Panel 1: Usage instructions */}
              <div className="border border-black/25 p-1 sm:p-1.5 flex flex-col justify-between bg-white/5">
                <div>
                  <p className="font-bold mb-1">Formas de uso</p>
                  <p className="text-[7px] sm:text-[8px] text-black/75">Aplíquese a la comida de la mascota.</p>
                  <p className="text-[7px] sm:text-[8px] text-black/75 mt-1">Aplique directamente por vía oral.</p>
                  <p className="font-bold mt-2">Recomendaciones</p>
                  <p className="text-[7px] sm:text-[8px] text-black/75">Guárdese a temperatura ambiente.</p>
                </div>
              </div>

              {/* Panel 2: Front brand face */}
              <div className="border border-black/35 p-1 sm:p-1.5 flex flex-col items-center justify-between text-center bg-white/10">
                <span className="text-[7px] sm:text-[8px] font-mono">10ml</span>
                <span className="font-black text-sm sm:text-base tracking-tighter">PETCO</span>
                <div className="w-6 h-6 border border-black/30 rounded-full flex items-center justify-center text-[8px]">
                  🌿
                </div>
                <div className="leading-none mt-1">
                  <p className="font-serif italic text-[9px] sm:text-[11px]">Cannabidol</p>
                  <p className="text-[7px] sm:text-[8px] uppercase tracking-wider font-semibold">CBD Calming</p>
                  <p className="text-[6px] sm:text-[7px] text-black/70">1.5% CBD</p>
                </div>
              </div>

              {/* Panel 3: Tagline & Seal */}
              <div className="border border-black/25 p-1 sm:p-1.5 flex flex-col items-center justify-between text-center bg-white/5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black flex flex-col items-center justify-center text-[5px] sm:text-[6px] font-bold uppercase leading-none p-0.5">
                  <span>MEJOR</span>
                  <span>🐾</span>
                  <span>AMIGOS</span>
                </div>
                <p className="font-serif italic text-[10px] sm:text-[12px] leading-[1.1]">
                  Más tranquilos, mejores mascotas.
                </p>
                <span className="text-[6px] text-black/60 font-mono">Elaborado por Juana</span>
              </div>

              {/* Panel 4: Ingredients */}
              <div className="border border-black/25 p-1 sm:p-1.5 flex flex-col justify-between bg-white/5">
                <div>
                  <p className="font-bold mb-1">Ingredientes:</p>
                  <p className="text-[6px] sm:text-[7px] text-black/75">Aceite de oliva virgen, Extracto de espectro completo de Cáñamo (CBD).</p>
                </div>
                <span className="text-[6px] text-black/60 font-mono">Hecho en Perú</span>
              </div>
            </div>

            {/* Bottom flaps outline */}
            <div className="w-full h-8 sm:h-12 border border-black/25 flex items-center justify-center text-[8px] sm:text-[10px] text-black/60 font-mono">
              <span>10ml CBD (Cannabidol)</span>
            </div>
          </div>
        </div>

        {/* Right: Floating CBD Dropper Bottle in Diorama */}
        <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] relative aspect-square sm:aspect-[4/3] md:aspect-square flex items-center justify-center">
          <img 
            src="/images/petco_dropper_bottle.jpg" 
            alt="PETCO Green Glass CBD Dropper Bottle in Nature Diorama"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* =========================================================================
          MODULE 7: FULL-WIDTH PACKAGING LABEL BANNER (230gr MOBILITY TUB STRIP)
          ========================================================================= */}
      <div className="w-full overflow-hidden rounded-sm bg-[#f26d84] p-4 sm:p-6 md:p-8 relative">
        <div className="w-full border-2 border-black/30 rounded-sm p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/5">
          
          {/* Brand & weight */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="bg-black text-white text-xs sm:text-sm font-mono px-3 py-1 rounded-full font-medium">
              230gr
            </span>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black leading-none">
                PETCO
              </span>
              <span className="text-xl sm:text-2xl font-bold text-black tracking-tight mt-1">
                Mobility
              </span>
              <span className="text-xs sm:text-sm text-black/80 font-medium">
                Glucosamina • MSM • Condroitina • Vitamina E
              </span>
            </div>
          </div>

          {/* Dog mascot & Tagline */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path d="M20 70 C30 50 60 40 85 45 C75 65 60 85 40 85 Z" fill="#ffffff" stroke="#111" strokeWidth="2.5" />
                <circle cx="70" cy="50" r="2" fill="#111" />
                <path d="M45 55 L55 50 L58 60 Z" fill="#f79674" stroke="#111" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-black leading-tight max-w-[260px]">
                Mejor nutrición, mayor flexibilidad.
              </p>
            </div>
          </div>

          {/* Nutrition Table */}
          <div className="bg-white/40 backdrop-blur-sm border border-black/30 p-3 sm:p-4 rounded text-black text-[10px] sm:text-xs font-mono max-w-[280px] w-full">
            <div className="font-bold border-b border-black/30 pb-1 mb-1.5 flex justify-between">
              <span>Tabla Nutricional</span>
              <span>(Dosis 8gr)</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-black/10">
              <span>Sulfato de glucosamina</span>
              <span>450 mg</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-black/10">
              <span>Metilsulfonilmetano (MSM)</span>
              <span>375 mg</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-black/10">
              <span>Condroitín sulfato de sodio</span>
              <span>180 mg</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Vitamina E</span>
              <span>20 UI</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MODULE 8: EDITORIAL (02) BRAND EXPERIENCE
          ========================================================================= */}
      <section className="w-full py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
          
          {/* Left Column: (02) Brand Experience */}
          <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
            isDark ? 'text-white/85' : 'text-black/90'
          } select-none`}>
            <span>(02)</span>
            <div className="mt-8 sm:mt-10">
              Brand<br />
              Experience
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="flex flex-col">
            <h3 className={`text-[1.85rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.12] ${
              isDark ? 'text-white' : 'text-black'
            } max-w-[1250px]`}>
              As a part of the brand identity, Petco's illustrations showcase the natural ingredients and how they help pets transform from the inside out.
            </h3>

            <div className={`flex flex-col gap-6 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
              isDark ? 'text-gray-300' : 'text-[#222222]'
            } font-light leading-[1.6] max-w-[920px] mt-8 sm:mt-12`}>
              <p>
                It’s not just about looking good; it’s about feeling great too.
              </p>
              <p>
                Petco in this nutritional and brings a positive change to the pets. It’s more than just food; it’s a lifestyle that promotes vitality and happiness for both pet owners and their furry companions. Petco - where every bite is a step towards a healthier, happier pet.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MODULE 9: FULL-WIDTH STREET BILLBOARD MOCKUP
          ========================================================================= */}
      <div className="w-full overflow-hidden rounded-sm bg-[#ececec] relative min-h-[360px] sm:min-h-[520px] md:min-h-[700px] lg:min-h-[860px]">
        <img 
          src="/images/petco_building_billboard.jpg" 
          alt="Outdoor Building Billboard: Más guauuu en cada bocado"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* =========================================================================
          MODULE 10: 2-COLUMN SPLIT (EMERALD DIGESTIÓN POSTER + LILAC LIFESTYLE PHOTO)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Left: Emerald green poster with circular badge & bold condensed typography */}
        <div className="w-full overflow-hidden rounded-sm bg-[#27a858] relative aspect-square sm:aspect-[4/3] md:aspect-square p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-black">
          {/* Top Right Seal */}
          <div className="w-full flex justify-end">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-black flex flex-col items-center justify-center text-center p-1 select-none">
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest leading-none">MEJOR NUTRICIÓN</span>
              <span className="text-base sm:text-lg my-0.5">🐾</span>
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest leading-none">MEJORES AMIGOS</span>
            </div>
          </div>

          {/* Large display condensed typography */}
          <div className="text-[3.25rem] sm:text-[4.5rem] md:text-[5.25rem] lg:text-[6.5rem] font-black tracking-[-0.04em] leading-[0.9] select-none">
            Mejor<br />
            nutrición,<br />
            mejor<br />
            digestión.
          </div>
        </div>

        {/* Right: Lifestyle photography on lilac background */}
        <div className="w-full overflow-hidden rounded-sm bg-[#b7a8c6] relative aspect-square sm:aspect-[4/3] md:aspect-square flex items-center justify-center">
          <img 
            src="/images/petco_girl_dog_photo.jpg" 
            alt="Young woman playing with fluffy white dog on lilac studio set"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* =========================================================================
          MODULE 11: 4-COLUMN x 2-ROW SOCIAL & CAMPAIGN GRID (8 TILES)
          ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Card 1: Lilac card - Paseos */}
        <div className="aspect-square bg-[#b7a8c6] rounded-sm p-4 sm:p-5 flex flex-col justify-between text-black relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <span className="text-base sm:text-lg font-bold leading-tight max-w-[120px]">
              Mejor nutrición, mejores paseos.
            </span>
            <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center text-[6px] font-bold text-center leading-none p-0.5 flex-shrink-0">
              🐾
            </div>
          </div>
          <div className="flex items-end justify-between mt-4">
            <span className="text-4xl">🐕‍🦺</span>
            <span className="text-[10px] font-mono opacity-60">PETCO</span>
          </div>
        </div>

        {/* Card 2: Light Green card - Cannabidol Mascot */}
        <div className="aspect-square bg-[#79c47e] rounded-sm p-4 sm:p-5 flex flex-col justify-between items-center text-center text-black relative overflow-hidden">
          <div className="w-20 h-20 sm:w-24 sm:h-24 my-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              {/* Leaf on head */}
              <path d="M50 15 C45 30 48 45 50 50 C52 45 55 30 50 15 Z" fill="#d8ee68" stroke="#111" strokeWidth="1.5" />
              <path d="M40 22 C43 32 48 45 50 50 C42 45 35 32 40 22 Z" fill="#d8ee68" stroke="#111" strokeWidth="1.5" />
              <path d="M60 22 C57 32 52 45 50 50 C58 45 65 32 60 22 Z" fill="#d8ee68" stroke="#111" strokeWidth="1.5" />
              {/* Dog head */}
              <circle cx="50" cy="62" r="18" fill="#fff" stroke="#111" strokeWidth="2" />
              <circle cx="44" cy="60" r="2" fill="#111" />
              <circle cx="56" cy="60" r="2" fill="#111" />
              <ellipse cx="50" cy="66" rx="3" ry="2" fill="#111" />
            </svg>
          </div>
          <div>
            <p className="font-serif italic font-bold text-lg sm:text-xl leading-none">Cannabidol</p>
            <p className="text-[10px] sm:text-xs font-medium tracking-wide mt-1">CBD para mascotas</p>
          </div>
        </div>

        {/* Card 3: Light Yellow card - Guuuuaaaa */}
        <div className="aspect-square bg-[#fef387] rounded-sm p-4 sm:p-5 flex flex-col justify-between text-black relative overflow-hidden">
          <div className="font-black text-xl sm:text-2xl md:text-3xl leading-[0.9] tracking-tighter uppercase">
            Guuuuaaaa<br />
            aaaauuuuu<br />
            uuuu!!!!!
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl">🦮</span>
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[7px] font-bold">
              🐾
            </div>
          </div>
        </div>

        {/* Card 4: Coral Pink - Mobility Jar Diorama */}
        <div className="aspect-square bg-[#f26d84] rounded-sm relative overflow-hidden">
          <img 
            src="/images/petco_mobility_jar.jpg" 
            alt="Petco Mobility Jar tile" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Card 5: Light Orange - PETCO Corgi */}
        <div className="aspect-square bg-[#f79674] rounded-sm p-4 sm:p-5 flex flex-col justify-between text-black relative overflow-hidden">
          <div className="font-black text-2xl sm:text-3xl tracking-tighter">
            PETCO
          </div>
          <div className="my-auto flex justify-center">
            <span className="text-5xl">🐶</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span>petco.com.pe</span>
            <span>✦</span>
          </div>
        </div>

        {/* Card 6: Sky Blue - Dropper Bottle Diorama */}
        <div className="aspect-square bg-[#5faee3] rounded-sm relative overflow-hidden">
          <img 
            src="/images/petco_dropper_bottle.jpg" 
            alt="Petco CBD Bottle tile" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Card 7: Light Yellow - Menos pelos en el sofá */}
        <div className="aspect-square bg-[#fef387] rounded-sm p-4 sm:p-5 flex flex-col justify-between text-black relative overflow-hidden">
          <div>
            <p className="text-base sm:text-lg font-bold leading-tight">
              Mejor nutrición, menos pelos en el sofá
            </p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <span className="text-4xl">🛋️🐕</span>
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[6px] font-bold">
              PETCO
            </div>
          </div>
        </div>

        {/* Card 8: Light Orange - Mobility Articulaciones */}
        <div className="aspect-square bg-[#f79674] rounded-sm p-4 sm:p-5 flex flex-col justify-between items-center text-center text-black relative overflow-hidden">
          <div className="w-20 h-20 my-auto flex items-center justify-center">
            <span className="text-5xl">🐕💨</span>
          </div>
          <div>
            <p className="font-black text-xl sm:text-2xl tracking-tight leading-none">Mobility</p>
            <p className="text-[10px] sm:text-xs font-medium tracking-wide mt-1">Articulaciones más flexibles</p>
          </div>
        </div>

      </div>

    </div>
  );
};
