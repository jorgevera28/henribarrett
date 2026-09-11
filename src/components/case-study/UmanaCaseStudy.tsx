import React, { useState, useEffect } from 'react';
import { UmanaHeader } from './UmanaHeader';
import { UmanaReadingView } from './UmanaReadingView';
import { UmanaVisualView } from './UmanaVisualView';
import { CaseStudyFooter } from './CaseStudyFooter';
import { Eye, Menu, Sun, Moon } from 'lucide-react';

export interface UmanaCaseStudyProps {
  onNavigate: (view: 'home' | 'about' | 'work' | 'services' | 'quicklys' | 'work-with-us') => void;
}

export const UmanaCaseStudy: React.FC<UmanaCaseStudyProps> = ({ onNavigate }) => {
  const [activeViewMode, setActiveViewMode] = useState<'reading' | 'visual'>('reading');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-full min-h-screen relative transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-black text-white selection:bg-white selection:text-black' 
        : 'bg-white text-black selection:bg-black selection:text-white'
    }`}>
      {/* SECCIÓN 1: HEADER DEL CASO DE ESTUDIO UMANA */}
      <UmanaHeader
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onNavigate={onNavigate}
        onSeeAllProjects={() => onNavigate('work')}
        theme={theme}
      />

      {/* FLOATING VIEW TOGGLE */}
      <div className={`fixed top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 z-50 flex flex-col gap-1 rounded-full p-1.5 shadow-2xl mix-blend-normal transition-colors duration-500 ${
        theme === 'dark' ? 'bg-white' : 'bg-black'
      }`}>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-2 rounded-full flex items-center justify-center transition-all bg-transparent ${
            theme === 'dark' ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-zinc-800'
          }`}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>
        
        <div className={`w-6 h-[1px] mx-auto my-1 ${theme === 'dark' ? 'bg-gray-200' : 'bg-zinc-800'}`} />

        <button
          onClick={() => setActiveViewMode('visual')}
          className={`p-2 rounded-full flex items-center justify-center transition-all ${
            activeViewMode === 'visual' 
              ? (theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black')
              : (theme === 'dark' ? 'bg-transparent text-black hover:bg-gray-100' : 'bg-transparent text-white hover:bg-zinc-800')
          }`}
          aria-label="Visual View"
        >
          <Eye size={18} strokeWidth={2} />
        </button>
        <button
          onClick={() => setActiveViewMode('reading')}
          className={`p-2 rounded-full flex items-center justify-center transition-all ${
            activeViewMode === 'reading' 
              ? (theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black')
              : (theme === 'dark' ? 'bg-transparent text-black hover:bg-gray-100' : 'bg-transparent text-white hover:bg-zinc-800')
          }`}
          aria-label="Reading View"
        >
          <Menu size={18} strokeWidth={2} />
        </button>
      </div>

      {/* SECCIÓN 2: BODY DEL CASO DE ESTUDIO */}
      {activeViewMode === 'reading' ? (
        <UmanaReadingView theme={theme} />
      ) : (
        <UmanaVisualView theme={theme} />
      )}

      {/* SECCIÓN 3: FOOTER CALL TO ACTION */}
      <CaseStudyFooter 
        onWorkTogetherClick={() => onNavigate('work-with-us')} 
        theme={theme}
      />
    </div>
  );
};
