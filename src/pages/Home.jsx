import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import ProcessSection from "../sections/ProcessSection";
import ContactSection from "../sections/ContactSection";
import SelectedWork from "../sections/SelectedWork";
import Footer from "../components/Footer";
import CTASection from "../sections/CTASection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <SelectedWork />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
