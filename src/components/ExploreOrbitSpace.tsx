import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, MoveUpRight, X } from 'lucide-react';
import type { AppView } from '../../App';

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ExploreOrbitSpaceProps {
  selectedCategory: string;
  onOpenCaseStudy?: (view: AppView) => void;
  projects?: ProjectData[];
}

// Ángulos calculados matemáticamente para una elipse (rx/ry ~ 1.9) para que la distancia euclídea
// entre cada una de las 10 tarjetas adyacentes sea idéntica (~320px) y no haya aglomeraciones.
const ARC_EQUALIZED_ANGLES = [
  0.0,
  (44.2 * Math.PI) / 180,
  (75.7 * Math.PI) / 180,
  (104.3 * Math.PI) / 180,
  (135.9 * Math.PI) / 180,
  Math.PI,
  (224.2 * Math.PI) / 180,
  (255.7 * Math.PI) / 180,
  (284.3 * Math.PI) / 180,
  (315.9 * Math.PI) / 180,
];

export const ExploreOrbitSpace: React.FC<ExploreOrbitSpaceProps> = ({
  selectedCategory,
  onOpenCaseStudy,
  projects = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectData | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const angleOffsetRef = useRef(0);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastCardClickTimeRef = useRef(0);

  const dragInfoRef = useRef<{
    startX: number;
    startY: number;
    startAngle: number;
    hasMoved: boolean;
    pointerId: number;
    clickedProject: ProjectData | null;
  } | null>(null);

  // Filtro coherente con la vista Grid
  const isMatch = (card: ProjectData) => {
    if (!selectedCategory || selectedCategory.startsWith('All Projects')) return true;
    if (selectedCategory.startsWith('Branding')) return card.category.toLowerCase().includes('brand');
    if (selectedCategory.startsWith('Event')) return card.category.toLowerCase().includes('event');
    if (selectedCategory.startsWith('Rebrand')) return card.category.toLowerCase().includes('rebrand');
    if (selectedCategory.startsWith('Campaign')) return card.category.toLowerCase().includes('campaign');
    if (selectedCategory.startsWith('Digital')) return card.category.toLowerCase().includes('digital');
    return true;
  };

  const handleCardClick = (project: ProjectData) => {
    const now = Date.now();
    if (now - lastCardClickTimeRef.current < 400) return;
    lastCardClickTimeRef.current = now;

    const isUmana = project.title.toLowerCase().includes('umana');
    const isRappi = project.title.toLowerCase().includes('rappi');
    if (isUmana && onOpenCaseStudy) {
      onOpenCaseStudy('case-study-umana');
    } else if (isRappi && onOpenCaseStudy) {
      onOpenCaseStudy('case-study-rappi');
    } else {
      setSelectedModalProject(project);
    }
  };

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Parallax suave al mover el ratón
      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.04;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.04;

      // Avance orbital continuo si no está en pausa ni arrastrando
      if (!isPaused && !dragInfoRef.current?.hasMoved) {
        angleOffsetRef.current += 0.075 * dt;
      }

      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        // Factor de escala responsivo para mantener la órbita amplia y separada
        const scaleFactor = Math.min(Math.max((rect.width - 60) / 1400, 0.48), 0.95);

        // Radios de órbita ampliados: separación generosa y holgada
        const rx = 660 * scaleFactor;
        const ry = 340 * scaleFactor;

        const isMobile = rect.width < 768;
        const baseW = isMobile ? 140 : 190;
        const w = baseW * Math.min(Math.max(rect.width / 1300, 0.82), 1.05);
        const h = w * 1.25; // Proporción 4:5 igual al Grid

        projects.forEach((card, i) => {
          const el = cardElementsRef.current[i];
          if (!el) return;

          // Ángulo base equidistante + rotación constante sincronizada (nunca se enciman)
          const baseAngle = ARC_EQUALIZED_ANGLES[i % ARC_EQUALIZED_ANGLES.length];
          const cardAngle = baseAngle + angleOffsetRef.current;

          const depthOffset = 0.9 + (i % 2) * 0.15;
          const x = cx + Math.cos(cardAngle) * rx + mousePosRef.current.x * (depthOffset * 22);
          const y = cy + Math.sin(cardAngle) * ry + mousePosRef.current.y * (depthOffset * 15);

          const tilt = i % 2 === 0 ? 1.5 : -1.5;
          const currentTilt = tilt + Math.sin(time * 0.0012 + i) * 1.2;
          const depthScale = (1 + Math.sin(cardAngle) * 0.06) * (isMobile ? 0.85 : 1);

          if (hoveredProject?.id === card.id) {
            el.style.width = `${w}px`;
            el.style.height = `${h}px`;
            el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) rotate(0deg) scale(${depthScale * 1.08})`;
            el.style.zIndex = '90';
          } else {
            el.style.width = `${w}px`;
            el.style.height = `${h}px`;
            el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) rotate(${currentTilt}deg) scale(${depthScale})`;
            // Tarjetas frontales (abajo) tienen mayor zIndex
            el.style.zIndex = `${Math.round(30 + Math.sin(cardAngle) * 20)}`;
          }
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, hoveredProject, projects]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;

    // Detectar si el usuario presionó sobre una tarjeta de proyecto
    const cardEl = (e.target as HTMLElement).closest('[data-project-id]');
    let clickedProj: ProjectData | null = null;
    if (cardEl) {
      const projId = Number(cardEl.getAttribute('data-project-id'));
      clickedProj = projects.find((p) => p.id === projId) || null;
    }

    dragInfoRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startAngle: angleOffsetRef.current,
      hasMoved: false,
      pointerId: e.pointerId,
      clickedProject: clickedProj,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mousePosRef.current.targetX = normX;
      mousePosRef.current.targetY = normY;
    }

    const drag = dragInfoRef.current;
    if (!drag) return;

    const deltaX = e.clientX - drag.startX;
    const deltaY = e.clientY - drag.startY;
    const dist = Math.hypot(deltaX, deltaY);

    // Solo activar arrastre orbital si el usuario se desplazó más de 6 píxeles
    if (dist > 6) {
      if (!drag.hasMoved) {
        drag.hasMoved = true;
        setIsDragging(true);
        try {
          containerRef.current?.setPointerCapture(drag.pointerId);
        } catch {}
      }
      angleOffsetRef.current = drag.startAngle + deltaX * 0.0035;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const drag = dragInfoRef.current;
    if (drag) {
      if (drag.hasMoved) {
        try {
          containerRef.current?.releasePointerCapture(drag.pointerId);
        } catch {}
      } else if (drag.clickedProject) {
        // Clic / tap directo sobre tarjeta
        handleCardClick(drag.clickedProject);
      }
      dragInfoRef.current = null;
    }
    setIsDragging(false);
  };

  return (
    <div className="w-full relative bg-white overflow-hidden py-4 select-none">
      {/* CANVAS PRINCIPAL ORBITAL */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`w-full relative h-[780px] sm:h-[880px] md:h-[960px] lg:h-[1020px] overflow-hidden ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* CONTROLES SUPERIORES FLOTANTES */}
        <div className="absolute top-4 right-6 sm:right-10 flex items-center gap-3.5 z-40 pointer-events-auto">
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider uppercase text-black/40">
            (ARRASTRA PARA ROTAR • HAZ HOVER O CLIC PARA EXPLORAR)
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-black text-[11px] font-bold tracking-wider uppercase shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            title={isPaused ? 'Reanudar órbita' : 'Pausar órbita'}
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            <span>{isPaused ? 'Reanudar' : 'Pausar'}</span>
          </button>
        </div>

        {/* TARJETAS ORBITANTES VINCULADAS EXACTAMENTE A GRID */}
        {projects.map((project, idx) => {
          const matched = isMatch(project);
          const isUmana = project.title.toLowerCase().includes('umana');
          const isRappi = project.title.toLowerCase().includes('rappi');

          return (
            <div
              key={project.id}
              data-project-id={project.id}
              ref={(el) => {
                cardElementsRef.current[idx] = el;
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(project);
              }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`absolute top-0 left-0 will-change-transform group cursor-pointer transition-opacity duration-500 ${
                matched ? 'opacity-100' : 'opacity-20 grayscale'
              }`}
              style={{
                width: '190px',
                height: '237.5px', // Aspect ratio 4:5
              }}
            >
              <div
                className={`w-full h-full relative overflow-hidden bg-[#e4e4e4] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border transition-all duration-300 rounded-[3px] ${
                  isUmana
                    ? 'border-emerald-500/40 group-hover:border-emerald-500 group-hover:shadow-[0_25px_50px_rgba(16,185,129,0.22)]'
                    : isRappi
                    ? 'border-[#FF553E]/50 group-hover:border-[#FF553E] group-hover:shadow-[0_25px_50px_rgba(255,85,62,0.25)]'
                    : 'border-black/10 group-hover:border-black/30 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.22)]'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />

                {/* Badge visible para casos de estudio */}
                {isUmana && (
                  <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-400/40 text-white text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Case Study
                  </div>
                )}
                {isRappi && (
                  <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FF553E]/50 text-white text-[9px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF553E] animate-pulse" />
                    Case Study
                  </div>
                )}

                {/* Overlay de información al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white pointer-events-none">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/75">{project.category}</span>
                  <span className="text-base font-semibold leading-tight line-clamp-1 mt-0.5">{project.title}</span>
                  {isUmana ? (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 tracking-wide">
                      <span>Ver caso de estudio</span>
                      <MoveUpRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  ) : isRappi ? (
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FF553E] tracking-wide">
                      <span>Ver caso de estudio</span>
                      <MoveUpRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  ) : (
                    <span className="text-[10px] text-white/60 tracking-wide mt-1">Clic para ver detalle</span>
                  )}
                </div>

                {/* Badge icono superior */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <MoveUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL DETALLE AL HACER CLIC EN PROYECTO */}
      {selectedModalProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedModalProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-gray-100">
              <img src={selectedModalProject.image} alt={selectedModalProject.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{selectedModalProject.category}</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black mt-1">{selectedModalProject.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Henri Barrett® Selected Project • Vista Explore Orbit</p>
              </div>
              <div className="flex items-center gap-3">
                {selectedModalProject.title.toLowerCase().includes('umana') && onOpenCaseStudy && (
                  <button
                    onClick={() => {
                      setSelectedModalProject(null);
                      onOpenCaseStudy('case-study-umana');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {selectedModalProject.title.toLowerCase().includes('rappi') && onOpenCaseStudy && (
                  <button
                    onClick={() => {
                      setSelectedModalProject(null);
                      onOpenCaseStudy('case-study-rappi');
                    }}
                    className="px-6 py-2.5 bg-[#FF553E] text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#e04430] transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-gray-800 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
