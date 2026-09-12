import React, { useState, useEffect } from 'react';
import { RappiHeader } from './RappiHeader';
import { RappiReadingView } from './RappiReadingView';
import { RappiVisualView } from './RappiVisualView';
import { CaseStudyFooter } from './CaseStudyFooter';
import { Eye, Menu, Sun, Moon } from 'lucide-react';

export interface RappiCaseStudyProps {
  onNavigate: (view: 'home' | 'about' | 'work' | 'services' | 'quicklys' | 'work-with-us') => void;
}

export const RappiCaseStudy: React.FC<RappiCaseStudyProps> = ({ onNavigate }) => {
  // El usuario solicita que coincida con la imagen enviada (Visual view activa por defecto y tema claro)
  const [activeViewMode, setActiveViewMode] = useState<'reading' | 'visual'>('visual');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full min-h-screen relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-black text-white selection:bg-[#FF553E] selection:text-white' 
        : 'bg-white text-black selection:bg-[#FF553E] selection:text-white'
    }`}>
      {/* SECCIÓN 1: MAIN HEADER DEL CASO DE ESTUDIO RAPPI */}
      <RappiHeader
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onNavigate={onNavigate}
        onSeeAllProjects={() => onNavigate('work')}
        theme={theme}
      />

      {/* BOTÓN EN EL LATERAL DERECHO PARA CONTROLAR Y VER LAS VISTAS (MATCH EXACTO A SG_showcase_bodyr_reading_view.png) */}
      <aside className="fixed top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] bg-white text-black border border-black/5 transition-all">
        {/* BOTÓN SUPERIOR: READING VIEW (MENU ICON) */}
        <button
          onClick={() => setActiveViewMode('reading')}
          className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            activeViewMode === 'reading' 
              ? 'bg-black text-white shadow-sm' 
              : 'text-black hover:bg-black/5'
          }`}
          aria-label="Reading View"
          title="Reading View"
        >
          <Menu size={18} strokeWidth={2.2} />
        </button>

        {/* BOTÓN INFERIOR: VISUAL VIEW (EYE ICON) */}
        <button
          onClick={() => setActiveViewMode('visual')}
          className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            activeViewMode === 'visual' 
              ? 'bg-black text-white shadow-sm' 
              : 'text-black hover:bg-black/5'
          }`}
          aria-label="Visual View"
          title="Visual View"
        >
          <Eye size={18} strokeWidth={2.2} />
        </button>

        {/* BOTÓN DE TEMA (DISCRETO AL FINAL) */}
        <div className="w-5 h-[1px] bg-black/10 my-0.5" />
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-1.5 rounded-full text-black/60 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
          title="Toggle Dark/Light"
        >
          {theme === 'dark' ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
        </button>
      </aside>

      {/* SECCIÓN 2: CUERPO DEL CASO DE ESTUDIO SEGÚN EL MODO ACTIVO */}
      {activeViewMode === 'reading' ? (
        <RappiReadingView theme={theme} onNavigate={onNavigate} />
      ) : (
        <RappiVisualView theme={theme} onNavigate={onNavigate} />
      )}

      {/* SECCIÓN 3: FOOTER CALL TO ACTION Y TRANSICIÓN A BARRETT SESSIONS */}
      <CaseStudyFooter 
        theme={theme}
        onWorkTogetherClick={() => onNavigate('work-with-us')} 
        onNavigate={onNavigate}
        currentProjectImage="/images/rappi_outro_routine.jpg"
        currentProjectImageAlt="The Secret Routine Turbo - Fresh + Rappi"
        marqueeWords={["BARRETT", "SESSIONS"]}
        nextProjectTitle="Barrett Sessions"
        nextProjectHeroImage="/images/barrett_sessions_hero.jpg"
        onNextProjectClick={() => onNavigate('work')}
      />
    </div>
  );
};
