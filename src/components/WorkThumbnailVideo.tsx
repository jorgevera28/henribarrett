import React, { useState, useEffect, useRef } from 'react';

export interface WorkThumbnailVideoProps {
  videoUrl: string;
  poster?: string;
  title?: string;
  containerAspectRatio?: 'square' | '4/5' | 'wide';
  quality?: '4k' | '2k' | '1080p' | '720p' | string;
  className?: string;
  iframeClassName?: string;
}

/**
 * WorkThumbnailVideo
 *
 * Sized to ensure videos (Umana, Rappi, etc.) completely fill the thumbnail block height
 * without any black bars on top and bottom, with a clean slightly-closer crop framing.
 *
 * Performance & Quality Optimization:
 * 1. Guarantees maximum video resolution (4K / 1080p) via 'quality=4k' parameter & postMessage setQuality.
 * 2. Lazy-mounts iframe only when approaching the work section (rootMargin 350px).
 * 3. Only plays actively when the thumbnail is visible in the viewport.
 * 4. Immediately pauses when the user scrolls away from that zone, drastically reducing
 *    CPU, GPU, and RAM usage.
 */
export const WorkThumbnailVideo: React.FC<WorkThumbnailVideoProps> = ({
  videoUrl,
  poster,
  title = 'Work showcase thumbnail',
  containerAspectRatio = 'square',
  quality = '4k',
  className = '',
  iframeClassName = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isNear, setIsNear] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInViewRef = useRef(false);

  isInViewRef.current = isInView;

  const isVimeo = videoUrl.includes('vimeo.com');

  // Format Vimeo URL to ensure API control, loop, muted, no controls, and highest quality (4k / 1080p fallback)
  const formattedVimeoUrl = React.useMemo(() => {
    if (!isVimeo) return videoUrl;
    try {
      const parsed = new URL(videoUrl);
      parsed.searchParams.set('api', '1');
      parsed.searchParams.set('autopause', '0');
      parsed.searchParams.set('background', '1');
      parsed.searchParams.set('autoplay', '1');
      parsed.searchParams.set('muted', '1');
      parsed.searchParams.set('loop', '1');
      parsed.searchParams.set('playsinline', '1');
      parsed.searchParams.set('byline', '0');
      parsed.searchParams.set('title', '0');
      parsed.searchParams.set('portrait', '0');
      parsed.searchParams.set('dnt', '1');
      // Set to highest possible video quality (Vimeo gracefully plays maximum available if below 4k)
      parsed.searchParams.set('quality', quality);
      return parsed.toString();
    } catch {
      return videoUrl;
    }
  }, [videoUrl, isVimeo, quality]);

  // 1. Proximity observer: mounts iframe only when user scrolls within 350px of this zone
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
      { rootMargin: '350px 0px', threshold: 0 }
    );

    nearObserver.observe(el);
    return () => nearObserver.disconnect();
  }, []);

  // 2. View observer: active playback only when passing through that zone
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

  // 3. PostMessage play / pause / quality commands for Vimeo player
  const sendVimeoCommand = (command: 'play' | 'pause') => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: command }),
          '*'
        );
      } catch {
        // Fallback for cross-origin restrictions
      }
    }
  };

  const enforceHighestQuality = () => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'setQuality', value: quality }),
          '*'
        );
      } catch {
        // Fallback for cross-origin restrictions
      }
    }
  };

  // 4. Play / pause and quality management based on viewport intersection
  useEffect(() => {
    if (isVimeo) {
      if (isLoaded) {
        if (isInView) {
          enforceHighestQuality();
          sendVimeoCommand('play');
        } else {
          sendVimeoCommand('pause');
        }
      }
    } else if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isLoaded, isVimeo, quality]);

  // Determine iframe sizing to completely fill thumbnail height with zero black bars
  // and frame the video closer (encuadre más cercano)
  const sizingStyles = React.useMemo(() => {
    if (containerAspectRatio === '4/5') {
      return {
        width: '275%',
        height: '150%',
        maxWidth: 'none',
        maxHeight: 'none',
      };
    }
    if (containerAspectRatio === 'wide') {
      return {
        width: '145%',
        height: '145%',
        maxWidth: 'none',
        maxHeight: 'none',
      };
    }
    // Default: Square container (aspect-[905/902] in Home or square thumbnails)
    // 215% width and 120% height guarantees 16:9 / 1.85:1 videos cover >115% of height,
    // eliminating any top/bottom black letterbox bars.
    return {
      width: '215%',
      height: '120%',
      maxWidth: 'none',
      maxHeight: 'none',
    };
  }, [containerAspectRatio]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden pointer-events-none bg-black ${className}`}
    >
      {/* High-fidelity poster placeholder rendered while lazy loading */}
      {poster && (
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Vimeo iframe: mounted only when near the work section, controlled by in-view */}
      {isVimeo && isNear && (
        <iframe
          ref={iframeRef}
          src={formattedVimeoUrl}
          style={{ ...sizingStyles, border: 'none' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 ${iframeClassName}`}
          allow="autoplay; fullscreen; picture-in-picture"
          title={title}
          onLoad={() => {
            setIsLoaded(true);
            enforceHighestQuality();
            if (!isInViewRef.current) {
              sendVimeoCommand('pause');
            }
          }}
        />
      )}

      {/* Direct HTML5 video fallback (if video is a webm/mp4 URL) */}
      {!isVimeo && isNear && (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          style={{ ...sizingStyles }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 ${iframeClassName}`}
        />
      )}
    </div>
  );
};
