import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [budget, setBudget] = useState("Under ₹10k");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-development",
    message: "",
  });

  const budgetOptions = [
    "Under ₹10k",
    "₹10k - ₹50k",
    "₹50k - ₹2L",
    "₹2L+",
    "Not sure yet",
  ];

  // Email check using Regex Pattern
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validity logic
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.message.trim().length >= 10 &&
    validateEmail(formData.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    const backendBaseUrl =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceInterest: formData.service,
      estimatedBudget: budget,
      description: formData.message,
    };

    try {
      const response = await axios.post(
        `${backendBaseUrl}/api/inquiries`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.success || response.status === 201) {
        alert("Inquiry successfully logged into our system infrastructure!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "web-development",
          message: "",
        });
        setBudget("Under ₹10k");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errMsg =
          error.response.data.message || JSON.stringify(error.response.data);
        alert("Backend Error:\n" + errMsg);
      } else {
        alert("Could not connect to backend server. Check connection or port.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-[#FFFFFF] text-[#1A1A1A] py-20 px-6 md:px-12 lg:px-24"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#0A2E86] font-bold block mb-3">
              — GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] mb-6 leading-tight">
              Let's build something <br />
              <span className="text-[#0A2E86]">that grows your business.</span>
            </h2>
            <p className="text-[#666666] text-base md:text-lg mb-10 max-w-md leading-relaxed">
              Tell us a bit about your project — we'll respond within 24 hours
              with ideas, timelines and a clear quote.
            </p>

            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg text-[#666666]">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#555555] font-semibold block">
                    CALL US
                  </span>
                  <a
                    href="tel:+918229084288"
                    className="text-base font-bold text-[#1A1A1A] hover:text-[#0A2E86] transition-colors"
                  >
                    +91 8229084288
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg text-[#666666]">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#555555] font-semibold block">
                    EMAIL
                  </span>
                  <a
                    href="mailto:support.nextgenit@gmail.com"
                    className="text-base font-bold text-[#1A1A1A] hover:text-[#0A2E86] transition-colors"
                  >
                    support.nextgenit@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg text-[#666666]">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#555555] font-semibold block">
                    LOCATION
                  </span>
                  <span className="text-base font-bold text-[#1A1A1A] block">
                    Sheikhpura, Bihar, India
                  </span>
                  <span className="text-xs text-[#666666]">
                    Serving clients across India • Remote-friendly
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          {/* WhatsApp Button */}
          <div className="mt-12">
            <a
              href="https://wa.me/918229084288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-800 font-semibold px-6 py-3.5 rounded-md transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.971 0c3.178.001 6.165 1.24 8.413 3.494 2.25 2.253 3.487 5.244 3.485 8.423-.003 6.623-5.353 11.97-11.916 11.97-2.004-.001-3.973-.507-5.73-1.474L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.972C16.579 1.916 14.11 1.88 11.97 1.88c-5.437 0-9.862 4.421-9.866 9.854-.001 1.706.46 3.375 1.334 4.868l-.995 3.636 3.724-.976zm11.37-7.37c-.302-.15-1.787-.88-2.062-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.492-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.018-.462.13-.61.135-.133.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.196 0-.518.074-.789.374-.27.3-1.035 1.013-1.035 2.47 0 1.457 1.061 2.864 1.21 3.064.149.2 2.088 3.196 5.06 4.481.707.306 1.258.489 1.69.626.712.226 1.36.194 1.872.118.571-.085 1.787-.73 2.037-1.43.25-.7.25-1.3.175-1.43-.075-.125-.275-.2-.575-.35z" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-wider font-bold text-[#555555]">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  placeholder="John Doe"
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#0A2E86] focus:ring-1 focus:ring-[#21C4FF] transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-wider font-bold text-[#555555]">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  placeholder="you@email.com"
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#0A2E86] focus:ring-1 focus:ring-[#21C4FF] transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-wider font-bold text-[#555555]">
                  PHONE (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  placeholder="+91 ..."
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#0A2E86] focus:ring-1 focus:ring-[#21C4FF] transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Service Field */}
              <div className="flex flex-col gap-2">
                {/* FIXED: Added htmlFor and updated text color for higher contrast */}
                <label
                  htmlFor="service-select"
                  className="text-[11px] uppercase tracking-wider font-bold text-slate-600"
                >
                  SERVICE INTERESTED IN *
                </label>
                <div className="relative">
                  {/* FIXED: Added unique id to match the label's htmlFor */}
                  <select
                    id="service-select"
                    className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#0A2E86] focus:ring-1 focus:ring-[#21C4FF] appearance-none cursor-pointer transition-all"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="web-development">Website Development</option>
                    <option value="app-development">
                      Mobile App Development
                    </option>
                    <option value="digital-marketing">
                      On-Page SEO & Digital Marketing
                    </option>
                    <option value="logo-design">Logo Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#666666]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Budget Selector */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] uppercase tracking-wider font-bold text-[#555555]">
                ESTIMATED BUDGET
              </label>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBudget(option)}
                    className={`px-4 py-2 text-xs font-semibold rounded-md transition-all border ${
                      budget === option
                        ? "bg-[#0A2E86] border-[#0A2E86] text-[#FFFFFF] shadow-sm"
                        : "bg-[#FFFFFF] border-[#E5E7EB] text-[#666666] hover:border-[#999999]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Description Message Box */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-[#555555]">
                TELL US ABOUT YOUR PROJECT *
              </label>
              <textarea
                required
                rows="4"
                value={formData.message}
                placeholder="A short description of what you want to build..."
                className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-md px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#0A2E86] focus:ring-1 focus:ring-[#21C4FF] transition-all resize-none"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading || !isFormValid}
                className={`inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm text-sm ${
                  loading || !isFormValid
                    ? "bg-[#0A2E86] text-[#FFFFFF] cursor-not-allowed opacity-50"
                    : "bg-[#0A2E86] hover:bg-[#0a2558] text-[#FFFFFF] cursor-pointer"
                }`}
              >
                {loading ? (
                  <>
                    Sending...
                    <svg
                      className="animate-spin h-4 w-4 text-[#FFFFFF]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      className="w-4 h-4 transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#555555] leading-relaxed pt-2">
              By submitting, you agree to be contacted about your inquiry. We
              respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
