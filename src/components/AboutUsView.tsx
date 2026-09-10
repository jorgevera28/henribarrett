import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Download, ArrowRight, Instagram, ArrowDown, Check } from 'lucide-react';

interface AboutUsViewProps {
  onNavigate: (view: 'home' | 'about' | 'work' | 'services' | 'quicklys' | 'work-with-us') => void;
  DynamicIsotype: React.FC<{ className?: string; style?: React.CSSProperties }>;
  DynamicLogotype: React.FC<{ className?: string; style?: React.CSSProperties }>;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'giancarlo',
    name: 'Giancarlo Morales',
    role: 'Ceo & Founder',
    image: '/images/about/team_giancarlo_1789053527727.jpg'
  },
  {
    id: 'oswaldo',
    name: 'Oswaldo Pescador',
    role: 'Lead Designer',
    image: '/images/about/team_oswaldo_1789053547301.jpg'
  },
  {
    id: 'andrea',
    name: 'Andrea Lozada',
    role: 'Manager Account',
    image: '/images/about/team_andrea_1789053561670.jpg'
  },
  {
    id: 'luis',
    name: 'Luis Tateishi',
    role: 'Creative Director',
    image: '/images/about/team_luis_1789053578220.jpg'
  },
  {
    id: 'sofia',
    name: 'Sofia Alarco',
    role: 'Brand Strategist',
    image: '/images/about/team_andrea_1789053561670.jpg'
  },
  {
    id: 'mateo',
    name: 'Mateo Rivera',
    role: 'Motion Art Director',
    image: '/images/about/team_oswaldo_1789053547301.jpg'
  }
];

interface PowerHubSlide {
  id: string;
  title: string;
  category: string;
  image1: string;
  image2: string;
  caption1: string;
  caption2: string;
}

const POWER_HUB_SLIDES: PowerHubSlide[] = [
  {
    id: 'slide-1',
    title: 'THE CREATIVE LAB',
    category: 'BRANDING',
    image1: '/images/about/hb_power_hub_space_1789053613826.jpg',
    image2: '/images/about/hb_discipline_space_1789053596795.jpg',
    caption1: 'Strategic Ideation & Architecture Hub',
    caption2: 'Materiality & Prototyping Workshop'
  },
  {
    id: 'slide-2',
    title: 'THE SESSIONS HUB',
    category: 'CULTURE',
    image1: '/images/about/hb_discipline_space_1789053596795.jpg',
    image2: '/images/about/hb_power_hub_space_1789053613826.jpg',
    caption1: 'Henri Barrett Sound & Light Pavilion',
    caption2: 'Kinetic Motion Design Station'
  },
  {
    id: 'slide-3',
    title: 'COLLABORATIVE MATRIX',
    category: 'STRATEGY',
    image1: '/images/article_brand_ai_1788899307839.jpg',
    image2: '/images/heineken_fest_box_1789000030629.jpg',
    caption1: 'Cross-functional Strategy War Room',
    caption2: 'Editorial & Packaging Showcase'
  },
  {
    id: 'slide-4',
    title: 'PRODUCTION ENGINE',
    category: 'DIGITAL',
    image1: '/images/pisco_tacama_table_1789000042775.jpg',
    image2: '/images/petco_cannabidol_box_1789000066953.jpg',
    caption1: 'Visual Storytelling & Direction',
    caption2: 'Physical Craftsmanship Benchmark'
  },
  {
    id: 'slide-5',
    title: 'GLOBAL REACH',
    category: 'INNOVATION',
    image1: '/images/reel_culture_clash_1788900687511.jpg',
    image2: '/images/reel_nike_running_1788900698753.jpg',
    caption1: 'Global Campaign Execution',
    caption2: 'Subcultural Resonance Archive'
  }
];

export const AboutUsView: React.FC<AboutUsViewProps> = ({
  onNavigate,
  DynamicIsotype,
  DynamicLogotype
}) => {
  // Video state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<number | null>(null);

  // Team carousel index
  const [teamStartIndex, setTeamStartIndex] = useState(0);
  const teamContainerRef = useRef<HTMLDivElement>(null);

  // Power Hub slider
  const [powerHubIndex, setPowerHubIndex] = useState(0);

  // Download state
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Toggle Video
  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlayingVideo) {
      videoRef.current.pause();
      setIsPlayingVideo(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlayingVideo(true);
      }).catch(err => {
        console.warn('Video playback error:', err);
      });
    }
  };

  // Toggle Play Audio (Generates an ambient studio chime chord loop)
  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
        oscillatorIntervalRef.current = null;
      }
      setIsPlayingAudio(false);
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlayingAudio(true);

      const playChord = () => {
        if (!ctx || ctx.state === 'closed') return;
        const notes = [220, 277.18, 329.63, 440]; // A3, C#4, E4, A4 warm chord
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.8 + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + idx * 0.15);
          osc.stop(ctx.currentTime + 4.0);
        });
      };

      playChord();
      oscillatorIntervalRef.current = window.setInterval(playChord, 4200);
    } catch (e) {
      console.warn('Audio API error:', e);
      setIsPlayingAudio(false);
    }
  };

  useEffect(() => {
    return () => {
      if (oscillatorIntervalRef.current) {
        clearInterval(oscillatorIntervalRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Team Navigation
  const handleNextTeam = () => {
    setTeamStartIndex((prev) => (prev + 1) % (TEAM_MEMBERS.length - 3));
    if (teamContainerRef.current) {
      teamContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Power Hub Navigation
  const handleNextPowerHub = () => {
    setPowerHubIndex((prev) => (prev + 1) % POWER_HUB_SLIDES.length);
  };

  // Download Random Igniters
  const handleDownloadIgniters = () => {
    setIsDownloaded(true);
    const content = `HENRI BARRETT — RANDOM IGNITERS PACK (2026)
==================================================
"Curiosity is sexy. Always watching."

Contents:
1. Barrett Philosophy & Method Whitepaper
2. Kinetic Typographic Wallpapers (4K Display)
3. Creative Chaos Sparks & Prompts
4. Henri Barrett Audio Identity Theme

Discover more at: https://henribarrett.com
Lima, Perú · Global Studio
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Henri-Barrett-Random-Igniters.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 3500);
  };

  const currentPowerSlide = POWER_HUB_SLIDES[powerHubIndex];

  return (
    <div className="w-full bg-[#FFFFFF] text-black font-sans selection:bg-black selection:text-white relative">
      
      {/* 1. TOP OVERSIZED BLEEDING TITLE BANNER */}
      <div className="w-full overflow-hidden select-none border-b border-gray-100/80 py-3 sm:py-4 bg-white">
        <div 
          className="flex w-max whitespace-nowrap animate-marquee-right will-change-transform"
          style={{ animationDuration: '30s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div key={`essence-track-${trackIdx}`} className="flex items-center shrink-0">
              {[0, 1, 2, 3].map((itemIdx) => (
                <div key={`essence-item-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0">
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] uppercase tracking-tight leading-none text-black">
                    MEET OUR ESSENCE
                  </span>
                  <div className="inline-flex items-center justify-center mx-6 sm:mx-10 md:mx-14 w-[6.5vw] h-[6.5vw] min-w-[40px] min-h-[40px] max-w-[90px] max-h-[90px] shrink-0 animate-clock-tick origin-center">
                    <span className="text-[7vw] sm:text-[6.2vw] md:text-[5.2vw] font-light font-[300] leading-none select-none text-black inline-flex items-center justify-center transform scale-110">
                      ✳
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN HERO PHILOSOPHY STATEMENT */}
      <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 pt-12 sm:pt-16 md:pt-20 pb-16">
        <div className="relative">
          {/* Main Statement Text with High Contrast Two-Tone Styling, Weight 300 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5vw] font-light font-[300] leading-[1.15] tracking-tight max-w-6xl">
            <span className="text-black font-light font-[300]">
              An integrated, interdisciplinary approach lies at the heart of our philosophy.
            </span>
            <span className="text-gray-400 font-light font-[300]">
              {' '}Recognizing that the most compelling brands are built from their core offerings, we champion a foundation that fosters a distinct identity and potent marketing.
            </span>
          </h1>

          {/* Controls Row: Left "Learn more", Right "Play audio" & "(SCROLL)" */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-12 md:mt-16 pt-4">
            <div>
              <a 
                href="#manifesto" 
                className="inline-flex items-center gap-2 text-base sm:text-lg font-light font-[300] text-black border-b border-black pb-0.5 hover:opacity-60 transition-all group"
              >
                <span>Learn more about our company</span>
                <span className="text-base group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>

            <div className="flex items-center gap-6 self-end sm:self-auto">
              {/* Floating circular Play Audio button */}
              <button
                onClick={handleToggleAudio}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-200/90 shadow-sm hover:shadow-md flex flex-col items-center justify-center text-[10px] md:text-xs font-light font-[300] leading-tight text-center text-black hover:scale-105 transition-all cursor-pointer group select-none"
                title="Reproducir audio de ambiente"
              >
                <span className="group-hover:opacity-80 transition-opacity">
                  {isPlayingAudio ? 'Pause' : 'Play'}
                </span>
                <span className="text-gray-500 font-light font-[300] group-hover:text-black transition-colors">
                  audio
                </span>
                {isPlayingAudio && (
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-1 animate-ping" />
                )}
              </button>

              {/* (SCROLL) text */}
              <span className="text-xs md:text-sm tracking-[0.25em] font-mono font-light font-[300] text-gray-500 uppercase select-none">
                (SCROLL)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LARGE HERO VIDEO / SHOWREEL CONTAINER */}
      <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 mb-24 md:mb-32">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#E2E2E2] shadow-xs group">
          <video
            ref={videoRef}
            src="/videos/spaces_preview.mp4"
            poster="/videos/spaces_preview_thumb.jpg"
            loop
            muted={false}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Overlay if paused */}
          {!isPlayingVideo && (
            <div className="absolute inset-0 bg-black/10 transition-opacity" />
          )}

          {/* Centered Circular Play Video Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={handleToggleVideo}
              className="pointer-events-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-xs sm:text-sm md:text-base font-light font-[300] leading-tight text-black hover:scale-105 active:scale-95 transition-all cursor-pointer select-none group"
              title={isPlayingVideo ? "Pausar video" : "Reproducir video"}
            >
              <span>{isPlayingVideo ? 'Pause' : 'Play'}</span>
              <span className="text-gray-500 font-light font-[300] text-[11px] sm:text-xs">video</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. KINETIC MARQUEE ROW 1 (ALWAYS WATCHING / CURIOSITY IS SEXY) */}
      <div className="w-full overflow-hidden select-none border-y border-gray-100 py-3 sm:py-5 bg-white">
        {/* Line 1: ALWAYS WATCHING (Left to Right) */}
        <div 
          className="flex w-max whitespace-nowrap animate-marquee-right will-change-transform"
          style={{ animationDuration: '32s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div key={`watching-track-1-${trackIdx}`} className="flex items-center shrink-0">
              {[0, 1, 2, 3].map((itemIdx) => (
                <div key={`watching-item-1-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0 pr-8 sm:pr-14">
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    ALWAYS WATCHING
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Line 2: CURIOSITY IS SEXY ✳ ALWAYS WATCHING (Right to Left) */}
        <div 
          className="flex w-max whitespace-nowrap animate-marquee-left will-change-transform mt-2 sm:mt-3"
          style={{ animationDuration: '34s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div key={`curiosity-track-1-${trackIdx}`} className="flex items-center shrink-0">
              {[0, 1, 2].map((itemIdx) => (
                <div key={`curiosity-item-1-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0">
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    CURIOSITY IS SEXY
                  </span>
                  <div className="inline-flex items-center justify-center mx-6 sm:mx-10 w-[5vw] h-[5vw] min-w-[32px] min-h-[32px] max-w-[70px] max-h-[70px] shrink-0 animate-clock-tick origin-center">
                    <span className="text-[5.5vw] sm:text-[4.8vw] md:text-[4vw] font-light font-[300] leading-none select-none text-black inline-flex items-center justify-center transform scale-110">
                      ✳
                    </span>
                  </div>
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    ALWAYS WATCHING
                  </span>
                  <div className="inline-flex items-center justify-center mx-6 sm:mx-10 w-[5vw] h-[5vw] min-w-[32px] min-h-[32px] max-w-[70px] max-h-[70px] shrink-0 animate-clock-tick origin-center">
                    <span className="text-[5.5vw] sm:text-[4.8vw] md:text-[4vw] font-light font-[300] leading-none select-none text-black inline-flex items-center justify-center transform scale-110">
                      ✳
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 5. MANIFESTO / "Beyond mere external perceptions" */}
      <section id="manifesto" className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-24 sm:py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Eyebrow Label */}
          <div className="lg:col-span-4">
            <span className="text-xl font-light font-[300] text-black block tracking-tight">
              Mutual, Trust Manifesto
            </span>
          </div>

          {/* Right Column: Statement, Body Copy & Link */}
          <div className="lg:col-span-8 flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5vw] font-light font-[300] tracking-tight leading-[1.15] text-black mb-10 md:mb-14">
              Beyond mere external perceptions, it's a matter of orchestrating an ecosystem where product, brand, and communication harmonize effortlessly.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-xl md:text-[1.3rem] text-gray-900 leading-[1.5] font-light font-[300] tracking-[0.04em] mb-12">
              <p>
                In a world increasingly driven by technology, we anchor ourselves in genuine human connection. Here, it's not just about the job, it's about the bond we share as a team of dedicated professionals.
              </p>
              <p>
                We a creative agency where strategy, design, and creativity converge. Over the years, we've honed our belief that a standout brand emerges when these three elements seamlessly intertwine.
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  onNavigate('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xl font-light font-[300] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity cursor-pointer group"
              >
                <span>Learn more about our projects</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "MEET THE MARKERS" (Team Section) */}
      <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-light font-[300] tracking-[-0.03em] uppercase leading-[0.88] text-black mb-6">
              MEET THE<br />MARKERS
            </h2>
            <p className="text-xl md:text-[1.3rem] text-gray-700 leading-[1.5] font-light font-[300] tracking-[0.04em] max-w-2xl">
              Discover the heartbeat of our studio. Together, we challenge conventions, celebrate diversity, and drive innovation. Unfold the layers of our team and witness the collaboration that defines us.
            </p>
          </div>

          {/* Right Icon: DynamicIsotype + Registered trademark */}
          <div className="relative self-start md:self-auto shrink-0 mt-2 md:mt-0">
            <DynamicIsotype className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-black" />
            <span className="absolute -top-1 -right-3 text-sm md:text-base font-bold">®</span>
          </div>
        </div>

        {/* Team Cards Grid / Horizontal Slider */}
        <div 
          ref={teamContainerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-4"
        >
          {TEAM_MEMBERS.slice(teamStartIndex, teamStartIndex + 4).map((member) => (
            <div key={member.id} className="flex flex-col group cursor-pointer">
              {/* Portrait container with subtle background tone */}
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#E2E2E2] mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg sm:text-xl font-light font-[300] text-black tracking-tight leading-snug">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 font-light font-[300]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrow Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNextTeam}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group select-none"
            aria-label="Siguiente miembro del equipo"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* 7. "Beyond a single discipline" (Split 50/50 Layout) */}
      <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-24 sm:py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-light font-[300] tracking-[-0.03em] uppercase leading-[0.88] text-black mb-8">
              Beyond a single<br />discipline
            </h2>

            <div className="flex flex-col gap-6 text-xl md:text-[1.3rem] text-gray-900 leading-[1.5] font-light font-[300] tracking-[0.04em] mb-10">
              <p>
                At the heart of our process lies an understanding that the world doesn't fit into neat boxes, and neither do brands. We're not bound by traditional lanes of design, strategy, or creativity.
              </p>
              <p>
                Instead, we fuse them, creating an amalgam that resonates with the diverse, dynamic nature of today's audiences.
              </p>
              <p>
                Our multidisciplinary approach ensures that every project is viewed from multiple angles, offering holistic solutions that stand out and stay relevant.
              </p>
            </div>

            <div>
              <a 
                href="#manifesto"
                className="inline-flex items-center gap-2 text-xl font-light font-[300] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
              >
                <span>Learn more about our company</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tall Editorial Space Visual */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#E2E2E2] shadow-sm">
              <img
                src="/images/about/hb_discipline_space_1789053596795.jpg"
                alt="Henri Barrett Studio & Discipline Architecture"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. "MEETING OUR POWER HUB" (Carousel & Gallery Section) */}
      <section className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-16 md:py-24">
        {/* Section Eyebrow Row */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
          <span className="text-xs sm:text-sm font-mono font-light font-[300] tracking-widest text-black uppercase">
            (METTING OUR POWER HUB)
          </span>
          <div className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-mono font-light font-[300] tracking-widest text-gray-400 uppercase">
              {currentPowerSlide.category}
            </span>
            <button
              onClick={handleNextPowerHub}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group"
              aria-label="Siguiente diapositiva de Power Hub"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 2 Large Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[16px] sm:rounded-[24px] overflow-hidden bg-[#E2E2E2] shadow-sm group">
            <img
              src={currentPowerSlide.image1}
              alt={currentPowerSlide.caption1}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded text-xs font-mono font-light font-[300]">
              {currentPowerSlide.caption1}
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[16px] sm:rounded-[24px] overflow-hidden bg-[#E2E2E2] shadow-sm group">
            <img
              src={currentPowerSlide.image2}
              alt={currentPowerSlide.caption2}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded text-xs font-mono font-light font-[300]">
              {currentPowerSlide.caption2}
            </div>
          </div>
        </div>

        {/* Pagination Counter: 1 — 5 */}
        <div className="flex items-center gap-2 mt-8 text-sm sm:text-base font-mono font-light font-[300] text-black">
          <span>{powerHubIndex + 1}</span>
          <span className="text-gray-400">—</span>
          <span className="text-gray-400">{POWER_HUB_SLIDES.length}</span>
        </div>
      </section>

      {/* 9. KINETIC MARQUEE ROW 2 */}
      <div className="w-full overflow-hidden select-none border-y border-gray-100 py-3 sm:py-5 bg-white">
        {/* Line 1: ALWAYS WATCHING (Left to Right) */}
        <div 
          className="flex w-max whitespace-nowrap animate-marquee-right will-change-transform"
          style={{ animationDuration: '32s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div key={`watching-track-2-${trackIdx}`} className="flex items-center shrink-0">
              {[0, 1, 2, 3].map((itemIdx) => (
                <div key={`watching-item-2-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0 pr-8 sm:pr-14">
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    ALWAYS WATCHING
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Line 2: CURIOSITY IS SEXY ✳ ALWAYS WATCHING (Right to Left) */}
        <div 
          className="flex w-max whitespace-nowrap animate-marquee-left will-change-transform mt-2 sm:mt-3"
          style={{ animationDuration: '34s' }}
        >
          {[0, 1].map((trackIdx) => (
            <div key={`curiosity-track-2-${trackIdx}`} className="flex items-center shrink-0">
              {[0, 1, 2].map((itemIdx) => (
                <div key={`curiosity-item-2-${trackIdx}-${itemIdx}`} className="flex items-center shrink-0">
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    CURIOSITY IS SEXY
                  </span>
                  <div className="inline-flex items-center justify-center mx-6 sm:mx-10 w-[5vw] h-[5vw] min-w-[32px] min-h-[32px] max-w-[70px] max-h-[70px] shrink-0 animate-clock-tick origin-center">
                    <span className="text-[5.5vw] sm:text-[4.8vw] md:text-[4vw] font-light font-[300] leading-none select-none text-black inline-flex items-center justify-center transform scale-110">
                      ✳
                    </span>
                  </div>
                  <span className="text-[12vw] sm:text-[11vw] md:text-[9.5vw] font-light font-[300] tracking-tight uppercase leading-none text-black">
                    ALWAYS WATCHING
                  </span>
                  <div className="inline-flex items-center justify-center mx-6 sm:mx-10 w-[5vw] h-[5vw] min-w-[32px] min-h-[32px] max-w-[70px] max-h-[70px] shrink-0 animate-clock-tick origin-center">
                    <span className="text-[5.5vw] sm:text-[4.8vw] md:text-[4vw] font-light font-[300] leading-none select-none text-black inline-flex items-center justify-center transform scale-110">
                      ✳
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 10. "RANDOM IGNITERS" (Interactive Black Section with Pop Art) */}
      <section className="w-full bg-black text-white pt-24 sm:pt-32 md:pt-40 pb-0 px-6 sm:px-10 md:px-16 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center z-10">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] font-light font-[300] tracking-[-0.03em] uppercase leading-[0.88] text-white text-center mb-6 sm:mb-8">
            RANDOM<br />IGNITERS
          </h2>

          <p className="text-xl md:text-[1.3rem] text-white/80 font-light font-[300] max-w-2xl mx-auto text-center mb-10 leading-[1.5]">
            Take a break, download and explore this tad. Who knows where our bits of randomness will lead you?
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownloadIgniters}
            className="inline-flex items-center gap-3 bg-white text-black font-light font-[300] uppercase tracking-wider text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer mb-12 sm:mb-16 select-none"
          >
            <span>{isDownloaded ? 'DOWNLOADED!' : 'DOWNLOAD'}</span>
            {isDownloaded ? (
              <Check className="w-5 h-5 stroke-[2.5] text-green-600" />
            ) : (
              <Download className="w-5 h-5 stroke-[2.2]" />
            )}
          </button>
        </div>

        {/* Pop Art Illustration: Open mouth with candies, frog, dynamic ribbons */}
        <div className="w-full max-w-4xl mx-auto relative z-0 flex justify-center mt-[-20px] sm:mt-[-40px]">
          <img
            src="/images/about/random_igniters_art_1789053502298.jpg"
            alt="Random Igniters Pop Artwork"
            className="w-full max-w-3xl h-auto object-contain rounded-t-3xl -mb-1"
          />
        </div>
      </section>

      {/* 11. FOOTER (HENRI BARRETT PURE BLACK FOOTER) */}
      <footer
        className="relative w-full bg-black text-white z-20 pt-20 pb-12 px-6 sm:px-10 md:px-16 border-t border-gray-900"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="w-full max-w-[1360px] mx-auto">
          {/* Top Brand Bar */}
          <div className="flex justify-between items-start w-full mb-16 pb-12 border-b border-gray-900">
            <DynamicIsotype className="w-14 h-14 md:w-20 md:h-20 text-white" />
            <span className="text-2xl sm:text-3xl md:text-5xl font-light font-[300] uppercase tracking-tighter text-right leading-none">
              HENRI BARRETT
            </span>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-20">
            {/* Agency */}
            <div className="flex flex-col gap-5">
              <h4 className="text-base sm:text-lg font-light font-[300] uppercase tracking-widest text-gray-500">Agency</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer transition-colors">Home</li>
                <li onClick={() => onNavigate('work')} className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
                <li onClick={() => onNavigate('services')} className="hover:text-white cursor-pointer transition-colors">Services</li>
                <li onClick={() => onNavigate('about')} className="text-white font-light font-[300] cursor-pointer transition-colors">About</li>
                <li onClick={() => onNavigate('about')} className="hover:text-white cursor-pointer transition-colors">Our Method®</li>
              </ul>
            </div>

            {/* Discover */}
            <div className="flex flex-col gap-5">
              <h4 className="text-base sm:text-lg font-light font-[300] uppercase tracking-widest text-gray-500">Discover</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Henri Barrett Hub®</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Book</li>
                <li className="hover:text-white cursor-pointer transition-colors">Speaking</li>
                <li className="hover:text-white cursor-pointer transition-colors">Shop</li>
                <li className="hover:text-white cursor-pointer transition-colors">Events</li>
              </ul>
            </div>

            {/* Learn */}
            <div className="flex flex-col gap-5">
              <h4 className="text-base sm:text-lg font-light font-[300] uppercase tracking-widest text-gray-500">Learn</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li onClick={() => onNavigate('quicklys')} className="hover:text-white cursor-pointer transition-colors">Articles</li>
                <li className="hover:text-white cursor-pointer transition-colors">Press & Media</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
                <li className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
              <h4 className="text-base sm:text-lg font-light font-[300] leading-snug">
                Get valuable strategy, culture, and brand insights straight to your inbox.
              </h4>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email here" 
                  className="bg-transparent border-b border-gray-700 pb-2 text-sm focus:outline-none focus:border-white transition-colors w-full text-white placeholder-gray-500" 
                />
                <p className="text-[10px] text-gray-500 leading-tight">
                  By signing up to receive emails from Motta, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-xs text-gray-500">
            <span>Copyright © 2024/25 Henri Barrett® | Lima | Perú</span>
            <div className="flex items-center gap-8 mt-6 md:mt-0">
              <span className="font-bold text-white text-xs cursor-pointer hover:opacity-75">Bē</span>
              <Instagram className="w-4 h-4 text-white cursor-pointer hover:opacity-75" />
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="flex items-center gap-2 text-white hover:opacity-75 cursor-pointer text-xs"
              >
                Back top top <ArrowDown className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
