import React from 'react';

interface UmanaBurstIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const UmanaBurstIcon: React.FC<UmanaBurstIconProps> = ({ 
  className = "w-16 h-16 text-white", 
  style 
}) => {
  // 16 rayos con longitudes y ángulos orgánicos basados en el diseño de UMANA
  const rayAngles = [
    { deg: 0, length: 'long' },
    { deg: 22.5, length: 'short' },
    { deg: 45, length: 'long' },
    { deg: 67.5, length: 'medium' },
    { deg: 90, length: 'long' },
    { deg: 112.5, length: 'short' },
    { deg: 135, length: 'long' },
    { deg: 157.5, length: 'medium' },
    { deg: 180, length: 'long' },
    { deg: 202.5, length: 'short' },
    { deg: 225, length: 'long' },
    { deg: 247.5, length: 'medium' },
    { deg: 270, length: 'long' },
    { deg: 292.5, length: 'short' },
    { deg: 315, length: 'long' },
    { deg: 337.5, length: 'medium' },
  ];

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Disco central sólido */}
      <circle cx="50" cy="50" r="11.5" fill="currentColor" />

      {/* Rayos solares / fulgor arquitectónico */}
      {rayAngles.map(({ deg, length }) => {
        const innerR = 19;
        const outerR = length === 'long' ? 44 : length === 'medium' ? 36 : 28;
        const rad = (deg * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * innerR;
        const y1 = 50 + Math.sin(rad) * innerR;
        const x2 = 50 + Math.cos(rad) * outerR;
        const y2 = 50 + Math.sin(rad) * outerR;

        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};
