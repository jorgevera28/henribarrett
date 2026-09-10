import React, { useState, useEffect } from 'react';
import { UmanaHeader } from './UmanaHeader';

export interface UmanaCaseStudyProps {
  onNavigate: (view: 'home' | 'about' | 'work' | 'services' | 'quicklys' | 'work-with-us') => void;
}

export const UmanaCaseStudy: React.FC<UmanaCaseStudyProps> = ({ onNavigate }) => {
  const [activeViewMode, setActiveViewMode] = useState<'reading' | 'visual'>('reading');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* SECCIÓN 1: HEADER DEL CASO DE ESTUDIO UMANA */}
      <UmanaHeader
        activeViewMode={activeViewMode}
        setActiveViewMode={setActiveViewMode}
        onNavigate={onNavigate}
        onSeeAllProjects={() => onNavigate('work')}
      />

      {/* ÁREA PREPARADA PARA LAS PRÓXIMAS SECCIONES (BODY Y FOOTER) */}
      <section className="w-full bg-[#0d0d0d] py-20 px-6 sm:px-12 flex flex-col items-center justify-center border-t border-white/10 text-center">
        <div className="max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
            Case Study • UMANA Template
          </span>
          <p className="text-white/70 text-sm md:text-base font-light">
            Sección de cabecera implementada con éxito. Listo para incorporar la siguiente sección de diagramación (fotos, textos, videos y body) en cuanto la compartas.
          </p>
        </div>
      </section>
    </div>
  );
};
