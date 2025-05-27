"use client"
import React from 'react';
import { FaTools, FaChartLine, FaGlobe } from 'react-icons/fa';

const steps = [
  {
    title: 'Choose Services',
    description:
      'Select from our IT offerings, including custom software development, app creation, DevOps, and AI/ML solutions, designed to match your needs.',
    icon: <FaTools className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Project Analysis',
    description:
      'We analyze your IT requirements, assess potential challenges, and develop a strategic roadmap to ensure project success.',
    icon: <FaChartLine className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Got Final Result',
    description:
      'From development to deployment, we deliver optimized IT solutions that streamline operations and achieve your goals effectively.',
    icon: <FaGlobe className="text-blue-600 text-3xl" />,
  },
];

const HowItWorks = () => {
  return (
   <section className="relative py-20">
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
          ... Working Process
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">How It Works</h2>
        <p className="text-gray-600 text-lg mb-12">
          Simplifying IT Tasks with Tailored Solutions.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center md:text-left md:items-start">
              <div className="mb-4 p-4 bg-white rounded-md shadow-md">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <p className="mt-16 text-sm text-gray-800 font-semibold">
          Need more help? Go to our <a href="#" className="text-orange-600 underline">Contact Us</a>
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
