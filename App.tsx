import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import Lenis from 'lenis';
import { MoveUpRight, MoveRight, Zap, Target, Aperture, Fingerprint, ArrowDown, ArrowRight, ArrowLeft, Instagram, ChevronDown, Play, X, Volume2, VolumeX, Pause, RotateCcw, Link2, ExternalLink, Settings2, Edit3, Check, RefreshCw } from 'lucide-react';
import { FeaturedClientsSection } from './src/components/FeaturedClientsSection';
import { WhoIsBarrettSection } from './src/components/WhoIsBarrettSection';
import { ClientCaseStudiesSection } from './src/components/ClientCaseStudiesSection';
import { PraiseFromClientsSection } from './src/components/PraiseFromClientsSection';
import { AboutUsView } from './src/components/AboutUsView';
import { UmanaCaseStudy } from './src/components/case-study/UmanaCaseStudy';
import { RappiCaseStudy } from './src/components/case-study/RappiCaseStudy';
import { BarrettSessionsCaseStudy } from './src/components/case-study/BarrettSessionsCaseStudy';
import { PetcoCaseStudy } from './src/components/case-study/PetcoCaseStudy';
import { YummyCaseStudy } from './src/components/case-study/YummyCaseStudy';
import { HeinekenFestCaseStudy } from './src/components/case-study/HeinekenFestCaseStudy';
import { TeclabCaseStudy } from './src/components/case-study/TeclabCaseStudy';
import { PageTransitionCurtain, CurtainTheme, CurtainPhase } from './src/components/PageTransitionCurtain';
import { ExploreOrbitSpace } from './src/components/ExploreOrbitSpace';
import { MainNav, DynamicIsotype, DynamicLogotype, FullScreenMenu } from './src/components/MainNav';
import { HomeCharacterLottie } from './src/components/HomeCharacterLottie';
import { MaskTextReveal } from './src/components/MaskTextReveal';
import type { AppView } from './src/types';

export type { AppView };
export { MainNav };

// --- MAIN CODE ---

// --- DATOS ---
interface InitialProject {
  id: number;
  name: string;
  category: string;
  image: string;
  videoUrl?: string;
  view?: string;
}

const INITIAL_PROJECTS: InitialProject[] = [
  { 
    id: 1, 
    name: 'UMANA', 
    category: 'BRANDING', 
    image: '/images/umanabyhenribarrett.png',
    view: 'case-study-umana'
  },
  { 
    id: 2, 
    name: 'RAPPI', 
    category: 'EVENT', 
    image: '/images/rappi_spinning_kit.jpg',
    view: 'case-study-rappi'
  },
  { 
    id: 3, 
    name: 'YUMMY', 
    category: 'BRANDING', 
    image: '/images/yummybyhenribarrett.png',
    view: 'case-study-yummy'
  },
  { 
    id: 4, 
    name: 'TECLAB', 
    category: 'BRANDING', 
    image: '/images/teclab_hero.jpg',
    view: 'case-study-teclab'
  }
];

// Proyectos adicionales que se cargan al pulsar LOAD MORE (los mismos de la pestaña Work sin repetir los 4 primeros)
const MORE_WORK_PROJECTS: InitialProject[] = [
  {
    id: 103,
    name: 'BARRETT SESSION',
    category: 'BRAND, EVENT',
    image: '/images/barrett_sessions_pedestal_sign.jpg',
    view: 'case-study-barrett-sessions'
  },
  {
    id: 104,
    name: 'PETCO',
    category: 'BRANDING',
    image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=1200&auto=format&fit=crop',
    view: 'case-study-petco'
  },
  {
    id: 106,
    name: 'PISCO TACAMA',
    category: 'REBRAND',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 108,
    name: 'NIKE FORWARD',
    category: 'CAMPAIGN',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 109,
    name: 'SPOTIFY GREENROOM',
    category: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 110,
    name: 'INTERBANK HUB',
    category: 'CAMPAIGN',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  }
];

interface HomeVideoServiceItem {
  label: string;
  icon: string;
  fallback: string;
}

const HOME_VIDEO_SERVICES: HomeVideoServiceItem[] = [
  { 
    label: 'CAMPAINGS', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_001.svg', 
    fallback: '/icons/icon_symbol_001.svg' 
  },
  { 
    label: 'BRANDING', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_002.svg', 
    fallback: '/icons/icon_symbol_002.svg' 
  },
  { 
    label: 'EVENT', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_003.svg', 
    fallback: '/icons/icon_symbol_003.svg' 
  },
  { 
    label: 'TRADE', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_004.svg', 
    fallback: '/icons/icon_symbol_004.svg' 
  },
  { 
    label: 'DIGITAL', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_005.svg', 
    fallback: '/icons/icon_symbol_005.svg' 
  },
  { 
    label: 'CONTENT', 
    icon: 'https://henribarrett.com/assets/site/svg/home/icon_symbol_006.svg', 
    fallback: '/icons/icon_symbol_006.svg' 
  },
];

const ALL_PROJECTS = [
  { id: 101, title: 'Umana', category: 'Brand', image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1200&auto=format&fit=crop' },
  { id: 102, title: 'Rappi', category: 'Event', image: '/images/rappi_spinning_kit.jpg' },
  { id: 103, title: 'Barrett Session', category: 'Brand, Event', image: '/images/barrett_sessions_pedestal_sign.jpg' },
  { id: 104, title: 'Petco', category: 'Brand', image: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=1200&auto=format&fit=crop' },
  { id: 105, title: 'Heineken Fest', category: 'Event', image: '/images/heineken_fest_hero.jpg' },
  { id: 106, title: 'Pisco Tacama', category: 'Rebrand', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop' },
  { id: 107, title: 'Yummy Delivery', category: 'Brand', image: '/images/yummy_hero.jpg' },
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

const VISIONARIES_LOGOS = [
  { name: 'Heineken', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_heineken.svg' },
  { name: 'UPC', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_upc.svg' },
  { name: 'Interbank', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_interbank.svg' },
  { name: 'PedidosYa', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_pedidos_ya.svg' },
  { name: 'Laive', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_laive.svg' },
  { name: 'Café Lima', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_cafe_lima.svg' },
  { name: 'El Comercio', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_el_comercio.svg' },
  { name: 'Rókys', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_rokys.svg' },
  { name: 'MG', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_MG.svg' },
  { name: 'Dove', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_dove.svg' },
  { name: 'Sarcay', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_sarcay.svg' },
  { name: 'Oeschle', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_oeschle.svg' },
  { name: 'Universidad Científica', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_uni_cientifica.svg' },
  { name: 'Pickagood', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_pickagood.svg' },
  { name: 'Teclab', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_teclab.svg' },
  { name: 'Cordillera', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_cordillera.svg' },
  { name: 'Avinka', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_avinka.svg' },
  { name: 'Amoramar', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_amoramar.svg' },
  { name: 'Oakberry', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_oakberry.svg' },
  { name: 'El Turco', url: 'https://henribarrett.com/assets/site/svg/home/visionaries_logo_el_turco.svg' },
];

const getVisionaryLogoConfig = (name: string, isHomeLogosGroup: boolean) => {
  switch (name) {
    case 'El Turco':
      return {
        // Generous container and padding to ensure hat and letters never touch borders or get cut off
        containerClass: isHomeLogosGroup 
          ? 'min-w-[150px] sm:min-w-[180px] md:min-w-[210px] h-20 sm:h-24 md:h-28 flex items-center justify-center p-1 sm:p-2' 
          : 'min-w-[130px] sm:min-w-[160px] md:min-w-[190px] h-16 sm:h-18 md:h-20 flex items-center justify-center p-1',
        imgClass: isHomeLogosGroup 
          ? 'h-14 sm:h-18 md:h-22 lg:h-24 max-w-[180px] sm:max-w-[210px] md:max-w-[240px]' 
          : 'h-12 sm:h-14 md:h-16 max-w-[160px] sm:max-w-[185px]',
      };
    case 'MG':
      return {
        // Enlarge MG octagon logo so it matches the visual presence of horizontal logos
        containerClass: isHomeLogosGroup 
          ? 'min-w-[125px] sm:min-w-[155px] md:min-w-[185px] h-18 sm:h-22 md:h-24 flex items-center justify-center' 
          : 'min-w-[110px] sm:min-w-[135px] md:min-w-[160px] h-14 sm:h-16 md:h-18 flex items-center justify-center',
        imgClass: isHomeLogosGroup 
          ? 'h-12 sm:h-14 md:h-17 lg:h-19 max-w-[140px] sm:max-w-[170px] md:max-w-[190px]' 
          : 'h-10 sm:h-12 md:h-14 max-w-[120px] sm:max-w-[145px]',
      };
    case 'PedidosYa':
      return {
        containerClass: isHomeLogosGroup 
          ? 'min-w-[135px] sm:min-w-[165px] md:min-w-[195px] h-14 sm:h-16 md:h-18 flex items-center justify-center' 
          : 'min-w-[120px] sm:min-w-[150px] md:min-w-[175px] h-12 sm:h-14 md:h-16 flex items-center justify-center',
        imgClass: isHomeLogosGroup 
          ? 'h-11 sm:h-13 md:h-15 lg:h-16 max-w-[180px] sm:max-w-[210px] md:max-w-[240px]' 
          : 'h-9 sm:h-11 md:h-13 max-w-[160px] sm:max-w-[190px]',
      };
    case 'Heineken':
      return {
        containerClass: isHomeLogosGroup 
          ? 'min-w-[155px] sm:min-w-[195px] md:min-w-[235px] h-16 sm:h-18 md:h-20 flex items-center justify-center' 
          : 'min-w-[130px] sm:min-w-[165px] md:min-w-[195px] h-13 sm:h-15 md:h-17 flex items-center justify-center',
        imgClass: isHomeLogosGroup 
          ? 'h-13 sm:h-15 md:h-17 lg:h-19 max-w-[210px] sm:max-w-[245px] md:max-w-[280px]' 
          : 'h-10 sm:h-12 md:h-14 max-w-[185px] sm:max-w-[220px]',
      };
    case 'Cordillera':
      return {
        containerClass: isHomeLogosGroup 
          ? 'min-w-[145px] sm:min-w-[180px] md:min-w-[215px] h-14 sm:h-16 md:h-18 flex items-center justify-center' 
          : 'min-w-[125px] sm:min-w-[155px] md:min-w-[185px] h-12 sm:h-14 md:h-16 flex items-center justify-center',
        imgClass: isHomeLogosGroup 
          ? 'h-11 sm:h-13 md:h-15 lg:h-16 max-w-[200px] sm:max-w-[230px] md:max-w-[260px]' 
          : 'h-9 sm:h-11 md:h-13 max-w-[180px] sm:max-w-[210px]',
      };
    default:
      return {
        containerClass: isHomeLogosGroup 
          ? 'min-w-[110px] sm:min-w-[140px] md:min-w-[170px] h-10 sm:h-12 md:h-14 flex items-center justify-center' 
          : 'min-w-[100px] sm:min-w-[130px] md:min-w-[150px] h-9 sm:h-11 md:h-12 flex items-center justify-center',
        imgClass: isHomeLogosGroup 
          ? 'h-7 sm:h-9 md:h-10 lg:h-11 max-w-[140px] sm:max-w-[170px] md:max-w-[200px]' 
          : 'h-7 sm:h-8 md:h-9 max-w-[140px] sm:max-w-[160px]',
      };
  }
};

const TrustedByVisionariesSection = () => {
  useEffect(() => {
    VISIONARIES_LOGOS.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });
  }, []);

  return (
    <section className="w-full pt-6 sm:pt-10 pb-20 sm:pb-28 overflow-hidden">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1500px] mx-auto mb-10 sm:mb-14">
        <h3 className="text-sm sm:text-base font-bold tracking-tight text-black uppercase select-none">
          (TRUSTED BY VISIONARIES)
        </h3>
      </div>

      <div className="w-full overflow-hidden select-none opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 py-4 sm:py-6">
        <div 
          className="flex w-max animate-marquee-right items-center will-change-transform" 
          style={{ animationDuration: '45s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div 
              key={`tbv-track-${trackIdx}`} 
              className="flex items-center shrink-0 gap-10 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16"
            >
              {VISIONARIES_LOGOS.map((item, idx) => {
                const config = getVisionaryLogoConfig(item.name, false);
                return (
                  <div
                    key={`tbv-${trackIdx}-${item.name}-${idx}`}
                    className={`inline-flex items-center justify-center shrink-0 ${config.containerClass} px-2 select-none hover:scale-105 transition-transform`}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className={`${config.imgClass} w-auto object-contain pointer-events-none origin-center`}
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          ))}
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
              <MaskTextReveal
                as="h2"
                className="text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.6vw] font-normal uppercase tracking-[-0.035em] text-black leading-none"
                text={item.title}
              />
              <span className="text-[8.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[4.6vw] font-normal tracking-[-0.03em] text-black leading-none">
                {item.num}
              </span>
            </div>

            {/* CONTENIDO INFERIOR: TEXTOS A LA IZQUIERDA Y RECUADRO DE MEDIA A LA DERECHA */}
            <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
              {/* COLUMNA IZQUIERDA: TITULAR SECUNDARIO Y PÁRRAFOS */}
              <div className="md:col-span-8 flex flex-col justify-between h-full">
                <MaskTextReveal
                  as="h3"
                  delay={0.15}
                  className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.03em] font-normal text-black max-w-[24ch]"
                  text={item.subhead}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-14 md:mt-20 max-w-[62ch]">
                  <MaskTextReveal
                    as="p"
                    delay={0.25}
                    className="text-xs sm:text-[13px] leading-[1.5] text-black/75 font-normal"
                    text={item.text1}
                  />
                  <MaskTextReveal
                    as="p"
                    delay={0.3}
                    className="text-xs sm:text-[13px] leading-[1.5] text-black/75 font-normal"
                    text={item.text2}
                  />
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
      <MaskTextReveal
        as="h2"
        className="text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5vw] font-normal uppercase tracking-[-0.035em] text-black leading-[0.88] select-none"
        lines={['SPACES WE', 'WORK IN']}
      />

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
              className="inline-flex items-center gap-1.5 text-base sm:text-lg tracking-tight text-black pb-0.5 animated-underline font-normal cursor-pointer"
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
  useEffect(() => {
    // Eagerly preload all visionary brand logos into browser memory to eliminate image load jumps
    VISIONARIES_LOGOS.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });
  }, []);

  return (
    <div className="w-full overflow-hidden flex opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 py-4 sm:py-6 md:py-8">
      <div 
        className="flex w-max animate-marquee-right whitespace-nowrap will-change-transform items-center" 
        style={{ animationDuration: '45s' }}
      >
        {[0, 1].map((trackIdx) => (
          <div 
            key={`logos-track-${trackIdx}`} 
            className="flex items-center shrink-0 gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16"
          >
            {VISIONARIES_LOGOS.map((item, idx) => {
              const config = getVisionaryLogoConfig(item.name, true);
              return (
                <div
                  key={`vis-logo-${trackIdx}-${item.name}-${idx}`}
                  className={`inline-flex items-center justify-center shrink-0 ${config.containerClass} px-4 sm:px-6 md:px-8 select-none transition-transform duration-300 hover:scale-105`}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className={`${config.imgClass} w-auto object-contain pointer-events-none origin-center`}
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterMaskItem: React.FC<{
  children: React.ReactNode;
  isRevealed: boolean;
  delay?: number;
  className?: string;
  angle?: number;
}> = ({ children, isRevealed, delay = 0, className = '', angle = 0 }) => (
  <div className={`overflow-hidden pt-0.5 pb-0.5 ${className}`}>
    <div
      className="will-change-transform"
      style={{
        transform: isRevealed
          ? 'translate3d(0, 0%, 0) rotate(0deg)'
          : `translate3d(0, 125%, 0) rotate(${angle}deg)`,
        transformOrigin: '0% 100%',
        opacity: isRevealed ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity 0.75s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  </div>
);

const Footer: React.FC<{ className?: string; onNavigate?: (view: AppView) => void }> = ({ className = "mt-32", onNavigate }) => {
  const footerRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;
    const el = footerRef.current;
    if (!el) return;

    const check = () => {
      if (isRevealed) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.95 && rect.bottom >= 0) {
        setIsRevealed(true);
      }
    };

    check();
    const interval = setInterval(check, 100);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
      );
      observer.observe(el);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      if (observer) observer.disconnect();
    };
  }, [isRevealed]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer
      ref={footerRef}
      className={`relative w-full bg-black text-white z-20 pt-24 pb-12 px-6 md:px-12 ${className}`}
      style={{ backgroundColor: '#000000' }}
    >
      <div className="w-full max-w-[1250px] mx-auto">
        <div className="flex justify-between items-start w-full mb-16 pb-12 border-b border-gray-800">
          <div className="overflow-hidden pt-1 pb-1">
            <button 
              onClick={() => onNavigate?.('home')} 
              className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center will-change-transform" 
              title="Henri Barrett - Home"
              style={{
                transform: isRevealed ? 'translate3d(0, 0%, 0)' : 'translate3d(0, 125%, 0)',
                opacity: isRevealed ? 1 : 0,
                transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease-out'
              }}
            >
              <div className="inline-flex items-center justify-center animate-clock-tick origin-center">
                <DynamicIsotype className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
            </button>
          </div>
          <div className="overflow-hidden pt-1 pb-1">
            <span 
              className="inline-block text-3xl md:text-5xl font-black uppercase tracking-tighter text-right leading-none will-change-transform"
              style={{
                transform: isRevealed ? 'translate3d(0, 0%, 0) rotate(0deg)' : 'translate3d(0, 125%, 0) rotate(2.5deg)',
                transformOrigin: '0% 100%',
                opacity: isRevealed ? 1 : 0,
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, opacity 0.8s ease-out 0.08s'
              }}
            >
              HENRI BARRETT
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <FooterMaskItem isRevealed={isRevealed} delay={0.2} angle={2}>
              <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Agency</h4>
            </FooterMaskItem>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.28}>
                  <button onClick={() => onNavigate?.('home')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Home</button>
                </FooterMaskItem>
              </li>
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.36}>
                  <button onClick={() => onNavigate?.('work')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Case Studies</button>
                </FooterMaskItem>
              </li>
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.44}>
                  <button onClick={() => onNavigate?.('services')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Services</button>
                </FooterMaskItem>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <FooterMaskItem isRevealed={isRevealed} delay={0.22} angle={2}>
              <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Discover</h4>
            </FooterMaskItem>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.3}>
                  <button onClick={() => onNavigate?.('home')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Henri Barrett Hub®</button>
                </FooterMaskItem>
              </li>
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.38}>
                  <button onClick={() => onNavigate?.('work')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Shop</button>
                </FooterMaskItem>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <FooterMaskItem isRevealed={isRevealed} delay={0.24} angle={2}>
              <h4 className="text-lg font-bold uppercase tracking-widest opacity-40">Learn</h4>
            </FooterMaskItem>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.32}>
                  <button onClick={() => onNavigate?.('quicklys')} className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Articles</button>
                </FooterMaskItem>
              </li>
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.4}>
                  <button className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">Press</button>
                </FooterMaskItem>
              </li>
              <li>
                <FooterMaskItem isRevealed={isRevealed} delay={0.48}>
                  <button className="nav-animated-link text-gray-400 hover:text-white cursor-pointer transition-colors pb-0.5 text-left">FAQs</button>
                </FooterMaskItem>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            {/* Aparece después de las demás palabras */}
            <FooterMaskItem isRevealed={isRevealed} delay={0.68} angle={1.5}>
              <h4 className="text-lg font-bold leading-tight">Get strategy and brand insights straight to your inbox.</h4>
            </FooterMaskItem>

            {/* "your email here" y la línea que se dibuja de 0% a 100% */}
            <div className="flex flex-col w-full">
              <FooterMaskItem isRevealed={isRevealed} delay={0.84}>
                <input 
                  type="email" 
                  placeholder="Your email here" 
                  className="bg-transparent pb-2 focus:outline-none text-white placeholder-gray-500 transition-colors w-full text-sm" 
                />
              </FooterMaskItem>
              {/* Línea que se dibuja de 0% a 100% */}
              <div className="w-full overflow-hidden">
                <div 
                  className="h-[1px] bg-gray-600 w-full will-change-transform"
                  style={{
                    transformOrigin: 'left center',
                    transform: isRevealed ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.95s'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-[10px] text-gray-500 uppercase tracking-widest">
          <FooterMaskItem isRevealed={isRevealed} delay={0.6}>
            <span>© 2024/25 Henri Barrett® | Lima | Perú</span>
          </FooterMaskItem>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <FooterMaskItem isRevealed={isRevealed} delay={0.65}>
              <div className="flex items-center gap-8">
                <Instagram className="w-5 h-5 text-white cursor-pointer hover:opacity-80 transition-opacity" />
                <button onClick={scrollToTop} className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer">
                  Back to top <ArrowDown className="w-3 h-3 rotate-180" />
                </button>
              </div>
            </FooterMaskItem>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- EXPLORE ORBIT SPACE (MODO EXPLORE EN WORK) ---
// Movido a ./src/components/ExploreOrbitSpace.tsx y vinculado directamente a ALL_PROJECTS

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
    image: '/images/petco_header.png',
    client: 'Petco Botanicals'
  },
  {
    id: 'yummy',
    name: 'YUMMY',
    category: 'Brand',
    image: '/images/yummy_hero.jpg',
    client: 'Yummy Super App'
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
    image: '/images/teclab_hero.jpg',
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
                {displayedProject.name.toLowerCase().includes('rappi') && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-rappi');
                    }}
                    className="text-xs font-semibold text-[#FF553E] underline hover:opacity-75 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
                {(displayedProject.name.toLowerCase().includes('barrett') || displayedProject.name.toLowerCase().includes('session')) && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-barrett-sessions');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-75 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
                {displayedProject.name.toLowerCase().includes('petco') && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-petco');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-75 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
                {displayedProject.name.toLowerCase().includes('yummy') && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-yummy');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-75 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
                {(displayedProject.name.toLowerCase().includes('heineken') || displayedProject.name.toLowerCase().includes('fest')) && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-heineken-fest');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-75 cursor-pointer"
                  >
                    Ver portfolio →
                  </button>
                )}
                {displayedProject.name.toLowerCase().includes('teclab') && onOpenCaseStudy && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCaseStudy('case-study-teclab');
                    }}
                    className="text-xs font-semibold text-black underline hover:opacity-75 cursor-pointer"
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
                {selectedModal.name.toLowerCase().includes('rappi') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-rappi');
                    }}
                    className="px-6 py-2.5 bg-[#FF553E] text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#e04430] transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {(selectedModal.name.toLowerCase().includes('barrett') || selectedModal.name.toLowerCase().includes('session')) && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-barrett-sessions');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {selectedModal.name.toLowerCase().includes('petco') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-petco');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {selectedModal.name.toLowerCase().includes('yummy') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-yummy');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {(selectedModal.name.toLowerCase().includes('heineken') || selectedModal.name.toLowerCase().includes('fest')) && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-heineken-fest');
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-neutral-800 transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-2"
                  >
                    Ver caso de estudio →
                  </button>
                )}
                {selectedModal.name.toLowerCase().includes('teclab') && onOpenCaseStudy && (
                  <button 
                    onClick={() => {
                      setSelectedModal(null);
                      onOpenCaseStudy('case-study-teclab');
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
        <MaskTextReveal
          as="p"
          className="text-[32px] sm:text-[46px] md:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[74px] font-normal tracking-[-0.03em] text-black !text-black normal-case max-w-[1240px]"
          style={{
            fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
          text="As architects of brand narratives, we amplify the voice to ensure they don't just talk but roar."
        />
      </div>
    </div>
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
        <MaskTextReveal 
          as="h2"
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[112px] font-normal tracking-[-0.04em] uppercase text-black leading-none"
          style={{
            fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}
          text="ALL QUICKLYS"
        />
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


// --- COMPONENTE DE TARJETA CON DEVELO DE MÁSCARA EXPANDIBLE DESDE EL CENTRO ---
interface HomeWorkCardProps {
  project: InitialProject;
  isLast: boolean;
  lastProjectRef?: React.RefObject<HTMLDivElement>;
  onNavigate: (view: AppView) => void;
  onHoverStart: (e: React.MouseEvent) => void;
  onHoverMove: (e: React.MouseEvent) => void;
  onHoverEnd: () => void;
}

const HomeWorkCard: React.FC<HomeWorkCardProps> = ({
  project,
  isLast,
  lastProjectRef,
  onNavigate,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isRevealed) return;
    const el = containerRef.current;
    if (!el) return;

    const check = () => {
      if (isRevealed) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Se devela suavemente cuando la parte superior de la tarjeta entra en el 86% del viewport
      if (rect.top <= windowHeight * 0.86 && rect.bottom >= 0) {
        setIsRevealed(true);
      }
    };

    check();
    const interval = setInterval(check, 100);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
      );
      observer.observe(el);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      if (observer) observer.disconnect();
    };
  }, [isRevealed]);

  const setRefs = (node: HTMLDivElement | null) => {
    (containerRef as any).current = node;
    if (isLast && lastProjectRef) {
      (lastProjectRef as any).current = node;
    }
  };

  return (
    <div
      ref={setRefs}
      onClick={() => {
        if (project.view) {
          onNavigate(project.view as AppView);
        }
      }}
      onMouseEnter={onHoverStart}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
      className="relative z-10 w-full max-w-[1430px] aspect-[1430/770] min-[1500px]:w-[1430px] min-[1500px]:h-[770px] overflow-hidden group cursor-pointer select-none bg-[#0a0a0a]"
      style={{
        maxWidth: '1430px',
        aspectRatio: '1430 / 770',
        opacity: isRevealed ? 1 : 0,
        // Animación de develo de máscara: apertura concéntrica de 85% a 100% (inset de 7.5% por cada lado = 85% del tamaño total)
        clipPath: isRevealed ? 'inset(0% 0% 0% 0%)' : 'inset(7.5% 7.5% 7.5% 7.5%)',
        WebkitClipPath: isRevealed ? 'inset(0% 0% 0% 0%)' : 'inset(7.5% 7.5% 7.5% 7.5%)',
        transform: isRevealed ? 'scale(1)' : 'scale(0.98)',
        filter: isRevealed ? 'blur(0px)' : 'blur(2px)',
        transition: 'clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, -webkit-clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, filter 0.65s ease-out',
        willChange: 'clip-path, opacity, transform, filter'
      }}
    >
      {/* MEDIA (FOTO O VIDEO) */}
      {project.videoUrl ? (
        <div className="w-full h-full relative overflow-hidden pointer-events-none bg-black">
          <iframe
            src={project.videoUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] min-w-full min-h-full pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{ border: 'none' }}
            allow="autoplay; fullscreen; picture-in-picture"
            title={project.name}
          />
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${
            isRevealed ? 'scale-100' : 'scale-102'
          }`}
          style={{
            transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      )}

      {/* Gradiente sutil inferior para asegurar contraste y legibilidad óptima */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none z-10" />

      {/* ETIQUETAS INFERIORES: RÉPLICA DEL DISEÑO DE LA FOTO DE REFERENCIA */}
      <div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 md:px-8 flex items-center justify-between z-20 pointer-events-none transition-all duration-700 delay-300"
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        {/* IZQUIERDA: RECUADRO CON BORDE CIRCULAR */}
        <div className="rounded-full border border-white/90 px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 text-white text-[11px] sm:text-[12px] md:text-[13px] font-normal tracking-wider uppercase flex items-center justify-center bg-black/25 backdrop-blur-[2px] pointer-events-auto transition-all duration-300 group-hover:border-white group-hover:bg-black/50">
          <span>{project.name}</span>
        </div>

        {/* DERECHA: CATEGORÍA DEL TRABAJO */}
        <div className="text-white text-[11px] sm:text-[12px] md:text-[13px] font-normal tracking-[0.16em] uppercase select-none pointer-events-auto drop-shadow-sm">
          <span>{project.category}</span>
        </div>
      </div>
    </div>
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
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const lastProjectRef = useRef<HTMLDivElement>(null);
  const servicesMarqueeRef = useRef<HTMLDivElement>(null);
  const hubImageRef = useRef<HTMLImageElement>(null);
  const hubSectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const approachFirstLineRef = useRef<HTMLSpanElement>(null);
  const approachIsologoRef = useRef<HTMLImageElement>(null);
  const approachIsologoTabletRef = useRef<HTMLImageElement>(null);
  const startVideoPlaceholderTabletRef = useRef<HTMLDivElement>(null);
  const approachIsologoRotation = useRef(0);
  const lastScrollYForIsologo = useRef(0);
  const inspiredDockingRef = useRef<HTMLDivElement>(null);
  const [inspiredRevealed, setInspiredRevealed] = useState(false);
  const [hero1920Margin, setHero1920Margin] = useState<number | null>(null);

  // Alineación exclusiva para resolución 1920: alinea el bloque ALWAYS + personaje + WATCHING
  useEffect(() => {
    const updateHeroAlignment = () => {
      if (window.innerWidth >= 1750 && approachFirstLineRef.current && heroWrapperRef.current) {
        const textLeft = approachFirstLineRef.current.getBoundingClientRect().left;
        const containerRect = heroWrapperRef.current.getBoundingClientRect();
        const paddingLeft = parseFloat(window.getComputedStyle(heroWrapperRef.current).paddingLeft) || 0;
        const margin = textLeft - (containerRect.left + paddingLeft) - 75;
        if (margin > 0) {
          setHero1920Margin(Math.round(margin));
        } else {
          setHero1920Margin(0);
        }
      } else {
        setHero1920Margin(null);
      }
    };

    updateHeroAlignment();
    window.addEventListener('resize', updateHeroAlignment);
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(updateHeroAlignment);
    }
    const timer1 = setTimeout(updateHeroAlignment, 150);
    const timer2 = setTimeout(updateHeroAlignment, 600);

    return () => {
      window.removeEventListener('resize', updateHeroAlignment);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const currentScrollY = useRef(0);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  // --- SMOOTH SCROLLING (LENIS) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // --- VISTAS Y FILTROS (SECCIÓN WORK) ---
  const [currentView, setInternalView] = useState<AppView>('home');
  const currentViewRef = useRef(currentView);
  useEffect(() => {
    currentViewRef.current = currentView;
  }, [currentView]);

  // --- TRANSICIÓN DE CORTINA ANIMADA (LOADER DE PÁGINA) ---
  const [curtainActive, setCurtainActive] = useState(false);
  const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>('idle');
  const [curtainTheme, setCurtainTheme] = useState<CurtainTheme>('black');
  const isNavigatingRef = useRef(false);
  const lastCurtainThemeRef = useRef<CurtainTheme>('black');

  const setCurrentView = useCallback((nextView: AppView) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;

    if (nextView === 'work') {
      setViewMode('grid');
    }

    // Alternar aleatoriamente entre versión negra y versión blanca
    // Permite que unas veces salga la versión negra y otras la blanca
    const rand = Math.random();
    const nextTheme: CurtainTheme = rand < 0.65
      ? (lastCurtainThemeRef.current === 'black' ? 'white' : 'black')
      : (rand < 0.825 ? 'black' : 'white');
    lastCurtainThemeRef.current = nextTheme;

    setCurtainTheme(nextTheme);
    setCurtainActive(true);
    setCurtainPhase('entering');

    // 1. Fase de Entrada (fondo sube con desaceleración fluida y orgánica, logo sube desde medio camino): 620ms
    setTimeout(() => {
      setCurtainPhase('holding');

      // Durante la fase de mantenimiento (pantalla 100% cubierta):
      // Cambiamos la vista real y reseteamos el scroll de forma imperceptible
      if (nextView === 'work') {
        setViewMode('grid');
      }
      setInternalView(nextView);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      currentScrollY.current = 0;
      lastScrollYForIsologo.current = 0;

      // 2. Mantenimiento / Punto medio (el logo en el centro gira de forma dinámica y continua): 1100ms
      setTimeout(() => {
        setCurtainPhase('exiting');

        // 3. Fase de Salida (fondo y logo suben hacia arriba saliendo fluidamente de la pantalla): 440ms
        setTimeout(() => {
          setCurtainPhase('idle');
          setCurtainActive(false);
          isNavigatingRef.current = false;
        }, 440);
      }, 1100);
    }, 620);
  }, []);

  // Reset scroll al cambiar de vista y asegurar que work siempre inicie en Grid
  useEffect(() => {
    window.scrollTo(0, 0);
    currentScrollY.current = 0;
    lastScrollYForIsologo.current = 0;
    if (currentView === 'work') {
      setViewMode('grid');
    }
  }, [currentView]);
  const [viewMode, setViewMode] = useState<'grid' | 'explore' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects (10)');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [homeProjects, setHomeProjects] = useState<InitialProject[]>(INITIAL_PROJECTS);
  const [isLoadingMoreProjects, setIsLoadingMoreProjects] = useState(false);

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
  const [cursorType, setCursorType] = useState<'upRight' | 'right'>('right');
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

      // Rotación del isologo de Henri Barrett: gira exclusivamente al hacer scroll down
      const isologoScrollDiff = currentScrollY.current - lastScrollYForIsologo.current;
      if (isologoScrollDiff > 0.05) {
        approachIsologoRotation.current = (approachIsologoRotation.current + isologoScrollDiff * 0.45) % 360;
        if (approachIsologoRef.current) {
          approachIsologoRef.current.style.transform = `rotate(${approachIsologoRotation.current}deg)`;
        }
        if (approachIsologoTabletRef.current) {
          approachIsologoTabletRef.current.style.transform = `rotate(${approachIsologoRotation.current}deg)`;
        }
      }
      lastScrollYForIsologo.current = currentScrollY.current;

      const animationRange = windowHeight * 2.5; 
      const scrollProgress = Math.max(0, Math.min(currentScrollY.current / animationRange, 1));

      if (videoContainerRef.current) {
        const distFromCenter = Math.abs(scrollProgress - 0.5);
        const progressToCenter = Math.max(0, 1 - (distFromCenter / 0.5));
        const darkness = Math.min(1, Math.pow(progressToCenter, 1.4) * 1.7); 
        
        const bgVal = Math.round(255 - (255 * darkness)); 
        const textVal = Math.round(0 + (255 * darkness));

        if (mainContainerRef.current) mainContainerRef.current.style.backgroundColor = `rgb(${bgVal}, ${bgVal}, ${bgVal})`;
        if (infoBarRef.current) infoBarRef.current.style.color = '#ffffff';
        if (navRef.current) navRef.current.style.color = `rgb(${textVal}, ${textVal}, ${textVal})`;

        const isTablet = windowWidth <= 1024;

        let widthEnd = 180, heightEnd = 80, topEnd = windowHeight - 200, leftEnd = (windowWidth - 180) / 2;
        if (finalPlaceholderRef.current) {
          const rect = finalPlaceholderRef.current.getBoundingClientRect();
          topEnd = rect.top; leftEnd = rect.left; widthEnd = rect.width; heightEnd = rect.height;
        }

        let widthStart = 500, heightStart = 300, topStart = windowHeight * 0.95, leftStart = (windowWidth - 500) / 2;
        let widthMid = windowWidth, leftMid = 0, heightMid = 600, topMid = (windowHeight - 600) / 2 - 80;

        if (isTablet) {
          if (startVideoPlaceholderTabletRef.current) {
            const startRect = startVideoPlaceholderTabletRef.current.getBoundingClientRect();
            widthStart = startRect.width || Math.min(460, windowWidth * 0.82);
            heightStart = startRect.height || Math.round(widthStart * 0.5625);
            leftStart = startRect.left || (windowWidth - widthStart) / 2;
            topStart = startRect.top + currentScrollY.current;
          } else {
            widthStart = Math.min(460, windowWidth * 0.82);
            heightStart = Math.round(widthStart * 0.5625);
            leftStart = (windowWidth - widthStart) / 2;
            topStart = 680;
          }

          widthMid = windowWidth;
          leftMid = 0;
          heightMid = Math.round(windowWidth * 0.5625);
          topMid = Math.round((windowHeight - heightMid) / 2 - 36);
        }

        let currentTop, currentLeft, currentWidth, currentHeight;
        if (scrollProgress <= 0.5) {
          const phase = scrollProgress * 2;
          const ease = phase < 0.5 ? 2 * phase * phase : -1 + (4 - 2 * phase) * phase;

          if (isTablet) {
            const effectiveStartTop = topStart - currentScrollY.current;
            currentTop = effectiveStartTop + (topMid - effectiveStartTop) * ease;
            currentLeft = leftStart + (leftMid - leftStart) * ease;
            currentWidth = widthStart + (widthMid - widthStart) * ease;
            currentHeight = heightStart + (heightMid - heightStart) * ease;
          } else {
            currentTop = topStart + (topMid - topStart) * ease;
            currentLeft = leftStart + (leftMid - leftStart) * ease;
            currentWidth = widthStart + (widthMid - widthStart) * ease;
            currentHeight = heightStart + (heightMid - heightStart) * ease;
          }
        } else {
          const phase = (scrollProgress - 0.5) * 2;
          const ease = phase < 0.5 ? 2 * phase * phase : -1 + (4 - 2 * phase) * phase;
          currentTop = topMid + (topEnd - topMid) * ease;
          currentLeft = leftMid + (leftEnd - leftMid) * ease;
          currentWidth = widthMid + (widthEnd - widthMid) * ease;
          currentHeight = heightMid + (heightEnd - heightMid) * ease;
        }

        if (currentViewRef.current === 'home') {
          const clampedTop = Math.max(-150, currentTop);
          const clampedLeft = Math.max(0, currentLeft);
          const clampedRight = Math.max(0, windowWidth - (currentLeft + currentWidth));
          const clampedBottom = Math.max(0, windowHeight - (currentTop + currentHeight));
          const clipVal = `inset(${clampedTop}px ${clampedRight}px ${clampedBottom}px ${clampedLeft}px)`;
          videoContainerRef.current.style.clipPath = clipVal;
          (videoContainerRef.current.style as any).webkitClipPath = clipVal;

          if (scrollProgress >= 1 && finalPlaceholderRef.current) {
            const rect = finalPlaceholderRef.current.getBoundingClientRect();
            if (rect.bottom < -100) {
              videoContainerRef.current.style.opacity = '0';
            } else {
              videoContainerRef.current.style.opacity = '1';
            }
          } else {
            videoContainerRef.current.style.opacity = '1';
          }
        }
        
        if (infoBarRef.current && currentViewRef.current === 'home') {
            let opacity = Math.max(0, Math.min(1 - Math.abs(scrollProgress - 0.5) * 8, 1));
            infoBarRef.current.style.opacity = opacity.toString();
            infoBarRef.current.style.top = `${topMid + heightMid + (isTablet ? 24 : 32)}px`;
        }
      }

      if (workTextRef.current) {
        // Obtenemos el offset exacto de la sección de portfolio
        const startOffset = lastSectionRef.current ? lastSectionRef.current.offsetTop : windowHeight * 4.8;
        const scrollDelta = currentScrollY.current - startOffset;
        if (scrollDelta > 0) {
          // El texto avanza fluidamente hacia abajo acompañando el scroll y pasando por detrás de las tarjetas.
          // Se detiene exactamente al final del último trabajo (Heineken Fest) sin invadir las secciones inferiores.
          let maxParallax = windowHeight * 2.2;
          if (projectsSectionRef.current) {
            const sectionHeight = projectsSectionRef.current.offsetHeight;
            const textHeight = workTextRef.current.offsetHeight || 320;
            // El tope asegura que la palabra WORK se detenga justo cuando termina el último trabajo
            maxParallax = Math.max(0, sectionHeight - textHeight - 80);
          }
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

      // Disparar animación de revelado con máscara para INSPIRED BY THE UNEXPECTED al pasar por esa zona
      if (inspiredDockingRef.current) {
        const rect = inspiredDockingRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.88 && rect.bottom > 0) {
          setInspiredRevealed(true);
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

  const renderCurrentView = () => {
    if (currentView === 'work') {
    return (
      <div key="work" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
        />

        {viewMode === 'list' ? (
          /* VISTA LIST: RULETA VERTICAL QUE SANGRA ARRIBA CON PREVIEW LATERAL */
          <ListRouletteView viewMode={viewMode} setViewMode={setViewMode} onOpenCaseStudy={setCurrentView} />
        ) : (
          <>
            {/* TIRA DE MARQUEE: "WORK" EN PESO LIGHT PASANDO DE IZQUIERDA A DERECHA CON EL SOL */}
            <div className="w-full overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 select-none bg-white border-y border-transparent">
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
              <ExploreOrbitSpace selectedCategory={selectedCategory} onOpenCaseStudy={setCurrentView} projects={ALL_PROJECTS} />
            ) : (
              <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pb-4 sm:pb-6 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full">
                  {filteredProjects.map((work) => (
                    <div 
                      key={work.id} 
                      className="flex flex-col group"
                      onClick={() => {
                        if (work.title.toLowerCase().includes('umana')) {
                          setCurrentView('case-study-umana');
                        } else if (work.title.toLowerCase().includes('rappi')) {
                          setCurrentView('case-study-rappi');
                        } else if (work.title.toLowerCase().includes('barrett') || work.title.toLowerCase().includes('session')) {
                          setCurrentView('case-study-barrett-sessions');
                        } else if (work.title.toLowerCase().includes('petco')) {
                          setCurrentView('case-study-petco');
                        } else if (work.title.toLowerCase().includes('yummy')) {
                          setCurrentView('case-study-yummy');
                        } else if (work.title.toLowerCase().includes('heineken')) {
                          setCurrentView('case-study-heineken-fest');
                        } else if (work.title.toLowerCase().includes('teclab')) {
                          setCurrentView('case-study-teclab');
                        }
                      }}
                    >
                      <div
                        data-selected-work-image="true"
                        onMouseEnter={(e) => {
                          lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                          if (cursorArrowRef.current) {
                            cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                          }
                          setCursorType('right');
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
            <MaskTextReveal
              as="p"
              className="text-[32px] sm:text-[46px] md:text-[62px] lg:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[70px] lg:leading-[76px] font-normal tracking-[-0.03em] text-black !text-black normal-case max-w-[21ch] sm:max-w-[23ch]"
              style={{
                fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
              text="A collection of projects we've whipped up in record time. They may not have taken ages to conceive, but they radiate our commitment to quality and creativity."
            />
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
        <Footer onNavigate={setCurrentView} />

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
            <MoveRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
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
          <MainNav currentView={currentView} setCurrentView={setCurrentView} />

          {/* TIRA ANIMADA DE QUICKLYS (MARQUEE) */}
          <div className="w-full overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-8 select-none bg-white border-y border-transparent">
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
            <MaskTextReveal
              as="p"
              className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] leading-[1.15] sm:leading-[1.12] md:leading-[1.1] font-normal tracking-[-0.03em] text-black !text-black normal-case"
              style={{
                fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
              text="A collection of projects we've whipped up in record time. They may not have taken ages to conceive, but they radiate our commitment to quality and creativity."
            />
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
        <Footer onNavigate={setCurrentView} />
      </div>
    );
  }

  if (currentView === 'services') {
    return (
      <div key="services" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav currentView={currentView} setCurrentView={setCurrentView} />

        {/* HERO SERVICES BLOCK */}
        <div className="w-full pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-12 relative overflow-hidden">
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
            <MaskTextReveal
              as="p"
              className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[62px] leading-[1.05] tracking-[-0.035em] text-[#1a1a1a] font-normal"
              text="Henri Barrett is more than just an agency; it's a movement, a mindset. We're here to change narratives, elevate brands, and make a lasting imprint in the world of design and creativity."
            />
          </div>

          <div className="w-full max-w-[1500px] px-6 sm:px-10 md:px-16 mx-auto mt-20 md:mt-32 flex justify-between items-end">
            <a href="#work-together" className="text-xl sm:text-2xl tracking-tight text-black pb-1 animated-underline cursor-pointer">
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
              <MaskTextReveal
                as="h2"
                className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[67px] leading-[1.05] tracking-[-0.03em] text-black font-normal"
                lines={[
                  "Beyond mere external",
                  "perceptions, it's a matter of",
                  "orchestrating an ecosystem."
                ]}
              />

              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 text-lg sm:text-xl md:text-[26px] lg:text-[32px] leading-[1.3] text-black font-normal max-w-[38ch]">
                <MaskTextReveal
                  as="p"
                  delay={0.16}
                  text="In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals."
                />
                <MaskTextReveal
                  as="p"
                  delay={0.24}
                  text="We a creative agency where strategy, design, and creativity converge. Over the years, we've honed our belief that a standout brand emerges when these three elements seamlessly intertwine."
                />
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
        <Footer onNavigate={setCurrentView} />
      </div>
    );
  }

  if (currentView === 'case-study-umana') {
    return <UmanaCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-rappi') {
    return <RappiCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-barrett-sessions') {
    return <BarrettSessionsCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-petco') {
    return <PetcoCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-yummy') {
    return <YummyCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-heineken-fest') {
    return <HeinekenFestCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'case-study-teclab') {
    return <TeclabCaseStudy onNavigate={setCurrentView} />;
  }

  if (currentView === 'about') {
    return (
      <div key="about" className="w-full min-h-screen flex flex-col justify-between bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
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
        <MainNav currentView={currentView} setCurrentView={setCurrentView} />

        {/* HERO TITLE MARQUEE (MOVING LEFT TO RIGHT) */}
        <div className="w-full overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-16 select-none bg-white">
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
              <a href="#press" className="animated-underline pb-0.5">Press</a>
              <a href="#careers" className="animated-underline pb-0.5">Carreers</a>
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
            <MaskTextReveal
              as="h3"
              className="text-3xl md:text-5xl font-light font-[300] leading-[1.1] tracking-tight"
              lines={['Are you a journalist', 'with a media or press', 'opportunity?']}
            />
            <MaskTextReveal
              as="p"
              delay={0.2}
              className="text-gray-500 text-sm md:text-base font-light font-[300] leading-relaxed max-w-[400px]"
              text="Giancarlo Morales love contributing to news, articles, and stories about entrepreneurship, business, branding, culture, leadership, and vision. They've been featured in NY Post, Inc., Fast Company, WSJ, and many more."
            />
            <a href="mailto:press@henribarrett.com" className="animated-underline pb-0.5 text-sm md:text-base font-light font-[300] w-fit">
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
              <a href="mailto:speaking@henribarrett.com" className="animated-underline pb-0.5 text-sm md:text-base font-light font-[300] mt-2 w-fit">
                Send an Email
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-light font-[300] tracking-tight">Careers</h4>
              <p className="text-gray-500 text-sm font-light font-[300] leading-relaxed max-w-[250px]">
                We're always looking for talent to join our team. Apply now.
              </p>
              <a href="#careers" className="animated-underline pb-0.5 text-sm md:text-base font-light font-[300] mt-2 w-fit">
                See open positions
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer onNavigate={setCurrentView} />
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

      {/* VIDEO CLIP LAYER (MÁSCARA ANIMADA QUE REVELA EL VIDEO) */}
      <div 
        ref={videoContainerRef} 
        className="fixed inset-0 w-full h-full bg-black z-10 shadow-2xl pointer-events-none overflow-hidden will-change-[clip-path]" 
        style={{ 
          clipPath: 'inset(100vh 50% 0 50%)',
          WebkitClipPath: 'inset(100vh 50% 0 50%)',
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1097936778?autoplay=1&loop=1&muted=1&background=1&autopause=0&controls=0&playsinline=1&title=0&byline=0&portrait=0"
            className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Reel Henri Barrett Work"
          />
        </div>
      </div>

      {/* INFO BAR (SERVICIOS DEBAJO DEL VIDEO PRINCIPAL: ESTILO ROMAN 55, COLOR BLANCO, ICONOS SVG) */}
      <div 
        ref={infoBarRef} 
        className="fixed w-full z-30 flex justify-center opacity-0 pointer-events-none px-4 sm:px-6 select-none"
        style={{ color: '#ffffff' }}
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-4 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 xl:gap-x-14 gap-y-2 sm:gap-y-3 font-normal font-[400] tracking-[0.16em] sm:tracking-[0.20em] uppercase text-white leading-none">
          {HOME_VIDEO_SERVICES.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5 shrink-0">
              <span className="text-white font-normal font-[400] text-xs sm:text-sm md:text-[17px] lg:text-[19px] xl:text-[21px] tracking-[0.16em] sm:tracking-[0.20em] leading-none whitespace-nowrap">
                {item.label}
              </span>
              <span className="inline-flex items-center justify-center shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-[45px] md:h-[45px]">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full object-contain brightness-0 invert pointer-events-none animate-clock-hand"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  onError={(e) => {
                    if (item.fallback && e.currentTarget.src !== window.location.origin + item.fallback) {
                      e.currentTarget.src = item.fallback;
                    }
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTENIDO SCROLLABLE */}
      <div ref={contentRef} className="fixed inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
            
            {/* TABLET / 744x1133 HERO & PURPOSE FLOW (DISTRIBUCIÓN SECUENCIAL SEGÚN CAPTURA IPAD) */}
            <div className="flex lg:hidden flex-col items-center w-full px-6 pt-[90px] sm:pt-[105px] text-black text-center select-none absolute top-0 left-0">
                {/* PERSONAJE CENTRADO CON MANOS EN FORMA DE CÁMARA */}
                <div className="w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] flex items-center justify-center opacity-100 pointer-events-auto mb-2 sm:mb-4">
                    <HomeCharacterLottie className="w-full h-full" />
                </div>

                {/* ALWAYS WATCHING CENTRADO */}
                <div className="flex flex-col items-center tracking-tighter uppercase mb-6 sm:mb-8 gap-2.5 sm:gap-4 md:gap-5">
                    <div className="hero-mask-wrap">
                      <h1 className="text-[13vw] sm:text-[11.5vw] font-normal tracking-tighter uppercase leading-[0.98] sm:leading-[1.02] hero-word-animated hero-word-always">
                        ALWAYS
                      </h1>
                    </div>
                    <div className="hero-mask-wrap">
                      <h1 className="text-[13vw] sm:text-[11.5vw] font-normal tracking-tighter uppercase leading-[0.98] sm:leading-[1.02] hero-word-animated hero-word-watching">
                        WATCHING
                      </h1>
                    </div>
                </div>

                {/* ISOLOGO HENRI BARRETT (GIRA CON EL SCROLL) */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <img
                      ref={approachIsologoTabletRef}
                      src="https://henribarrett.com/assets/site/svg/home/isologo_henribarrett.svg"
                      alt="Henri Barrett Isologo"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none pointer-events-none will-change-transform"
                      style={{ transformOrigin: 'center center' }}
                    />
                </div>

                {/* TEXTO DE PROPÓSITO */}
                <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[500px] font-light leading-[1.3] tracking-tight px-3 text-center text-black mb-4 sm:mb-5">
                    Our approach isn't just about producing eye-catching designs, it's about crafting resonant brand messages that echo across audiences.
                </p>

                {/* ENLACE "HERE'S HOW WE CAN HELP" */}
                <div className="flex justify-center mb-8 sm:mb-10 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => setCurrentView('services')}
                      className="text-[14px] sm:text-[15px] font-normal text-black underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                    >
                      Here's how we can help
                    </button>
                </div>

                {/* CAJA INICIAL DEL VIDEO (DONDE ARRANCA EL VIDEO EN VIVO, NO FOTO ESTÁTICA) */}
                <div
                  ref={startVideoPlaceholderTabletRef}
                  className="w-[82vw] max-w-[460px] aspect-video bg-transparent mx-auto rounded-sm"
                />
            </div>

            {/* HERO - ALINEACIÓN IZQUIERDA (DESKTOP) */}
            <div ref={heroWrapperRef} className="hidden lg:flex absolute top-[10vh] sm:top-[11vh] md:top-[12vh] hero-fhd-top hero-1366-wrapper w-screen px-6 sm:px-10 md:px-20 justify-start text-black">
                <div 
                  className="flex flex-col items-start leading-[0.82] max-w-max md:ml-[calc(120px+2rem)] hero-fhd-align hero-1366-block"
                  style={{
                    marginLeft: hero1920Margin !== null ? `${hero1920Margin}px` : undefined,
                  }}
                >
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 relative">
                        <div className="hero-mask-wrap hero-mask-wrap-always">
                          <h1 className="text-[15.5vw] font-normal tracking-tighter uppercase hero-1366-title hero-word-animated hero-word-always">
                            ALWAYS
                          </h1>
                        </div>
                        <div className="w-[28vw] h-[28vw] min-w-[120px] min-h-[120px] sm:min-w-[160px] sm:min-h-[160px] md:min-w-[220px] md:min-h-[220px] max-w-[540px] max-h-[540px] -ml-[1.5vw] sm:-ml-[2vw] translate-y-[-1vw] flex items-center justify-center opacity-100 pointer-events-auto hero-1366-character">
                            <HomeCharacterLottie className="w-full h-full" />
                        </div>
                    </div>
                    <div className="hero-mask-wrap hero-1366-watching-wrap -mt-[4vw] sm:-mt-[5vw] md:-mt-[5.5vw]">
                      <h1 className="text-[15.5vw] font-normal tracking-tighter uppercase leading-[0.78] hero-1366-watching hero-word-animated hero-word-watching">
                        WATCHING
                      </h1>
                    </div>
                </div>
            </div>

            {/* 3 COLUMNS - PROPÓSITO (DESKTOP) */}
            <div className="hidden lg:flex absolute top-[78vh] sm:top-[80vh] md:top-[82vh] hero-1366-purpose w-screen px-10 md:px-20 justify-center text-black">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4 min-w-[120px]">
                        <ArrowDown className="w-20 h-20 stroke-[0.5]" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30">Our Purpose</span>
                    </div>
                    <p className="text-2xl md:text-[2vw] text-center max-w-[none] font-light leading-[1.1] tracking-tight flex-1 px-4">
                        <span ref={approachFirstLineRef} className="inline">
                          Our approach isn't just about producing eye-catching designs, it's about crafting
                        </span>{' '}
                        <br className="hidden md:block" />
                        <span>resonant brand messages that echo across audiences.</span>
                    </p>
                    <div className="flex justify-center md:justify-end min-w-[120px]">
                        <img
                          ref={approachIsologoRef}
                          src="https://henribarrett.com/assets/site/svg/home/isologo_henribarrett.svg"
                          alt="Henri Barrett Isologo"
                          className="w-20 h-20 object-contain select-none pointer-events-none will-change-transform"
                          style={{ transformOrigin: 'center center' }}
                        />
                    </div>
                </div>
            </div>

            {/* DOCKING */}
            <div ref={inspiredDockingRef} className="absolute top-[265vh] w-full flex justify-center px-4 text-black">
                <div className="flex flex-col items-center justify-center w-full max-w-[2200px] text-center overflow-visible">
                    <div className="flex items-center justify-center gap-x-2 sm:gap-x-3.5 md:gap-x-8 lg:gap-x-12 leading-none mb-1 sm:mb-2 md:mb-6 lg:mb-14 whitespace-nowrap">
                        <div className="reveal-mask-container">
                            <span 
                                style={{ 
                                    fontSize: 'clamp(44px, 10.5vw, 18vh)',
                                    transitionDelay: '0.05s' 
                                }} 
                                className={`reveal-text-item font-normal tracking-tight uppercase leading-[0.95] ${inspiredRevealed ? 'is-revealed' : ''}`}
                            >
                                Inspired
                            </span>
                        </div>
                        <div 
                          ref={finalPlaceholderRef} 
                          className="w-[25vw] max-w-[215px] min-w-[130px] aspect-[2.85/1] sm:aspect-[3.1/1] max-h-[62px] sm:max-h-[70px] lg:max-h-none lg:w-[30vw] lg:max-w-none lg:aspect-auto lg:h-[18vh] bg-transparent mx-1.5 sm:mx-2.5 md:mx-4 shrink-0 self-center"
                        />
                        <div className="reveal-mask-container">
                            <span 
                                style={{ 
                                    fontSize: 'clamp(44px, 10.5vw, 18vh)',
                                    transitionDelay: '0.15s' 
                                }} 
                                className={`reveal-text-item font-normal tracking-tight uppercase leading-[0.95] ${inspiredRevealed ? 'is-revealed' : ''}`}
                            >
                                By
                            </span>
                        </div>
                    </div>
                    <div className="reveal-mask-container -mt-2.5 sm:-mt-4 md:-mt-6 lg:mt-0">
                        <span 
                            style={{ 
                                fontSize: 'clamp(44px, 10.5vw, 18vh)',
                                transitionDelay: '0.28s' 
                            }} 
                            className={`reveal-text-item font-normal tracking-tight uppercase leading-[0.92] whitespace-nowrap ${inspiredRevealed ? 'is-revealed' : ''}`}
                        >
                            The Unexpected
                        </span>
                    </div>
                    <p className={`hidden lg:block mt-8 sm:mt-10 md:mt-20 text-gray-400 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-black transition-opacity duration-1000 delay-500 ${inspiredRevealed ? 'opacity-100' : 'opacity-0'}`}>Creative Direction &bull; MMXXIV</p>
                </div>
            </div>

            {/* ABOUT / ARCHITECTS (DISTRIBUCIÓN 2 COLUMNAS EDITORIAL SEGÚN CAPTURA) */}
            <div className="absolute top-[266vh] sm:top-[270vh] lg:top-[320vh] w-full px-6 sm:px-10 md:px-16 pb-28 sm:pb-36 pointer-events-auto flex justify-center bg-white z-0 text-black shadow-[0_-50px_100px_rgba(255,255,255,1)]">
                <div className="w-full max-w-[1200px] flex flex-row gap-6 sm:gap-10 md:gap-16 pt-6 sm:pt-8 md:pt-14">
                    {/* COLUMNA IZQUIERDA: Think big with us. */}
                    <div className="w-[28%] sm:w-[30%] shrink-0 pt-8 sm:pt-10 md:pt-12 select-none">
                        <MaskTextReveal
                          as="p"
                          className="text-[15px] sm:text-[17px] md:text-xl font-normal leading-snug tracking-tight text-black normal-case"
                          text="Think big with us."
                        />
                    </div>

                    {/* COLUMNA DERECHA: HEADLINE + PÁRRAFO + CHOOSE YOUR PURPOSE */}
                    <div className="w-[72%] sm:w-[70%] flex flex-col">
                        {/* HEADLINE 4 LÍNEAS */}
                        <div className="max-w-[460px] sm:max-w-[500px] md:max-w-[580px]">
                          <MaskTextReveal
                            as="h2"
                            className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] font-normal leading-[1.12] sm:leading-[1.14] tracking-tight text-black !normal-case"
                            text="As architects of brand narratives, we amplify the voice to ensure they don't just talk but roar."
                          />
                        </div>

                        {/* PÁRRAFO DESCRIPTIVO */}
                        <div className="max-w-[460px] sm:max-w-[490px] md:max-w-[540px] mt-8 sm:mt-10 md:mt-12">
                            <MaskTextReveal
                              as="p"
                              delay={0.15}
                              className="text-[14.5px] sm:text-[16px] md:text-[17px] text-black leading-[1.42] sm:leading-[1.45] font-light font-[350] tracking-normal"
                              text="At Henri Barrett, our essence is to simplify the complex. We understand that in the fast-paced world of business, our clients need agile, yet potent solutions. By leaning into our strengths in creativity, design, and a thirst for experimentation, we untangle the intricate knots of branding challenges."
                            />
                        </div>
                        
                        {/* CHOOSE YOUR PURPOSE + ENLACES */}
                        <div className="flex flex-col mt-10 sm:mt-12 md:mt-14 select-none">
                            <span className="text-[11px] sm:text-[12px] font-normal uppercase tracking-[0.20em] text-black mb-3 sm:mb-4">
                              (CHOOSE YOUR PURPOSE)
                            </span>
                            <div className="flex flex-col gap-1.5 sm:gap-2 items-start">
                                <button 
                                  type="button"
                                  onClick={() => setCurrentView('services')} 
                                  className="text-[16px] sm:text-[18px] md:text-[19px] font-normal text-black underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer tracking-normal transition-colors text-left"
                                >
                                  Discover our services
                                </button>
                                <button 
                                  type="button"
                                  onClick={() => setCurrentView('work')} 
                                  className="text-[16px] sm:text-[18px] md:text-[19px] font-normal text-black underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer tracking-normal transition-colors text-left"
                                >
                                  Read our case studies
                                </button>
                                <button 
                                  type="button"
                                  onClick={() => setCurrentView('services')} 
                                  className="text-[16px] sm:text-[18px] md:text-[19px] font-normal text-black underline underline-offset-4 decoration-black/40 hover:decoration-black cursor-pointer tracking-normal transition-colors text-left"
                                >
                                  Explore the HUB® Method
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENIDO DINÁMICO (PORTFOLIO) */}
            <div ref={lastSectionRef} className="absolute top-[328vh] sm:top-[332vh] lg:top-[420vh] w-full pointer-events-auto flex flex-col items-center bg-white text-black z-10">
                {/* SECCIÓN DE LOS 4 PROYECTOS PRINCIPALES CON 'WORK' DE FONDO */}
                <div ref={projectsSectionRef} className="relative w-full flex flex-col items-center overflow-hidden">
                    {/* WORK WATERMARK - Fondo con texto que avanza con el scroll detrás de los proyectos */}
                    <div className="absolute top-[18vh] sm:top-[22vh] md:top-[25vh] left-0 w-full flex justify-center items-center z-0 select-none pointer-events-none">
                        <span 
                            ref={workTextRef} 
                            className="text-[34vw] sm:text-[36vw] font-normal font-[500] leading-none tracking-tighter text-black uppercase block will-change-transform select-none text-center"
                        >
                            WORK
                        </span>
                    </div>

                    <div className="w-full max-w-[1430px] px-4 sm:px-6 md:px-8 flex flex-col items-center gap-7 sm:gap-8 md:gap-10 lg:gap-16 relative pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 z-10">
                        {/* BLOQUES DE 1430x770px CON ANIMACIÓN DE DEVELO DE MÁSCARA AL LLEGAR A LA ZONA */}
                        {homeProjects.map((project, idx) => (
                            <HomeWorkCard
                                key={project.id}
                                project={project}
                                isLast={idx === homeProjects.length - 1}
                                lastProjectRef={lastProjectRef}
                                onNavigate={(view) => setCurrentView(view)}
                                onHoverStart={(e) => {
                                    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                                    if (cursorArrowRef.current) {
                                        cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                                    }
                                    setCursorType('right');
                                    setIsHoveringWork(true);
                                }}
                                onHoverMove={(e) => {
                                    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                                    if (cursorArrowRef.current) {
                                        cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                                    }
                                }}
                                onHoverEnd={() => {
                                    setIsHoveringWork(false);
                                }}
                            />
                        ))}

                        {/* BOTÓN EXPLORE MORE DEBAJO DE LOS TRABAJOS (SEGÚN CAPTURA) */}
                        <div className="w-full flex justify-center pt-8 sm:pt-10 pb-4 sm:pb-6">
                          <button
                            type="button"
                            onClick={() => setCurrentView('work')}
                            aria-label="Explore more projects"
                            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-2.5 sm:py-3 rounded-full border border-black bg-white hover:bg-black text-black hover:text-white transition-all duration-300 ease-out cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
                          >
                            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal tracking-[0.14em] uppercase select-none transition-colors duration-300">
                              EXPLORE MORE
                            </span>
                          </button>
                        </div>
                    </div>
                </div>

                {/* MARQUEE TRUSTED - FULL WIDTH */}
                <div className="w-full border-t border-gray-100 mt-20 py-24 sm:py-32 md:py-40 overflow-hidden">
                    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black pl-2 select-none">
                          (TRUSTED BY VISIONARIES)
                        </p>
                    </div>
                    <div className="w-full overflow-hidden">
                        <LogosGroup />
                    </div>
                </div>

                    {/* CLIENT CASE STUDIES (REPLACES SELECTED WORKS - EXPANDIDO HASTA 1880px PARA THUMBNAILS DE 905px) */}
                    <div className="w-screen relative left-1/2 -translate-x-1/2 flex justify-center px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12">
                      <div className="w-full max-w-[1880px]">
                        <ClientCaseStudiesSection
                          onProjectClick={(id) => {
                            if (id === 'umana') {
                              setCurrentView('case-study-umana');
                            } else if (id === 'rappi') {
                              setCurrentView('case-study-rappi');
                            } else if (id === 'barrett-session' || id === 'barrett') {
                              setCurrentView('case-study-barrett-sessions');
                            } else if (id === 'petco') {
                              setCurrentView('case-study-petco');
                            } else if (id === 'yummy') {
                              setCurrentView('case-study-yummy');
                            } else if (id === 'heineken' || id === 'heineken-fest') {
                              setCurrentView('case-study-heineken-fest');
                            } else if (id === 'teclab') {
                              setCurrentView('case-study-teclab');
                            }
                          }}
                          onImageHover={(e, isHovering) => {
                            if (isHovering) {
                              lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                              if (cursorArrowRef.current) {
                                cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                              }
                              setCursorType('right');
                              setIsHoveringWork(true);
                            } else {
                              setIsHoveringWork(false);
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* PRAISE FROM CLIENTS */}
                    <PraiseFromClientsSection />

                    {/* FEATURED CLIENTS CAROUSEL */}
                    <FeaturedClientsSection />

                    {/* WHO IS BARRETT SECTION */}
                    <WhoIsBarrettSection onNavigate={setCurrentView} />

                {/* FOOTER */}
                <Footer onNavigate={setCurrentView} />
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
          <MoveRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
        </div>
      </div>

    </div>
    );
  };

  return (
    <>
      <PageTransitionCurtain
        isActive={curtainActive}
        theme={curtainTheme}
        phase={curtainPhase}
      />
      {renderCurrentView()}
    </>
  );
};
