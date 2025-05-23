import CtaSection from "@/sections/cta-section";
import FeaturesSection from "@/sections/features-section";
import FooterSection from "@/sections/footer-section";
import HeroSection from "@/sections/hero-section";
import HowItWorksSection from "@/sections/how-it-works-section";
import TestimonialsSections from "@/sections/testimonials-sections";


const HomePage = () => {
  return (
    <div className={`min-h-screen bg-[var(--background-color)]`}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSections />
      <CtaSection />
      <FooterSection />
    </div>
  );
};
export default HomePage;
