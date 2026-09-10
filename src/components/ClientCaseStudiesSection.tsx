import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

export interface CaseStudyProject {
  id: string | number;
  title: string;
  description: string;
  image: string;
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
    id: 'nike-forward',
    title: 'Nike Forward',
    description: 'Campaign, Digital',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    categories: ['CAMPAINGS', 'DIGITAL', 'CONTENT'],
  },
  {
    id: 'umana',
    title: 'Umana Beauty',
    description: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200&auto=format&fit=crop',
    categories: ['BRANDING', 'TRADE', 'CONTENT'],
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
}

export const ClientCaseStudiesSection: React.FC<ClientCaseStudiesSectionProps> = ({ onImageHover }) => {
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
      <div className="w-full flex justify-between items-start mb-12 sm:mb-16">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-light font-[300] tracking-[-0.03em] uppercase leading-[0.88] text-black">
          CLIENT CASE<br />
          STUDIES
        </h2>

        {/* Flecha minimalista superior derecha como en la imagen */}
        <div className="pt-2 sm:pt-4">
          <button 
            type="button"
            className="text-black hover:opacity-50 transition-opacity p-2"
            aria-label="View all case studies"
          >
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.2]" />
          </button>
        </div>
      </div>

      {/* 2. FILTROS POR TIPO DE TRABAJO (RECTÁNGULOS CON BORDES CURVOS) */}
      <div className="w-full flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-14 sm:mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full px-5 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-normal uppercase tracking-wider border transition-all duration-200 ${
                isActive
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-transparent text-black border-black hover:bg-black/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3. GRILLA DE 4 PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 sm:gap-x-7 md:gap-x-8 gap-y-12 sm:gap-y-16 w-full">
        {displayedProjects.map((project) => (
          <div key={project.id} className="flex flex-col group cursor-pointer">
            {/* Imagen del proyecto (cuadrada como en la imagen) */}
            <div
              data-selected-work-image="true"
              onMouseEnter={(e) => onImageHover?.(e, true)}
              onMouseLeave={(e) => onImageHover?.(e, false)}
              className="w-full aspect-square bg-[#EAEAEA] overflow-hidden relative shadow-none"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Título pequeño y debajo la descripción como en la imagen */}
            <div className="flex flex-col mt-3.5 sm:mt-4 leading-tight">
              <span className="text-sm sm:text-base font-normal text-black">
                {project.title}
              </span>
              <span className="text-xs sm:text-sm font-light text-black mt-0.5">
                {project.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
