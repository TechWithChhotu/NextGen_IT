import React from "react";

const HeroSection = () => {
  return (
    <header
      className="relative bg-[#00143d] text-white min-h-screen flex flex-col justify-between overflow-hidden"
      id="home"
    >
      {/* ON-PAGE SEO: Technical Blueprint Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glowing Tech Orbs for Modern Agency Aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex-grow flex items-center py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Block: Semantic SEO Headings & Keyword Targeted Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge from Brand Identity (IMG_20260615_130715.png) */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 font-mono">
                Your growth, our commitment
              </span>
            </div>

            {/* On-Page SEO Primary H1 Tag for Sheikhpura, Bihar Rankings */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              The Premier Tech & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Digital Agency
              </span>{" "}
              <br />
              in Sheikhpura, Bihar.
            </h1>

            {/* Semantic Target Keywords Paragraph */}
            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              Accelerate your digital footprint with{" "}
              <strong>NextGen IT Solutions</strong>. We engineer
              high-performance web development, custom software, and data-driven{" "}
              <strong>On-Page SEO optimization</strong> built specifically to
              dominate local search results.
            </p>

            {/* Interactive Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md shadow-xl shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="bg-slate-900/60 hover:bg-slate-900 text-slate-200 border border-slate-800 font-bold px-8 py-4 rounded-md transition-all duration-300 text-sm backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Micro Trust Indicators for On-Page SEO Authority */}
            <div className="pt-8 grid grid-cols-3 gap-4 max-w-md border-t border-white/5">
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  On-Page SEO
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">Top #1</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Local Ranking
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Expert Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Futuristic Visual Wrapper with Brand Icon Placement */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer rotating decorative dashes */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-cyan-500/10 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Brand Geometric Visual Node inspired by ChatGPT Image Jun 18, 2026, 08_54_58 AM.png */}
              <div className="w-56 h-56 bg-gradient-to-br from-blue-600 to-blue-950 rounded-2xl shadow-2xl shadow-blue-500/30 flex flex-col items-center justify-center border border-blue-400/30 transform rotate-12 hover:rotate-0 transition-transform duration-500 group cursor-pointer">
                <div className="transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 text-center p-6">
                  {/* Digital Growth Arrow Representation matching logo mark in IMG_20260615_130549.png */}
                  <svg
                    className="w-12 h-12 text-white mx-auto mb-3 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <p className="text-lg font-black tracking-tighter text-white">
                    NEXTGEN IT
                  </p>
                  <p className="text-[9px] font-bold text-cyan-300 tracking-widest uppercase mt-0.5">
                    BIHAR'S TECH LEADER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Border Ribbon */}
      <div className="w-full bg-[#000d29]/80 border-t border-white/5 py-4 relative z-10 text-center">
        <p className="text-[11px] tracking-wider text-slate-500 uppercase font-medium">
          Empowering Local Enterprises across Sheikhpura & Greater Bihar Region
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
