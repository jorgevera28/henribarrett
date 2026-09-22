import React, { useState, useMemo } from 'react';
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
    id: 'heineken-fest',
    title: 'Heineken Fest',
    description: 'Event',
    image: '/src/assets/images/heineken_fest_box_1789000030629.jpg',
    categories: ['EVENT', 'CAMPAINGS', 'TRADE'],
  },
  {
    id: 'pisco-tacama',
    title: 'Pisco Tacama',
    description: 'Rebrand',
    image: '/src/assets/images/pisco_tacama_table_1789000042775.jpg',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
  },
  {
    id: 'barrett-session',
    title: 'Barrett Session',
    description: 'Brand, Event',
    image: '/src/assets/images/barrett_sessions_pedestal_1789000054629.jpg',
    categories: ['BRANDING', 'EVENT', 'CONTENT', 'DIGITAL'],
  },
  {
    id: 'petco',
    title: 'Petco',
    description: 'Rebrand',
    image: '/src/assets/images/petco_cannabidol_box_1789000066953.jpg',
    categories: ['BRANDING', 'CAMPAINGS', 'DIGITAL'],
  },
  {
    id: 'umana',
    title: 'Umana',
    description: 'Architecture & Design',
    image: '/src/assets/images/umana_powder_cube_1788889215309.jpg',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
  },
  {
    id: 'rappi',
    title: 'Rappi',
    description: 'Event Activation',
    image: '/images/rappi_spinning_kit.jpg',
    categories: ['EVENT', 'CAMPAINGS', 'TRADE'],
  },
  {
    id: 'teclab',
    title: 'Teclab',
    description: 'Brand & Industrial Identity',
    image: '/images/teclab_hero.jpg',
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
  {
    id: 'rappi-fest',
    title: 'Rappi Fest',
    description: 'Live Brand Experience',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop',
    categories: ['EVENT', 'CAMPAINGS', 'TRADE'],
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

interface ClientCaseStudiesSectionProps {
  onImageHover?: (e: React.MouseEvent, isHovering: boolean) => void;
  onProjectClick?: (projectId: string | number) => void;
}

export const ClientCaseStudiesSection: React.FC<ClientCaseStudiesSectionProps> = ({ onImageHover, onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
      <div className="w-full flex justify-between items-start mb-10 sm:mb-14 md:mb-16">
        <MaskTextReveal
          as="h2"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] 2xl:text-[130px] font-light font-[300] tracking-[-0.04em] uppercase leading-[0.86] text-black"
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

      {/* 2. FILTROS POR TIPO DE TRABAJO (TEXTO DE APROXIMADAMENTE 40px CON BORDES CURVOS) */}
      <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16 md:mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full px-6 sm:px-8 lg:px-10 xl:px-11 py-2 sm:py-2.5 lg:py-3.5 text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-normal uppercase tracking-tight border border-black transition-all duration-200 leading-none whitespace-nowrap ${
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

      {/* 3. GRILLA DE PROYECTOS (THUMBNAILS DE 905px ANCHO x 902px ALTO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20 w-full justify-between">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => onProjectClick?.(project.id)}
            className="w-full max-w-[905px] flex flex-col group cursor-pointer mx-auto md:mx-0"
          >
            {/* Contenedor de thumbnail: 905px de ancho por 902px de alto (proporción exacta 905/902) */}
            <div
              data-selected-work-image="true"
              onMouseEnter={(e) => onImageHover?.(e, true)}
              onMouseLeave={(e) => onImageHover?.(e, false)}
              className="w-full max-w-[905px] aspect-[905/902] 2xl:w-[905px] 2xl:h-[902px] bg-[#EAEAEA] overflow-hidden relative shadow-none"
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  loading="lazy"
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
          </div>
        ))}
      </div>
    </section>
  );
};
