import React from "react";

const CTASection = () => {
  return (
    <section className="relative bg-[#001c55] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* LEFT SIDE: Sharp Punchy Copy (No fluff, direct to point) */}
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest text-blue-400 uppercase">
            Let's Collaborate
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Have a brilliant idea? <br />
            <span className="text-blue-500">Let's build it together.</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Agar aap apne business ke liye ek high-performance custom website ya
            mobile app plan kar rahe hain, toh sahi jagah hain. No templates,
            purely clean code engineering from scratch.
          </p>
        </div>

        {/* RIGHT SIDE: Action Area with Dynamic Tech Vibe */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 shrink-0">
          {/* Main Action Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto bg-blue-600 text-white font-black px-8 py-4 rounded-sm text-xs uppercase tracking-wider hover:bg-blue-700 transition-all duration-300 text-center shadow-lg shadow-blue-600/10"
          >
            Start Your Project
          </a>

          {/* Secondary Direct Phone Button */}
          <a
            href="tel:+918229084288"
            className="w-full sm:w-auto bg-white/5 border border-white/10 text-slate-300 font-bold px-8 py-4 rounded-sm text-xs hover:bg-white/10 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
