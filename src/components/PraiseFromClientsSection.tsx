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

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Allie Kuzyk',
    role: 'Global Program Manager, Tik Tok',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: "I've referred Henri Barrett® to anyone who asks for an all-around branding and strategic powerhouse.",
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Head of Design, Stripe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: "The team's ability to translate complex business requirements into elegant design solutions is unparalleled.",
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'CMO, Spotify',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: "Working with Henri Barrett feels like extending your internal team with world-class talent.",
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, TechFlow',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: "Their strategic approach transformed our brand identity completely. We couldn't be happier with the results.",
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'VP Marketing, Vercel',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    quote: "A rare combination of creative brilliance and strategic execution. They delivered beyond our expectations.",
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Creative Director, Nike',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    quote: "Henri Barrett brings a unique perspective that challenges the status quo in the best way possible.",
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
  const [testimonialCardWidth, setTestimonialCardWidth] = useState<number>(570);
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0, walk: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalCards = TESTIMONIALS.length; // 6 tarjetas en total
  const [currentCard, setCurrentCard] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 1;
    }
    return 2;
  });

  const getTestimonialMetrics = () => {
    if (!testimonialsRef.current) {
      const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
      const cardW = isDesktop ? 570 : 320;
      const gap = isDesktop ? 32 : 20;
      return { cardWidth: cardW, gap, twoItemsWidth: (cardW + gap) * (isDesktop ? 2 : 1) };
    }
    const containerW = testimonialsRef.current.clientWidth;
    const isDesktop = window.innerWidth >= 768;
    const gap = isDesktop ? 32 : 20;
    // En desktop calculamos el ancho exacto para que 2 tarjetas + gap ocupen el contenedor dejando holgura para sombras
    const horizontalMargin = isDesktop ? 16 : 8;
    const cardW = isDesktop
      ? Math.max(320, Math.floor((containerW - gap - horizontalMargin) / 2))
      : Math.floor(containerW * 0.86);
    const twoItemsWidth = isDesktop ? (cardW + gap) * 2 : (cardW + gap);
    return { cardWidth: cardW, gap, twoItemsWidth };
  };

  const updateCurrentCard = () => {
    if (!testimonialsRef.current) return;
    const { cardWidth, gap } = getTestimonialMetrics();
    const isDesktop = window.innerWidth >= 768;
    const cardFullWidth = cardWidth + gap;
    if (cardFullWidth <= 0) return;

    const scrollLeft = testimonialsRef.current.scrollLeft;
    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
    const visibleCards = isDesktop ? 2 : 1;

    if (maxScroll <= 5) {
      setCurrentCard(totalCards);
      return;
    }

    if (scrollLeft <= 15) {
      setCurrentCard(visibleCards);
      return;
    }

    if (scrollLeft >= maxScroll - 20) {
      setCurrentCard(totalCards);
      return;
    }

    const calculated = Math.round(scrollLeft / cardFullWidth) + visibleCards;
    setCurrentCard(Math.min(totalCards, Math.max(visibleCards, calculated)));
  };

  useEffect(() => {
    const updateMetricsAndIndex = () => {
      const { cardWidth } = getTestimonialMetrics();
      setTestimonialCardWidth(cardWidth);
      updateCurrentCard();
    };

    updateMetricsAndIndex();
    window.addEventListener('resize', updateMetricsAndIndex);

    let ro: ResizeObserver | null = null;
    if (testimonialsRef.current) {
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
    const walk = (x - dragRef.current.startX) * 2.5;
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
    snapToNearest();
  };

  const snapToNearest = () => {
    if (!testimonialsRef.current) return;
    const { twoItemsWidth } = getTestimonialMetrics();

    const currentScroll = testimonialsRef.current.scrollLeft;
    const walk = dragRef.current.walk;

    let targetScroll;
    if (walk < -50) {
      targetScroll = Math.ceil(currentScroll / twoItemsWidth) * twoItemsWidth;
    } else if (walk > 50) {
      targetScroll = Math.floor(currentScroll / twoItemsWidth) * twoItemsWidth;
    } else {
      targetScroll = Math.round(currentScroll / twoItemsWidth) * twoItemsWidth;
    }

    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
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
    const isDesktop = window.innerWidth >= 768;
    const cardFullWidth = cardWidth + gap;
    const visibleCards = isDesktop ? 2 : 1;

    const currentScroll = testimonialsRef.current.scrollLeft;
    let nextSnap = Math.round(currentScroll / twoItemsWidth) * twoItemsWidth + twoItemsWidth;

    const maxScroll = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
    if (nextSnap >= maxScroll - 10) {
      if (currentScroll + 15 >= maxScroll) {
        nextSnap = 0;
      } else {
        nextSnap = maxScroll;
      }
    }

    testimonialsRef.current.scrollTo({
      left: nextSnap,
      behavior: 'smooth',
    });

    if (nextSnap === 0) {
      setCurrentCard(visibleCards);
    } else if (nextSnap >= maxScroll - 15) {
      setCurrentCard(totalCards);
    } else {
      const calculated = Math.round(nextSnap / cardFullWidth) + visibleCards;
      setCurrentCard(Math.min(totalCards, Math.max(visibleCards, calculated)));
    }
  };

  return (
    <section className={`w-full flex flex-col select-none ${className}`}>
      {/* CABECERA: PRAISE (CARD COUNTER) / FROM CLIENTS */}
      <div className="w-full pt-16 pb-14 md:pb-20 border-t border-gray-200 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <MaskTextReveal
            as="h2"
            className="text-[11vw] font-light font-[300] tracking-tighter uppercase leading-[0.95] text-black"
            text="Praise"
          />
          <span 
            className="text-2xl sm:text-3xl font-normal mt-4 sm:mt-6 text-black mr-12 sm:mr-20 md:mr-28 lg:mr-36 select-none tracking-tight"
            style={{
              fontFamily: '"neue-haas-grotesk-text", "neue-haas-grotesk-display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400
            }}
          >
            {currentCard}—{totalCards}
          </span>
        </div>
        <div className="flex justify-between items-end">
          <MaskTextReveal
            as="h2"
            className="text-[11vw] font-light font-[300] tracking-tighter uppercase leading-[0.95] text-black"
            text="From Clients"
          />
        </div>
      </div>

      {/* CARRUSEL DE TESTIMONIOS CON CURSOR PERSONALIZADO (CIRCULO NEGRO CON FLECHA) */}
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
        className="w-full overflow-x-auto no-scrollbar cursor-none select-none py-6 md:py-8 -my-6 md:-my-8"
      >
        <div className="flex gap-8 w-max px-2 py-4 items-stretch cursor-none">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              style={{ width: `${testimonialCardWidth}px` }}
              className="bg-white p-8 sm:p-12 md:p-14 flex flex-col justify-between gap-8 sm:gap-10 border border-gray-100 shadow-xl rounded-2xl shrink-0 transition-shadow duration-300 hover:shadow-2xl cursor-none pointer-events-auto"
            >
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-50 shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black uppercase tracking-tight text-xl sm:text-2xl text-black">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">
                    {t.role}
                  </span>
                </div>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl leading-tight font-light italic text-gray-800">
                "{t.quote}"
              </p>
            </div>
          ))}
          {/* Espaciador para evitar recorte de sombra en la última tarjeta */}
          <div className="w-2 shrink-0"></div>
        </div>
      </div>
      <div className="w-full h-8 sm:h-12"></div>

      {/* CURSOR FLOTANTE PORTALIZADO DIRECTO A DOCUMENT.BODY (SIN INTERFERENCIA DE TRANSFORMS ANCENTRALES) */}
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
            className={`-translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.55)] flex items-center justify-center transition-transform duration-200 ease-out ${
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
