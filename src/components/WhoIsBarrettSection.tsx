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

// Tira doble de ALWAYS WATCHING que se desplaza cinéticamente con el scroll down (no se mueve sola)
const DoubleMarqueeStrip: React.FC = () => {
  const row1Ref = React.useRef<HTMLDivElement>(null);
  const row2Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const mod = (n: number, m: number) => ((n % m) + m) % m;

    const updatePosition = () => {
      const scrollY = window.scrollY;

      if (row1Ref.current) {
        const halfWidth = row1Ref.current.scrollWidth / 2;
        if (halfWidth > 0) {
          const shift = mod(scrollY * 0.42, halfWidth);
          row1Ref.current.style.transform = `translate3d(${-shift}px, 0, 0)`;
        }
      }

      if (row2Ref.current) {
        const halfWidth = row2Ref.current.scrollWidth / 2;
        if (halfWidth > 0) {
          const shift = mod(scrollY * 0.42, halfWidth);
          row2Ref.current.style.transform = `translate3d(${shift - halfWidth}px, 0, 0)`;
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    updatePosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const items = [0, 1, 2, 3, 4, 5];

  return (
    <div className="w-full flex flex-col gap-0.5 sm:gap-1 overflow-hidden py-1 select-none">
      {/* Fila 1: Desplazamiento hacia la izquierda con el scroll down */}
      <div className="w-full overflow-hidden whitespace-nowrap select-none">
        <div ref={row1Ref} className="flex w-max items-center will-change-transform">
          {/* Mitad 1 */}
          <div className="flex items-center shrink-0">
            {items.map((i) => (
              <div key={`r1-t1-${i}`} className="flex items-center shrink-0">
                <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                  ALWAYS WATCHING
                </span>
                <StarburstIcon />
              </div>
            ))}
          </div>
          {/* Mitad 2 (duplicada para bucle infinito suave) */}
          <div className="flex items-center shrink-0">
            {items.map((i) => (
              <div key={`r1-t2-${i}`} className="flex items-center shrink-0">
                <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                  ALWAYS WATCHING
                </span>
                <StarburstIcon />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fila 2: Desplazamiento hacia la derecha con el scroll down */}
      <div className="w-full overflow-hidden whitespace-nowrap select-none">
        <div ref={row2Ref} className="flex w-max items-center will-change-transform">
          {/* Mitad 1 */}
          <div className="flex items-center shrink-0">
            {items.map((i) => (
              <div key={`r2-t1-${i}`} className="flex items-center shrink-0">
                <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                  ALWAYS WATCHING
                </span>
                <StarburstIcon />
              </div>
            ))}
          </div>
          {/* Mitad 2 (duplicada para bucle infinito suave) */}
          <div className="flex items-center shrink-0">
            {items.map((i) => (
              <div key={`r2-t2-${i}`} className="flex items-center shrink-0">
                <span className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-normal tracking-[-0.035em] uppercase text-black leading-[0.88] select-none">
                  ALWAYS WATCHING
                </span>
                <StarburstIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WhoIsBarrettSection: React.FC<WhoIsBarrettSectionProps> = ({ onNavigate }) => {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-white pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 overflow-hidden select-none">
      {/* 1. TIRA DOBLE SUPERIOR DE ALWAYS WATCHING */}
      <DoubleMarqueeStrip />

      {/* 2. CONTENIDO EDITORIAL CENTRAL (DISTRIBUCIÓN 2 COLUMNAS SEGÚN CAPTURA) */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* COLUMNA IZQUIERDA: TITULAR + BAJADA DE TEXTO + ENLACE */}
          <div className="w-full md:w-[54%] lg:w-[52%] flex flex-col justify-between self-stretch">
            <div>
              {/* Titular en 4 líneas proporcionales idéntico a la captura */}
              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[62px] 2xl:text-[68px] font-normal font-[400] leading-[1.04] sm:leading-[1.05] tracking-[-0.035em] text-black">
                <span className="block">Henri Barrett is more</span>
                <span className="block">than just an agency;</span>
                <span className="block">it&apos;s a movement, a</span>
                <span className="block">mindset.</span>
              </h2>

              {/* Párrafo de bajada en tono gris medio */}
              <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px] text-[#71717A] font-light font-[300] leading-[1.36] sm:leading-[1.40] tracking-normal max-w-[560px]">
                We&apos;re here to change narratives, elevate brands, and make a lasting imprint in the world of design and creativity. Dive into our guiding principles, the essence of what makes us Henri Barrett.
              </p>
            </div>

            {/* Enlace/Botón 'Explore the Hub' con subrayado sutil idéntico a la captura */}
            <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-28">
              <button
                type="button"
                onClick={() => onNavigate?.('about')}
                className="group inline-flex flex-col items-start cursor-pointer text-left"
              >
                <span className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] font-normal font-[450] text-black tracking-tight transition-opacity group-hover:opacity-60">
                  Explore the Hub
                </span>
                <span className="w-full h-[1px] bg-black/60 group-hover:bg-black transition-colors mt-1.5" />
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTOGRAFÍA DE LA FACHADA CON MURAL Y OJO */}
          <div className="w-full md:w-[46%] lg:w-[48%] flex justify-end">
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
