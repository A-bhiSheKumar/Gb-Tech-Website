import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const texts = [
  {
    title: 'Employers:',
    desc: 'Gain control over benefit costs while offering customizable plans that meet your teams unique needs'
  },
  {
    title: 'Brokers:',
    desc: 'Streamline quoting and enrollment processes with our intuitive tools, enhancing client satisfaction.'
  },
  {
    title: 'Third-Party Administrators (TPAs):',
    desc: 'Integrate claims management effortlessly, ensuring compliance and operational efficiency.'
  }
];

const logos = [
  'Nexcaliber',
  'Brookshire Brothers',
  'Entira Clinic',
  'Panhandle First Bank',
  'Intercity Investment',
  'MedMutual',
  '5 star life insurance company',
  'Beam',
  'Beazley',
  'Max care Dental',
  'Detego Health',
  'ITEDIUM',
  'Tribeca Care',
  'Progressive Laboratories'
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
      y: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear"
      }
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-40 py-20 bg-white">
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left md:ml-40">
        <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
          ... Who We Serve
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {texts[currentText].title}
        </h2>
        <p className="text-gray-600 text-lg">
          {texts[currentText].desc}
        </p>
      </div>

      {/* Zig-Zag Moving Logos */}
      <div className="w-full md:w-[35%] h-[400px] overflow-hidden relative">
        <motion.div
          variants={columnVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`logo-${idx}`}
              className={`flex items-center justify-center bg-gray-50 rounded-lg w-[200px] h-[70px] mb-4 
                ${idx % 2 === 0 ? 'ml-0 self-start' : 'ml-auto self-end'}`}
            >
              <span className="text-md font-medium text-gray-700 capitalize">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
