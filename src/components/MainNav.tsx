import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { AppView } from '../types';

export const DynamicIsotype = ({ className = "w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9", style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <svg className={`${className} shrink-0`} style={style} viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.1777 17.6496C17.1777 19.5527 18.7234 21.0981 20.6268 21.0981C22.5301 21.0981 24.0758 19.5527 24.0758 17.6496C24.0758 15.7466 22.5301 14.2012 20.6268 14.2012C18.7234 14.2012 17.1777 15.7466 17.1777 17.6496Z" fill="currentColor"/>
      <path d="M19.5983 23.2383L19.0352 32.2972L22.2704 32.2931L21.7031 23.2424L19.5983 23.2383Z" fill="currentColor"/>
      <path d="M11.9238 29.5276L14.7316 31.1429L18.7643 23.0212L16.9473 21.9648L11.9238 29.5276Z" fill="currentColor"/>
      <path d="M15.2856 19.5312L7.1543 23.5716L8.77398 26.3747L16.3298 21.3562L15.2856 19.5312Z" fill="currentColor"/>
      <path d="M15.0604 16.5963L6 16.0332L6.00411 19.2679L15.0563 18.7007L15.0604 16.5963Z" fill="currentColor"/>
      <path d="M16.3378 13.9445L8.76967 8.92188L7.1582 11.7291L15.2772 15.7613L16.3378 13.9445Z" fill="currentColor"/>
      <path d="M18.7682 12.2843L14.7272 4.1543L11.9277 5.77372L16.943 13.3283L18.7682 12.2843Z" fill="currentColor"/>
      <path d="M21.7031 12.0589L22.2704 3L19.0352 3.00411L19.5983 12.0548L21.7031 12.0589Z" fill="currentColor"/>
      <path d="M29.3776 5.7694L26.574 4.1582L22.5371 12.2759L24.3582 13.3363L29.3776 5.7694Z" fill="currentColor"/>
      <path d="M26.019 15.7671L34.1503 11.7268L32.5265 8.92773L24.9707 13.9422L26.019 15.7671Z" fill="currentColor"/>
      <path d="M26.2422 18.7007L35.3026 19.2679L35.2984 16.0332L26.2463 16.5963L26.2422 18.7007Z" fill="currentColor"/>
      <path d="M24.9668 21.356L32.5308 26.3745L34.1464 23.5714L26.0233 19.5352L24.9668 21.356Z" fill="currentColor"/>
      <path d="M22.5371 23.0169L26.574 31.1468L29.3776 29.5233L24.3623 21.9688L22.5371 23.0169Z" fill="currentColor"/>
    </svg>
  );
};

export const DynamicLogotype = ({ className = "", style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <svg className={`${className} shrink-0`} style={{ width: "146px", height: "auto", ...style }} aria-hidden="true" viewBox="0 0 152 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5148 8.65584H6.67449V3.22852H3V18.0174H6.67449V12.1751H10.5148V18.0174H14.1855V3.22852H10.5148V8.65584Z" fill="currentColor"/>
      <path d="M15.5664 18.0174H25.5384V14.6161H19.2371V12.1384H24.7734V8.73315H19.2371V6.62975H25.5384V3.22852H15.5664V18.0174Z" fill="currentColor"/>
      <path d="M34.5523 10.9383L30.8288 3.36277L30.761 3.22852H26.834V18.0174H30.354V10.0676L33.9908 17.879L34.0586 18.0174H37.8348V3.22852H34.5523V10.9383Z" fill="currentColor"/>
      <path d="M49.6006 7.99675C49.6006 4.87624 47.7276 3.22852 44.185 3.22852H39.0859V18.0214H42.7567V13.0254H43.9023L46.3256 18.0214H50.4486L47.4299 12.2402C48.8243 11.4102 49.6006 9.94961 49.6006 8.00082V7.99675ZM43.94 9.77467H42.7567V6.47108H43.94C45.6473 6.47108 45.9977 7.08135 45.9977 7.99675C45.9977 9.17661 45.3043 9.77467 43.94 9.77467Z" fill="currentColor"/>
      <path d="M54.7977 3.22852H51.127V18.0214H54.7977V3.22852Z" fill="currentColor"/>
      <path d="M68.749 10.1164C69.695 9.4614 70.1849 8.13915 70.1849 7.03253C70.1849 4.51008 68.4438 3.22852 65.018 3.22852H60.1602V18.0214H65.41C68.798 18.0214 70.8256 16.3534 70.8256 13.5543C70.8256 11.9147 70.0756 10.686 68.7528 10.1164H68.749ZM63.8309 6.39378H64.9163C66.3032 6.39378 66.5896 6.85351 66.5896 7.54515C66.5896 8.43615 66.0243 8.88775 64.905 8.88775H63.8309V6.39378ZM65.165 14.8521H63.8309V11.9391H65.165C66.974 11.9391 67.2227 12.6023 67.2227 13.3183C67.2227 13.9733 67.0117 14.848 65.165 14.848V14.8521Z" fill="currentColor"/>
      <path d="M79.2642 3.22852H75.0734L70.9165 17.6878L70.8223 18.0174H74.5985L75.3523 14.7667H78.8798L79.6297 18.0174H83.5153L79.3169 3.40753L79.2642 3.22852ZM76.0871 11.5811L76.2869 10.7145C76.5695 9.57939 76.8522 8.25307 77.1085 7.00812C77.1839 7.34987 77.2592 7.69569 77.3346 8.04557C77.5343 8.95284 77.7378 9.89266 77.9414 10.7104L78.1411 11.5811H76.0871Z" fill="currentColor"/>
      <path d="M94.7159 7.99675C94.7159 4.87624 92.8428 3.22852 89.3002 3.22852H84.2012V18.0214H87.8719V13.0254H89.0176L91.4409 18.0214H95.5638L92.5489 12.2402C93.9433 11.4102 94.7196 9.94961 94.7196 8.00082L94.7159 7.99675ZM89.0553 9.77467H87.8719V6.47108H89.0553C90.7625 6.47108 91.113 7.08135 91.113 7.99675C91.113 9.17661 90.4195 9.77467 89.0553 9.77467Z" fill="currentColor"/>
      <path d="M106.761 7.99675C106.761 4.87624 104.888 3.22852 101.345 3.22852H96.2461V18.0214H99.9168V13.0254H101.063L103.486 18.0214H107.609L104.594 12.2402C105.988 11.4102 106.765 9.94961 106.765 8.00082L106.761 7.99675ZM101.1 9.77467H99.9168V6.47108H101.1C102.807 6.47108 103.158 7.08135 103.158 7.99675C103.158 9.17661 102.464 9.77467 101.1 9.77467Z" fill="currentColor"/>
      <path d="M108.287 3.22852V18.0174H117.155H118.259V14.6161H117.155H111.958V12.1384H116.39H117.494V8.73315H116.39H111.958V6.62975H117.155H118.259V3.22852H117.155H108.287Z" fill="currentColor"/>
      <path d="M119.473 6.62975H123.057V18.0174H126.731V6.62975H130.315V3.22852H119.473V6.62975Z" fill="currentColor"/>
      <path d="M147 7.38834C145.617 7.38834 144.488 6.25278 144.488 4.69417C144.488 3.14669 145.617 2 147 2C148.382 2 149.512 3.14669 149.512 4.69417C149.512 6.25278 148.382 7.38834 147 7.38834ZM147 6.99869C148.203 6.99869 149.079 6.03012 149.079 4.69417C149.079 3.36935 148.203 2.38965 147 2.38965C145.797 2.38965 144.921 3.36935 144.921 4.69417C144.921 6.03012 145.797 6.99869 147 6.99869ZM146.018 6.08579V3.23576H147.264C147.76 3.23576 148.119 3.56974 148.119 4.03733C148.119 4.36018 147.96 4.62737 147.612 4.71644V4.72757C147.876 4.8055 148.002 4.96136 148.034 5.30648C148.076 5.70727 148.055 6.00786 148.15 6.05239V6.08579H147.633C147.559 6.05239 147.528 5.72953 147.517 5.42894C147.506 5.12835 147.338 4.9391 147 4.9391H146.557V6.08579H146.018ZM146.557 3.70334V4.50491H147.148C147.443 4.50491 147.591 4.33792 147.591 4.10412C147.591 3.87033 147.443 3.70334 147.148 3.70334H146.557Z" fill="currentColor"/>
      <path d="M131.389 3.22852V6.62975H134.973V18.0174H138.643V6.62975H142.227V3.22852H131.389Z" fill="currentColor"/>
    </svg>
  );
};

interface FullMenuItem {
  id: string;
  num: string;
  label: string;
  view: AppView;
}

const FULL_MENU_ITEMS: FullMenuItem[] = [
  { id: 'work', num: '01.', label: 'WORK', view: 'work' },
  { id: 'services', num: '02.', label: 'SERVICES', view: 'services' },
  { id: 'quicklys', num: '03.', label: 'QUICKLYS', view: 'quicklys' },
  { id: 'about', num: '04.', label: 'ABOUT US', view: 'about' },
  { id: 'work-with-us', num: '05.', label: 'WORK WITH US', view: 'work-with-us' },
];

export const FullScreenMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  setCurrentView: (view: AppView) => void;
}> = ({ isOpen, onClose, currentView, setCurrentView }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [centerIdx, setCenterIdx] = useState<number>(1);

  const REPEATED_MENU = [
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
    ...FULL_MENU_ITEMS,
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        if (scrollRef.current) {
          const itemHeight = 120;
          const targetIndex = FULL_MENU_ITEMS.findIndex(item => item.view === currentView);
          const activeIdxInSet = FULL_MENU_ITEMS.length * 2 + (targetIndex >= 0 ? targetIndex : 0);
          scrollRef.current.scrollTop = activeIdxInSet * itemHeight - (scrollRef.current.clientHeight / 2) + (itemHeight / 2);
          setCenterIdx(activeIdxInSet);
        }
      }, 60);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, currentView]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const centerY = container.scrollTop + container.clientHeight / 2;
    const itemHeight = 120;
    const approxIndex = Math.round(centerY / itemHeight);
    setCenterIdx(approxIndex);

    const totalItems = REPEATED_MENU.length;
    const singleSetCount = FULL_MENU_ITEMS.length;
    if (container.scrollTop < singleSetCount * itemHeight * 0.5) {
      container.scrollTop += singleSetCount * itemHeight * 2;
    } else if (container.scrollTop > (totalItems - singleSetCount * 1.5) * itemHeight) {
      container.scrollTop -= singleSetCount * itemHeight * 2;
    }
  };

  const handleSelectItem = (view: AppView) => {
    setCurrentView(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-[#0A0A0A] text-white flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="w-full px-6 sm:px-10 md:px-16 py-7 sm:py-8 md:py-10 flex items-center justify-between z-30 shrink-0 select-none">
        <button
          onClick={() => handleSelectItem('home')}
          className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity cursor-pointer group focus:outline-hidden"
          title="Henri Barrett - Home"
        >
          <DynamicIsotype className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
          <DynamicLogotype style={{ width: "170px" }} className="text-white" />
        </button>

        <button
          onClick={onClose}
          className="group flex items-center gap-2.5 text-white hover:opacity-75 transition-opacity cursor-pointer text-base sm:text-lg font-medium tracking-wide focus:outline-hidden"
          aria-label="Cerrar menú"
        >
          <span className="border-b border-white/60 group-hover:border-white pb-0.5 transition-colors">Close</span>
          <X className="w-5 h-5 text-white stroke-[2.2] transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex-1 overflow-y-auto no-scrollbar relative flex flex-col py-[20vh] px-6 sm:px-10 md:px-16 lg:px-24 select-none"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 my-auto">
          {REPEATED_MENU.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isCentered = hoveredIdx === null && centerIdx === idx;
            const isHighlighted = isHovered || isCentered;

            return (
              <div
                key={`${item.id}-${idx}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleSelectItem(item.view)}
                className="group flex items-baseline cursor-pointer transition-all duration-300 ease-out py-1.5 sm:py-2.5"
              >
                <span 
                  className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-light font-mono mr-4 sm:mr-8 md:mr-12 w-8 sm:w-12 md:w-16 text-right shrink-0 transition-colors duration-300 ${
                    isHighlighted ? 'text-white/80' : 'text-white/20'
                  }`}
                >
                  {item.num}
                </span>

                <span
                  className={`text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.2vw] font-bold tracking-[-0.03em] leading-[0.92] uppercase transition-all duration-300 ${
                    isHighlighted 
                      ? 'text-white scale-[1.01] origin-left' 
                      : 'text-[#242424] sm:text-[#272727] group-hover:text-white'
                  }`}
                  style={{
                    fontFamily: '"neue-haas-grotesk-display", "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 md:px-16 py-6 md:py-8 flex items-center justify-end z-30 shrink-0 pointer-events-none select-none">
        <span className="text-xs sm:text-sm text-white/25 font-mono tracking-widest">
          2024/25
        </span>
      </div>
    </div>
  );
};

export const MainNav: React.FC<{
  currentView: string;
  setCurrentView: (view: AppView) => void;
  isHome?: boolean;
  navRef?: React.RefObject<HTMLElement | null>;
  bgColor?: string;
  textColor?: string;
}> = ({ currentView, setCurrentView, isHome, navRef, bgColor = 'bg-transparent', textColor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const accumulatedScroll = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);

      const delta = Math.abs(scrollY - lastScrollY.current);
      accumulatedScroll.current += delta;
      lastScrollY.current = scrollY;

      const stepSize = 90;
      const notch = Math.floor(accumulatedScroll.current / stepSize);
      setRotation(notch * 25);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    accumulatedScroll.current = 0;
    setRotation(0);
  }, [currentView]);

  const navClasses = isHome 
    ? `fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent ${isScrolled ? 'py-6 md:py-8' : 'py-8 md:py-12'}`
    : `sticky top-0 z-40 w-full transition-all duration-300 border-none bg-transparent ${isScrolled ? 'py-6 md:py-8' : 'py-7 md:py-8'}`;

  return (
    <>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <nav 
        ref={navRef} 
        className={`${navClasses} px-6 sm:px-10 md:px-16 flex items-center justify-between gap-4`}
      >
        <div className={`w-full ${isHome ? 'max-w-[1400px] mx-auto' : ''} flex justify-between items-center ${isScrolled ? 'text-current' : (textColor || 'text-current')} gap-4 transition-all duration-300`}>
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-1.5 sm:gap-2 text-left cursor-pointer focus:outline-none shrink-0" title="Ir a inicio">
            <div className="relative flex items-start">
              <DynamicIsotype 
                className="origin-center" 
                style={{ 
                  width: isScrolled ? '65px' : '59.3px', 
                  height: isScrolled ? '65px' : '59.3px',
                  transformOrigin: 'center center',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'width 0.3s ease, height 0.3s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)'
                }} 
              />
              {isScrolled && <span className="absolute text-[10px] font-bold" style={{ right: '5px', top: '5px' }}>®</span>}
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-0 opacity-0' : 'max-w-[250px] opacity-100'}`}>
              <DynamicLogotype style={{ width: '205px' }} />
            </div>
          </button>
          
          <div className={`flex items-center gap-4 sm:gap-7 md:gap-9 lg:gap-11 font-medium tracking-[0.03em] overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-0 opacity-0 overflow-hidden' : 'max-w-[800px] opacity-100 text-[0.92rem] sm:text-[1rem] md:text-[1.12rem] py-1 overflow-x-auto no-scrollbar'}`}>
            <button onClick={() => setCurrentView('about')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'about' ? 'font-bold' : ''}`}>About us</button>
            <button onClick={() => setCurrentView('work')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'work' ? 'font-bold' : ''}`}>Work</button>
            <button onClick={() => setCurrentView('services')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'services' ? 'font-bold' : ''}`}>Services</button>
            <button onClick={() => setCurrentView('quicklys')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'quicklys' ? 'font-bold' : ''}`}>Quicklys</button>
            <button onClick={() => setCurrentView('work-with-us')} className={`hover:opacity-60 transition-opacity cursor-pointer whitespace-nowrap ${currentView === 'work-with-us' ? 'font-bold' : ''}`}>Contact</button>
          </div>

          <div className={`flex items-center ${isScrolled ? 'gap-6 sm:gap-8 md:gap-12' : 'gap-4'} text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-bold tracking-[0.03em] shrink-0 transition-all duration-300`}>
            {isScrolled && (
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="relative group pb-0.5 transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap cursor-pointer"
                title="Abrir menú"
              >
                Menu
              </button>
            )}
            <button 
              onClick={() => setCurrentView('work-with-us')} 
              className={`relative group pb-0.5 transition-opacity hover:opacity-80 shrink-0 whitespace-nowrap cursor-pointer ${currentView === 'work-with-us' ? 'border-b-2 border-current' : ''}`}
            >
              Work with us
              <span className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform origin-left transition-transform duration-300 ${currentView === 'work-with-us' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
