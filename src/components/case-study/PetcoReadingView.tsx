import React from 'react';
import { AppView } from '../../../App';

interface PetcoReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const PetcoReadingView: React.FC<PetcoReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`w-full min-h-screen transition-colors duration-500 ${
      isDark ? "bg-[#0c0c0d] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36`}>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1900px] mx-auto pt-32 sm:pt-40">
          <p>Petco Reading View (WIP)</p>
      </div>
    </div>
  );
};
