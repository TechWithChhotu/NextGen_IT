import React from "react";

const AboutSection = () => {
  return (
    <section
      className="bg-[#f4f7fa] py-20 px-6 md:px-12 lg:px-24 text-slate-950 font-sans"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT BLOCK: Main About & Testimonial (Takes 7 Cols on Desktop) */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-slate-200/60 rounded-sm flex flex-col justify-between shadow-sm">
          <div>
            {/* Top Subtitle */}
            <span className="text-[11px] uppercase tracking-widest text-blue-600 font-extrabold block mb-4">
              — ABOUT NEXTGEN IT
            </span>

            {/* SEO Optimized Semantic Heading */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] mb-6">
              A digital studio built for the businesses{" "}
              <span className="text-blue-600">of tomorrow.</span>
            </h2>

            {/* Main Text Content with Local SEO Target Keywords */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
              Born in Sheikhpura, Bihar — built for businesses across India.
              NextGen IT Solutions is a modern digital partner helping startups,
              local shops, entrepreneurs and professionals leverage technology
              to grow faster through customized web apps and tailored{" "}
              <strong>On-Page SEO strategies</strong>.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8 mt-4">
            {/* Founder Testimonial Block */}
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Initials Avatar Box */}
              <div className="w-12 h-12 bg-[#001c55] text-white font-black text-lg flex items-center justify-center shrink-0 rounded-sm shadow-inner">
                C
              </div>
              <div className="space-y-4">
                {/* Quote Icon */}
                <span className="block text-blue-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>
                <blockquote className="text-slate-800 text-sm md:text-base font-medium italic leading-relaxed">
                  "We don't just deliver projects — we deliver outcomes. Every
                  website, app, brand and campaign we craft is a promise to fuel
                  your growth."
                </blockquote>
                <div>
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-wide">
                    Chhotu
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                    FOUNDER & OWNER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK: Grid Cards (Takes 5 Cols on Desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Top Blue Block: Our Vision */}
          <div className="relative bg-[#001c55] text-white p-8 md:p-10 rounded-sm overflow-hidden flex-1 shadow-md">
            {/* Blueprint Micro Grid overlay inside vision card as seen in image_752ebc.png */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: "25px 25px",
              }}
            />
            {/* Vision Icon */}
            <div className="mb-6 text-blue-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <span className="text-[10px] tracking-widest text-blue-300 font-extrabold uppercase block mb-3">
              OUR VISION
            </span>
            <h3 className="text-lg md:text-xl font-bold leading-relaxed max-w-md">
              To build a trusted digital solutions company that helps businesses
              grow through technology, branding & innovation.
            </h3>
          </div>

          {/* Middle Two Columns: Mission & Promise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="bg-white p-6 border border-slate-200/60 rounded-sm shadow-sm flex flex-col justify-between min-h-[160px]">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-slate-400 font-extrabold uppercase block mb-1">
                  MISSION
                </span>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Deliver quality, build trust, create long-term value.
                </p>
              </div>
            </div>

            {/* Promise Card */}
            <div className="bg-white p-6 border border-slate-200/60 rounded-sm shadow-sm flex flex-col justify-between min-h-[160px]">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-slate-400 font-extrabold uppercase block mb-1">
                  PROMISE
                </span>
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                  Your Growth, Our Commitment — every project, every time.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Cyan/Blue Block: Where We Serve */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 md:p-8 rounded-sm shadow-md">
            <span className="text-[10px] tracking-widest text-blue-100 font-extrabold uppercase block mb-2">
              WHERE WE SERVE
            </span>
            <h3 className="text-lg md:text-2xl font-black tracking-tight leading-snug mb-2">
              South Bihar • North India • Remote clients across India
            </h3>
            <p className="text-blue-100 text-xs font-medium">
              Based in Sheikhpura, Bihar, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
