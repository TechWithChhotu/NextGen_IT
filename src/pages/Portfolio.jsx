import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

const portfolioData = [
  {
    id: "01",
    title: "E-Commerce Transformation for Local Retail Chain",
    category: "web-development",
    client: "Bihar Bazar Mart",
    challenge:
      "Traditional brick-and-mortar retail facing zero digital presence.",
    solution:
      "Engineered a headless dynamic Next.js e-commerce platform with a lightweight MERN backend.",
    result: "+218% Online Orders",
    tech: ["Next.js", "Node.js", "MongoDB"],
    tag: "WEB DEVELOPMENT",
  },
  {
    id: "02",
    title: "Hyperlocal Delivery Android & iOS Application",
    category: "app-development",
    client: "ZipGhar Delivery",
    challenge: "High customer churn due to lags and crashes in previous app.",
    solution:
      "Rebuilt mobile architecture from scratch using a React Native fluid UI layer.",
    result: "1,200+ Daily Deliveries",
    tech: ["React Native", "Firebase", "Maps API"],
    tag: "APP DEVELOPMENT",
  },
  {
    id: "03",
    title: "Local SEO Engine for Multispecialty Healthcare",
    category: "digital-marketing",
    client: "Arogya Care Clinic",
    challenge: "Zero organic inquiries and heavy reliance on offline banners.",
    solution:
      "Executed a targeted Local SEO blueprint focusing on regional search trends.",
    result: "Ranked #1 on Maps",
    tech: ["Technical SEO", "GA4", "Citations"],
    tag: "SEO & MARKETING",
  },
  {
    id: "04",
    title: "Mathematical Grid Logo & Brand Identity System",
    category: "logo-design",
    client: "Aura Tech Labs",
    challenge: "Old, pixelated clip-art logo failing trademark parameters.",
    solution:
      "Developed a geometric vector logo system based on golden ratio grids.",
    result: "100% Trademark Signoff",
    tech: ["Figma", "Illustrator", "Geometry"],
    tag: "LOGO BRANDING",
  },
  {
    id: "05",
    title: "Complete Visual Identity & Product Packaging",
    category: "graphic-design",
    client: "Vedic Roots Agro",
    challenge:
      "Cluttered layouts and inconsistent presentation across packaging.",
    solution:
      "Designed a corporate visual layout system and print-ready retail templates.",
    result: "Premium Brand Launch",
    tech: ["Figma", "Vector Assets", "Layouts"],
    tag: "GRAPHIC DESIGN",
  },
  {
    id: "06",
    title: "High-Retention Video Campaign for EdTech Platform",
    category: "video-editing",
    client: "SkillUp Academy",
    challenge:
      "Massive user drop-offs within the first 3 seconds of video ads.",
    solution:
      "Produced commercial reels utilizing strict psychological hook-engineering.",
    result: "+68% Watch-Time Boost",
    tech: ["Premiere Pro", "After Effects", "Sound Design"],
    tag: "VIDEO PRODUCTION",
  },
];

const categories = [
  { slug: "all", name: "All Case Studies" },
  { slug: "web-development", name: "Web Dev" },
  { slug: "app-development", name: "App Dev" },
  { slug: "digital-marketing", name: "SEO & Marketing" },
  { slug: "logo-design", name: "Logo Branding" },
  { slug: "graphic-design", name: "Graphic Design" },
  { slug: "video-editing", name: "Video Production" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white text-slate-950 min-h-screen font-sans selection:bg-[#2563eb] selection:text-white">
      {/* 🚀 SEO METADATA BLOCK */}
      <Helmet>
        <title>
          Our Portfolio & Success Case Studies | NextGen IT Sheikhpura
        </title>
        <meta
          name="description"
          content="Explore real performance case studies by NextGen IT in Bihar. See how our web development, custom mobile apps, and strategic Local SEO campaigns drive measurable growth."
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
            • PROVEN SYSTEMS ONLY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl">
            Real businesses.{" "}
            <span className="text-[#2563eb]">Real outcomes.</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Hum template-ready layouts use nahi karte. Zero-fluff engineering
            blocks jo seedhe conversion rates aur business revenue scale
            generate karte hain.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: PORTFOLIO ARCHITECTURE GRID (CRISP CANVAS - 60% LIGHT) ── */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          {/* Minimalist Filter Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded transition-all duration-200 shrink-0 ${
                  activeFilter === cat.slug
                    ? "bg-[#2563eb] text-white shadow-md"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* The Completely Redesigned High-End Cyber Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredItems.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-slate-400 hover:shadow-xl"
              >
                {/* Visual Anchors: Serial Number & Accent line */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded tracking-wider">
                    // {project.tag}
                  </span>
                  <span className="text-3xl font-black font-mono text-slate-200 tracking-tighter transition-colors duration-300 group-hover:text-blue-100">
                    {project.id}
                  </span>
                </div>

                {/* Core Typographic Data Area */}
                <div className="space-y-4">
                  <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight leading-snug min-h-[56px] group-hover:text-[#2563eb] transition-colors duration-200">
                    {project.title}
                  </h2>

                  <div className="text-xs font-semibold text-slate-400">
                    Client:{" "}
                    <span className="text-slate-700 font-bold">
                      {project.client}
                    </span>
                  </div>

                  {/* Clean, Non-Boring Solution Preview Line */}
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed border-l-2 border-slate-200 pl-3">
                    {project.solution}
                  </p>
                </div>

                {/* Highly Scaled Hard Metrics & Action Trigger Footers */}
                <div className="mt-8 pt-5 border-t border-slate-100 space-y-5">
                  <div className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-lg p-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      OUTCOME:
                    </span>
                    <span className="text-xs font-black text-green-600 font-mono tracking-tight bg-green-50 px-2 py-0.5 rounded">
                      {project.result}
                    </span>
                  </div>

                  {/* Dynamic Interactive Action Row with exact 10% Accent Blueprint */}
                  <div className="flex items-center justify-between">
                    {/* View Service Link matching image vertical styles */}
                    <Link
                      to={`/service/${project.category}`}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 hover:text-[#2563eb] inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      View Service
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200 text-[#2563eb]">
                        &rarr;
                      </span>
                    </Link>

                    {/* Technical Badges Stack */}
                    <span className="text-[9px] font-mono font-bold text-slate-400 border border-slate-200 px-2 py-0.5 bg-white rounded shadow-sm">
                      {project.tech[0]} +
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BOTTOM INTERACTION CTA (DEEP MIDNIGHT - 60% DARK) ── */}
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
              LET'S COLLABORATE
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none">
              Have a brilliant idea? <br />
              <span className="text-[#2563eb] inline-block mt-2">
                Let's build it together.
              </span>
            </h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Agar aap apne business ke liye ek high-performance custom website
              ya application framework plan kar rahe hain, let's talk stats
              today.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <HashLink
                smooth
                to="/#contact"
                className="bg-[#2563eb] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-md hover:bg-blue-700 transition-all"
              >
                Start Your Project
              </HashLink>
              <a
                href="tel:+918229084288"
                className="border border-slate-800 bg-slate-900/50 text-slate-300 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-slate-900 transition-all"
              >
                Talk To Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
