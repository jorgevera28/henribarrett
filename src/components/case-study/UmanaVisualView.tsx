import React from 'react';

export const UmanaVisualView: React.FC = () => {
  return (
    <div className={`w-full transition-colors duration-500 ${theme === "dark" ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"} pb-20 pt-10`}>
      {/* TEXT OVERVIEW BLOCK */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-16 pb-24 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] lg:grid-cols-[1fr_3fr] gap-8 md:gap-16 lg:gap-24">
          
          {/* Left Column (01) */}
          <div className="text-sm font-light leading-relaxed opacity-90 mt-2">
            (01)<br /><br />
            Project<br />
            Overview
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-10 lg:gap-14">
            <h2 className={`text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-[400] tracking-tight leading-[1.1] ${theme === "dark" ? "text-[#F3F4F6]" : "text-[#111]"}`}>
              Umana's is focused on creating a warm, and people-centered brand that reflects their unique philosophy and approach to architecture and design.
            </h2>
            
            <div className={`flex flex-col gap-6 text-[0.95rem] sm:text-[1.05rem] ${theme === "dark" ? "text-[#D1D5DB]" : "text-[#444]"} font-light leading-[1.6] max-w-[800px]`}>
              <p>
                The challenge lay in effectively translating their philosophy, and design approach into a visually cohesive and engaging brand identity that resonated with their target audience while maintaining a focus on people and their interactions within spaces.
              </p>
              <p>
                Our concept for Umana is based on the way that heat cameras capture the movement and behavior of people in spaces, which has allowed us to show their design approach that prioritize functionality and human interaction.
              </p>
            </div>
            
            {/* Details Table */}
            <div className="flex flex-col text-[0.95rem] max-w-[800px] mt-4">
              <div className="py-4 border-b border-[#F3F4F6]/20">
                <span className="opacity-90">(DETAILS)</span>
              </div>
              
              <div className="flex items-center justify-between py-5 border-b border-[#F3F4F6]/20">
                <span className="opacity-90">Type</span>
                <span className="opacity-90">Rebrand</span>
              </div>
              
              <div className="flex items-center justify-between py-5 border-b border-[#F3F4F6]/20">
                <span className="opacity-90">Year</span>
                <span className="opacity-90">2024</span>
              </div>
              
              <div className="flex items-center justify-between py-5 border-b border-[#F3F4F6]/20">
                <span className="opacity-90">Country</span>
                <span className="opacity-90">Perú</span>
              </div>
              
              <div className="flex items-center justify-between py-5 border-b border-[#F3F4F6]/20">
                <span className="opacity-90">Sources</span>
                <span className="opacity-90 text-right">Graphic Design, Social Media</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* IMAGE GRID */}
      {/* Full width container, small gaps */}
      <section className="w-full flex flex-col gap-2 sm:gap-4 px-2 sm:px-4">
        
        {/* Row 1: Full width gradient */}
        <div className={`w-full aspect-[21/9] sm:aspect-[24/9] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
          <img 
            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2500&auto=format&fit=crop" 
            alt="Umana Gradient" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

        {/* Row 2: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          <div className={`w-full aspect-[4/3] md:aspect-auto md:h-full ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
              alt="Business Cards" 
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
          <div className={`w-full aspect-[4/3] md:aspect-auto md:h-full ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
            <img 
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop" 
              alt="Gradient Shape" 
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 3: Full width Stationery */}
        <div className={`w-full aspect-[16/9] sm:aspect-[21/9] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" 
            alt="Stationery Mockup" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

        {/* Row 4: Full width Blueprints */}
        <div className={`w-full aspect-[16/9] sm:aspect-[21/9] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2500&auto=format&fit=crop" 
            alt="Blueprints and Tube" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

        {/* Row 5: Full width Characters (Placeholder) */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-[#dfdfdf] overflow-hidden flex items-center justify-center p-12 sm:p-24">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2500&auto=format&fit=crop" 
            alt="Characters Illustration" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

        {/* Row 6: Full width Poster */}
        <div className={`w-full aspect-[16/9] sm:aspect-[21/9] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2500&auto=format&fit=crop" 
            alt="Poster Mockup" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

        {/* Row 7: 2 columns, Right is split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
          <div className={`w-full aspect-[4/3] md:aspect-auto md:h-full ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" 
              alt="Laptop Mockup" 
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
          <div className="grid grid-rows-2 gap-2 sm:gap-4">
            <div className={`w-full aspect-[4/3] md:aspect-auto md:h-full ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                alt="Concrete Ceiling" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
                loading="lazy"
              />
            </div>
            <div className={`w-full aspect-[4/3] md:aspect-auto md:h-full ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                alt="Concrete Facade" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Row 8: 3 columns (Mobiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className={`w-full aspect-[9/16] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden p-8 sm:p-12 lg:p-20 flex items-center justify-center`}>
             <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop" 
              alt="Mobile Screen 1" 
              className="w-full h-full object-cover rounded-[2rem] border-[8px] border-[#222] shadow-2xl hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
          <div className={`w-full aspect-[9/16] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden p-8 sm:p-12 lg:p-20 flex items-center justify-center`}>
             <img 
              src="https://images.unsplash.com/photo-1541888087401-26b2b52d9b62?q=80&w=800&auto=format&fit=crop" 
              alt="Mobile Screen 2" 
              className="w-full h-full object-cover rounded-[2rem] border-[8px] border-[#222] shadow-2xl hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
          <div className={`w-full aspect-[9/16] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden p-8 sm:p-12 lg:p-20 flex items-center justify-center`}>
             <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" 
              alt="Mobile Screen 3" 
              className="w-full h-full object-cover rounded-[2rem] border-[8px] border-[#222] shadow-2xl hover:scale-[1.02] transition-transform duration-700" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 9: Full width construction banner */}
        <div className={`w-full aspect-[21/9] sm:aspect-[24/9] ${theme === "dark" ? "bg-[#111]" : "bg-white"} overflow-hidden`}>
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2500&auto=format&fit=crop" 
            alt="Construction Banner" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            loading="lazy"
          />
        </div>

      </section>
    </div>
  );
};
