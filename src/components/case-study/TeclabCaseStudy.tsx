import React, { useState, useEffect } from 'react';
import { TeclabHeader } from './TeclabHeader';
import { TeclabVisualView } from './TeclabVisualView';
import { TeclabReadingView } from './TeclabReadingView';
import { CaseStudyFooter } from './CaseStudyFooter';
import { Eye, Menu, Sun, Moon } from 'lucide-react';
import { MainNav } from '../MainNav';
import { AppView } from '../../types';

export interface TeclabCaseStudyProps {
  onNavigate: (view: AppView) => void;
}

export const TeclabCaseStudy: React.FC<TeclabCaseStudyProps> = ({ onNavigate }) => {
  const [activeViewMode, setActiveViewMode] = useState<'visual' | 'reading'>('reading');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeViewMode]);

  return (
    <div className={`w-full min-h-screen relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-[#000000] text-white selection:bg-[#BCF125] selection:text-black' 
        : (activeViewMode === 'reading' ? 'bg-white text-black selection:bg-black selection:text-white' : 'bg-[#f4f4f5] text-black selection:bg-black selection:text-white')
    }`}>
      
      {/* NAVEGACIÓN GLOBAL (REPLICA EXACTA DEL MENÚ DEL HOME CON TEXTO BLANCO SOBRE LA PORTADA) */}
      <MainNav 
        currentView="case-study-teclab" 
        setCurrentView={onNavigate} 
        isHome={true} 
        textColor="text-white"
      />

      {/* SECCIÓN 1: ENCABEZADO PRINCIPAL DE TECLAB (IMAGEN A PANTALLA COMPLETA, MARQUEE, TEXTOS Y BOTONES SEGÚN SG_Teclab.png) */}
      <TeclabHeader
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onNavigate={onNavigate}
        onSeeAllProjects={() => onNavigate('work')}
        theme={theme}
      />

      {/* FLOATING VIEW CONTROLS ASIDE (EYE ICON TOP, MENU ICON BOTTOM, THEME TOGGLE) */}
      <aside className="fixed top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] bg-white text-black border border-black/5 transition-all select-none">
        {/* BOTÓN SUPERIOR: VISUAL VIEW (EYE ICON) */}
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

        {/* BOTÓN INFERIOR: READING VIEW (MENU ICON) */}
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

      {/* SECCIÓN 2: CONTENIDO SEGÚN MODO ACTIVO (VISUAL VIEW O READING VIEW) */}
      {activeViewMode === 'visual' ? (
        <TeclabVisualView theme={theme} onNavigate={onNavigate} />
      ) : (
        <TeclabReadingView theme={theme} onNavigate={onNavigate} />
      )}

      {/* SECCIÓN 3: FOOTER CALL TO ACTION Y TRANSICIÓN AL SIGUIENTE PROYECTO */}
      <CaseStudyFooter 
        theme={theme}
        onWorkTogetherClick={() => onNavigate('work-with-us')} 
        onNavigate={onNavigate}
        currentProjectImage="/images/teclab_hero.jpg"
        currentProjectImageAlt="Teclab Construction Innovation"
        marqueeWords={["HEINEKEN", "PETCO", "RAPPI"]}
        nextProjectTitle="Heineken Fest"
        nextProjectHeroImage="/images/heineken_fest_hero.jpg"
        onNextProjectClick={() => {
          onNavigate('case-study-heineken-fest');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
