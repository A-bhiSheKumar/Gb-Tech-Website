import React from "react";
import {
  FaUserCheck,
  FaFileAlt,
  FaCogs,
  FaChartBar,
  FaProjectDiagram,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "Plan Design",
    description:
      "Utilize our flexible builder to create self-funded plans with embedded actuarial insights for smarter, data-driven decisions.",
    icon: <FaProjectDiagram className="text-blue-600 text-3xl" />,
  },
  {
    title: "Enrollment Platform",
    description:
      "Offer employees a mobile-responsive, multilingual portal with Single Sign-On (SSO) and dependent verification for seamless enrollment.",
    icon: <FaUserCheck className="text-blue-600 text-3xl" />,
  },
  {
    title: "Claims Management",
    description:
      "Monitor and manage claims in real-time with AI-driven fraud detection and secure document handling for fast and accurate resolutions.",
    icon: <FaFileAlt className="text-blue-600 text-3xl" />,
  },
  {
    title: "Administrative Tools",
    description:
      "Streamline operations with payroll sync, eligibility management, and ACA compliance reporting all in one place.",
    icon: <FaCogs className="text-blue-600 text-3xl" />,
  },
  {
    title: "Data & Insights",
    description:
      "Access customizable dashboards, predictive analytics, and industry benchmarking tools to guide strategic benefit decisions.",
    icon: <FaChartBar className="text-blue-600 text-3xl" />,
  },
  {
    title: "Customer Support",
    description:
      "Get comprehensive and responsive support to ensure your team always feels heard, valued, and empowered.",
    icon: <FaHeadset className="text-blue-600 text-3xl" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
          End-to-End Benefits Management
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Robust Features for Comprehensive Benefits Management
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          From plan creation to ongoing support — everything you need to manage employee benefits with confidence and ease.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center md:text-left md:items-start">
              <div className="mb-4 p-4 bg-white rounded-md shadow-md">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <p className="mt-16 text-sm text-gray-800 font-semibold">
          Need assistance? Visit our{" "}
          <a href="#" className="text-orange-600 underline">
            Contact Us
          </a>{" "}
          page to get in touch.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
