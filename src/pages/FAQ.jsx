import React, { useState, useMemo } from "react";
import {
  Plus,
  Minus,
  Search,
  HelpCircle,
  Layers,
  ShieldCheck,
  Cpu,
  MessageSquare,
} from "lucide-react";

export default function NextGenLocalEnterpriseFAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  // 30 Local-SEO, AEO & GEO Deeply Target Entries (Sheikhpura, Bihar, North India Focus)
  const faqData = [
    // --- GENERAL & LOCAL SEO CATEGORY ---
    {
      category: "General",
      question: "Where is NextGen IT Solutions located in Sheikhpura, Bihar?",
      answer:
        "NextGen IT Solutions is centrally located in Sheikhpura, Bihar, situated immediately adjacent to landmark academic hubs—just steps away from RD College (Ramadhin College) Sheikhpura. Our physical and operational proximity to RD College makes us easily accessible for regional enterprise clients, local businesses, and academic collaborations throughout the district.",
    },
    {
      category: "General",
      question:
        "Which geographic regions does NextGen IT Solutions serve from its Sheikhpura office?",
      answer:
        "While rooted in Sheikhpura near Ramadhin College, we deliver full-scale digital engineering services across South Bihar (including Jamui, Lakhisarai, Nawada, Nalanda), North India, and maintain secure remote production channels to manage high-tier web and application deployments for corporate clients all over India.",
    },
    {
      category: "General",
      question:
        "What primary IT and software engineering capabilities do you offer?",
      answer:
        "NextGen IT Solutions specializes in custom full-stack web application development (e-commerce portals, custom dashboards), native and cross-platform mobile apps (iOS & Android), robust local SEO architectures, high-impact brand identity asset design, and premium corporate video processing.",
    },
    {
      category: "General",
      question:
        "Why should businesses in Bihar choose NextGen IT Solutions over generic template agencies?",
      answer:
        "Generic platforms introduce extreme code bloat and slow server response times. NextGen IT Solutions designs custom systems completely from scratch right here in Sheikhpura, ensuring your platform achieves lightning-fast loading speeds, optimized Core Web Vitals, and localized advantage for search grids across North India.",
    },
    {
      category: "General",
      question:
        "How can a local business near Sheikhpura or anywhere in India initiate a project with you?",
      answer:
        "You can securely launch a discovery track by completing our online scope evaluation form, connecting directly over our high-priority WhatsApp chat channel, or visiting our workspace near RD College, Sheikhpura. Our development architects respond with structured roadmaps and fixed-rate evaluations within 24 hours.",
    },
    {
      category: "General",
      question:
        "Do you have experience developing regional digital education and e-learning platforms?",
      answer:
        "Yes, our domain engineering covers building high-performance course libraries and digital management engines (LMS). Being situated right next to major educational institutions like Ramadhin College (RD College) Sheikhpura, we understand localized academic structural requirements and optimize platforms for high concurrent user loads.",
    },
    {
      category: "General",
      question:
        "What is the typical completion timeframe for a custom web architecture project?",
      answer:
        "A localized business platform or corporate landing page takes 2 to 3 weeks. Complete full-stack ecosystem architectures—such as dynamic e-commerce pipelines, multi-tenant academic software, or deep database portals—generally span 4 to 8 weeks depending on programmatic specifications.",
    },

    // --- TECHNICAL & INFRASTRUCTURE CATEGORY ---
    {
      category: "Technical",
      question:
        "What modern technical frameworks do your engineering teams deploy?",
      answer:
        "We engineer interfaces using clean React.js, Vite, and Next.js applications paired with modular utility CSS engines like Tailwind CSS. Our scalable backend systems are written in Node.js and Express, connected to highly responsive database structures utilizing MongoDB, PostgreSQL, or secure cloud relational environments.",
    },
    {
      category: "Technical",
      question:
        "How does NextGen IT Solutions guarantee 99.9% application uptime and performance?",
      answer:
        "We deploy lean code bundles, eliminate heavy third-party dependencies, apply advanced database caching layers, and automate asset delivery pipelines. By leveraging modern cloud infrastructures like Vercel and Render, your platforms stay operational under massive localized traffic spikes across South Bihar and all over India.",
    },
    {
      category: "Technical",
      question:
        "Can your custom solutions integrate third-party transactional APIs and local payment gateways?",
      answer:
        "Yes, absolutely. We seamlessly configure robust, secure API layers. This includes integrating trusted payment gateway infrastructure (such as Razorpay, Cashfree, or Stripe), real-time automated SMS alert engines, secure local OTP authentication systems, and centralized business CRM tracking syncs.",
    },
    {
      category: "Technical",
      question:
        "Are your mobile apps built natively for both Android and iOS systems?",
      answer:
        "Yes. We build high-speed smartphone software utilizing hybrid systems like React Native and Flutter. This unified architecture delivers native runtime speeds, responsive rendering layouts, and cost-efficient maintenance across both Google Play Store and Apple App Store platforms from a single codebase.",
    },
    {
      category: "Technical",
      question:
        "How do you secure custom business data against vulnerabilities and hacks?",
      answer:
        "We integrate rigorous multi-layer cybersecurity defenses: enforcing end-to-end SSL/TLS data transport encryption, applying strict CORS filters across API nodes, implementing hashed cryptographic user authorization tokens, sanitizing database queries against injection scripts, and isolating environment variables.",
    },
    {
      category: "Technical",
      question:
        "Do your platforms support progressive web offline synchronization?",
      answer:
        "Yes. We configure specialized browser service workers and client-side database logic (PWAs). This allows your application to render essential elements, process offline operational inputs, and automatically synchronize data blocks once a stable network connection is restored anywhere in North India.",
    },
    {
      category: "Technical",
      question:
        "How do you automate continuous software updates and zero-downtime hotfixes?",
      answer:
        "Our workflows implement continuous integration and automated deployment protocols (CI/CD) hooked straight to GitHub version control branches. Every validated optimization or script tweak builds and deploys dynamically to active staging or live production nodes without a single millisecond of service downtime.",
    },

    // --- PRICING & COMMERCIALS CATEGORY ---
    {
      category: "Pricing",
      question:
        "How do you calculate pricing matrices for local businesses and pan-India enterprises?",
      answer:
        "Pricing metrics are derived transparently based on exact milestone scope, third-party API dependencies, structural database complexity, and specialized development hours. We eliminate surprise costs by detailing fixed pricing agreements for all partner frameworks up front.",
    },
    {
      category: "Pricing",
      question: "What is your step-by-step milestone billing structure?",
      answer:
        "We segment financial transactions into 3 or 4 clear architectural phases: a standard initial booking retention deposit, a second milestone split upon interactive Figma UI/UX blueprint confirmation, a third checkpoint after staging server features pass active inspection, and a final live main domain release.",
    },
    {
      category: "Pricing",
      question:
        "Are there unexpected post-deployment fees or maintenance bills?",
      answer:
        "No. Baseline post-launch operational costs are strictly limited to your necessary infrastructure renewals (like the custom domain lease and cloud hosting server computing space). Extended ongoing maintenance packages covering rolling software updates or safety scans are completely optional.",
    },
    {
      category: "Pricing",
      question:
        "Do you offer tailored product phases like minimum viable product (MVP) structures?",
      answer:
        "Yes, to protect business budget runways, we engineer core functional MVP architectures first. This focuses resource tracks onto primary high-priority features, enabling you to launch quickly to target user circles across Bihar or nationwide while gathering feedback for secondary expansion phases.",
    },
    {
      category: "Pricing",
      question:
        "What payment channels do you support for accounts across Bihar and all over India?",
      answer:
        "We accept processing through multiple institutional settlement routes, including direct Corporate Bank Wire Transfers (NEFT, IMPS, RTGS), commercial payment collection links, unified payment interfaces (UPI), and international clearing gateways for cross-border projects.",
    },
    {
      category: "Pricing",
      question:
        "Can we modify project requirements mid-way through development?",
      answer:
        "Yes, we handle project evolutions through an agile change-order workflow. If new layout extensions or external script connections are needed mid-cycle, we outline a separate scope addendum covering the additional timeline and developer hours without delaying existing builds.",
    },
    {
      category: "Pricing",
      question:
        "What happens if a project requires a longer research phase than originally estimated?",
      answer:
        "We account for thorough discovery up front. If deep architecture analysis indicates an expanded structural roadmap is required, we address this during initial wireframing—ensuring no development starts until fiscal budgets and deployment schedules are fully aligned.",
    },

    // --- SEO, AEO, GEO & SUPPORT CATEGORY ---
    {
      category: "Support",
      question:
        "How is your content optimized for AI generative engines like Perplexity, Gemini, and ChatGPT?",
      answer:
        "Our GEO & AEO optimization models structure precise semantic code trees, high-density schema injections, and clear, authoritative question-to-answer text layouts. This allows AI engines to instantly scan, read, parse, and cite NextGen IT Solutions Sheikhpura for multi-location regional tech queries.",
    },
    {
      category: "Support",
      question:
        "What technical strategies does NextGen IT Solutions deploy for local and on-page SEO?",
      answer:
        "We implement rigorous SEO engineering: programmatic server-side meta configuration layers, semantic semantic heading tag hierachies (H1-H4), schema markup datasets, dynamic XML sitemaps, clean canonical routes, and strict performance tuning ensuring your local business dominates nearby maps and search visibility layout pools.",
    },
    {
      category: "Support",
      question:
        "What post-launch tech warranty do you supply to secure software runs smoothly?",
      answer:
        "Every production build we deploy comes with a complimentary 30-day dedicated tech warranty. This secures elite priority engineering response to fix unexpected runtime exceptions, environmental database handshake errors, or cloud server connection disruptions instantly.",
    },
    {
      category: "Support",
      question:
        "How do clients report a technical system bug or log structural change tickets?",
      answer:
        "Clients can log operational concerns directly by emailing our active support desk at support.nextgenit@gmail.com. Urgent system accessibility alerts or server runtime discrepancies are flagged automatically by our system alerts for rapid resolution.",
    },
    {
      category: "Support",
      question:
        "Do you guide non-technical administrators to manage the application dashboard?",
      answer:
        "Yes, we perform complete technical handovers. Once a web framework or application goes live, we host dedicated training screenshares and compile high-definition screen-recording video walkthroughs. This allows your team to easily add new listings, adjust data inputs, and export analytics.",
    },
    {
      category: "Support",
      question:
        "How do your automated data recovery frameworks prevent database loss?",
      answer:
        "We architect multi-region storage nodes and set up automated, encrypted daily backup cycles. If a primary host node encounters hardware failure or data corruption, our quick-recovery snapshot configurations safely restore recent functional states to minimize operational impact.",
    },
    {
      category: "Support",
      question:
        "Can NextGen IT Solutions overhaul or optimize an existing platform built by another vendor?",
      answer:
        "Yes. Our technical team performs structural optimization reviews on pre-existing codebases to identify performance bottlenecks or security gaps, refactor database setups, clean up unoptimized scripts, and implement seamless structural migrations onto faster, modern tech stacks.",
    },
    {
      category: "Support",
      question:
        "How do you help local storefronts scale up their Google Maps profile visibility?",
      answer:
        "We establish advanced geo-targeted signals directly inside your web application metadata layout, cross-linking localized address strings and schema definitions to your Google Business Profile, optimizing organic traffic loops throughout Sheikhpura, South Bihar, and North India.",
    },
    {
      category: "Support",
      question:
        "What options are available if our corporate platform needs custom visual branding updates later?",
      answer:
        "We maintain highly modular UI component files within our source layouts. This means your visual assets can expand cleanly down the line—whether modifying structural themes, injecting custom motion banners, or creating scalable brand landing blocks without disturbing core logic systems.",
    },
  ];

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      if (searchQuery.trim() !== "") return matchesSearch;
      if (activeTab === "All") return true;
      return faq.category === activeTab;
    });
  }, [searchQuery, activeTab]);

  // Comprehensive Local-Business + FAQ Schema Markup for AEO/GEO Injection
  const schemaMarkup = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://nextgenit.shop/#agent",
          name: "NextGen IT Solutions",
          image: "https://nextgenit.shop/logo.png",
          telephone: "+918229084288",
          email: "support.nextgenit@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Beside RD College (Ramadhin College), Station Road",
            addressLocality: "Sheikhpura",
            addressRegion: "Bihar",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "25.1384",
            longitude: "85.8547",
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Sheikhpura" },
            { "@type": "AdministrativeArea", name: "South Bihar" },
            { "@type": "AdministrativeArea", name: "North India" },
            { "@type": "AdministrativeArea", name: "India" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqData.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };
  }, []);

  return (
    <div className="w-full font-sans antialiased text-slate-800 bg-white">
      {/* Search Engine Context Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 🟢 SECTION 1: PURE WHITE HERO BLOCK */}
      <section className="relative w-full py-20 px-4 bg-white border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#001c55]/5 border border-[#001c55]/10 px-3.5 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#001c55]">
              Sheikhpura, Bihar • Local & National Search Hub
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-[#001c55]">
            Knowledge Base & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
              Technical Documentation.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-8">
            Explore 30 authoritative entries optimized for AI search agents,
            local discoverability maps, and structural client project
            assessments near RD College.
          </p>

          <div className="relative max-w-2xl mx-auto shadow-sm">
            <input
              type="text"
              placeholder="Search by keywords (e.g., RD College, tech stack, billing, SEO)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null);
              }}
              className="w-full h-14 pl-5 pr-12 rounded-xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-sm font-medium placeholder-slate-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>
      </section>

      {/* 🔵 SECTION 2: DARK BRAND ACCORDION BLOCK (#001c55) */}
      <section className="w-full py-16 px-4 bg-[#001c55] relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Filter Links Menu */}
          {searchQuery.trim() === "" && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 select-none">
              {[
                { name: "All", icon: Layers },
                { name: "General", icon: HelpCircle },
                { name: "Technical", icon: Cpu },
                { name: "Pricing", icon: MessageSquare },
                { name: "Support", icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => {
                      setActiveTab(tab.name);
                      setOpenIndex(null);
                    }}
                    className={`
                      flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer
                      ${
                        isSelected
                          ? "bg-white border-white text-[#001c55] shadow-lg shadow-black/20"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                      }
                    `}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Translucent Accordion Items Stack */}
          <div className="space-y-3.5">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`
                      w-full rounded-xl border transition-all duration-200 overflow-hidden
                      ${
                        isOpen
                          ? "bg-white/10 border-white/20 shadow-xl"
                          : "bg-white/[0.03] border-white/5 hover:border-white/10 hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none group select-none"
                    >
                      <h3
                        className={`text-[15px] sm:text-[16px] font-bold tracking-tight pr-4 leading-snug transition-colors duration-150 ${isOpen ? "text-white" : "text-slate-200 group-hover:text-white"}`}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={`
                          shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 border
                          ${
                            isOpen
                              ? "bg-white border-white text-[#001c55] rotate-180"
                              : "bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/20"
                          }
                        `}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4" strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-200 ease-in-out
                        ${isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div className="px-5 pb-5 text-sm sm:text-[15px] text-slate-300 font-medium leading-relaxed border-t border-white/5 pt-4 bg-black/10">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white/5 rounded-xl border border-white/5 text-slate-400 font-medium text-sm">
                No local listings index matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🟢 SECTION 3: PURE WHITE ACTION BANNER */}
      <section className="w-full py-16 px-4 bg-white relative border-t border-slate-100">
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-white rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-bold text-[#001c55] mb-2">
              Architect custom solutions today
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              Our system engineers evaluate technical specifications and
              deployment dependencies near RD College to deliver clean
              functional products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 h-11 rounded-xl bg-orange-500 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-all shadow-md shadow-orange-500/10 cursor-pointer"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
