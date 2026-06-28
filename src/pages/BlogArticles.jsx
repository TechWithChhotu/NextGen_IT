import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

const blogArticles = [
  {
    id: "01",
    title:
      "Why Headless Commerce is the Future of Enterprise Retail Architecture",
    category: "engineering",
    slug: "headless-commerce-future-retail",
    date: "June 24, 2026",
    readTime: "5 min read",
    snippet:
      "Discover how separating your frontend layout from backend database logic using MERN and Next.js increases conversion speeds by 200%.",
    keywords: ["Next.js", "Headless Commerce", "MERN Stack Architecture"],
  },
  {
    id: "02",
    title:
      "Mastering Core Web Vitals: Optimizing INP and LCP for Local SEO Domination",
    category: "seo",
    slug: "mastering-core-web-vitals-local-seo",
    date: "June 20, 2026",
    readTime: "7 min read",
    snippet:
      "A deep dive into optimizing Interaction to Next Paint (INP) to rank #1 on localized search maps and search engine algorithm updates.",
    keywords: ["Technical SEO", "Google Web Vitals", "GA4 Analytics"],
  },
  {
    id: "03",
    title:
      "The Mathematics of Grid Systems in Modern Vector Brand Identity Design",
    category: "design",
    slug: "mathematical-grid-systems-brand-design",
    date: "June 15, 2026",
    readTime: "4 min read",
    snippet:
      "How using geometric ratios and rigid Figma layout templates ensures your corporate logo achieves instantaneous trademark approval.",
    keywords: ["Figma Systems", "Vector Assets", "Brand Identity Guidelines"],
  },
  {
    id: "04",
    title:
      "Building Micro-Frontend Architectures with React and Vite Module Federation",
    category: "engineering",
    slug: "micro-frontendarchitecture-react-vite",
    date: "June 11, 2026",
    readTime: "6 min read",
    snippet:
      "Break down massive, sluggish monolith applications into decoupled modules deployed seamlessly across multiple render pipelines.",
    keywords: ["React Framework", "Vite Bundler", "Micro-Frontends"],
  },
  {
    id: "05",
    title:
      "Psychological Hook Engineering: Creating High-Retention Promotional Video Reels",
    category: "marketing",
    slug: "psychological-hook-engineering-video-reels",
    date: "June 06, 2026",
    readTime: "5 min read",
    snippet:
      "How precise 3-second visual pacing edits and sound layer engineering can boost retention scales and digital ad conversions by 68%.",
    keywords: [
      "Video Production",
      "Conversion Rate Audits",
      "Ad Creative Strategy",
    ],
  },
  {
    id: "06",
    title:
      "The Developer's Guide to Spaced-Repetition Algorithm Optimization in EdTech Platforms",
    category: "engineering",
    slug: "spaced-repetition-algorithm-edtech",
    date: "June 02, 2026",
    readTime: "8 min read",
    snippet:
      "How to programmatically compute precise time-interval database entries to automate complex learning schedules for students.",
    keywords: ["Algorithm Design", "Database Management", "EdTech Engineering"],
  },
  {
    id: "07",
    title:
      "Why Static Site Generation (SSG) Beats Traditional CMS Frameworks Hands Down",
    category: "engineering",
    slug: "static-site-generation-vs-traditional-cms",
    date: "May 28, 2026",
    readTime: "4 min read",
    snippet:
      "Template-free custom architectures minimize security vulnerabilities and reduce server response lag times down to zero.",
    keywords: ["Next.js Deployment", "API Integrations", "Server Optimization"],
  },
  {
    id: "08",
    title:
      "How Local Businesses Can Leverage Schema Markup to Dominate Search Graph Arrays",
    category: "seo",
    slug: "schema-markup-local-business-search-graph",
    date: "May 22, 2026",
    readTime: "6 min read",
    snippet:
      "Injecting structured JSON-LD payloads directly into your HTML code blocks to tell search engines exactly who you are and where you operate.",
    keywords: ["JSON-LD Schema", "Structured Data", "Search Optimization"],
  },
  {
    id: "09",
    title:
      "Designing Complex Digital Course Libraries: A UI/UX Layout Framework Strategy",
    category: "design",
    slug: "designing-digital-course-libraries-uiux",
    date: "May 17, 2026",
    readTime: "5 min read",
    snippet:
      "Organizing multi-category vocational learning assets into accessible, beautiful dashboards using a clean design system language.",
    keywords: [
      "Figma Components",
      "User Interface Architecture",
      "Layout Design",
    ],
  },
  {
    id: "10",
    title:
      "Migrating from Rest APIs to GraphQL: Solving Over-fetching in Distributed Mobile Networks",
    category: "engineering",
    slug: "migrating-rest-api-graphql-mobile",
    date: "May 10, 2026",
    readTime: "9 min read",
    snippet:
      "Optimize your application data fetching layer to load complex user dashboards on low-speed connections with single-query payloads.",
    keywords: [
      "GraphQL Engine",
      "API Optimization",
      "Mobile Performance Frameworks",
    ],
  },
];

const blogCategories = [
  { slug: "all", name: "All Articles" },
  { slug: "engineering", name: "Engineering" },
  { slug: "seo", name: "Technical SEO" },
  { slug: "design", name: "Design & Branding" },
  { slug: "marketing", name: "Marketing Engine" },
];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBlogs =
    activeFilter === "all"
      ? blogArticles
      : blogArticles.filter((blog) => blog.category === activeFilter);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-[#0468fd] selection:text-white">
      {/* 🚀 SEO METADATA BLOCK */}
      <Helmet>
        <title>Technical Blog, Insights & Case Reviews | TechSolex</title>
        <meta
          name="description"
          content="Deep technical articles on software engineering, headless Next.js platforms, local search engine updates, programmatic optimization, and custom design systems by TechSolex."
        />
        <meta
          name="keywords"
          content="Next.js development, Technical SEO, Figma design systems, MERN scale infrastructure, psychological hook video engineering"
        />
        <meta
          property="og:title"
          content="Technical Insights & Software Engineering Blog | TechSolex"
        />
        <meta
          property="og:description"
          content="Explore 10 trending technical articles focused on optimization, clean architectures, and absolute performance mechanics."
        />
      </Helmet>

      {/* ── SECTION 1: HERO (60% WHITE CANVAS BACKGROUND with 30% DEEP BLUE PRIMARY TEXT) ── */}
      <section className="w-full bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
        {/* Subtle Branding Grid Blueprint */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #00186a 1px, transparent 1px), linear-gradient(to bottom, #00186a 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0468fd] block mb-4">
            • TECHSOLEX INTELLECTUAL PLATFORM
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl text-[#00186a]">
            Engineered Insights for <br />
            <span className="text-[#0468fd]">
              Modern Digital Infrastructure.
            </span>
          </h1>
          <p className="mt-6 text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
            Zero fluff. No template generated filler content. Just high-impact
            architectural blueprints, algorithmic optimization logs, and
            technical marketing systems compiled by our engineering collective.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: BLOG ARCHITECTURE GRID (CRISP FILTER INTERFACE & ARTICLE STREAM) ── */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
          {/* Dynamic Filter Navigation using the 10% Accent Accent Color */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-100">
            {blogCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-lg transition-all duration-200 shrink-0 ${
                  activeFilter === cat.slug
                    ? "bg-[#0468fd] text-white shadow-lg shadow-blue-600/10"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 10 Trending SEO Optimized Blog Cards Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col justify-between p-7 bg-white border border-slate-200/80 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/80"
              >
                {/* Meta Header */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#0468fd] bg-blue-50 px-2.5 py-1 rounded-md tracking-wider uppercase">
                      // {blog.category}
                    </span>
                    <div className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-2">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Core Title using 30% Deep Corporate Blue */}
                  <h2 className="text-lg md:text-xl font-black text-[#00186a] tracking-tight leading-snug min-h-[84px] group-hover:text-[#0468fd] transition-colors duration-200">
                    {blog.title}
                  </h2>

                  {/* Article Snippet description */}
                  <p className="mt-4 text-slate-600 text-xs md:text-sm font-medium leading-relaxed border-l-2 border-[#0468fd]/30 pl-3">
                    {blog.snippet}
                  </p>
                </div>

                {/* Footer Section with Keyword Tags and Navigation Link */}
                <div className="mt-8 pt-5 border-t border-slate-100 space-y-4">
                  {/* Automated Keywords Block for SEO Maximization */}
                  <div className="flex flex-wrap gap-1.5">
                    {blog.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold font-mono text-slate-400 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#00186a] hover:text-[#0468fd] inline-flex items-center gap-1.5 transition-colors group/link"
                    >
                      Read Analytics
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200 text-[#0468fd]">
                        &rarr;
                      </span>
                    </Link>

                    <span className="text-2xl font-black font-mono text-slate-100 tracking-tighter transition-colors duration-300 group-hover:text-blue-50">
                      {blog.id}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SUBSCRIPTION CTA (BLUE-TINTED WHITE CANVAS INTERACTION ZONE) ── */}
      <section className="w-full bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0468fd 1px, transparent 1px), linear-gradient(to bottom, #0468fd 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0468fd]">
              SUBSCRIBE TO CODE LOGS
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#00186a]">
              Stay updated with performance algorithms <br />
              <span className="text-[#0468fd] inline-block mt-1">
                delivered straight to your stream.
              </span>
            </h3>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-medium">
              Join local business founders and high-performance engineers
              tracking core code metrics, marketing transformations, and vector
              design guidelines.
            </p>

            {/* Elegant Form Input using Brand Rules */}
            <div className="pt-4 max-w-md mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  placeholder="Enter your system email..."
                  required
                  className="bg-slate-50 border border-slate-200 text-sm font-medium px-4 py-3.5 rounded-xl w-full focus:outline-none focus:border-[#0468fd] focus:bg-white transition-all text-[#00186a]"
                />
                <button
                  type="submit"
                  className="bg-[#00186a] text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl shadow-lg shadow-blue-900/10 hover:bg-[#0468fd] transition-all shrink-0"
                >
                  Join Feed
                </button>
              </form>
            </div>

            <div className="pt-2">
              <HashLink
                smooth
                to="/#contact"
                className="text-xs font-mono font-bold text-slate-400 hover:text-[#0468fd] underline underline-offset-4 transition-colors"
              >
                Need immediate engineering solutions? Talk to our collective
                &rarr;
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
