import React from "react";

const SelectedWork = () => {
  // Replace these template paths with your actual project screenshots
  const projectImages = {
    fashionStore:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
    coachingApp:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    brandIdentity:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    leadGen:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 text-slate-950 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-blue-600 font-extrabold block">
              — SELECTED WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Real businesses.{" "}
              <span className="text-blue-600">
                Real
                <br className="hidden md:block" /> outcomes.
              </span>
            </h2>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors group border-b-2 border-slate-200 hover:border-blue-600 pb-1"
            >
              Have a similar project? Let's talk
              <span className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* PORTFOLIO ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Large Project: Fashion E-Commerce Store */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-sm bg-slate-900 aspect-[4/3] md:aspect-auto md:h-[520px] shadow-sm">
            {/* Background Image with Dark Blue Overlay Tint */}
            <img
              src={projectImages.fashionStore}
              alt="Fashion E-Commerce Store Website"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00143d] via-[#00143d]/40 to-transparent opacity-90" />

            {/* Content Bottom Left */}
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold font-mono block">
                WEB DEVELOPMENT • E-COMMERCE
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Fashion E-Commerce Store
              </h3>
              <div className="flex items-center gap-2 text-xs text-blue-200 font-medium pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                +218% online orders in 90 days
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN STACK (Coaching App & Startup Identity) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* 2. Coaching Mobile App */}
            <div className="group relative overflow-hidden rounded-sm bg-slate-900 h-[247px] shadow-sm">
              <img
                src={projectImages.coachingApp}
                alt="Coaching Mobile Application"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00143d] via-[#00143d]/30 to-transparent opacity-95" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold font-mono block">
                  ANDROID • BUSINESS APP
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  Coaching Mobile App
                </h3>
                <div className="flex items-center gap-2 text-xs text-blue-200 font-medium pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  1,200+ active learners
                </div>
              </div>
            </div>

            {/* 3. Startup Brand Identity */}
            <div className="group relative overflow-hidden rounded-sm bg-slate-900 h-[247px] shadow-sm">
              <img
                src={projectImages.brandIdentity}
                alt="Startup Brand Identity Graphic Design"
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00143d] via-[#00143d]/40 to-transparent opacity-95" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold font-mono block">
                  LOGO • BRANDING
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  Startup Brand Identity
                </h3>
                <div className="flex items-center gap-2 text-xs text-blue-200 font-medium pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Complete brand system in 7 days
                </div>
              </div>
            </div>
          </div>

          {/* 4. Bottom Wide Project: Local Business Lead-Gen */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-sm bg-slate-900 aspect-[4/3] md:aspect-auto md:h-[380px] shadow-sm">
            <img
              src={projectImages.leadGen}
              alt="Digital Marketing and Lead Generation Campaign"
              className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00143d] via-[#00143d]/40 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold font-mono block">
                DIGITAL MARKETING • ADS
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Local Business Lead-Gen
              </h3>
              <div className="flex items-center gap-2 text-xs text-blue-200 font-medium pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                ₹4.2 cost per qualified lead
              </div>
            </div>
          </div>

          {/* Placeholder column to accurately space out the asymmetric balance under the cards */}
          <div className="hidden md:block md:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
