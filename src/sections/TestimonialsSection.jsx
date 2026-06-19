import React from "react";

const TestimonialsSection = () => {
  // 6 Authentic Testimonials with Professional Profile Pictures
  const row1 = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "NextGen IT Solutions developed our e-commerce platform from scratch. Unka code clean hai aur website ki speed super-fast hai. Best development team in Sheikhpura!",
      author: "Rajeev Kumar",
      role: "Founder, Bihar Retails",
      service: "Web Development",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "We needed a heavy-duty custom Android application for our logistics business. The team delivered a top-notch product with an incredibly smooth UI/UX.",
      author: "Amit Sharma",
      role: "Director, Sharma Logistics",
      service: "Mobile App Development",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Amazing engineering! High-performance web development completely transformed our digital presence. Very professional and delivered right on time.",
      author: "Dr. Supriya Singh",
      role: "CEO, Singh Consultancy",
      service: "Web Development",
    },
  ];

  const row2 = [
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Mera real estate business ke liye ek portal banwaya tha. Dynamic filters aur backend integration solid hai. Client handling runs very smooth.",
      author: "Vikram Kumar",
      role: "MD, Elite Properties",
      service: "Web Development",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Highly satisfied with their Mobile App Development service. Cross-platform app banwaya, functional workflow and highly optimized code structure.",
      author: "Neha Raj",
      role: "Co-Founder, EduSpark",
      service: "Mobile App Development",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "NextGen IT Solutions architecture is very robust. Complex dashboard designs ko inhone bohot smoothly implement kiya. Highly recommended for web apps.",
      author: "Sanjay Mishra",
      role: "Tech Lead, FinVeda",
      service: "Web Development",
    },
  ];

  const infiniteRow1 = [...row1, ...row1];
  const infiniteRow2 = [...row2, ...row2];

  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-20 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-blue-600 font-extrabold block">
            — REVIEWS & STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Trusted by Growing Businesses
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Hover over any card to pause the scrolling and read.
          </p>
        </div>
      </div>

      {/* INFINITE SCROLLING CONTAINER */}
      <div className="space-y-6 max-w-[100vw]">
        {/* ROW 1: Left to Right */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left gap-6 flex">
            {infiniteRow1.map((t, idx) => (
              <div
                key={`row1-${t.id}-${idx}`}
                className="w-[350px] md:w-[450px] shrink-0 bg-white p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                {/* Author Info block with Photo */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20 shrink-0"
                  />
                  <div>
                    <h4 className="font-black text-slate-900 text-xs tracking-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role} •{" "}
                      <span className="text-blue-600 font-bold">
                        {t.service}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Right to Left */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-right gap-6 flex">
            {infiniteRow2.map((t, idx) => (
              <div
                key={`row2-${t.id}-${idx}`}
                className="w-[350px] md:w-[450px] shrink-0 bg-white p-6 rounded-sm shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                {/* Author Info block with Photo */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20 shrink-0"
                  />
                  <div>
                    <h4 className="font-black text-slate-900 text-xs tracking-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role} •{" "}
                      <span className="text-blue-600 font-bold">
                        {t.service}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
