import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import full_logo_transparent from "../assets/full_logo_transparent.png";

const Footer = () => {
  return (
    /* ── FOOTER BACKGROUND CHANGED TO 30% DEEP CORPORATE BLUE (#00186a) ── */
    <footer className="bg-[#00186a] text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden font-sans selection:bg-[#0468fd] selection:text-white">
      {/* Subtle Digital Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* TOP BLOCK: Brand Info & Architecture Matrix Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info & Logo Placement */}
          <div className="md:col-span-4 space-y-5">
            <div className="flex items-center -ml-2">
              <Link to="/">
                {/* Logo wrapper blends cleanly with the deep blue background */}
                <img
                  src={full_logo_transparent}
                  alt="TechSolex Logo"
                  className="h-16 w-auto object-contain bg-white rounded-xl p-1 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>

            <p className="text-xs font-mono tracking-widest text-[#0468fd] uppercase font-bold">
              Your growth, our commitment.
            </p>

            <p className="text-xs md:text-sm text-slate-200 max-w-sm leading-relaxed font-medium">
              Leading digital transformation and high-performance software
              engineering. We optimize your local and global presence through
              custom website development, app architecture, and result-driven
              Solutions.
            </p>
          </div>

          {/* Column 2: Core Engineering Verticals */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              // Core Services
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
              <li>
                <HashLink
                  smooth
                  to="/#web-dev"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Custom Web Development Frameworks"
                >
                  Web Development
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#app-dev"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Mobile Application Architecture"
                >
                  Mobile Applications
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#seo"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="On-Page Technical SEO Audit Systems"
                >
                  On-Page SEO Optimization
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#branding"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Corporate Layout Systems & Vector Branding"
                >
                  UI/UX & Grid Branding
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Architecture Navigation (Blog, Career, Portfolio) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              // Knowledge & Work
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="TechSolex Project Portfolio Case Studies"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Technical Engineering Openings"
                >
                  Careers Base
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Trending Technical Insights Blog Feed"
                >
                  Insights Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-slate-300 hover:text-[#0468fd] transition-colors"
                  title="Frequently Asked Platform Questions"
                >
                  FAQ Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Connect Signals (Local SEO Footprints) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              // Connect Base
            </h4>
            <address className="space-y-3 text-xs md:text-sm not-italic font-semibold">
              <div className="flex items-center gap-2.5">
                <span className="text-[#0468fd] font-mono">📱</span>
                <a
                  href="tel:+918229084288"
                  className="hover:text-[#0468fd] transition-colors font-bold text-white"
                >
                  +91 8229084288
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[#0468fd] font-mono">✉️</span>
                <a
                  href="mailto:contact.techsolex@gmail.com"
                  className="hover:text-[#0468fd] transition-colors text-slate-300"
                >
                  contact.techsolex@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <span className="text-[#0468fd] font-mono mt-0.5">📍</span>
                <div className="text-slate-300 text-xs leading-relaxed font-medium">
                  <strong className="text-white block font-bold">
                    TechSolex HQ
                  </strong>
                  Sheikhpura, Bihar, India
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* BOTTOM BLOCK: Copyright & Strategic Local Map Crawl Index */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            <p>
              © {new Date().getFullYear()}{" "}
              <strong className="text-white">TechSolex</strong>. All rights
              reserved.
            </p>
          </div>

          {/* Geo-Targeted Anchor Text for On-Page Local Dominance */}
          <div className="flex flex-wrap gap-1.5 text-center sm:text-right justify-center sm:justify-end">
            <span className="text-slate-400">
              Best Web Development Agency in
            </span>
            <HashLink
              smooth
              to="/#local-seo"
              className="text-[#0468fd] hover:underline font-bold transition-colors"
              title="Top Rated IT Services & SEO Company in Bihar"
            >
              Sheikhpura, South Bihar & Across India
            </HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-200 relative overflow-hidden font-sans selection:bg-[#0468fd] selection:text-white">
//       {/* ── DESIGN GRIDS ── */}
//       <div
//         className="absolute inset-0 opacity-[0.15] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(to right, #00186a 1px, transparent 1px), linear-gradient(to bottom, #00186a 1px, transparent 1px)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
//         {/* TOP BLOCK: Brand Info & Architecture Matrix Links */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">

//           {/* Column 1: Brand Info & Logo Placement */}
//           <div className="md:col-span-4 space-y-5">
//             <div className="flex items-center -ml-2">
//               <Link to="/">
//                 <img
//                   src={full_logo_transparent}
//                   alt="TechSolex Logo"
//                   className="h-16 w-auto object-contain bg-transparent transition-transform duration-300 hover:scale-105"
//                 />
//               </Link>
//             </div>

//             <p className="text-xs font-mono tracking-widest text-[#0468fd] uppercase font-bold">
//               Your growth, our commitment.
//             </p>

//             <p className="text-xs md:text-sm text-slate-500 max-w-sm leading-relaxed font-medium">
//               Leading digital transformation and high-performance software
//               engineering. We optimize your local and global presence through
//               custom website development, app architecture, and result-driven Solutions.
//             </p>
//           </div>

//           {/* Column 2: Core Engineering Verticals */}
//           <div className="md:col-span-3 space-y-4">
//             <h4 className="text-xs font-mono font-bold text-[#00186a] uppercase tracking-widest">
//               // Core Services
//             </h4>
//             <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
//               <li>
//                 <HashLink smooth to="/#web-dev" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Custom Web Development Frameworks">
//                   Web Development
//                 </HashLink>
//               </li>
//               <li>
//                 <HashLink smooth to="/#app-dev" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Mobile Application Architecture">
//                   Mobile Applications
//                 </HashLink>
//               </li>
//               <li>
//                 <HashLink smooth to="/#seo" className="text-[#0468fd] hover:underline transition-colors" title="On-Page Technical SEO Audit Systems">
//                   On-Page SEO Optimization
//                 </HashLink>
//               </li>
//               <li>
//                 <HashLink smooth to="/#branding" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Corporate Layout Systems & Vector Branding">
//                   UI/UX & Grid Branding
//                 </HashLink>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Platform Architecture Navigation (Blog, Career, Portfolio) */}
//           <div className="md:col-span-2 space-y-4">
//             <h4 className="text-xs font-mono font-bold text-[#00186a] uppercase tracking-widest">
//               // Knowledge & Work
//             </h4>
//             <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
//               <li>
//                 <Link to="/portfolio" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="TechSolex Project Portfolio Case Studies">
//                   Case Studies
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/careers" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Technical Engineering Openings">
//                   Careers Base
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blog" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Trending Technical Insights Blog Feed">
//                   Insights Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" className="text-slate-600 hover:text-[#0468fd] transition-colors" title="Frequently Asked Platform Questions">
//                   FAQ Desk
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Contact & Direct Connect Signals (Local SEO Footprints) */}
//           <div className="md:col-span-3 space-y-4">
//             <h4 className="text-xs font-mono font-bold text-[#00186a] uppercase tracking-widest">
//               // Connect Base
//             </h4>
//             <address className="space-y-3 text-xs md:text-sm not-italic font-semibold">
//               <div className="flex items-center gap-2.5">
//                 <span className="text-[#0468fd] font-mono">📱</span>
//                 <a href="tel:+918229084288" className="hover:text-[#0468fd] transition-colors font-bold text-[#00186a]">
//                   +91 8229084288
//                 </a>
//               </div>

//               <div className="flex items-center gap-2.5">
//                 <span className="text-[#0468fd] font-mono">✉️</span>
//                 <a href="mailto:contact.techsolex@gmail.com" className="hover:text-[#0468fd] transition-colors text-slate-600">
//                   contact.techsolex@gmail.com
//                 </a>
//               </div>

//               <div className="flex items-start gap-2.5 pt-1">
//                 <span className="text-[#0468fd] font-mono mt-0.5">📍</span>
//                 <div className="text-slate-600 text-xs leading-relaxed font-medium">
//                   <strong className="text-[#00186a] block font-bold">
//                     TechSolex HQ
//                   </strong>
//                   Sheikhpura, Bihar, India
//                 </div>
//               </div>
//             </address>
//           </div>
//         </div>

//         {/* BOTTOM BLOCK: Copyright & Strategic Local Map Crawl Index */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
//           <div>
//             <p>
//               © {new Date().getFullYear()} <strong className="text-[#00186a]">TechSolex</strong>. All
//               rights reserved.
//             </p>
//           </div>

//           {/* Geo-Targeted Anchor Text for On-Page Local Dominance */}
//           <div className="flex flex-wrap gap-1.5 text-center sm:text-right justify-center sm:justify-end">
//             <span>Best Web Development Agency in</span>
//             <HashLink
//               smooth
//               to="/#local-seo"
//               className="text-[#0468fd] hover:underline font-bold transition-colors"
//               title="Top Rated IT Services & SEO Company in Bihar"
//             >
//               Sheikhpura, South Bihar & Across India
//             </HashLink>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
