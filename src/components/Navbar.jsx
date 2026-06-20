import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Imported HashLink for cross-page section scrolling
import full_logo_transparent from "../assets/full_logo_transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-[#00143d] border-b border-white/5 backdrop-blur-md bg-opacity-80 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: Logo Section - Links back to homepage top */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="flex items-center bg-transparent py-1 px-2 rounded">
              <img
                src={full_logo_transparent}
                alt="NextGen IT Solutions Sheikhpura Bihar"
                className="h-10 md:h-11 w-auto object-contain mix-blend-screen contrast-125 brightness-110 bg-white rounded-lg"
              />
            </div>
          </Link>

          {/* MIDDLE: Nav Links (Desktop) - Smooth scrolling with HashLink */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <HashLink
              smooth
              to="/#services"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#process"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/portfolio"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>
            <HashLink
              smooth
              to="/careers"
              className="hover:text-blue-400 transition-colors py-2 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </HashLink>
          </div>

          {/* RIGHT: Contact Number & CTA Trigger */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+918229084288"
              className="text-xs md:text-sm font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-blue-500"
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
              +91 8229084288
            </a>

            <HashLink
              smooth
              to="/#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded shadow-md shadow-blue-600/10 transition-all duration-300"
            >
              Get a Quote →
            </HashLink>
          </div>

          {/* Hamburger Menu (Mobile Trigger Button) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#001035] border-b border-white/5 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible h-auto py-6" : "opacity-0 invisible h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col px-6 space-y-4 text-base font-semibold tracking-wide text-slate-300">
          <HashLink
            smooth
            to="/#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Services
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="/#process"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Process
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition-colors"
          >
            Contact
          </HashLink>

          <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
            <a
              href="tel:+918229084288"
              className="text-sm font-bold text-slate-400 flex items-center gap-2"
            >
              +91 8229084288
            </a>

            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded text-center shadow-md shadow-blue-600/10"
            >
              Get a Quote →
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
