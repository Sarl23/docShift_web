import { UserPlus, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Registra tu Hospital",
      description: "Crea una cuenta para tu institución médica y configura los parámetros iniciales.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      icon: Calendar,
      title: "Gestiona el Personal",
      description: "Agrega el personal médico, define roles, especialidades y disponibilidad de cada miembro.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Asigna Turnos",
      description: "Crea y asigna turnos de manera inteligente. El sistema optimiza la distribución automáticamente.",
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comienza a gestionar los turnos de tu hospital en 3 simples pasos
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center group">
                    {/* Step number and icon */}
                    <div className={`relative w-48 h-48 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}>
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{step.step}</span>
                      </div>
                      <Icon className="w-20 h-20 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-24 -right-8 items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Configuración completa en menos de 10 minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
