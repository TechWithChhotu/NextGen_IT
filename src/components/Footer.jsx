import React from "react";
import full_logo_transparent from "../assets/full_logo_transparent.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A2E86] text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Subtle Digital Background Grids for Tech Agency Aesthetics */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* TOP BLOCK: Main Navigation & Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info & Logo Placement */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center -ml-2">
              {/* Logo Wrapper with Smart Filter to blend perfectly with brand background */}
              <img
                src={full_logo_transparent}
                alt="TechSolex Logo"
                className="h-20 w-auto object-contain mix-blend-screen brightness-125 contrast-110 bg-white rounded-2xl"
              />
            </div>

            {/* Tagline for Brand Identity */}
            <p className="text-xs font-mono tracking-widest text-[#21C4FF] uppercase font-bold">
              Your growth, our commitment.
            </p>

            <p className="text-sm text-slate-200 max-w-sm leading-relaxed">
              Leading digital transformation and high-performance software
              engineering. We optimize your local and global presence through
              custom website development, app architecture, and result-driven
              On-Page SEO optimization.
            </p>
          </div>

          {/* Column 2: Quick Navigation Links (SEO Target Keywords) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#web-dev"
                  className="hover:text-[#21C4FF] transition-colors"
                  title="Professional Website Development Services"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#app-dev"
                  className="hover:text-[#21C4FF] transition-colors"
                  title="Custom Mobile Application Engineering"
                >
                  Mobile Applications
                </a>
              </li>
              <li>
                <a
                  href="#seo"
                  className="hover:text-[#21C4FF] font-semibold text-[#21C4FF] transition-colors"
                  title="On-Page Search Engine Optimization"
                >
                  On-Page SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#branding"
                  className="hover:text-[#21C4FF] transition-colors"
                  title="UI/UX Corporate Identity & Branding"
                >
                  UI/UX & Branding
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-[#21C4FF] transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect (Local SEO Signals) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <address className="space-y-3.5 text-sm not-italic">
              {/* Phone contact */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#21C4FF] shrink-0"
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
                <a
                  href="tel:+918229084288"
                  className="hover:text-white transition-colors font-bold tracking-wide text-white"
                >
                  +91 8229084288
                </a>
              </div>

              {/* Business Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#21C4FF] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact.techsolex@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  contact.techsolex@gmail.com
                </a>
              </div>

              {/* Website Domain */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 text-[#21C4FF] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"
                  />
                </svg>
                <a
                  href="https://techsolex.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-[#21C4FF] font-extrabold"
                >
                  techsolex.in
                </a>
              </div>

              {/* Physical Location Mapping for Schema and Local Ranking */}
              <div className="flex items-start gap-3 pt-1">
                <svg
                  className="w-4 h-4 text-[#21C4FF] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-slate-300 text-xs leading-relaxed">
                  <strong className="text-white block font-semibold">
                    TechSolex Headquarters
                  </strong>
                  Sheikhpura, Bihar, India
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* BOTTOM BLOCK: Copyright & Strategic Local SEO Crawl Targets */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} <strong>TechSolex</strong>. All
              rights reserved.
            </p>
          </div>

          {/* Geo-Targeted Anchor Text for On-Page Local Dominance */}
          <div className="flex flex-wrap gap-2 text-center sm:text-right justify-center sm:justify-end">
            <span>Best Web Development Agency in</span>
            <a
              href="#local-seo"
              className="text-[#21C4FF] hover:underline font-medium transition-colors"
              title="Top Rated IT Services & SEO Company in Bihar"
            >
              Sheikhpura, South Bihar & Across India
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
