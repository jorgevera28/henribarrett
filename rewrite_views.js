import fs from 'fs';

const readingViewPath = 'src/components/case-study/BarrettSessionsReadingView.tsx';
const visualViewPath = 'src/components/case-study/BarrettSessionsVisualView.tsx';

const readingViewContent = fs.readFileSync(readingViewPath, 'utf8');
const visualViewContent = fs.readFileSync(visualViewPath, 'utf8');

// The project overview HTML section from reading view
const projectOverviewRegex = /<section className="w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-32 sm:pt-40 max-w-\[1700px\] mx-auto">.*?<\/section>/s;
const projectOverviewMatch = readingViewContent.match(projectOverviewRegex);
if (!projectOverviewMatch) {
  console.error("Could not find project overview in reading view");
  process.exit(1);
}
const projectOverviewBlock = projectOverviewMatch[0];

// 1. Rewrite VisualView
// We want to insert the projectOverviewBlock at the top of the content in VisualView, just after the opening main div.
const visualViewNewContent = visualViewContent.replace(
  /<div className=\{`w-full transition-colors duration-500 \$\{\s*isDark \? "bg-\[#0c0c0d\] text-\[#F3F4F6\]" : "bg-white text-\[#111111\]"\s*\} pb-28 sm:pb-36`\}>/,
  `$&
      {/* ADDED PROJECT OVERVIEW TO VISUAL VIEW */}
      ${projectOverviewBlock}`
);
fs.writeFileSync(visualViewPath, visualViewNewContent);
console.log("Updated VisualView");


// 2. Rewrite ReadingView
// Reading view needs a completely different layout: Left side images, right side sticky text.
const newReadingViewContent = `import React from 'react';
import { AppView } from '../../../App';

interface BarrettSessionsReadingViewProps {
  theme?: "dark" | "light";
  onNavigate?: (view: AppView) => void;
}

export const BarrettSessionsReadingView: React.FC<BarrettSessionsReadingViewProps> = ({ 
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={\`w-full min-h-screen transition-colors duration-500 \${
      isDark ? "bg-[#0c0c0d] text-[#F3F4F6]" : "bg-white text-[#111111]"
    } pb-28 sm:pb-36\`}>
      
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1900px] mx-auto pt-32 sm:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN: IMAGES STACKED */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-10">
            <div className="w-full aspect-[4/5] sm:aspect-[1/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_sessions_pedestal_sign.jpg" alt="Barrett Sessions" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_lucho_portrait.jpg" alt="DJ Lucho" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[16/9] sm:aspect-[1.5/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_laptop_studio.jpg" alt="Laptop Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_ruqyay_portrait.jpg" alt="Ruqyay" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_tote_bag.jpg" alt="Tote Bag" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_poster_pasting.jpg" alt="Poster" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[16/9] sm:aspect-[1.5/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/barrett_wildposting_wall.jpg" alt="Wall" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY TEXT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <div className={\`text-[14px] sm:text-[15px] font-normal leading-[1.3] \${
              isDark ? 'text-white' : 'text-black'
            } select-none\`}>
              <p>(01)</p>
              <p className="mt-5 sm:mt-6">Project</p>
              <p>Overview</p>
            </div>

            <h1 className={\`mt-10 sm:mt-16 text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-[400] tracking-[-0.035em] leading-[1.15] \${
              isDark ? 'text-white' : 'text-black'
            }\`}>
              More than just showcasing artists, Barrett Sessions is a testament to our love for culture and music, creating a space where you can unwind and immerse yourself in great tunes.
            </h1>

            <p className={\`mt-8 sm:mt-10 text-[0.95rem] sm:text-[1.0625rem] leading-[1.65] font-light \${
              isDark ? 'text-neutral-300' : 'text-[#1a1a1a]'
            }\`}>
              Our graphics and concept are inspired by fluidity, mirroring the movement and rhythm of music itself. Through dynamic shapes and flowing designs, we capture the essence of musical fluidity and the vibrant energy it evokes. Designed primarily for digital formats, we've also adapted our visuals for print to amplify their impact.
            </p>

            <p className={\`mt-6 sm:mt-8 text-[0.95rem] sm:text-[1.0625rem] leading-[1.65] font-light \${
              isDark ? 'text-neutral-300' : 'text-[#1a1a1a]'
            }\`}>
              Our color palette sets the mood for each live session, with soothing blues for relaxed vibes, energetic reds for lively performances, and a touch of experimental yellow to push boundaries. As we continue to build and develop the platform, we invite you to join us on this musical journey.
            </p>

            {/* TABLA (DETAILS) */}
            <div className="mt-12 sm:mt-16 w-full max-w-[400px]">
              <div className={\`pb-3 border-b \${
                isDark ? 'border-white/20 text-white' : 'border-black/30 text-black'
              } text-xs sm:text-sm font-normal tracking-wide select-none\`}>
                <span>(DETAILS)</span>
              </div>
              
              <div className={\`flex items-center justify-between py-3 sm:py-4 border-b \${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm\`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Type</span>
                <span className={\`font-normal \${isDark ? 'text-white' : 'text-black'}\`}>Brand</span>
              </div>
              
              <div className={\`flex items-center justify-between py-3 sm:py-4 border-b \${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm\`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Year</span>
                <span className={\`font-normal \${isDark ? 'text-white' : 'text-black'}\`}>2021</span>
              </div>
              
              <div className={\`flex items-center justify-between py-3 sm:py-4 border-b \${
                isDark ? 'border-white/20' : 'border-black/20'
              } text-sm\`}>
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Country</span>
                <span className={\`font-normal \${isDark ? 'text-white' : 'text-black'}\`}>Perú</span>
              </div>
              
              <div className="flex items-center justify-between py-3 sm:py-4 text-sm">
                <span className={isDark ? 'text-neutral-400' : 'text-black font-light'}>Sources</span>
                <span className={\`font-normal \${isDark ? 'text-white' : 'text-black'} text-right\`}>Production, Event</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(readingViewPath, newReadingViewContent);
console.log("Updated ReadingView");

