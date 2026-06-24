import React from "react";

const TestimonialsSection = () => {
  // 6 Authentic Testimonials with Professional Profile Pictures optimized for Tech Solex
  const row1 = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Tech Solex developed our e-commerce platform from scratch. Unka code clean hai aur website ki speed super-fast hai. Best web development team in Sheikhpura!",
      author: "Rajeev Kumar",
      role: "Founder, Bihar Retails",
      service: "Web Development",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "We needed a heavy-duty custom Android application for our logistics business. Tech Solex delivered a top-notch software product with an incredibly smooth UI/UX.",
      author: "Amit Sharma",
      role: "Director, Sharma Logistics",
      service: "Mobile App Development",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Amazing engineering! Tech Solex high-performance web development completely transformed our digital presence. Best IT consultancy service provider in Bihar.",
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
        "Mera real estate business ke liye ek portal banwaya tha Tech Solex se. On-page technical SEO, dynamic filters aur backend database management system solid hai.",
      author: "Vikram Kumar",
      role: "MD, Elite Properties",
      service: "Web Development",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Highly satisfied with their Mobile App Development service. Cross-platform app banwaya, functional workflow and highly optimized loading speeds on regional networks.",
      author: "Neha Raj",
      role: "Co-Founder, EduSpark",
      service: "Mobile App Development",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80",
      quote:
        "Tech Solex software architecture design is very robust. Complex dashboard layouts ko Patna and regional markets me inhone bohot smoothly deploy kiya hai.",
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
      className="bg-[#FFFFFF] py-20 overflow-hidden font-sans border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-[#0A2E86] font-extrabold block">
            — REVIEWS & STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">
            Trusted by Growing Businesses
          </h2>
          <p className="text-[#666666] text-xs md:text-sm">
            Hover over any card to pause the scrolling and read how Tech Solex
            helps companies scale.
          </p>
        </div>
      </div>

      {/* INFINITE SCROLLING CONTAINER */}
      <div className="space-y-6 max-w-[100vw]">
        {/* ROW 1: Left to Right */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-left gap-6 flex hover:[animation-play-state:paused] cursor-pointer">
            {infiniteRow1.map((t, idx) => (
              <div
                key={`row1-${t.id}-${idx}`}
                className="w-[350px] md:w-[450px] shrink-0 bg-[#F8FAFC] p-6 rounded-md shadow-sm border border-[#E5E7EB] flex flex-col justify-between transition-all duration-300 hover:border-[#21C4FF] hover:shadow-md"
              >
                <p className="text-[#666666] text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                {/* Author Info block with Photo */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#0A2E86]/20 shrink-0"
                  />
                  <div>
                    <h4 className="font-black text-[#1A1A1A] text-xs tracking-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#666666]">
                      {t.role} •{" "}
                      <span className="text-[#0A2E86] font-extrabold group-hover:text-[#21C4FF]">
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
          <div className="animate-marquee-right gap-6 flex hover:[animation-play-state:paused] cursor-pointer">
            {infiniteRow2.map((t, idx) => (
              <div
                key={`row2-${t.id}-${idx}`}
                className="w-[350px] md:w-[450px] shrink-0 bg-[#F8FAFC] p-6 rounded-md shadow-sm border border-[#E5E7EB] flex flex-col justify-between transition-all duration-300 hover:border-[#21C4FF] hover:shadow-md"
              >
                <p className="text-[#666666] text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                {/* Author Info block with Photo */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#0A2E86]/20 shrink-0"
                  />
                  <div>
                    <h4 className="font-black text-[#1A1A1A] text-xs tracking-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#666666]">
                      {t.role} •{" "}
                      <span className="text-[#0A2E86] font-extrabold">
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
