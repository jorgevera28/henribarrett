import React, { useState, useEffect } from 'react';
import { BarrettSessionsHeader } from './BarrettSessionsHeader';
import { BarrettSessionsReadingView } from './BarrettSessionsReadingView';
import { BarrettSessionsVisualView } from './BarrettSessionsVisualView';
import { CaseStudyFooter } from './CaseStudyFooter';
import { Eye, Menu, Sun, Moon } from 'lucide-react';
import { AppView } from '../../../App';

export interface BarrettSessionsCaseStudyProps {
  onNavigate: (view: AppView) => void;
}

export const BarrettSessionsCaseStudy: React.FC<BarrettSessionsCaseStudyProps> = ({ onNavigate }) => {
  const [activeViewMode, setActiveViewMode] = useState<'reading' | 'visual'>('reading');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeViewMode]);

  return (
    <div className={`w-full min-h-screen relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-[#0f0f10] text-white selection:bg-white selection:text-black' 
        : (activeViewMode === 'reading' ? 'bg-white text-black selection:bg-black selection:text-white' : 'bg-[#ECECEE] text-black selection:bg-black selection:text-white')
    }`}>
      
      {/* SECCIÓN 1: CARÁTULA PRINCIPAL (EN MODO VISUAL VIEW MATCH A SG_Barrett Sessions.png) */}
      {activeViewMode === 'visual' && (
        <BarrettSessionsHeader
          activeViewMode={activeViewMode}
          setActiveViewMode={setActiveViewMode}
          onNavigate={onNavigate}
          onSeeAllProjects={() => onNavigate('work')}
          theme={theme}
        />
      )}

      {/* FLOATING VIEW CONTROLS ASIDE (DERECHA - MATCH EXACTO A 2.png) */}
      <aside className="fixed top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white text-black border border-black/10 transition-all select-none">
        {/* BOTÓN SUPERIOR: READING VIEW (MENU ICON) */}
        <button
          onClick={() => setActiveViewMode('reading')}
          className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            activeViewMode === 'reading' 
              ? 'bg-black text-white shadow-sm' 
              : 'text-black hover:bg-black/5'
          }`}
          aria-label="Reading View"
          title="Reading View"
        >
          <Menu size={16} strokeWidth={2.2} />
        </button>

        {/* BOTÓN INFERIOR: VISUAL VIEW (EYE ICON) */}
        <button
          onClick={() => setActiveViewMode('visual')}
          className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
            activeViewMode === 'visual' 
              ? 'bg-black text-white shadow-sm' 
              : 'text-black hover:bg-black/5'
          }`}
          aria-label="Visual View"
          title="Visual View"
        >
          <Eye size={16} strokeWidth={2.2} />
        </button>

        {/* BOTÓN DE TEMA (DISCRETO AL FINAL) */}
        <div className="w-4 h-[1px] bg-black/10 my-0.5" />
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-1 rounded-full text-black/60 hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Toggle Theme"
          title="Toggle Dark/Light"
        >
          {theme === 'dark' ? <Sun size={13} strokeWidth={2} /> : <Moon size={13} strokeWidth={2} />}
        </button>
      </aside>

      {/* SECCIÓN 2: CONTENIDO SEGÚN MODO ACTIVO (READING VIEW O VISUAL VIEW) */}
      {activeViewMode === 'reading' ? (
        <BarrettSessionsReadingView theme={theme} onNavigate={onNavigate} />
      ) : (
        <BarrettSessionsVisualView theme={theme} onNavigate={onNavigate} />
      )}

      {/* SECCIÓN 3: FOOTER CALL TO ACTION Y TRANSICIÓN A SIGUIENTE PROYECTO */}
      <CaseStudyFooter 
        theme={theme}
        onWorkTogetherClick={() => onNavigate('work-with-us')} 
        onNavigate={onNavigate}
        currentProjectImage="/images/barrett_sessions_pedestal_sign.jpg"
        currentProjectImageAlt="Barrett Sessions Live Platform"
        marqueeWords={["PETCO", "CANNABIDOL"]}
        nextProjectTitle="Petco"
        nextProjectHeroImage="/images/petco_cannabidol.jpg"
        onNextProjectClick={() => onNavigate('work')}
      />
    </div>
  );
};
