import React, { useEffect, useRef } from 'react';
import { MaskTextReveal } from './MaskTextReveal';
import type { AppView } from '../types';

interface WhoIsBarrettSectionProps {
  onNavigate?: (view: AppView) => void;
}

// Icono Starburst / Sunburst vectorial de alta definición (con 16 rayos)
const StarburstIcon = () => (
  <span className="inline-flex items-center justify-center mx-3 sm:mx-5 md:mx-7 align-middle text-black shrink-0">
    <svg className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 fill-current" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="14" fill="currentColor" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="50"
            y1="28"
            x2="50"
            y2="8"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  </span>
);

export const WhoIsBarrettSection: React.FC<WhoIsBarrettSectionProps> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  // Parallax interactivo continuo de los dos marquees con el scroll
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el avance relativo de scroll sobre la sección
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Marquee 1 avanza hacia un lado, Marquee 2 hacia el opuesto
      const shift1 = (progress - 0.5) * 450;
      const shift2 = -(progress - 0.5) * 450;

      if (marquee1Ref.current) {
        marquee1Ref.current.style.transform = `translate3d(${shift1}px, 0, 0)`;
      }
      if (marquee2Ref.current) {
        marquee2Ref.current.style.transform = `translate3d(${shift2}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-screen relative left-1/2 -translate-x-1/2 bg-white pt-16 sm:pt-20 md:pt-28 pb-24 sm:pb-32 md:pb-40 overflow-hidden select-none"
    >
      {/* 1. DOS MARQUEES CON SCROLL PARALLAX (ANCHO COMPLETO BLEED) */}
      <div className="w-full flex flex-col gap-2 sm:gap-3.5 md:gap-5 overflow-hidden mb-12 sm:mb-16 md:mb-24">
        {/* FILA 1: UNEXPECTED ✹ HENRI BARRETT */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div 
            ref={marquee1Ref}
            className="flex items-center w-max will-change-transform transition-transform duration-75 ease-out"
          >
            {[...Array(6)].map((_, i) => (
              <span 
                key={`m1-${i}`} 
                className="text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] font-light font-[300] tracking-tight uppercase text-black leading-none flex items-center pr-6 sm:pr-10"
              >
                INSPIRED BY THE UNEXPECTED <StarburstIcon /> HENRI BARRETT <StarburstIcon />
              </span>
            ))}
          </div>
        </div>

        {/* FILA 2: ALWAYS WATCHING */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div 
            ref={marquee2Ref}
            className="flex items-center w-max will-change-transform transition-transform duration-75 ease-out"
          >
            {[...Array(6)].map((_, i) => (
              <span 
                key={`m2-${i}`} 
                className="text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7vw] font-light font-[300] tracking-tight uppercase text-black leading-none flex items-center pr-8 sm:pr-12"
              >
                ALWAYS WATCHING — ALWAYS WATCHING — ALWAYS WATCHING —&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL: TITULAR + FOTOS EDITORIALES + TEXTO Y CTA */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        {/* TITULAR: WHO IS BARRETT? */}
        <MaskTextReveal
          as="h2"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.2vw] font-light font-[300] tracking-[-0.035em] uppercase leading-none text-black mb-10 sm:mb-14 md:mb-18"
          text="WHO IS BARRETT?"
        />

        {/* GRILLA DE DOS FOTOS / BLOQUES EDITORIALES (2 COLUMNAS EN TABLET 744x1133) */}
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-7 items-start">
          {/* BLOQUE FOTO IZQUIERDO (VERTICAL / RETRATO) */}
          <div className="w-full sm:w-[38%] md:w-[36%] lg:w-[35%] shrink-0 flex flex-col">
            <div className="w-full aspect-[3/4] bg-[#E8E8E8] rounded-none overflow-hidden relative group">
              <img 
                src="/images/barrett_poster_pasting.jpg"
                onError={(e) => {
                  // Fallback elegante a Unsplash si la ruta local no resuelve
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop";
                }}
                alt="Henri Barrett Lima"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Descripción debajo de la foto */}
            <div className="mt-3 sm:mt-4 flex flex-col leading-tight select-none">
              <span className="text-[11.5px] sm:text-xs md:text-[13px] font-bold uppercase tracking-tight text-black">
                HENRI BARRETT LIMA
              </span>
              <span className="text-[11.5px] sm:text-xs md:text-[13px] font-bold uppercase tracking-tight text-black">
                (BRANDING AGENCY)
              </span>
            </div>
          </div>

          {/* BLOQUE FOTO DERECHO (HORIZONTAL PANORÁMICO) + TEXTO EDITORIAL + CTA */}
          <div className="w-full sm:w-[62%] md:w-[64%] lg:w-[65%] flex flex-col">
            <div className="w-full aspect-[16/10.5] sm:aspect-[16/10] bg-[#E8E8E8] rounded-none overflow-hidden relative group">
              <img 
                src="/images/barrett_laptop_studio.jpg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1400&auto=format&fit=crop";
                }}
                alt="Henri Barrett Studio"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Descripción debajo de la foto */}
            <div className="mt-3 sm:mt-4 flex flex-col leading-tight select-none">
              <span className="text-[11.5px] sm:text-xs md:text-[13px] font-bold uppercase tracking-tight text-black">
                HENRI BARRETT LIMA
              </span>
              <span className="text-[11.5px] sm:text-xs md:text-[13px] font-bold uppercase tracking-tight text-black">
                (BRANDING AGENCY)
              </span>
            </div>

            {/* TEXTO DE MANIFIESTO EDITORIAL */}
            <div className="mt-8 sm:mt-12 md:mt-16 max-w-xl">
              <MaskTextReveal
                as="p"
                delay={0.16}
                className="text-[19px] sm:text-[22px] md:text-[26px] lg:text-[2.2vw] font-normal leading-[1.22] sm:leading-[1.25] tracking-[-0.02em] text-black"
                text="At Henri Barrett® We make your life easier and your brands louder through creativity, design and experimentation."
              />

              {/* CALL TO ACTION CON SUBRAYADO DIRECTO */}
              <div className="mt-5 sm:mt-7 md:mt-8">
                <button 
                  type="button"
                  onClick={() => onNavigate?.('about')}
                  className="inline-block text-xs sm:text-sm md:text-base font-normal text-black underline underline-offset-4 decoration-black/60 hover:decoration-black cursor-pointer transition-colors text-left"
                >
                  Learn more about Barrett®
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
