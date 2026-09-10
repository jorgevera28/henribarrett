import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- LOGOS VECTORIALES DE ALTA FIDELIDAD ---

const RedBullLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <svg viewBox="0 0 180 65" className="h-12 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
      {/* Red Bull stylized title */}
      <text x="90" y="24" textAnchor="middle" fontFamily="'Arial Black', Impact, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.5" fill="currentColor">
        Red Bull
      </text>
      {/* Sun and charging bulls silhouette */}
      <g transform="translate(90, 48)">
        <circle cx="0" cy="0" r="11.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        {/* Left bull */}
        <path d="M-8,-2 C-13,-4 -20,-7 -26,-6 C-31,-5 -36,-1 -40,3 C-37,3 -34,5 -32,7 C-29,5 -25,7 -21,10 C-18,6 -13,4 -9,5 C-5,3 -4,0 -8,-2 Z" fill="currentColor" />
        <path d="M-19,-6 C-22,-10 -25,-12 -28,-13 C-26,-10 -25,-8 -24,-5 Z" fill="currentColor" />
        {/* Right bull */}
        <path d="M8,-2 C13,-4 20,-7 26,-6 C31,-5 36,-1 40,3 C37,3 34,5 32,7 C29,5 25,7 21,10 C18,6 13,4 9,5 C5,3 4,0 8,-2 Z" fill="currentColor" />
        <path d="M19,-6 C22,-10 25,-12 28,-13 C26,-10 25,-8 24,-5 Z" fill="currentColor" />
      </g>
    </svg>
  </div>
);

const LaBicolorLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <svg viewBox="0 0 210 65" className="h-11 w-auto" xmlns="http://www.w3.org/2000/svg">
      {/* FPF Crest */}
      <g transform="translate(8, 8)">
        <path d="M0,0 L32,0 C32,24 24,40 16,46 C8,40 0,24 0,0 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M11,0 L21,0 C21,26 16,44 16,44 C16,44 11,26 11,0 Z" fill="currentColor" opacity="0.25" />
        <text x="16" y="22" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5" fill="currentColor">FPF</text>
      </g>
      {/* Trapezoid badge with LA BICOLOR */}
      <g transform="translate(56, 10)">
        <polygon points="12,0 145,0 133,42 0,42" fill="currentColor" />
        <text x="68" y="18" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" letterSpacing="1" fill="#fff">LA</text>
        <text x="68" y="33" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="12" letterSpacing="1" fill="#fff">BICOLOR™</text>
      </g>
    </svg>
  </div>
);

const NikeLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <svg viewBox="0 0 160 55" className="h-9 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 44.5C12.1 41.5 8.5 34.7 11.2 28.7C13.2 24.4 18.3 21.1 24.6 20.1C28.1 19.5 32.1 20 36.3 21.6L143 5.2C145.9 4.8 147.7 6.8 145.8 10L49.8 53.7C43.3 56.7 37 57.7 31.6 56.6C26.6 55.6 22.8 52 19.5 44.5ZM108.1 20.1L38.8 38.4C34 39.7 30.2 39.5 27.8 37.7C25.3 36 24.7 33 26.2 29.8C27.6 26.8 30.5 24.8 34.8 24.2C37.7 23.8 41.4 24.5 45.8 26.2L108.1 20.1Z" />
    </svg>
  </div>
);

const HeinekenLogo = () => (
  <div className="h-16 flex flex-col justify-center select-none text-black">
    <div className="flex items-center gap-1.5 mb-1 pl-0.5">
      <span className="text-[7px] font-bold tracking-widest uppercase opacity-60">TRADE</span>
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
      <span className="text-[7px] font-bold tracking-widest uppercase opacity-60">MARK</span>
    </div>
    <span className="text-3xl font-black tracking-[-0.04em] font-serif leading-none">
      Heineken<span className="text-[10px] font-sans font-normal align-top ml-0.5">®</span>
    </span>
  </div>
);

const SpotifyLogo = () => (
  <div className="h-16 flex items-center gap-2.5 select-none text-black">
    <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" />
      <path d="M6 9.5c3.5-1 7.5-.8 11.2.7" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M7 12.5c2.8-.8 6-.6 9 .6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M8 15.5c2.2-.6 4.7-.5 7 .5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
    <span className="text-2xl font-black tracking-tighter">Spotify</span>
  </div>
);

const AppleLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <svg className="h-8 w-auto fill-current" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6.19-9.35-11.05-20.08-14.58-32.22-3.53-12.14-5.3-23.75-5.3-34.82 0-14.65 3.79-26.69 11.36-36.14 7.57-9.45 17.06-14.28 28.47-14.49 4.35 0 9.38 1.16 15.08 3.48 5.71 2.32 9.5 3.53 11.37 3.64 1.45 0 5.43-1.32 11.96-3.96 6.53-2.64 12.19-3.8 16.98-3.48 12.92.74 23.33 5.48 31.23 14.22-11.22 6.86-16.73 16.29-16.52 28.29.21 9.4 3.79 17.29 10.74 23.68 6.95 6.38 15.09 10.15 24.42 11.31-2.22 6.64-4.8 13.04-7.74 19.2zm-28.52-108.38c0 4.11-1.22 8.33-3.65 12.66-2.43 4.33-5.81 7.9-10.14 10.71-3.69 2.43-7.55 3.91-11.58 4.43-.21-.74-.32-1.53-.32-2.38 0-4.12 1.27-8.38 3.8-12.79 2.53-4.41 5.86-7.87 9.99-10.39 3.69-2.32 7.64-3.79 11.85-4.43.05.74.05 1.47.05 2.19z" />
    </svg>
  </div>
);

const TikTokLogo = () => (
  <div className="h-16 flex items-center gap-2 select-none text-black">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
    <span className="text-2xl font-black tracking-tight">TikTok</span>
  </div>
);

const AdidasLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <svg className="h-7 w-auto fill-current" viewBox="0 0 100 55">
      <path d="M12 45 L25 45 L15 28 L2 45 Z" />
      <path d="M30 45 L46 45 L32 15 L16 45 Z" />
      <path d="M51 45 L70 45 L50 2 L31 45 Z" />
      <text x="50" y="54" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5">adidas</text>
    </svg>
  </div>
);

const StripeLogo = () => (
  <div className="h-16 flex items-center select-none text-black">
    <span className="text-3xl font-black tracking-[-0.05em] lowercase">stripe</span>
  </div>
);

const FlorDeCanaLogo = () => (
  <div className="h-16 flex flex-col justify-center select-none text-black">
    <span className="text-[9px] font-mono tracking-[0.25em] uppercase opacity-50">EST. 1890</span>
    <span className="text-2xl font-serif italic font-bold tracking-tight">Flor de Caña</span>
  </div>
);

const TanquerayLogo = () => (
  <div className="h-16 flex flex-col justify-center select-none text-black">
    <span className="text-2xl font-serif tracking-[0.08em] uppercase font-bold">Tanqueray</span>
    <span className="text-[8px] tracking-[0.2em] uppercase opacity-50">LONDON DRY GIN</span>
  </div>
);

const InterbankLogo = () => (
  <div className="h-16 flex items-center gap-2 select-none text-black">
    <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center text-white font-black text-xs">IB</div>
    <span className="text-2xl font-bold tracking-tight uppercase">Interbank</span>
  </div>
);

// --- LISTA DE CLIENTES DESTACADOS ---

interface FeaturedClientItem {
  id: string;
  logo: React.ReactNode;
  title: string;
  description: string;
}

const FEATURED_CLIENTS: FeaturedClientItem[] = [
  {
    id: 'redbull',
    logo: <RedBullLogo />,
    title: 'REDBULL® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'labicolor',
    logo: <LaBicolorLogo />,
    title: 'LABICOLOR® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'nike',
    logo: <NikeLogo />,
    title: 'NIKE® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'heineken',
    logo: <HeinekenLogo />,
    title: 'HEINEKEN® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'spotify',
    logo: <SpotifyLogo />,
    title: 'SPOTIFY® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'apple',
    logo: <AppleLogo />,
    title: 'APPLE® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'tiktok',
    logo: <TikTokLogo />,
    title: 'TIKTOK® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'adidas',
    logo: <AdidasLogo />,
    title: 'ADIDAS® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'stripe',
    logo: <StripeLogo />,
    title: 'STRIPE® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'flordecana',
    logo: <FlorDeCanaLogo />,
    title: 'FLOR DE CAÑA® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'tanqueray',
    logo: <TanquerayLogo />,
    title: 'TANQUERAY® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'interbank',
    logo: <InterbankLogo />,
    title: 'INTERBANK® x HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
];

export const FeaturedClientsSection: React.FC = () => {
  const total = FEATURED_CLIENTS.length; // 12
  // Usamos una lista triplicada para scrolling infinito completamente fluido sin saltos
  const tripledClients = [...FEATURED_CLIENTS, ...FEATURED_CLIENTS, ...FEATURED_CLIENTS];
  
  // Empezamos en el set del medio (índice 12)
  const [currentIndex, setCurrentIndex] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Estado del cursor personalizado flotante
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Ajuste responsive de elementos visibles por vista
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Navegación de 1 en 1 (flechas superiores)
  const handleNextOne = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevOne = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Navegación de 4 en 4 (clic en el área del carrusel con el cursor blanco)
  const handleNextFour = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 4);
  };

  // Reseteo transparente cuando se alcanza el extremo para ilusión de bucle infinito
  const handleTransitionEnd = () => {
    if (currentIndex >= total * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - total);
    } else if (currentIndex < total) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + total);
    }
  };

  // Re-habilitar transiciones tras el reseteo
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Soporte para gestos táctiles en dispositivos móviles
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      handlePrevOne();
    } else if (diff < -50) {
      handleNextOne();
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-white py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20 select-none overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto">
        {/* HEADER: FEATURED CLIENTS + TOP ARROWS */}
        <div className="w-full mb-14 sm:mb-20 md:mb-24 flex justify-between items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5vw] font-light font-[300] uppercase tracking-[-0.03em] leading-none text-black">
            FEATURED CLIENTS
          </h2>

          {/* FLECHAS DE NAVEGACIÓN SUPERIORES (ROTAN DE 1 EN 1) */}
          <div className="flex items-center gap-4 sm:gap-6 text-black z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevOne();
              }}
              aria-label="Previous client"
              className="p-2.5 hover:opacity-40 transition-opacity cursor-pointer flex items-center justify-center group"
            >
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextOne();
              }}
              aria-label="Next client"
              className="p-2.5 hover:opacity-40 transition-opacity cursor-pointer flex items-center justify-center group"
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* CONTENEDOR DEL CARRUSEL (INTERACTIVO CON CURSOR BLANCO REDONDO Y ROTACIÓN DE 4 EN 4) */}
        <div
          ref={carouselContainerRef}
          onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
          onMouseEnter={() => setIsHoveringCarousel(true)}
          onMouseLeave={() => {
            setIsHoveringCarousel(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleNextFour}
          className="relative w-full overflow-hidden md:cursor-none select-none py-2"
        >
          {/* TRACK DESLIZANTE */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex will-change-transform"
            style={{
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              transition: isTransitioning ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
            }}
          >
            {tripledClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="shrink-0 px-4 sm:px-6 md:px-8 flex flex-col justify-start"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* LOGO DE LA MARCA */}
                <div className="h-24 sm:h-28 flex items-center justify-start mb-6 sm:mb-8">
                  {client.logo}
                </div>

                {/* TÍTULO */}
                <h3 className="text-xs sm:text-[13px] md:text-sm font-bold uppercase tracking-tight text-black mb-3 leading-snug">
                  {client.title}
                </h3>

                {/* DESCRIPCIÓN */}
                <p className="text-xs sm:text-[13px] md:text-sm text-black/75 font-normal leading-relaxed max-w-[32ch] sm:max-w-none">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CURSOR FLOTANTE PERSONALIZADO: CÍRCULO BLANCO CON FLECHA NEGRA EN MEDIO */}
      <div
        className={`hidden md:block fixed pointer-events-none z-50 transition-opacity duration-200 ${
          isHoveringCarousel ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%) scale(${
            isPressed ? 0.92 : 1
          })`,
          transition: 'transform 0.08s ease-out, opacity 0.2s ease',
        }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-[0_14px_45px_rgba(0,0,0,0.18)] border border-black/[0.06] flex items-center justify-center text-black">
          <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
        </div>
      </div>
    </section>
  );
};
