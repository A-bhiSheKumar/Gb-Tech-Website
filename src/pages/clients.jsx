import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const texts = [
  {
    title: 'Integrate MakeForms with your favourite apps',
    desc: 'Automate and personalize your forms. Integrate existing tools from your workflow to build a close knit data management system.'
  },
  {
    title: 'Boost Productivity',
    desc: 'Connect your tools to reduce manual work and boost efficiency through seamless integrations.'
  },
  {
    title: 'Centralize Your Data',
    desc: 'Unify all data from various platforms in one place for easier tracking and decision-making.'
  }
];

const logos = [
  'razorpay',
  'hubspot',
  'zapier',
  'stripe',
  'gumroad',
  'mailchimp'
];

const Clients = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const columnVariants = {
    animate: {
      y: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear"
      }
    }
  };

  const logoVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-20 bg-white">
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {texts[currentText].title}
        </h2>
        <p className="text-gray-600 text-lg">
          {texts[currentText].desc}
        </p>
      </div>

      {/* Logos - 2 Columns */}
      <div className="w-full md:w-1/2 flex gap-6 justify-center">
        {[0, 1].map((colOffset) => (
          <div key={colOffset} className="w-1/2 relative h-[400px] overflow-hidden">
            <motion.div
              variants={columnVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-6"
            >
              {[...logos, ...logos].map((logo, idx) => (
                <motion.div
                  key={`col${colOffset}-${idx}`}
                  custom={idx + colOffset * 0.5}
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  className="flex items-center justify-center bg-gray-50 rounded-lg p-4 w-full h-[80px]"
                >
                  <span className="text-lg font-medium text-gray-700 capitalize">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
