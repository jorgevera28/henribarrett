import React, { useState, useEffect } from 'react';
import { ChichaSuMareHeader } from './ChichaSuMareHeader';
import { ChichaSuMareReadingView } from './ChichaSuMareReadingView';
import { ChichaSuMareVisualView } from './ChichaSuMareVisualView';
import { CaseStudyFooter } from './CaseStudyFooter';
import { Eye, Menu, Sun, Moon } from 'lucide-react';
import { MainNav } from '../MainNav';
import { AppView } from '../../types';

export interface ChichaSuMareCaseStudyProps {
  onNavigate: (view: AppView) => void;
}

export const ChichaSuMareCaseStudy: React.FC<ChichaSuMareCaseStudyProps> = ({ onNavigate }) => {
  const [activeViewMode, setActiveViewMode] = useState<'reading' | 'visual'>('visual');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeViewMode]);

  return (
    <div className={`w-full min-h-screen relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-[#0f0f10] text-white selection:bg-white selection:text-black' 
        : 'bg-white text-black selection:bg-black selection:text-white'
    }`}>
      
      {/* NAVEGACIÓN GLOBAL (REPLICA EXACTA DEL MENÚ CON TEXTO BLANCO SOBRE LA PORTADA) */}
      <MainNav 
        currentView="case-study-chicha-su-mare" 
        setCurrentView={onNavigate} 
        isHome={true} 
      />

      {/* SECCIÓN 1: CARÁTULA PRINCIPAL DE CHICHA SU MARE (HEADER REPLICADO SEGÚN IMAGEN ADJUNTA) */}
      <ChichaSuMareHeader
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onNavigate={onNavigate}
        onSeeAllProjects={() => onNavigate('work')}
        theme={theme}
      />

      {/* FLOATING VIEW CONTROLS ASIDE (READING VIEW / VISUAL VIEW / TEMA) */}
      <aside className="fixed top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] bg-white text-black border border-black/5 transition-all">
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

      {/* SECCIÓN 2: CONTENIDO SEGÚN MODO ACTIVO (VISUAL VIEW O READING VIEW) */}
      {activeViewMode === 'reading' ? (
        <ChichaSuMareReadingView theme={theme} onNavigate={onNavigate} />
      ) : (
        <ChichaSuMareVisualView theme={theme} onNavigate={onNavigate} />
      )}

      {/* SECCIÓN 3: FOOTER CALL TO ACTION Y TRANSICIÓN AL SIGUIENTE PROYECTO (YUMMY) */}
      <CaseStudyFooter 
        theme={theme}
        onWorkTogetherClick={() => onNavigate('work-with-us')} 
        onNavigate={onNavigate}
        currentProjectImage="/assets/aistudio/SG_ChicaSumare_header_b9cd59aa.png"
        currentProjectImageAlt="Chicha Su Mare"
        marqueeWords={["YUMMY"]}
        nextProjectTitle="Yummy"
        nextProjectHeroImage="https://henribarrett.com/assets/site/images/showcases/yummy/henribarrett_yummy_header.webp"
        onNextProjectClick={() => {
          onNavigate('case-study-yummy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
