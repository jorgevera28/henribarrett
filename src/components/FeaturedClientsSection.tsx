import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight } from 'lucide-react';
import { MaskTextReveal } from './MaskTextReveal';

// --- LOGOS VECTORIALES DE ALTA FIDELIDAD EN TONO GRIS MONOCROMÁTICO (SEGÚN CAPTURA) ---

const RedBullLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none">
    <img
      src="https://henribarrett.com/assets/site/svg/home/red_bull_by_henribarrett.svg"
      alt="Red Bull"
      className="h-12 sm:h-14 md:h-16 w-auto max-w-[190px] object-contain select-none pointer-events-none opacity-65 grayscale contrast-125"
      decoding="async"
    />
  </div>
);

const LaBicolorLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none">
    <img
      src="https://henribarrett.com/assets/site/svg/home/labicolor_by_henribarrett.svg"
      alt="La Bicolor"
      className="h-11 sm:h-12 md:h-14 w-auto max-w-[170px] object-contain select-none pointer-events-none opacity-65 grayscale contrast-125"
      decoding="async"
    />
  </div>
);

const KotexLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none">
    <img
      src="https://henribarrett.com/assets/site/svg/home/kotex_by_henribarrett.svg"
      alt="Kotex"
      className="h-10 sm:h-12 md:h-14 w-auto max-w-[170px] object-contain select-none pointer-events-none opacity-65 grayscale contrast-125"
      decoding="async"
    />
  </div>
);

const NikeLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none">
    <img
      src="https://henribarrett.com/assets/site/svg/home/nike_by_henribarrett.svg"
      alt="Nike"
      className="h-9 sm:h-10 md:h-12 w-auto max-w-[140px] object-contain select-none pointer-events-none opacity-65 grayscale contrast-125"
      decoding="async"
    />
  </div>
);

const HeinekenLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none">
    <img
      src="https://henribarrett.com/assets/site/svg/home/heineken_by_henribarrett.svg"
      alt="Heineken"
      className="h-12 sm:h-14 md:h-16 w-auto max-w-[190px] object-contain select-none pointer-events-none opacity-65 grayscale contrast-125"
      decoding="async"
    />
  </div>
);


const AppleLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none text-[#555555]">
    <svg className="h-10 w-auto fill-current" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6.19-9.35-11.05-20.08-14.58-32.22-3.53-12.14-5.3-23.75-5.3-34.82 0-14.65 3.79-26.69 11.36-36.14 7.57-9.45 17.06-14.28 28.47-14.49 4.35 0 9.38 1.16 15.08 3.48 5.71 2.32 9.5 3.53 11.37 3.64 1.45 0 5.43-1.32 11.96-3.96 6.53-2.64 12.19-3.8 16.98-3.48 12.92.74 23.33 5.48 31.23 14.22-11.22 6.86-16.73 16.29-16.52 28.29.21 9.4 3.79 17.29 10.74 23.68 6.95 6.38 15.09 10.15 24.42 11.31-2.22 6.64-4.8 13.04-7.74 19.2zm-28.52-108.38c0 4.11-1.22 8.33-3.65 12.66-2.43 4.33-5.81 7.9-10.14 10.71-3.69 2.43-7.55 3.91-11.58 4.43-.21-.74-.32-1.53-.32-2.38 0-4.12 1.27-8.38 3.8-12.79 2.53-4.41 5.86-7.87 9.99-10.39 3.69-2.32 7.64-3.79 11.85-4.43.05.74.05 1.47.05 2.19z" />
    </svg>
  </div>
);

const TikTokLogo = () => (
  <div className="h-20 sm:h-24 flex items-center gap-2 select-none text-[#555555]">
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
    <span className="text-2xl font-black tracking-tight">TikTok</span>
  </div>
);

const AdidasLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none text-[#555555]">
    <svg className="h-9 w-auto fill-current" viewBox="0 0 100 55">
      <path d="M12 45 L25 45 L15 28 L2 45 Z" />
      <path d="M30 45 L46 45 L32 15 L16 45 Z" />
      <path d="M51 45 L70 45 L50 2 L31 45 Z" />
      <text x="50" y="54" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="10" letterSpacing="0.5">adidas</text>
    </svg>
  </div>
);

const StripeLogo = () => (
  <div className="h-20 sm:h-24 flex items-center select-none text-[#555555]">
    <span className="text-3xl font-black tracking-[-0.05em] lowercase">stripe</span>
  </div>
);

const FlorDeCanaLogo = () => (
  <div className="h-20 sm:h-24 flex flex-col justify-center select-none text-[#555555]">
    <span className="text-[9px] font-mono tracking-[0.25em] uppercase opacity-50">EST. 1890</span>
    <span className="text-2xl font-serif italic font-bold tracking-tight">Flor de Caña</span>
  </div>
);

const TanquerayLogo = () => (
  <div className="h-20 sm:h-24 flex flex-col justify-center select-none text-[#555555]">
    <span className="text-2xl font-serif tracking-[0.08em] uppercase font-bold">Tanqueray</span>
    <span className="text-[8px] tracking-[0.2em] uppercase opacity-50">LONDON DRY GIN</span>
  </div>
);

const InterbankLogo = () => (
  <div className="h-20 sm:h-24 flex items-center gap-2 select-none text-[#555555]">
    <div className="w-6 h-6 rounded-md bg-[#555555] flex items-center justify-center text-white font-black text-xs">IB</div>
    <span className="text-2xl font-bold tracking-tight uppercase">Interbank</span>
  </div>
);

// --- LISTA DE CLIENTES DESTACADOS (DISTRIBUCIÓN EN 2 LÍNEAS DE TÍTULO SEGÚN CAPTURA) ---

interface FeaturedClientItem {
  id: string;
  logo: React.ReactNode;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

const FEATURED_CLIENTS: FeaturedClientItem[] = [
  {
    id: 'redbull',
    logo: <RedBullLogo />,
    titleLine1: 'REDBULL® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'kotex',
    logo: <KotexLogo />,
    titleLine1: 'KOTEX® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'nike',
    logo: <NikeLogo />,
    titleLine1: 'NIKE® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'heineken',
    logo: <HeinekenLogo />,
    titleLine1: 'HEINEKEN® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'labicolor',
    logo: <LaBicolorLogo />,
    titleLine1: 'LABICOLOR® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'apple',
    logo: <AppleLogo />,
    titleLine1: 'APPLE® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'tiktok',
    logo: <TikTokLogo />,
    titleLine1: 'TIKTOK® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'adidas',
    logo: <AdidasLogo />,
    titleLine1: 'ADIDAS® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'stripe',
    logo: <StripeLogo />,
    titleLine1: 'STRIPE® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'flordecana',
    logo: <FlorDeCanaLogo />,
    titleLine1: 'FLOR DE CAÑA® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'tanqueray',
    logo: <TanquerayLogo />,
    titleLine1: 'TANQUERAY® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
  {
    id: 'interbank',
    logo: <InterbankLogo />,
    titleLine1: 'INTERBANK® x',
    titleLine2: 'HENRIBARRETT',
    description: 'Our employer branding engagement activated the brand internally, enabling staff to deliver on the brand promise.',
  },
];

export const FeaturedClientsSection: React.FC = () => {
  const total = FEATURED_CLIENTS.length; // 12
  const tripledClients = [...FEATURED_CLIENTS, ...FEATURED_CLIENTS, ...FEATURED_CLIENTS];
  
  const [currentIndex, setCurrentIndex] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [mounted, setMounted] = useState(false);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const [isSectionInView, setIsSectionInView] = useState(false);
  const [initialRevealComplete, setInitialRevealComplete] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof IntersectionObserver === 'undefined') {
      setIsSectionInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isSectionInView && !initialRevealComplete) {
      const timer = setTimeout(() => {
        setInitialRevealComplete(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSectionInView, initialRevealComplete]);

  useEffect(() => {
    if (!isHoveringCarousel) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${
          isPressed ? 0.92 : 1
        })`;
      }
    };

    const handleWindowMouseUp = () => {
      setIsPressed(false);
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isHoveringCarousel, isPressed]);

  // En 744x1133 (tablet): exactamente 3 columnas visibles en pantalla (Red Bull, La Bicolor, Nike)
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        // 744x1133 iPad / Tablet: 3 columnas según la captura
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleNextStep = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + visibleCount);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - visibleCount);
    } else if (diff < -50) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + visibleCount);
    }
    touchStartXRef.current = null;
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= total * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - total);
    } else if (currentIndex < total) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + total);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen relative left-1/2 -translate-x-1/2 bg-white pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-32 md:pb-40 px-6 sm:px-10 md:px-14 lg:px-20 select-none overflow-hidden"
    >
      <div className="w-full max-w-[1500px] mx-auto">
        {/* HEADER: FEATURED / CLIENTS (DOS LÍNEAS EN MAYÚSCULAS SEGÚN CAPTURA IPAD) */}
        <div className="w-full mb-14 sm:mb-20 md:mb-24 flex justify-between items-start">
          <div className="flex flex-col">
            <MaskTextReveal
              as="h2"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[96px] 2xl:text-[110px] font-normal font-[400] uppercase tracking-[-0.04em] leading-[0.88] text-black"
              lines={['FEATURED', 'CLIENTS']}
            />
          </div>
        </div>

        {/* CONTENEDOR DEL CARRUSEL DE 3 COLUMNAS EN IPAD CON CURSOR BLANCO REDONDO */}
        <div
          ref={carouselContainerRef}
          onMouseEnter={(e) => {
            setIsHoveringCarousel(true);
            if (cursorRef.current) {
              cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(1)`;
            }
          }}
          onMouseMove={(e) => {
            if (cursorRef.current) {
              cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${
                isPressed ? 0.92 : 1
              })`;
            }
          }}
          onMouseLeave={() => {
            setIsHoveringCarousel(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleNextStep}
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
                className="shrink-0 px-3 sm:px-4 md:px-5 lg:px-6 flex flex-col justify-start"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* LOGO DE LA MARCA CON FADE IN SUAVE */}
                <div className="h-20 sm:h-24 md:h-28 flex items-center justify-start mb-6 sm:mb-8 md:mb-10">
                  <div
                    className="w-full flex items-center justify-start transition-all will-change-[opacity,transform]"
                    style={{
                      opacity: isSectionInView ? 1 : 0,
                      transform: isSectionInView ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.97)',
                      transitionDuration: '1100ms',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: !initialRevealComplete && isSectionInView
                        ? `${Math.min(idx % visibleCount, 3) * 130 + 80}ms`
                        : '0ms',
                    }}
                  >
                    {client.logo}
                  </div>
                </div>

                {/* TÍTULO EN 2 LÍNEAS (SEGÚN CAPTURA) */}
                <div className="flex flex-col mb-3 sm:mb-4 leading-tight">
                  <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-normal font-[450] uppercase tracking-normal text-black leading-tight">
                    {client.titleLine1}
                  </h3>
                  <h3 className="text-[15px] sm:text-[16px] md:text-[17px] font-normal font-[450] uppercase tracking-normal text-black leading-tight">
                    {client.titleLine2}
                  </h3>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-black font-normal font-[350] leading-[1.38] sm:leading-[1.42] max-w-[34ch] sm:max-w-none">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CURSOR FLOTANTE PERSONALIZADO PORTALIZADO AL BODY */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[999999] transition-opacity duration-150 will-change-transform ${
              isHoveringCarousel ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translate3d(-200px, -200px, 0) translate(-50%, -50%) scale(1)`,
            }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black text-white rounded-full shadow-[0_16px_50px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
