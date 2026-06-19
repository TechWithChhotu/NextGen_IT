import React from "react";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async"; // Imported Helmet for dynamic SEO metadata

// 6 Verticals complete database with highly targeted SEO Meta Data
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
    accentBg: "bg-blue-50/50 text-blue-600 border-blue-100",
    badgeBg: "bg-blue-600",
    // SEO Data
    metaTitle: "Best Web Development Services in Sheikhpura Bihar | NextGen IT",
    metaDesc:
      "Get premium, template-free custom web design and MERN stack web applications in Sheikhpura, Bihar. Scale your business online with fast loading speeds and high conversion rates.",
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
    accentBg: "bg-purple-50/50 text-purple-600 border-purple-100",
    badgeBg: "bg-purple-600",
    // SEO Data
    metaTitle: "Android & iOS Mobile App Development in Bihar | NextGen IT",
    metaDesc:
      "Develop custom, feature-rich Android and iOS applications tailored for your brand or enterprise in Sheikhpura, Bihar. High performance and lag-free UI guaranteed.",
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
    accentBg: "bg-emerald-50/50 text-emerald-600 border-emerald-100",
    badgeBg: "bg-emerald-600",
    // SEO Data
    metaTitle: "Rank #1 on Google: Local SEO & Digital Marketing Sheikhpura",
    metaDesc:
      "Grow your online presence with professional local SEO audits and high-ROI digital marketing in Sheikhpura and across Bihar. Get more leads and visible rankings today.",
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
    accentBg: "bg-orange-50/50 text-orange-600 border-orange-100",
    badgeBg: "bg-orange-600",
    // SEO Data
    metaTitle:
      "Professional Graphic Design Services in Sheikhpura | NextGen IT",
    metaDesc:
      "Get premium marketing flyers, banners, social media ad creatives, and stationery layouts designed by top graphic designers in Bihar to attract premium clients.",
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
    accentBg: "bg-pink-50/50 text-pink-600 border-pink-100",
    badgeBg: "bg-pink-600",
    // SEO Data
    metaTitle: "Corporate Logo Design & Brand Identity Systems Bihar",
    metaDesc:
      "Build a solid brand with unique, mathematical vector logo layouts and corporate brand guideline packages. Transform your local business into a trusted national brand.",
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
    accentBg: "bg-indigo-50/50 text-indigo-600 border-indigo-100",
    badgeBg: "bg-indigo-600",
    // SEO Data
    metaTitle: "Commercial Video Editing & Reels Production Sheikhpura",
    metaDesc:
      "Boost your social media engagement with high-retention cinematic Reels, marketing shorts, and corporate ad videos engineered with motion graphics and pro audio mastering.",
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

      {/* Exact Light Blueprint Grid Background */}
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
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold border ${service.accentBg}`}
                  >
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
                className={`${service.badgeBg} text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-md hover:opacity-90 transition-all inline-block`}
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
