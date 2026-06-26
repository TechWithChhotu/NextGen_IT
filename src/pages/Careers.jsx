import React from "react";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

const openJobs = [
  {
    id: "01",
    role: "MERN / Next.js Developer (Associate)",
    category: "ENGINEERING",
    type: "Full-Time / Hybrid",
    experience: "0 - 2 Years Experience",
    summary:
      "Hum template-free custom architectures build karte hain. Aapko real-world React, Next.js, and Node.js scale platforms deploy karne honge.",
    perk: "MERN Stack Scale & Code Reviews",
    slug: "mern-developer",
  },
  {
    id: "02",
    role: "UI/UX & Graphic Designer",
    category: "CREATIVE ASSETS",
    type: "Full-Time / Remote Friendly",
    experience: "1+ Years Portfolio Required",
    summary:
      "Corporate logo systems, vector branding assets, and complex system layout designs engineering using premium Figma prototypes.",
    perk: "Mathematical Grid Systems Mastery",
    slug: "uiux-designer",
  },
  {
    id: "03",
    role: "SEO & Digital Growth Executive",
    category: "PERFORMANCE MARKETING",
    type: "Full-Time / Sheikhpura Base",
    experience: "Entry Level to 2 Years",
    summary:
      "Local search engines algorithm optimize karna, technical SEO web vitals audits audit karna, aur conversion rate analytics map karna.",
    perk: "Core Web Vitals & GA4 Tracking",
    slug: "seo-executive",
  },
];

const Careers = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-[#0068fc] selection:text-white">
      {/* 🚀 SEO METADATA BLOCK */}
      <Helmet>
        <title>Careers & Tech Job Opportunities | TechSolex Sheikhpura</title>
        <meta
          name="description"
          content="Build your technical engineering and creative career in Bihar with TechSolex. Explore active job openings for React developers, designers, and SEO experts."
        />
        <meta
          property="og:title"
          content="Careers & Technical Openings | TechSolex Sheikhpura"
        />
        <meta
          property="og:description"
          content="Join the technical collective in Bihar. Apply for MERN developers, UI/UX graphic designers, and performance SEO job profiles."
        />
      </Helmet>

      {/* ── SECTION 1: HERO (LIGHT SKY & ACCENTED CANVAS - MATCHING IMAGE HERO) ── */}
      <section className="w-full bg-gradient-to-b from-[#eef7ff] via-[#f6faff] to-white text-slate-900 relative overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0068fc] block mb-4">
            • JOIN THE TECH COLLECTIVE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl text-[#001c55]">
            Build the Next Generation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068fc] to-cyan-500">
              Software Infrastructure.
            </span>
          </h1>
          <p className="mt-6 text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
            Hum Sheikhpura se baith kar high-performance software engineering,
            premium vector design assets, aur data-driven marketing frameworks
            par kaam karte hain. No templates allowed.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: OPEN POSITIONS GRID (CRISP WHITE CANVAS) ── */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
          <div className="mb-14 border-b border-slate-100 pb-6">
            <span className="text-xs font-mono font-bold text-[#0068fc] uppercase tracking-widest">
              // LIVE OPPORTUNITIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#001c55] tracking-tight mt-1">
              Active Engineering & Creative Profiles
            </h2>
          </div>

          {/* Non-Boring Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openJobs.map((job) => (
              <article
                key={job.id}
                className="group flex flex-col justify-between p-7 bg-white border border-slate-200/80 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/80"
              >
                {/* Top Metarow with Dynamic Numbering Anchors */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono font-bold text-[#0068fc] bg-blue-50/80 px-2.5 py-1 rounded tracking-wider">
                    // {job.category}
                  </span>
                  <span className="text-3xl font-black font-mono text-slate-100 tracking-tighter transition-colors duration-300 group-hover:text-blue-50">
                    {job.id}
                  </span>
                </div>

                {/* Core Role Title & Structural Details */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-black text-[#001c55] tracking-tight leading-snug min-h-[56px] group-hover:text-[#0068fc] transition-colors duration-200">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-slate-400 font-mono">
                    <span>⏱️ {job.type}</span>
                    <span>💼 {job.experience}</span>
                  </div>

                  {/* High-Speed Solution/Summary Line */}
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed border-l-2 border-[#0068fc]/30 pl-3">
                    {job.summary}
                  </p>
                </div>

                {/* Bottom Incentive Band & Link Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 space-y-5">
                  <div className="flex justify-between items-center bg-slate-50/50 border border-slate-100 rounded-xl p-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      CORE BENEFIT:
                    </span>
                    <span className="text-[11px] font-black text-emerald-600 font-mono tracking-tight bg-emerald-50 px-2 py-0.5 rounded">
                      {job.perk}
                    </span>
                  </div>

                  {/* Smooth Navigation Interaction */}
                  <div className="flex items-center justify-between">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 hover:text-[#0068fc] inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      Apply For Role
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200 text-[#0068fc]">
                        &rarr;
                      </span>
                    </HashLink>

                    <span className="text-[9px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 bg-white rounded shadow-sm">
                      TechSolex
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BOTTOM CTA (CLEAN BLUE TINTED FRAME - MATCHING PROCESS FOOTER) ── */}
      <section className="w-full bg-[#f8fbfe] text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div
          className="absolute inset-0 opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0068fc]">
              DIRECT APPLICATION
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#001c55]">
              Aapka skill-set upar listed <br />
              <span className="text-[#0068fc] inline-block mt-1">
                roles se match nahi karta?
              </span>
            </h3>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-medium">
              Don't worry. If you have experience in solid logic building,
              execution speed, or exceptional product engineering frameworks,
              then share your profile with us.
            </p>
            <div className="pt-4">
              <HashLink
                smooth
                to="/#contact"
                className="bg-[#001c55] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-blue-900/10 hover:bg-[#0068fc] transition-all inline-block"
              >
                Drop Your Resume &rarr;
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
