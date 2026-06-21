import { Globe, Smartphone, TrendingUp, Palette, Video } from "lucide-react";

export default function HeroBrandCard({ logo, wordmark, sheikhpuraImage }) {
  return (
    <div className="relative flex items-center justify-center w-[500px] h-[500px] select-none">
      {/* Background Radial Ambient Glow */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-blue-600/25 blur-[100px] pointer-events-none" />

      {/* Outer Rotating Dash Ring Line Track */}
      <div className="absolute w-[440px] h-[440px] rounded-full border-[4px] border-dashed border-blue-500/30 animate-[spin_40s_linear_infinite]" />

      {/* Inner Ring */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-blue-400/10" />

      {/* 3 Orbit Dots - Mathematically Locked directly onto the circle line track */}
      <div className="absolute w-[440px] h-[440px] animate-[spin_25s_linear_infinite] pointer-events-none">
        {/* Dot 1: Top-Right Position */}
        <div className="absolute inset-0 rotate-[55deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6,0_0_5px_#3b82f6]" />
        </div>

        {/* Dot 2: Top-Left Position */}
        <div className="absolute inset-0 rotate-[-65deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6,0_0_5px_#3b82f6]" />
        </div>

        {/* Dot 3: Bottom-Right Position */}
        <div className="absolute inset-0 rotate-[145deg]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee,0_0_5px_#22d3ee]" />
        </div>
      </div>

      {/* Main Premium Card Container */}
      <div
        className="
          relative
          w-[265px]
          h-[345px]
          rounded-[36px]
          overflow-hidden
          border border-blue-500/20
          bg-gradient-to-b from-white via-slate-50 to-slate-100
          rotate-[-6deg]
          hover:rotate-0
          hover:scale-[1.02]
          transition-all
          duration-700
          ease-out
          shadow-[0_25px_65px_rgba(0,27,94,0.30),inset_0_2px_4px_rgba(255,255,255,0.6)]
          group
          cursor-pointer
        "
      >
        {/* Decorative Blue Top Corner Design Overlay */}
        <div
          className="
            absolute
            top-0
            left-0
            w-[100px]
            h-[50px]
            bg-gradient-to-r from-blue-600 to-blue-400
            rounded-br-[80px]
            opacity-95
            z-10
          "
        />

        {/* Glossy Glass Surface Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-20" />

        {/* Top Branding Section */}
        <div className="relative z-30 flex flex-col items-center pt-3.5 text-center px-4">
          {/* Main Logo Icon Mark */}
          <div className="h-12 flex items-center justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            <img
              src={logo}
              alt="NextGen Logo"
              className="w-11 h-auto object-contain animate-bounce"
              style={{ animationDuration: "3.5s" }}
            />
          </div>

          {/* Full Named Wordmark Logo */}
          <img
            src={wordmark}
            alt="NextGen IT Solutions"
            className="w-40 mt-0.5 object-contain"
          />

          {/* Slogan Identity Tagline */}
          <p className="text-[8.5px] font-semibold text-slate-400 tracking-wider mt-0.5">
            Your growth, our commitment
          </p>
        </div>

        {/* High-End Image Layer with Dual-Masking */}
        <div className="absolute top-[142px] bottom-[52px] inset-x-0 overflow-hidden pointer-events-none">
          <img
            src={sheikhpuraImage}
            alt="Sheikhpura Landscape"
            className="w-full h-full object-cover opacity-100 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Top Soft Edge Feather Blend */}
          <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />

          {/* Bottom Deep Vignette Blend */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#001B5E] via-[#001B5E]/75 to-transparent z-10" />
        </div>

        {/* Regional Metadata Info */}
        <div className="absolute bottom-[62px] left-0 right-0 z-30 text-center pointer-events-none">
          <p className="text-white text-[11px] font-black tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center gap-1">
            <span className="text-xs">📍</span> SHEIKHPURA, BIHAR
          </p>
          <p className="text-cyan-300 text-[7.5px] font-black tracking-[0.24em] uppercase mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            LOCAL ROOTS. DIGITAL GROWTH.
          </p>
        </div>

        {/* Solid Dark Blue Panel for Services Footer Track */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[52px]
            bg-[#001B5E]
            border-t border-white/10
            flex
            items-center
            z-30
          "
        >
          <div className="grid grid-cols-5 w-full px-4 items-center">
            <div className="flex justify-center hover:text-cyan-300 transition-colors">
              <Globe className="w-4 h-4 text-white/90" strokeWidth={2.2} />
            </div>
            <div className="flex justify-center hover:text-cyan-300 transition-colors">
              <Smartphone className="w-4 h-4 text-white/90" strokeWidth={2.2} />
            </div>
            <div className="flex justify-center hover:text-cyan-300 transition-colors">
              <TrendingUp className="w-4 h-4 text-white/90" strokeWidth={2.2} />
            </div>
            <div className="flex justify-center hover:text-cyan-300 transition-colors">
              <Palette className="w-4 h-4 text-white/90" strokeWidth={2.2} />
            </div>
            <div className="flex justify-center hover:text-cyan-300 transition-colors">
              <Video className="w-4 h-4 text-white/90" strokeWidth={2.2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
