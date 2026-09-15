import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc, Sparkles } from 'lucide-react';
import { AppView } from '../../../App';

interface BarrettSessionsVisualViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const BarrettSessionsVisualView: React.FC<BarrettSessionsVisualViewProps> = ({ 
  theme = "light",
  onNavigate,
}) => {
  const isDark = theme === "dark";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0c0c0d] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>

      {/* 1. HERO SHOWCASE FULL BLEED BANNER */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 pt-10 sm:pt-16 pb-12 sm:pb-20 max-w-[1900px] mx-auto">
        <div className="w-full relative aspect-[16/9] md:aspect-[2.1/1] overflow-hidden rounded-none shadow-xl bg-neutral-900 group">
          <img 
            src="/images/barrett_sessions_pedestal_sign.jpg" 
            alt="Barrett Sessions illuminated sign on concrete pedestal"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.015]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Audio Session Player Widget floating in bottom left */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-auto z-20 bg-black/80 backdrop-blur-md text-white p-3.5 sm:p-5 border border-white/10 flex items-center gap-4 sm:gap-6 max-w-[480px]">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
              aria-label={isPlaying ? "Pause session" : "Play session"}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-widest font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full bg-emerald-400 ${isPlaying ? 'animate-ping' : ''}`} />
                  SESSION #04 • LIVE MASTER
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold truncate text-white mt-0.5">
                Echoes in Concrete (Acoustic Version)
              </p>
              <p className="text-xs text-white/60 truncate">
                Streamed live from Henri Barrett HQ
              </p>
            </div>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-white/70 hover:text-white p-2 transition-colors cursor-pointer"
              aria-label="Toggle mute"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>
      </section>

      {/* 2. SPLIT GRID: INTIMATE PERFORMANCE & ARCHITECTURAL STAGE */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-16 max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          
          {/* Visual 1: Live performance */}
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img 
                src="/images/barrett_sessions_live.jpg" 
                alt="Live Indie Session performance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 sm:pt-6 flex justify-between items-baseline border-b pb-3 border-current/15">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest opacity-60">(01) PERFORMANCE</span>
              <span className="text-sm font-medium">Warm Tungsten & Direct Multi-Track</span>
            </div>
          </div>

          {/* Visual 2: Limited vinyl merch & poster */}
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img 
                src="/images/barrett_sessions_vinyl.jpg" 
                alt="Vinyl record packaging and identity design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 sm:pt-6 flex justify-between items-baseline border-b pb-3 border-current/15">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest opacity-60">(02) ARTIFACTS</span>
              <span className="text-sm font-medium">Limited Silkscreen Prints & Lathe Cut Vinyl</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FULL WIDTH ARCHITECTURAL STAGE PHOTOMETRICS */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-16 max-w-[1900px] mx-auto">
        <div className="w-full relative aspect-[16/10] sm:aspect-[2.2/1] overflow-hidden shadow-lg bg-neutral-900 group">
          <img 
            src="/images/barrett_sessions_hero.jpg" 
            alt="Studio stage portrait and acoustic setup"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="max-w-[620px]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-400 mb-2">
                <Disc size={14} className="animate-spin text-white" />
                <span>SPATIAL & AUDIO PRODUCTION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight">
                Designed as a physical instrument where acoustic purity meets bold agency design.
              </h3>
            </div>

            <div className="flex items-center gap-8 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-300">
              <div>
                <p className="text-white font-bold text-base">14+</p>
                <p className="opacity-60">Artists Hosted</p>
              </div>
              <div>
                <p className="text-white font-bold text-base">4K 60FPS</p>
                <p className="opacity-60">Live Broadcast</p>
              </div>
              <div>
                <p className="text-white font-bold text-base">100%</p>
                <p className="opacity-60">Analog Mic Preamps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE-COLUMN DETAIL BREAKDOWN */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-20 max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          
          <div className="flex flex-col border-t pt-6 border-current/20">
            <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-3">(01) THE LIGHTBOX</div>
            <h4 className="text-xl sm:text-2xl font-normal mb-3">Luminous Signage Beacon</h4>
            <p className="text-sm sm:text-base opacity-75 font-light leading-relaxed">
              Crafted with cold-rolled steel and laser-etched milky acrylic, the lightbox signals the session is rolling and defines the visual framing for every live stream angle.
            </p>
          </div>

          <div className="flex flex-col border-t pt-6 border-current/20">
            <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-3">(02) ACOUSTICS</div>
            <h4 className="text-xl sm:text-2xl font-normal mb-3">Architectural Diffusion</h4>
            <p className="text-sm sm:text-base opacity-75 font-light leading-relaxed">
              Tuning an office space into a studio required discreet acoustic traps and custom mobile baffles, allowing natural resonance without fluttering echoes.
            </p>
          </div>

          <div className="flex flex-col border-t pt-6 border-current/20">
            <div className="text-xs font-mono uppercase tracking-widest opacity-50 mb-3">(03) THE COMMUNITY</div>
            <h4 className="text-xl sm:text-2xl font-normal mb-3">Independent Voices</h4>
            <p className="text-sm sm:text-base opacity-75 font-light leading-relaxed">
              Curated exclusively for emerging musicians across indie, neo-soul, folk, and experimental electronic soundscapes in Peru and Latin America.
            </p>
          </div>

        </div>
      </section>

      {/* 5. ARTIST SPOTLIGHT & 3D ORGANIC SCULPTURES */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-16 max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 shadow-md">
              <img 
                src="/images/barrett_lucho_portrait.jpg" 
                alt="DJ Lucho Zeballos portrait in magenta and blue lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(04) ARTIST ROSTER</span>
              <span className="font-medium">Lucho Zeballos • Electronic Groove</span>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 shadow-md">
              <img 
                src="/images/barrett_ruqyay_portrait.jpg" 
                alt="Ruqyay Wayra portrait in saturated red studio lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(05) ARTIST ROSTER</span>
              <span className="font-medium">Ruqyay Wayra • Sacred Sounds</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. MERCHANDISE & STREET GUERRILLA ACTIVATIONS */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-16 max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12">
          
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-md">
              <img 
                src="/images/barrett_tote_bag.jpg" 
                alt="Red canvas Barrett Sessions tote bag"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(06) MERCHANDISE</span>
              <span className="font-medium">Screenprinted Canvas Tote</span>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-md">
              <img 
                src="/images/barrett_tshirt_back.jpg" 
                alt="Oversized white streetwear graphic t-shirt back"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(07) APPAREL</span>
              <span className="font-medium">Relax & Flow Heavyweight Tee</span>
            </div>
          </div>

        </div>

        {/* WILDPOSTING FULL SPREAD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-md">
              <img 
                src="/images/barrett_poster_pasting.jpg" 
                alt="Pasting Barrett Sessions gig poster onto concrete column"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(08) GUERRILLA</span>
              <span className="font-medium">Street Pasteup Rollout</span>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-100 shadow-md">
              <img 
                src="/images/barrett_wildposting_wall.jpg" 
                alt="Urban wall plastered with colorful Barrett Sessions posters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-4 flex justify-between items-baseline border-b pb-2 border-current/15 text-xs sm:text-sm">
              <span className="font-mono uppercase tracking-widest opacity-60">(09) EXHIBITION</span>
              <span className="font-medium">Wildposting Plaster Wall</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM NAVIGATION */}
      <footer className="w-full px-4 sm:px-8 md:px-14 lg:px-20 mt-16 sm:mt-24 pt-12 border-t border-current/15 max-w-[1900px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest opacity-50 block mb-1">
              Case Study Finished
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal">
              Barrett Sessions
            </h3>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate && onNavigate('work')}
              className={`text-sm sm:text-base border-b pb-0.5 transition-opacity hover:opacity-60 cursor-pointer ${
                isDark ? 'border-white text-white' : 'border-black text-black'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => onNavigate && onNavigate('case-study-rappi')}
              className={`text-sm sm:text-base border-b pb-0.5 font-medium transition-opacity hover:opacity-60 cursor-pointer ${
                isDark ? 'border-white text-white' : 'border-black text-black'
              }`}
            >
              Next: Rappi →
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
