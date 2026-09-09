import sys

with open('App.tsx', 'r') as f:
    content = f.read()

target_anchor = "  return (\n    <div ref={mainContainerRef}"

new_view = """  if (currentView === 'work-with-us') {
    return (
      <div className="w-full min-h-screen flex flex-col justify-between bg-[#F4F4F4] text-black font-sans selection:bg-black selection:text-white">
        {/* HEADER (NAVBAR) */}
        <MainNav currentView={currentView} setCurrentView={setCurrentView} bgColor="bg-[#F4F4F4]" />

        {/* HERO TITLE MARQUEE */}
        <div className="w-full overflow-hidden py-10 sm:py-16 select-none bg-[#F4F4F4]">
          <div className="flex items-center justify-center whitespace-nowrap w-max mx-auto -ml-[20vw] md:-ml-[10vw]">
            <span className="text-[14vw] font-black uppercase tracking-tighter leading-none">WORK WITH US</span>
            <DynamicIsotype className="mx-6 sm:mx-10 w-[8vw] h-[8vw] min-w-[50px] min-h-[50px]" />
            <span className="text-[14vw] font-black uppercase tracking-tighter leading-none">WORK WITH US</span>
            <DynamicIsotype className="mx-6 sm:mx-10 w-[8vw] h-[8vw] min-w-[50px] min-h-[50px]" />
            <span className="text-[14vw] font-black uppercase tracking-tighter leading-none">WORK WITH US</span>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 pb-24 md:pb-32">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight max-w-[800px] mb-16 md:mb-24">
            Fill out the contact form below and tell us about your vision for the project.
          </h2>

          <div className="w-full border-b border-[#D4D4D4] pb-4 flex justify-between items-end mb-12">
            <span className="text-sm sm:text-base font-medium">Lets work together ↓</span>
            <div className="flex gap-6 sm:gap-10 text-sm sm:text-base font-bold">
              <a href="#press" className="hover:opacity-60 transition-opacity">Press</a>
              <a href="#careers" className="hover:opacity-60 transition-opacity">Carreers</a>
            </div>
          </div>

          <form className="w-full flex flex-col gap-8 md:gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-medium">First Name:*</label>
                <input type="text" placeholder="Your first name" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-medium">Last Name:*</label>
                <input type="text" placeholder="Your last name" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-medium">Company Name:*</label>
                <input type="text" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm sm:text-base font-medium">Your Company Email:*</label>
                <input type="email" placeholder="example@domain.com" className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm sm:text-base font-medium">Tell us about the project (Timeline,Budget):*</label>
              <textarea rows={5} className="w-full bg-transparent border border-[#D4D4D4] rounded-sm px-5 py-4 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-5 h-5 rounded-full bg-black shrink-0 border-2 border-black flex items-center justify-center cursor-pointer">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              </div>
              <span className="text-sm sm:text-base font-medium">Yes, sign me up to newsletter</span>
            </div>

            <div className="mt-4">
              <button type="submit" className="bg-[#111] hover:bg-black text-white px-12 py-4 rounded-full font-medium transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* PRESS SECTION */}
        <div id="press" className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-[#E2E2E2] rounded-sm"></div>
          <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
            <h3 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight">
              Are you a journalist<br />with a media or press<br />opportunity?
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[400px]">
              Giancarlo Morales love contributing to news, articles, and stories about entrepreneurship, business, branding, culture, leadership, and vision. They've been featured in NY Post, Inc., Fast Company, WSJ, and many more.
            </p>
            <a href="mailto:press@henribarrett.com" className="text-sm md:text-base font-medium underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity">
              Send an Email
            </a>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="w-full max-w-[1250px] mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-32 md:pb-40">
          <h2 className="text-[12vw] sm:text-[8rem] md:text-[10rem] font-medium leading-none tracking-tighter mb-16 md:mb-24 uppercase">
            CONTACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-medium tracking-tight">Location</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                Henri Barrett Lima<br />
                Av. Pethit Thoars 264, Miraflores
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-medium tracking-tight">Keynote Speaking</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                Want Luis Tateishi and Oswaldo Pescador to speak at your next event or be panelists for topics on business, brand, or culture?
              </p>
              <a href="mailto:speaking@henribarrett.com" className="text-sm font-medium underline underline-offset-4 decoration-1 mt-2 hover:opacity-60 transition-opacity">
                Send an Email
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl md:text-2xl font-medium tracking-tight">Careers</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                We're always looking for talent to join our team. Apply now.
              </p>
              <a href="#careers" className="text-sm font-medium underline underline-offset-4 decoration-1 mt-2 hover:opacity-60 transition-opacity">
                See open positions
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }

"""

if target_anchor in content:
    content = content.replace(target_anchor, new_view + target_anchor)
    with open('App.tsx', 'w') as f:
        f.write(content)
    print("Injected successfully.")
else:
    print("Anchor not found.")
