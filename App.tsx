import React, { useEffect, useId, useRef, useState } from 'react';
import { Sun, MoveUpRight, MoveRight, Zap, Target, Aperture, Fingerprint, ArrowDown, ArrowRight, ArrowLeft, Instagram, ChevronDown, Play, X, Volume2, VolumeX, Pause, RotateCcw, Link2, ExternalLink, Settings2, Edit3, Check, RefreshCw } from 'lucide-react';
import { FeaturedClientsSection } from './src/components/FeaturedClientsSection';
import { WhoIsBarrettSection } from './src/components/WhoIsBarrettSection';
import { ClientCaseStudiesSection } from './src/components/ClientCaseStudiesSection';
import { PraiseFromClientsSection } from './src/components/PraiseFromClientsSection';
import { AboutUsView } from './src/components/AboutUsView';
import { UmanaCaseStudy } from './src/components/case-study/UmanaCaseStudy';

export type AppView = 'work' | 'home' | 'about' | 'services' | 'quicklys' | 'work-with-us' | 'case-study-umana';

// --- MAIN CODE ---

// --- DATOS ---
const INITIAL_PROJECTS = [
  { id: 1, name: 'UMANA', category: 'BRANDING', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2000&auto=format&fit=crop', className: 'filter brightness-90 mix-blend-multiply' },
  { id: 2, name: 'RAPPI', category: 'EVENT', image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=2000&auto=format&fit=crop', className: 'mix-blend-multiply' },
  { id: 3, name: 'YUMMY', category: 'BRANDING', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop', quote: "Working with Henri Barrett feels like extending your internal team with world-class talent." }
];

const ALL_PROJECTS = [
  { id: 101, title: 'Umana', category: 'Brand', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200&auto=format&fit=crop' },
  { id: 102, title: 'Rappi', category: 'Event', image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop' },
  { id: 103, title: 'Barrett Session', category: 'Brand, Event', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop' },
  { id: 104, title: 'Petco', category: 'Brand', image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=1200&auto=format&fit=crop' },
  { id: 105, title: 'Heineken Fest', category: 'Event', image: 'https://images.unsplash.com/photo-1605218427368-35b86d9575ae?q=80&w=1200&auto=format&fit=crop' },
  { id: 106, title: 'Pisco Tacama', category: 'Rebrand', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop' },
  { id: 107, title: 'Yummy Delivery', category: 'Brand', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop' },
  { id: 108, title: 'Nike Forward', category: 'Campaign', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { id: 109, title: 'Spotify Greenroom', category: 'Digital', image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=1200&auto=format&fit=crop' },
  { id: 110, title: 'Interbank Hub', category: 'Campaign', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop' }
];

const GRID_WORKS = ALL_PROJECTS.slice(0, 4);

// --- COMPONENTES AUXILIARES ---
interface ReelItem {
  id: string;
  title: string;
  client: string;
  videoUrl: string;
  posterUrl?: string;
  instagramUrl: string;
  instagramShortcode?: string;
}

export const extractInstagramShortcode = (urlOrCode: string): string => {
  if (!urlOrCode) return '';
  const clean = urlOrCode.trim();
  const match = clean.match(/(?:instagram\.com\/(?:reel|p|tv)\/|instagram\.com\/[^/]+\/reel\/)([A-Za-z0-9_-]+)/);
  if (match) return match[1];
  if (/^[A-Za-z0-9_-]{8,25}$/.test(clean)) return clean;
  return '';
};

export const HB_REELS_ASSETS = {
  kauawai: 'https://henribarrett.com/assets/site/content/instagram/reels/kauawai.mp4',
  redBull: 'https://henribarrett.com/assets/site/content/instagram/reels/red_bull.mp4',
  sessions: 'https://henribarrett.com/assets/site/content/instagram/reels/sessions.mp4',
  tiktok: 'https://henribarrett.com/assets/site/content/instagram/reels/tiktok.mp4',
  tipo: 'https://henribarrett.com/assets/site/content/instagram/reels/tipo.mp4',
};

const REELS_COL_1: ReelItem[] = [
  {
    id: 'r1',
    title: 'Barrett Sessions Live • Acoustic & Experimental Sound',
    client: 'Barrett Sessions Live',
    videoUrl: HB_REELS_ASSETS.sessions,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r2',
    title: 'Red Bull Energy & Urban Culture • Dynamic Summit',
    client: 'Red Bull Culture',
    videoUrl: HB_REELS_ASSETS.redBull,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r3',
    title: 'Kauawai Brand Architecture & Tropical World',
    client: 'Kauawai Brand',
    videoUrl: HB_REELS_ASSETS.kauawai,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r4',
    title: 'TikTok Viral Motion & Real-Time Strategy',
    client: 'TikTok Creative Lab',
    videoUrl: HB_REELS_ASSETS.tiktok,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  }
];

const REELS_COL_2: ReelItem[] = [
  {
    id: 'r5',
    title: 'HB Typography Drop • Kinetic Glyphs System',
    client: 'HB Studio Type',
    videoUrl: HB_REELS_ASSETS.tipo,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r6',
    title: 'Kauawai Visual Identity & Origin Craft',
    client: 'Kauawai Studio',
    videoUrl: HB_REELS_ASSETS.kauawai,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r7',
    title: 'Barrett Sessions #12 • Live Experimental Set',
    client: 'Barrett Sessions',
    videoUrl: HB_REELS_ASSETS.sessions,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r8',
    title: 'Red Bull Motion Power & Adrenaline Speed',
    client: 'Red Bull Racing',
    videoUrl: HB_REELS_ASSETS.redBull,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  }
];

const REELS_COL_3: ReelItem[] = [
  {
    id: 'r9',
    title: 'TikTok Creator Innovation & Microformat Storytelling',
    client: 'TikTok Creative',
    videoUrl: HB_REELS_ASSETS.tiktok,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r10',
    title: 'Experimental Font Architecture & Editorial Motion',
    client: 'HB Studio Design',
    videoUrl: HB_REELS_ASSETS.tipo,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r11',
    title: 'Kauawai Refresh & Packaging Evolution',
    client: 'Kauawai Brand',
    videoUrl: HB_REELS_ASSETS.kauawai,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r12',
    title: 'Barrett Live Sessions • Acoustic Intimacy',
    client: 'Barrett Sessions Live',
    videoUrl: HB_REELS_ASSETS.sessions,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  }
];

const REELS_COL_4: ReelItem[] = [
  {
    id: 'r13',
    title: 'Red Bull Velocity & Urban Expression',
    client: 'Red Bull Peru',
    videoUrl: HB_REELS_ASSETS.redBull,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r14',
    title: 'TikTok Brand Impact & Audience Connection',
    client: 'TikTok Latam',
    videoUrl: HB_REELS_ASSETS.tiktok,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r15',
    title: 'Kinetic Type Systems & Contemporary Grid',
    client: 'Henri Barrett Studio',
    videoUrl: HB_REELS_ASSETS.tipo,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  },
  {
    id: 'r16',
    title: 'Kauawai Creative Direction & Sensory Narrative',
    client: 'Kauawai Brand',
    videoUrl: HB_REELS_ASSETS.kauawai,
    instagramUrl: 'https://www.instagram.com/reel/C_q83H-O_Z1/',
    instagramShortcode: 'C_q83H-O_Z1'
  }
];

// --- GESTOR GLOBAL DE REPRODUCCIÓN EXCLUSIVA (UN SOLO VIDEO A LA VEZ) ---
type VideoPlaybackListener = (activeId: string | null) => void;

class GlobalVideoPlaybackManager {
  private activeId: string | null = null;
  private activeVideoElement: HTMLVideoElement | null = null;
  private listeners = new Set<VideoPlaybackListener>();

  getActiveId(): string | null {
    return this.activeId;
  }

  requestPlay(id: string, videoEl?: HTMLVideoElement | null) {
    if (this.activeId !== id) {
      if (this.activeVideoElement && this.activeVideoElement !== videoEl) {
        try {
          this.activeVideoElement.pause();
          this.activeVideoElement.currentTime = 0.001;
        } catch (e) {}
      }
      this.activeId = id;
      this.activeVideoElement = videoEl || null;
      this.notify();
    } else if (videoEl && this.activeVideoElement !== videoEl) {
      this.activeVideoElement = videoEl;
    }
  }

  stopPlay(id: string) {
    if (this.activeId === id) {
      if (this.activeVideoElement) {
        try {
          this.activeVideoElement.pause();
          this.activeVideoElement.currentTime = 0.001;
        } catch (e) {}
      }
      this.activeId = null;
      this.activeVideoElement = null;
      this.notify();
    }
  }

  pauseAll() {
    if (this.activeVideoElement) {
      try {
        this.activeVideoElement.pause();
        this.activeVideoElement.currentTime = 0.001;
      } catch (e) {}
    }
    this.activeId = null;
    this.activeVideoElement = null;
    this.notify();
  }

  subscribe(listener: VideoPlaybackListener) {
    this.listeners.add(listener);
    listener(this.activeId);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.activeId);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

export const globalVideoManager = new GlobalVideoPlaybackManager();

export const LoopedReelVideo: React.FC<{
  id?: string;
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  autoPlay?: boolean;
  playOnHover?: boolean;
  resetOnLeave?: boolean;
  isExternalHovered?: boolean;
}> = ({
  id,
  src,
  poster,
  className = '',
  muted = true,
  autoPlay = false,
  playOnHover = true,
  resetOnLeave = true,
  isExternalHovered,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const autoGeneratedId = useId();
  const videoUniqueId = id || autoGeneratedId;

  const [isNearViewport, setIsNearViewport] = useState(false);
  const [internalHover, setInternalHover] = useState(false);
  const [isGloballyActive, setIsGloballyActive] = useState(false);

  // LAZY LOAD: IntersectionObserver para no descargar video hasta estar cerca de pantalla
  useEffect(() => {
    if (autoPlay) {
      setIsNearViewport(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '300px 150px 300px 150px',
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  // Suscripción al gestor global para exclusividad de reproducción
  useEffect(() => {
    const unsubscribe = globalVideoManager.subscribe((activeId) => {
      setIsGloballyActive(activeId === videoUniqueId);
    });
    return () => {
      unsubscribe();
      globalVideoManager.stopPlay(videoUniqueId);
    };
  }, [videoUniqueId]);

  const isHoverActive = isExternalHovered !== undefined ? isExternalHovered : internalHover;
  const userWantsToPlay = autoPlay || (playOnHover && isHoverActive);

  // Reclamar o soltar el canal global de reproducción exclusiva
  useEffect(() => {
    if (userWantsToPlay) {
      setIsNearViewport(true);
      globalVideoManager.requestPlay(videoUniqueId, videoRef.current);
    } else {
      globalVideoManager.stopPlay(videoUniqueId);
    }
  }, [userWantsToPlay, videoUniqueId]);

  const canPlayNow = userWantsToPlay && isGloballyActive;

  // Garantiza extracción del primer frame nativo mediante media fragment #t=0.001
  const videoSrc = src.includes('#t=') ? src : `${src}#t=0.001`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = muted;
    video.muted = muted;
    video.playsInline = true;

    if (canPlayNow) {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    } else {
      video.pause();
      if (resetOnLeave) {
        try {
          video.currentTime = 0.001;
        } catch (e) {}
      }
    }
  }, [canPlayNow, muted, resetOnLeave, isNearViewport]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        setIsNearViewport(true);
        setInternalHover(true);
      }}
      onMouseLeave={() => setInternalHover(false)}
      className={`relative w-full h-full overflow-hidden bg-[#111] ${className}`}
    >
      {poster && (
        <img
          src={poster}
          alt=""
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${
            canPlayNow ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {isNearViewport ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          loop
          muted={muted}
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            video.defaultMuted = muted;
            video.muted = muted;
            if (!canPlayNow) {
              try {
                video.currentTime = 0.001;
                video.pause();
              } catch (err) {}
            }
          }}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      ) : (
        <div className="w-full h-full bg-[#161616] flex items-center justify-center text-white/20">
          <div className="w-8 h-8 rounded-full border border-white/10 animate-pulse" />
        </div>
      )}
    </div>
  );
};

const ReelCard: React.FC<{ reel: ReelItem; uniqueKey?: string; onSelect: () => void }> = ({ reel, uniqueKey, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[9/16] w-full rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-black group cursor-pointer shadow-sm select-none border border-black/5"
    >
      <LoopedReelVideo
        id={uniqueKey || `reel-${reel.id}`}
        src={reel.videoUrl}
        poster={reel.posterUrl}
        isExternalHovered={isHovered}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Badge permanente de Instagram @henribarrettstudio */}
      <div className="absolute top-3 sm:top-3.5 left-3 sm:left-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium tracking-wide flex items-center gap-1.5 z-10 pointer-events-none">
        <Instagram className="w-2.5 h-2.5 text-pink-400" />
        <span>@henribarrettstudio</span>
      </div>

      {/* Indicador sutil de reproducción congelada que desaparece al pasar el cursor */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-70'}`}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-md">
          <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white translate-x-0.5" />
        </div>
      </div>

      {/* Gradiente sutil y metadata al hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-white pointer-events-none">
        <div className="flex items-center gap-1.5 mb-1">
          <Instagram className="w-3 h-3 text-[#E1306C]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80 font-bold">{reel.client}</span>
        </div>
        <span className="text-sm sm:text-base font-semibold leading-tight line-clamp-2 mt-0.5">{reel.title}</span>
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-white/90 font-medium">
          <span className="underline underline-offset-2">Ver Reel @henribarrettstudio</span>
          <MoveUpRight className="w-3 h-3" />
        </div>
      </div>

      {/* Indicador 'REEL' */}
      <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 pointer-events-none">
        <Play className="w-2.5 h-2.5 fill-white" />
        <span>REEL</span>
      </div>
    </div>
  );
};

const QuicklysMasonryReels: React.FC = () => {
  const [cols, setCols] = useState<{ col1: ReelItem[]; col2: ReelItem[]; col3: ReelItem[]; col4: ReelItem[] }>(() => {
    try {
      localStorage.removeItem('hb_studio_reels_data');
      localStorage.removeItem('hb_studio_reels_data_v2');
      localStorage.removeItem('hb_studio_reels_data_v5');
      localStorage.removeItem('hb_studio_reels_data_v4');
      const saved = localStorage.getItem('hb_studio_reels_data_v5');
      if (saved && !saved.includes('mixkit.co') && !saved.includes('/videos/hb_reel_')) {
        const parsed = JSON.parse(saved);
        if (parsed.col1 && parsed.col2 && parsed.col3 && parsed.col4) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return { col1: REELS_COL_1, col2: REELS_COL_2, col3: REELS_COL_3, col4: REELS_COL_4 };
  });

  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [viewMode, setViewMode] = useState<'embed' | 'video'>('embed');
  const [isMuted, setIsMuted] = useState(true);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isEditingCurrentUrl, setIsEditingCurrentUrl] = useState(false);
  const [currentUrlInput, setCurrentUrlInput] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  // Al abrir el modal, pausar inmediatamente cualquier video de fondo
  useEffect(() => {
    if (selectedReel) {
      globalVideoManager.requestPlay(`quicklys-modal-${selectedReel.id}`);
    } else {
      globalVideoManager.stopPlay('quicklys-modal');
    }
  }, [selectedReel]);

  // Actualizar la URL de un Reel y persistir en localStorage
  const handleUpdateReel = (reelId: string, newUrl: string) => {
    const code = extractInstagramShortcode(newUrl);
    const updateList = (list: ReelItem[]) =>
      list.map(item => (item.id === reelId ? { ...item, instagramUrl: newUrl, instagramShortcode: code || item.instagramShortcode } : item));

    const updated = {
      col1: updateList(cols.col1),
      col2: updateList(cols.col2),
      col3: updateList(cols.col3),
      col4: updateList(cols.col4),
    };

    setCols(updated);
    try {
      localStorage.setItem('hb_studio_reels_data_v5', JSON.stringify(updated));
      localStorage.removeItem('hb_studio_reels_data');
    } catch (e) {
      console.error(e);
    }

    if (selectedReel && selectedReel.id === reelId) {
      setSelectedReel({ ...selectedReel, instagramUrl: newUrl, instagramShortcode: code || selectedReel.instagramShortcode });
    }

    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2800);
  };

  const handleResetDefaults = () => {
    setCols({ col1: REELS_COL_1, col2: REELS_COL_2, col3: REELS_COL_3, col4: REELS_COL_4 });
    try {
      localStorage.removeItem('hb_studio_reels_data');
      localStorage.removeItem('hb_studio_reels_data_v5');
    } catch (e) {
      console.error(e);
    }
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2800);
  };

  const currentShortcode = selectedReel ? (extractInstagramShortcode(selectedReel.instagramUrl) || selectedReel.instagramShortcode || 'C_q83H-O_Z1') : '';

  return (
    <div className="w-full relative bg-white overflow-hidden pt-2 sm:pt-4 pb-0 mb-0">
      {/* HEADER DE CONEXIÓN A INSTAGRAM @HENRIBARRETTSTUDIO */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2.5px] flex items-center justify-center shrink-0 shadow-xs">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-black" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold text-black tracking-tight">@henribarrettstudio</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#0095f6] text-white flex items-center justify-center text-[8px] font-bold">✓</span>
              <span className="px-2 py-0.5 rounded-full bg-black/5 text-[#555] text-[10px] font-semibold uppercase tracking-wider">Reels En Vivo</span>
            </div>
            <p className="text-xs text-[#666666]">Reels oficiales • Brand Architecture & Creative Direction</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {/* BOTÓN PARA GESTIONAR / PEGAR REELS DE INSTAGRAM */}
          <button
            onClick={() => setIsManagerOpen(true)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white border border-black/15 text-black hover:bg-black hover:text-white text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer"
          >
            <Settings2 className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Vincular Reels de Instagram</span>
          </button>

          {/* BOTÓN DIRECTO A INSTAGRAM */}
          <a 
            href="https://www.instagram.com/henribarrettstudio/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-black/80 transition-colors w-fit self-start sm:self-auto cursor-pointer shadow-xs"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver perfil en Instagram</span>
            <MoveUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 4 COLUMNAS DE REELS MASONRY IRREGULAR (RELACIÓN 9:16) */}
      <div className="relative w-full h-[680px] sm:h-[820px] md:h-[940px] lg:h-[1040px] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-3 sm:px-6 md:px-8 h-full w-full">
          
          {/* COLUMNA 1: De arriba para abajo (downward) */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-down will-change-transform"
              style={{ animationDuration: '34s' }}
            >
              {[...cols.col1, ...cols.col1].map((reel, idx) => (
                <ReelCard key={`c1-${reel.id}-${idx}`} uniqueKey={`c1-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 2: De abajo para arriba (upward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-up will-change-transform -mt-20 sm:-mt-32 md:-mt-40"
              style={{ animationDuration: '30s' }}
            >
              {[...cols.col2, ...cols.col2].map((reel, idx) => (
                <ReelCard key={`c2-${reel.id}-${idx}`} uniqueKey={`c2-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 3: De arriba para abajo (downward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-down-alt will-change-transform -mt-10 sm:-mt-16"
              style={{ animationDuration: '38s' }}
            >
              {[...cols.col3, ...cols.col3].map((reel, idx) => (
                <ReelCard key={`c3-${reel.id}-${idx}`} uniqueKey={`c3-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 4: De abajo para arriba (upward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-up-alt will-change-transform -mt-28 sm:-mt-40 md:-mt-52"
              style={{ animationDuration: '33s' }}
            >
              {[...cols.col4, ...cols.col4].map((reel, idx) => (
                <ReelCard key={`c4-${reel.id}-${idx}`} uniqueKey={`c4-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL REPRODUCTOR DE REEL ESTILO INSTAGRAM (@HENRIBARRETTSTUDIO) */}
      {selectedReel && (
        <div 
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
          onClick={() => {
            setSelectedReel(null);
            setIsEditingCurrentUrl(false);
          }}
        >
          <div 
            className="relative w-full max-w-[430px] h-[90vh] max-h-[780px] bg-black rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CONTENIDO DEL REPRODUCTOR (EMBED NATIVO O VIDEO 9:16) */}
            <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
              {viewMode === 'embed' ? (
                <iframe
                  key={currentShortcode}
                  src={`https://www.instagram.com/reel/${currentShortcode}/embed/`}
                  className="w-full h-full border-0 bg-white"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={selectedReel.title}
                />
              ) : (
                <LoopedReelVideo
                  id={`quicklys-modal-${selectedReel.id}`}
                  src={selectedReel.videoUrl}
                  poster={selectedReel.posterUrl}
                  muted={isMuted}
                  autoPlay={true}
                  playOnHover={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* OVERLAY PARA EDITAR / PEGAR URL DE INSTAGRAM DE ESTE REEL */}
              {isEditingCurrentUrl && (
                <div className="absolute inset-0 z-40 bg-black/95 backdrop-blur-md p-6 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[1.5px] flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-pink-400" />
                      </div>
                    </div>
                    <h4 className="text-sm font-bold">Vincular URL de Instagram</h4>
                  </div>
                  <p className="text-xs text-white/70 mb-4">
                    Pega el enlace de cualquier Reel de <strong className="text-white">@henribarrettstudio</strong> para reproducirlo aquí con el reproductor oficial:
                  </p>
                  <input
                    type="text"
                    value={currentUrlInput}
                    onChange={(e) => setCurrentUrlInput(e.target.value)}
                    placeholder="https://www.instagram.com/reel/C_q83H-O_Z1/ ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-hidden focus:border-white mb-3"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (currentUrlInput.trim()) {
                          handleUpdateReel(selectedReel.id, currentUrlInput.trim());
                          setViewMode('embed');
                        }
                        setIsEditingCurrentUrl(false);
                      }}
                      className="flex-1 py-2.5 bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Guardar y Reproducir</span>
                    </button>
                    <button
                      onClick={() => setIsEditingCurrentUrl(false)}
                      className="px-4 py-2.5 bg-white/15 text-white rounded-xl text-xs hover:bg-white/25 transition-colors cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* BARRA SUPERIOR FLOTANTE DEL MODAL */}
            <div className="absolute top-0 left-0 right-0 z-30 p-3.5 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between pointer-events-auto">
              {/* SELECTOR DE MODO: EMBED OFICIAL vs VIDEO 9:16 */}
              <div className="flex items-center bg-black/65 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-md">
                <button
                  onClick={() => setViewMode('embed')}
                  className={`px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'embed'
                      ? 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="Reproductor Embebido Oficial de Instagram"
                >
                  <Instagram className="w-3 h-3" />
                  <span>Instagram Embed</span>
                </button>
                <button
                  onClick={() => setViewMode('video')}
                  className={`px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'video' ? 'bg-white text-black shadow-xs' : 'text-white/70 hover:text-white'
                  }`}
                  title="Reproducción de video optimizada"
                >
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Video 9:16</span>
                </button>
              </div>

              {/* CONTROLES DE LA DERECHA */}
              <div className="flex items-center gap-2">
                {viewMode === 'video' && (
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                    title={isMuted ? "Activar audio" : "Silenciar"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedReel(null);
                    setIsEditingCurrentUrl(false);
                  }}
                  className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                  title="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PIE INFERIOR DEL REEL: METADATA Y ACCIONES */}
            <div className="relative z-20 p-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col gap-2 text-white">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#0095f6] font-bold">{selectedReel.client}</span>
                  <h3 className="text-sm sm:text-base font-bold leading-tight mt-0.5">{selectedReel.title}</h3>
                </div>

                {/* BOTÓN PARA EDITAR URL DE ESTE REEL */}
                <button
                  onClick={() => {
                    setCurrentUrlInput(selectedReel.instagramUrl);
                    setIsEditingCurrentUrl(true);
                  }}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-medium flex items-center gap-1 shrink-0 cursor-pointer border border-white/10"
                  title="Cambiar URL de Instagram para este Reel"
                >
                  <Edit3 className="w-3 h-3 text-pink-400" />
                  <span>Pegar URL</span>
                </button>
              </div>

              {/* BOTÓN CTA DIRECTO A INSTAGRAM */}
              <a
                href={selectedReel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white rounded-full font-bold text-[11px] uppercase tracking-wider transition-opacity shadow-md cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Abrir en Instagram @henribarrettstudio</span>
                <MoveUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE GESTIÓN Y VINCULACIÓN DE REELS DE INSTAGRAM */}
      {isManagerOpen && (
        <div 
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsManagerOpen(false)}
        >
          <div 
            className="relative w-full max-w-[860px] max-h-[88vh] bg-[#121212] text-white rounded-[28px] overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CABECERA */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Vincular Reels Oficiales @henribarrettstudio</h3>
                  <p className="text-xs text-white/60">Pega los enlaces públicos de tus Reels de Instagram para reproducirlos embebidos directamente en la web</p>
                </div>
              </div>

              <button
                onClick={() => setIsManagerOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CONTENIDO SCROLLEABLE */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 max-h-[calc(88vh-160px)]">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed flex items-start gap-3">
                <Instagram className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">¿Cómo funciona la integración?</strong>
                  <p className="mt-1">
                    Instagram permite incrustar sus Reels a través de su reproductor oficial (<code className="bg-white/10 px-1 py-0.5 rounded text-pink-300">/embed/</code>). Al ingresar cualquier URL de Reel de tu cuenta (ej. <code className="bg-white/10 px-1 py-0.5 rounded text-pink-300">https://www.instagram.com/reel/C_q83H-O_Z1/</code>), el reproductor nativo de Instagram se cargará automáticamente aquí con el video, audio, me gusta y enlace directo al perfil.
                  </p>
                </div>
              </div>

              {/* LISTADO DE LOS REELS DE LAS 4 COLUMNAS */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">Reels Activos de la Grilla (Slots 1 a 16)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...cols.col1, ...cols.col2, ...cols.col3, ...cols.col4].map((reel) => {
                    const shortcode = extractInstagramShortcode(reel.instagramUrl) || reel.instagramShortcode;
                    return (
                      <div key={reel.id} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <div className="w-9 h-12 rounded-lg overflow-hidden bg-black shrink-0 relative">
                              <LoopedReelVideo
                                src={reel.videoUrl}
                                poster={reel.posterUrl}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="truncate">
                              <span className="text-[10px] uppercase font-bold text-pink-400">{reel.client}</span>
                              <h5 className="text-xs font-medium text-white truncate">{reel.title}</h5>
                            </div>
                          </div>
                          {shortcode && (
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono shrink-0">
                              {shortcode}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              defaultValue={reel.instagramUrl}
                              placeholder="https://www.instagram.com/reel/..."
                              onBlur={(e) => {
                                if (e.target.value.trim() && e.target.value !== reel.instagramUrl) {
                                  handleUpdateReel(reel.id, e.target.value.trim());
                                }
                              }}
                              className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-hidden focus:border-pink-500"
                            />
                          </div>
                          <button
                            onClick={() => {
                              setSelectedReel(reel);
                              setViewMode('embed');
                              setIsManagerOpen(false);
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium shrink-0 flex items-center gap-1 transition-colors cursor-pointer"
                            title="Probar reproducción"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Probar</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PIE CON ACCIONES */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-black/30 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer Reels originales</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsManagerOpen(false)}
                  className="px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Listo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST DE GUARDADO */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-[150] px-4 py-3 rounded-2xl bg-black/90 border border-white/20 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-fade-in backdrop-blur-md">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>¡Reels actualizados y guardados en tu navegador!</span>
        </div>
      )}
    </div>
  );
};

const QuicklysDoubleMarquee: React.FC = () => {
  const marqueeItems = [
    'CREATIVITY',
    'CURIOSITY IS SEXY',
    'ALWAYS'
  ];

  return (
    <div className="w-full overflow-hidden mt-6 sm:mt-10 md:mt-14 mb-4 sm:mb-6 flex flex-col gap-2 sm:gap-4 select-none bg-white">
      {/* TIRA 1: HACIA LA DERECHA */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-marquee-right will-change-transform" style={{ animationDuration: '36s' }}>
          {[0, 1].map((setIdx) => (
            <div key={`d-right-${setIdx}`} className="flex items-center shrink-0">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={`m-r-${setIdx}-${idx}`} className="flex items-center shrink-0">
                  <span 
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[136px] font-light uppercase tracking-[-0.03em] text-black leading-none"
                    style={{
                      fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontWeight: 300
                    }}
                  >
                    {item}
                  </span>
                  <DynamicIsotype className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-black mx-6 sm:mx-10 md:mx-12 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* TIRA 2: HACIA LA IZQUIERDA */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-marquee-left will-change-transform" style={{ animationDuration: '36s' }}>
          {[0, 1].map((setIdx) => (
            <div key={`d-left-${setIdx}`} className="flex items-center shrink-0">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={`m-l-${setIdx}-${idx}`} className="flex items-center shrink-0">
                  <span 
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[136px] font-light uppercase tracking-[-0.03em] text-black leading-none"
                    style={{
                      fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontWeight: 300
                    }}
                  >
                    {item}
                  </span>
                  <DynamicIsotype className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-black mx-6 sm:mx-10 md:mx-12 shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandHeineken = () => (
  <div className="flex flex-col items-center justify-center text-[#737373] hover:text-black transition-colors shrink-0 select-none">
    <div className="flex items-center gap-1.5 mb-0.5">
      <span className="text-[8px] font-bold tracking-wider uppercase">EST.</span>
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
      <span className="text-[8px] font-bold tracking-wider uppercase">1873</span>
    </div>
    <div className="flex items-start">
      <span className="text-2xl sm:text-[28px] font-black tracking-[-0.03em] font-sans">
        Heineken
      </span>
      <span className="text-[9px] font-bold ml-0.5 mt-0.5">®</span>
    </div>
  </div>
);

const BrandFlorDeCana = () => (
  <div className="flex flex-col items-center justify-center text-[#737373] hover:text-black transition-colors shrink-0 select-none">
    <div className="flex flex-col items-center -mb-0.5">
      <svg className="w-12 h-3.5 fill-none stroke-current stroke-[1.4]" viewBox="0 0 50 14">
        <path d="M4 13 Q15 4 25 1 Q35 4 46 13" />
        <path d="M11 13 Q19 6 25 3.5 Q31 6 39 13" />
        <path d="M17 13 Q21 8 25 6 Q29 8 33 13" />
      </svg>
      <span className="text-[6.5px] font-bold tracking-[0.22em] uppercase -mt-0.5">RON</span>
    </div>
    <div className="flex items-center">
      <span className="text-2xl sm:text-[28px] italic font-serif font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
        Flor de Caña
      </span>
      <span className="text-[8px] ml-0.5">®</span>
    </div>
    <span className="text-[6.5px] font-bold tracking-[0.25em] uppercase text-[#888] -mt-0.5">
      EST. 1890
    </span>
  </div>
);

const BrandCientifica = () => (
  <div className="flex flex-col justify-center text-[#737373] hover:text-black transition-colors shrink-0 select-none">
    <span className="text-[8px] font-bold tracking-[0.25em] uppercase leading-none">
      UNIVERSIDAD
    </span>
    <div className="flex items-baseline leading-none my-1">
      <span className="text-2xl sm:text-[28px] font-black tracking-[-0.02em] font-sans uppercase">
        CIENTÍFIC
      </span>
      <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-[3.5] ml-0.5 inline-block -translate-y-0.5" viewBox="0 0 24 24">
        <path d="M3 21 L12 3 L21 21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <span className="text-[7px] font-bold tracking-[0.22em] uppercase text-right leading-none">
      DEL SUR
    </span>
  </div>
);

const BrandTanqueray = () => (
  <div className="flex items-center justify-center text-[#737373] hover:text-black transition-colors shrink-0 select-none px-2">
    <span 
      className="text-3xl sm:text-4xl italic font-serif tracking-tight"
      style={{ fontFamily: '"Playfair Display", "Baskerville", "Times New Roman", Georgia, serif', fontWeight: 600 }}
    >
      Tanqueray
    </span>
  </div>
);

const BrandOakberry = () => (
  <div className="flex items-center justify-center text-[#737373] hover:text-black transition-colors shrink-0 select-none px-2">
    <span 
      className="text-2xl sm:text-[30px] font-black italic tracking-[0.08em] uppercase font-serif"
      style={{
        WebkitTextStroke: '1.2px #737373',
        color: 'transparent',
      }}
    >
      OAKBERRY
    </span>
  </div>
);

const TrustedByVisionariesSection = () => {
  const brandSet = (
    <div className="flex items-center gap-16 sm:gap-24 md:gap-28 lg:gap-32 shrink-0 pr-16 sm:pr-24 md:pr-28 lg:pr-32">
      <BrandHeineken />
      <BrandFlorDeCana />
      <BrandCientifica />
      <BrandTanqueray />
      <BrandOakberry />
    </div>
  );

  return (
    <section className="w-full pt-6 sm:pt-10 pb-20 sm:pb-28 overflow-hidden">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1500px] mx-auto mb-10 sm:mb-14">
        <h3 className="text-sm sm:text-base font-bold tracking-tight text-black uppercase select-none">
          (TRUSTED BY VISIONARIES)
        </h3>
      </div>

      <div className="w-full overflow-hidden select-none">
        <div 
          className="flex w-max animate-marquee-right items-center" 
          style={{ animationDuration: '30s' }}
        >
          {/* Half 1 (50% del ancho del carrusel) */}
          <div className="flex items-center shrink-0">
            {brandSet}
            {brandSet}
          </div>
          {/* Half 2 (50% del ancho del carrusel para loop infinito de izquierda a derecha) */}
          <div className="flex items-center shrink-0">
            {brandSet}
            {brandSet}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPillarsSection = () => {
  const pillars = [
    {
      num: '01',
      title: 'BRAND STRATEGY',
      subhead: "Beyond mere external perceptions, it's a matter of orchestrating an ecosystem.",
      text1: "We make their life easier and their brands louder through creativity, design and experimentation.",
      text2: "We make their life easier and their brands louder through creativity, design and experimentation.",
      videoSrc: '/videos/service_01.mp4',
      posterSrc: '/videos/service_01_thumb.jpg',
    },
    {
      num: '02',
      title: 'BRAND CULTURE',
      subhead: "Beyond mere external perceptions, it's a matter of orchestrating an ecosystem.",
      text1: "We make their life easier and their brands louder through creativity, design and experimentation.",
      text2: "We make their life easier and their brands louder through creativity, design and experimentation.",
      videoSrc: '/videos/service_02.mp4',
      posterSrc: '/videos/service_02_thumb.jpg',
    },
    {
      num: '03',
      title: 'BRAND IDENTITY',
      subhead: "Beyond mere external perceptions, it's a matter of orchestrating an ecosystem.",
      text1: "We make their life easier and their brands louder through creativity, design and experimentation.",
      text2: "We make their life easier and their brands louder through creativity, design and experimentation.",
      videoSrc: '/videos/service_03.mp4',
      posterSrc: '/videos/service_03_thumb.jpg',
    },
    {
      num: '04',
      title: 'BRAND ACTIVATION',
      subhead: "Beyond mere external perceptions, it's a matter of orchestrating an ecosystem.",
      text1: "We make their life easier and their brands louder through creativity, design and experimentation.",
      text2: "We make their life easier and their brands louder through creativity, design and experimentation.",
      videoSrc: '/videos/service_04.mp4',
      posterSrc: '/videos/service_04_thumb.jpg',
    },
  ];

  return (
    <section className="w-full border-t border-black/15">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {pillars.map((item, index) => (
          <div 
            key={item.num}
            className={`py-14 sm:py-20 md:py-24 ${index < pillars.length - 1 ? 'border-b border-black/15' : 'border-b border-black/15'}`}
          >
            {/* CABECERA: TÍTULO Y NÚMERO */}
            <div className="flex items-baseline justify-between gap-4 select-none">
              <h2 className="text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.6vw] font-normal uppercase tracking-[-0.035em] text-black leading-none">
                {item.title}
              </h2>
              <span className="text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.6vw] font-normal tracking-[-0.03em] text-black leading-none">
                {item.num}
              </span>
            </div>

            {/* CONTENIDO INFERIOR: TEXTOS A LA IZQUIERDA Y RECUADRO DE MEDIA A LA DERECHA */}
            <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
              {/* COLUMNA IZQUIERDA: TITULAR SECUNDARIO Y PÁRRAFOS */}
              <div className="md:col-span-8 flex flex-col justify-between h-full">
                <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.03em] font-normal text-black max-w-[24ch]">
                  {item.subhead}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-14 md:mt-20 max-w-[62ch]">
                  <p className="text-xs sm:text-[13px] leading-[1.5] text-black/75 font-normal">
                    {item.text1}
                  </p>
                  <p className="text-xs sm:text-[13px] leading-[1.5] text-black/75 font-normal">
                    {item.text2}
                  </p>
                </div>
              </div>

              {/* COLUMNA DERECHA: RECUADRO DE MEDIA / VIDEO PROVISIONAL */}
              <div className="md:col-span-4 flex md:justify-end">
                <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-none md:w-[280px] lg:w-[330px] aspect-[4/5] bg-[#D8D8D8] overflow-hidden shrink-0 border border-black/5 shadow-xs">
                  <LoopedReelVideo
                    src={item.videoSrc}
                    poster={item.posterSrc}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SpacesWeWorkInSection = () => {
  const spaces = [
    'Branding',
    'Event',
    'Social Media Content',
    'Multimedia Content',
    'Strategy',
    '3D',
    'Web Design',
  ];

  return (
    <section className="w-full pt-16 sm:pt-24 md:pt-32 pb-24 md:pb-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1500px] mx-auto">
      {/* TÍTULO GRANDE DISPLAY */}
      <h2 className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-normal uppercase tracking-[-0.035em] text-black leading-[0.88] select-none">
        <div>SPACES WE</div>
        <div className="mt-2 sm:mt-3">WORK IN</div>
      </h2>

      {/* CUADRÍCULA INFERIOR: RECUADRO CON TRUSTED BY VISIONARIES Y LISTADO */}
      <div className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* COLUMNA IZQUIERDA: ETIQUETA Y RECUADRO DE MEDIA */}
        <div className="md:col-span-5 flex flex-col">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-black uppercase mb-6 sm:mb-8 select-none">
            (TRUSTED BY VISIONARIES)
          </span>

          <div className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] bg-[#D8D8D8] overflow-hidden border border-black/5 shadow-xs">
            <LoopedReelVideo
              src="/videos/spaces_preview.mp4"
              poster="/videos/spaces_preview_thumb.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* COLUMNA DERECHA: LISTADO DE DISCIPLINAS Y ENLACE */}
        <div className="md:col-span-7 flex flex-col md:pl-6 lg:pl-10">
          <ul className="flex flex-col gap-2.5 sm:gap-4 md:gap-5">
            {spaces.map((space) => (
              <li 
                key={space}
                className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-normal tracking-[-0.03em] leading-[1.18] text-black hover:opacity-60 transition-opacity cursor-default select-none"
              >
                {space}
              </li>
            ))}
          </ul>

          <div className="pt-12 sm:pt-16 md:pt-20 mt-auto">
            <a 
              href="#work-together"
              className="inline-flex items-center gap-1.5 text-base sm:text-lg tracking-tight text-black border-b border-black/60 pb-0.5 hover:border-black hover:opacity-70 transition-all font-normal"
            >
              <span>Lets work together</span>
              <span className="text-lg leading-none">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogosGroup = () => {
  const logos = [
    <span key="1" className="text-2xl font-black text-gray-800 tracking-tighter uppercase">Heineken</span>,
    <span key="2" className="text-2xl font-bold text-gray-800 tracking-tight uppercase">Interbank</span>,
    <span key="3" className="text-3xl font-black text-gray-800 italic uppercase">PedidosYa</span>,
    <span key="4" className="text-2xl font-bold text-gray-800 uppercase">Alicorp</span>,
    <span key="5" className="text-3xl font-black text-gray-800 tracking-tighter uppercase">Nike</span>,
    <span key="6" className="text-2xl font-bold text-gray-800 italic uppercase">Spotify</span>,
    <span key="7" className="text-2xl font-black text-gray-800 tracking-widest uppercase">Stripe</span>,
    <span key="8" className="text-3xl font-bold text-gray-800 tracking-tight uppercase">Vercel</span>,
    <span key="9" className="text-2xl font-black text-gray-800 uppercase">TikTok</span>,
  ];

  return (
    <div className="w-full overflow-hidden flex opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      <div className="flex w-max animate-marquee-right whitespace-nowrap" style={{ animationDuration: '40s' }}>
        <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
          {logos}
        </div>
        <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
          {logos}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ className?: string }> = ({ className = "mt-32" }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer
      className={`relative w-full bg-black text-white z-20 pt-24 pb-12 px-6 md:px-12 ${className}`}
      style={{ backgroundColor: '#000000' }}
    >
      <div className="w-full max-w-[1250px] mx-auto">
        <div className="flex justify-between items-start w-full mb-16 pb-12 border-b border-gray-800">
          <DynamicIsotype className="w-16 h-16 md:w-20 md:h-20 text-white" />
          <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-right leading-none">HENRI BARRETT</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Agency</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Discover</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Henri Barrett Hub®</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shop</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Learn</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Articles</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold leading-tight">Get strategy and brand insights straight to your inbox.</h4>
            <input type="email" placeholder="Your email here" className="bg-transparent border-b border-gray-700 pb-2 focus:outline-none focus:border-white transition-colors w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-[10px] text-gray-500 uppercase tracking-widest">
          <span>© 2024/25 Henri Barrett® | Lima | Perú</span>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <Instagram className="w-5 h-5 text-white cursor-pointer" />
            <button onClick={scrollToTop} className="flex items-center gap-2 text-white">
              Back to top <ArrowDown className="w-3 h-3 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- EXPLORE ORBIT SPACE (MODO EXPLORE EN WORK) ---
interface OrbitCard {
  id: string;
  title: string;
  category: string;
  client: string;
  image: string;
  baseAngle: number;
  rx: number;
  ry: number;
  speedMultiplier: number;
  tilt: number;
  w: number;
  aspectH: number;
  depth: number;
}

const ORBIT_CARDS: OrbitCard[] = [
  {
    id: 'orb-1',
    title: 'Monolith Architectural',
    category: 'Campaign',
    client: 'HB Studio Lab',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
    baseAngle: 2.35,
    rx: 430,
    ry: 260,
    speedMultiplier: 0.95,
    tilt: -1.5,
    w: 210,
    aspectH: 1.25,
    depth: 1.2
  },
  {
    id: 'orb-2',
    title: 'TECLAB Packaging',
    category: 'Brand',
    client: 'Teclab',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop',
    baseAngle: 1.85,
    rx: 170,
    ry: 270,
    speedMultiplier: 0.85,
    tilt: 2,
    w: 235,
    aspectH: 0.95,
    depth: 1.1
  },
  {
    id: 'orb-3',
    title: 'Petco Botanical Care',
    category: 'Brand',
    client: 'Petco',
    image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=900&auto=format&fit=crop',
    baseAngle: 3.05,
    rx: 570,
    ry: 200,
    speedMultiplier: 0.75,
    tilt: 0,
    w: 175,
    aspectH: 1.3,
    depth: 1.3
  },
  {
    id: 'orb-4',
    title: 'Gabriela Bento Tote',
    category: 'Brand',
    client: 'Gabriela',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop',
    baseAngle: 2.65,
    rx: 310,
    ry: 180,
    speedMultiplier: 0.9,
    tilt: -2,
    w: 220,
    aspectH: 0.85,
    depth: 0.9
  },
  {
    id: 'orb-5',
    title: 'Puffer Purple Mobile',
    category: 'Campaign',
    client: 'HB Wardrobe',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    baseAngle: 1.15,
    rx: 300,
    ry: 250,
    speedMultiplier: 0.88,
    tilt: 3,
    w: 215,
    aspectH: 0.88,
    depth: 1.0
  },
  {
    id: 'orb-6',
    title: 'Midnight Cocktails & Cards',
    category: 'Event',
    client: 'Rappi Fest',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.85,
    rx: 500,
    ry: 260,
    speedMultiplier: 0.8,
    tilt: -3,
    w: 180,
    aspectH: 1.0,
    depth: 1.2
  },
  {
    id: 'orb-7',
    title: 'Blueprint & Analog Film',
    category: 'Digital',
    client: 'HB Studio Lab',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.55,
    rx: 620,
    ry: 240,
    speedMultiplier: 0.7,
    tilt: 1,
    w: 175,
    aspectH: 1.15,
    depth: 1.4
  },
  {
    id: 'orb-8',
    title: 'Texture Journal Deboss',
    category: 'Digital',
    client: 'Barrett Paper',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop',
    baseAngle: 1.35,
    rx: 270,
    ry: 150,
    speedMultiplier: 1.05,
    tilt: -1,
    w: 185,
    aspectH: 1.15,
    depth: 0.8
  },
  {
    id: 'orb-9',
    title: 'Centria Foil Cards',
    category: 'Brand',
    client: 'Centria',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.45,
    rx: 330,
    ry: 95,
    speedMultiplier: 0.95,
    tilt: 2.5,
    w: 195,
    aspectH: 0.8,
    depth: 0.85
  },
  {
    id: 'orb-10',
    title: 'Neon Monogram Emblem',
    category: 'Brand',
    client: 'HB Monogram',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.15,
    rx: 500,
    ry: 95,
    speedMultiplier: 0.82,
    tilt: -0.5,
    w: 165,
    aspectH: 1.0,
    depth: 1.1
  },
  {
    id: 'orb-11',
    title: 'Heineken Ice Cold Can',
    category: 'Event',
    client: 'Heineken',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.0,
    rx: 640,
    ry: 85,
    speedMultiplier: 0.72,
    tilt: 0,
    w: 155,
    aspectH: 1.3,
    depth: 1.3
  },
  {
    id: 'orb-12',
    title: 'Heineken Star Close-Up',
    category: 'Event',
    client: 'Heineken Fest',
    image: 'https://images.unsplash.com/photo-1605218427368-35b86d9575ae?q=80&w=900&auto=format&fit=crop',
    baseAngle: 0.1,
    rx: 80,
    ry: 40,
    speedMultiplier: 1.15,
    tilt: 0,
    w: 175,
    aspectH: 1.0,
    depth: 0.6
  },
  {
    id: 'orb-13',
    title: 'Tiger Mural Urban',
    category: 'Campaign',
    client: 'Tiger Beer',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop',
    baseAngle: -0.45,
    rx: 300,
    ry: 95,
    speedMultiplier: 0.95,
    tilt: 1,
    w: 220,
    aspectH: 1.15,
    depth: 0.9
  },
  {
    id: 'orb-14',
    title: 'Joyful Double Burger',
    category: 'Brand',
    client: 'Yummy Delivery',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop',
    baseAngle: -0.3,
    rx: 540,
    ry: 135,
    speedMultiplier: 0.78,
    tilt: -1,
    w: 165,
    aspectH: 1.25,
    depth: 1.2
  },
  {
    id: 'orb-15',
    title: 'Editorial Kitchen Recipe',
    category: 'Brand',
    client: 'Brand Drop',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop',
    baseAngle: -0.75,
    rx: 440,
    ry: 210,
    speedMultiplier: 0.88,
    tilt: 2,
    w: 170,
    aspectH: 1.25,
    depth: 1.1
  },
  {
    id: 'orb-16',
    title: 'Barrett Sessions Podium',
    category: 'Event',
    client: 'Barrett Sessions',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop',
    baseAngle: -1.5,
    rx: 180,
    ry: 270,
    speedMultiplier: 0.82,
    tilt: -1,
    w: 225,
    aspectH: 1.0,
    depth: 1.0
  },
  {
    id: 'orb-17',
    title: 'Heineken Kinetic Ribbon',
    category: 'Event',
    client: 'Heineken',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=900&auto=format&fit=crop',
    baseAngle: -2.15,
    rx: 350,
    ry: 250,
    speedMultiplier: 0.9,
    tilt: 1.5,
    w: 180,
    aspectH: 1.25,
    depth: 1.05
  },
  {
    id: 'orb-18',
    title: 'Concrete Flour Burst',
    category: 'Campaign',
    client: 'HB Studio Lab',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop',
    baseAngle: -2.9,
    rx: 230,
    ry: 95,
    speedMultiplier: 1.08,
    tilt: -2,
    w: 215,
    aspectH: 0.9,
    depth: 0.75
  },
  {
    id: 'orb-19',
    title: 'Liquid Fluid Sculpture 3D',
    category: 'Digital',
    client: 'Quicklys 04',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=900&auto=format&fit=crop',
    baseAngle: 3.14,
    rx: 440,
    ry: 85,
    speedMultiplier: 0.92,
    tilt: 1,
    w: 205,
    aspectH: 0.8,
    depth: 1.0
  },
  {
    id: 'orb-20',
    title: 'Pink Studio Lounger',
    category: 'Campaign',
    client: 'Nike Forward',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    baseAngle: 2.7,
    rx: 430,
    ry: 65,
    speedMultiplier: 0.94,
    tilt: -3,
    w: 170,
    aspectH: 1.2,
    depth: 0.95
  }
];

const ExploreOrbitSpace: React.FC<{ selectedCategory: string; onOpenCaseStudy?: (view: AppView) => void }> = ({ selectedCategory, onOpenCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<OrbitCard | null>(null);
  const [selectedModalCard, setSelectedModalCard] = useState<OrbitCard | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const angleOffsetRef = useRef(0);
  const dragStartRef = useRef<{ x: number; y: number; startAngle: number } | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Filtro de categorías
  const isMatch = (card: OrbitCard) => {
    if (!selectedCategory || selectedCategory.startsWith('All Projects')) return true;
    const cat = selectedCategory.toLowerCase().replace(/[^a-z]/g, '');
    const cardCat = card.category.toLowerCase().replace(/[^a-z]/g, '');
    return cardCat.includes(cat) || cat.includes(cardCat);
  };

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Parallax suave con el ratón
      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.04;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.04;

      // Avance orbital continuo si no está en pausa ni arrastrando
      if (!isPaused && !dragStartRef.current) {
        angleOffsetRef.current += 0.09 * dt;
      }

      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        // Factor de escala responsivo
        const scaleFactor = Math.min(Math.max(rect.width / 1400, 0.55), 1.15);

        ORBIT_CARDS.forEach((card, i) => {
          const el = cardElementsRef.current[i];
          if (!el) return;

          // Ángulo orbital individual
          const cardAngle = card.baseAngle + angleOffsetRef.current * card.speedMultiplier;

          const rx = card.rx * scaleFactor;
          const ry = card.ry * scaleFactor;

          const x = cx + Math.cos(cardAngle) * rx + mousePosRef.current.x * (card.depth * 28);
          const y = cy + Math.sin(cardAngle) * ry + mousePosRef.current.y * (card.depth * 18);

          const currentTilt = card.tilt + Math.sin(time * 0.0012 + i) * 1.5;
          const isMobile = rect.width < 768;
          const depthScale = (1 + Math.sin(cardAngle) * 0.06) * (isMobile ? 0.78 : 1);

          const w = card.w * (isMobile ? 0.78 : 1);
          const h = w * card.aspectH;

          if (hoveredCard?.id === card.id) {
            el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) rotate(0deg) scale(${depthScale * 1.1})`;
            el.style.zIndex = '90';
          } else {
            el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) rotate(${currentTilt}deg) scale(${depthScale})`;
            el.style.zIndex = `${Math.round(20 + Math.sin(cardAngle) * 15)}`;
          }
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, hoveredCard]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startAngle: angleOffsetRef.current,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mousePosRef.current.targetX = normX;
      mousePosRef.current.targetY = normY;
    }

    if (!isDragging || !dragStartRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    angleOffsetRef.current = dragStartRef.current.startAngle + deltaX * 0.0035;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      dragStartRef.current = null;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
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
        className={`w-full relative h-[780px] sm:h-[900px] md:h-[1050px] lg:h-[1150px] overflow-hidden ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* CONTROLES SUPERIORES FLOTANTES */}
        <div className="absolute top-4 right-6 sm:right-10 flex items-center gap-3.5 z-40 pointer-events-auto">
          <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider uppercase text-black/40">
            (ARRASTRA PARA ROTAR • HAZ HOVER PARA EXPLORAR)
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-black text-[11px] font-bold tracking-wider uppercase shadow-sm hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            title={isPaused ? "Reanudar órbita" : "Pausar órbita"}
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            <span>{isPaused ? 'Reanudar' : 'Pausar'}</span>
          </button>
        </div>

        {/* TARJETAS ORBITANTES */}
        {ORBIT_CARDS.map((card, idx) => {
          const matched = isMatch(card);
          return (
            <div
              key={card.id}
              ref={(el) => { cardElementsRef.current[idx] = el; }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedModalCard(card);
              }}
              onMouseEnter={() => setHoveredCard(card)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute top-0 left-0 will-change-transform group cursor-pointer transition-opacity duration-500 ${
                matched ? 'opacity-100' : 'opacity-25 grayscale'
              }`}
              style={{
                width: `${card.w}px`,
                height: `${card.w * card.aspectH}px`,
              }}
            >
              <div className="w-full h-full relative overflow-hidden bg-[#e4e4e4] shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-black/10 group-hover:border-black/30 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-[2px] sm:rounded-[3px]">
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />

                {/* Overlay de información al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white pointer-events-none">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/75">{card.category}</span>
                  <span className="text-sm sm:text-base font-semibold leading-tight line-clamp-1 mt-0.5">{card.title}</span>
                  <span className="text-[11px] text-white/60 mt-0.5">{card.client}</span>
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

      {/* MODAL DETALLE AL HACER CLIC EN CUALQUIER TARJETA */}
      {selectedModalCard && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedModalCard(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-gray-100">
              <img src={selectedModalCard.image} alt={selectedModalCard.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedModalCard(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{selectedModalCard.category} • {selectedModalCard.client}</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black mt-1">{selectedModalCard.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Henri Barrett® Selected Project • Vista Explore Orbit</p>
              </div>
              <div className="flex items-center gap-3">
                {selectedModalCard.title.toLowerCase().includes('umana') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModalCard(null);
                      onOpenCaseStudy('case-study-umana');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                <button 
                  onClick={() => setSelectedModalCard(null)}
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

// --- LIST ROULETTE VIEW (VISTA LIST EN WORK) ---
interface RouletteProject {
  id: string;
  name: string;
  category: string;
  image: string;
  client?: string;
}

const ROULETTE_PROJECTS: RouletteProject[] = [
  {
    id: 'yummy',
    name: 'YUMMY',
    category: 'Brand',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop',
    client: 'Yummy Delivery'
  },
  {
    id: 'heineken',
    name: 'HEINEKEN',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1605218427368-35b86d9575ae?q=80&w=1200&auto=format&fit=crop',
    client: 'Heineken Fest'
  },
  {
    id: 'umana',
    name: 'UMANA',
    category: 'Brand',
    image: '/src/assets/images/umana_powder_cube_1788889215309.jpg',
    client: 'Umana Beauty'
  },
  {
    id: 'rappi',
    name: 'RAPPI',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    client: 'Rappi Fest'
  },
  {
    id: 'petco',
    name: 'PETCO',
    category: 'Brand',
    image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=1200&auto=format&fit=crop',
    client: 'Petco Botanicals'
  },
  {
    id: 'tiger',
    name: 'TIGER',
    category: 'Campaign',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    client: 'Tiger Beer'
  },
  {
    id: 'teclab',
    name: 'TECLAB',
    category: 'Brand',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    client: 'Teclab Packaging'
  },
  {
    id: 'eureka',
    name: 'EUREKA',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop',
    client: 'Eureka Creative'
  }
];

const ListRouletteView: React.FC<{
  viewMode: 'grid' | 'explore' | 'list';
  setViewMode: (mode: 'grid' | 'explore' | 'list') => void;
  onOpenCaseStudy?: (view: AppView) => void;
}> = ({ viewMode, setViewMode, onOpenCaseStudy }) => {
  const NUM_PROJECTS = ROULETTE_PROJECTS.length; // 8 proyectos
  const ITEM_HEIGHT = 104; // Altura exacta en px de cada fila de texto tipográfico
  const CYCLE_HEIGHT = NUM_PROJECTS * ITEM_HEIGHT; // 832px
  const REPEATS = 5; // 40 items total para un loop virtual infinito e imperceptible
  const EXTENDED_LIST = Array.from({ length: REPEATS }, () => ROULETTE_PROJECTS).flat();

  // En el ciclo central (Cycle 2, indices 16..23), UMANA está en el índice 18 (16 + 2).
  // En la captura de referencia, UMANA está exactamente en la fila focal (y = 170px),
  // y YUMMY sangra cortado por el borde superior (y = -38px).
  const FOCAL_Y = 170;
  const INITIAL_OFFSET = FOCAL_Y - (18 * ITEM_HEIGHT); // 170 - 1872 = -1702px

  const [activeProject, setActiveProject] = useState<RouletteProject>(ROULETTE_PROJECTS[2]);
  const [hoveredProject, setHoveredProject] = useState<RouletteProject | null>(null);
  const [selectedModal, setSelectedModal] = useState<RouletteProject | null>(null);

  const [scrollOffset, setScrollOffset] = useState(INITIAL_OFFSET);
  const targetOffsetRef = useRef(INITIAL_OFFSET);
  const currentOffsetRef = useRef(INITIAL_OFFSET);
  const currentActiveIdRef = useRef(ROULETTE_PROJECTS[2].id);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startOffsetRef = useRef(INITIAL_OFFSET);
  const wordsColRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animación suave de lerp con WRAPPING INFINITO CONTINUO (sin inicio ni fin)
  useEffect(() => {
    let animId: number;
    const loop = () => {
      // Lerp físico de inercia
      currentOffsetRef.current += (targetOffsetRef.current - currentOffsetRef.current) * 0.14;

      // WRAPPING INFINITO:
      // Cuando targetOffset se desplaza más de medio ciclo de distancia del punto central,
      // sumamos o restamos exactamente CYCLE_HEIGHT (8 * ITEM_HEIGHT).
      // Como la lista se repite idéntica cada CYCLE_HEIGHT, este salto de variables
      // es 100% imperceptible para el usuario visualmente: rueda por siempre sin límite.
      while (targetOffsetRef.current < INITIAL_OFFSET - CYCLE_HEIGHT / 2) {
        targetOffsetRef.current += CYCLE_HEIGHT;
        currentOffsetRef.current += CYCLE_HEIGHT;
        if (isDraggingRef.current) {
          startOffsetRef.current += CYCLE_HEIGHT;
        }
      }
      while (targetOffsetRef.current > INITIAL_OFFSET + CYCLE_HEIGHT / 2) {
        targetOffsetRef.current -= CYCLE_HEIGHT;
        currentOffsetRef.current -= CYCLE_HEIGHT;
        if (isDraggingRef.current) {
          startOffsetRef.current -= CYCLE_HEIGHT;
        }
      }

      setScrollOffset(currentOffsetRef.current);

      // Determinación automática del proyecto que cruza la línea focal al scrollear
      const relativeDist = FOCAL_Y - currentOffsetRef.current;
      const rawIdx = Math.round(relativeDist / ITEM_HEIGHT);
      const projIdx = ((rawIdx % NUM_PROJECTS) + NUM_PROJECTS) % NUM_PROJECTS;
      const focalProj = ROULETTE_PROJECTS[projIdx];
      if (focalProj && focalProj.id !== currentActiveIdRef.current) {
        currentActiveIdRef.current = focalProj.id;
        setActiveProject(focalProj);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [CYCLE_HEIGHT, INITIAL_OFFSET, ITEM_HEIGHT, NUM_PROJECTS]);

  // Manejo de scroll wheel sobre la ruleta para desplazarla suavemente sin bloquear el scroll de la página
  useEffect(() => {
    const wordsCol = wordsColRef.current;
    if (!wordsCol) return;

    const handleWheel = (e: WheelEvent) => {
      // Scroll hacia arriba o abajo sin capturar exclusivamente el scroll de la ventana
      targetOffsetRef.current -= e.deltaY * 0.95;
    };

    wordsCol.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      wordsCol.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Manejo de drag táctil y cursor con arrastre
  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    startOffsetRef.current = targetOffsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaY = e.clientY - startYRef.current;
    targetOffsetRef.current = startOffsetRef.current + deltaY * 1.1;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const displayedProject = hoveredProject || activeProject;

  return (
    <div 
      ref={containerRef}
      className="w-full relative bg-white select-none overflow-hidden -mt-[88px] md:-mt-[112px] pt-2 md:pt-4 h-[800px] md:h-[860px] lg:h-[890px]"
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col md:flex-row justify-between items-start h-full relative">
        
        {/* COLUMNA IZQUIERDA: RULETA DE PALABRAS GIGANTES INFINITA */}
        <div 
          ref={wordsColRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="w-full md:w-[58%] lg:w-[60%] h-full relative overflow-hidden z-10 cursor-grab active:cursor-grabbing"
        >
          <div 
            className="flex flex-col will-change-transform"
            style={{
              transform: `translate3d(0, ${scrollOffset}px, 0)`
            }}
          >
            {EXTENDED_LIST.map((proj, idx) => {
              const isCurrent = displayedProject.id === proj.id;
              return (
                <div
                  key={`${proj.id}-${idx}`}
                  onMouseEnter={() => {
                    setHoveredProject(proj);
                  }}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => {
                    setActiveProject(proj);
                    // Centrar suavemente el proyecto pulsado en la posición focal
                    targetOffsetRef.current = FOCAL_Y - (idx * ITEM_HEIGHT);
                  }}
                  className="w-fit h-[104px] flex items-center cursor-pointer transition-colors duration-150 group shrink-0"
                >
                  <h2 
                    className={`text-[12vw] sm:text-[10vw] md:text-[88px] lg:text-[104px] xl:text-[112px] uppercase tracking-[-0.035em] leading-none transition-colors duration-150 select-none ${
                      isCurrent 
                        ? 'text-black font-[500]' 
                        : 'text-[#cfd3db] group-hover:text-black/75 font-normal'
                    }`}
                    style={{
                      fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                    }}
                  >
                    {proj.name}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMNA DERECHA: TARJETA PREVIEW FIJA + SELECTOR DE VISTAS (BAJADA PARA DAR AIRE RESPECTO AL MENÚ) */}
        <div className="w-full md:w-[40%] lg:w-[38%] z-20 pt-12 sm:pt-16 md:pt-[172px] lg:pt-[182px] flex flex-col items-start md:items-end">
          <div className="w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[395px] flex flex-col">
            
            {/* Imagen del proyecto al costado */}
            <div 
              onClick={() => setSelectedModal(displayedProject)}
              className="w-full aspect-square bg-[#ececec] overflow-hidden relative shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/5 rounded-[2px] cursor-pointer group"
              title="Clic para ver en grande"
            >
              <img
                src={displayedProject.image}
                alt={displayedProject.name}
                className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105"
                key={displayedProject.id}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoveUpRight className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Categoría y Nombre del proyecto al costado */}
            <div className="flex flex-col mt-4">
              <span className="text-[13px] font-normal tracking-wide text-gray-500 capitalize">
                {displayedProject.category}
              </span>
              <div className="flex items-baseline justify-between gap-3 mt-0.5">
                <span className="text-[16px] sm:text-[18px] font-bold text-black uppercase tracking-tight">
                  {displayedProject.name}
                </span>
                {displayedProject.name.toLowerCase().includes('umana') && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-umana');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-60 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
              </div>
            </div>

            {/* Botonera de Vistas: Grid | Explore | List (con List activo) */}
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mt-7 w-fit">
              <button
                onClick={() => setViewMode('grid')}
                className="px-6 py-2 rounded-full text-xs font-semibold text-black/70 hover:text-black hover:bg-black/5 transition-all cursor-pointer"
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('explore')}
                className="px-6 py-2 rounded-full text-xs font-semibold text-black/70 hover:text-black hover:bg-black/5 transition-all cursor-pointer"
              >
                Explore
              </button>
              <button
                onClick={() => setViewMode('list')}
                className="px-6 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white shadow-sm cursor-pointer"
              >
                List
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* MODAL DETALLE AL HACER CLIC EN LA IMAGEN PREVIEW */}
      {selectedModal && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedModal(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-gray-100">
              <img src={selectedModal.image} alt={selectedModal.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{selectedModal.category} • {selectedModal.client || 'Henri Barrett®'}</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-black mt-1">{selectedModal.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Henri Barrett® Selected Project • Vista List Roulette</p>
              </div>
              <div className="flex items-center gap-3">
                {selectedModal.name.toLowerCase().includes('umana') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-umana');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                <button 
                  onClick={() => setSelectedModal(null)}
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

// --- BAJADA EDITORIAL PERMANENTE (SIEMPRE VISIBLE EN WORK) ---
const EditorialStatementText: React.FC = () => {
  return (
    <div className="w-full relative select-none z-20">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pt-10 md:pt-16 pb-10 md:pb-14">
        <p 
          className="text-[32px] sm:text-[46px] md:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[74px] font-normal tracking-[-0.03em] text-black !text-black normal-case max-w-[1240px]"
          style={{
            fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
            color: '#000000',
            opacity: 1,
            visibility: 'visible',
            display: 'block'
          }}
        >
          As architects of brand narratives, we amplify the voice to ensure they don't just talk but roar.
        </p>
      </div>
    </div>
  );
};

const DynamicIsotype = ({ className = "w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9", style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <svg className={`${className} shrink-0`} style={style} viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.1777 17.6496C17.1777 19.5527 18.7234 21.0981 20.6268 21.0981C22.5301 21.0981 24.0758 19.5527 24.0758 17.6496C24.0758 15.7466 22.5301 14.2012 20.6268 14.2012C18.7234 14.2012 17.1777 15.7466 17.1777 17.6496Z" fill="currentColor"/>
      <path d="M19.5983 23.2383L19.0352 32.2972L22.2704 32.2931L21.7031 23.2424L19.5983 23.2383Z" fill="currentColor"/>
      <path d="M11.9238 29.5276L14.7316 31.1429L18.7643 23.0212L16.9473 21.9648L11.9238 29.5276Z" fill="currentColor"/>
      <path d="M15.2856 19.5312L7.1543 23.5716L8.77398 26.3747L16.3298 21.3562L15.2856 19.5312Z" fill="currentColor"/>
      <path d="M15.0604 16.5963L6 16.0332L6.00411 19.2679L15.0563 18.7007L15.0604 16.5963Z" fill="currentColor"/>
      <path d="M16.3378 13.9445L8.76967 8.92188L7.1582 11.7291L15.2772 15.7613L16.3378 13.9445Z" fill="currentColor"/>
      <path d="M18.7682 12.2843L14.7272 4.1543L11.9277 5.77372L16.943 13.3283L18.7682 12.2843Z" fill="currentColor"/>
      <path d="M21.7031 12.0589L22.2704 3L19.0352 3.00411L19.5983 12.0548L21.7031 12.0589Z" fill="currentColor"/>
      <path d="M29.3776 5.7694L26.574 4.1582L22.5371 12.2759L24.3582 13.3363L29.3776 5.7694Z" fill="currentColor"/>
      <path d="M26.019 15.7671L34.1503 11.7268L32.5265 8.92773L24.9707 13.9422L26.019 15.7671Z" fill="currentColor"/>
      <path d="M26.2422 18.7007L35.3026 19.2679L35.2984 16.0332L26.2463 16.5963L26.2422 18.7007Z" fill="currentColor"/>
      <path d="M24.9668 21.356L32.5308 26.3745L34.1464 23.5714L26.0233 19.5352L24.9668 21.356Z" fill="currentColor"/>
      <path d="M22.5371 23.0169L26.574 31.1468L29.3776 29.5233L24.3623 21.9688L22.5371 23.0169Z" fill="currentColor"/>
    </svg>
  );
};

const DynamicLogotype = ({ className = "", style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <svg className={`${className} shrink-0`} style={{ width: "146px", height: "auto", ...style }} aria-hidden="true" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5148 8.65584H6.67449V3.22852H3V18.0174H6.67449V12.1751H10.5148V18.0174H14.1855V3.22852H10.5148V8.65584Z" fill="currentColor"/>
      <path d="M15.5664 18.0174H25.5384V14.6161H19.2371V12.1384H24.7734V8.73315H19.2371V6.62975H25.5384V3.22852H15.5664V18.0174Z" fill="currentColor"/>
      <path d="M34.5523 10.9383L30.8288 3.36277L30.761 3.22852H26.834V18.0174H30.354V10.0676L33.9908 17.879L34.0586 18.0174H37.8348V3.22852H34.5523V10.9383Z" fill="currentColor"/>
      <path d="M49.6006 7.99675C49.6006 4.87624 47.7276 3.22852 44.185 3.22852H39.0859V18.0214H42.7567V13.0254H43.9023L46.3256 18.0214H50.4486L47.4299 12.2402C48.8243 11.4102 49.6006 9.94961 49.6006 8.00082V7.99675ZM43.94 9.77467H42.7567V6.47108H43.94C45.6473 6.47108 45.9977 7.08135 45.9977 7.99675C45.9977 9.17661 45.3043 9.77467 43.94 9.77467Z" fill="currentColor"/>
      <path d="M54.7977 3.22852H51.127V18.0214H54.7977V3.22852Z" fill="currentColor"/>
      <path d="M68.749 10.1164C69.695 9.4614 70.1849 8.13915 70.1849 7.03253C70.1849 4.51008 68.4438 3.22852 65.018 3.22852H60.1602V18.0214H65.41C68.798 18.0214 70.8256 16.3534 70.8256 13.5543C70.8256 11.9147 70.0756 10.686 68.7528 10.1164H68.749ZM63.8309 6.39378H64.9163C66.3032 6.39378 66.5896 6.85351 66.5896 7.54515C66.5896 8.43615 66.0243 8.88775 64.905 8.88775H63.8309V6.39378ZM65.165 14.8521H63.8309V11.9391H65.165C66.974 11.9391 67.2227 12.6023 67.2227 13.3183C67.2227 13.9733 67.0117 14.848 65.165 14.848V14.8521Z" fill="currentColor"/>
      <path d="M79.2642 3.22852H75.0734L70.9165 17.6878L70.8223 18.0174H74.5985L75.3523 14.7667H78.8798L79.6297 18.0174H83.5153L79.3169 3.40753L79.2642 3.22852ZM76.0871 11.5811L76.2869 10.7145C76.5695 9.57939 76.8522 8.25307 77.1085 7.00812C77.1839 7.34987 77.2592 7.69569 77.3346 8.04557C77.5343 8.95284 77.7378 9.89266 77.9414 10.7104L78.1411 11.5811H76.0871Z" fill="currentColor"/>
      <path d="M94.7159 7.99675C94.7159 4.87624 92.8428 3.22852 89.3002 3.22852H84.2012V18.0214H87.8719V13.0254H89.0176L91.4409 18.0214H95.5638L92.5489 12.2402C93.9433 11.4102 94.7196 9.94961 94.7196 8.00082L94.7159 7.99675ZM89.0553 9.77467H87.8719V6.47108H89.0553C90.7625 6.47108 91.113 7.08135 91.113 7.99675C91.113 9.17661 90.4195 9.77467 89.0553 9.77467Z" fill="currentColor"/>
      <path d="M106.761 7.99675C106.761 4.87624 104.888 3.22852 101.345 3.22852H96.2461V18.0214H99.9168V13.0254H101.063L103.486 18.0214H107.609L104.594 12.2402C105.988 11.4102 106.765 9.94961 106.765 8.00082L106.761 7.99675ZM101.1 9.77467H99.9168V6.47108H101.1C102.807 6.47108 103.158 7.08135 103.158 7.99675C103.158 9.17661 102.464 9.77467 101.1 9.77467Z" fill="currentColor"/>
      <path d="M108.287 3.22852V18.0174H117.155H118.259V14.6161H117.155H111.958V12.1384H116.39H117.494V8.73315H116.39H111.958V6.62975H117.155H118.259V3.22852H117.155H108.287Z" fill="currentColor"/>
      <path d="M119.473 6.62975H123.057V18.0174H126.731V6.62975H130.315V3.22852H119.473V6.62975Z" fill="currentColor"/>
      <path d="M147 7.38834C145.617 7.38834 144.488 6.25278 144.488 4.69417C144.488 3.14669 145.617 2 147 2C148.382 2 149.512 3.14669 149.512 4.69417C149.512 6.25278 148.382 7.38834 147 7.38834ZM147 6.99869C148.203 6.99869 149.079 6.03012 149.079 4.69417C149.079 3.36935 148.203 2.38965 147 2.38965C145.797 2.38965 144.921 3.36935 144.921 4.69417C144.921 6.03012 145.797 6.99869 147 6.99869ZM146.018 6.08579V3.23576H147.264C147.76 3.23576 148.119 3.56974 148.119 4.03733C148.119 4.36018 147.96 4.62737 147.612 4.71644V4.72757C147.876 4.8055 148.002 4.96136 148.034 5.30648C148.076 5.70727 148.055 6.00786 148.15 6.05239V6.08579H147.633C147.559 6.05239 147.528 5.72953 147.517 5.42894C147.506 5.12835 147.338 4.9391 147 4.9391H146.557V6.08579H146.018ZM146.557 3.70334V4.50491H147.148C147.443 4.50491 147.591 4.33792 147.591 4.10412C147.591 3.87033 147.443 3.70334 147.148 3.70334H146.557Z" fill="currentColor"/>
      <path d="M131.389 3.22852V6.62975H134.973V18.0174H138.643V6.62975H142.227V3.22852H131.389Z" fill="currentColor"/>
    </svg>
  );
};

// --- NAVEGACIÓN PRINCIPAL ---
// --- ELEMENTOS DEL MENÚ COMPLETO (RULETA FULL SCREEN) ---
interface FullMenuItem {
  id: string;
  num: string;
  label: string;
  view: AppView;
}

const FULL_MENU_ITEMS: FullMenuItem[] = [
  { id: 'work', num: '01.', label: 'WORK', view: 'work' },
  { id: 'services', num: '02.', label: 'SERVICES', view: 'services' },
  { id: 'quicklys', num: '03.', label: 'QUICKLYS', view: 'quicklys' },
  { id: 'about', num: '04.', label: 'ABOUT US', view: 'about' },
  { id: 'work-with-us', num: '05.', label: 'WORK WITH US', view: 'work-with-us' },
];

const FullScreenMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  setCurrentView: (view: AppView) => void;
}> = ({ isOpen, onClose, currentView, setCurrentView }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [centerIdx, setCenterIdx] = useState<number>(1);

  // Repetimos los items para permitir una rotación infinita en ruleta
  const REPEATED_MENU = [
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
  ];

  // Cerrar con tecla Escape y bloquear scroll del body mientras el menú está abierto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      // Posicionar inicialmente en el item correspondiente
      setTimeout(() => {
        if (scrollRef.current) {
          const itemHeight = 120;
          const targetIndex = FULL_MENU_ITEMS.findIndex(item => item.view === currentView);
          const activeIdxInSet = FULL_MENU_ITEMS.length * 2 + (targetIndex >= 0 ? targetIndex : 0);
          scrollRef.current.scrollTop = activeIdxInSet * itemHeight - (scrollRef.current.clientHeight / 2) + (itemHeight / 2);
          setCenterIdx(activeIdxInSet);
        }
      }, 60);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, currentView]);

  // Al hacer scroll, calcular el item que cruza el centro de la pantalla
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const centerY = container.scrollTop + container.clientHeight / 2;
    const itemHeight = 120;
    const approxIndex = Math.round(centerY / itemHeight);
    setCenterIdx(approxIndex);

    // Ruleta continua: si se llega a los bordes, recolocar imperceptiblemente
    const totalItems = REPEATED_MENU.length;
    const singleSetCount = FULL_MENU_ITEMS.length;
    if (container.scrollTop < singleSetCount * itemHeight * 0.5) {
      container.scrollTop += singleSetCount * itemHeight * 2;
    } else if (container.scrollTop > (totalItems - singleSetCount * 1.5) * itemHeight) {
      container.scrollTop -= singleSetCount * itemHeight * 2;
    }
  };

  const handleSelectItem = (view: 'home' | 'work' | 'services' | 'quicklys' | 'work-with-us') => {
    setCurrentView(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-[#0A0A0A] text-white flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ willChange: 'transform' }}
    >
      {/* HEADER: LOGO HENRI BARRETT A LA IZQUIERDA Y CLOSE CON X A LA DERECHA */}
      <div className="w-full px-6 sm:px-10 md:px-16 py-7 sm:py-8 md:py-10 flex items-center justify-between z-30 shrink-0 select-none">
        <button
          onClick={() => handleSelectItem('home')}
          className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity cursor-pointer group focus:outline-hidden"
          title="Henri Barrett - Home"
        >
          <DynamicIsotype className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
          <DynamicLogotype style={{ width: "170px" }} className="text-white" />
        </button>

        <button
          onClick={onClose}
          className="group flex items-center gap-2.5 text-white hover:opacity-75 transition-opacity cursor-pointer text-base sm:text-lg font-medium tracking-wide focus:outline-hidden"
          aria-label="Cerrar menú"
        >
          <span className="border-b border-white/60 group-hover:border-white pb-0.5 transition-colors">Close</span>
          <X className="w-5 h-5 text-white stroke-[2.2] transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>

      {/* RULETA VERTICAL DE PALABRAS GIGANTES */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex-1 overflow-y-auto no-scrollbar relative flex flex-col py-[20vh] px-6 sm:px-10 md:px-16 lg:px-24 select-none"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 my-auto">
          {REPEATED_MENU.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isCentered = hoveredIdx === null && centerIdx === idx;
            const isHighlighted = isHovered || isCentered;

            return (
              <div
                key={`${item.id}-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleSelectItem(item.view)}
                className="group flex items-baseline cursor-pointer transition-all duration-300 ease-out py-1.5 sm:py-2.5"
              >
                {/* Número a la izquierda (01., 02., 03., 04., 05.) */}
                <span 
                  className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-light font-mono mr-4 sm:mr-8 md:mr-12 w-8 sm:w-12 md:w-16 text-right shrink-0 transition-colors duration-300 ${
                    isHighlighted ? 'text-white/80' : 'text-white/20'
                  }`}
                >
                  {item.num}
                </span>

                {/* Palabra gigante en mayúsculas estilo display tipo ruleta */}
                <span
                  className={`text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.2vw] font-bold tracking-[-0.03em] leading-[0.92] uppercase transition-all duration-300 ${
                    isHighlighted 
                      ? 'text-white scale-[1.01] origin-left' 
                      : 'text-[#242424] sm:text-[#272727] group-hover:text-white'
                  }`}
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER: INDICADOR DE AÑO 2024/25 EN LA ESQUINA INFERIOR DERECHA */}
      <div className="w-full px-6 sm:px-10 md:px-16 py-6 md:py-8 flex items-center justify-end z-30 shrink-0 pointer-events-none select-none">
        <span className="text-xs sm:text-sm text-white/25 font-mono tracking-widest">
          2024/25
        </span>
      </div>
    </div>
  );
};

const MainNav: React.FC<{
  currentView: string;
  setCurrentView: (view: AppView) => void;
  isHome?: boolean;
  navRef?: React.RefObject<HTMLElement | null>;
  bgColor?: string;
}> = ({ currentView, setCurrentView, isHome, navRef, bgColor = 'bg-transparent' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const accumulatedScroll = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);

      // Calculamos la distancia absoluta recorrida (tanto scroll-down como scroll-up)
      // para que el isotipo SIEMPRE avance en el mismo sentido (horario / de izquierda a derecha)
      const delta = Math.abs(scrollY - lastScrollY.current);
      accumulatedScroll.current += delta;
      lastScrollY.current = scrollY;

      // Rotación suave y pausada por pasos según la distancia acumulada:
      const stepSize = 90;
      const notch = Math.floor(accumulatedScroll.current / stepSize);
      setRotation(notch * 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    accumulatedScroll.current = 0;
    setRotation(0);
  }, [currentView]);

  // Barra de navegación siempre sin fondo (completamente transparente)
  const navClasses = isHome 
    ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent ${isScrolled ? 'py-6 md:py-8' : 'py-8 md:py-12'}`
    : `sticky top-0 z-40 w-full transition-all duration-300 border-none bg-transparent ${isScrolled ? 'py-6 md:py-8' : 'py-7 md:py-8'}`;

  return (
    <>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <nav 
        ref={navRef} 
        className={`${navClasses} px-6 sm:px-10 md:px-16 flex items-center justify-between gap-4`}
      >
        <div className={`w-full ${isHome ? 'max-w-[1400px] mx-auto' : ''} flex justify-between items-center text-current gap-4 transition-all duration-300`}>
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-1.5 sm:gap-2 text-left cursor-pointer focus:outline-none shrink-0" title="Ir a inicio">
            <div className="relative flex items-start">
              <DynamicIsotype 
                className="origin-center" 
                style={{ 
                  width: isScrolled ? '65px' : '59.3px', 
                  height: isScrolled ? '65px' : '59.3px',
                  transformOrigin: 'center center',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'width 0.3s ease, height 0.3s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)'
                }} 
              />
              {isScrolled && <span className="absolute text-[10px] font-bold" style={{ right: '5px', top: '5px' }}>®</span>}
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[250px] opacity-100'}`}>
              <DynamicLogotype style={{ width: '205px' }} />
            </div>
          </button>
          
          <div className={`flex items-center gap-4 sm:gap-7 md:gap-11 lg:gap-14 font-medium tracking-[0.03em] overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-0 opacity-0 overflow-hidden' : 'max-w-[800px] opacity-100 text-[0.92rem] sm:text-[1rem] md:text-[1.15rem] py-1 overflow-x-auto no-scrollbar'}`}>
            <button onClick={() => setCurrentView('about')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'about' ? 'font-bold' : ''}`}>About Us</button>
            <button onClick={() => setCurrentView('work')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'work' ? 'font-bold' : ''}`}>Work</button>
            <button onClick={() => setCurrentView('services')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'services' ? 'font-bold' : ''}`}>Services</button>
            <button onClick={() => setCurrentView('quicklys')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'quicklys' ? 'font-bold' : ''}`}>Quicklys</button>
            <button onClick={() => setCurrentView('work-with-us')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'work-with-us' ? 'font-bold' : ''}`}>Contact</button>
          </div>

          <div className={`flex items-center ${isScrolled ? 'gap-6 sm:gap-8 md:gap-12' : 'gap-4'} text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-bold tracking-[0.03em] shrink-0 transition-all duration-300`}>
            {isScrolled && (
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="relative group pb-0.5 transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap cursor-pointer"
                title="Abrir menú"
              >
                Menu
              </button>
            )}
            <button onClick={() => setCurrentView('work-with-us')} className="relative group pb-0.5 transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap">
              Work with us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

// --- SECCIÓN: ARTÍCULOS DE QUICKLYS ---
interface QuicklysArticle {
  id: string;
  category: 'Brand' | 'Event' | string;
  categoryBg: string;
  title: string;
  image: string;
  readTime: string;
  date: string;
  content: string[];
}

const QUICKLYS_ARTICLES: QuicklysArticle[] = [
  {
    id: 'ai-visionary-brands-brand',
    category: 'Brand',
    categoryBg: 'bg-[#FF1A1A]',
    title: 'Can artificial intelligence make visionary brands?',
    image: '/images/article_brand_ai_1788899307839.jpg',
    readTime: '4 min read',
    date: 'Sep 2026',
    content: [
      'In an era where generative intelligence can synthesize infinite visual variations in seconds, true brand vision remains fundamentally human. What distinguishes enduring iconography from visual static is intentionality, cultural depth, and visceral resonance.',
      'Visionary branding is never merely algorithmic pattern-matching. It requires the audacity to introduce dissonance, poetry, and authentic perspective that challenges the status quo rather than flattening into statistical averages.',
      'At Henri Barrett, we view AI not as an autonomous author, but as an expansive canvas that accelerates execution while demanding even sharper creative governance.'
    ]
  },
  {
    id: 'ai-visionary-brands-event',
    category: 'Event',
    categoryBg: 'bg-[#902BF5]',
    title: 'Can artificial intelligence make visionary brands?',
    image: '/images/article_event_ai_1788899317429.jpg',
    readTime: '6 min read',
    date: 'Aug 2026',
    content: [
      'During our keynote presentation at the Creative Summit, our founding partners dismantled prevailing assumptions regarding synthetic aesthetics in contemporary brand design.',
      'The keynote featured live case studies demonstrating how automated rendering workflows allow creative directors to devote more energy to brand soul, philosophical positioning, and typography rigor.',
      'The conclusion was unanimous: technology scales speed, but taste scales culture. Visionary agencies will be those that pair machine intelligence with unmatched editorial audacity.'
    ]
  }
];

export const QuicklysArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<QuicklysArticle | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="w-full bg-white relative block pt-4 sm:pt-8 md:pt-12 pb-24 sm:pb-32 md:pb-44 overflow-hidden select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* TÍTULO DE SECCIÓN: LASTEST ARTICLES */}
        <div className="w-full mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-black font-sans">
            LASTEST ARTICLES
          </h2>
        </div>

        {/* GRILLA EDITORIAL ASIMÉTRICA */}
        <div className="w-full flex flex-col">
          
          {/* ARTÍCULO 1: ALINEADO A LA DERECHA (BRAND) */}
          <div className="w-full flex justify-end">
            <article 
              className="w-full sm:w-[85%] md:w-[62%] lg:w-[54%] max-w-[620px] flex flex-col group cursor-none"
              onClick={() => setSelectedArticle(QUICKLYS_ARTICLES[0])}
              onMouseEnter={(e) => {
                if (cursorRef.current) {
                  cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                }
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-full aspect-square relative bg-[#ECECEC] overflow-hidden shadow-sm">
                {/* BADGE DE CATEGORÍA */}
                <div className="absolute top-5 left-5 z-20 pointer-events-none">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-[#FF1A1A] shadow-sm">
                    {QUICKLYS_ARTICLES[0].category}
                  </span>
                </div>

                <img 
                  src={QUICKLYS_ARTICLES[0].image} 
                  alt={QUICKLYS_ARTICLES[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 
                className="mt-4 sm:mt-5 text-[22px] sm:text-[26px] md:text-[30px] font-normal leading-snug tracking-[-0.02em] text-black group-hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                {QUICKLYS_ARTICLES[0].title}
              </h3>
            </article>
          </div>

          {/* ARTÍCULO 2: ALINEADO A LA IZQUIERDA (EVENT, ESCALONADO) */}
          <div className="w-full flex justify-start mt-16 sm:mt-24 md:mt-32 lg:mt-40">
            <article 
              className="w-full sm:w-[90%] md:w-[70%] lg:w-[64%] max-w-[740px] flex flex-col group cursor-none"
              onClick={() => setSelectedArticle(QUICKLYS_ARTICLES[1])}
              onMouseEnter={(e) => {
                if (cursorRef.current) {
                  cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                }
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="w-full aspect-[16/10] sm:aspect-[4/2.7] relative bg-[#ECECEC] overflow-hidden shadow-sm">
                {/* BADGE DE CATEGORÍA */}
                <div className="absolute top-5 left-5 z-20 pointer-events-none">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-[#902BF5] shadow-sm">
                    {QUICKLYS_ARTICLES[1].category}
                  </span>
                </div>

                <img 
                  src={QUICKLYS_ARTICLES[1].image} 
                  alt={QUICKLYS_ARTICLES[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 
                className="mt-4 sm:mt-5 text-[22px] sm:text-[26px] md:text-[30px] font-normal leading-snug tracking-[-0.02em] text-black group-hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                {QUICKLYS_ARTICLES[1].title}
              </h3>
            </article>
          </div>

        </div>

        {/* WATERMARK BRANDING EN ESQUINA INFERIOR DERECHA */}
        <div 
          className="absolute right-4 sm:right-8 md:right-16 bottom-0 select-none pointer-events-none text-black/[0.04] text-[13vw] sm:text-[11vw] md:text-[9vw] font-black uppercase tracking-tighter leading-none z-0"
          aria-hidden="true"
        >
          BRANDING
        </div>

      </div>

      {/* CURSOR CIRCULAR PERSONALIZADO: "READ NOW" */}
      <div
        ref={cursorRef}
        id="quicklys-article-cursor"
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
        style={{ transform: 'translate3d(-200px, -200px, 0)', transition: 'none' }}
        aria-hidden="true"
      >
        <div 
          className={`-translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center border border-white/20 p-2 text-center transition-all duration-200 ease-out ${
            isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
          }`}
        >
          <span className="text-[12px] sm:text-[13px] font-bold tracking-widest uppercase leading-tight select-none font-sans">
            read now
          </span>
        </div>
      </div>

      {/* MODAL LECTOR DE ARTÍCULO */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl p-6 sm:p-10 md:p-12 relative select-text"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-black hover:opacity-60 transition-opacity cursor-pointer"
              aria-label="Cerrar artículo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-1 rounded-full text-xs font-medium text-white ${selectedArticle.categoryBg}`}>
                {selectedArticle.category}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{selectedArticle.readTime}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{selectedArticle.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-6">
              {selectedArticle.title}
            </h2>

            <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100 mb-8">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-gray-400">Henri Barrett Articles</span>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-xs uppercase tracking-widest font-bold text-black hover:opacity-60 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// --- SECCIÓN: ALL QUICKLYS (REELS 9:16 CON RULETA INFINITA Y CURSOR FLECHA BLANCO/NEGRO) ---
interface QuicklysReelItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  posterUrl?: string;
  instagramUrl?: string;
}

const CULTURE_CLASH_REELS: QuicklysReelItem[] = [
  {
    id: 'cc-1',
    title: 'Urban Creative Summit',
    category: 'Culture Clash 01',
    videoUrl: HB_REELS_ASSETS.sessions,
  },
  {
    id: 'cc-2',
    title: 'Kinetic Movement & Sound',
    category: 'Culture Clash 02',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'cc-3',
    title: 'Underground Typography',
    category: 'Culture Clash 03',
    videoUrl: HB_REELS_ASSETS.tipo,
  },
  {
    id: 'cc-4',
    title: 'Studio Creative Collective',
    category: 'Culture Clash 04',
    videoUrl: HB_REELS_ASSETS.kauawai,
  },
  {
    id: 'cc-5',
    title: 'Raw Street Identity',
    category: 'Culture Clash 05',
    videoUrl: HB_REELS_ASSETS.tiktok,
  }
];

const NIKE_RUNNING_REELS: QuicklysReelItem[] = [
  {
    id: 'nr-1',
    title: 'Night Run City Sprint',
    category: 'Nike Running 01',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'nr-2',
    title: 'Kinetic Stride Velocity',
    category: 'Nike Running 02',
    videoUrl: HB_REELS_ASSETS.tiktok,
  },
  {
    id: 'nr-3',
    title: 'Midnight Urban Endurance',
    category: 'Nike Running 03',
    videoUrl: HB_REELS_ASSETS.kauawai,
  },
  {
    id: 'nr-4',
    title: 'Dynamic Pace & Form',
    category: 'Nike Running 04',
    videoUrl: HB_REELS_ASSETS.sessions,
  },
  {
    id: 'nr-5',
    title: 'Breath, Heartbeat & Motion',
    category: 'Nike Running 05',
    videoUrl: HB_REELS_ASSETS.tipo,
  },
  {
    id: 'nr-6',
    title: 'Technical Precision Gear',
    category: 'Nike Running 06',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'nr-7',
    title: 'Metropolitan Horizon Run',
    category: 'Nike Running 07',
    videoUrl: HB_REELS_ASSETS.tiktok,
  },
  {
    id: 'nr-8',
    title: 'Finish Line Transcendence',
    category: 'Nike Running 08',
    videoUrl: HB_REELS_ASSETS.kauawai,
  }
];

const NAVIDAD_TOTTUS_REELS: QuicklysReelItem[] = [
  {
    id: 'nt-1',
    title: 'Navidad Mágica Tottus 01',
    category: 'Tottus 01',
    videoUrl: HB_REELS_ASSETS.kauawai,
  },
  {
    id: 'nt-2',
    title: 'Celebración en Familia 02',
    category: 'Tottus 02',
    videoUrl: HB_REELS_ASSETS.sessions,
  },
  {
    id: 'nt-3',
    title: 'Cena & Unión Navideña 03',
    category: 'Tottus 03',
    videoUrl: HB_REELS_ASSETS.tiktok,
  },
  {
    id: 'nt-4',
    title: 'Espíritu Festivo 04',
    category: 'Tottus 04',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'nt-5',
    title: 'Momentos Tottus 05',
    category: 'Tottus 05',
    videoUrl: HB_REELS_ASSETS.tipo,
  },
  {
    id: 'nt-6',
    title: 'Tradición y Alegría 06',
    category: 'Tottus 06',
    videoUrl: HB_REELS_ASSETS.kauawai,
  },
  {
    id: 'nt-7',
    title: 'Regalos & Sonrisas 07',
    category: 'Tottus 07',
    videoUrl: HB_REELS_ASSETS.sessions,
  },
  {
    id: 'nt-8',
    title: 'Calidez Humana 08',
    category: 'Tottus 08',
    videoUrl: HB_REELS_ASSETS.tiktok,
  },
  {
    id: 'nt-9',
    title: 'Luces de Nochebuena 09',
    category: 'Tottus 09',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'nt-10',
    title: 'Unidos en Fiesta 10',
    category: 'Tottus 10',
    videoUrl: HB_REELS_ASSETS.tipo,
  },
];

const PRECIO_UNO_REELS: QuicklysReelItem[] = [
  {
    id: 'pu-1',
    title: 'Bodas de Oro Aniversario 01',
    category: 'Precio Uno 01',
    videoUrl: HB_REELS_ASSETS.tipo,
  },
  {
    id: 'pu-2',
    title: 'Crecimiento y Trayectoria 02',
    category: 'Precio Uno 02',
    videoUrl: HB_REELS_ASSETS.kauawai,
  },
  {
    id: 'pu-3',
    title: 'Homenaje a Colaboradores 03',
    category: 'Precio Uno 03',
    videoUrl: HB_REELS_ASSETS.redBull,
  },
  {
    id: 'pu-4',
    title: 'Celebración Dorada 04',
    category: 'Precio Uno 04',
    videoUrl: HB_REELS_ASSETS.sessions,
  },
];

const QuicklyCarouselReelCard: React.FC<{ reel: QuicklysReelItem; uniqueKey?: string }> = ({ reel, uniqueKey }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[calc(50%-3px)] sm:w-[calc(33.333%-6px)] shrink-0 aspect-[9/16] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-black relative shadow-xs border border-black/5 group cursor-pointer"
    >
      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-medium flex items-center gap-1 z-10 pointer-events-none">
        <Instagram className="w-2.5 h-2.5 text-pink-400" />
        <span>@henribarrettstudio</span>
      </div>

      {/* Indicador de play sutil mientras está congelado que desaparece al pasar el cursor */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-70'}`}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center text-white border border-white/20 shadow-sm">
          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" />
        </div>
      </div>

      <LoopedReelVideo
        id={uniqueKey || `carousel-${reel.id}`}
        src={reel.videoUrl}
        poster={reel.posterUrl}
        isExternalHovered={isHovered}
        className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  );
};

interface QuicklysArticleItem {
  id: string;
  category: 'Branding' | 'Event' | 'Social' | 'Illustration';
  title: string;
  imageUrl: string;
  readTime?: string;
  date?: string;
  content?: string[];
}

const ALL_QUICKLYS_ARTICLES: QuicklysArticleItem[] = [
  {
    id: 'art-1',
    category: 'Branding',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop',
    readTime: '4 min read',
    date: 'Sep 2026',
    content: [
      'In an era where generative intelligence can synthesize infinite visual variations in seconds, true brand vision remains fundamentally human. What distinguishes enduring iconography from visual static is intentionality, cultural depth, and visceral resonance.',
      'Visionary branding is never merely algorithmic pattern-matching. It requires the audacity to introduce dissonance, poetry, and authentic perspective that challenges the status quo rather than flattening into statistical averages.'
    ]
  },
  {
    id: 'art-2',
    category: 'Event',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop',
    readTime: '5 min read',
    date: 'Aug 2026',
    content: [
      'During our keynote presentation at the Creative Summit, our founding partners dismantled prevailing assumptions regarding synthetic aesthetics in contemporary brand design.',
      'The keynote featured live case studies demonstrating how automated rendering workflows allow creative directors to devote more energy to brand soul, philosophical positioning, and typography rigor.'
    ]
  },
  {
    id: 'art-3',
    category: 'Social',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    readTime: '3 min read',
    date: 'Jul 2026',
    content: [
      'In digital spaces overwhelmed by algorithmic feeds, authenticity has become the ultimate luxury. Brands that succeed are those that embrace idiosyncrasy over homogenized content factories.',
      'Community connection is forged through vulnerability, cultural specificity, and uncompromising creative direction.'
    ]
  },
  {
    id: 'art-4',
    category: 'Illustration',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=900&auto=format&fit=crop',
    readTime: '4 min read',
    date: 'Jun 2026',
    content: [
      'The stroke of a human hand carries micro-imperfections that machine learning models systematically smooth away. Yet it is precisely in those imperfections that emotional warmth resides.',
      'We explore how contemporary illustration reclaims tactile aesthetics amidst the hyper-digital landscape.'
    ]
  },
  {
    id: 'art-5',
    category: 'Branding',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop',
    readTime: '6 min read',
    date: 'May 2026',
    content: [
      'Typography, grid architecture, and negative space form the timeless tripod of brand dignity. When applied with relentless rigor, they outlast every passing digital fad.',
      'Our case analysis explores architectural identity systems that scale seamlessly across physical monoliths and mobile touchpoints.'
    ]
  },
  {
    id: 'art-6',
    category: 'Event',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=900&auto=format&fit=crop',
    readTime: '4 min read',
    date: 'Apr 2026',
    content: [
      'Experiential brand architecture translates corporate philosophies into physical sensations. Lighting, acoustics, and kinetic structures command visceral reactions that screens cannot emulate.',
      'Here is our blueprint for orchestrating brand environments that leave indelible impressions.'
    ]
  },
  {
    id: 'art-7',
    category: 'Social',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=900&auto=format&fit=crop',
    readTime: '3 min read',
    date: 'Mar 2026',
    content: [
      'Why micro-movements on social feeds drive macro-shifts in cultural perception. A breakdown of dynamic motion systems that capture focus within milliseconds.',
      'Motion is not decorative; it is the rhythm of contemporary communication.'
    ]
  },
  {
    id: 'art-8',
    category: 'Illustration',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=900&auto=format&fit=crop',
    readTime: '5 min read',
    date: 'Feb 2026',
    content: [
      'From classical printmaking techniques to algorithmic vector interpolation: how historical craft methodologies inform cutting-edge visual experimentation.',
      'A deep dive into cross-disciplinary craftsmanship at Henri Barrett.'
    ]
  },
  {
    id: 'art-9',
    category: 'Branding',
    title: 'Can artificial intelligence make visionary brands?',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
    readTime: '4 min read',
    date: 'Jan 2026',
    content: [
      'Can artificial intelligence create iconic symbols that endure for fifty years? Our designers test neural models against human semioticians.',
      'The findings reveal where synthetic tools excel and where human wisdom is irreplaceable.'
    ]
  },
];

export const AllQuicklysSection: React.FC = () => {
  const [cultureIndex, setCultureIndex] = useState(0);
  const [nikeIndex, setNikeIndex] = useState(0);
  const [tottusIndex, setTottusIndex] = useState(0);
  const [precioUnoIndex, setPrecioUnoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleArticlesCount, setVisibleArticlesCount] = useState<number>(6);
  const [activeCursor, setActiveCursor] = useState<{
    visible: boolean;
    mode: 'arrow' | 'read_now';
    direction: 'right' | 'left';
  }>({
    visible: false,
    mode: 'arrow',
    direction: 'right',
  });
  const [selectedGridArticle, setSelectedGridArticle] = useState<QuicklysArticleItem | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cultureTrackRef = useRef<HTMLDivElement>(null);
  const nikeTrackRef = useRef<HTMLDivElement>(null);
  const tottusTrackRef = useRef<HTMLDivElement>(null);
  const precioUnoTrackRef = useRef<HTMLDivElement>(null);
  const [cardStep, setCardStep] = useState(280);

  // Listas extendidas para efecto de ruleta infinita continua
  const infiniteCultureReels = Array.from({ length: 120 }, (_, i) => CULTURE_CLASH_REELS[i % CULTURE_CLASH_REELS.length]);
  const infiniteNikeReels = Array.from({ length: 128 }, (_, i) => NIKE_RUNNING_REELS[i % NIKE_RUNNING_REELS.length]);
  const infiniteTottusReels = Array.from({ length: 120 }, (_, i) => NAVIDAD_TOTTUS_REELS[i % NAVIDAD_TOTTUS_REELS.length]);
  const infinitePrecioUnoReels = Array.from({ length: 120 }, (_, i) => PRECIO_UNO_REELS[i % PRECIO_UNO_REELS.length]);

  const getStep = () => (typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 3);

  useEffect(() => {
    const updateCardStep = () => {
      const track = cultureTrackRef.current || nikeTrackRef.current || tottusTrackRef.current || precioUnoTrackRef.current;
      if (track && track.children[0]) {
        const card = track.children[0] as HTMLElement;
        const gap = window.innerWidth >= 640 ? 8 : 6;
        if (card.offsetWidth > 0) {
          setCardStep(card.offsetWidth + gap);
        }
      }
    };
    updateCardStep();
    const timer = setTimeout(updateCardStep, 150);
    window.addEventListener('resize', updateCardStep);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCardStep);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="w-full bg-white relative block pb-6 sm:pb-8 md:pb-10 select-none">
      {/* TÍTULO GRANDE DISPLAY: ALL QUICKLYS */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pt-12 sm:pt-16 md:pt-24 pb-14 sm:pb-20 md:pb-24">
        <h2 
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[112px] font-normal tracking-[-0.04em] uppercase text-black leading-none"
          style={{
            fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
        >
          ALL QUICKLYS
        </h2>
      </div>

      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col gap-24 sm:gap-32 md:gap-40">
        
        {/* BLOQUE 1: CULTURE CLASH (INFO A LA IZQUIERDA, 3 REELS A LA DERECHA) */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14 relative">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between shrink-0">
            <div>
              {/* BADGES + ICONOS DE SOL */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#8C30F5] shadow-xs">
                  Event
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#2463EB] shadow-xs">
                  In Progress
                </span>
                <div className="flex items-center gap-1.5 ml-1 text-black">
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
              </div>

              {/* TÍTULO */}
              <h3 
                className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mt-8 sm:mt-10 mb-5"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                CULTURE CLASH
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-sm">
                In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals.
              </p>

              {/* ENLACE INSTAGRAM @HENRIBARRETTSTUDIO */}
              <a
                href="https://www.instagram.com/henribarrettstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all w-fit cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Reels @henribarrettstudio</span>
                <MoveUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-6 mt-10 sm:mt-14 pt-4">
              <span className="text-base sm:text-lg font-bold tracking-wider text-black">
                {((cultureIndex % CULTURE_CLASH_REELS.length) + 1)} — {CULTURE_CLASH_REELS.length}
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA: RULETA INFINITA DE REELS 9:16 (MEDIANIL ESTRECHO, SIN TEXTO, SOLO VIDEO) */}
          <div 
            className="w-full lg:w-[65%] overflow-hidden relative cursor-none select-none rounded-[28px]"
            onMouseEnter={() => setActiveCursor({ visible: true, mode: 'arrow', direction: 'right' })}
            onMouseLeave={() => setActiveCursor({ visible: false, mode: 'arrow', direction: 'right' })}
            onClick={() => setCultureIndex(prev => prev + getStep())}
          >
            <div 
              ref={cultureTrackRef}
              className="flex gap-1.5 sm:gap-2 will-change-transform"
              style={{
                transform: `translate3d(-${cultureIndex * cardStep}px, 0, 0)`,
                transition: 'transform 0.55s cubic-bezier(0.2, 1, 0.3, 1)'
              }}
            >
              {infiniteCultureReels.map((reel, idx) => (
                <QuicklyCarouselReelCard key={`cult-${reel.id}-${idx}`} uniqueKey={`cult-${reel.id}-${idx}`} reel={reel} />
              ))}
            </div>
          </div>

        </div>


        {/* BLOQUE 2: NIKE RUNNING (REELS A LA IZQUIERDA, INFO A LA DERECHA - INVERTIDO) */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-between gap-10 lg:gap-14 relative">
          
          {/* COLUMNA IZQUIERDA: RULETA INFINITA DE REELS 9:16 (MEDIANIL ESTRECHO, SIN TEXTO, SOLO VIDEO) */}
          <div className="w-full lg:w-[65%] relative">
            <div 
              className="w-full overflow-hidden relative cursor-none select-none rounded-[28px]"
              onMouseEnter={() => setActiveCursor({ visible: true, mode: 'arrow', direction: 'left' })}
              onMouseLeave={() => setActiveCursor({ visible: false, mode: 'arrow', direction: 'left' })}
              onClick={() => setNikeIndex(prev => prev + getStep())}
            >
              <div 
                ref={nikeTrackRef}
                className="flex gap-1.5 sm:gap-2 will-change-transform"
                style={{
                  transform: `translate3d(-${nikeIndex * cardStep}px, 0, 0)`,
                  transition: 'transform 0.55s cubic-bezier(0.2, 1, 0.3, 1)'
                }}
              >
                {infiniteNikeReels.map((reel, idx) => (
                  <QuicklyCarouselReelCard key={`nike-${reel.id}-${idx}`} uniqueKey={`nike-${reel.id}-${idx}`} reel={reel} />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between shrink-0 pl-0 lg:pl-6">
            <div>
              {/* ICONOS DE SOL + BADGE EVENT */}
              <div className="flex items-center justify-between sm:justify-start gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-black">
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#8C30F5] shadow-xs">
                  Event
                </span>
              </div>

              {/* TÍTULO CON MARCA DE AGUA BRANDING DE FONDO */}
              <div className="relative mt-8 sm:mt-10 mb-5">
                <span 
                  className="absolute -top-3 left-0 text-black/[0.04] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight select-none pointer-events-none"
                  aria-hidden="true"
                >
                  BRANDING
                </span>
                <h3 
                  className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black"
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}
                >
                  NIKE RUNNING
                </h3>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-sm">
                In a world increasingly driven by technology, we anchor ourselves in genuine human connection.
              </p>

              {/* ENLACE INSTAGRAM @HENRIBARRETTSTUDIO */}
              <a
                href="https://www.instagram.com/henribarrettstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all w-fit cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Reels @henribarrettstudio</span>
                <MoveUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-6 mt-10 sm:mt-14 pt-4">
              <span className="text-base sm:text-lg font-bold tracking-wider text-black">
                {((nikeIndex % NIKE_RUNNING_REELS.length) + 1)} — {NIKE_RUNNING_REELS.length}
              </span>
            </div>
          </div>

        </div>

        {/* BLOQUE 3: NAVIDAD CON TOTTUS (INFO A LA IZQUIERDA, 3 REELS A LA DERECHA) */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14 relative">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between shrink-0">
            <div>
              {/* BADGES + ICONOS DE SOL */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#8C30F5] shadow-xs">
                  Event
                </span>
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-black bg-[#2463EB] shadow-xs">
                  In Progress
                </span>
                <div className="flex items-center gap-1.5 ml-1 text-black">
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
              </div>

              {/* TÍTULO */}
              <h3 
                className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mt-8 sm:mt-10 mb-5 leading-[1.08]"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                }}
              >
                NAVIDAD<br />CON TOTTUS
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-sm">
                In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals.
              </p>

              {/* ENLACE INSTAGRAM @HENRIBARRETTSTUDIO */}
              <a
                href="https://www.instagram.com/henribarrettstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all w-fit cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Reels @henribarrettstudio</span>
                <MoveUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-6 mt-10 sm:mt-14 pt-4">
              <span className="text-base sm:text-lg font-bold tracking-wider text-black">
                {((tottusIndex % NAVIDAD_TOTTUS_REELS.length) + 1)} — {NAVIDAD_TOTTUS_REELS.length}
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA: RULETA INFINITA DE REELS 9:16 */}
          <div 
            className="w-full lg:w-[65%] overflow-hidden relative cursor-none select-none rounded-[28px]"
            onMouseEnter={() => setActiveCursor({ visible: true, mode: 'arrow', direction: 'right' })}
            onMouseLeave={() => setActiveCursor({ visible: false, mode: 'arrow', direction: 'right' })}
            onClick={() => setTottusIndex(prev => prev + getStep())}
          >
            <div 
              ref={tottusTrackRef}
              className="flex gap-1.5 sm:gap-2 will-change-transform"
              style={{
                transform: `translate3d(-${tottusIndex * cardStep}px, 0, 0)`,
                transition: 'transform 0.55s cubic-bezier(0.2, 1, 0.3, 1)'
              }}
            >
              {infiniteTottusReels.map((reel, idx) => (
                <QuicklyCarouselReelCard key={`tottus-${reel.id}-${idx}`} uniqueKey={`tottus-${reel.id}-${idx}`} reel={reel} />
              ))}
            </div>
          </div>

        </div>


        {/* BLOQUE 4: LAS BODAS DE ORO DE PRECIO UNO (REELS A LA IZQUIERDA, INFO A LA DERECHA - INVERTIDO) */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-between gap-10 lg:gap-14 relative">
          
          {/* COLUMNA IZQUIERDA: RULETA INFINITA DE REELS 9:16 */}
          <div className="w-full lg:w-[65%] relative">
            <div 
              className="w-full overflow-hidden relative cursor-none select-none rounded-[28px]"
              onMouseEnter={() => setActiveCursor({ visible: true, mode: 'arrow', direction: 'left' })}
              onMouseLeave={() => setActiveCursor({ visible: false, mode: 'arrow', direction: 'left' })}
              onClick={() => setPrecioUnoIndex(prev => prev + getStep())}
            >
              <div 
                ref={precioUnoTrackRef}
                className="flex gap-1.5 sm:gap-2 will-change-transform"
                style={{
                  transform: `translate3d(-${precioUnoIndex * cardStep}px, 0, 0)`,
                  transition: 'transform 0.55s cubic-bezier(0.2, 1, 0.3, 1)'
                }}
              >
                {infinitePrecioUnoReels.map((reel, idx) => (
                  <QuicklyCarouselReelCard key={`pu-${reel.id}-${idx}`} uniqueKey={`pu-${reel.id}-${idx}`} reel={reel} />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between shrink-0 pl-0 lg:pl-6">
            <div>
              {/* ICONOS DE SOL A LA IZQUIERDA Y BADGE EVENT A LA DERECHA */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-black">
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <DynamicIsotype className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#8C30F5] shadow-xs">
                  Event
                </span>
              </div>

              {/* SUBTÍTULO "In progress" */}
              <p className="text-sm sm:text-base text-[#666666] font-normal mt-6 sm:mt-8 mb-2">
                In progress
              </p>

              {/* TÍTULO CON MARCA DE AGUA BRANDING DE FONDO */}
              <div className="relative mt-2 mb-5">
                <span 
                  className="absolute -top-3 left-0 text-black/[0.04] text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight select-none pointer-events-none"
                  aria-hidden="true"
                >
                  BRANDING
                </span>
                <h3 
                  className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black leading-[1.08]"
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}
                >
                  LAS BODAS DE ORO<br />DE PRECIO UNO
                </h3>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-sm">
                In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals.
              </p>

              {/* ENLACE INSTAGRAM @HENRIBARRETTSTUDIO */}
              <a
                href="https://www.instagram.com/henribarrettstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all w-fit cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Reels @henribarrettstudio</span>
                <MoveUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-6 mt-10 sm:mt-14 pt-4">
              <span className="text-base sm:text-lg font-bold tracking-wider text-black">
                {((precioUnoIndex % PRECIO_UNO_REELS.length) + 1)} — {PRECIO_UNO_REELS.length}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* SECCIÓN DE FILTROS, ARTÍCULOS Y BOTÓN DE VER MÁS */}
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 mt-20 sm:mt-28 md:mt-36">
        {/* FILTROS (BRANDING, EVENT, SOCIAL, ILLUSTRATION) */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-10 sm:mb-14">
          {(['Branding', 'Event', 'Social', 'Illustration'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(prev => prev === cat ? 'All' : cat)}
                className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-normal transition-all cursor-pointer shadow-xs ${
                  isActive 
                    ? 'bg-black text-white border border-black' 
                    : 'bg-white text-black border border-black/10 hover:border-black/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID DE ARTÍCULOS (3 COLUMNAS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {ALL_QUICKLYS_ARTICLES
            .filter(art => selectedCategory === 'All' || art.category === selectedCategory)
            .slice(0, visibleArticlesCount)
            .map((article) => (
              <article 
                key={article.id} 
                className="flex flex-col group cursor-none"
                onMouseEnter={(e) => {
                  if (cursorRef.current) {
                    cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                  }
                  setActiveCursor({ visible: true, mode: 'read_now', direction: 'right' });
                }}
                onMouseLeave={() => setActiveCursor(prev => ({ ...prev, visible: false }))}
                onClick={() => setSelectedGridArticle(article)}
              >
                <div className="w-full aspect-[4/5] bg-[#D9D9D9] relative overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-90 group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none pointer-events-none"
                  />
                </div>
                <h4 
                  className="text-base sm:text-lg md:text-[19px] font-bold text-black tracking-tight mt-4 leading-snug group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                  }}
                >
                  {article.title}
                </h4>
              </article>
            ))}
        </div>

        {/* BOTÓN VIEW MORE QUICKLYS + */}
        <div className="flex justify-center mt-14 sm:mt-20 pt-4">
          <button
            onClick={() => setVisibleArticlesCount(prev => prev + 3)}
            className="text-sm sm:text-base font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer"
            style={{
              fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}
          >
            View more quicklys +
          </button>
        </div>
      </div>

      {/* CURSOR PERSONALIZADO CIRCULAR: FLECHA PARA REELS / "READ NOW" PARA ARTÍCULOS */}
      <div
        ref={cursorRef}
        id="quicklys-reel-custom-cursor"
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
        style={{ transform: 'translate3d(-200px, -200px, 0)', transition: 'none' }}
        aria-hidden="true"
      >
        {/* Cursor blanco con flecha para reels */}
        <div 
          className={`-translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-black/10 flex items-center justify-center transition-all duration-200 ease-out ${
            activeCursor.visible && activeCursor.mode === 'arrow' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none absolute'
          }`}
        >
          {activeCursor.direction === 'right' ? (
            <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.25] text-black" />
          ) : (
            <ArrowLeft className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.25] text-black" />
          )}
        </div>

        {/* Cursor circular negro con "READ NOW" para artículos */}
        <div 
          className={`-translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center border border-white/20 p-2 text-center transition-all duration-200 ease-out ${
            activeCursor.visible && activeCursor.mode === 'read_now' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none absolute'
          }`}
        >
          <span className="text-[12px] sm:text-[13px] font-bold tracking-widest uppercase leading-tight select-none font-sans">
            read now
          </span>
        </div>
      </div>

      {/* MODAL LECTOR DE ARTÍCULO PARA QUICKLYS GRID */}
      {selectedGridArticle && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedGridArticle(null)}
        >
          <div 
            className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl p-6 sm:p-10 md:p-12 relative select-text"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedGridArticle(null)}
              className="absolute top-6 right-6 p-2 text-black hover:opacity-60 transition-opacity cursor-pointer"
              aria-label="Cerrar artículo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 rounded-full text-xs font-medium text-white bg-black">
                {selectedGridArticle.category}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{selectedGridArticle.readTime || '4 min read'}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{selectedGridArticle.date || 'Sep 2026'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-6">
              {selectedGridArticle.title}
            </h2>

            <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100 mb-8">
              <img 
                src={selectedGridArticle.imageUrl} 
                alt={selectedGridArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
              {(selectedGridArticle.content || [
                'In an era where generative intelligence can synthesize infinite visual variations in seconds, true brand vision remains fundamentally human. What distinguishes enduring iconography from visual static is intentionality, cultural depth, and visceral resonance.',
                'Visionary branding is never merely algorithmic pattern-matching. It requires the audacity to introduce dissonance, poetry, and authentic perspective that challenges the status quo rather than flattening into statistical averages.',
                'The future belongs to creators who pair machine workflows with uncompromising human discernment and timeless taste.'
              ]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-gray-400">Henri Barrett Articles</span>
              <button 
                onClick={() => setSelectedGridArticle(null)}
                className="text-xs uppercase tracking-widest font-bold text-black hover:opacity-60 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


// --- APP PRINCIPAL ---
export const App: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const finalPlaceholderRef = useRef<HTMLDivElement>(null);
  const infoBarRef = useRef<HTMLDivElement>(null);
  const workTextRef = useRef<HTMLSpanElement>(null);
  const servicesMarqueeRef = useRef<HTMLDivElement>(null);
  const hubImageRef = useRef<HTMLImageElement>(null);
  const hubSectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);

  const currentScrollY = useRef(0);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  // --- VISTAS Y FILTROS (SECCIÓN WORK) ---
  const [currentView, setCurrentView] = useState<'work' | 'home' | 'about' | 'services' | 'quicklys' | 'work-with-us'>('home');
  const currentViewRef = useRef(currentView);
  useEffect(() => {
    currentViewRef.current = currentView;
  }, [currentView]);

  // Reset scroll al cambiar de vista
  useEffect(() => {
    window.scrollTo(0, 0);
    currentScrollY.current = 0;
  }, [currentView]);
  const [viewMode, setViewMode] = useState<'grid' | 'explore' | 'list'>('explore');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects (10)');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (selectedCategory.startsWith('All Projects')) return true;
    if (selectedCategory.startsWith('Branding')) return p.category.toLowerCase().includes('brand');
    if (selectedCategory.startsWith('Event')) return p.category.toLowerCase().includes('event');
    if (selectedCategory.startsWith('Rebrand')) return p.category.toLowerCase().includes('rebrand');
    if (selectedCategory.startsWith('Campaign')) return p.category.toLowerCase().includes('campaign');
    if (selectedCategory.startsWith('Digital')) return p.category.toLowerCase().includes('digital');
    return true;
  });

  // --- ESTADO DEL CURSOR (FLECHA GRANDE PARA SELECTED WORKS) ---
  const cursorArrowRef = useRef<HTMLDivElement>(null);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [cursorType, setCursorType] = useState<'upRight' | 'right'>('upRight');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isHoveringWorkRef = useRef(false);
  const lastMousePosRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    isHoveringWorkRef.current = isHoveringWork;
  }, [isHoveringWork]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };
      if (cursorArrowRef.current) {
        cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (currentView !== 'home') return;

    const calculateHeight = () => {
      if (lastSectionRef.current) {
        const startOffset = lastSectionRef.current.offsetTop;
        const contentHeight = lastSectionRef.current.offsetHeight;
        if (startOffset > 0 && contentHeight > 0) {
          setPageHeight(startOffset + contentHeight);
        }
      }
    };

    calculateHeight();
    const t1 = setTimeout(calculateHeight, 100);
    const t2 = setTimeout(calculateHeight, 400);
    const t3 = setTimeout(calculateHeight, 1200);

    window.addEventListener('resize', calculateHeight);

    let resizeObserver: ResizeObserver | null = null;
    if (lastSectionRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        calculateHeight();
      });
      resizeObserver.observe(lastSectionRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', calculateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [currentView]);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      const targetScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      currentScrollY.current += (targetScroll - currentScrollY.current) * 0.1;

      if (contentRef.current && currentViewRef.current === 'home') {
        contentRef.current.style.transform = `translate3d(0, -${currentScrollY.current}px, 0)`;
      }

      const animationRange = windowHeight * 2.5; 
      const scrollProgress = Math.max(0, Math.min(currentScrollY.current / animationRange, 1));

      if (videoContainerRef.current) {
        const distFromCenter = Math.abs(scrollProgress - 0.5);
        const progressToCenter = Math.max(0, 1 - (distFromCenter / 0.5));
        const darkness = Math.min(1, Math.pow(progressToCenter, 1.4) * 1.7); 
        
        const bgVal = Math.round(255 - (255 * darkness)); 
        const textVal = Math.round(0 + (255 * darkness));

        if (mainContainerRef.current) mainContainerRef.current.style.backgroundColor = `rgb(${bgVal}, ${bgVal}, ${bgVal})`;
        if (infoBarRef.current) infoBarRef.current.style.color = `rgb(${textVal}, ${textVal}, ${textVal})`;
        if (navRef.current) navRef.current.style.color = `rgb(${textVal}, ${textVal}, ${textVal})`;

        let widthEnd = 180, heightEnd = 80, topEnd = windowHeight - 200, leftEnd = (windowWidth - 180) / 2;
        if (finalPlaceholderRef.current) {
          const rect = finalPlaceholderRef.current.getBoundingClientRect();
          topEnd = rect.top; leftEnd = rect.left; widthEnd = rect.width; heightEnd = rect.height;
        }

        // SEPARA EL VIDEO: Inicia un poco más abajo (0.95 de la altura de la ventana)
        const widthStart = 500, heightStart = 300, topStart = windowHeight * 0.95, leftStart = (windowWidth - 500) / 2;
        const widthMid = windowWidth, leftMid = 0, heightMid = 600, topMid = (windowHeight - 600) / 2 - 80;

        let currentTop, currentLeft, currentWidth, currentHeight;
        if (scrollProgress <= 0.5) {
          const phase = scrollProgress * 2;
          const ease = phase < 0.5 ? 2 * phase * phase : -1 + (4 - 2 * phase) * phase;
          currentTop = topStart + (topMid - topStart) * ease;
          currentLeft = leftStart + (leftMid - leftStart) * ease;
          currentWidth = widthStart + (widthMid - widthStart) * ease;
          currentHeight = heightStart + (heightMid - heightStart) * ease;
        } else {
          const phase = (scrollProgress - 0.5) * 2;
          const ease = phase < 0.5 ? 2 * phase * phase : -1 + (4 - 2 * phase) * phase;
          currentTop = topMid + (topEnd - topMid) * ease;
          currentLeft = leftMid + (leftEnd - leftMid) * ease;
          currentWidth = widthMid + (widthEnd - widthMid) * ease;
          currentHeight = heightMid + (heightEnd - heightMid) * ease;
        }

        if (currentViewRef.current === 'home') videoContainerRef.current.style.clipPath = `inset(${currentTop}px ${windowWidth - (currentLeft + currentWidth)}px ${windowHeight - (currentTop + currentHeight)}px ${currentLeft}px)`;
        
        if (infoBarRef.current && currentViewRef.current === 'home') {
            let opacity = Math.max(0, Math.min(1 - Math.abs(scrollProgress - 0.5) * 8, 1));
            infoBarRef.current.style.opacity = opacity.toString();
            infoBarRef.current.style.top = `${topMid + heightMid + 32}px`;
        }
      }

      if (workTextRef.current) {
        // Obtenemos el offset exacto de la sección de portfolio
        const startOffset = lastSectionRef.current ? lastSectionRef.current.offsetTop : windowHeight * 4.8;
        const scrollDelta = currentScrollY.current - startOffset;
        if (scrollDelta > 0) {
          // El texto avanza fluidamente hacia abajo acompañando el scroll y pasando por detrás de las tarjetas
          const maxParallax = windowHeight * 2.4;
          const parallaxY = Math.min(maxParallax, scrollDelta * 0.88);
          workTextRef.current.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
        } else {
          workTextRef.current.style.transform = `translate3d(0, 0, 0)`;
        }
      }

      if (servicesMarqueeRef.current) {
        // Move horizontally based on scroll
        // Slow down the movement by multiplying scroll by a factor, e.g. -0.5
        const moveX = -currentScrollY.current * 0.8;
        servicesMarqueeRef.current.style.transform = `translate3d(${moveX}px, 0, 0)`;
      }

      if (hubSectionRef.current && hubImageRef.current) {
         const rect = hubSectionRef.current.getBoundingClientRect();
         if (rect.top < windowHeight && rect.bottom > 0) {
            const offset = (rect.top - (windowHeight / 2)) * 0.1;
            hubImageRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
         }
      }

      // Desactivar cursor de Selected Works si el elemento se desplaza fuera del puntero durante el scroll
      if (isHoveringWorkRef.current && lastMousePosRef.current.x >= 0) {
        const elem = document.elementFromPoint(lastMousePosRef.current.x, lastMousePosRef.current.y);
        if (!elem || !elem.closest('[data-selected-work-image="true"]')) {
          setIsHoveringWork(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (currentView === 'work') {
    return (
      <div key="work" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          bgColor={viewMode === 'list' ? 'bg-transparent' : 'bg-white'} 
        />

        {viewMode === 'list' ? (
          /* VISTA LIST: RULETA VERTICAL QUE SANGRA ARRIBA CON PREVIEW LATERAL */
          <ListRouletteView viewMode={viewMode} setViewMode={setViewMode} />
        ) : (
          <>
            {/* TIRA DE MARQUEE: "WORK" EN PESO LIGHT PASANDO DE IZQUIERDA A DERECHA CON EL SOL */}
            <div className="w-full overflow-hidden py-4 sm:py-6 select-none bg-white border-y border-transparent">
              <div 
                className="flex w-max animate-marquee-right whitespace-nowrap will-change-transform" 
                style={{ animationDuration: '32s' }}
              >
                <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                </div>
                <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light font-[300] uppercase tracking-tight leading-none text-black">WORK</span>
                  <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                </div>
              </div>
            </div>

            {/* BAJADA EDITORIAL PERMANENTE */}
            <EditorialStatementText />

            {/* PARTE DE LOS FILTROS */}
            <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-30">
              {/* Izquierda: Botón desplegable "All Projects (10)" */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="bg-white hover:bg-gray-50 border border-gray-200/90 rounded-full px-7 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-6 text-[0.95rem] font-medium text-black transition-all cursor-pointer"
                >
                  <span>{selectedCategory}</span>
                  <ChevronDown className={`w-4 h-4 text-black/70 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40 flex flex-col">
                    {[
                      { label: 'All Projects (10)', count: 10 },
                      { label: 'Branding (3)', count: 3 },
                      { label: 'Event (3)', count: 3 },
                      { label: 'Rebrand (2)', count: 2 },
                      { label: 'Campaign (2)', count: 2 },
                      { label: 'Digital (1)', count: 1 },
                    ].map((filter) => (
                      <button
                        key={filter.label}
                        onClick={() => {
                          setSelectedCategory(filter.label);
                          setIsFilterOpen(false);
                        }}
                        className={`px-6 py-2.5 text-left text-sm transition-colors hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                          selectedCategory === filter.label ? 'font-bold text-black bg-gray-50' : 'text-gray-700'
                        }`}
                      >
                        <span>{filter.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Derecha: Segmented control "Grid | Explore | List" */}
              <div className="bg-white border border-gray-200/90 rounded-full p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center gap-1">
                {(['grid', 'explore', 'list'] as const).map((mode) => {
                  const isActive = viewMode === mode;
                  const label = mode === 'grid' ? 'Grid' : mode === 'explore' ? 'Explore' : 'List';
                  return (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#111111] text-white shadow-sm'
                          : 'text-black/80 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTENIDO INFERIOR (PROYECTOS) */}
            {viewMode === 'explore' ? (
              <ExploreOrbitSpace selectedCategory={selectedCategory} />
            ) : (
              <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pb-4 sm:pb-6 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full">
                  {filteredProjects.map((work) => (
                    <div key={work.id} className="flex flex-col group">
                      <div
                        data-selected-work-image="true"
                        onMouseEnter={(e) => {
                          lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                          if (cursorArrowRef.current) {
                            cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                          }
                          setCursorType('upRight');
                          setIsHoveringWork(true);
                        }}
                        onMouseLeave={() => setIsHoveringWork(false)}
                        className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative shadow-sm cursor-none select-none"
                      >
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                        />
                      </div>
                      <div className="flex flex-col mt-4 sm:mt-5">
                        <span className="text-[28px] font-[500] leading-[35px] tracking-[-0.015em] text-black">
                          {work.title}
                        </span>
                        <span className="text-[28px] font-[500] leading-[35px] tracking-[-0.015em] text-black">
                          {work.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* SECCIÓN EDITORIAL: INTRODUCCIÓN A QUICKLYS (EN TODAS LAS VISTAS: GRID, EXPLORE Y LIST) */}
        <section 
          id="work-editorial-statement-bottom"
          className="w-full bg-white relative block pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-20 select-none z-10"
        >
          <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col justify-center">
            <p 
              id="work-statement-text-bottom"
              className="text-[32px] sm:text-[46px] md:text-[62px] lg:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[70px] lg:leading-[76px] font-normal tracking-[-0.03em] text-black !text-black normal-case max-w-[21ch] sm:max-w-[23ch]"
              style={{
                fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                color: '#000000',
                opacity: 1,
                visibility: 'visible',
                display: 'block'
              }}
            >
              A collection of projects we've whipped up in record time. They may not have taken ages to conceive, but they radiate our commitment to quality and creativity.
            </p>
          </div>
        </section>

        {/* SECCIÓN DEDICADA DE QUICKLYS (TIRA ANIMADA DE MARQUEE + GRILLA MASONRY DE REELS) */}
        <section id="quicklys" className="w-full bg-white relative block pt-4 sm:pt-8 md:pt-12">
          {/* TIRA DE MARQUEE: "QUICKLYS" CENTRADA Y CON ESPACIO LIMPIO ARRIBA Y ABAJO */}
          <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10 select-none bg-white">
            <div 
              className="flex w-max animate-marquee-right whitespace-nowrap will-change-transform" 
              style={{ animationDuration: '32s' }}
            >
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
            </div>
          </div>

          {/* GRILLA MASONRY DE REELS (4 COLUMNAS, FORMATO 9:16, MOVIMIENTO IRREGULAR ALTERNADO) */}
          <QuicklysMasonryReels />
        </section>

        {/* FOOTER PEGADO DIRECTAMENTE A LA TERMINACIÓN DE QUICKLYS */}
        <Footer />

        {/* CURSOR PERSONALIZADO (FLECHA GRANDE PARA SELECTED WORKS) */}
        <div
          ref={cursorArrowRef}
          id="selected-works-custom-cursor"
          className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 hidden md:block will-change-transform ${
            isHoveringWork ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ transform: 'translate3d(-200px, -200px, 0)' }}
          aria-hidden="true"
        >
          <div
            className={`-translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex items-center justify-center border border-black/10 transition-transform duration-300 ease-out ${
              isHoveringWork ? (isMouseDown ? 'scale-90' : 'scale-100') : 'scale-40'
            }`}
          >
            {cursorType === 'right' ? (
              <MoveRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
            ) : (
              <MoveUpRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'quicklys') {
    return (
      <div key="quicklys" className="w-full min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
        <div className="w-full">
          {/* HEADER (NAVBAR) */}
          <MainNav currentView={currentView} setCurrentView={setCurrentView} bgColor="bg-white" />

          {/* TIRA ANIMADA DE QUICKLYS (MARQUEE) */}
          <div className="w-full overflow-hidden py-4 sm:py-6 md:py-8 select-none bg-white border-y border-transparent">
            <div 
              className="flex w-max animate-marquee-right whitespace-nowrap will-change-transform" 
              style={{ animationDuration: '32s' }}
            >
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <DynamicIsotype className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
            </div>
          </div>

          {/* TEXTO DESCRIPTIVO EDITORIAL DE QUICKLYS */}
          <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
            <p 
              className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] leading-[1.15] sm:leading-[1.12] md:leading-[1.1] font-normal tracking-[-0.03em] text-black !text-black normal-case"
              style={{
                fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                color: '#000000',
              }}
            >
              A collection of projects we've whipped up in record time. They may not have taken ages to conceive, but they radiate our commitment to quality and creativity.
            </p>
          </div>

          {/* SECCIÓN DE ARTÍCULOS (CON CURSOR CIRCULAR "READ NOW" E IMÁGENES GENERADAS) */}
          <QuicklysArticlesSection />

          {/* SECCIÓN ALL QUICKLYS (REELS 9:16 CON RULETA INFINITA, FILTROS, ARTÍCULOS Y BOTÓN VIEW MORE QUICKLYS +) */}
          <AllQuicklysSection />

          {/* GRILLA MASONRY DE REELS (4 COLUMNAS, FORMATO 9:16, MOVIMIENTO IRREGULAR ALTERNADO) */}
          <section className="w-full bg-white relative block pt-0 sm:pt-2">
            <QuicklysMasonryReels />
          </section>

          {/* DOBLE TIRA ANIMADA: CREATIVITY / CURIOSITY IS SEXY / ALWAYS */}
          <QuicklysDoubleMarquee />
        </div>

        {/* FOOTER PEGADO DIRECTAMENTE AL CIERRE DE LA DOBLE TIRA */}
        <Footer />
      </div>
    );
  }

  if (currentView === 'services') {
    return (
      <div key="services" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav currentView={currentView} setCurrentView={setCurrentView} bgColor="bg-white" />

        {/* HERO SERVICES BLOCK */}
        <div className="w-full pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
          {/* Marquee WHAT WE DO */}
          <div className="w-full overflow-hidden select-none">
            <div ref={servicesMarqueeRef} className="flex w-max whitespace-nowrap will-change-transform">
              {/* Repeat a few times to ensure it covers the screen even when scrolling */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                  <DynamicIsotype className="w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] text-black shrink-0" />
                  <span className="text-[20vw] md:text-[16vw] font-normal tracking-[-0.03em] uppercase leading-[0.8] text-black">WHAT WE DO</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[1200px] px-6 sm:px-10 md:px-16 mt-20 md:mt-28">
            <p className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[62px] leading-[1.05] tracking-[-0.035em] text-[#1a1a1a] font-normal">
              Henri Barrett is more than just an agency; it's a movement, a mindset. We're here to change narratives, elevate brands, and make a lasting imprint in the world of design and creativity.
            </p>
          </div>

          <div className="w-full max-w-[1500px] px-6 sm:px-10 md:px-16 mx-auto mt-20 md:mt-32 flex justify-between items-end">
            <a href="#work-together" className="text-xl sm:text-2xl tracking-tight text-black border-b border-black pb-1 hover:opacity-70 transition-opacity">
              Lets work together ↓
            </a>
            <span className="text-sm sm:text-base font-bold text-black">
              (SCROLL)
            </span>
          </div>
        </div>

        {/* RE-INSERTED VIDEO BLOCK */}
        <div className="w-full mt-16 md:mt-24 mb-20 flex justify-center !opacity-100" style={{ opacity: 1 }}>
           <div className="w-full aspect-video relative overflow-hidden bg-black/5 !opacity-100" style={{ opacity: 1 }}>
             <iframe 
               id="vimeo-iframe"
               src={`https://player.vimeo.com/video/1039783531?autoplay=1&autopause=0&loop=1&title=0&portrait=0&byline=0&controls=0&keyboard=0&speed=0&quality=4k&muted=${showVideoOverlay ? '1' : '0'}`} 
               width="1920" 
               height="1080" 
               className="absolute top-0 left-0 w-full h-full object-cover"
               frameBorder="0" 
               allow="autoplay; fullscreen; picture-in-picture" 
               allowFullScreen
               loading="lazy"
             ></iframe>
             
             {showVideoOverlay && (
               <div 
                 className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center cursor-pointer transition-opacity duration-300"
                 onClick={() => {
                   setShowVideoOverlay(false);
                   const iframe = document.getElementById('vimeo-iframe');
                   if (iframe && iframe.requestFullscreen) {
                     iframe.requestFullscreen().catch(err => console.error("Error attempting to enable fullscreen:", err));
                   }
                 }}
               >
                 <button className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white text-black flex items-center justify-center text-sm sm:text-lg font-bold tracking-widest hover:scale-105 transition-transform duration-300">
                   PLAY
                 </button>
               </div>
             )}
           </div>
        </div>

        {/* SECCIÓN: LET'S PLANT YOUR FLAG (CON VIDEO PROVISIONAL EMBEBIDO) */}
        <section className="w-full pt-12 sm:pt-20 md:pt-28 pb-24 md:pb-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1500px] mx-auto">
          {/* TÍTULO GRANDE CON VIDEO EMBEBIDO EN LA FRASE */}
          <div className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-normal uppercase tracking-[-0.035em] text-black leading-[0.88] select-none">
            <div>LET’S PLANT</div>
            <div className="flex items-center flex-wrap gap-x-4 sm:gap-x-7 md:gap-x-9 gap-y-3 mt-2 sm:mt-4">
              <span>YOUR</span>
              <div className="inline-flex relative w-[22vw] sm:w-[18vw] md:w-[15vw] lg:w-[12.5vw] aspect-[4/3] rounded-xs sm:rounded-sm overflow-hidden bg-[#D8D8D8] shadow-xs shrink-0 self-center border border-black/5">
                <LoopedReelVideo
                  src="/videos/flag_preview.mp4"
                  poster="/videos/flag_preview_thumb.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>FLAG</span>
            </div>
          </div>

          {/* MANIFIESTO EN 2 COLUMNAS */}
          <div className="w-full mt-24 sm:mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* COLUMNA IZQUIERDA: CAPTION */}
            <div className="md:col-span-4 pt-1.5">
              <span className="text-sm sm:text-base font-normal tracking-tight text-black">
                Mutual, Trust Manifesto
              </span>
            </div>

            {/* COLUMNA DERECHA: TITULAR, PÁRRAFOS Y ACCIONES */}
            <div className="md:col-span-8 flex flex-col lg:pl-10">
              <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[67px] leading-[1.05] tracking-[-0.03em] text-black font-normal">
                Beyond mere external <br className="hidden md:block"/> perceptions, it's a matter of <br className="hidden md:block"/> orchestrating an ecosystem.
              </h2>

              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 text-lg sm:text-xl md:text-[26px] lg:text-[32px] leading-[1.3] text-black font-normal max-w-[38ch]">
                <p>
                  In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals.
                </p>
                <p>
                  We a creative agency where strategy, design, and creativity converge. Over the years, we've honed our belief that a standout brand emerges when these three elements seamlessly intertwine.
                </p>
              </div>

              <div className="flex items-center justify-between pt-16 sm:pt-24 mt-auto">
                <a 
                  href="#work-together"
                  className="text-lg sm:text-xl lg:text-[22px] tracking-tight text-black border-b border-black/50 pb-1 hover:border-black hover:opacity-70 transition-all font-normal"
                >
                  Lets work together
                </a>
                <span className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-black/25 select-none pr-2">
                  BRANDING
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TIRA DE MARCAS ANIMADA: (TRUSTED BY VISIONARIES) */}
        <TrustedByVisionariesSection />

        {/* SECCIÓN DE PILARES DE SERVICIOS: BRAND STRATEGY 01 & BRAND CULTURE 02 */}
        <ServicesPillarsSection />

        {/* SECCIÓN: SPACES WE WORK IN */}
        <SpacesWeWorkInSection />

        {/* PRAISE FROM CLIENTS */}
        <div className="w-full max-w-[1250px] mx-auto px-6 mb-20 md:mb-32">
          <PraiseFromClientsSection />
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }

  if (currentView === 'about') {
    return (
      <div key="about" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
          bgColor="bg-white" 
        />

        {/* ABOUT US VIEW CONTENT */}
        <AboutUsView
          onNavigate={setCurrentView}
          DynamicIsotype={DynamicIsotype}
          DynamicLogotype={DynamicLogotype}
        />
      </div>
    );
  }

  if (currentView === 'work-with-us') {
    return (
      <div key="work-with-us" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav currentView={currentView} setCurrentView={setCurrentView} bgColor="bg-white" />

        {/* HERO TITLE MARQUEE (MOVING LEFT TO RIGHT) */}
        <div className="w-full overflow-hidden py-10 sm:py-16 select-none bg-white">
          <div 
            className="flex w-max whitespace-nowrap animate-marquee-right will-change-transform"
            style={{ animationDuration: '32s' }}
          >
            {[0, 1].map((trackIdx) => (
              <div key={`wwu-track-${trackIdx}`} className="flex items-center shrink-0">
                {[0, 1, 2].map((itemIdx) => (
                  <div key={`wwu-item-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0">
                    <span className="text-[14vw] font-light font-[300] uppercase tracking-tighter leading-none">
                      WORK WITH US
                    </span>
                    <div className="inline-flex items-center justify-center mx-6 sm:mx-10 w-[8vw] h-[8vw] min-w-[50px] min-h-[50px] shrink-0 animate-clock-tick origin-center">
                      <DynamicIsotype className="w-full h-full" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 pb-24 md:pb-32">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-light font-[300] tracking-tight max-w-[800px] mb-16 md:mb-24">
            Fill out the contact form below and tell us about your vision for the project.
          </h2>

          <div className="w-full border-b border-[#D4D4D4] pb-4 flex justify-between items-end mb-12">
            <span className="text-sm sm:text-base font-light font-[300]">Lets work together ↓</span>
            <div className="flex gap-6 sm:gap-10 text-sm sm:text-base font-light font-[300]">
              <a href="#press" className="hover:opacity-60 transition-opacity">Press</a>
              <a href="#careers" className="hover:opacity-60 transition-opacity">Carreers</a>
            </div>
          </div>

          <form className="w-full flex flex-col gap-8 md:gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-light font-[300]">First Name:*</label>
                <input type="text" placeholder="Your first name" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 font-light font-[300] relative z-10" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-light font-[300]">Last Name:*</label>
                <input type="text" placeholder="Your last name" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 font-light font-[300] relative z-10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-light font-[300]">Company Name:*</label>
                <input type="text" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors font-light font-[300] relative z-10" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-light font-[300]">Your Company Email:*</label>
                <input type="email" placeholder="example@domain.com" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 font-light font-[300] relative z-10" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm sm:text-base font-light font-[300]">Tell us about the project (Timeline,Budget):*</label>
              <textarea rows={5} className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors resize-none font-light font-[300] relative z-10"></textarea>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-5 h-5 rounded-full bg-black shrink-0 border-2 border-black flex items-center justify-center cursor-pointer">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base font-light font-[300]">Yes, sign me up to newsletter</span>
            </div>

            <div className="mt-4">
              <button type="submit" className="bg-[#111] hover:bg-black text-white px-12 py-4 rounded-full font-light font-[300] transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* PRESS SECTION */}
        <div id="press" className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-[#E2E2E2] rounded-sm"></div>
          <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
            <h3 className="text-3xl md:text-5xl font-light font-[300] leading-[1.1] tracking-tight">
              Are you a journalist<br />with a media or press<br />opportunity?
            </h3>
            <p className="text-gray-500 text-sm md:text-base font-light font-[300] leading-relaxed max-w-[400px]">
              Giancarlo Morales love contributing to news, articles, and stories about entrepreneurship, business, branding, culture, leadership, and vision. They've been featured in NY Post, Inc., Fast Company, WSJ, and many more.
            </p>
            <a href="mailto:press@henribarrett.com" className="text-sm md:text-base font-light font-[300] underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity">
              Send an Email
            </a>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-32 md:pb-40">
          <h2 className="text-[12vw] sm:text-[8rem] md:text-[10rem] font-light font-[300] leading-none tracking-tighter mb-16 md:mb-24 uppercase">
            CONTACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-light font-[300] tracking-tight">Location</h4>
              <p className="text-gray-500 text-sm font-light font-[300] leading-relaxed max-w-[200px]">
                Henri Barrett Lima<br />
                Av. Pethit Thoars 264, Miraflores
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-light font-[300] tracking-tight">Keynote Speaking</h4>
              <p className="text-gray-500 text-sm font-light font-[300] leading-relaxed max-w-[250px]">
                Want Luis Tateishi and Oswaldo Pescador to speak at your next event or be panelists for topics on business, brand, or culture?
              </p>
              <a href="mailto:speaking@henribarrett.com" className="text-sm font-light font-[300] underline underline-offset-4 decoration-1 mt-2 hover:opacity-60 transition-opacity">
                Send an Email
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-light font-[300] tracking-tight">Careers</h4>
              <p className="text-gray-500 text-sm font-light font-[300] leading-relaxed max-w-[250px]">
                We're always looking for talent to join our team. Apply now.
              </p>
              <a href="#careers" className="text-sm font-light font-[300] underline underline-offset-4 decoration-1 mt-2 hover:opacity-60 transition-opacity">
                See open positions
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }

  return (
    <div 
      key="home" 
      ref={mainContainerRef} 
      className="w-full transition-colors duration-200" 
      style={{ 
        backgroundColor: '#ffffff', 
        height: pageHeight > 0 ? `${pageHeight}px` : '800vh',
        minHeight: '600vh'
      }}
    >
      
      {/* NAVEGACIÓN */}
      <MainNav currentView={currentView} setCurrentView={setCurrentView} isHome navRef={navRef} />

      {/* VIDEO CLIP LAYER */}
      <div ref={videoContainerRef} className="fixed inset-0 w-full h-full bg-black z-10 shadow-2xl pointer-events-none" style={{ clipPath: 'inset(100vh 50% 0 50%)' }}>
        <video className="w-full h-full object-cover" src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted loop playsInline />
      </div>

      {/* INFO BAR */}
      <div ref={infoBarRef} className="fixed w-full z-30 flex justify-center opacity-0 pointer-events-none">
        <div className="flex gap-12 text-sm md:text-xl font-black tracking-[0.3em] uppercase">
          <div className="flex items-center gap-3"><span>Campaigns</span><Sun className="w-5 h-5 opacity-40"/></div>
          <div className="flex items-center gap-3"><span>Branding</span><Zap className="w-5 h-5 opacity-40"/></div>
          <div className="flex items-center gap-3"><span>Digital</span><Target className="w-5 h-5 opacity-40"/></div>
          <div className="flex items-center gap-3"><span>Content</span><Fingerprint className="w-5 h-5 opacity-40"/></div>
        </div>
      </div>

      {/* CONTENIDO SCROLLABLE */}
      <div ref={contentRef} className="fixed inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
            
            {/* HERO - ALINEACIÓN IZQUIERDA */}
            <div className="absolute top-[18vh] w-screen px-10 md:px-20 flex justify-start text-black">
                <div className="flex flex-col items-start leading-[0.82] max-w-max md:ml-[calc(120px+2rem)]">
                    <div className="flex items-center gap-10 relative">
                        <h1 className="text-[15.5vw] font-normal tracking-tighter uppercase">ALWAYS</h1>
                        <div className="w-[18vw] h-[18vw] translate-y-[-1vw] flex items-center justify-center opacity-90">
                           <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-1">
                              <path d="M40,150 Q100,20 160,150" />
                              <circle cx="100" cy="80" r="40" />
                              <circle cx="100" cy="80" r="15" />
                              <path d="M60,80 Q100,60 140,80" />
                              <path d="M80,120 L120,120" />
                           </svg>
                        </div>
                    </div>
                    <h1 className="text-[15.5vw] font-normal tracking-tighter uppercase leading-[0.82] -mt-[2.5vw]">WATCHING</h1>
                </div>
            </div>

            {/* 3 COLUMNS - PROPÓSITO */}
            <div className="absolute top-[75vh] w-screen px-10 md:px-20 flex justify-center text-black">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4 min-w-[120px]">
                        <ArrowDown className="w-20 h-20 stroke-[0.5]" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">Our Purpose</span>
                    </div>
                    <p className="text-2xl md:text-[2vw] text-center max-w-[none] font-light leading-[1.1] tracking-tight flex-1 px-4">
                        Our approach isn't just about producing eye-catching designs, it's about crafting <br className="hidden md:block" /> resonant brand messages that echo across audiences.
                    </p>
                    <div className="flex justify-center md:justify-end min-w-[120px]">
                        <Sun className="w-20 h-20 animate-[spin_12s_linear_infinite] opacity-60" />
                    </div>
                </div>
            </div>

            {/* DOCKING */}
            <div className="absolute top-[265vh] w-full flex justify-center px-4 text-black">
                <div className="flex flex-col items-center justify-center w-full max-w-[2200px] text-center overflow-visible">
                    <div className="flex items-center justify-center gap-x-12 leading-none mb-14 whitespace-nowrap">
                        <span style={{ fontSize: '18vh' }} className="font-normal tracking-tight uppercase leading-[0.95]">Inspired</span>
                        <div ref={finalPlaceholderRef} className="w-[30vw] h-[18vh] bg-transparent mx-4"></div>
                        <span style={{ fontSize: '18vh' }} className="font-normal tracking-tight uppercase leading-[0.95]">By</span>
                    </div>
                    <span style={{ fontSize: '18vh' }} className="font-normal tracking-tight uppercase leading-[0.95] whitespace-nowrap">The Unexpected</span>
                    <p className="mt-20 text-gray-400 font-mono text-[10px] uppercase tracking-[0.5em] font-black">Creative Direction &bull; MMXXIV</p>
                </div>
            </div>

            {/* ABOUT / ARCHITECTS - ACTUALIZADO: normal-case explícito y tracking-wide reforzado */}
            <div className="absolute top-[340vh] w-full px-6 md:px-12 pb-36 pointer-events-auto flex justify-center bg-white z-0 text-black shadow-[0_-50px_100px_rgba(255,255,255,1)]">
                <div className="w-full max-w-[1250px] flex flex-col md:flex-row gap-20 md:gap-4 pt-48">
                    <div className="w-full md:w-[30%]">
                        <h3 className="text-xl font-normal leading-tight opacity-100 tracking-tight normal-case !capitalize">Think big with us.</h3>
                    </div>
                    <div className="w-full md:w-[70%] flex flex-col gap-10">
                        <h2 className="text-[4.5vw] font-normal leading-[1.2] tracking-tight max-w-[22ch] !normal-case">
                          As architects of brand narratives, we amplify the voice to ensure they don't just talk but roar.
                        </h2>
                        <div className="max-w-3xl flex flex-col gap-12 mt-4">
                            <p className="text-xl md:text-[1.3rem] text-gray-900 leading-[1.5] font-normal tracking-[0.06em]">
                                At Henri Barrett, our essence is to simplify the complex. We understand that in the fast-paced world of business, our clients need agile, yet potent solutions. By leaning into our strengths in creativity, design, and a thirst for experimentation, we untangle the intricate knots of branding challenges.
                            </p>
                            
                            <div className="flex flex-col gap-4 mt-4">
                                <span className="text-sm font-black uppercase tracking-[0.3em] opacity-100 mb-2 font-sans">(CHOOSE YOUR PURPOSE)</span>
                                <div className="flex flex-col gap-2 items-start">
                                    <a href="#" className="text-xl md:text-2xl font-normal border-b border-black/30 pb-1 hover:border-black transition-all tracking-[0.04em]">Discover our services</a>
                                    <a href="#" className="text-xl md:text-2xl font-normal border-b border-black/30 pb-1 hover:border-black transition-all tracking-[0.04em]">Read our case studies</a>
                                    <a href="#" className="text-xl md:text-2xl font-normal border-b border-black/30 pb-1 hover:border-black transition-all tracking-[0.04em]">Explore the HUB® Method</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENIDO DINÁMICO (PORTFOLIO) */}
            <div ref={lastSectionRef} className="absolute top-[480vh] w-full pointer-events-auto flex flex-col items-center bg-white text-black z-10">
                {/* WORK WATERMARK - Fondo con texto completo que avanza con el scroll detrás de los proyectos */}
                <div className="absolute top-[2vh] left-0 w-full flex justify-center items-center z-0 select-none pointer-events-none overflow-visible">
                    <span 
                        ref={workTextRef} 
                        className="text-[34.5vw] font-light font-[300] leading-none tracking-tighter text-black uppercase block will-change-transform select-none text-center"
                    >
                        WORK
                    </span>
                </div>

                <div className="w-full max-w-[1250px] px-6 flex flex-col gap-12 relative pt-24 sm:pt-32 md:pt-40 z-10">
                    {/* PROYECTOS */}
                    {INITIAL_PROJECTS.map((project) => (
                    <div key={project.id} className="relative z-10 w-full h-[75vh] md:h-[90vh] overflow-hidden group mb-24">
                        <img src={project.image} alt={project.name} className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${project.className}`} />
                        <div className="absolute bottom-16 left-16">
                            <div className="bg-black/10 backdrop-blur-xl text-white px-10 py-3 rounded-full text-sm uppercase font-black tracking-widest border border-white/20">
                                {project.name}
                            </div>
                        </div>
                    </div>
                    ))}

                    {/* MARQUEE TRUSTED */}
                    <div className="w-full py-40 border-t border-gray-100 mt-20 overflow-hidden">
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] mb-16 pl-2 opacity-20">(TRUSTED BY VISIONARIES)</p>
                        <LogosGroup />
                    </div>

                    {/* CLIENT CASE STUDIES (REPLACES SELECTED WORKS) */}
                    <ClientCaseStudiesSection
                      onImageHover={(e, isHovering) => {
                        if (isHovering) {
                          lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                          if (cursorArrowRef.current) {
                            cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                          }
                          setCursorType('upRight');
                          setIsHoveringWork(true);
                        } else {
                          setIsHoveringWork(false);
                        }
                      }}
                    />

                    {/* PRAISE FROM CLIENTS */}
                    <PraiseFromClientsSection />

                    {/* FEATURED CLIENTS CAROUSEL */}
                    <FeaturedClientsSection />

                    {/* THE HUB */}
                    <div ref={hubSectionRef} className="w-full py-48 px-6 bg-white mt-20">
                        <div className="w-full max-w-[1250px] mx-auto flex flex-col md:flex-row gap-24 items-start">
                            <div className="w-full md:w-1/2 flex flex-col gap-12">
                                <h2 className="text-5xl md:text-8xl font-light font-[300] leading-[0.85] uppercase tracking-tighter">Henri Barrett is a movement.</h2>
                                <p className="text-2xl text-gray-500 font-light max-w-lg leading-relaxed">
                                    We're here to change narratives, elevate brands, and make a lasting imprint in the world of design.
                                </p>
                                <a href="#" className="text-xl font-black border-b-4 border-black pb-2 self-start uppercase tracking-widest mt-4">Explore the Hub®</a>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                <div className="w-full aspect-[4/5] overflow-hidden relative shadow-2xl rounded-lg">
                                    <img ref={hubImageRef} src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1200" alt="Studio" className="w-full h-full object-cover absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WHO IS BARRETT SECTION - REPLICATING ATTACHED DESIGN */}
                    <WhoIsBarrettSection />

                </div>

                {/* FOOTER */}
                <Footer />
            </div>
        </div>

      {/* PROGRESS UI */}
      <div className="fixed bottom-10 left-10 z-50 mix-blend-difference">
        <div className="border border-white/20 px-8 py-3 rounded-full backdrop-blur-2xl">
          <p className="text-white text-[10px] font-black tracking-[0.5em] uppercase opacity-60">Scroll Progress</p>
        </div>
      </div>

      {/* CURSOR PERSONALIZADO (FLECHA GRANDE PARA SELECTED WORKS) */}
      <div
        ref={cursorArrowRef}
        id="selected-works-custom-cursor"
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-200 hidden md:block will-change-transform ${
          isHoveringWork ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          transform: 'translate3d(-200px, -200px, 0)',
        }}
        aria-hidden="true"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex items-center justify-center border border-black/10 transition-transform duration-300 ease-out ${
            isHoveringWork ? (isMouseDown ? 'scale-90' : 'scale-100') : 'scale-40'
          }`}
        >
          {cursorType === 'right' ? (
            <MoveRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
          ) : (
            <MoveUpRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
          )}
        </div>
      </div>

    </div>
  );
};
