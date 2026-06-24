import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const verticals = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Custom business sites, high-converting landing pages, and scalable e-commerce stores tailored for enterprises in Sheikhpura and across India to convert massive traffic into revenue.",
      tags: [
        "BUSINESS WEBSITES",
        "PORTFOLIOS",
        "LANDING PAGES",
        "CUSTOM APPS",
        "E-COMMERCE",
      ],
      URL: "/service/web-development",
      ariaLabel: "Learn more about TechSolex Website Development Services",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Mobile App Development",
      description:
        "Native-feel, lightning-fast Android and iOS apps engineered to place your Bihar-based brand or enterprise startup directly into your target customer's pocket.",
      tags: ["ANDROID APPS", "BUSINESS APPS", "UTILITY APPS"],
      URL: "/service/app-development",
      ariaLabel:
        "Learn more about TechSolex Mobile Application Development Services",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Digital Marketing & SEO",
      description:
        "Result-driven On-Page SEO optimization, advanced technical structural audits, and hyper-targeted campaigns engineered to make your business rank #1 locally in Bihar.",
      tags: [
        "ON-PAGE SEO",
        "LOCAL SEO BIHAR",
        "SOCIAL MARKETING",
        "LEAD GEN",
        "CONTENT MARKETING",
      ],
      URL: "/service/digital-marketing",
      ariaLabel:
        "Learn more about TechSolex Digital Marketing and On-Page SEO Optimization",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Graphic Design",
      description:
        "Pixel-perfect digital assets, marketing banners, creative posters, and premium corporate business cards styled to establish unmatched visual authority for local firms.",
      tags: ["BRAND CREATIVES", "POSTERS", "BANNERS", "SOCIAL MEDIA ART"],
      URL: "/service/graphic-design",
      ariaLabel:
        "Learn more about TechSolex Graphic Design Assets and Services",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Logo Design & Branding",
      description:
        "Memorable brand identity vectors, standard guideline sheets, and iconography patterns tailored to transform standard businesses into modern recognized corporate entities.",
      tags: ["LOGO SYSTEMS", "BRAND GUIDELINES", "VECTOR ART", "STATIONERY"],
      URL: "/service/logo-design",
      ariaLabel:
        "Learn more about TechSolex Corporate Logo Design and Brand Identity Engineering",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Video Editing",
      description:
        "High-retention social media Reels, interactive YouTube Shorts, promotional advertisements, and professional corporate video templates for scroll-stopping engagement.",
      tags: [
        "REELS & SHORTS",
        "PROMO VIDEOS",
        "AD CREATIVES",
        "MOTION GRAPHICS",
      ],
      URL: "/service/video-editing",
      ariaLabel:
        "Learn more about TechSolex High-Retention Video Editing and Production Services",
      icon: (
        <svg
          className="w-5 h-5 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Optimized Semantic Structure */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#21C4FF] font-black block mb-4">
              — CORE VERTICALS
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-950">
              Six verticals.
              <br />
              <span className="text-[#0A2E86]">
                One digital growth partner.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pt-3">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              From architecting high-performance web systems and native-feel
              mobile applications to maximizing your organic search visibility —{" "}
              <strong>TechSolex</strong> delivers premium digital engineering,
              custom software development, and strategic growth optimization
              under one elite agency roof.
            </p>

            {/* Contextual Hidden Tag for Local Search Intent Indexing */}
            <span className="hidden text-[1px]">
              TechSolex is the leading IT agency for custom applications,
              software engineering, and regional marketing across Sheikhpura,
              Patna, and South Bihar.
            </span>
          </div>
        </div>

        {/* Services Grid Layout with Crisp Corporate Intersecting Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/30">
          {verticals.map((vertical, index) => (
            <article
              key={index}
              className="p-8 min-h-[390px] flex flex-col justify-between bg-white relative group transition-all duration-500 hover:bg-slate-50/50 border-b border-slate-200/80 last:border-b-0 md:[&:nth-child(2n)]:border-l lg:[&:nth-child(3n-1)]:border-l lg:[&:nth-child(3n)]:border-l"
            >
              {/* Card Header Area */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Icon Box with 60-30-10 Brand Harmony */}
                  <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl group-hover:border-[#21C4FF]/40 transition-colors duration-300">
                    {vertical.icon}
                  </div>
                  {/* Structural Tracking Index Badge */}
                  <span className="text-xs font-mono font-bold text-slate-300 tracking-wider group-hover:text-[#0A2E86]/40 transition-colors duration-300">
                    {vertical.number}
                  </span>
                </div>

                {/* Service Heading Entity */}
                <h3 className="text-xl font-extrabold text-slate-950 mb-3 group-hover:text-[#0A2E86] transition-colors duration-300">
                  {vertical.title}
                </h3>

                {/* Structural Paragraph Layout */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {vertical.description}
                </p>
              </div>

              {/* Bottom Interactive Zone */}
              <div>
                {/* Micro-Keywords Tag Cloud */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {vertical.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[9px] tracking-wider font-extrabold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md border border-slate-200/40 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Accessible and Crawlable Internal Router Component */}
                <Link
                  to={vertical.URL}
                  aria-label={vertical.ariaLabel}
                  className="pt-4 border-t border-slate-100 flex justify-between items-center group/link cursor-pointer block"
                >
                  <span className="text-xs font-black text-slate-800 group-hover/link:text-[#0A2E86] transition-colors duration-300">
                    Discuss this service
                  </span>

                  {/* Interactive Button Component Map [10% Accent Fill on Link Focus] */}
                  <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center group-hover/link:bg-[#0A2E86] group-hover/link:border-[#0A2E86] group-hover/link:text-white transition-all duration-300 shadow-sm">
                    <svg
                      className="w-3 h-3 transform group-hover/link:rotate-45 transition-transform duration-300 text-slate-700 group-hover/link:text-white"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
