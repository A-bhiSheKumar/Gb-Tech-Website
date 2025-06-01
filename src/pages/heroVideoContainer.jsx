import React, { useState, useEffect, useRef } from 'react';

const HeroVideoContainer = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Trigger step-by-step animation when visible
  useEffect(() => {
    if (!isVisible) return;

 const timeouts = workflowSteps.map((_, index) =>
  setTimeout(() => setActiveStep(index), 300 + index * 500) // Reduced delays
);

    return () => timeouts.forEach(clearTimeout);
  }, [isVisible]);

  const workflowSteps = [
    {
      title: "Plan Design",
      description: "Structure outlining benefits, coverage, costs, and eligibility of a health plan",
      color: "from-amber-100 to-amber-50",
    },
    {
      title: "Enrollment Stats",
      description: "Metrics showing the number and status of participants enrolled",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Data Processing",
      description: "Collecting, organizing, and analyzing data to ensure accurate operations",
      color: "from-emerald-100 to-emerald-50",
    },
    {
      title: "Claims Processing",
      description: "Reviewing and validating insurance claims for payment",
      color: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-fit overflow-hidden bg-white py-20 mb-20">
      {/* Background and floaters */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-white opacity-20 animate-float1 shadow-2xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-b from-blue-200 to-white opacity-25 animate-float2 shadow-xl" />
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-l from-blue-100 to-white opacity-30 animate-float3 shadow-lg" />
      </div>

      {/* Section content */}
      <div className="hero-container relative z-10 px-4 text-center transition-transform duration-300 ease-out">
        <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-14">
          ... Claims Process
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative h-64 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
              ${activeStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} border border-white/30 shadow-lg
                transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl`}
                style={{
                  transform:
                    activeStep === index
                      ? 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(50px)'
                      : 'perspective(1000px) rotateY(4deg) rotateX(4deg) translateZ(0)',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute inset-0 p-6 flex flex-col items-start justify-end bg-gradient-to-t from-black/10 to-transparent rounded-xl">
                  <span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <span className="text-lg font-bold text-blue-800">{index + 1}</span>
                </div>
              </div>

              {/* Arrow indicator */}
             
            </div>
          ))}
        </div>
      </div>

      {/* Floating animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite; }
        .animate-float3 { animation: float3 7s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroVideoContainer;
