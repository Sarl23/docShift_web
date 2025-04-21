import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl mb-4">
            DocShift
          </h1>
          <p className="text-xl mb-6">
            Simplifica tu vida con nuestra innovadora app,
            recordar tus turnos!
          </p>
          <Button size="lg" className="mr-4">
            Descargar ahora
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="md:w-30%">
          {/* <img
            src="/src/assets/docShift_header_3.jpeg"
            alt="App Preview"
            className="rounded-lg shadow-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
