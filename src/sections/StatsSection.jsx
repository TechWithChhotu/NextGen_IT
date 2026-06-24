import React from "react";

export default function StatsSection() {
  const stats = [
    {
      value: "250+",
      label: "Projects Completed",
      description: "Successful production-ready web deployments.",
    },
    {
      value: "120+",
      label: "Happy Clients",
      description: "Startups, shops, and professionals across India.",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Measured through long-term client retention.",
    },
    {
      value: "24/7",
      label: "Reliable Support",
      description: "Direct engineering contact when you need it.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-slate-950 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white p-8 group hover:bg-[#f4f7fa] transition-colors duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Stat Value */}
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#001c55] group-hover:text-blue-600 transition-colors duration-200 mb-2">
                {item.value}
              </h3>

              {/* Stat Label */}
              <h4 className="text-xs font-black tracking-wider uppercase text-slate-900 mb-1">
                {item.label}
              </h4>
            </div>

            {/* Micro-description for architectural weight */}
            <p className="text-xs text-slate-500 leading-relaxed mt-4 pt-4 border-t border-slate-100 group-hover:border-slate-200">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
