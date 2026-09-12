import React from 'react';

export type CurtainTheme = 'black' | 'white';
export type CurtainPhase = 'idle' | 'entering' | 'holding' | 'exiting';

interface PageTransitionCurtainProps {
  isActive: boolean;
  theme: CurtainTheme;
  phase: CurtainPhase;
}

export const PageTransitionCurtain: React.FC<PageTransitionCurtainProps> = ({
  isActive,
  theme,
  phase,
}) => {
  if (!isActive && phase === 'idle') {
    return null;
  }

  const isBlack = theme === 'black';

  // El fondo se despliega desde la sangre/borde de abajo hacia arriba
  let bgClass = 'translate-y-full';
  // El logo no sube desde el borde, sino que sube desde medio camino y se queda en el centro
  let logoWrapClass = 'opacity-0 translate-y-[160px]';
  let stampClass = 'opacity-0';
  // Rotación del logo al llegar al punto medio: siempre hacia la derecha, con un paro en cada paso
  let logoSpinClass = '';

  if (phase === 'entering') {
    bgClass = 'curtain-bg-enter';
    logoWrapClass = 'loader-logo-wrap-enter';
    stampClass = 'loader-stamp-enter';
    logoSpinClass = '';
  } else if (phase === 'holding') {
    bgClass = 'curtain-bg-hold';
    logoWrapClass = 'loader-logo-wrap-hold';
    stampClass = 'opacity-100';
    logoSpinClass = 'animate-loader-mid-rock';
  } else if (phase === 'exiting') {
    bgClass = 'curtain-bg-exit';
    logoWrapClass = 'loader-logo-wrap-exit';
    stampClass = 'loader-stamp-exit';
    logoSpinClass = 'animate-loader-mid-rock';
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100002] w-full h-screen overflow-hidden pointer-events-auto select-none"
    >
      {/* 1. FONDO QUE SUBE DESDE LA SANGRE/BORDE (DE ABAJO HACIA ARRIBA) */}
      <div
        className={`absolute inset-0 w-full h-full ${bgClass}`}
        style={{
          backgroundColor: isBlack ? '#000000' : '#FFFFFF',
        }}
      />

      {/* 2. LOGO CENTRAL: SUBE DESDE MEDIO CAMINO, SE QUEDA EN EL MEDIO Y AL LLEGAR AL PUNTO MEDIO GIRA LENTO, HACE UN PARO, VUELVE Y REPITE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`relative flex items-center justify-center ${logoWrapClass}`}
          style={{
            color: isBlack ? '#FFFFFF' : '#000000',
          }}
        >
          {/* Isotipo con rotación al punto medio */}
          <svg
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-[96px] md:h-[96px] shrink-0 origin-center ${logoSpinClass}`}
            viewBox="0 0 42 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1777 17.6496C17.1777 19.5527 18.7234 21.0981 20.6268 21.0981C22.5301 21.0981 24.0758 19.5527 24.0758 17.6496C24.0758 15.7466 22.5301 14.2012 20.6268 14.2012C18.7234 14.2012 17.1777 15.7466 17.1777 17.6496Z"
              fill="currentColor"
            />
            <path
              d="M19.5983 23.2383L19.0352 32.2972L22.2704 32.2931L21.7031 23.2424L19.5983 23.2383Z"
              fill="currentColor"
            />
            <path
              d="M11.9238 29.5276L14.7316 31.1429L18.7643 23.0212L16.9473 21.9648L11.9238 29.5276Z"
              fill="currentColor"
            />
            <path
              d="M15.2856 19.5312L7.1543 23.5716L8.77398 26.3747L16.3298 21.3562L15.2856 19.5312Z"
              fill="currentColor"
            />
            <path
              d="M15.0604 16.5963L6 16.0332L6.00411 19.2679L15.0563 18.7007L15.0604 16.5963Z"
              fill="currentColor"
            />
            <path
              d="M16.3378 13.9445L8.76967 8.92188L7.1582 11.7291L15.2772 15.7613L16.3378 13.9445Z"
              fill="currentColor"
            />
            <path
              d="M18.7682 12.2843L14.7272 4.1543L11.9277 5.77372L16.943 13.3283L18.7682 12.2843Z"
              fill="currentColor"
            />
            <path
              d="M21.7031 12.0589L22.2704 3L19.0352 3.00411L19.5983 12.0548L21.7031 12.0589Z"
              fill="currentColor"
            />
            <path
              d="M29.3776 5.7694L26.574 4.1582L22.5371 12.2759L24.3582 13.3363L29.3776 5.7694Z"
              fill="currentColor"
            />
            <path
              d="M26.019 15.7671L34.1503 11.7268L32.5265 8.92773L24.9707 13.9422L26.019 15.7671Z"
              fill="currentColor"
            />
            <path
              d="M26.2422 18.7007L35.3026 19.2679L35.2984 16.0332L26.2463 16.5963L26.2422 18.7007Z"
              fill="currentColor"
            />
            <path
              d="M24.9668 21.356L32.5308 26.3745L34.1464 23.5714L26.0233 19.5352L24.9668 21.356Z"
              fill="currentColor"
            />
            <path
              d="M22.5371 23.0169L26.574 31.1468L29.3776 29.5233L24.3623 21.9688L22.5371 23.0169Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* 3. SELLO TIPOGRÁFICO DE AÑO EN LA ESQUINA INFERIOR DERECHA (2025/26) */}
      <div
        className={`absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-[11px] sm:text-[12px] tracking-[0.08em] font-sans font-normal select-none pointer-events-none ${stampClass}`}
        style={{
          color: isBlack ? 'rgba(255, 255, 255, 0.28)' : 'rgba(0, 0, 0, 0.28)',
        }}
      >
        2025/26
      </div>
    </div>
  );
};
