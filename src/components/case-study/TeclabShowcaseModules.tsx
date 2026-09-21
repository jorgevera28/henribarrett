import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Star, 
  ClipboardCheck, 
  UploadCloud, 
  Hammer, 
  FileText, 
  Smartphone, 
  MessageSquare, 
  Mail, 
  UserCheck, 
  Search,
  Wifi,
  Battery,
  Heart,
  Bookmark,
  Share2,
  ArrowRight
} from 'lucide-react';

// =========================================================================
// ISOTYPE SVG: Geometric Teclab interlocking 'T' & 'L' with chamfered cuts
// =========================================================================
export const TeclabIsotypeIcon: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-24 h-24", 
  color = "currentColor" 
}) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* T-Bar: Horizontal top bar with angled chamfer */}
    <path 
      d="M16 22 H104 L90 44 H68 V102 H46 V44 H16 Z" 
      fill={color} 
    />
    {/* L-Bar / Angular structural reinforcement shape */}
    <path 
      d="M68 60 L86 44 V102 H104 L86 102 Z" 
      fill={color}
      opacity="0.9" 
    />
    {/* Diagonal crosscut element representing engineering precision */}
    <polygon 
      points="74,56 104,22 104,36 86,56" 
      fill={color} 
    />
  </svg>
);

// =========================================================================
// MODULE 1: HANGING SHIPPING CONTAINER CRANE HERO
// =========================================================================
export const TeclabContainerCraneModule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-2xl bg-black rounded-sm relative aspect-[16/9] sm:aspect-[16/9] md:aspect-[1.85/1] max-h-[85vh]">
      <img 
        src="/images/teclab_container_crane.jpg" 
        alt="Teclab black corrugated shipping container suspended by crane cables with fluorescent neon green branding"
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// =========================================================================
// MODULE 2: VERTICAL URBAN STREET TOTEM LIGHTBOX
// =========================================================================
export const TeclabStreetTotemModule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-2xl bg-[#0d0e10] rounded-sm relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] max-h-[90vh]">
      <img 
        src="/images/teclab_street_totem.jpg" 
        alt="Vertical outdoor advertising totem poster on city street with worker hands unrolling waterproofing membrane and neon green hazard stripes"
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// =========================================================================
// MODULE 3A: SOLID FLUORESCENT GREEN SQUARE WITH BLACK TECLAB ISOTYPE
// =========================================================================
export const TeclabNeonIsotypeSquareModule: React.FC = () => {
  return (
    <div className="w-full aspect-square bg-[#BCF125] flex flex-col items-center justify-center p-8 sm:p-14 md:p-20 relative overflow-hidden rounded-sm select-none shadow-lg">
      {/* Subtle engineering corner marks */}
      <div className="absolute top-6 left-6 text-[10px] font-mono font-bold tracking-widest text-black/60 uppercase">
        TECLAB ISO / 01
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] font-mono font-bold tracking-widest text-black/60 uppercase">
        SCALE: 1:1
      </div>
      
      {/* Big Black Interlocking Monogram Isotype */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center transition-transform duration-500 hover:scale-105">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
          {/* Structural 'T' and 'L' monolithic blocks */}
          <path d="M30 30 H170 L145 65 H115 V170 H85 V65 H30 Z" fill="#000000" />
          <path d="M115 95 L150 65 V170 H170 L135 170 Z" fill="#000000" />
          <polygon points="120,90 165,45 170,55 135,95" fill="#000000" />
          {/* Angled construction chamfer accent */}
          <polygon points="85,170 115,140 115,170" fill="#000000" />
        </svg>
      </div>
    </div>
  );
};

// =========================================================================
// MODULE 3B: IPHONE APP MOCKUP RESTING ON CONCRETE SURFACE (SG_showcase_body_reading_view.png)
// =========================================================================
export const TeclabIphoneScreenModule: React.FC = () => {
  return (
    <div className="w-full aspect-[4/5] sm:aspect-square bg-[#c8c9cc] flex items-center justify-center p-4 sm:p-8 md:p-10 relative overflow-hidden rounded-sm shadow-lg border border-black/10">
      {/* Concrete background texture styling */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#a3a5aa 1px, transparent 1px), radial-gradient(#8f9196 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 8px 8px'
        }}
      />
      {/* Concrete cracks & dust overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/30 pointer-events-none" />

      {/* iPhone Chassis container lying on concrete */}
      <div className="w-[270px] sm:w-[310px] md:w-[330px] aspect-[9/18.5] bg-black rounded-[46px] p-2.5 sm:p-3 ring-1 ring-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65)] relative flex flex-col justify-between select-none transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5 ring-1 ring-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#151515] ring-1 ring-white/5" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a1b33]" />
        </div>

        {/* Status Bar */}
        <div className="w-full flex items-center justify-between px-5 pt-1.5 text-[12px] font-semibold text-white/95 z-20 font-sans">
          <span>14:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi size={12} strokeWidth={2.5} />
            <span className="text-[10px] font-mono">5G</span>
            <Battery size={13} strokeWidth={2.5} />
          </div>
        </div>

        {/* iOS App Grid matching SG_showcase_body_reading_view.png */}
        <div className="flex-1 px-3 pt-5 pb-2 grid grid-cols-4 gap-x-3 sm:gap-x-3.5 gap-y-3.5 sm:gap-y-4 items-start content-start">
          
          {/* 1. TECLAB HERO APP ICON */}
          <div className="flex flex-col items-center gap-1 group cursor-pointer">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-[#BCF125] p-1.5 sm:p-2 flex items-center justify-center shadow-lg ring-1 ring-black/10 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-black">
                <path d="M15 15 H85 L72 35 H58 V85 H42 V35 H15 Z" fill="#000000" />
                <path d="M58 52 L78 35 V85 H88 L68 85 Z" fill="#000000" />
                <polygon points="62,48 88,24 90,32 70,54" fill="#000000" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-white tracking-tight">Teclab</span>
          </div>

          {/* 2. Photos */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-white flex items-center justify-center text-black shadow-md overflow-hidden p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500 opacity-90" />
            </div>
            <span className="text-[10px] text-white/75">Photos</span>
          </div>

          {/* 3. Camera */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-neutral-800 flex items-center justify-center text-white shadow-md">
              <div className="w-6 h-6 rounded-full border-2 border-white/60 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
              </div>
            </div>
            <span className="text-[10px] text-white/75">Camera</span>
          </div>

          {/* 4. Mail */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-gradient-to-br from-[#0288D1] to-[#01579B] flex items-center justify-center text-white shadow-md">
              <Mail size={20} />
            </div>
            <span className="text-[10px] text-white/75">Mail</span>
          </div>

          {/* Row 2: Clock */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-black border border-white/20 flex items-center justify-center text-white shadow-md relative">
              <div className="w-1 h-3 bg-white absolute top-2 left-1/2 -translate-x-1/2 origin-bottom rotate-45" />
              <div className="w-1.5 h-2 bg-orange-500 absolute top-3 left-1/2 -translate-x-1/2 origin-bottom -rotate-45" />
              <div className="w-1 h-1 rounded-full bg-orange-500" />
            </div>
            <span className="text-[10px] text-white/75">Clock</span>
          </div>

          {/* Maps */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-emerald-600 flex items-center justify-center text-white shadow-md">
              <span className="text-xs font-bold font-mono">MAP</span>
            </div>
            <span className="text-[10px] text-white/75">Maps</span>
          </div>

          {/* Weather */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md">
              <span className="text-sm">☀️</span>
            </div>
            <span className="text-[10px] text-white/75">Weather</span>
          </div>

          {/* Reminders */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-white flex items-center justify-center text-sky-500 shadow-md">
              <ClipboardCheck size={20} />
            </div>
            <span className="text-[10px] text-white/75">Reminders</span>
          </div>

          {/* Row 3: Podcasts */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-gradient-to-tr from-purple-700 to-purple-500 flex items-center justify-center text-white shadow-md">
              <span className="text-base">🎙️</span>
            </div>
            <span className="text-[10px] text-white/75">Podcasts</span>
          </div>

          {/* Figma */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[13px] bg-gradient-to-br from-[#242426] to-[#0f0f10] flex items-center justify-center text-[#BCF125] shadow-md border border-white/10">
              <span className="font-mono text-xs font-bold tracking-tight">FIG</span>
            </div>
            <span className="text-[10px] text-white/75">Figma</span>
          </div>

        </div>

        {/* iOS Dock */}
        <div className="w-full bg-white/15 backdrop-blur-md rounded-[28px] p-2 flex items-center justify-around mb-2">
          <div className="w-10 h-10 rounded-[11px] bg-green-500 flex items-center justify-center text-white shadow-sm">
            <Smartphone size={18} />
          </div>
          <div className="w-10 h-10 rounded-[11px] bg-blue-500 flex items-center justify-center text-white shadow-sm">
            <Search size={18} />
          </div>
          <div className="w-10 h-10 rounded-[11px] bg-[#BCF125] p-1.5 flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-black">
              <path d="M15 15 H85 L72 35 H58 V85 H42 V35 H15 Z" fill="#000000" />
              <path d="M58 52 L78 35 V85 H88 L68 85 Z" fill="#000000" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-[11px] bg-sky-400 flex items-center justify-center text-white shadow-sm">
            <MessageSquare size={18} />
          </div>
        </div>

        {/* Home indicator bar */}
        <div className="w-28 h-1 bg-white/70 rounded-full mx-auto mb-1" />
      </div>
    </div>
  );
};

// =========================================================================
// MODULE 3: 50 / 50 SPLIT (NEON GREEN ISOTYPE + IPHONE APP MOCKUP)
// =========================================================================
export const TeclabBrandDuoModule: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
      <TeclabNeonIsotypeSquareModule />
      <TeclabIphoneScreenModule />
    </div>
  );
};

// =========================================================================
// MODULE 4: 4-COLUMN TYPOGRAPHY & COLOR SPECIFICATION SYSTEM
// Exact match to SG_showcase_grid_visual_view.png
// =========================================================================
export const TeclabTypeAndColorModule: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full select-none">
      
      {/* COLUMN 1: Startup Medium (Títulos) */}
      <div className="bg-[#242426] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[460px] rounded-sm shadow-md border border-white/5">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-white/60 uppercase pb-4 border-b border-white/10">
            <span>Tipografía</span>
            <span>Títulos</span>
          </div>
          <h3 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight mt-6 text-white font-sans">
            Startup Medium
          </h3>
          <p className="text-xs sm:text-[13px] font-normal leading-relaxed text-white/80 mt-6 tracking-wide break-all font-mono">
            abcdefghijklmnñopqrstuvw<br />
            xyzABCDEFGHIJKLMNÑOP<br />
            QRSTUVWXYZ<br />
            0123456789.:;!¡$?%-?&gt;&lt;*+=
          </p>
        </div>
        <div className="text-[5rem] sm:text-[6rem] md:text-[6.75rem] font-medium leading-none tracking-tighter text-white mt-8">
          Aa
        </div>
      </div>

      {/* COLUMN 2: PP Neue Machina (Cuerpo de texto) */}
      <div className="bg-[#000000] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[460px] rounded-sm shadow-md border border-white/10">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-white/60 uppercase pb-4 border-b border-white/10">
            <span>Tipografía</span>
            <span>Cuerpo de texto</span>
          </div>
          <h3 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight mt-6 text-white font-sans">
            PP Neue Machina
          </h3>
          <p className="text-xs sm:text-[13px] font-normal leading-relaxed text-white/80 mt-6 tracking-wide break-all font-mono">
            abcdefghijklmnñopqrstuvwx<br />
            yzABCDEFGHIJKLMNÑOPQR<br />
            STUVWXYZ<br />
            0123456789.:;!¡$%&gt;&lt;*+=
          </p>
        </div>
        <div className="text-[5rem] sm:text-[6rem] md:text-[6.75rem] font-normal leading-none tracking-tighter text-white mt-8 font-mono">
          Aa
        </div>
      </div>

      {/* COLUMN 3: WHITE (Color Complementario) */}
      <div className="bg-[#FFFFFF] text-black p-6 sm:p-8 flex flex-col justify-between min-h-[460px] rounded-sm shadow-md">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-black/60 uppercase pb-4 border-b border-black/10">
            <span>Paleta de Color</span>
            <span>Color Complementario</span>
          </div>
          <div className="text-xs font-mono text-black/50 mt-4">
            Opacidad ~20%
          </div>
          <h3 className="text-3xl sm:text-[2.25rem] font-bold tracking-tight mt-1 text-black font-sans">
            WHITE
          </h3>
          
          {/* Color Technical Specs */}
          <div className="grid grid-cols-2 gap-y-1.5 text-xs sm:text-[13px] font-mono mt-6 text-black/90">
            <span className="text-black/50">RGB</span>
            <span className="font-semibold">255 255 255</span>
            <span className="text-black/50">CMYK</span>
            <span className="font-semibold">0 0 0 0</span>
            <span className="text-black/50">HSB</span>
            <span className="font-semibold">0 0 100</span>
            <span className="text-black/50">LAB</span>
            <span className="font-semibold">100 0 0</span>
            <span className="text-black/50">HEX</span>
            <span className="font-semibold">#FFFFFF</span>
          </div>
        </div>

        {/* Stepped Opacity Gradient Bars */}
        <div className="flex flex-col gap-1.5 mt-8 w-full">
          <div className="h-3 w-full bg-black/5 rounded-xs" />
          <div className="h-3 w-full bg-black/10 rounded-xs" />
          <div className="h-3 w-full bg-black/20 rounded-xs" />
          <div className="h-3 w-full bg-black/40 rounded-xs" />
          <div className="h-3 w-full bg-black/70 rounded-xs" />
          <div className="h-3 w-full bg-black rounded-xs" />
        </div>
      </div>

      {/* COLUMN 4: GREEN (Color Principal - #BCF125) */}
      <div className="bg-[#BCF125] text-black p-6 sm:p-8 flex flex-col justify-between min-h-[460px] rounded-sm shadow-md">
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-black/70 uppercase pb-4 border-b border-black/15">
            <span>Paleta de Color</span>
            <span>Color Principal</span>
          </div>
          <h3 className="text-3xl sm:text-[2.25rem] font-bold tracking-tight mt-7 text-black font-sans">
            GREEN
          </h3>
          
          {/* Color Technical Specs */}
          <div className="grid grid-cols-2 gap-y-1.5 text-xs sm:text-[13px] font-mono mt-6 text-black/95">
            <span className="text-black/60">RGB</span>
            <span className="font-semibold">188 241 37</span>
            <span className="text-black/60">CMYK</span>
            <span className="font-semibold">35 0 95 0</span>
            <span className="text-black/60">HSB</span>
            <span className="font-semibold">76 85 95</span>
            <span className="text-black/60">LAB</span>
            <span className="font-semibold">89 -35 80</span>
            <span className="text-black/60">HEX</span>
            <span className="font-semibold">#BCF125</span>
          </div>
        </div>

        {/* Solid swatch baseline */}
        <div className="w-full pt-6 flex items-center justify-between border-t border-black/15 text-[11px] font-mono font-bold uppercase tracking-wider">
          <span>FLUORESCENT ACCENT</span>
          <span>100% CMYK SAFE</span>
        </div>
      </div>

    </div>
  );
};

// =========================================================================
// MODULE 5: TECHNICAL ICONOGRAPHY GRID & BLUEPRINT GRID
// =========================================================================
export const TeclabIconographyGridModule: React.FC = () => {
  const icons = [
    { label: 'QUALITY', icon: Award },
    { label: 'TRUST', icon: ShieldCheck },
    { label: 'EXCELLENCE', icon: Star },
    { label: 'COMMITMENT', icon: ClipboardCheck },
    { label: 'UPLOAD', icon: UploadCloud },
    { label: 'SERVICES', icon: Hammer },
    { label: 'FILE', icon: FileText },
    { label: 'PHONE', icon: Smartphone },
    { label: 'CHAT BOX', icon: MessageSquare },
    { label: 'MAIL', icon: Mail },
    { label: 'CONTACT', icon: UserCheck },
    { label: 'SEARCH', icon: Search }
  ];

  return (
    <div className="w-full bg-[#0a0a0c] text-white p-6 sm:p-10 md:p-14 lg:p-16 rounded-sm shadow-xl border border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: 12 Technical Icons in 4x3 Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8 select-none">
          {icons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-sm bg-[#121316] border border-white/5 hover:border-[#BCF125]/50 transition-colors group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/90 group-hover:text-[#BCF125] transition-colors">
                  <IconComp size={28} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-white/60 group-hover:text-white uppercase text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Architectural Blueprint Grid with Geometric Trowel Tool */}
        <div className="w-full aspect-[4/3] bg-[#0d0e12] rounded-sm p-6 sm:p-8 relative overflow-hidden flex items-center justify-center border border-white/10 select-none">
          {/* Blueprint Grid Lines */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Technical Measurement Compass & Coordinate Crosshairs */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-[#BCF125] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BCF125] animate-ping" />
            <span>GRID SYSTEM / 45° CHAMFER ARCHITECTURE</span>
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/40">
            X: 104.50 // Y: 82.20
          </div>

          {/* Large Scale Geometric Construction Tool Blueprint Drawing */}
          <svg viewBox="0 0 300 240" fill="none" className="w-full max-w-[340px] max-h-[260px] text-white">
            {/* Trowel Trapezoid Blade */}
            <polygon 
              points="60,180 240,180 210,80 90,80" 
              stroke="#FFFFFF" 
              strokeWidth="2.5" 
              fill="rgba(188, 241, 37, 0.08)"
            />
            {/* Blade Center Reinforcing Spine */}
            <line x1="150" y1="80" x2="150" y2="180" stroke="#BCF125" strokeWidth="2" strokeDasharray="4 3" />
            {/* Handle Neck */}
            <path d="M150 80 V40 H165" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="square" />
            {/* Ergonomic Wooden/Rubber Grip Handle */}
            <rect x="165" y="30" width="70" height="20" rx="4" stroke="#FFFFFF" strokeWidth="2" fill="#141518" />
            {/* Dimension Indicators */}
            <line x1="50" y1="180" x2="50" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="45" y1="80" x2="55" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <line x1="45" y1="180" x2="55" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            <text x="35" y="135" fill="#BCF125" fontSize="10" fontFamily="monospace" textAnchor="end">H:100</text>
            <text x="150" y="205" fill="#BCF125" fontSize="10" fontFamily="monospace" textAnchor="middle">W: 180mm</text>
          </svg>
        </div>

      </div>
    </div>
  );
};

// =========================================================================
// MODULE 6: 3-COLUMN ISOMETRIC ARCHITECTURAL SYSTEMS
// Exact match to SG_showcase_grid_visual_view.png
// =========================================================================
export const TeclabIsometricSystemModule: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full select-none">
      
      {/* COLUMN 1: DEMOLICIÓN NO EXPLOSIVA - WHITE */}
      <div className="bg-[#0b0c0e] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[440px] rounded-sm shadow-md border border-white/10">
        <div>
          <h4 className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-white uppercase pb-3 border-b border-white/20">
            DEMOLICIÓN NO EXPLOSIVA - WHITE
          </h4>
          <p className="text-xs text-white/60 font-light mt-3 leading-relaxed">
            Precise chemical expansion fracturing & diamond wall-saw cutting for urban foundations without vibration shockwaves.
          </p>
        </div>

        {/* Isometric Illustration: Fractured Foundation Wall */}
        <div className="w-full flex items-center justify-center my-8">
          <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px] h-auto text-white">
            {/* Isometric Brick/Concrete Block Stack */}
            <polygon points="100,20 170,60 100,100 30,60" stroke="#FFFFFF" strokeWidth="2" fill="#15171a" />
            <polygon points="30,60 100,100 100,150 30,110" stroke="#FFFFFF" strokeWidth="2" fill="#111215" />
            <polygon points="100,100 170,60 170,110 100,150" stroke="#FFFFFF" strokeWidth="2" fill="#0c0d0f" />
            {/* Fissure crack lines */}
            <path d="M100 20 L95 45 L110 65 L98 85 L100 100" stroke="#BCF125" strokeWidth="2" />
            <path d="M100 100 L90 120 L102 135 L100 150" stroke="#BCF125" strokeWidth="2" />
            {/* Expansion Core Hole Drill */}
            <circle cx="100" cy="60" r="10" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          </svg>
        </div>

        <div className="text-[11px] font-mono text-white/40 flex items-center justify-between border-t border-white/10 pt-3">
          <span>METHOD: EXPANSIVE MORTAR</span>
          <span>SAFE 100%</span>
        </div>
      </div>

      {/* COLUMN 2: SELLOS CORTA FUEGOS */}
      <div className="bg-[#FFFFFF] text-black p-6 sm:p-8 flex flex-col justify-between min-h-[440px] rounded-sm shadow-md">
        <div>
          <h4 className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-black uppercase pb-3 border-b border-black/20">
            SELLOS CORTA FUEGOS
          </h4>
          <p className="text-xs text-black/70 font-light mt-3 leading-relaxed">
            Intumescent penetration firestop collars, specialized technical wrap strips, and fire-resistant elastomeric coatings.
          </p>
        </div>

        {/* Isometric Illustration: Firestop Wall Penetration with Neon Green Pipe */}
        <div className="w-full flex items-center justify-center my-8">
          <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px] h-auto">
            {/* Fire Barrier Wall Section */}
            <polygon points="100,20 170,60 100,100 30,60" stroke="#111111" strokeWidth="2" fill="#F4F4F5" />
            <polygon points="30,60 100,100 100,150 30,110" stroke="#111111" strokeWidth="2" fill="#E4E4E7" />
            <polygon points="100,100 170,60 170,110 100,150" stroke="#111111" strokeWidth="2" fill="#D4D4D8" />
            {/* Penetrating Industrial Conduit / Pipe (Vivid Neon Green) */}
            <path d="M60 40 L140 120" stroke="#BCF125" strokeWidth="16" strokeLinecap="round" />
            <path d="M60 40 L140 120" stroke="#111111" strokeWidth="1.5" />
            {/* Intumescent Firestop Collar Ring */}
            <ellipse cx="100" cy="80" rx="20" ry="12" stroke="#111111" strokeWidth="2.5" fill="#FFFFFF" />
            <ellipse cx="100" cy="80" rx="14" ry="8" stroke="#BCF125" strokeWidth="2" fill="#111" />
          </svg>
        </div>

        <div className="text-[11px] font-mono text-black/50 flex items-center justify-between border-t border-black/15 pt-3">
          <span>UL 1479 COMPLIANT</span>
          <span>3-HR FIRE RATED</span>
        </div>
      </div>

      {/* COLUMN 3: REFORZAMIENTO - BLACK */}
      <div className="bg-[#BCF125] text-black p-6 sm:p-8 flex flex-col justify-between min-h-[440px] rounded-sm shadow-md">
        <div>
          <h4 className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-black uppercase pb-3 border-b border-black/20">
            REFORZAMIENTO - BLACK
          </h4>
          <p className="text-xs text-black/80 font-light mt-3 leading-relaxed">
            Carbon fiber reinforced polymers (CFRP) structural plate bonding, steel beam encasement, and seismic retrofitting.
          </p>
        </div>

        {/* Isometric Illustration: Structural Beam Jacketing & Carbon Fiber Plates */}
        <div className="w-full flex items-center justify-center my-8">
          <svg viewBox="0 0 200 160" fill="none" className="w-full max-w-[200px] h-auto text-black">
            {/* I-Beam Structural Steel Profile */}
            <path 
              d="M50 30 H150 L140 50 H110 V110 H140 L150 130 H50 L60 110 H90 V50 H60 Z" 
              stroke="#000000" 
              strokeWidth="2.5" 
              fill="#000000" 
            />
            {/* Carbon Fiber Wrap Cross-Hatch Accent */}
            <line x1="85" y1="55" x2="115" y2="75" stroke="#BCF125" strokeWidth="1.5" />
            <line x1="85" y1="75" x2="115" y2="95" stroke="#BCF125" strokeWidth="1.5" />
            <line x1="85" y1="95" x2="115" y2="105" stroke="#BCF125" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="text-[11px] font-mono text-black/60 flex items-center justify-between border-t border-black/20 pt-3">
          <span>HIGH-TENSILE CFRP</span>
          <span>SEISMIC GRADE</span>
        </div>
      </div>

    </div>
  );
};

// =========================================================================
// MODULE 7: BUSINESS CARDS ON CONCRETE (PHOTOREALISTIC MACRO)
// =========================================================================
export const TeclabBusinessCardsModule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-2xl bg-black rounded-sm relative aspect-[16/9] sm:aspect-[16/9] md:aspect-[1.85/1] max-h-[85vh]">
      <img 
        src="/images/teclab_business_cards.jpg" 
        alt="Stack of luxury matte black Teclab business cards with neon lime green edge paint on rough sunlit concrete"
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// =========================================================================
// MODULE 8: STATIONERY PRESENTATION FOLDER FLATLAY
// =========================================================================
export const TeclabStationeryModule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-2xl bg-[#121315] rounded-sm relative aspect-[16/9] sm:aspect-[16/9] md:aspect-[1.85/1] max-h-[85vh]">
      <img 
        src="/images/teclab_stationery_folder.jpg" 
        alt="Open corporate presentation folder in fluorescent neon green and matte black with technical brochures"
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

// =========================================================================
// MODULE 9: 3-COLUMN SOCIAL / INSTAGRAM STORIES CAROUSEL
// =========================================================================
export const TeclabSocialCarouselModule: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full select-none">
      
      {/* POST 1: Troweling concrete with neon angles */}
      <div className="bg-[#101114] rounded-sm overflow-hidden border border-white/10 shadow-lg flex flex-col">
        {/* Instagram Post Header */}
        <div className="p-3.5 flex items-center justify-between border-b border-white/5 bg-[#141518]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#BCF125] p-1 flex items-center justify-center">
              <span className="font-bold text-black text-[10px]">T</span>
            </div>
            <span className="text-xs font-medium text-white">teclab.pe</span>
          </div>
          <span className="text-white/40 text-xs">•••</span>
        </div>

        {/* Visual Content Frame */}
        <div className="w-full aspect-square bg-[#0e0f11] relative overflow-hidden flex flex-col justify-between p-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          
          <img 
            src="/images/teclab_hero.jpg" 
            alt="Teclab services masonry"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Graphic Overlay */}
          <div className="relative z-20 flex justify-between items-start">
            <span className="px-2.5 py-1 bg-[#BCF125] text-black font-mono text-[10px] font-bold rounded-xs">
              LO QUE HACEMOS
            </span>
            <span className="text-[10px] font-mono text-white/70">01 / 03</span>
          </div>

          <div className="relative z-20">
            <h4 className="text-2xl font-bold uppercase tracking-tight text-white leading-none">
              NUESTROS<br /><span className="text-[#BCF125]">SERVICIOS</span>
            </h4>
            <p className="text-xs text-white/80 mt-2 font-light line-clamp-2">
              Soluciones integrales de alta ingeniería para proyectos de construcción de envergadura.
            </p>
          </div>
        </div>

        {/* Post Actions */}
        <div className="p-3 flex items-center justify-between text-white/80">
          <div className="flex items-center gap-3">
            <Heart size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <MessageSquare size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <Share2 size={18} className="hover:text-[#BCF125] cursor-pointer" />
          </div>
          <Bookmark size={18} className="hover:text-[#BCF125] cursor-pointer" />
        </div>
      </div>

      {/* POST 2: Structural Anchors (Anclajes Estructurales) */}
      <div className="bg-[#101114] rounded-sm overflow-hidden border border-white/10 shadow-lg flex flex-col">
        {/* Instagram Post Header */}
        <div className="p-3.5 flex items-center justify-between border-b border-white/5 bg-[#141518]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#BCF125] p-1 flex items-center justify-center">
              <span className="font-bold text-black text-[10px]">T</span>
            </div>
            <span className="text-xs font-medium text-white">teclab.pe</span>
          </div>
          <span className="text-white/40 text-xs">•••</span>
        </div>

        {/* Visual Content Frame */}
        <div className="w-full aspect-square bg-[#000000] relative overflow-hidden flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <span className="px-2.5 py-1 bg-white/10 text-white font-mono text-[10px] font-bold rounded-xs border border-white/10">
              INGENIERÍA
            </span>
            <span className="text-[10px] font-mono text-[#BCF125]">02 / 03</span>
          </div>

          {/* Central Wireframe Anchor Illustration */}
          <div className="w-full flex items-center justify-center my-auto">
            <svg viewBox="0 0 160 160" fill="none" className="w-32 h-32 text-[#BCF125]">
              <rect x="40" y="30" width="80" height="100" rx="4" stroke="#BCF125" strokeWidth="2" strokeDasharray="4 2" fill="rgba(188, 241, 37, 0.05)" />
              <line x1="80" y1="20" x2="80" y2="140" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="80" cy="50" r="16" stroke="#BCF125" strokeWidth="2" fill="#000" />
              <circle cx="80" cy="90" r="16" stroke="#BCF125" strokeWidth="2" fill="#000" />
              <path d="M60 130 L100 130" stroke="#FFFFFF" strokeWidth="4" />
            </svg>
          </div>

          <div>
            <h4 className="text-xl font-bold uppercase tracking-tight text-white leading-tight">
              ANCLAJES ESTRUCTURALES
            </h4>
            <p className="text-[11px] font-mono text-[#BCF125] mt-1">
              LA CIENCIA DE LA CONSTRUCCIÓN
            </p>
          </div>
        </div>

        {/* Post Actions */}
        <div className="p-3 flex items-center justify-between text-white/80">
          <div className="flex items-center gap-3">
            <Heart size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <MessageSquare size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <Share2 size={18} className="hover:text-[#BCF125] cursor-pointer" />
          </div>
          <Bookmark size={18} className="hover:text-[#BCF125] cursor-pointer" />
        </div>
      </div>

      {/* POST 3: Waterproofing & Sealing Membrane */}
      <div className="bg-[#101114] rounded-sm overflow-hidden border border-white/10 shadow-lg flex flex-col">
        {/* Instagram Post Header */}
        <div className="p-3.5 flex items-center justify-between border-b border-white/5 bg-[#141518]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#BCF125] p-1 flex items-center justify-center">
              <span className="font-bold text-black text-[10px]">T</span>
            </div>
            <span className="text-xs font-medium text-white">teclab.pe</span>
          </div>
          <span className="text-white/40 text-xs">•••</span>
        </div>

        {/* Visual Content Frame */}
        <div className="w-full aspect-square bg-[#0b0c0e] relative overflow-hidden flex flex-col justify-between p-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
          
          <img 
            src="/images/teclab_street_totem.jpg" 
            alt="Worker unrolling membrane"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          <div className="relative z-20 flex justify-between items-start">
            <span className="px-2.5 py-1 bg-[#BCF125] text-black font-mono text-[10px] font-bold rounded-xs">
              IMPERMEABILIZACIÓN
            </span>
            <span className="text-[10px] font-mono text-white/70">03 / 03</span>
          </div>

          <div className="relative z-20">
            <h4 className="text-2xl font-bold uppercase tracking-tight text-white leading-none">
              MÁXIMA PROTECCIÓN<br /><span className="text-[#BCF125]">ESTRUCTURAL</span>
            </h4>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm font-bold text-white tracking-widest font-sans">TECLAB</span>
              <span className="text-[#BCF125] text-xs">®</span>
            </div>
          </div>
        </div>

        {/* Post Actions */}
        <div className="p-3 flex items-center justify-between text-white/80">
          <div className="flex items-center gap-3">
            <Heart size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <MessageSquare size={18} className="hover:text-[#BCF125] cursor-pointer" />
            <Share2 size={18} className="hover:text-[#BCF125] cursor-pointer" />
          </div>
          <Bookmark size={18} className="hover:text-[#BCF125] cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

// =========================================================================
// MODULE 10: WEB EXPERIENCE ON MACBOOK PRO MOCKUP
// =========================================================================
export const TeclabWebExperienceModule: React.FC = () => {
  return (
    <div className="w-full bg-[#050506] p-6 sm:p-10 md:p-14 rounded-sm border border-white/10 shadow-2xl flex flex-col items-center justify-center select-none">
      {/* MacBook Screen Bezel */}
      <div className="w-full max-w-[1240px] bg-[#1a1a1c] rounded-t-xl p-2.5 sm:p-3.5 shadow-2xl border border-white/10">
        
        {/* Camera notch / dot */}
        <div className="w-2 h-2 rounded-full bg-black mx-auto mb-2 ring-1 ring-white/10" />

        {/* Display Content */}
        <div className="w-full bg-[#0a0a0c] rounded-md overflow-hidden aspect-[16/10] flex flex-col relative border border-white/10">
          
          {/* Browser Chrome Header */}
          <div className="w-full bg-[#121316] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="w-72 sm:w-96 bg-[#0a0a0c] text-white/60 px-3 py-1 rounded-sm text-[11px] font-mono text-center truncate border border-white/5">
              https://www.teclab.pe
            </div>
            <div className="w-10" />
          </div>

          {/* Website Hero Inside Browser */}
          <div className="flex-1 relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-gradient-to-r from-black via-black/80 to-transparent">
            {/* Background Construction Panorama */}
            <img 
              src="/images/teclab_hero.jpg" 
              alt="Teclab Website Hero Background"
              className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Navigation inside web */}
            <div className="relative z-10 w-full flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg sm:text-xl tracking-tighter">TECLAB</span>
                <span className="w-2 h-2 rounded-full bg-[#BCF125]" />
              </div>
              <div className="hidden sm:flex items-center gap-6 text-xs text-white/80 font-medium">
                <span className="text-[#BCF125]">Inicio</span>
                <span>Nosotros</span>
                <span>Servicios</span>
                <span>Proyectos</span>
                <span>Contacto</span>
              </div>
            </div>

            {/* Hero Main Copy */}
            <div className="relative z-10 max-w-2xl mt-8 sm:mt-12">
              <div className="inline-block px-3 py-1 rounded-xs bg-[#BCF125]/15 border border-[#BCF125]/40 text-[#BCF125] font-mono text-xs font-semibold uppercase mb-4">
                INNOVACIÓN EN MATERIALES
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-[400] text-white tracking-tight leading-[1.05]">
                SOLUCIONES A TU <span className="text-[#BCF125]">MEDIDA.</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/70 font-light mt-4 max-w-lg leading-relaxed">
                Ingeniería aplicada, demolición no explosiva y sellos corta fuegos con los más altos estándares estructurales.
              </p>

              <div className="flex items-center gap-4 mt-6">
                <button className="px-5 py-2.5 rounded-xs bg-[#BCF125] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors cursor-pointer">
                  <span>CONOCER MÁS</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Floating Contact Card on Bottom Right */}
            <div className="hidden md:flex absolute bottom-8 right-8 z-10 p-4 bg-black/80 backdrop-blur-md rounded-sm border border-white/15 max-w-[260px] flex-col gap-2">
              <span className="text-[10px] font-mono text-[#BCF125] uppercase">TRABAJEMOS JUNTOS</span>
              <p className="text-xs text-white font-medium leading-snug">
                ¿Tienes un proyecto en mente? Consulta con nuestros especialistas técnicos.
              </p>
              <span className="text-[11px] text-white/60 underline pt-1">Contáctanos ahora</span>
            </div>

          </div>

        </div>

      </div>

      {/* MacBook Aluminum Base */}
      <div className="w-[104%] max-w-[1290px] h-3.5 bg-gradient-to-b from-[#2e2f33] to-[#1e1e20] rounded-b-xl relative shadow-2xl flex items-center justify-center">
        <div className="w-16 h-1 bg-[#101012] rounded-full" />
      </div>
    </div>
  );
};

// =========================================================================
// MODULE 11: CONSTRUCTION HOARDING WILDPOSTING PANORAMIC
// =========================================================================
export const TeclabHoardingPanoramicModule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden shadow-2xl bg-black rounded-sm relative aspect-[16/9] sm:aspect-[16/9] md:aspect-[1.85/1] max-h-[85vh]">
      <img 
        src="/images/teclab_hoarding_street.jpg" 
        alt="Wide street-level photograph of construction hoarding perimeter fence covered in black, white and neon green Teclab wildposting posters with a walking pedestrian"
        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
