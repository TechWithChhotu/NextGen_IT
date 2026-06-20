import React from "react";
import { Link } from "react-router-dom"; // React router link imported

const ServicesSection = () => {
  const verticals = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Custom business sites, e-commerce stores, and landing pages tailored for businesses in Sheikhpura and across India to convert traffic into customers.",
      tags: [
        "BUSINESS WEBSITES",
        "PORTFOLIOS",
        "LANDING PAGES",
        "CUSTOM APPS",
        "E-COMMERCE",
      ],
      URL: "/service/web-development", // Updated to dynamic slug route
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Mobile App Development",
      description:
        "Native-feel Android and iOS apps engineered to place your Bihar-based brand or startup directly into your customer's pocket.",
      tags: ["ANDROID APPS", "BUSINESS APPS", "UTILITY APPS"],
      URL: "/service/app-development", // Updated to dynamic slug route
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Digital Marketing & SEO",
      description:
        "Result-driven On-Page SEO optimization, advanced technical SEO audits, and targeted local campaigns engineered to make your business rank #1 in Sheikhpura.",
      tags: [
        "ON-PAGE SEO",
        "LOCAL SEO BIHAR",
        "SOCIAL MARKETING",
        "LEAD GEN",
        "CONTENT MARKETING",
      ],
      URL: "/service/digital-marketing", // Placeholders for future services
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Graphic Design",
      description:
        "Pixel-perfect digital assets, posters, banners, and corporate business cards designed to make a stellar statement for local enterprises.",
      tags: ["BRAND CREATIVES", "POSTERS", "BANNERS", "SOCIAL MEDIA ART"],
      URL: "/service/graphic-design",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Logo Design & Branding",
      description:
        "Memorable brand identity systems, guidelines, and corporate iconography tailored to transform local businesses into recognized national brands.",
      tags: ["LOGO SYSTEMS", "BRAND GUIDELINES", "VECTOR ART", "STATIONERY"],
      URL: "/service/logo-design",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Video Editing",
      description:
        "High-retention Reels, promotional material, and highly professional corporate ad videos engineered for scroll-stopping engagement.",
      tags: [
        "REELS & SHORTS",
        "PROMO VIDEOS",
        "AD CREATIVES",
        "MOTION GRAPHICS",
      ],
      URL: "/service/video-editing",
      icon: (
        <svg
          className="w-5 h-5 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-[#ffffff] text-slate-950 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="services"
    >
      {/* Light Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: "35px 35px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold block mb-4">
              — WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Six verticals.
              <br />
              <span className="text-blue-600">One growth partner.</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed lg:pt-3">
            From your very first website or local search ranking to a full-stack
            digital brand experience — everything you need to build, design,
            market and grow your business in Sheikhpura, Bihar, under one
            reliable roof.
          </p>
        </div>

        {/* Services Grid Layout with Exact Intersecting Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-200 divide-y divide-slate-200 md:divide-y-0">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className={`p-8 min-h-[380px] flex flex-col justify-between bg-white relative group transition-all duration-300 hover:bg-slate-50/60
                ${index % 2 !== 0 ? "md:border-l border-slate-200" : ""}
                ${index % 3 !== 0 ? "lg:border-l border-slate-200" : ""}
                ${index >= 2 ? "md:border-t border-slate-200" : ""}
                ${index >= 3 ? "lg:border-t border-slate-200" : ""}
              `}
            >
              {/* Card Header Area */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Icon Box */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    {vertical.icon}
                  </div>
                  {/* Step Number Badge */}
                  <span className="text-xs font-mono font-semibold text-slate-300 tracking-wider">
                    {vertical.number}
                  </span>
                </div>

                {/* Vertical Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {vertical.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {vertical.description}
                </p>
              </div>

              {/* Bottom Tag List & Direct Link Router Component */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {vertical.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] tracking-wide font-bold bg-slate-100/80 text-slate-500 px-2.5 py-1 rounded border border-slate-200/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Wrapped entire row element in Link for intuitive UX */}
                <Link
                  to={vertical.URL}
                  className="pt-4 border-t border-slate-100 flex justify-between items-center group/link cursor-pointer block"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">
                    Discuss this service
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
                    <svg
                      className="w-3 h-3 transform group-hover/link:rotate-45 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
