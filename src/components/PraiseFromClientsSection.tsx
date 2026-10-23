import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight } from 'lucide-react';
import { MaskTextReveal } from './MaskTextReveal';

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Allie kuzyk',
    role: 'Global Program Manager, Tik Tok',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: "“I’ve referred Henri Barrett® to anyone who asks for an all-around branding and strategic powerhouse. I’ve always felt we were more than just a client, but true partners.”",
  },
  {
    id: 2,
    name: 'Allie kuzyk',
    role: 'Global Program Manager, Tik Tok',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    quote: "“I’ve referred Henri Barrett® to anyone who asks for an all-around branding and strategic powerhouse. I’ve always felt we were more than just a client, but true partners.”",
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'Head of Brand Design, Stripe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: "“The team’s ability to translate complex business requirements into visceral design solutions is unparalleled. They challenge conventions and deliver lasting cultural imprint.”",
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    role: 'Global VP Marketing, Spotify',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: "“Working with Henri Barrett feels like extending your internal team with world-class visionaries. They elevated our identity to resonate authentically with millions.”",
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Founder & CEO, TechFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: "“Their strategic discipline transformed our entire commercial trajectory. From identity to event execution, every single detail was razor sharp.”",
  },
  {
    id: 6,
    name: 'Elena Rodriguez',
    role: 'VP Creative Direction, Vercel',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    quote: "“A rare combination of relentless creative taste and impeccable technical rigor. They gave our brand the authoritative voice it desperately needed.”",
  },
  {
    id: 7,
    name: 'James Wilson',
    role: 'Global Creative Lead, Nike',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    quote: "“Henri Barrett brings an electrifying perspective that cuts through market noise. A team of true craftspeople who treat every artifact like fine art.”",
  },
  {
    id: 8,
    name: 'Camila Rossi',
    role: 'Chief Brand Officer, Heineken',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    quote: "“From live stadium experiences to digital activations, their storytelling captures raw human excitement like no other creative studio in the industry.”",
  },
  {
    id: 9,
    name: 'Lucas Thorne',
    role: 'Design Director, Apple',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    quote: "“Absolute precision in typographic craft, spatial composition, and pacing. Their work consistently sets the aesthetic benchmark for the next decade.”",
  },
  {
    id: 10,
    name: 'Sophia Patel',
    role: 'Director of Experience, Airbnb',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: "“They understand how brands live in real three-dimensional spaces, creating memorable impressions that linger in people’s minds long after launch.”",
  },
  {
    id: 11,
    name: 'Julian Vance',
    role: 'Executive Producer, Red Bull',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    quote: "“High adrenaline, bold typography, and cinematic motion. Henri Barrett never plays it safe, and that courage is what creates iconic moments.”",
  },
  {
    id: 12,
    name: 'Mia Larsson',
    role: 'Head of Content, Rimowa',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
    quote: "“Their minimalist aesthetic discipline perfectly matched our heritage of engineering perfection. A true masterclass in brand stewardship.”",
  },
  {
    id: 13,
    name: 'Gabriel Morales',
    role: 'VP Brand, Rappi',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=200&auto=format&fit=crop',
    quote: "“They took an ambitious vision and brought it to life with vibrant culture, dynamic kits, and an energy that completely captivated our community.”",
  },
  {
    id: 14,
    name: 'Nathalie Dubois',
    role: 'Creative Director, Bottega Veneta',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    quote: "“Pure tactile luxury translated into digital mediums. Their restraint and sophisticated color theory are unmatched in modern studio practice.”",
  },
  {
    id: 15,
    name: 'Kenji Sato',
    role: 'Head of Innovation, Sony Music',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
    quote: "“The Barrett Sessions identity created an unprecedented cultural dialogue. They don’t just design collateral; they shape subcultures.”",
  },
  {
    id: 16,
    name: 'Charlotte Meyer',
    role: 'Marketing Director, Monocle',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop',
    quote: "“Sharp editorial rhythm, impeccable typography, and zero fluff. They know how to speak to an audience that demands uncompromising taste.”",
  },
  {
    id: 17,
    name: 'Alejandro Reyes',
    role: 'Founder, Tacama Spirits',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
    quote: "“They gave our century-old heritage a contemporary international stature while preserving every ounce of authenticity and respect.”",
  },
  {
    id: 18,
    name: 'Olivia Sterling',
    role: 'VP Product Design, Figma',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: "“Henri Barrett doesn’t just design for today—they construct brand foundations built to endure. A collaborative partnership of the highest caliber.”",
  },
];

interface PraiseFromClientsSectionProps {
  className?: string;
}

export const PraiseFromClientsSection: React.FC<PraiseFromClientsSectionProps> = ({ className = '' }) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isHoveringCards, setIsHoveringCards] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [testimonialCardWidth, setTestimonialCardWidth] = useState<number>(325);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0, walk: 0 });

  const totalCards = TESTIMONIALS.length; // 18 tarjetas en total como en la captura (4—18)
  const [currentCard, setCurrentCard] = useState<number>(4);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [containerLeftPad, setContainerLeftPad] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      let basePad = 20;
      if (width >= 1024) basePad = 80;
      else if (width >= 768) basePad = 56;
      else if (width >= 640) basePad = 32;
      return width > 1500 ? Math.round((width - 1500) / 2) + basePad : basePad;
    }
    return 20;
  });

  const getLeftPadding = () => {
    if (typeof window === 'undefined') return 20;
    const width = window.innerWidth;
    let basePad = 20;
    if (width >= 1024) basePad = 80;
    else if (width >= 768) basePad = 56;
    else if (width >= 640) basePad = 32;

    if (width > 1500) {
      return Math.round((width - 1500) / 2) + basePad;
    }
    return basePad;
  };

  const getTestimonialMetrics = (leftPadArg?: number) => {
    if (typeof window === 'undefined') {
      return { cardWidth: 520, gap: 24, twoItemsWidth: 1088 };
    }
    const width = window.innerWidth;
    const gap = width < 640 ? 16 : width < 1024 ? 20 : 28;
    const leftPad = leftPadArg !== undefined ? leftPadArg : getLeftPadding();
    const visibleSpace = width - leftPad;

    let cardW = 325;
    if (width < 640) {
      cardW = Math.max(280, Math.round((visibleSpace - gap) * 0.85));
    } else {
      // 2 tarjetas completas + la 3ra tarjeta llegando y cortándose directamente en el borde derecho de la pantalla
      cardW = Math.max(300, Math.round((visibleSpace - gap * 2) / 2.36));
    }

    const twoItemsWidth = (cardW + gap) * 2;
    return { cardWidth: cardW, gap, twoItemsWidth };
  };

  const updateCurrentCard = () => {
    if (!testimonialsRef.current) return;
    const { cardWidth, gap } = getTestimonialMetrics();
    const cardFullWidth = cardWidth + gap;
    if (cardFullWidth <= 0) return;

    const scrollLeft = testimonialsRef.current.scrollLeft;
    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
    const isMobile = window.innerWidth < 640;
    const baseCount = 4;

    if (maxScroll <= 5) {
      setCurrentCard(totalCards);
      return;
    }

    if (scrollLeft <= 20) {
      setCurrentCard(baseCount);
      return;
    }

    if (scrollLeft >= maxScroll - 35) {
      setCurrentCard(totalCards);
      return;
    }

    const cardsScrolled = Math.round(scrollLeft / cardFullWidth);
    const calculated = cardsScrolled * (isMobile ? 1 : 2) + baseCount;
    const clamped = Math.min(totalCards, Math.max(baseCount, calculated));
    setCurrentCard(clamped);
  };

  useEffect(() => {
    const updateMetricsAndIndex = () => {
      const leftPad = getLeftPadding();
      setContainerLeftPad(leftPad);
      const { cardWidth } = getTestimonialMetrics(leftPad);
      setTestimonialCardWidth(cardWidth);
      updateCurrentCard();
    };

    updateMetricsAndIndex();
    window.addEventListener('resize', updateMetricsAndIndex);

    let ro: ResizeObserver | null = null;
    if (testimonialsRef.current && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateMetricsAndIndex();
      });
      ro.observe(testimonialsRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateMetricsAndIndex);
      if (ro) ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isHoveringCards) return;

    const onGlobalMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (testimonialsRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        if (
          e.clientX < rect.left - 4 ||
          e.clientX > rect.right + 4 ||
          e.clientY < rect.top - 4 ||
          e.clientY > rect.bottom + 4
        ) {
          setIsHoveringCards(false);
          setIsMouseDown(false);
        }
      }
    };

    const onGlobalMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', onGlobalMouseMove, { passive: true });
    window.addEventListener('mouseup', onGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', onGlobalMouseMove);
      window.removeEventListener('mouseup', onGlobalMouseUp);
    };
  }, [isHoveringCards]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHoveringCards(true);
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!testimonialsRef.current) return;
    setIsMouseDown(true);
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.pageX - testimonialsRef.current.offsetLeft;
    dragRef.current.scrollLeft = testimonialsRef.current.scrollLeft;
    dragRef.current.walk = 0;
  };

  const handleMouseLeave = () => {
    setIsHoveringCards(false);
    setIsMouseDown(false);
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    snapToNearest();
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;

    // Si el movimiento fue mínimo, interpretar como click para avanzar las tarjetas
    if (Math.abs(dragRef.current.walk) < 10) {
      scrollTestimonials();
    } else {
      snapToNearest();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHoveringCards) {
      setIsHoveringCards(true);
    }
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
    if (!dragRef.current.isDragging || !testimonialsRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 2.2;
    dragRef.current.walk = walk;
    testimonialsRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!testimonialsRef.current) return;
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.touches[0].pageX - testimonialsRef.current.offsetLeft;
    dragRef.current.scrollLeft = testimonialsRef.current.scrollLeft;
    dragRef.current.walk = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragRef.current.isDragging || !testimonialsRef.current) return;
    const x = e.touches[0].pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5;
    dragRef.current.walk = walk;
    testimonialsRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    if (Math.abs(dragRef.current.walk) < 10) {
      scrollTestimonials();
    } else {
      snapToNearest();
    }
  };

  const snapToNearest = () => {
    if (!testimonialsRef.current) return;
    const { twoItemsWidth } = getTestimonialMetrics();
    const isMobile = window.innerWidth < 640;

    const currentScroll = testimonialsRef.current.scrollLeft;
    const walk = dragRef.current.walk;
    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;

    // Si arrastra hacia la izquierda estando al final para avanzar tras el 18:
    if ((currentScroll >= maxScroll - 35 || currentCard >= totalCards) && walk < -25) {
      testimonialsRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      setCurrentCard(isMobile ? 2 : 4);
      dragRef.current.walk = 0;
      return;
    }

    let targetScroll;
    if (walk < -50) {
      targetScroll = Math.ceil(currentScroll / twoItemsWidth) * twoItemsWidth;
    } else if (walk > 50) {
      targetScroll = Math.floor(currentScroll / twoItemsWidth) * twoItemsWidth;
    } else {
      targetScroll = Math.round(currentScroll / twoItemsWidth) * twoItemsWidth;
    }

    if (targetScroll >= maxScroll - 35) {
      targetScroll = maxScroll;
    }

    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

    testimonialsRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });

    dragRef.current.walk = 0;
  };

  const scrollTestimonials = () => {
    if (!testimonialsRef.current) return;
    const { cardWidth, gap, twoItemsWidth } = getTestimonialMetrics();
    const isMobile = window.innerWidth < 640;
    const step = isMobile ? cardWidth + gap : twoItemsWidth;

    const currentScroll = testimonialsRef.current.scrollLeft;
    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;

    // Si ya estamos cerca del final o el contador llegó a 18:
    // Al hacer click, reiniciar suavemente al principio para seguir avanzando en bucle continuo
    if (currentScroll >= maxScroll - 35 || currentCard >= totalCards) {
      testimonialsRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      setCurrentCard(4);
      return;
    }

    let nextSnap = Math.round(currentScroll / step) * step + step;

    if (nextSnap >= maxScroll - 35) {
      nextSnap = maxScroll;
      setCurrentCard(totalCards);
    } else {
      const calculated = Math.round(nextSnap / (cardWidth + gap)) * (isMobile ? 1 : 2) + 4;
      setCurrentCard(Math.min(totalCards, calculated));
    }

    testimonialsRef.current.scrollTo({
      left: nextSnap,
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    if (!testimonialsRef.current) return;
    const { cardWidth, gap, twoItemsWidth } = getTestimonialMetrics();
    const isMobile = window.innerWidth < 640;
    const step = isMobile ? cardWidth + gap : twoItemsWidth;

    const currentScroll = testimonialsRef.current.scrollLeft;
    if (currentScroll <= 15) {
      const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
      testimonialsRef.current.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      });
      setCurrentCard(totalCards);
      return;
    }

    const prevSnap = Math.max(0, Math.round(currentScroll / step) * step - step);
    testimonialsRef.current.scrollTo({
      left: prevSnap,
      behavior: 'smooth',
    });
    const calculated = Math.round(prevSnap / (cardWidth + gap)) * (isMobile ? 1 : 2) + 4;
    setCurrentCard(Math.max(4, Math.min(totalCards, calculated)));
  };

  const scrollNext = () => {
    scrollTestimonials();
  };

  return (
    <section className={`w-screen relative left-1/2 -translate-x-1/2 bg-white py-16 sm:py-28 md:py-32 select-none overflow-hidden ${className}`}>
      {/* CABECERA EDITORIAL (SOLO MOBILE: TITULAR EN 2 LÍNEAS 'PRAISE FROM' Y 'CLIENTS' + NÚMEROS A LA IZQUIERDA Y FLECHAS A LA DERECHA) */}
      <div className="block sm:hidden w-full px-5 mb-8">
        {/* TITULAR MÁS PEQUEÑO CON 'PRAISE FROM' EN LÍNEA 1 Y 'CLIENTS' EN LÍNEA 2 */}
        <div className="mb-6">
          <MaskTextReveal
            as="h2"
            className="text-[10vw] font-normal tracking-[-0.03em] uppercase leading-[1.04] text-black"
            lines={['PRAISE FROM', 'CLIENTS']}
          />
        </div>

        {/* FILA DEBAJO: NÚMEROS 4—18 A LA IZQUIERDA Y FLECHAS DE NAVEGACIÓN A LA DERECHA */}
        <div className="w-full flex items-center justify-between pt-1">
          <span
            className="text-[17px] font-normal text-black select-none tracking-tight"
            style={{
              fontFamily: '"neue-haas-grotesk-text", "neue-haas-grotesk-display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }}
          >
            {currentCard}—{totalCards}
          </span>

          {/* FLECHAS DE NAVEGACIÓN (SEGÚN FOTO ADJUNTA) */}
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={scrollPrev}
              className="p-1 text-black hover:opacity-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12,19 5,12 12,5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="p-1 text-black hover:opacity-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CABECERA EDITORIAL (DESKTOP: PRAISE / FROM CLIENTS + 4—18 SUPERIOR DERECHO) */}
      <div className="hidden sm:block w-full max-w-[1500px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 mb-12 sm:mb-16 md:mb-20">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col">
            <MaskTextReveal
              as="h2"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[96px] 2xl:text-[110px] font-normal font-[400] tracking-[-0.04em] uppercase leading-[0.88] text-black"
              lines={['PRAISE', 'FROM CLIENTS']}
            />
          </div>

          {/* INDICADOR DE CAROUSEL SUPERIOR DERECHO (4—18 SEGÚN CAPTURA) */}
          <div className="pt-2 sm:pt-3 md:pt-4">
            <span
              className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal text-black select-none tracking-tight"
              style={{
                fontFamily: '"neue-haas-grotesk-text", "neue-haas-grotesk-display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 400,
              }}
            >
              {currentCard}—{totalCards}
            </span>
          </div>
        </div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL: ALINEADO A LA IZQUIERDA CON EL CONTENEDOR, PERO LLEGANDO HASTA EL BORDE DERECHO DE LA PANTALLA */}
      <div
        ref={testimonialsRef}
        onScroll={updateCurrentCard}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          paddingLeft: `${containerLeftPad}px`,
        }}
        className="w-full overflow-x-auto no-scrollbar cursor-none select-none py-2 pr-0"
      >
        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 w-max items-stretch cursor-none pr-8 sm:pr-14 md:pr-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              style={{ width: `${testimonialCardWidth}px` }}
              className="bg-white pt-8 sm:pt-10 md:pt-12 px-7 sm:px-9 md:px-11 pb-16 sm:pb-20 md:pb-24 min-h-[350px] sm:min-h-[380px] md:min-h-[410px] flex flex-col justify-start rounded-[10px] sm:rounded-[12px] shrink-0 border border-[#E2E2E2] shadow-none cursor-none pointer-events-auto transition-all duration-300"
            >
              {/* CABECERA DE LA TARJETA: AVATAR CIRCULAR + NOMBRE Y CARGO */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 overflow-hidden shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-normal font-[450] text-[15.5px] sm:text-[17px] text-black tracking-normal">
                    {t.name}
                  </span>
                  <span className="text-[13px] sm:text-[14px] text-gray-500 font-normal mt-0.5 tracking-normal">
                    {t.role}
                  </span>
                </div>
              </div>

              {/* TEXTO DEL TESTIMONIO (TIPO EDITORIAL ROMAN, SIN ITÁLICA, COLOR NEGRO) */}
              <div className="mt-8 sm:mt-10 md:mt-12 flex-1 flex flex-col justify-start">
                <p className="text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.42] sm:leading-[1.46] font-normal font-[400] text-black tracking-[-0.01em]">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
          {/* Espaciador final para permitir que la última tarjeta quede centrada y sin cortes */}
          <div className="w-12 sm:w-20 shrink-0"></div>
        </div>
      </div>

      {/* CURSOR FLOTANTE PORTALIZADO DIRECTO A DOCUMENT.BODY */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <div
          ref={cursorRef}
          id="praise-carousel-custom-cursor"
          className={`fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform transition-opacity duration-150 ${
            isHoveringCards ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: 'translate3d(-200px, -200px, 0)',
          }}
          aria-hidden="true"
        >
          <div
            className={`-translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex items-center justify-center transition-transform duration-200 ease-out ${
              isHoveringCards ? (isMouseDown ? 'scale-90' : 'scale-100') : 'scale-40'
            }`}
          >
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white stroke-[2.2]" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
