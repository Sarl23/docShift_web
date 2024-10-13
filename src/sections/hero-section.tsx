import { ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your App, Your Way
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Simplify your life with our innovative mobile app. Get started
            today!
          </p>
          <Button size="lg" className="mr-4">
            Download Now <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=600&width=300"
            alt="App Preview"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
