import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSections = () => {
  const testimonials = [
    {
      name: "Dr. María González",
      role: "Directora Médica",
      hospital: "Hospital Central",
      comment: "DocShift ha revolucionado la forma en que gestionamos los turnos. Ahora podemos asignar personal de manera más eficiente y reducir conflictos de horarios.",
      avatar: "MG",
      rating: 5
    },
    {
      name: "Enf. Carlos Ramírez",
      role: "Jefe de Enfermería",
      hospital: "Clínica San José",
      comment: "La interfaz es intuitiva y las notificaciones automáticas me mantienen informado de mis turnos. Ya no hay confusiones sobre mi horario.",
      avatar: "CR",
      rating: 5
    },
    {
      name: "Dr. Ana Martínez",
      role: "Coordinadora de Urgencias",
      hospital: "Hospital Regional",
      comment: "Los reportes y estadísticas nos ayudan a optimizar la distribución del personal. Hemos mejorado significativamente la cobertura en todas las áreas.",
      avatar: "AM",
      rating: 5
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Profesionales de la salud que confían en DocShift para gestionar sus turnos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
            >
              <CardContent className="pt-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-blue-200" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.hospital}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</p>
            <p className="text-gray-600 dark:text-gray-400">Hospitales</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</p>
            <p className="text-gray-600 dark:text-gray-400">Profesionales</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</p>
            <p className="text-gray-600 dark:text-gray-400">Turnos Gestionados</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</p>
            <p className="text-gray-600 dark:text-gray-400">Satisfacción</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSections;
