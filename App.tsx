import React, { useEffect, useRef, useState } from 'react';
import { Sun, MoveUpRight, Zap, Target, Aperture, Fingerprint, ArrowDown, ArrowRight, ArrowLeft, Instagram, ChevronDown, Play, X, Volume2, VolumeX, Pause, RotateCcw } from 'lucide-react';

// --- LOGO EMBLEMA HENRI BARRETT (SOL RADIAL DE LA MARCA) ---
export const HenriBarrettSun: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  const rays = [
    { angle: 0, length: 18, width: 2.6 },
    { angle: 22.5, length: 13, width: 2.0 },
    { angle: 45, length: 18, width: 2.6 },
    { angle: 67.5, length: 13, width: 2.0 },
    { angle: 90, length: 18, width: 2.6 },
    { angle: 112.5, length: 13, width: 2.0 },
    { angle: 135, length: 18, width: 2.6 },
    { angle: 157.5, length: 13, width: 2.0 },
    { angle: 180, length: 18, width: 2.6 },
    { angle: 202.5, length: 13, width: 2.0 },
    { angle: 225, length: 18, width: 2.6 },
    { angle: 247.5, length: 13, width: 2.0 },
    { angle: 270, length: 18, width: 2.6 },
    { angle: 292.5, length: 13, width: 2.0 },
    { angle: 315, length: 18, width: 2.6 },
    { angle: 337.5, length: 13, width: 2.0 },
  ];

  return (
    <svg viewBox="0 0 100 100" className={`shrink-0 ${className}`} fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="14" fill="currentColor" />
      {rays.map((ray, i) => {
        const rad = (ray.angle * Math.PI) / 180;
        const innerR = 21;
        const outerR = innerR + ray.length;
        const x1 = 50 + innerR * Math.cos(rad);
        const y1 = 50 + innerR * Math.sin(rad);
        const x2 = 50 + outerR * Math.cos(rad);
        const y2 = 50 + outerR * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={ray.width}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

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

const TESTIMONIALS = [
  { id: 1, name: 'Allie Kuzyk', role: 'Global Program Manager, Tik Tok', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', quote: "I've referred Henri Barrett® to anyone who asks for an all-around branding and strategic powerhouse." },
  { id: 2, name: 'Marcus Chen', role: 'Head of Design, Stripe', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', quote: "The team's ability to translate complex business requirements into elegant design solutions is unparalleled." },
  { id: 3, name: 'Sarah Jenkins', role: 'CMO, Spotify', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', quote: "Working with Henri Barrett feels like extending your internal team with world-class talent." },
  { id: 4, name: 'David Kim', role: 'Founder, TechFlow', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', quote: "Their strategic approach transformed our brand identity completely. We couldn't be happier with the results." },
  { id: 5, name: 'Elena Rodriguez', role: 'VP Marketing, Vercel', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop', quote: "A rare combination of creative brilliance and strategic execution. They delivered beyond our expectations." },
  { id: 6, name: 'James Wilson', role: 'Creative Director, Nike', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop', quote: "Henri Barrett brings a unique perspective that challenges the status quo in the best way possible." }
];

// --- COMPONENTES AUXILIARES ---
interface ReelItem {
  id: string;
  title: string;
  client: string;
  videoUrl: string;
  posterUrl: string;
}

const REELS_COL_1: ReelItem[] = [
  {
    id: 'r1',
    title: 'Umana Dynamic Visuals',
    client: 'Umana Brand',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r2',
    title: 'Festival Energy 2026',
    client: 'Rappi Fest',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-the-rain-41558-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r3',
    title: 'Botanical Calm Care',
    client: 'Petco Brand',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-walking-in-a-forest-41584-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r4',
    title: 'Studio Sessions Live',
    client: 'Barrett Sessions',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-skater-skating-outdoors-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop'
  }
];

const REELS_COL_2: ReelItem[] = [
  {
    id: 'r5',
    title: 'Kinetic Movement',
    client: 'Nike Forward',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-40078-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r6',
    title: 'Heritage & Origin',
    client: 'Pisco Tacama',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r7',
    title: 'Analog Film Craft',
    client: 'HB Studio Lab',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-vintage-film-camera-42880-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r8',
    title: 'Appetite In 3D Motion',
    client: 'Yummy Delivery',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-drawing-on-a-tablet-42884-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  }
];

const REELS_COL_3: ReelItem[] = [
  {
    id: 'r9',
    title: 'Financial Innovation',
    client: 'Interbank Hub',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r10',
    title: 'Summer Stage Live',
    client: 'Heineken Fest',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-the-rain-41558-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1605218427368-35b86d9575ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r11',
    title: 'Spatial Audio Stream',
    client: 'Spotify Greenroom',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-skater-skating-outdoors-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r12',
    title: 'Chromatic Harmony',
    client: 'Barrett Lab',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-walking-in-a-forest-41584-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  }
];

const REELS_COL_4: ReelItem[] = [
  {
    id: 'r13',
    title: 'Sonic Landscape',
    client: 'HB Music Dept',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-40078-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r14',
    title: 'Digital Sculpture 3D',
    client: 'Quicklys 04',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-drawing-on-a-tablet-42884-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r15',
    title: 'Editorial Typography',
    client: 'Brand Drop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-vintage-film-camera-42880-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r16',
    title: 'Atmospheric Motion',
    client: 'Festival Reel',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  }
];

const ReelCard: React.FC<{ reel: ReelItem; onSelect: () => void }> = ({ reel, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="relative aspect-[9/16] w-full rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-[#d8d8d8] group cursor-pointer shadow-sm select-none border border-black/5"
    >
      <video
        src={reel.videoUrl}
        poster={reel.posterUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Gradiente sutil y metadata al hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-white pointer-events-none">
        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-bold">{reel.client}</span>
        <span className="text-sm sm:text-base font-semibold leading-tight line-clamp-2 mt-0.5">{reel.title}</span>
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
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="w-full relative bg-white overflow-hidden pt-2 sm:pt-4 pb-0 mb-0">
      {/* 4 COLUMNAS DE REELS MASONRY IRREGULAR (RELACIÓN 9:16) */}
      <div className="relative w-full h-[680px] sm:h-[820px] md:h-[940px] lg:h-[1040px] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-3 sm:px-6 md:px-8 h-full w-full">
          
          {/* COLUMNA 1: De arriba para abajo (downward) */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-down will-change-transform"
              style={{ animationDuration: '34s' }}
            >
              {[...REELS_COL_1, ...REELS_COL_1].map((reel, idx) => (
                <ReelCard key={`c1-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 2: De abajo para arriba (upward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-up will-change-transform -mt-20 sm:-mt-32 md:-mt-40"
              style={{ animationDuration: '30s' }}
            >
              {[...REELS_COL_2, ...REELS_COL_2].map((reel, idx) => (
                <ReelCard key={`c2-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 3: De arriba para abajo (downward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-down-alt will-change-transform -mt-10 sm:-mt-16"
              style={{ animationDuration: '38s' }}
            >
              {[...REELS_COL_3, ...REELS_COL_3].map((reel, idx) => (
                <ReelCard key={`c3-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

          {/* COLUMNA 4: De abajo para arriba (upward) con offset inicial */}
          <div className="relative h-full overflow-hidden">
            <div 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-up-alt will-change-transform -mt-28 sm:-mt-40 md:-mt-52"
              style={{ animationDuration: '33s' }}
            >
              {[...REELS_COL_4, ...REELS_COL_4].map((reel, idx) => (
                <ReelCard key={`c4-${reel.id}-${idx}`} reel={reel} onSelect={() => setSelectedReel(reel)} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MODAL EXPANDIDO DEL REEL CON AUDIO Y CONTROLES */}
      {selectedReel && (
        <div 
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedReel(null)}
        >
          <div 
            className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[28px] overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedReel.videoUrl}
              poster={selectedReel.posterUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Controles del Modal */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title={isMuted ? "Activar audio" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setSelectedReel(null)}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metadata inferior del modal */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 flex flex-col gap-1 text-white pointer-events-none">
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">{selectedReel.client}</span>
              <h3 className="text-xl font-bold">{selectedReel.title}</h3>
              <p className="text-xs text-white/50 mt-1">Henri Barrett® Quicklys • Reel 9:16</p>
            </div>
          </div>
        </div>
      )}
    </div>
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
    <footer className={`relative w-full bg-[#111] text-white z-20 pt-24 pb-12 px-6 md:px-12 ${className}`}>
      <div className="w-full max-w-[1250px] mx-auto">
        <div className="flex justify-between items-start w-full mb-16 pb-12 border-b border-gray-800">
          <Sun className="w-16 h-16 md:w-20 md:h-20 fill-white text-white" />
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

const ExploreOrbitSpace: React.FC<{ selectedCategory: string }> = ({ selectedCategory }) => {
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
              <button 
                onClick={() => setSelectedModalCard(null)}
                className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-gray-800 transition-colors cursor-pointer self-start sm:self-auto"
              >
                Cerrar
              </button>
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
}> = ({ viewMode, setViewMode }) => {
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
              <span className="text-[16px] sm:text-[18px] font-bold text-black uppercase tracking-tight mt-0.5">
                {displayedProject.name}
              </span>
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
              <button 
                onClick={() => setSelectedModal(null)}
                className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-gray-800 transition-colors cursor-pointer self-start sm:self-auto"
              >
                Cerrar
              </button>
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

// --- NAVEGACIÓN PRINCIPAL ---
const MainNav: React.FC<{
  currentView: string;
  setCurrentView: (view: 'home' | 'work' | 'services' | 'quicklys') => void;
  isHome?: boolean;
  navRef?: React.RefObject<HTMLElement | null>;
  bgColor?: string;
}> = ({ currentView, setCurrentView, isHome, navRef, bgColor = 'bg-white' }) => {
  return (
    <nav 
      ref={navRef} 
      className={`${isHome ? 'fixed top-0 left-0 w-full z-50 bg-transparent py-8 md:py-12' : `sticky top-0 z-40 w-full ${bgColor} py-7 md:py-8 ${bgColor === 'bg-transparent' ? 'border-b border-transparent' : 'border-b border-gray-100/50'}`} px-6 sm:px-10 md:px-16 flex items-center justify-between gap-4 transition-colors duration-200`}
    >
      <div className={`w-full ${isHome ? 'max-w-[1400px] mx-auto' : ''} flex justify-between items-center text-current gap-4`}>
        <button onClick={() => setCurrentView('home')} className="flex items-center gap-3.5 sm:gap-4 text-left cursor-pointer focus:outline-none shrink-0" title="Ir a inicio (About us)">
          <HenriBarrettSun className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-current shrink-0" />
          <span className="font-bold text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] tracking-tight uppercase leading-none whitespace-nowrap">HENRI BARRETT®</span>
        </button>
        
        <div className="flex items-center gap-4 sm:gap-7 md:gap-11 lg:gap-14 text-[0.92rem] sm:text-[1rem] md:text-[1.15rem] font-medium tracking-[0.03em] overflow-x-auto no-scrollbar py-1">
          <button onClick={() => setCurrentView('home')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'home' ? 'font-bold' : ''}`}>About Us</button>
          <button onClick={() => setCurrentView('work')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'work' ? 'font-bold' : ''}`}>Work</button>
          <button onClick={() => setCurrentView('services')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'services' ? 'font-bold' : ''}`}>Services</button>
          <button onClick={() => setCurrentView('quicklys')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'quicklys' ? 'font-bold' : ''}`}>Quicklys</button>
          <a href="#contact" className="hover:opacity-60 transition-opacity whitespace-nowrap">Contact</a>
        </div>

        <a href="#work-with-us" className="relative group text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-bold pb-1.5 tracking-[0.03em] transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap">
          Work with us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
        </a>
      </div>
    </nav>
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
              className="w-full sm:w-[85%] md:w-[62%] lg:w-[54%] max-w-[620px] flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(QUICKLYS_ARTICLES[0])}
            >
              <div 
                className="w-full aspect-square relative bg-[#ECECEC] overflow-hidden cursor-none shadow-sm"
                onMouseEnter={(e) => {
                  if (cursorRef.current) {
                    cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                  }
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
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
              className="w-full sm:w-[90%] md:w-[70%] lg:w-[64%] max-w-[740px] flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(QUICKLYS_ARTICLES[1])}
            >
              <div 
                className="w-full aspect-[16/10] sm:aspect-[4/2.7] relative bg-[#ECECEC] overflow-hidden cursor-none shadow-sm"
                onMouseEnter={(e) => {
                  if (cursorRef.current) {
                    cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                  }
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
              >
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
        className={`fixed top-0 left-0 pointer-events-none z-[999] hidden md:block will-change-transform ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } transition-all duration-200 ease-out`}
        style={{ transform: 'translate3d(-200px, -200px, 0)' }}
        aria-hidden="true"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center border border-white/20 p-2 text-center">
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase leading-tight select-none">
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
  posterUrl: string;
}

const CULTURE_CLASH_REELS: QuicklysReelItem[] = [
  {
    id: 'cc-1',
    title: 'Urban Creative Summit',
    category: 'Culture Clash 01',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-skater-skating-outdoors-42861-large.mp4',
    posterUrl: '/images/reel_culture_clash_1788900687511.jpg',
  },
  {
    id: 'cc-2',
    title: 'Kinetic Movement & Sound',
    category: 'Culture Clash 02',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-the-rain-41558-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cc-3',
    title: 'Underground Typography',
    category: 'Culture Clash 03',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-vintage-film-camera-42880-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cc-4',
    title: 'Studio Creative Collective',
    category: 'Culture Clash 04',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cc-5',
    title: 'Raw Street Identity',
    category: 'Culture Clash 05',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-walking-in-a-forest-41584-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
  }
];

const NIKE_RUNNING_REELS: QuicklysReelItem[] = [
  {
    id: 'nr-1',
    title: 'Night Run City Sprint',
    category: 'Nike Running 01',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-40078-large.mp4',
    posterUrl: '/images/reel_nike_running_1788900698753.jpg',
  },
  {
    id: 'nr-2',
    title: 'Kinetic Stride Velocity',
    category: 'Nike Running 02',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-light-39878-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-3',
    title: 'Midnight Urban Endurance',
    category: 'Nike Running 03',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-the-rain-41558-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-4',
    title: 'Dynamic Pace & Form',
    category: 'Nike Running 04',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-drawing-on-a-tablet-42884-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-5',
    title: 'Breath, Heartbeat & Motion',
    category: 'Nike Running 05',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-walking-in-a-forest-41584-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-6',
    title: 'Technical Precision Gear',
    category: 'Nike Running 06',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-vintage-film-camera-42880-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-7',
    title: 'Metropolitan Horizon Run',
    category: 'Nike Running 07',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-skater-skating-outdoors-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nr-8',
    title: 'Finish Line Transcendence',
    category: 'Nike Running 08',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1605218427368-35b86d9575ae?q=80&w=800&auto=format&fit=crop',
  }
];

export const AllQuicklysSection: React.FC = () => {
  const [cultureIndex, setCultureIndex] = useState(0);
  const [nikeIndex, setNikeIndex] = useState(0);
  const [activeCursor, setActiveCursor] = useState<{ visible: boolean; direction: 'right' | 'left' }>({
    visible: false,
    direction: 'right',
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const cultureTrackRef = useRef<HTMLDivElement>(null);
  const nikeTrackRef = useRef<HTMLDivElement>(null);
  const [cardStep, setCardStep] = useState(280);

  // Lista extendida para efecto de ruleta infinita continua
  const infiniteCultureReels = Array.from({ length: 60 }, (_, i) => CULTURE_CLASH_REELS[i % CULTURE_CLASH_REELS.length]);
  const infiniteNikeReels = Array.from({ length: 64 }, (_, i) => NIKE_RUNNING_REELS[i % NIKE_RUNNING_REELS.length]);

  useEffect(() => {
    const updateCardStep = () => {
      const track = cultureTrackRef.current || nikeTrackRef.current;
      if (track && track.children[0]) {
        const card = track.children[0] as HTMLElement;
        const gap = window.innerWidth >= 640 ? 8 : 6;
        setCardStep(card.offsetWidth + gap);
      }
    };
    updateCardStep();
    window.addEventListener('resize', updateCardStep);
    return () => window.removeEventListener('resize', updateCardStep);
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
    <section className="w-full bg-white relative block pb-32 sm:pb-40 md:pb-48 select-none">
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
                  <HenriBarrettSun className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <HenriBarrettSun className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
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
            onMouseEnter={() => setActiveCursor({ visible: true, direction: 'right' })}
            onMouseLeave={() => setActiveCursor({ visible: false, direction: 'right' })}
            onClick={() => setCultureIndex(prev => prev + 2)}
          >
            <div 
              ref={cultureTrackRef}
              className="flex gap-1.5 sm:gap-2 will-change-transform"
              style={{
                transform: `translate3d(-${cultureIndex * cardStep}px, 0, 0)`,
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {infiniteCultureReels.map((reel, idx) => (
                <div 
                  key={`${reel.id}-${idx}`}
                  className="w-[calc(50%-3px)] sm:w-[calc(33.333%-6px)] shrink-0 aspect-[9/16] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-[#ECECEC] relative shadow-xs border border-black/5"
                >
                  <video
                    src={reel.videoUrl}
                    poster={reel.posterUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                </div>
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
              onMouseEnter={() => setActiveCursor({ visible: true, direction: 'left' })}
              onMouseLeave={() => setActiveCursor({ visible: false, direction: 'left' })}
              onClick={() => setNikeIndex(prev => prev + 2)}
            >
              <div 
                ref={nikeTrackRef}
                className="flex gap-1.5 sm:gap-2 will-change-transform"
                style={{
                  transform: `translate3d(-${nikeIndex * cardStep}px, 0, 0)`,
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {infiniteNikeReels.map((reel, idx) => (
                  <div 
                    key={`${reel.id}-${idx}`}
                    className="w-[calc(50%-3px)] sm:w-[calc(33.333%-6px)] shrink-0 aspect-[9/16] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden bg-[#ECECEC] relative shadow-xs border border-black/5"
                  >
                    <video
                      src={reel.videoUrl}
                      poster={reel.posterUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                  </div>
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
                  <HenriBarrettSun className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <HenriBarrettSun className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
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
            </div>

            {/* CONTADOR */}
            <div className="flex items-center gap-6 mt-10 sm:mt-14 pt-4">
              <span className="text-base sm:text-lg font-bold tracking-wider text-black">
                {((nikeIndex % NIKE_RUNNING_REELS.length) + 1)} — {NIKE_RUNNING_REELS.length}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* CURSOR PERSONALIZADO CIRCULAR BLANCO CON FLECHA FINA NEGRA */}
      <div
        ref={cursorRef}
        id="quicklys-reel-custom-cursor"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform ${
          activeCursor.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } transition-all duration-200 ease-out`}
        style={{ transform: 'translate3d(-200px, -200px, 0)' }}
        aria-hidden="true"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-black/10 flex items-center justify-center">
          {activeCursor.direction === 'right' ? (
            <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.25] text-black" />
          ) : (
            <ArrowLeft className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.25] text-black" />
          )}
        </div>
      </div>
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
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const currentScrollY = useRef(0);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  // --- VISTAS Y FILTROS (SECCIÓN WORK) ---
  const [currentView, setCurrentView] = useState<'work' | 'home' | 'services' | 'quicklys'>('home');
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

  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0, walk: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!testimonialsRef.current) return;
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.pageX - testimonialsRef.current.offsetLeft;
    dragRef.current.scrollLeft = testimonialsRef.current.scrollLeft;
    dragRef.current.walk = 0;
  };

  const handleMouseLeave = () => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    snapToNearest();
  };

  const handleMouseUp = () => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    snapToNearest();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDragging || !testimonialsRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 2.5; 
    dragRef.current.walk = walk;
    testimonialsRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const snapToNearest = () => {
    if (!testimonialsRef.current) return;
    const cardWidth = window.innerWidth >= 768 ? 600 : window.innerWidth * 0.85;
    const gap = 48; // 3rem = 48px
    const twoItemsWidth = (cardWidth + gap) * 2;
    
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
    
    testimonialsRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    dragRef.current.walk = 0;
  };

  const scrollTestimonials = () => {
    if (!testimonialsRef.current) return;
    const cardWidth = window.innerWidth >= 768 ? 600 : window.innerWidth * 0.85;
    const gap = 48;
    const twoItemsWidth = (cardWidth + gap) * 2;
    
    const currentScroll = testimonialsRef.current.scrollLeft;
    let nextSnap = Math.round(currentScroll / twoItemsWidth) * twoItemsWidth + twoItemsWidth;
    
    if (nextSnap >= testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth) {
        if (currentScroll + 10 >= testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth) {
            nextSnap = 0;
        } else {
            nextSnap = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;
        }
    }

    testimonialsRef.current.scrollTo({
      left: nextSnap,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const calculateHeight = () => {
      if (lastSectionRef.current) {
        const startOffset = lastSectionRef.current.offsetTop;
        const contentHeight = lastSectionRef.current.offsetHeight;
        setPageHeight(startOffset + contentHeight);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    let resizeObserver: ResizeObserver | null = null;
    if (lastSectionRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateHeight();
      });
      resizeObserver.observe(lastSectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', calculateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      const targetScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      currentScrollY.current += (targetScroll - currentScrollY.current) * 0.1;

      if (contentRef.current) {
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

        videoContainerRef.current.style.clipPath = `inset(${currentTop}px ${windowWidth - (currentLeft + currentWidth)}px ${windowHeight - (currentTop + currentHeight)}px ${currentLeft}px)`;
        
        if (infoBarRef.current) {
            let opacity = Math.max(0, Math.min(1 - Math.abs(scrollProgress - 0.5) * 8, 1));
            infoBarRef.current.style.opacity = opacity.toString();
            infoBarRef.current.style.top = `${topMid + heightMid + 32}px`;
        }
      }

      if (workTextRef.current) {
        // Ajustamos el inicio del efecto de paralaje para que coincida con la nueva posición
        const startOffset = windowHeight * 4.8;
        const parallaxY = Math.max(0, currentScrollY.current - startOffset) * 0.95;
        workTextRef.current.style.transform = `translate3d(0, ${parallaxY}px, 0)`;
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
      <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
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
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                </div>
                <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                  <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">WORK</span>
                  <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
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
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
            </div>
          </div>

          {/* GRILLA MASONRY DE REELS (4 COLUMNAS, FORMATO 9:16, MOVIMIENTO IRREGULAR ALTERNADO) */}
          <QuicklysMasonryReels />
        </section>

        {/* FOOTER PEGADO DIRECTAMENTE A LA TERMINACIÓN DE QUICKLYS */}
        <Footer className="mt-0" />

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
            <MoveUpRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'quicklys') {
    return (
      <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between">
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
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              </div>
              <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
                <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">QUICKLYS</span>
                <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
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

          {/* SECCIÓN ALL QUICKLYS (REELS 9:16 CON RULETA INFINITA Y CURSOR FLECHA) */}
          <AllQuicklysSection />
        </div>

        {/* FOOTER */}
        <Footer className="mt-0" />
      </div>
    );
  }

  if (currentView === 'services') {
    return (
      <div className="w-full min-h-screen bg-[#F5F5F5] text-black font-sans selection:bg-black selection:text-white pb-32">
        {/* HEADER (NAVBAR) */}
        <MainNav currentView={currentView} setCurrentView={setCurrentView} bgColor="bg-[#F5F5F5]" />

        {/* HERO SERVICES BLOCK */}
        <div className="w-full pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
          {/* Marquee WHAT WE DO */}
          <div className="w-full overflow-hidden select-none">
            <div ref={servicesMarqueeRef} className="flex w-max whitespace-nowrap will-change-transform">
              {/* Repeat a few times to ensure it covers the screen even when scrolling */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
                  <HenriBarrettSun className="w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] text-black shrink-0" />
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
      </div>
    );
  }

  return (
    <div ref={mainContainerRef} className="w-full transition-colors duration-200" style={{ backgroundColor: '#ffffff', height: pageHeight ? `${pageHeight}px` : '100vh' }}>
      
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
            <div className="absolute top-[340vh] w-full px-6 md:px-12 pb-64 pointer-events-auto flex justify-center bg-white z-10 text-black shadow-[0_-50px_100px_rgba(255,255,255,1)]">
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
            <div ref={lastSectionRef} className="absolute top-[480vh] w-full pointer-events-auto flex flex-col items-center bg-white text-black">
                <div className="w-full max-w-[1250px] px-6 flex flex-col gap-12 relative pt-32">
                    
                    {/* WORK WATERMARK */}
                    <div className="absolute top-[-15vh] left-1/2 -translate-x-1/2 w-screen flex justify-center items-center z-[-1] select-none pointer-events-none">
                        <span ref={workTextRef} className="text-[45vw] font-black leading-none tracking-tighter text-black/[0.03] uppercase">WORK</span>
                    </div>

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

                    {/* SELECTED WORKS */}
                    <div className="w-full pb-16 flex justify-between items-end border-b border-gray-200 mb-20">
                        <h2 className="text-[9vw] font-black tracking-tighter uppercase leading-[0.9]">Selected Works</h2>
                        <span className="text-sm font-black uppercase opacity-20 mb-4 tracking-[0.3em]">MMXXIV — MMXXV</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full mb-40">
                        {GRID_WORKS.map((work) => (
                            <div key={work.id} className="flex flex-col group">
                                <div
                                    data-selected-work-image="true"
                                    onMouseEnter={(e) => {
                                        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                                        if (cursorArrowRef.current) {
                                            cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                                        }
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

                    {/* PRAISE */}
                    <div className="w-full pt-16 pb-20 border-t border-gray-200 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <h2 className="text-[11vw] font-black tracking-tighter uppercase leading-[0.95]">Praise</h2>
                            <span className="text-2xl font-black mt-4 opacity-10">4—18</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <h2 className="text-[11vw] font-black tracking-tighter uppercase leading-[0.95]">From Clients</h2>
                            <button onClick={scrollTestimonials} className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 group shadow-2xl">
                                <ArrowRight className="w-12 h-12 text-white group-hover:translate-x-3 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* TESTIMONIALS */}
                    <div 
                        ref={testimonialsRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="w-full overflow-x-auto pb-48 no-scrollbar cursor-grab active:cursor-grabbing"
                    >
                        <div className="flex gap-12 w-max px-6">
                            {TESTIMONIALS.map((t) => (
                                <div key={t.id} className="w-[85vw] md:w-[600px] bg-white p-16 flex flex-col gap-12 border border-gray-100 shadow-xl rounded-2xl shrink-0">
                                    <div className="flex items-center gap-8">
                                        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden border-2 border-gray-50">
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-black uppercase tracking-tight text-2xl">{t.name}</span>
                                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{t.role}</span>
                                        </div>
                                    </div>
                                    <p className="text-2xl md:text-3xl leading-tight font-light italic text-gray-800">"{t.quote}"</p>
                                </div>
                            ))}
                            {/* Spacer to prevent shadow clipping on the last item */}
                            <div className="w-6 shrink-0"></div>
                        </div>
                    </div>

                    {/* HUGE MARQUEE */}
                    <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-24 border-y border-gray-100 bg-black/[0.01]">
                        <div className="flex w-max animate-marquee-left whitespace-nowrap">
                            <span className="text-[14vw] font-black tracking-tighter uppercase text-black/[0.05] px-12">ALWAYS WATCHING — INSPIRED BY THE UNEXPECTED —&nbsp;</span>
                            <span className="text-[14vw] font-black tracking-tighter uppercase text-black/[0.05] px-12">ALWAYS WATCHING — INSPIRED BY THE UNEXPECTED —&nbsp;</span>
                        </div>
                    </div>

                    {/* THE HUB */}
                    <div ref={hubSectionRef} className="w-full py-48 px-6 bg-white mt-20">
                        <div className="w-full max-w-[1250px] mx-auto flex flex-col md:flex-row gap-24 items-start">
                            <div className="w-full md:w-1/2 flex flex-col gap-12">
                                <h2 className="text-5xl md:text-8xl font-black leading-[0.85] uppercase tracking-tighter">Henri Barrett is a movement.</h2>
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

                    {/* WHO IS BARRETT SECTION */}
                    <div className="w-full py-32 px-6 border-t border-gray-100 mt-20">
                        <div className="flex flex-col md:flex-row gap-24 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-square bg-gray-50 rounded-full overflow-hidden p-12 border border-gray-100 flex items-center justify-center">
                                    <Sun className="w-full h-full stroke-[0.2] opacity-10 animate-[spin_30s_linear_infinite]" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-10">
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Who is <br/> Barrett?</h2>
                                <p className="text-xl md:text-2xl font-light text-gray-600 leading-tight">
                                    Barrett is more than a name; it's a standard of excellence. We represent the fusion of strategy and artistry, dedicated to those who refuse to be ordinary.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PHILOSOPHY BLOCK FINAL */}
                    <div className="w-full pt-48 pb-96 px-6 md:px-12 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row gap-16 w-full">
                            <div className="hidden md:block w-1/3">
                                <Sun className="w-32 h-32 stroke-[0.3] opacity-10" />
                            </div>
                            <div className="w-full md:w-2/3 flex flex-col gap-12">
                                <h3 className="text-3xl md:text-5xl font-normal leading-[0.85] tracking-tighter text-gray-900 uppercase">
                                    At Henri Barrett® we make your life easier and your brands louder through creativity, design and experimentation.
                                </h3>
                                <a href="#" className="text-xl font-bold border-b-2 border-gray-200 hover:border-black transition-all self-start uppercase tracking-[0.2em] pb-2">Learn more about Barrett®</a>
                            </div>
                        </div>
                    </div>

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
          <MoveUpRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
        </div>
      </div>

    </div>
  );
};
