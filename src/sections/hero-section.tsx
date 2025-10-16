import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Gestión Inteligente de Turnos
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              DocShift
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Gestión de Turnos Hospitalarios
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Optimiza la asignación de turnos para el personal médico de tu hospital. 
              Simplifica la gestión, reduce conflictos y mejora la eficiencia operativa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Comenzar Ahora
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800">
                Ver Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+500 profesionales</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+10,000 turnos gestionados</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Turnos de Hoy</h3>
                  <span className="text-sm text-blue-600 font-medium">15 Activos</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Dr. García", time: "08:00 - 16:00", status: "Activo" },
                    { name: "Enf. Martínez", time: "14:00 - 22:00", status: "Próximo" },
                    { name: "Dr. López", time: "22:00 - 06:00", status: "Nocturno" }
                  ].map((shift, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{shift.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{shift.time}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        {shift.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
