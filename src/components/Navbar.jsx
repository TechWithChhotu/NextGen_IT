import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import full_logo_transparent from "../assets/full_logo_transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] backdrop-blur-md bg-opacity-90 sticky top-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LEFT: Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer shrink-0"
          >
            <div className="flex items-center bg-transparent py-1 rounded">
              <img
                src={full_logo_transparent}
                alt="Tech Solex Solutions Sheikhpura Bihar"
                className="h-10 md:h-12 w-auto object-contain transition-all"
              />
            </div>
          </Link>

          {/* MIDDLE: Nav Links (Desktop) - Screen md aur upar par barabar gap ke sath */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold tracking-wide text-[#1A1A1A]">
            <HashLink
              smooth
              to="/#services"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#process"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/portfolio"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>

            <HashLink
              smooth
              to="/careers"
              className="hover:text-[#0A2E86] transition-colors py-2 relative group"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21C4FF] transition-all group-hover:w-full" />
            </HashLink>
          </div>

          {/* RIGHT: Contact Number & CTA Trigger (Desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            <a
              href="tel:+918229084288"
              className="text-xs lg:text-sm font-bold text-[#666666] hover:text-[#0A2E86] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 text-[#21C4FF]"
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
              className="bg-[#0A2E86] hover:bg-[#21C4FF] text-white text-xs lg:text-sm font-bold px-4 lg:px-5 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              Get a Quote →
            </HashLink>
          </div>

          {/* Hamburger Menu Trigger (Mobile only) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#1A1A1A] hover:text-[#0A2E86] focus:outline-none p-2"
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

      {/* Mobile Drawer Overlay Menu - Ab isme saare links align hain */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible h-auto py-6"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4 text-base font-semibold tracking-wide text-[#1A1A1A]">
          <HashLink
            smooth
            to="/#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            Services
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="/#process"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            Process
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            Contact
          </HashLink>

          {/* Added to Mobile View */}
          <HashLink
            smooth
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            Portfolio
          </HashLink>

          {/* Added to Mobile View */}
          <HashLink
            smooth
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#0A2E86] transition-colors py-1"
          >
            Careers
          </HashLink>

          <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-4">
            <a
              href="tel:+918229084288"
              className="text-sm font-bold text-[#666666] hover:text-[#0A2E86] flex items-center gap-2 py-1"
            >
              <svg
                className="w-4 h-4 text-[#21C4FF]"
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
              onClick={() => setIsOpen(false)}
              className="bg-[#0A2E86] hover:bg-[#21C4FF] text-white text-sm font-bold px-5 py-3 rounded text-center shadow-sm transition-all"
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
