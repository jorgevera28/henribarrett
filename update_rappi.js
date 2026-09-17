import fs from 'fs';

const rappiReadingPath = 'src/components/case-study/RappiReadingView.tsx';
const rappiVisualPath = 'src/components/case-study/RappiVisualView.tsx';

const readingContent = fs.readFileSync(rappiReadingPath, 'utf8');
const visualContent = fs.readFileSync(rappiVisualPath, 'utf8');

const missingPhotosVisual = `
      {/* RESTORED PHOTOS IN VISUAL VIEW (DIFFERENT DIAGRAMATIONS) */}
      <section className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-16 max-w-[1900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img src="/images/rappi_cyclist_hero.jpg" alt="Rappi Cyclist Hero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
              <img src="/images/rappi_spinning_kit.jpg" alt="Rappi Spinning Kit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
        <div className="w-full relative aspect-[16/10] sm:aspect-[2.2/1] overflow-hidden shadow-lg bg-neutral-900 mt-6 sm:mt-10 group">
          <img src="/images/rappi_outro_routine.jpg" alt="Rappi Outro Routine" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mt-6 sm:mt-10">
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 shadow-md">
            <img src="/images/rappi_3d_studio.jpg" alt="Rappi 3D Studio" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 shadow-md">
            <img src="/images/rappi_flyer_mockup.jpg" alt="Rappi Flyer Mockup" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 shadow-md">
            <img src="/images/rappi_neon_moss.jpg" alt="Rappi Neon Moss" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6 sm:mt-10">
          <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
            <img src="/images/rappi_fridge_recipe.jpg" alt="Rappi Fridge Recipe" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" referrerPolicy="no-referrer" />
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 shadow-md">
            <img src="/images/rappi_led_studio.jpg" alt="Rappi LED Studio" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
`;

const missingPhotosReading = `
      {/* RESTORED PHOTOS IN READING VIEW (STACKED VERTICALLY) */}
      <section className="w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-16 sm:pt-24 pb-16 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-10">
            <div className="w-full aspect-[4/5] sm:aspect-[1/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_cyclist_hero.jpg" alt="Rappi Cyclist" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[16/9] sm:aspect-[1.5/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_spinning_kit.jpg" alt="Rappi Spinning" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_3d_studio.jpg" alt="Rappi 3D" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_flyer_mockup.jpg" alt="Flyer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_neon_moss.jpg" alt="Moss" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[16/9] sm:aspect-[1.5/1] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_led_studio.jpg" alt="LED Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
              <img src="/images/rappi_fridge_recipe.jpg" alt="Fridge" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="lg:col-span-5"></div>
        </div>
      </section>
`;

const newVisualContent = visualContent.replace('    </div>\n  );\n};\n', missingPhotosVisual + '\n    </div>\n  );\n};\n');
const newReadingContent = readingContent.replace('    </div>\n  );\n};\n', missingPhotosReading + '\n    </div>\n  );\n};\n');

fs.writeFileSync(rappiVisualPath, newVisualContent);
fs.writeFileSync(rappiReadingPath, newReadingContent);
console.log("Updated Rappi views");
