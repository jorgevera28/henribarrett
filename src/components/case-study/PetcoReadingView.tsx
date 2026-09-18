import React from 'react';
import { AppView } from '../../types';

interface PetcoReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const PetcoReadingView: React.FC<PetcoReadingViewProps> = ({ 
  theme = "light",
  onNavigate
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
              COLUMNA IZQUIERDA: Galería de imágenes (se desplaza verticalmente con el scroll)
              ========================================================================= */}
          <div className="w-full md:w-[44%] lg:w-[42%] xl:w-[40%] flex flex-col gap-3 sm:gap-4 shrink-0">
            
            {/* 1. Pack de dos cajas Cannabidol (Frente y reverso en fondo celeste) */}
            <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] shadow-sm">
              <img 
                src="/images/petco_boxes_hero.jpg" 
                alt="PETCO Cannabidol Packaging Boxes"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 2. Diorama de colina verde con caja de Cannabidol */}
            <div className="w-full overflow-hidden rounded-sm bg-[#4fa5e6] shadow-sm">
              <img 
                src="/images/petco_cannabidol.jpg" 
                alt="PETCO Cannabidol Box in Hill Diorama"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 3. Mascota perrito ilustrado en fondo amarillo claro (#fef387) */}
            <div className="w-full overflow-hidden rounded-sm bg-[#fef387] aspect-square flex items-center justify-center p-8 sm:p-12 shadow-sm">
              <svg 
                viewBox="0 0 300 360" 
                className="w-full max-w-[320px] max-h-[380px] drop-shadow-sm select-none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="petco-mascot-dog">
                  {/* Oreja trasera */}
                  <path d="M195 95 C205 60 225 65 240 85 C245 105 230 125 210 120 Z" fill="#d99960" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
                  {/* Oreja delantera */}
                  <path d="M105 95 C90 60 70 65 55 85 C50 105 65 125 88 120 Z" fill="#e8ded2" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
                  {/* Cabeza */}
                  <path d="M92 110 C90 75 205 75 205 110 C218 135 210 170 185 185 C160 195 135 195 110 185 C88 170 80 135 92 110 Z" fill="#ffffff" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
                  {/* Mancha café en ojo */}
                  <path d="M165 92 C185 92 198 108 196 130 C194 150 175 152 162 142 C155 135 155 110 165 92 Z" fill="#e5aa70" opacity="0.85" />
                  {/* Ojos */}
                  <circle cx="126" cy="128" r="4.5" fill="#111111" />
                  <circle cx="172" cy="128" r="4.5" fill="#111111" />
                  <circle cx="127.5" cy="126.5" r="1.5" fill="#ffffff" />
                  <circle cx="173.5" cy="126.5" r="1.5" fill="#ffffff" />
                  {/* Cejas */}
                  <path d="M120 118 Q126 115 132 118" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M166 118 Q172 115 178 118" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Hocico */}
                  <ellipse cx="149" cy="148" rx="8" ry="6" fill="#111111" />
                  <path d="M149 154 L149 164" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                  <path d="M140 164 Q149 170 158 164" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />
                  {/* Cuerpo */}
                  <path d="M112 188 C95 210 90 270 94 315 L124 315 C128 275 135 240 142 225 C150 240 158 275 162 315 L192 315 C198 270 195 210 178 188 Z" fill="#ffffff" stroke="#111111" strokeWidth="3.5" strokeLinejoin="round" />
                  {/* Patas delanteras */}
                  <path d="M118 220 L112 315" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                  <path d="M170 220 L176 315" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                  {/* Patas traseras */}
                  <path d="M94 285 C80 290 70 305 76 320 C82 325 102 325 110 320" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="#ffffff" />
                  <path d="M192 285 C206 290 216 305 210 320 C204 325 184 325 176 320" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="#ffffff" />
                  {/* Manchas en el lomo */}
                  <path d="M174 215 C184 218 188 230 185 240 C180 245 172 242 170 235 Z" fill="#d99960" opacity="0.8" />
                  <path d="M102 240 C95 245 92 258 98 266 C105 270 110 262 108 250 Z" fill="#d99960" opacity="0.8" />
                  {/* Cola */}
                  <path d="M84 290 C62 280 58 250 68 235" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </g>
              </svg>
            </div>

            {/* 4. Diorama panorámico con 3 cajas en colinas verdes */}
            <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] shadow-sm">
              <img 
                src="/images/petco_diorama_trio.jpg" 
                alt="PETCO Diorama Trio of Packaging Boxes"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 5. Cuadrado azul sólido (#0060df) con texto display negro 'PET CO' */}
            <div className="w-full overflow-hidden rounded-sm bg-[#0060df] aspect-square flex items-center justify-center p-6 sm:p-10 shadow-sm">
              <div className="text-black font-black tracking-[-0.05em] leading-[0.82] select-none flex flex-col items-center justify-center text-[5.5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem]">
                <span>PET</span>
                <span>CO</span>
              </div>
            </div>

            {/* 6. Muestrario de paleta de color (Swatches apilados) */}
            <div className="w-full overflow-hidden rounded-sm flex flex-col aspect-square shadow-sm">
              <div className="flex-1 bg-[#fef387] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
                <span>Light Yellow #fef387</span>
              </div>
              <div className="flex-1 bg-[#f79674] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
                <span>Light Orange #f79674</span>
              </div>
              <div className="flex-1 bg-[#f26d84] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
                <span>Light Red #f26d84</span>
              </div>
              <div className="flex-1 bg-[#79c47e] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
                <span>Light Green #79c47e</span>
              </div>
              <div className="flex-1 bg-[#b7a8c6] p-3 sm:p-4 flex items-start justify-between text-[#111111] font-mono text-xs sm:text-sm font-medium">
                <span>Light Lila #b7a8c6</span>
              </div>
            </div>

            {/* 7. Diorama rosa con pote Petco Mobility */}
            <div className="w-full overflow-hidden rounded-sm bg-[#f26d84] shadow-sm">
              <img 
                src="/images/petco_mobility_jar.jpg" 
                alt="PETCO Mobility Jar in Pink Papercraft Diorama"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 8. Plano técnico de troquel / Dieline blueprint en fondo coral (#f26d84) */}
            <div className="w-full overflow-hidden rounded-sm bg-[#f26d84] p-4 sm:p-6 aspect-square flex items-center justify-center shadow-sm">
              <div className="w-full h-full border-2 border-dashed border-black/30 p-2 sm:p-3 relative flex flex-col justify-between">
                {/* Solapas superiores */}
                <div className="w-full h-8 sm:h-10 border border-black/25 flex items-center justify-around text-[9px] text-black/70 font-mono">
                  <span className="rotate-180">CBD Mobility</span>
                  <span className="rotate-180">Cannabidol</span>
                </div>
                {/* Paneles centrales */}
                <div className="flex-1 my-2 grid grid-cols-4 gap-1.5 text-[8px] sm:text-[9px] text-black leading-tight">
                  <div className="border border-black/25 p-1 flex flex-col justify-between bg-white/5">
                    <div>
                      <p className="font-bold mb-0.5">Formas de uso</p>
                      <p className="text-[7px] text-black/75">Aplíquese a la comida de la mascota.</p>
                      <p className="font-bold mt-1">Recomendaciones</p>
                      <p className="text-[7px] text-black/75">Guárdese a temperatura ambiente.</p>
                    </div>
                  </div>
                  <div className="border border-black/35 p-1 flex flex-col items-center justify-between text-center bg-white/10">
                    <span className="text-[7px] font-mono">10ml</span>
                    <span className="font-black text-xs sm:text-sm tracking-tighter">PETCO</span>
                    <div className="leading-none">
                      <p className="font-serif italic text-[8px]">Cannabidol</p>
                      <p className="text-[6px] uppercase tracking-wider font-semibold">CBD Calming</p>
                    </div>
                  </div>
                  <div className="border border-black/25 p-1 flex flex-col items-center justify-between text-center bg-white/5">
                    <div className="w-6 h-6 rounded-full border border-black flex flex-col items-center justify-center text-[5px] font-bold uppercase leading-none">
                      <span>MEJOR</span>
                      <span>🐾</span>
                      <span>AMIGOS</span>
                    </div>
                    <p className="font-serif italic text-[8px] sm:text-[9px] leading-tight">
                      Más tranquilos, mejores mascotas.
                    </p>
                  </div>
                  <div className="border border-black/25 p-1 flex flex-col justify-between bg-white/5">
                    <div>
                      <p className="font-bold mb-0.5">Ingredientes:</p>
                      <p className="text-[6px] text-black/75">Aceite de oliva virgen, Extracto de Cáñamo.</p>
                    </div>
                    <span className="text-[6px] text-black/60 font-mono">Hecho en Perú</span>
                  </div>
                </div>
                {/* Solapas inferiores */}
                <div className="w-full h-8 sm:h-10 border border-black/25 flex items-center justify-center text-[8px] text-black/60 font-mono">
                  <span>10ml CBD (Cannabidol)</span>
                </div>
              </div>
            </div>

            {/* 9. Botella de gotas de CBD flotando en diorama verde con cielo azul */}
            <div className="w-full overflow-hidden rounded-sm bg-[#5faee3] shadow-sm">
              <img 
                src="/images/petco_dropper_bottle.jpg" 
                alt="PETCO Green Glass CBD Dropper Bottle in Nature Diorama"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 10. Valla publicitaria exterior en edificio / Billboard callejero */}
            <div className="w-full overflow-hidden rounded-sm bg-[#ececec] shadow-sm">
              <img 
                src="/images/petco_building_billboard.jpg" 
                alt="PETCO Outdoor Street Billboard Mockup"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 11. Póster verde esmeralda con sello circular y titular audaz */}
            <div className="w-full overflow-hidden rounded-sm bg-[#27a858] p-6 sm:p-8 aspect-square relative flex flex-col justify-between shadow-sm text-black">
              {/* Sello circular superior derecho */}
              <div className="w-full flex justify-end">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-black flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-center p-2">
                  <span>MEJOR NUTRICIÓN</span>
                  <span className="text-xs my-0.5">🐾</span>
                  <span>MEJORES AMIGOS</span>
                </div>
              </div>
              {/* Titular en tipografía grande */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.05]">
                  Mejor nutrición,<br />
                  mejor digestión.
                </h3>
              </div>
            </div>

            {/* 12. Fotografía editorial / Lifestyle: Niña jugando con perro corgi en fondo lila */}
            <div className="w-full overflow-hidden rounded-sm bg-[#b7a8c6] shadow-sm">
              <img 
                src="/images/petco_girl_dog_photo.jpg" 
                alt="Girl with Corgi Dog Petco Lifestyle Photography"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>

            {/* 13. Grilla de 8 tarjetas de campaña (Social Media Cards) */}
            <div className="w-full grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-[#b7a8c6] aspect-square p-3 sm:p-4 rounded-sm flex flex-col justify-between text-black">
                <span className="text-[10px] sm:text-xs font-bold uppercase">PETCO</span>
                <p className="text-xs sm:text-sm font-extrabold leading-tight">Paseos más felices</p>
              </div>
              <div className="bg-[#79c47e] aspect-square p-3 sm:p-4 rounded-sm flex items-center justify-center text-black">
                <span className="text-3xl sm:text-4xl">🌿🐶</span>
              </div>
              <div className="bg-[#fef387] aspect-square p-3 sm:p-4 rounded-sm flex flex-col justify-center items-center text-black text-center">
                <span className="text-base sm:text-lg font-black tracking-tight leading-none">Guuuu-</span>
                <span className="text-base sm:text-lg font-black tracking-tight leading-none">aaaa!</span>
              </div>
              <div className="bg-[#f26d84] aspect-square p-2 rounded-sm overflow-hidden flex items-center justify-center">
                <img src="/images/petco_mobility_jar.jpg" alt="Mobility Card" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="bg-[#f79674] aspect-square p-3 sm:p-4 rounded-sm flex items-center justify-center text-black font-black text-xl sm:text-2xl tracking-tighter">
                PETCO
              </div>
              <div className="bg-[#5faee3] aspect-square p-2 rounded-sm overflow-hidden flex items-center justify-center">
                <img src="/images/petco_dropper_bottle.jpg" alt="Dropper Card" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="bg-[#fef387] aspect-square p-3 sm:p-4 rounded-sm flex flex-col justify-between text-black">
                <span className="text-[8px] sm:text-[9px] font-mono">100% NATURAL</span>
                <p className="text-[11px] sm:text-xs font-bold leading-tight">Menos pelos en el sofá</p>
              </div>
              <div className="bg-[#f79674] aspect-square p-3 sm:p-4 rounded-sm flex flex-col justify-between text-black">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase">Mobility</span>
                <span className="text-xs sm:text-sm font-semibold">Articulaciones fuertes</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              COLUMNA DERECHA: Bloque de texto editorial (Sticky / Fijo al hacer scroll)
              ========================================================================= */}
          <div className="w-full md:w-[56%] lg:w-[58%] xl:w-[60%] relative">
            <div className="md:sticky md:top-28 lg:md:top-36 flex flex-col pt-1 sm:pt-2 max-w-[850px]">
              
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
                  Natural nutrition for your pets' Well-being
                </h1>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    Petco is committed to offering products made with locally sourced, natural ingredients with proven functional benefits, making it the ideal choice for pet owners seeking a healthy, natural alternative to enhance their pets' diet. By providing essential information about each ingredient's role, Petco empowers owners to make informed decisions that improve their pets' diet and overall well-being.
                  </p>
                  <p>
                    The brand's graphic concept is inspired by the internal transformation pets experience through proper nutrition—a process of nutrient absorption and cellular renewal. Petco reflects this scientifically supported process with a playful approach, emphasizing the benefits of its products. Their taglines reinforce this message by celebrating the positive moments that better nutrition brings, like stronger bonds, livelier walks, and joyful companionship.
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
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand</span>
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
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
                </div>
                
                <div className={`flex items-center justify-between py-3.5 sm:py-4 border-b ${
                  isDark ? 'border-white/20' : 'border-black/25'
                }`}>
                  <span className={isDark ? 'text-gray-400' : 'text-[#333333]'}>Sources</span>
                  <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Graphic Design</span>
                </div>
              </div>

              {/* ================= SECCIÓN (02) BRANDING EXPERIENCES ================= */}
              <div className="flex flex-col mt-12 sm:mt-16 pb-8">
                <div className={`text-[13px] sm:text-[14px] font-normal leading-tight ${
                  isDark ? 'text-white/85' : 'text-black'
                } select-none mb-6 sm:mb-8`}>
                  <p>(02)</p>
                  <p className="mt-1">Branding</p>
                  <p>Experiences</p>
                </div>
                
                <h2 className={`text-[1.75rem] sm:text-[2.2rem] lg:text-[2.45rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.12] ${
                  isDark ? 'text-white' : 'text-black'
                } max-w-[850px]`}>
                  As a part of the brand identity, Petco's illustrations showcase the natural ingredients and how they help pets transform from the inside out.
                </h2>
                
                <div className={`flex flex-col gap-6 text-[0.98rem] sm:text-[1.05rem] md:text-[1.08rem] ${
                  isDark ? 'text-gray-300' : 'text-[#222222]'
                } font-light leading-[1.65] max-w-[780px] mt-8 sm:mt-10`}>
                  <p>
                    It's not just about looking good; it's about feeling great too.
                  </p>
                  <p>
                    Petco in this nutritional and brings a positive change to the pets. It's more than just food; it's a lifestyle that promotes vitality and happiness for both pet owners and their furry companions. Petco - where every bite is a step towards a healthier, happier pet.
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
