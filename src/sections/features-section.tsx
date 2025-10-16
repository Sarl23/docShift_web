import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users, Bell, BarChart3, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Asignación Inteligente",
      description: "Asigna turnos automáticamente considerando disponibilidad, especialidades y preferencias del personal médico.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Gestión en Tiempo Real",
      description: "Visualiza y modifica turnos al instante. Cambios sincronizados automáticamente con todo el equipo.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      title: "Gestión de Personal",
      description: "Administra perfiles completos del personal: roles, especialidades, disponibilidad y historial de turnos.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Bell,
      title: "Notificaciones Automáticas",
      description: "Alertas y recordatorios automáticos para el personal sobre sus turnos asignados y cambios.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: BarChart3,
      title: "Reportes y Estadísticas",
      description: "Analiza patrones de turnos, horas trabajadas y optimiza la distribución del personal médico.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Shield,
      title: "Seguridad y Privacidad",
      description: "Protección de datos con Firebase. Cumplimiento de normativas de privacidad en salud.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar los turnos de tu hospital de manera eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
