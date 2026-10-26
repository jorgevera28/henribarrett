import React, { useState, useEffect, useRef } from 'react';

export interface InViewVimeoVideoProps {
  videoId: string;
  poster?: string;
  aspectRatio?: string;
  className?: string;
  title?: string;
  bgColor?: string;
}

/**
 * InViewVimeoVideo
 * Embeds a Vimeo video in seamless loop without controls (background mode)
 * and strictly ensures that:
 * 1. The iframe only loads when near the viewport (lazy mounting)
 * 2. Playback is actively triggered ONLY when the element is within the user's viewport
 * 3. Playback immediately pauses as soon as the user scrolls away
 * This prevents multiple videos from running and consuming resources concurrently.
 */
export const InViewVimeoVideo: React.FC<InViewVimeoVideoProps> = ({
  videoId,
  poster,
  aspectRatio = 'aspect-[16/9]',
  className = '',
  title = 'Vimeo showcase video',
  bgColor = 'bg-black',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isNear, setIsNear] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInViewRef = useRef(false);

  isInViewRef.current = isInView;

  // 1. Proximity observer: mount iframe when user is within 400px of scrolling here
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const nearObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsNear(true);
        }
      },
      { rootMargin: '400px 0px', threshold: 0 }
    );

    nearObserver.observe(el);
    return () => nearObserver.disconnect();
  }, []);

  // 2. In-view observer: triggers active viewing when visibly scrolled past
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const viewObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
        setIsInView(visible);
      },
      { threshold: [0, 0.15, 0.5] }
    );

    viewObserver.observe(el);
    return () => viewObserver.disconnect();
  }, []);

  // 3. PostMessage play/pause control via Vimeo Player API
  const sendVimeoCommand = (command: 'play' | 'pause') => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: command }),
          '*'
        );
      } catch {
        // Safe fallback for cross-origin restrictions
      }
    }
  };

  useEffect(() => {
    if (isLoaded) {
      if (isInView) {
        sendVimeoCommand('play');
      } else {
        sendVimeoCommand('pause');
      }
    }
  }, [isInView, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden shadow-sm ${aspectRatio} ${bgColor} ${className}`}
    >
      {/* High-fidelity poster placeholder while video mounts */}
      {poster && (
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Vimeo iframe mounted only when near/in-view */}
      {isNear && (
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1&api=1&autopause=0`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[101%] h-[101%] min-w-full min-h-full pointer-events-none"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture"
          title={title}
          onLoad={() => {
            setIsLoaded(true);
            if (!isInViewRef.current) {
              sendVimeoCommand('pause');
            }
          }}
        />
      )}
    </div>
  );
};
