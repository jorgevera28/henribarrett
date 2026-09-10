import React, { useEffect, useRef } from 'react';

// Icono Starburst / Sunburst que aparece en la imagen entre UNEXPECTED y HENRI BARRETT
const StarburstIcon = () => (
  <span className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 align-middle text-black">
    <svg className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 fill-current" viewBox="0 0 100 100">
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

export const WhoIsBarrettSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  // Parallax interactivo de los dos marquees con el scroll
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el avance de scroll respecto a la sección
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Marquee 1 avanza hacia un lado, Marquee 2 hacia el opuesto
      const shift1 = (progress - 0.5) * 500;
      const shift2 = -(progress - 0.5) * 500;

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
      className="w-screen relative left-1/2 -translate-x-1/2 bg-white pt-20 sm:pt-28 md:pt-36 pb-32 sm:pb-40 md:pb-48 overflow-hidden select-none"
    >
      {/* 1. DOS MARQUEES QUE SE MUEVEN CON EL SCROLL */}
      <div className="w-full flex flex-col gap-2 sm:gap-4 overflow-hidden mb-16 sm:mb-24 md:mb-32">
        {/* FILA 1: UNEXPECTED ✹ HENRI BARRETT */}
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div 
            ref={marquee1Ref}
            className="flex items-center w-max will-change-transform transition-transform duration-100 ease-out"
          >
            {[...Array(6)].map((_, i) => (
              <span 
                key={`m1-${i}`} 
                className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase text-black leading-none flex items-center pr-6 sm:pr-10"
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
            className="flex items-center w-max will-change-transform transition-transform duration-100 ease-out"
          >
            {[...Array(6)].map((_, i) => (
              <span 
                key={`m2-${i}`} 
                className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase text-black leading-none flex items-center pr-8 sm:pr-12"
              >
                ALWAYS WATCHING — ALWAYS WATCHING — ALWAYS WATCHING —&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CONTENIDO PRINCIPAL: TITULAR + FOTOS + TEXTO Y CTA */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* TITULAR: WHO IS BARRETT? */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-light font-[300] tracking-[-0.03em] uppercase leading-none text-black mb-12 sm:mb-16 md:mb-20">
          WHO IS BARRETT?
        </h2>

        {/* CONTENEDOR DE DOS FOTOS / BLOQUES GRISES CON DESCRIPCIONES */}
        <div className="w-full flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 items-start">
          {/* BLOQUE FOTO IZQUIERDO (VERTICAL / RECTANGULAR) */}
          <div className="w-full md:w-[36%] lg:w-[35%] shrink-0 flex flex-col">
            {/* Espacio para foto: zona gris con relación de aspecto vertical */}
            <div className="w-full aspect-[3/4] bg-[#CCCCCC] rounded-none overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop"
                alt="Henri Barrett Lima"
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-500 absolute inset-0"
              />
            </div>
            {/* Descripción debajo de la foto */}
            <div className="mt-3.5 flex flex-col leading-tight">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-tight text-black">
                HENRI BARRETT LIMA
              </span>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-tight text-black">
                (BRANDING AGENCY)
              </span>
            </div>
          </div>

          {/* BLOQUE FOTO DERECHO (HORIZONTAL ANCHO) + TEXTO EDITORIAL + CTA */}
          <div className="w-full md:w-[64%] lg:w-[65%] flex flex-col">
            {/* Espacio para foto: zona gris ancha con relación horizontal */}
            <div className="w-full aspect-[16/11] bg-[#CCCCCC] rounded-none overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1400&auto=format&fit=crop"
                alt="Henri Barrett Studio"
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-500 absolute inset-0"
              />
            </div>
            {/* Descripción debajo de la foto */}
            <div className="mt-3.5 flex flex-col leading-tight">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-tight text-black">
                HENRI BARRETT LIMA
              </span>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-tight text-black">
                (BRANDING AGENCY)
              </span>
            </div>

            {/* TEXTO DE MANIFIESTO EDITORIAL */}
            <div className="mt-14 sm:mt-16 md:mt-20 max-w-2xl">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6vw] font-normal leading-[1.18] tracking-[-0.02em] text-black">
                At Henri Barrett® We make your life easier and your brands louder through creativity, design and experimentation.
              </p>

              {/* CALL TO ACTION CON SUBRAYADO */}
              <div className="mt-8 sm:mt-10">
                <a 
                  href="#contact"
                  className="inline-block text-xs sm:text-sm md:text-base font-normal text-black underline underline-offset-4 decoration-black/80 hover:opacity-60 transition-opacity"
                >
                  Learn more about Barrett®
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
