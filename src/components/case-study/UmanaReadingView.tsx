import React from 'react';

export const UmanaReadingView = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    '/src/assets/images/umana_powder_cube_1788889215309.jpg',
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
  ];

  return (
    <section className={`w-full transition-colors duration-500 ${theme === "dark" ? "bg-[#0a0a0a] text-[#F3F4F6]" : "bg-[#f5f5f5] text-[#111111]"} px-4 sm:px-8 md:px-12 lg:px-16 pb-20 lg:pb-32 pt-10`}>
      <div className="max-w-[1800px] mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-24 xl:gap-32">

        {/* COLUMNA IZQUIERDA: Galería de imágenes (hace scroll natural) */}
        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col gap-2 sm:gap-4">
          {images.map((src, idx) => (
            <div key={idx} className={`w-full relative overflow-hidden transition-colors duration-500 ${theme === "dark" ? "bg-[#111]" : "bg-white"} group`}>
              <img
                src={src}
                alt={`Umana project frame ${idx + 1}`}
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* COLUMNA DERECHA: Información Textual (Sticky) */}
        <div className="w-full md:w-[50%] lg:w-[55%] relative">
          {/* El sticky se activa a partir del header */}
          <div className="sticky top-40 flex flex-col gap-12 max-w-[700px]">
            
            <div className="flex flex-col gap-6">
              <div className={`text-sm font-light ${theme === "dark" ? "text-[#F3F4F6]" : "text-[#111]"} leading-relaxed opacity-90`}>
                (01)<br />
                Project<br />
                Overview
              </div>
              
              <h2 className={`text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[400] tracking-tight leading-[1.15] ${theme === "dark" ? "text-[#F3F4F6]" : "text-[#111]"}`}>
                Umana's is focused on creating a warm, and people-centered brand that reflects their unique philosophy and approach to architecture and design.
              </h2>
              
              <div className={`flex flex-col gap-6 text-[0.95rem] sm:text-[1.05rem] ${theme === "dark" ? "text-[#D1D5DB]" : "text-[#444]"} font-light leading-[1.6]`}>
                <p>
                  The challenge lay in effectively translating their philosophy, and design approach into a visually cohesive and engaging brand identity that resonated with their target audience while maintaining a focus on people and their interactions within spaces.
                </p>
                <p>
                  Our concept for Umana is based on the way that heat cameras capture the movement and behavior of people in spaces, which has allowed us to show their design approach that prioritize functionality and human interaction.
                </p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="flex flex-col text-[0.95rem]">
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
                <span className="opacity-90 text-right">Illustration, Graphic Design</span>
              </div>
            </div>

            {/* Long Text Block */}
            <div className={`flex flex-col gap-8 text-[0.95rem] sm:text-[1.05rem] ${theme === "dark" ? "text-[#D1D5DB]" : "text-[#444]"} font-light leading-[1.6] pt-4 pb-20`}>
              <p>
                As experts in their field, they understand the vast range of chemical products available in the construction industry, each with its unique properties, their differentiating factor lies in their unwavering commitment to using the finest materials, adhering to stringent quality standards, and fostering strong client relationships based on trust and reliability. These principles form the bedrock of their brand, distinguishing them as a reliable and respected partner.
              </p>
              
              <p>
                As experts in their field, they understand the vast range of chemical products available in the construction industry, each with its unique properties, their differentiating factor lies in their unwavering commitment to using the finest materials, adhering to stringent quality standards, and fostering strong client relationships based on trust and reliability. These principles form the bedrock of their brand, distinguishing them as a reliable and respected partner.
              </p>

              <p>
                Collaborating closely with the Teclab team, we embarked on a comprehensive rebranding process to bring their image into the modern age. Guided by their vision, we crafted a refreshed logo and iconography, incorporating the essence of Teclab's rich heritage while infusing it with a contemporary touch. Drawing inspiration from the strength and durability found in engineering and architecture, we employed angled elements that resonate with stability and resilience. Embracing the layers and composition of flooring materials, we created dynamic patterns that span various applications. Complemented by a sophisticated typographic style and clean illustrations reminiscent of architectural plans and precise line drawings, the overall brand system exudes a sense of structure, modernity, and innovation.
              </p>

              <p>
                The result is a brand that stands confidently in the present, honoring its roots while embracing the possibilities of the future. Teclab's reimagined identity positions them as a forward-thinking industry leader, ready to take on new challenges and excel in today's ever-changing business landscape. Teclab's successful rebranding journey is a testament to their adaptability and commitment to staying at the forefront of the industry. Their unwavering dedication to delivering the highest standards of quality, customer commitment, and innovative solutions ensures that they remain a trusted partner for corporations seeking excellence in housing and construction.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
