import React from "react";

const CTASection = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-24 border-t border-[#E5E7EB]">
      {/* Main Container Layer utilizing clean brand guidelines */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE: Sharp Punchy Copy (No out-of-palette text utilities) */}
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#21C4FF]/10 border border-[#21C4FF]/30 px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest text-[#0A2E86] uppercase font-bold">
            Let's Collaborate with Tech Solex
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A1A]">
            Have a brilliant idea? <br />
            <span className="text-[#0A2E86]">Let's build it together.</span>
          </h2>
          <p className="text-[#666666] text-xs md:text-sm leading-relaxed">
            Agar aap apne business ke liye ek high-performance custom website,
            web application, ya responsive mobile app plan kar rahe hain, toh
            Tech Solex aapka ideal technology partner hai. No templates, purely
            clean code software engineering from scratch designed for growth in
            Bihar & beyond.
          </p>
        </div>

        {/* RIGHT SIDE: Action Buttons adhering strictly to your schema */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 shrink-0">
          {/* Main Action Button using Tech Solex Navy */}
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#0A2E86] text-white font-black px-8 py-4 rounded-sm text-xs uppercase tracking-wider transition-opacity duration-300 hover:opacity-90 text-center shadow-sm"
          >
            Start Your Project
          </a>

          {/* Secondary Action Button using Borders & Cyan Icon Graphic */}
          <a
            href="tel:+918229084288"
            className="w-full sm:w-auto bg-[#FFFFFF] border border-[#E5E7EB] text-[#1A1A1A] font-bold px-8 py-4 rounded-sm text-xs transition-colors duration-300 hover:bg-[#E5E7EB]/30 text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-3.5 h-3.5 text-[#21C4FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Talk To Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
