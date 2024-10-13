import { Button } from "@/components/ui/button";
import FeaturesSection from "@/sections/features-section";
import FooterSection from "@/sections/footer-section";
import HeroSection from "@/sections/hero-section";
import HowItWorksSection from "@/sections/how-it-works-section";
import TestimonialsSections from "@/sections/testimonials-sections";
import { Download } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSections />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download our app now and experience the difference!
          </p>
          <Button size="lg">
            Download Now <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};
export default HomePage;
