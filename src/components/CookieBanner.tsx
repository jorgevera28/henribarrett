import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  isHome: boolean;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ isHome }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    // Reset previously saved localStorage consent so the banner loads again
    try {
      localStorage.removeItem('henribarrett_cookie_consent');
    } catch {
      // In case localStorage is disabled or restricted
    }

    // Appear only after initial home animations load (~1.8s)
    let animTimer: NodeJS.Timeout;
    const timer = setTimeout(() => {
      setIsRendered(true);
      animTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 1850);

    return () => {
      clearTimeout(timer);
      if (animTimer) clearTimeout(animTimer);
    };
  }, [isHome]);

  const handleConsent = (type: 'accepted' | 'declined') => {
    setIsVisible(false);
    setTimeout(() => {
      setIsRendered(false);
    }, 700);
  };

  if (!isRendered) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 w-full bg-white z-[999999] border-t border-black transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-7 md:py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 xl:gap-16">
          {/* LEFT: We [burst®] want to give you better navigation */}
          <div className="flex items-center flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1 select-none">
            <span className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[45px] font-normal font-[400] text-black tracking-[-0.035em] leading-[1.05]">
              We
            </span>
            <span className="relative inline-flex items-center justify-center mx-1 sm:mx-1.5 shrink-0 align-middle">
              <img
                src="https://henribarrett.com/assets/site/svg/home/isologo_henribarrett.svg"
                alt="Henri Barrett Isologo"
                onError={(e) => {
                  e.currentTarget.src = '/svg/isologo_henribarrett.svg';
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 object-contain select-none pointer-events-none"
              />
              <span className="absolute -top-1 -right-2.5 text-[9px] sm:text-[10px] font-normal text-black select-none leading-none">
                ®
              </span>
            </span>
            <span className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[45px] font-normal font-[400] text-black tracking-[-0.035em] leading-[1.05]">
              want to give you better navigation
            </span>
          </div>

          {/* RIGHT: Description & Action Buttons */}
          <div className="flex flex-col items-start gap-3.5 sm:gap-4 max-w-[590px]">
            <p className="text-[12px] sm:text-[12.5px] md:text-[13px] text-black font-normal font-[400] leading-[1.42] tracking-normal">
              We use tracking cookies so that our website can function. In order to improve and personalize your experience, we also use the options analytical monitoring, personalization and marketing. This way we can provide you with better content and offers. By accepting them, our cookies will track your profile on your device to improve your experience.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleConsent('accepted')}
                className="rounded-full border border-black px-5 sm:px-6 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-normal text-black hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => handleConsent('declined')}
                className="rounded-full border border-black px-5 sm:px-6 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-normal text-black hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
