import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & Strategize",
      description:
        "We listen to your business, your goals and your audience — then map the right digital solution.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
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
        "Wireframes, brand visuals and user journeys — designed for clarity, conversion and credibility.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
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
        "Code, content and creatives engineered with quality. Tested, polished, and shipped on time.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
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
        "We measure performance, run campaigns and iterate — so your growth doesn't plateau.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
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
    <section className="relative bg-[#001c55] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-3">
              — HOW WE WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A clear 4-step process.
              <br />
              <span className="text-blue-400">Zero guesswork.</span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-md text-base md:text-lg leading-relaxed pt-2">
            From discovery to delivery — and beyond. We move fast, communicate
            transparently and treat every project like it's our own.
          </p>
        </div>

        {/* 4-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-blue-900/40 divide-y md:divide-y-0 lg:divide-x divide-blue-900/40">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 relative flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:bg-blue-900/20 md:border-b lg:border-b-0 border-blue-900/40"
            >
              {/* Top Row: Icon & Outlined Big Number */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-950/80 border border-blue-800/40 rounded-md backdrop-blur-sm">
                  {step.icon}
                </div>
                {/* Fix: Added absolute text color and webkit-text-stroke for clear visibility */}
                <span
                  className="text-7xl font-bold tracking-tighter select-none transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
