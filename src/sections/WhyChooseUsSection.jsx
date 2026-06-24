import React from "react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Clean & High-Performance Coding",
      description:
        "Hum fadtas ke ready-made slow templates use nahi karte. Our team writes clean, secure, and super-fast loading code from scratch so that your website user experience remains top-notch.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Custom App Architectures",
      description:
        "Whether it is a complex business portal or a high-performance Android/iOS app— hum aapke exact requirement ke hisab se scalable architecture design karte hain jo lag-free chalta hai.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Built-In Quality Assurance",
      description:
        "Project deliver karne se pehle hum uski rigorous multi-device testing, bug fixing, aur speed responsiveness check karte hain. No errors, no compromises on quality.",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "On-Time Delivery & Transparency",
      description:
        "We highly value your time. Project planning se lekar final deployment tak, saari cheezein ek fixed timeline ke andar full transparency ke saath deliver ki jaati hain.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-[#f4f7fa] py-24 px-6 md:px-12 lg:px-24 text-slate-950 font-sans border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* UPPER BLOCK: Header Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-blue-600 font-extrabold block">
              — WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              We engineer scalable{" "}
              <span className="text-blue-600">digital products</span> from
              scratch.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              Market mein basic template-built slow apps aur websites ki bheed
              hai. At <strong>NextGen IT Solutions</strong>, we purely craft
              high-performance custom software architectures to help your
              business scale faster.
            </p>
          </div>
        </div>

        {/* BOTTOM BLOCK: Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group p-8 bg-white rounded-sm border border-slate-200/60 hover:border-transparent hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-[#f4f7fa] rounded-sm border border-slate-200/40 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 text-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  {reason.icon}
                </div>

                <div className="space-y-2">
                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-950 tracking-tight">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
