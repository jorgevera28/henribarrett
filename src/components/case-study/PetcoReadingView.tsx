import React from 'react';
import { AppView } from '../../types';
import { PetcoProjectImages } from './PetcoProjectImages';

interface PetcoReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const PetcoReadingView: React.FC<PetcoReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full transition-colors duration-500 ${
      isDark ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-24`}>
      
      {/* 1. BLOQUE DE PROJECT OVERVIEW (01) - REPLICA EXACTA DE SG_showcase_bodyr_reading_view_petco.png */}
      <section className="w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-24 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 md:gap-14 lg:gap-20">
          
          {/* Columna Izquierda: (01) Project Overview */}
          <div className={`text-sm sm:text-[0.95rem] font-normal leading-[1.35] ${
            isDark ? 'text-white/85' : 'text-black/90'
          } select-none`}>
            <span>(01)</span>
            <div className="mt-8 sm:mt-10">
              Project<br />
              Overview
            </div>
          </div>
          
          {/* Columna Derecha: Título, Narrativa Editorial y Tabla de Detalles */}
          <div className="flex flex-col">
            
            {/* Titular Principal */}
            <h2 className={`text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] font-[400] md:font-[350] tracking-[-0.03em] leading-[1.07] ${
              isDark ? 'text-white' : 'text-black'
            } max-w-[1250px]`}>
              Natural nutrition for your<br className="hidden sm:inline" /> pets' Well-being
            </h2>
            
            {/* Párrafos Editoriales */}
            <div className={`flex flex-col gap-6 sm:gap-7 text-[1.05rem] sm:text-[1.15rem] md:text-[1.2rem] ${
              isDark ? 'text-gray-300' : 'text-[#222222]'
            } font-light leading-[1.6] max-w-[920px] mt-10 sm:mt-14`}>
              <p>
                Petco is committed to offering products made with locally sourced, natural ingredients with proven functional benefits, making it the ideal choice for pet owners seeking a healthy, natural alternative to enhance their pets' diet. By providing essential information about each ingredient's role, Petco empowers owners to make informed decisions that improve their pets' diet and overall well-being.
              </p>
              <p>
                The brand’s graphic concept is inspired by the internal transformation pets experience through proper nutrition—a process of nutrient absorption and cellular renewal. Petco reflects this scientifically supported process with a playful approach, emphasizing the benefits of its products. Their taglines reinforce this message by celebrating the positive moments that better nutrition brings, like stronger bonds, livelier walks, and joyful companionship.
              </p>
            </div>
            
            {/* Tabla (DETAILS) con separadores limpios */}
            <div className="flex flex-col text-[0.95rem] sm:text-[1.05rem] max-w-[840px] mt-14 sm:mt-20">
              
              <div className={`pb-4 border-b ${
                isDark ? 'border-white/20 text-white/90' : 'border-black/25 text-black'
              } font-medium tracking-wide`}>
                <span>(DETAILS)</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Type</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Brand</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Year</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>2023</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Country</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'}`}>Perú</span>
              </div>
              
              <div className={`flex items-center justify-between py-4 sm:py-5 border-b ${
                isDark ? 'border-white/20' : 'border-black/25'
              }`}>
                <span className={isDark ? 'text-gray-400' : 'text-[#333]'}>Sources</span>
                <span className={`font-normal ${isDark ? 'text-white' : 'text-black'} text-right`}>Graphic Design</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. BLOQUE DE IMÁGENES DEL PROYECTO (GRID MODULES REPLICA EXACTA) */}
      <PetcoProjectImages theme={theme} />

    </div>
  );
};
