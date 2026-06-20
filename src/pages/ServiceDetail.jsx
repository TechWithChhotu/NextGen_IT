import React from "react";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

// 6 Verticals database with strictly unified color tokens (No more random colors)
const servicesData = {
  "web-development": {
    title: "Custom Web Development",
    subtitle: "High-Performance Websites Engineered From Scratch",
    description:
      "Hum fadtas ke ready-made templates use nahi karte. Our team builds lightning-fast, secure, and fully responsive web applications using modern tech stacks like MERN & Next.js to convert your traffic into customers.",
    features: [
      "Custom UI/UX & Responsive Layouts",
      "SEO-Friendly Code Structure",
      "Robust Backend & Database Integration",
      "E-Commerce Solutions & Admin Dashboards",
    ],
    techStack: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    metaTitle: "Best Web Development Services in Sheikhpura Bihar | NextGen IT",
    metaDesc:
      "Get premium, template-free custom web design and MERN stack web applications in Sheikhpura, Bihar. Scale your business online with fast loading speeds and high conversion rates.",
    pricing: [
      {
        name: "Startup Lite",
        price: "₹14,999",
        period: "One-time",
        negotiable: true,
        desc: "Perfect for new local businesses needing an online identity.",
        perks: [
          "Single Page Responsive Layout",
          "Basic On-Page SEO setup",
          "Contact Form Integration",
          "1 Month Free Server Support",
        ],
        popular: false,
      },
      {
        name: "Business Pro",
        price: "₹34,999",
        period: "One-time",
        negotiable: true,
        desc: "Ideal for growing enterprises requiring dynamic feature workflows.",
        perks: [
          "Up to 5 Pages Modern UI",
          "Full Dynamic CMS Admin Panel",
          "High-Performance Next.js Architecture",
          "Advanced Database System",
          "3 Months Priority Technical Support",
        ],
        popular: true,
      },
      {
        name: "Enterprise Custom",
        price: "Custom",
        period: "Based on Scope",
        negotiable: true,
        desc: "Engineered specifically for heavy e-commerce scale or SaaS builds.",
        perks: [
          "Unlimited Scalable Architecture",
          "Advanced Payment Gateways & SMS API",
          "Rigorous Security Protocols Audit",
          "Dedicated Database Clusters",
          "1 Year Enterprise SLA Support",
        ],
        popular: false,
      },
    ],
  },
  "app-development": {
    title: "Mobile App Development",
    subtitle: "Lag-Free & Scalable iOS & Android Applications",
    description:
      "Whether it is a complex business portal or a high-performance Android/iOS app— hum aapke exact requirement ke hisab se native aur cross-platform apps architecture design karte hain regular updates ke sath.",
    features: [
      "Cross-Platform Android & iOS Apps",
      "Smooth UI Transitions & Micro-interactions",
      "Offline Mode & Local Storage Cache",
      "Push Notifications & Payment Gateways",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Firebase",
      "Node.js",
      "Tailwind Native",
    ],
    metaTitle: "Android & iOS Mobile App Development in Bihar | NextGen IT",
    metaDesc:
      "Develop custom, feature-rich Android and iOS applications tailored for your brand or enterprise in Sheikhpura, Bihar. High performance and lag-free UI guaranteed.",
    pricing: [
      {
        name: "MVP Starter",
        price: "₹49,999",
        period: "One-time",
        negotiable: true,
        desc: "Launch your application product prototype swiftly to validation markets.",
        perks: [
          "Android Native App Structure",
          "Standard Firebase Auth Integration",
          "Clean Modern UI Shell",
          "Basic App Store Deployment Guidance",
        ],
        popular: false,
      },
      {
        name: "Cross Hybrid Pro",
        price: "₹99,999",
        period: "One-time",
        negotiable: true,
        desc: "Unified build package targeting both flagship app ecosystems simultaneously.",
        perks: [
          "Cross-Platform Flutter/React Native",
          "Robust Node.js Custom Backend APIs",
          "Push Notification Campaigns Panel",
          "Full Google Play & Apple App Store Deployment",
          "6 Months Maintenance Cycle",
        ],
        popular: true,
      },
      {
        name: "Scale Enterprise",
        price: "Custom",
        period: "Architecture Based",
        negotiable: true,
        desc: "Heavy operational volume logic tailored for massive concurrent state queries.",
        perks: [
          "Microservices Application Structure",
          "Real-Time WebSockets Synchronization",
          "Biometric Authentication Integrations",
          "Dedicated Project Engineering Team",
        ],
        popular: false,
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO",
    subtitle: "Dominate Local Search & Drive Targeted Traffic",
    description:
      "Result-driven On-Page SEO optimization, advanced technical SEO audits, aur targeted local campaigns jo aapke business ko Sheikhpura aur poore Bihar ke markets me rank #1 par lane ke liye engineer kiye gaye hain.",
    features: [
      "Advanced On-Page & Technical SEO Audits",
      "Local SEO Optimization (Sheikhpura Market)",
      "High-ROI Social Media Marketing Campaigns",
      "Lead Generation & Strategic Content Marketing",
    ],
    techStack: [
      "Google Analytics",
      "SEMrush",
      "Meta Ads Manager",
      "Google Search Console",
      "Ahrefs",
    ],
    metaTitle: "Rank #1 on Google: Local SEO & Digital Marketing Sheikhpura",
    metaDesc:
      "Grow your online presence with professional local SEO audits and high-ROI digital marketing in Sheikhpura and across Bihar. Get more leads and visible rankings today.",
    pricing: [
      {
        name: "Local Visibility",
        price: "₹9,999",
        period: "Month",
        negotiable: true,
        desc: "Perfect tier to gain top local map search listings and foundational reviews traction.",
        perks: [
          "Google Business Profile Optimization",
          "Targeted Local Citation Submissions",
          "10 Primary Target Keywords Focus",
          "Monthly Status Analytics Dashboard Report",
        ],
        popular: false,
      },
      {
        name: "Market Dominator",
        price: "₹24,999",
        period: "Month",
        negotiable: true,
        desc: "Aggressive search rank optimization plus paid social acquisition setup.",
        perks: [
          "Comprehensive Technical SEO Audits",
          "Competitor Backlink Intercept Actions",
          "Meta or Google Ads Management Strategy",
          "High-Retention Organic Content Calendars",
          "Weekly Conversion Reviews Support",
        ],
        popular: true,
      },
      {
        name: "National Scale",
        price: "Custom Plan",
        period: "Strategy Based",
        negotiable: true,
        desc: "Full omnichannel acquisition architecture for large e-commerce catalog businesses.",
        perks: [
          "Multichannel Campaign Funnel Engineering",
          "High-Budget Media Buying Audits",
          "PR & Influencer Network Access Matrix",
          "Dedicated Growth Performance Analyst",
        ],
        popular: false,
      },
    ],
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Pixel-Perfect Visual Arts & Marketing Assets",
    description:
      "Hum design karte hain unique, high-retention digital assets, corporate materials, aur marketing banners jo local enterprises ko ek international identity aur Premium Look provide karte hain.",
    features: [
      "Custom Digital Assets & Corporate Branding",
      "High-Engagement Posters & Banners",
      "Professional Business Cards & Stationery Layouts",
      "Scroll-Stopping Social Media Ad Artworks",
    ],
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "CorelDraw"],
    metaTitle:
      "Professional Graphic Design Services in Sheikhpura | NextGen IT",
    metaDesc:
      "Get premium marketing flyers, banners, social media ad creatives, and stationery layouts designed by top graphic designers in Bihar to attract premium clients.",
    pricing: [
      {
        name: "Essentials Pack",
        price: "₹4,999",
        period: "One-time",
        negotiable: true,
        desc: "Quick, professional digital assets tailored for localized marketing needs.",
        perks: [
          "5 High-Resolution Custom Ad Banners",
          "Premium Double-Sided Visiting Card",
          "Social Media Cover Design Pack",
          "Source Vector Files Delivered",
        ],
        popular: false,
      },
      {
        name: "Corporate Marketing Kit",
        price: "₹12,999",
        period: "One-time",
        negotiable: true,
        desc: "Complete visual transformation asset catalog for physical and digital presence.",
        perks: [
          "15 Diverse Social Media Posts layouts",
          "Custom Marketing Brochures & Pamphlets Layout",
          "Letterhead & Document Cover Shells",
          "Branded Marketing Pitch Deck (PDF)",
          "2 Revision Iterations Guarantee",
        ],
        popular: true,
      },
      {
        name: "Unlimited Retainer",
        price: "₹24,999",
        period: "Month",
        negotiable: true,
        desc: "An on-demand premium corporate designer operating closely for your brand pipeline.",
        perks: [
          "Continuous Stream Visual Deliverables",
          "Priority Execution Queue Scheduling",
          "Direct Figma Canvas Review Workspace",
          "Comprehensive Brand Visual Uniformity Audits",
        ],
        popular: false,
      },
    ],
  },
  "logo-design": {
    title: "Logo Design & Branding",
    subtitle: "Memorable Corporate Identity Systems",
    description:
      "Aapke business ki core value ko represent karne wala unique identification system. Memorable brand identity, modern color guidelines, aur clean corporate iconography jo local businesses ko recognized national brands me convert kare.",
    features: [
      "Custom Mathematical & Vector Logo Systems",
      "Comprehensive Brand Style Guidelines",
      "Scalable Typography & Iconography Packages",
      "Premium Business Material & Letterhead Sets",
    ],
    techStack: [
      "Figma",
      "Adobe Illustrator",
      "Vector Graphics",
      "Brand Architecture",
    ],
    metaTitle: "Corporate Logo Design & Brand Identity Systems Bihar",
    metaDesc:
      "Build a solid brand with unique, mathematical vector logo layouts and corporate brand guideline packages. Transform your local business into a trusted national brand.",
    pricing: [
      {
        name: "Core Logo",
        price: "₹2,999",
        period: "One-time",
        negotiable: true,
        desc: "Clean, professional corporate identifier layout for structural usage.",
        perks: [
          "2 Custom Minimalist Concept Layouts",
          "High-Resolution Vector Formats (AI, SVG)",
          "Transparent Background Assets",
          "Standard Typography Selection Details",
        ],
        popular: false,
      },
      {
        name: "Full Brand Identity",
        price: "₹7,999",
        period: "One-time",
        negotiable: true,
        desc: "Complete visual ecosystem blueprint document governing corporate styling guidelines.",
        perks: [
          "4 Distinct Mathematical Concept Options",
          "Comprehensive Brand Style Guideline Deck",
          "Official Color Palette Configuration Specs",
          "Complete Corporate Iconography Pack",
          "Unlimited Vector Revisions Until Signoff",
        ],
        popular: true,
      },
      {
        name: "National Enterprise System",
        price: "₹19,999",
        period: "One-time",
        negotiable: true,
        desc: "Prestige identity structures tailored for modern trademark application paths.",
        perks: [
          "Premium Symbol Custom Iconography Engineering",
          "Full Business Stationery Collaterals Set",
          "Intellectual Property Legal Transfer Forms",
          "Premium Merchandise Visual Mockup Previews",
        ],
        popular: false,
      },
    ],
  },
  "video-editing": {
    title: "Video Editing & Production",
    subtitle: "High-Retention Content Engineered For High Engagement",
    description:
      "Hum create karte hain scroll-stopping Reels, commercial shorts, promotional material, aur highly professional corporate ad videos jo aapke conversion aur digital engagement metrics ko instantly boost karte hain.",
    features: [
      "High-Retention Reels, Shorts & TikTok Formats",
      "Cinematic Promotional & Corporate Ad Editing",
      "Dynamic Motion Graphics & Visual FX Tracking",
      "Advanced Audio Mastering & Sound Designing",
    ],
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    metaTitle: "Commercial Video Editing & Reels Production Sheikhpura",
    metaDesc:
      "Boost your social media engagement with high-retention cinematic Reels, marketing shorts, and corporate ad videos engineered with motion graphics and pro audio mastering.",
    pricing: [
      {
        name: "Content Creator Pack",
        price: "₹7,999",
        period: "10 Reels",
        negotiable: true,
        desc: "Designed specifically to consistently power high-retention social platform algorithms.",
        perks: [
          "Up to 60-Second Vertical Editing Format",
          "Dynamic Animated Captions Insertion",
          "Sound Design Hooks & Trending FX Integration",
          "2 Fast-Track Revision Cycles Provided",
        ],
        popular: false,
      },
      {
        name: "Corporate Commercial",
        price: "₹19,999",
        period: "Per Project",
        negotiable: true,
        desc: "Cinematic, persuasive corporate visual storytelling optimized for high-roi conversion funnels.",
        perks: [
          "Premium Promotional Product Visual Editing",
          "Advanced Sound Design & Voiceover Balancing",
          "Dynamic Motion Graphics Branding Accents",
          "Color Grading & Cinematic Style Overlays",
          "4K High Bitrate Master Rendering Delivery",
        ],
        popular: true,
      },
      {
        name: "Growth Content Retainer",
        price: "₹39,999",
        period: "Month Pack",
        negotiable: true,
        desc: "Complete full-time automated production engine for aggressive digital media operations.",
        perks: [
          "30 High-Retention Reels & Marketing Shorts",
          "2 Long-Form Corporate Commercial Projects",
          "Dedicated Media Project Editing Engineer",
          "Strategic Hook Engineering Consultations",
        ],
        popular: false,
      },
    ],
  },
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  // If service doesn't exist
  if (!service) {
    return (
      <div className="text-center py-32 text-slate-900 bg-white min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className="text-3xl font-black text-red-600">Service Not Found</h2>
        <p className="text-slate-500 text-sm">
          The route or vertical you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-blue-600 mt-4 inline-block hover:underline font-bold text-sm"
        >
          &larr; Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-950 min-h-screen font-sans relative overflow-hidden selection:bg-blue-100">
      {/* 🚀 DYNAMIC SEO METADATA BLOCK */}
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDesc} />
      </Helmet>

      {/* 60% Element: Exact Light Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-20 border-b border-slate-200">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 group transition-colors"
            >
              <span className="transform group-hover:-translate-x-0.5 transition-transform">
                &larr;
              </span>{" "}
              Back to Home
            </Link>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">
                SERVICE OVERVIEW
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                {service.title}
              </h1>
            </div>

            {/* 10% Accent applied cleanly to important context subtitles */}
            <p className="text-lg md:text-xl font-bold text-blue-600 max-w-2xl">
              {service.subtitle}
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl pt-2">
              {service.description}
            </p>
          </div>
        </section>

        {/* 2. GRID ARRANGEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-slate-200 divide-y divide-slate-200 lg:divide-y-0 lg:divide-x">
          {/* FEATURES LISTING */}
          <section className="lg:col-span-2 py-16 pr-0 lg:pr-12">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-6">
              — CORE DELIVERABLES
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">
              What we build and manage for you
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 bg-slate-50/50 border border-slate-200 rounded-lg flex items-start gap-4 transition-all duration-300 hover:bg-slate-50"
                >
                  {/* Strict 10% accent color checkmarks */}
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold border bg-blue-50/50 text-blue-600 border-blue-100">
                    ✓
                  </span>
                  <p className="text-slate-700 text-sm md:text-base font-semibold leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. TECH STACK & TOOLS */}
          <section className="py-16 pl-0 lg:pl-12 flex flex-col justify-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-6">
              — POWERED BY
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Technologies & Tools
            </h2>

            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-slate-100 text-slate-600 border border-slate-200 px-3.5 py-2 text-xs font-mono font-bold rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* 3. PREMIUM 3-TIER PRICING SECTION */}
        <section className="py-20 border-b border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
              — TRANSPARENT COMMITMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Flexible Packages Tailored For Growth
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Choose a strategic tier engineered to optimize your operational
              workflow and matching execution constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {service.pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border transition-all duration-300 relative flex flex-col bg-white ${
                  plan.popular
                    ? `border-slate-900 shadow-lg ring-1 ring-slate-900 scale-102 z-10 md:-mt-2`
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* Unified Brand Accent Blue Badge for Popular item */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest font-black text-white rounded-full bg-blue-600">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 space-y-1.5">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed min-h-[32px]">
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-6 border-b border-slate-100 pb-6">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-xs font-mono font-bold lowercase">
                      / {plan.period}
                    </span>

                    {/* Consistent Subtle Accent-Friendly Badge for Negotiable tag */}
                    {plan.negotiable && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-sm self-center">
                        Negotiable
                      </span>
                    )}
                  </div>
                </div>

                {/* Features included */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {plan.perks.map((perk, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-xs md:text-sm font-semibold text-slate-700"
                    >
                      <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border bg-blue-50 text-blue-600 border-blue-100 text-[10px]">
                        ✓
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* 10% Focus Action items strictly bounded by brand color */}
                <HashLink
                  smooth
                  to="/#contact"
                  className={`w-full py-3 text-center text-xs uppercase tracking-widest font-bold rounded transition-all duration-200 ${
                    plan.popular
                      ? `bg-blue-600 text-white shadow-md hover:bg-blue-700`
                      : "bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Select Plan &rarr;
                </HashLink>
              </div>
            ))}
          </div>

          {/* Bottom Hybrid Flexibility Disclaimer */}
          <div className="mt-10 text-center max-w-2xl mx-auto p-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-lg">
            <p className="text-xs md:text-sm font-semibold text-slate-600">
              💡{" "}
              <span className="text-slate-900 font-bold">
                Budget Variable Note:
              </span>{" "}
              Aapke custom requirements aur scale के हिसाब से कीमतें पूरी तरह से{" "}
              <span className="text-blue-600 underline decoration-wavy decoration-1">
                Flexible aur Negotiable
              </span>{" "}
              हैं। Hum local businesses ko scale karne ke liye hamesha
              affordable structural adjustment provide karte hain.
            </p>
          </div>
        </section>

        {/* 4. CLEAN LIGHT CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto space-y-6 p-8 md:p-12 border border-slate-200 bg-slate-50/40 rounded-xl relative">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to scale your enterprise?
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
              Let's discuss your execution timeline, local targeting benchmarks,
              and workflow dynamics. Our engineering collective is ready.
            </p>
            <div className="pt-4">
              <HashLink
                smooth
                to="/#contact"
                className="bg-blue-600 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-md hover:bg-blue-700 transition-all inline-block"
              >
                Discuss this service &rarr;
              </HashLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
