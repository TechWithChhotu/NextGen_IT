import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & Strategize",
      description:
        "We analyze market goals to build high-performance digital architectures, helping brands in Sheikhpura and across Bihar maximize online reach.",
      icon: (
        <svg
          className="w-5 h-5 text-[#21C4FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design & Plan",
      description:
        "Custom enterprise UI/UX design layouts tailored meticulously for premium conversions, fast layout load speeds, and maximum local ranking relevance.",
      icon: (
        <svg
          className="w-5 h-5 text-[#21C4FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Build & Launch",
      description:
        "Engineered by Tech Solex using clean code structures and technical on-page SEO frameworks to load instantly across all regional network tiers.",
      icon: (
        <svg
          className="w-5 h-5 text-[#21C4FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Grow & Optimize",
      description:
        "Ongoing security performance audits, local citation workflows, and speed iterations designed to keep your business dominating search ranks.",
      icon: (
        <svg
          className="w-5 h-5 text-[#21C4FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-[#FFFFFF] text-[#1A1A1A] py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="process"
    >
      {/* Light Clean Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#0A2E86] font-extrabold block mb-3">
              — HOW WE WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-[#0A2E86]">
              Our Web Development Process.
              <br />
              <span className="text-[#21C4FF]">Trusted in Bihar.</span>
            </h2>
          </div>
          <p className="text-[#666666] max-w-md text-base md:text-lg leading-relaxed pt-2">
            From architecture plan to deployment. Tech Solex builds
            lightning-fast software architectures for growing enterprises and
            local startups throughout Bihar.
          </p>
        </div>

        {/* 4-Step Grid Layout with Light Clean Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] bg-[#FFFFFF] divide-y md:divide-y-0 lg:divide-x divide-[#E5E7EB] rounded-lg shadow-sm">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 relative flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:bg-[#F8FAFC] md:border-b lg:border-b-0 border-[#E5E7EB]"
            >
              {/* Top Row: Tech Cyan Accent Icon Wrapper & Outlined Big Number */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-md shadow-sm group-hover:border-[#21C4FF] transition-colors duration-300">
                  {step.icon}
                </div>
                <span
                  className="text-7xl font-black tracking-tighter select-none transition-all duration-300 opacity-20 group-hover:opacity-60 text-slate-200"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #0A2E86",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-3 text-[#0A2E86] group-hover:text-[#21C4FF] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
