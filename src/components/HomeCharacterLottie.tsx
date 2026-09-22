import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface HomeCharacterLottieProps {
  className?: string;
}

export const HomeCharacterLottie: React.FC<HomeCharacterLottieProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Inicializar la animación Lottie del personaje
    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // Usamos la ruta local (/assets/character.json) para evitar restricciones CORS
        // y garantizar carga instantánea sin latencia de red.
        path: '/assets/character.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: true,
        },
      });

      animRef.current.addEventListener('DOMLoaded', () => {
        setIsLoaded(true);
      });

      // Manejo de error si falla la carga local, intenta fallback remoto
      animRef.current.addEventListener('data_failed', () => {
        if (!containerRef.current) return;
        animRef.current?.destroy();
        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://henribarrett.com/assets/site/json/home/character.json',
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
          },
        });
      });
    } catch (err) {
      console.error('Error cargando animación Lottie:', err);
    }

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-90'
      } ${className}`}
      aria-label="Henri Barrett character animation"
      style={{ willChange: 'transform' }}
    />
  );
};
