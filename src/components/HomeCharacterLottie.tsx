import React, { useEffect, useRef, useState, useCallback } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface HomeCharacterLottieProps {
  className?: string;
  cropToBounds?: boolean;
}

export const HomeCharacterLottie: React.FC<HomeCharacterLottieProps> = ({
  className = '',
  cropToBounds = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const applyCrop = useCallback(() => {
    if (cropToBounds && containerRef.current) {
      const svg = containerRef.current.querySelector('svg');
      if (svg) {
        // Máscara más alta exclusiva para mobile para que la animación (cabeza, manos y torso) nunca se corte
        svg.setAttribute('viewBox', '520 360 860 1100');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.overflow = 'visible';
      }
    }
  }, [cropToBounds]);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/character.json',
        rendererSettings: {
          preserveAspectRatio: cropToBounds ? 'xMidYMax meet' : 'xMidYMid meet',
          progressiveLoad: true,
        },
      });

      animRef.current.addEventListener('DOMLoaded', () => {
        setIsLoaded(true);
        applyCrop();
      });

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
            preserveAspectRatio: cropToBounds ? 'xMidYMax meet' : 'xMidYMid meet',
          },
        });
        animRef.current.addEventListener('DOMLoaded', () => {
          setIsLoaded(true);
          applyCrop();
        });
      });
    } catch (err) {
      console.error('Error cargando animación Lottie:', err);
    }

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [cropToBounds, applyCrop]);

  useEffect(() => {
    if (isLoaded) {
      applyCrop();
    }
  }, [isLoaded, applyCrop]);

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
