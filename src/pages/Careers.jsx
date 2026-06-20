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
    <div className="bg-white text-slate-950 min-h-screen font-sans selection:bg-[#2563eb] selection:text-white">
      {/* 🚀 SEO METADATA BLOCK */}
      <Helmet>
        <title>Careers & Tech Job Opportunities | NextGen IT Sheikhpura</title>
        <meta
          name="description"
          content="Build your technical engineering and creative career in Bihar with NextGen IT. Explore active job openings for React developers, designers, and SEO experts."
        />
        <meta
          property="og:title"
          content="Careers & Technical Openings | NextGen IT Sheikhpura"
        />
        <meta
          property="og:description"
          content="Join the technical collective in Bihar. Apply for MERN developers, UI/UX graphic designers, and performance SEO job profiles."
        />
      </Helmet>

      {/* ── SECTION 1: HERO (DEEP MIDNIGHT - 60% MAIN DARK) ── */}
      <section className="w-full bg-[#020921] text-white relative overflow-hidden border-b border-slate-900">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563eb] block mb-3">
            • JOIN THE TECH COLLECTIVE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl">
            Build the Next Generation of{" "}
            <span className="text-[#2563eb]">Software Infrastructure.</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Hum Sheikhpura se baith kar high-performance software engineering,
            premium vector design assets, aur data-driven marketing frameworks
            par kaam karte hain. No templates allowed.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: OPEN POSITIONS GRID (CRISP CANVAS - 60% LIGHT) ── */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="mb-12 border-b border-slate-100 pb-6">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              // LIVE OPPORTUNITIES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-1">
              Active Engineering & Creative Profiles
            </h2>
          </div>

          {/* Premium Non-Boring Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openJobs.map((job) => (
              <article
                key={job.id}
                className="group flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-slate-400 hover:shadow-xl"
              >
                {/* Top Metarow with Dynamic Numbering Anchors */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded tracking-wider">
                    // {job.category}
                  </span>
                  <span className="text-3xl font-black font-mono text-slate-200 tracking-tighter transition-colors duration-300 group-hover:text-blue-100">
                    {job.id}
                  </span>
                </div>

                {/* Core Role Title & Structural Details */}
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight leading-snug min-h-[56px] group-hover:text-[#2563eb] transition-colors duration-200">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-slate-400 font-mono">
                    <span>⏱️ {job.type}</span>
                    <span>💼 {job.experience}</span>
                  </div>

                  {/* High-Speed Solution/Summary Line */}
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed border-l-2 border-slate-200 pl-3">
                    {job.summary}
                  </p>
                </div>

                {/* Bottom Incentive Band & Link Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 space-y-5">
                  <div className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-lg p-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      CORE BENEFIT:
                    </span>
                    <span className="text-[11px] font-black text-green-600 font-mono tracking-tight bg-green-50 px-2 py-0.5 rounded">
                      {job.perk}
                    </span>
                  </div>

                  {/* Smooth Navigation Interaction */}
                  <div className="flex items-center justify-between">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 hover:text-[#2563eb] inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      Apply For Role
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200 text-[#2563eb]">
                        &rarr;
                      </span>
                    </HashLink>

                    <span className="text-[9px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 bg-white rounded shadow-sm">
                      NextGen IT
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BOTTOM CTA (DEEP MIDNIGHT - 60% MAIN DARK) ── */}
      <section className="w-full bg-[#020921] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563eb]">
              DIRECT APPLICATION
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
              Aapka skill-set upar listed <br />
              <span className="text-[#2563eb] inline-block mt-2">
                roles se match nahi karta?
              </span>
            </h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Don't worry. If you have experience in solid logic building,
              execution speed, or exceptional product engineering frameworks,
              then share your profile with us.
            </p>
            <div className="pt-4">
              <HashLink
                smooth
                to="/#contact"
                className="bg-[#2563eb] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-md hover:bg-blue-700 transition-all inline-block"
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
