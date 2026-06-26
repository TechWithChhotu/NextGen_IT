import React from "react";
import { Globe, Smartphone, TrendingUp, Palette, Video } from "lucide-react";

export default function HeroBrandCard({ logo, wordmark, sheikhpuraImage }) {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px] select-none">
      {/* Background Radial Ambient Glow - Light & Subtle [60% Palette Background] */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[#0A2E86]/5 blur-[80px] pointer-events-none" />

      {/* Outer Rotating Dash Ring Line Track [30% Structural Element] */}
      <div className="absolute w-[440px] h-[440px] rounded-full border-[2px] border-dashed border-[#0A2E86]/20 animate-[spin_60s_linear_infinite]" />

      {/* Inner Ring */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-[#0A2E86]/10" />

      {/* 3 Orbit Dots - [10% Accent Highlights] */}
      <div className="absolute w-[440px] h-[440px] animate-[spin_30s_linear_infinite] pointer-events-none">
        {/* Dot 1: Top-Right */}
        <div className="absolute inset-0 rotate-[45deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#21C4FF] shadow-[0_0_12px_#21C4FF]" />
        </div>
        {/* Dot 2: Top-Left */}
        <div className="absolute inset-0 rotate-[-45deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0A2E86]" />
        </div>
        {/* Dot 3: Bottom */}
        <div className="absolute inset-0 rotate-[180deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#21C4FF] shadow-[0_0_12px_#21C4FF]" />
        </div>
      </div>

      {/* Main Premium Card Container [60% Dominant Pure White Body] */}
      <div
        className="
          relative
          w-[270px]
          h-[355px]
          rounded-[32px]
          overflow-hidden
          border border-slate-200/80
          bg-white
          rotate-[-4deg]
          hover:rotate-0
          hover:scale-[1.03]
          transition-all
          duration-500
          ease-out
          shadow-[0_20px_50px_rgba(10,46,134,0.12),0_1px_3px_rgba(0,0,0,0.05)]
          group
          cursor-pointer
        "
      >
        {/* Minimalist Top Left Accent Bar [10% Accent] */}
        <div className="absolute top-0 left-0 w-[40px] h-[4px] bg-[#21C4FF] z-40" />

        {/* Top Branding Section (60% White Surface Area with 30% Dark Typography) */}
        <div className="relative z-30 flex flex-col items-center pt-5 text-center px-4">
          {/* Main Logo Icon Mark */}
          <div className="h-11 flex items-center justify-center">
            <img
              src={logo}
              alt="TechSolex Logo"
              className="w-16 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Full Named Wordmark Logo [30% Navy Accent for contrast] */}
          {/* Slogan Identity Tagline */}
          <div className="flex justify-center items-center w-full mt-3">
            <p className="text-[8px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-1.5">
              Technology
              <span className="text-[#0068fc] font-black text-[10px] select-none">
                •
              </span>
              Solutions
              <span className="text-[#0068fc] font-black text-[10px] select-none">
                •
              </span>
              Excellence
            </p>
          </div>
        </div>

        {/* High-End Image Layer with Seamless Soft Masking */}
        {/* High-End Image Layer with Seamless Soft Masking */}
        <div className="absolute top-[100px] bottom-[54px] inset-x-0 overflow-hidden pointer-events-none">
          <img
            src={sheikhpuraImage}
            alt="Sheikhpura Landscape"
            className="w-full h-full object-cover opacity-95 transition-all duration-700 ease-out
               group-hover:opacity-100 group-hover:scale-105"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          />
        </div>

        {/* Regional Metadata Layer (High Contrast White Overlay) */}
        <div className="absolute bottom-[66px] left-0 right-0 z-30 text-center pointer-events-none">
          <p className="text-white text-[10px] font-extrabold tracking-wide  flex items-center justify-center gap-1">
            <span>📍</span> SHEIKHPURA, BIHAR
          </p>
          {/* <p className="text-[#0068fc] text-[7.5px] font-black tracking-[0.2em] uppercase mt-0.5 ">
            LOCAL ROOTS. DIGITAL GROWTH.
          </p> */}
        </div>

        {/* Solid Deep Blue Footer Panel [30% Component Layout] */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[54px]
            bg-[#0A2E86]
            flex
            items-center
            z-30
          "
        >
          {/* Icons Grid with 10% Accent Pop on Hover */}
          <div className="grid grid-cols-5 w-full px-5 items-center">
            <div className="flex justify-center text-white/70 hover:text-[#21C4FF] transition-colors duration-300">
              <Globe className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="flex justify-center text-white/70 hover:text-[#21C4FF] transition-colors duration-300">
              <Smartphone className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="flex justify-center text-white/70 hover:text-[#21C4FF] transition-colors duration-300">
              <TrendingUp className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="flex justify-center text-white/70 hover:text-[#21C4FF] transition-colors duration-300">
              <Palette className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="flex justify-center text-white/70 hover:text-[#21C4FF] transition-colors duration-300">
              <Video className="w-4 h-4" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
