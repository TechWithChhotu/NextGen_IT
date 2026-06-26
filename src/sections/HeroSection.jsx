import React from "react";
import wordmark_transparent from "../assets/wordmark_transparent.jpeg"; // Explicit file reference mapping
import logo from "../assets/wordmark_transparent.jpeg";
import girihindaImage from "../assets/girihindaImage.jpg";
import HeroBrandCard from "./HeroBrandCard";

const HeroSection = () => {
  return (
    <section
      role="banner"
      aria-label="TechSolex Corporate Hero Banner"
      className="relative text-[#1A1A1A] min-h-screen flex flex-col justify-between overflow-hidden bg-white"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 50%, #EAF7FF 100%)",
      }}
      id="home"
    >
      {/* Structural Context Area for Search Engine Web Spiders (Hidden from User View) */}
      <div className="sr-only">
        <h1>
          TechSolex | Best Digital Agency & Web Development Company in
          Sheikhpura, Bihar
        </h1>
        <h2>
          Premium Custom Applications, Native Mobile Software, and Strategic
          On-Page SEO Management
        </h2>
        <p>
          TechSolex is Bihar's premier technology solution node delivering
          high-performance e-commerce platforms, brand identity designs, local
          business search growth auditing, and responsive layouts to scale local
          commerce into international corporate entities.
        </p>
      </div>

      {/* Background Graphic Elements - Clean Visual Pattern */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A2E86]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#21C4FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Main Structural Core Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex-grow flex items-center py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Block: Advanced Keyword Targeted Context Structure */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge Tracker */}
            <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-full px-4 py-1.5 shadow-sm">
              <span
                className="w-2 h-2 rounded-full bg-[#21C4FF] animate-pulse"
                aria-hidden="true"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2E86] font-mono">
                Your growth, our commitment
              </span>
            </div>

            {/* Semantic Primary Target Heading for Geo-Targeted Local Indexing */}
            <p className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.1]">
              The Premier Tech & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2E86] via-[#0A2E86] to-[#21C4FF]">
                Digital Agency
              </span>{" "}
              <br />
              in Sheikhpura, Bihar.
            </p>

            {/* Core Target Industry Keywords Configuration */}
            <p className="text-[#666666] text-base md:text-lg max-w-xl leading-relaxed">
              Accelerate your local business authority with{" "}
              <strong className="text-[#0A2E86] font-extrabold">
                TechSolex
              </strong>
              . We engineer scalable{" "}
              <strong>website development systems</strong>, high-conversion
              custom utility software, and hyper-targeted{" "}
              <strong>On-Page SEO optimization pipelines</strong> built
              explicitly to make your brand dominate local search engine
              indexes.
            </p>

            {/* Call to Action Controls */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                title="Contact TechSolex for Business Consulting"
                className="bg-[#0A2E86] hover:bg-[#21C4FF] text-white font-bold px-8 py-4 rounded-md shadow-lg shadow-[#0A2E86]/10 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                title="Browse TechSolex Technology Core Verticals"
                className="bg-[#F8FAFC] hover:bg-[#E5E7EB] text-[#0A2E86] border border-[#E5E7EB] font-bold px-8 py-4 rounded-md transition-all duration-300 text-sm backdrop-blur-sm"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicator Metrics Cloud for Search Engine Crawlers */}
            <div className="pt-8 grid grid-cols-3 gap-4 max-w-md border-t border-[#E5E7EB]">
              <div>
                <p className="text-2xl font-black text-[#0A2E86]">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                  On-Page SEO
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A2E86]">Top #1</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                  Local Ranking
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0A2E86]">24/7</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#666666]">
                  Expert Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Semantic Integration with custom HeroBrandCard Component Layer */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <HeroBrandCard
              logo={logo}
              wordmark={wordmark_transparent}
              sheikhpuraImage={girihindaImage}
            />
          </div>
        </div>
      </div>

      {/* Region Footer Metadata Area for Regional Semantic Reinforcement */}
      <div className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-4 relative z-10 text-center">
        <p className="text-[11px] tracking-wider text-[#666666] uppercase font-bold">
          Empowering Local Enterprises across Sheikhpura, Patna, & Greater Bihar
          Region
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
