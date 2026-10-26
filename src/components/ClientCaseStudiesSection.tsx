import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { MaskTextReveal } from './MaskTextReveal';

export interface CaseStudyProject {
  id: string | number;
  title: string;
  description: string;
  image: string;
  video?: string;
  categories: string[];
}

const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: 'umana',
    title: 'Umana',
    description: 'Architecture & Design',
    image: '/images/umanabyhenribarrett.png',
    video: 'https://player.vimeo.com/video/1045858904?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
  },
  {
    id: 'rappi',
    title: 'Rappi',
    description: 'Event Activation',
    image: '/images/rappi_spinning_kit.jpg',
    video: 'https://player.vimeo.com/video/1229618296?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1',
    categories: ['EVENT', 'CAMPAINGS', 'TRADE'],
  },
  {
    id: 'yummy',
    title: 'Yummy',
    description: 'Super App & Delivery',
    image: '/images/yummybyhenribarrett.png',
    categories: ['BRANDING', 'CAMPAINGS', 'DIGITAL'],
  },
  {
    id: 'teclab',
    title: 'Teclab',
    description: 'Brand & Industrial Identity',
    image: '/images/teclabbyhenribarrett.png',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
  },
  {
    id: 'barrett-session',
    title: 'Barrett Session',
    description: 'Brand, Event',
    image: '/images/barrett_sessions_pedestal_sign.jpg',
    categories: ['BRANDING', 'EVENT', 'CONTENT', 'DIGITAL'],
  },
  {
    id: 'petco',
    title: 'Petco',
    description: 'Rebrand',
    image: '/images/petco_cannabidol_box.jpg',
    categories: ['BRANDING', 'CAMPAINGS', 'DIGITAL'],
  },
  {
    id: 'heineken-fest',
    title: 'Heineken Fest',
    description: 'Event',
    image: '/images/heineken_fest_box.jpg',
    categories: ['EVENT', 'CAMPAINGS', 'TRADE'],
  },
  {
    id: 'pisco-tacama',
    title: 'Pisco Tacama',
    description: 'Rebrand',
    image: '/images/pisco_tacama_table.jpg',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
  },
  {
    id: 'nike-forward',
    title: 'Nike Forward',
    description: 'Campaign, Digital',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    categories: ['CAMPAINGS', 'DIGITAL', 'CONTENT'],
  },
  {
    id: 'spotify-greenroom',
    title: 'Spotify Greenroom',
    description: 'Digital Experience',
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=1200&auto=format&fit=crop',
    categories: ['DIGITAL', 'EVENT', 'CONTENT'],
  },
];

const CATEGORIES = [
  'BRANDING',
  'CAMPAINGS',
  'TRADE',
  'CONTENT',
  'EVENT',
  'DIGITAL',
] as const;

const CATEGORY_LABELS: Record<string, string> = {
  BRANDING: 'Branding',
  CAMPAINGS: 'Campaigns',
  TRADE: 'Trade',
  CONTENT: 'Content',
  EVENT: 'Event',
  DIGITAL: 'Digital',
};

const getCategoryCount = (categoryKey: string | null): number => {
  if (!categoryKey) return CASE_STUDIES.length;
  return CASE_STUDIES.filter((p) => p.categories.includes(categoryKey)).length;
};

const getCategoryDisplayLabel = (categoryKey: string | null): string => {
  if (!categoryKey) {
    return `All Projects (${CASE_STUDIES.length})`;
  }
  const name = CATEGORY_LABELS[categoryKey] || categoryKey;
  const count = getCategoryCount(categoryKey);
  return `${name} (${count})`;
};

interface ClientCaseStudiesSectionProps {
  onImageHover?: (e: React.MouseEvent, isHovering: boolean) => void;
  onProjectClick?: (projectId: string | number) => void;
}

export const ClientCaseStudiesSection: React.FC<ClientCaseStudiesSectionProps> = ({ onImageHover, onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el desplegable al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Filtrar y ordenar los proyectos según la categoría seleccionada
  const displayedProjects = useMemo(() => {
    if (!activeCategory) {
      // Por defecto muestra los 4 proyectos principales tal como en la imagen
      return CASE_STUDIES.slice(0, 4);
    }
    // Si hay una categoría activa, ordena los que pertenecen a esa categoría al frente
    const matches = CASE_STUDIES.filter((p) => p.categories.includes(activeCategory));
    const nonMatches = CASE_STUDIES.filter((p) => !p.categories.includes(activeCategory));
    const combined = [...matches, ...nonMatches];
    return combined.slice(0, 4);
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="w-full bg-white pb-32 pt-8 select-none">
      {/* 1. CABECERA: CLIENT CASE STUDIES + FLECHA SUPERIOR DERECHA */}
      <div className="w-full flex justify-between items-start mb-16 sm:mb-20 md:mb-24 lg:mb-28">
        <MaskTextReveal
          as="h2"
          className="text-[10vw] sm:text-7xl md:text-8xl lg:text-[7.5vw] 2xl:text-[130px] font-normal tracking-[-0.03em] uppercase leading-[1.04] sm:leading-[0.86] text-black"
          lines={['CLIENT CASE', 'STUDIES']}
        />

        {/* Flecha minimalista alargada superior derecha como en la imagen de referencia */}
        <div className="pt-3 sm:pt-5 md:pt-6">
          <button 
            type="button"
            className="text-black hover:opacity-50 transition-opacity p-2 flex items-center"
            aria-label="View all case studies"
          >
            <svg className="w-14 h-6 sm:w-20 sm:h-8 md:w-24 md:h-9 text-black" viewBox="0 0 100 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="0" y1="12" x2="94" y2="12" />
              <polyline points="84,4 94,12 84,20" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. DESPLEGABLE EN MOBILE (ANCHO COMPLETO Y DISEÑO ESTANDARIZADO TAL CUAL EN WORK) */}
      <div className="block md:hidden w-full mb-10 sm:mb-12 relative z-30" ref={dropdownRef}>
        {!isDropdownOpen ? (
          <button
            type="button"
            onClick={() => setIsDropdownOpen(true)}
            className="w-full bg-white hover:bg-gray-50 border border-gray-200/90 rounded-full px-7 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-between text-[0.95rem] font-medium text-black transition-all cursor-pointer"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Filter case studies by category"
          >
            <span>{getCategoryDisplayLabel(activeCategory)}</span>
            <ChevronDown className="w-4 h-4 text-black/70 transition-transform duration-200" />
          </button>
        ) : (
          <div className="w-full bg-white border border-gray-200/90 rounded-[26px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-all">
            {/* Header / Cerrar */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(false)}
              className="w-full px-7 py-4 flex items-center justify-between text-[0.95rem] font-medium text-black border-b border-gray-100 bg-white hover:bg-gray-50/70 transition-colors cursor-pointer"
            >
              <span>{getCategoryDisplayLabel(activeCategory)}</span>
              <ChevronDown className="w-4 h-4 text-black/70 rotate-180 transition-transform duration-200" />
            </button>

            {/* Opciones con hover/selección en negro y texto blanco */}
            <div className="flex flex-col w-full" role="listbox">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(null);
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-7 py-3.5 text-left text-[0.95rem] transition-colors duration-150 border-b border-gray-100 last:border-b-0 cursor-pointer flex items-center justify-between ${
                  activeCategory === null
                    ? 'bg-[#222222] text-white font-medium'
                    : 'bg-white text-black hover:bg-[#222222] hover:text-white active:bg-[#222222] active:text-white font-normal'
                }`}
                role="option"
                aria-selected={activeCategory === null}
              >
                <span>{getCategoryDisplayLabel(null)}</span>
              </button>
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-7 py-3.5 text-left text-[0.95rem] transition-colors duration-150 border-b border-gray-100 last:border-b-0 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#222222] text-white font-medium'
                        : 'bg-white text-black hover:bg-[#222222] hover:text-white active:bg-[#222222] active:text-white font-normal'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{getCategoryDisplayLabel(cat)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 2. FILTROS POR TIPO DE TRABAJO (SOLO DESKTOP: PILLS COMPLETOS EN LÍNEA) */}
      <div className="hidden md:block w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 overflow-x-auto no-scrollbar">
        <div className="w-full flex items-center justify-between gap-2.5 sm:gap-3.5 md:gap-4.5 lg:gap-5.5 xl:gap-6 flex-wrap sm:flex-nowrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className={`flex-1 min-w-max text-center rounded-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[26px] font-normal font-[450] uppercase tracking-tight border border-black transition-all duration-200 leading-none whitespace-nowrap cursor-pointer inline-flex items-center justify-center ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-transparent text-black hover:bg-black hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. GRILLA DE PROYECTOS (THUMBNAILS DE 905px ANCHO x 902px ALTO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20 w-full justify-between">
        {displayedProjects.map((project, index) => (
          <motion.div 
            key={`${activeCategory ?? 'all'}-${project.id}-${index}`} 
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.85,
              delay: index * 0.065,
              ease: [0.19, 1, 0.22, 1],
            }}
            onClick={() => onProjectClick?.(project.id)}
            className="w-full max-w-[905px] flex flex-col group cursor-pointer mx-auto md:mx-0 will-change-transform"
          >
            {/* Contenedor de thumbnail: cuadrado de color plomo base con fade-in suave de la imagen */}
            <div
              data-selected-work-image="true"
              onMouseEnter={(e) => onImageHover?.(e, true)}
              onMouseLeave={(e) => onImageHover?.(e, false)}
              className="w-full max-w-[905px] aspect-[905/902] 2xl:w-[905px] 2xl:h-[902px] bg-[#E2E2E2] overflow-hidden relative shadow-none"
            >
              {project.video ? (
                project.video.includes('vimeo.com') ? (
                  <div className="w-full h-full relative overflow-hidden pointer-events-none bg-black">
                    <iframe
                      src={project.video}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] min-w-full min-h-full pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ border: 'none' }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      title={project.title}
                    />
                  </div>
                ) : (
                  <motion.video
                    key={`video-${activeCategory ?? 'all'}-${project.id}`}
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.18 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  />
                )
              ) : (
                <motion.img
                  key={`img-${activeCategory ?? 'all'}-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.18 + index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                />
              )}
            </div>

            {/* Título y descripción inferior */}
            <div className="flex flex-col mt-4 sm:mt-5 leading-tight">
              <span className="text-base sm:text-lg md:text-xl font-normal text-black">
                {project.title}
              </span>
              <span className="text-sm sm:text-base md:text-lg font-light text-black mt-1">
                {project.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
