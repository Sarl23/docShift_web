import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Comienza Hoy Mismo
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para Optimizar la Gestión de Turnos?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Únete a los hospitales que ya están mejorando su eficiencia operativa con MediTurnos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
            >
              Comenzar Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto font-semibold"
            >
              Solicitar Demo
            </Button>
          </div>
          
          {/* Benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Configuración en minutos</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
              <span className="text-lg">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
