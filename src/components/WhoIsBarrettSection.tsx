import React from 'react';
import type { AppView } from '../types';

interface WhoIsBarrettSectionProps {
  onNavigate?: (view: AppView) => void;
}

// Icono Starburst / Sunburst vectorial idéntico al de la captura (16 rayos con círculo central)
const StarburstIcon: React.FC = () => (
  <span className="inline-flex items-center justify-center mx-3.5 sm:mx-5 md:mx-6 shrink-0 select-none text-black">
    <svg className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 fill-current" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="14" fill="currentColor" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="50"
            y1="28"
            x2="50"
            y2="7"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  </span>
);

// Fila individual de marquee con loop continuo infinito (duplicado en 2 tracks)
const MarqueeRow: React.FC<{ direction: 'left' | 'right'; duration?: string }> = ({
  direction,
  duration = '24s',
}) => {
  const items = [0, 1, 2, 3];
  return (
    <div className="w-full overflow-hidden whitespace-nowrap select-none">
      <div
        className={`flex w-max items-center ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } will-change-transform`}
        style={{ animationDuration: duration }}
      >
        {/* Track 1 (50% del ancho) */}
        <div className="flex items-center shrink-0">
          {items.map((i) => (
            <div key={`t1-${i}`} className="flex items-center shrink-0">
              <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                ALWAYS WATCHING
              </span>
              <StarburstIcon />
            </div>
          ))}
        </div>

        {/* Track 2 (50% del ancho para loop infinito sin saltos) */}
        <div className="flex items-center shrink-0">
          {items.map((i) => (
            <div key={`t2-${i}`} className="flex items-center shrink-0">
              <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                ALWAYS WATCHING
              </span>
              <StarburstIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tira doble de ALWAYS WATCHING muy ceñida verticalmente (según captura de pantalla)
const DoubleMarqueeStrip: React.FC = () => (
  <div className="w-full flex flex-col gap-0.5 sm:gap-1 overflow-hidden py-1">
    <MarqueeRow direction="left" duration="26s" />
    <MarqueeRow direction="right" duration="26s" />
  </div>
);

export const WhoIsBarrettSection: React.FC<WhoIsBarrettSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-white pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 overflow-hidden select-none">
      {/* 1. TIRA DOBLE SUPERIOR DE ALWAYS WATCHING */}
      <DoubleMarqueeStrip />

      {/* 2. CONTENIDO EDITORIAL CENTRAL (DISTRIBUCIÓN 2 COLUMNAS SEGÚN CAPTURA EN 744x1133) */}
      <div className="w-full max-w-[700px] sm:max-w-[720px] md:max-w-[760px] lg:max-w-[1100px] mx-auto px-6 sm:px-8 py-16 sm:py-24 md:py-28">
        <div className="flex flex-row items-start justify-between gap-6 sm:gap-8 md:gap-12">
          {/* COLUMNA IZQUIERDA: TITULAR + BAJADA DE TEXTO + ENLACE */}
          <div className="w-[49%] sm:w-[48%] flex flex-col justify-between self-stretch">
            <div>
              {/* Titular en 4 líneas proporcionales */}
              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-normal font-[450] leading-[1.15] sm:leading-[1.18] tracking-[-0.025em] text-black">
                Henri Barrett is more than just an agency; it&apos;s a movement, a mindset.
              </h2>

              {/* Párrafo de bajada en tono gris suave */}
              <p className="mt-5 sm:mt-6 text-[12.5px] sm:text-[13.5px] md:text-[14px] text-[#71717A] font-light leading-[1.48] sm:leading-[1.52] tracking-normal max-w-[320px]">
                We&apos;re here to change narratives, elevate brands, and make a lasting imprint in the world of design and creativity. Dive into our guiding principles, the essence of what makes us Henri Barrett.
              </p>
            </div>

            {/* Enlace inferior 'Explore the Hub' subrayado */}
            <div className="mt-14 sm:mt-20 md:mt-28 pt-2">
              <button
                type="button"
                onClick={() => onNavigate?.('about')}
                className="text-[11px] sm:text-[12px] font-normal text-black underline underline-offset-4 decoration-black/50 hover:decoration-black cursor-pointer transition-colors text-left"
              >
                Explore the Hub
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTOGRAFÍA DE LA FACHADA CON MURAL Y OJO */}
          <div className="w-[51%] sm:w-[52%] flex justify-end">
            <div className="w-full aspect-[4/5] bg-[#F4F4F4] overflow-hidden relative shadow-sm">
              <img
                src="/images/henri_barrett_hub_facade.jpg"
                alt="Henri Barrett Studio Facade"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. TIRA DOBLE INFERIOR DE ALWAYS WATCHING */}
      <DoubleMarqueeStrip />
    </section>
  );
};
