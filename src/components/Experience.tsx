import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItemProps {
  year: string;
  company: string;
  position: string;
  location: string;
  description: {
    project: string;
    appDetails: string[];
    responsibilities: string[];
  }[];
  isLast: boolean;
}

const ExperienceItem = ({
  year,
  company,
  position,
  location,
  description,
  isLast,
}: ExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className="relative"
      layout
      transition={{
        layout: { duration: 0.3, ease: 'easeInOut' },
      }}
    >
      <div className="flex gap-6">
        {/* Left side - Timeline */}
        <div className="relative flex-shrink-0">
          <div
            className={`absolute right-0 w-[2px] bg-gradient-to-b from-sky-300 to-cyan-400 top-0 ${isLast ? 'bottom-0' : '-bottom-12'}`}
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-16px] w-8 h-8 rounded-full bg-white border-2 border-sky-300 flex items-center justify-center cursor-pointer hover:bg-sky-50 shadow-md"
            whileHover={{ scale: 1.1, borderColor: '#7DD3FC' }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          >
            <motion.span
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="text-sky-400 text-xl font-bold leading-none"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-sm font-semibold py-1 text-right pr-8 text-gray-600">{year}</div>
        </div>

        {/* Right side - Content */}
        <motion.div
          className="flex-grow pb-12"
          layout
          transition={{
            layout: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {company}
                </h3>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  {location}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-sky-500">{position}</h4>
            </div>

            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-6">
                      {description.map((item, idx) => (
                        <div key={idx}>
                          {/* Project Section */}
                          <div className="space-y-3">
                            <h5 className="text-lg font-bold text-sky-500">Project</h5>
                            <div className="flex gap-3 items-start">
                              <div className="w-2 h-2 rounded-full bg-sky-300 mt-2 flex-shrink-0" />
                              <p className="text-gray-700 leading-relaxed font-medium">
                                {item.project}
                              </p>
                            </div>
                          </div>

                          {/* App Details Section */}
                          <div className="space-y-3 mt-6">
                            <h5 className="text-lg font-bold text-sky-500">App Details</h5>
                            {item.appDetails.map((detail, index) => (
                              <div key={index} className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-300 mt-2 flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed font-medium">{detail}</p>
                              </div>
                            ))}
                          </div>

                          {/* Development Responsibilities Section */}
                          <div className="space-y-3 mt-6">
                            <h5 className="text-lg font-bold text-sky-500">Development Responsibilities</h5>
                            {item.responsibilities.map((responsibility, index) => (
                              <div key={index} className="flex gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-300 mt-2 flex-shrink-0" />
                                <p className="text-gray-700 leading-relaxed font-medium">{responsibility}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      year: '10/2024 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'POS (React JS)',
          appDetails: [
            'A retail POS system for Maison\'s stores, supporting core sales operations such as product scanning, payment processing (cash, card, QR code), order management, inventory tracking, and revenue reporting.',
            'The system also includes features for managing promotions, generating sales receipts, handling refunds, and providing detailed sales analytics to assist in business decision-making.'
          ],
          responsibilities: [
            'Maintain the app, fix bugs, and add new features.'
          ]
        }
      ]
    },
    {
      year: '06/2024 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Self-checkout (React JS)',
          appDetails: [
            'Self-checkout offers time savings, convenience, improved information security, reduced staff workload, and a modern shopping experience for customers.'
          ],
          responsibilities: [
            'Project structure setup: designed and implemented the foundational architecture for the project, ensuring scalability and maintainability.',
            'Contribute ideas, improve technology, and enhance the user experience of the application.',
            'Managed app data and state using Context API and handled data fetching by Axios.',
            'Developed a styled app using Tailwind CSS.',
            'Print Integration: Implemented seamless printing solutions, enabling users to print receipts and other necessary documents directly from the system.',
            'RFID Integration: Replaced traditional bar code scanning with RFID technology, improving product scanning speed and accuracy.',
            'Monitoring, analysis and reporting app via Sentry.'
          ]
        }
      ]
    }
  ];

  return (
    <section>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
      >
        EXPERIENCES
      </motion.h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </section>
  );
};
