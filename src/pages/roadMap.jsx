import { motion } from 'framer-motion';
import { FaFlagCheckered } from 'react-icons/fa';
import { MdSignpost, MdRocketLaunch } from 'react-icons/md';

const roadmapData = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Company founded with a vision to simplify insurance through technology. 7 employees, 1 product idea, 1 pilot client. Bootstrapped. ~$15k Revenue earned.',
    current: false
  },
  {
    year: '2020',
    title: 'Resilience Amidst COVID',
    description: 'MVP launched. Faced the global COVID-19 crisis in our first full year. Team size: 9. Adapted to remote work seamlessly. ~$60k Revenue earned.',
    current: false
  },
  {
    year: '2021',
    title: 'Early Traction',
    description: 'First enrollment platform deployed. Expanded team to 11. Introduced customer support. ~$130k Revenue earned.',
    current: false
  },
  {
    year: '2022',
    title: 'Scaling Operations',
    description: 'Company incorporation completed. Expanded team to 13, onboarded 9 clients. Formed partnerships with insurance carriers. ~$213k Revenue earned.',
    current: false
  },
  {
    year: '2023',
    title: 'Strategic Growth',
    description: 'Team expanded to 15. Launched new vertical in health clinic management. ~$360k Revenue earned.',
    current: false
  },
  {
    year: '2024',
    title: 'Product Maturity',
    description: 'Managing services for 15 clients. Team size: 16. Close to $1M Revenue earned.',
    current: false
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Introducing AI-driven seamless enrollment. Enhancing claim processing. Team size: 18. Expected revenue: $1M.',
    current: true
  },
];

export default function Roadmap() {
  return (
    <div className="relative w-full overflow-hidden py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Company Growth Journey
          </span> */}
             <div className="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
              Company Growth Journey
        </div>

          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full" />
        </motion.h2>

        <div className="relative w-full">
          {/* Timeline track */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transform -translate-y-1/2 z-0" style={{ width: '100%' }} />

          {/* Roadmap items */}
          <div className="relative z-10">
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-24 last:mb-0`}
              >
                {/* Year marker */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20 ${
                  item.current 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white ring-4 ring-blue-200'
                    : 'bg-white text-gray-700 border-2 border-gray-300'
                }`}>
                  <span className="font-bold">{item.year}</span>
                </div>

                {/* 3D Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`relative p-6 rounded-xl shadow-2xl ${
                      item.current
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                        : 'bg-white text-gray-800'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'perspective(1000px)',
                    }}
                  >
                    {/* 3D effect */}
                    <div className={`absolute inset-0 rounded-xl border ${
                      item.current ? 'border-blue-400' : 'border-gray-200'
                    }`} style={{
                      transform: 'translateZ(-20px)',
                      background: item.current 
                        ? 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(59,130,246,0.4) 100%)'
                        : 'linear-gradient(135deg, rgba(229,231,235,0.8) 0%, rgba(209,213,219,0.8) 100%)',
                    }} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        {item.current && (
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-2"
                          >
                            <MdRocketLaunch className="text-yellow-300 text-xl" />
                          </motion.div>
                        )}
                      </div>
                      <p className={`text-sm ${
                        item.current ? 'text-blue-50' : 'text-gray-600'
                      }`}>{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}