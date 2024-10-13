const HowItWorksSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {[
            {
              step: 1,
              title: "Download",
              description: "Get the app from your app store",
            },
            {
              step: 2,
              title: "Sign Up",
              description: "Create your account in seconds",
            },
            {
              step: 3,
              title: "Enjoy",
              description: "Start using all the amazing features",
            },
          ].map((step, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
