import React, { useEffect, useRef, useState } from 'react';
import { Sun, MoveUpRight, Zap, Target, Aperture, Fingerprint, ArrowDown, ArrowRight, ArrowLeft, Instagram, ChevronDown, Play, X, Volume2, VolumeX } from 'lucide-react';

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
    <div className="w-full relative bg-white overflow-hidden py-2 sm:py-4 mb-24 md:mb-36">
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

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="relative w-full bg-[#111] text-white z-20 pt-24 pb-12 px-6 md:px-12 mt-32">
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

// --- APP PRINCIPAL ---
export const App: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const finalPlaceholderRef = useRef<HTMLDivElement>(null);
  const infoBarRef = useRef<HTMLDivElement>(null);
  const workTextRef = useRef<HTMLSpanElement>(null);
  const hubImageRef = useRef<HTMLImageElement>(null);
  const hubSectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const currentScrollY = useRef(0);
  const [pageHeight, setPageHeight] = useState<number>(0);

  // --- VISTAS Y FILTROS (SECCIÓN WORK) ---
  const [currentView, setCurrentView] = useState<'work' | 'home'>('work');
  const [viewMode, setViewMode] = useState<'grid' | 'explore' | 'list'>('grid');
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
        <header className="w-full bg-white text-black sticky top-0 z-40 px-6 sm:px-10 md:px-16 py-7 md:py-8 flex items-center justify-between border-b border-transparent gap-4">
          {/* Logo */}
          <button 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none shrink-0"
            title="Ir a inicio (About us)"
          >
            <HenriBarrettSun className="w-7 h-7 md:w-8 md:h-8 text-black group-hover:rotate-45 transition-transform duration-500 shrink-0" />
            <span className="font-extrabold text-[1.05rem] md:text-[1.25rem] tracking-tight uppercase leading-none text-black whitespace-nowrap">
              HENRI BARRETT®
            </span>
          </button>

          {/* Center Links (Visible en todas las vistas) */}
          <nav className="flex items-center gap-4 sm:gap-7 md:gap-10 lg:gap-14 text-[0.92rem] sm:text-[1rem] md:text-[1.05rem] font-medium text-black overflow-x-auto no-scrollbar py-1">
            <button 
              onClick={() => setCurrentView('home')} 
              className="hover:opacity-60 transition-opacity text-black/80 hover:text-black cursor-pointer whitespace-nowrap"
            >
              About us
            </button>
            <button 
              onClick={() => setCurrentView('work')} 
              className="font-bold text-black cursor-pointer relative whitespace-nowrap"
            >
              Work
            </button>
            <a href="#services" className="hover:opacity-60 transition-opacity text-black/80 hover:text-black whitespace-nowrap">Services</a>
            <a href="#quicklys" className="hover:opacity-60 transition-opacity text-black/80 hover:text-black whitespace-nowrap">Quicklys</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity text-black/80 hover:text-black whitespace-nowrap">Contact</a>
          </nav>

          {/* Right: Work with us */}
          <a 
            href="#work-with-us" 
            className="relative text-[0.92rem] sm:text-[1rem] md:text-[1.05rem] font-bold text-black border-b-[1.5px] border-black pb-0.5 hover:opacity-70 transition-opacity tracking-tight shrink-0 whitespace-nowrap"
          >
            Work with us
          </a>
        </header>

        {/* TIRA DE MARQUEE: "OUR WORK" EN PESO LIGHT PASANDO DE IZQUIERDA A DERECHA CON EL SOL */}
        <div className="w-full overflow-hidden py-4 sm:py-6 select-none bg-white border-y border-transparent">
          <div 
            className="flex w-max animate-marquee-right whitespace-nowrap will-change-transform" 
            style={{ animationDuration: '32s' }}
          >
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
            </div>
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20 pr-12 sm:pr-16 md:pr-20">
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
              <span className="text-[14vw] md:text-[13vw] font-light uppercase tracking-tight leading-none text-black">OUR WORK</span>
              <HenriBarrettSun className="w-[8.5vw] h-[8.5vw] min-w-[50px] min-h-[50px] max-w-[125px] max-h-[125px] text-black" />
            </div>
          </div>
        </div>

        {/* BAJADA: MINÚSCULA / SENTENCE CASE, TAMAÑO 67PX, ALTURA DE LÍNEA 74PX */}
        <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pt-12 md:pt-16 pb-12 md:pb-16">
          <p 
            className="text-[32px] sm:text-[46px] md:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[74px] font-normal tracking-[-0.03em] text-black normal-case max-w-[1240px]"
            style={{
              fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}
          >
            As architects of brand narratives, we amplify the voice to ensure they don't just talk but roar.
          </p>
        </div>

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
        <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 pb-0">
          {viewMode === 'grid' && (
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
          )}

          {viewMode === 'list' && (
            <div className="w-full flex flex-col divide-y divide-gray-200 border-y border-gray-200">
              {filteredProjects.map((work) => (
                <div
                  key={work.id}
                  className="py-8 flex justify-between items-center group cursor-pointer hover:px-4 transition-all"
                  onMouseEnter={() => setIsHoveringWork(true)}
                  onMouseLeave={() => setIsHoveringWork(false)}
                >
                  <span className="text-3xl md:text-5xl font-black uppercase tracking-tight group-hover:translate-x-3 transition-transform">
                    {work.title}
                  </span>
                  <div className="flex items-center gap-6">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{work.category}</span>
                    <MoveUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === 'explore' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((work) => (
                <div 
                  key={work.id} 
                  className="relative aspect-[3/4] overflow-hidden group cursor-none select-none"
                  data-selected-work-image="true"
                  onMouseEnter={(e) => {
                    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
                    if (cursorArrowRef.current) {
                      cursorArrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                    }
                    setIsHoveringWork(true);
                  }}
                  onMouseLeave={() => setIsHoveringWork(false)}
                >
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold uppercase">{work.title}</h3>
                    <p className="text-xs text-white/70 uppercase tracking-widest">{work.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TEXTO DESCRIPTIVO CENTRADO ENTRE EL FINAL DE WORK Y LA TIRA QUICKLYS */}
        <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-32 flex flex-col justify-center">
          <p 
            className="text-[32px] sm:text-[46px] md:text-[67px] leading-[38px] sm:leading-[54px] md:leading-[74px] font-normal tracking-[-0.03em] text-black normal-case max-w-[21ch] sm:max-w-[23ch]"
            style={{
              fontFamily: '"neue-haas-grotesk-display", "neue-haas-grotesk-text", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}
          >
            A collection of projects we've whipped up in record time. They may not have taken ages to conceive, but they radiate our commitment to quality and creativity.
          </p>
        </div>

        {/* TIRA DE MARQUEE: "QUICKLYS" EN PESO LIGHT CON EL SOL HENRI BARRETT */}
        <div className="w-full overflow-hidden py-4 sm:py-6 select-none bg-white border-y border-transparent mb-3 sm:mb-4 md:mb-5">
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

        {/* FOOTER */}
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
            <MoveUpRight className="w-12 h-12 md:w-14 md:h-14 stroke-[2.5]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={mainContainerRef} className="w-full transition-colors duration-200" style={{ backgroundColor: '#ffffff', height: pageHeight ? `${pageHeight}px` : '100vh' }}>
      
      {/* NAVEGACIÓN */}
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 md:px-16 py-8 md:py-12 bg-transparent flex items-center justify-between gap-4">
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center text-current gap-4">
            <button onClick={() => setCurrentView('home')} className="flex items-center gap-3.5 sm:gap-4 text-left cursor-pointer focus:outline-none shrink-0">
                <HenriBarrettSun className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-current shrink-0" />
                <span className="font-bold text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] tracking-tight uppercase leading-none whitespace-nowrap">HENRI BARRETT®</span>
            </button>
            
            <div className="flex items-center gap-4 sm:gap-7 md:gap-11 lg:gap-14 text-[0.92rem] sm:text-[1rem] md:text-[1.15rem] font-medium tracking-[0.03em] overflow-x-auto no-scrollbar py-1">
                <button onClick={() => setCurrentView('home')} className="hover:opacity-60 transition-opacity font-bold cursor-pointer whitespace-nowrap">About us</button>
                <button onClick={() => setCurrentView('work')} className="hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap">Work</button>
                <a href="#services" className="hover:opacity-60 transition-opacity whitespace-nowrap">Services</a>
                <a href="#quicklys" className="hover:opacity-60 transition-opacity whitespace-nowrap">Quicklys</a>
                <a href="#contact" className="hover:opacity-60 transition-opacity whitespace-nowrap">Contact</a>
            </div>

            <a href="#work-with-us" className="relative group text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-bold pb-1.5 tracking-[0.03em] transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap">
                Work with us
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
            </a>
        </div>
      </nav>

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
