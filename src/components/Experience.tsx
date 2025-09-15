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
    linkApps: { id: number; title: string; link: string }[] | null;
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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {/* Left side - Timeline */}
        <div className="relative flex-shrink-0 w-full sm:w-48">
          <div
            className={`absolute right-0 w-1 bg-gradient-to-b from-sky-400 via-cyan-400 to-blue-500 top-0 ${
              isLast ? 'bottom-0' : '-bottom-12'
            } shadow-[0_0_12px_rgba(14,165,233,0.6)] rounded-full hidden sm:block`}
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-15px] w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-[3px] border-sky-400 flex items-center justify-center cursor-pointer hover:bg-sky-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-sky-200 dark:hover:shadow-sky-900 transition-all hidden sm:flex"
            whileHover={{
              scale: 1.02,
              borderColor: '#38BDF8',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          >
            <motion.span
              animate={{
                rotate: isExpanded ? 45 : 0,
                color: isExpanded ? '#0EA5E9' : '#38BDF8',
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="text-2xl font-bold leading-none bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-base font-bold py-1.5 px-4 text-left sm:text-right sm:pr-8 rounded-lg bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/30 border border-sky-200 dark:border-sky-700/50 mb-4 sm:mb-0">
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-500 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent drop-shadow-sm">
              {year}
            </span>
          </div>
        </div>

        {/* Right side - Content */}
        <motion.div
          className="flex-grow pb-8 sm:pb-12"
          layout
          transition={{
            layout: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  {company}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full self-start sm:self-auto">
                  {location}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-sky-500 dark:text-sky-400">
                {position}
              </h4>
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
                    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                      {description.map((item, idx) => (
                        <div key={idx}>
                          {/* Project Section */}
                          <div className="space-y-3">
                            <h5 className="text-base sm:text-lg font-bold text-sky-500 dark:text-sky-400">
                              Project : {item.project}
                            </h5>
                          </div>

                          {/* App Details Section */}
                          <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                            <h5 className="text-base sm:text-lg font-bold text-sky-500 dark:text-sky-400">
                              App Details
                            </h5>
                            {item.appDetails.map((detail, index) => (
                              <div key={index} className="flex gap-2 sm:gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-300 dark:bg-sky-500 mt-2 flex-shrink-0" />
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Development Responsibilities Section */}
                          <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                            <h5 className="text-base sm:text-lg font-bold text-sky-500 dark:text-sky-400">
                              Development Responsibilities
                            </h5>
                            {item.responsibilities.map((responsibility, index) => (
                              <div key={index} className="flex gap-2 sm:gap-3 items-start">
                                <div className="w-2 h-2 rounded-full bg-sky-300 dark:bg-sky-500 mt-2 flex-shrink-0" />
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                  {responsibility}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Link Apps */}
                          {item?.linkApps && (
                            <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                              <h5 className="text-base sm:text-lg font-bold text-sky-500 dark:text-sky-400">
                                Link Apps
                              </h5>
                              {item.linkApps.map((link, index) => (
                                <div key={index} className="flex gap-2 sm:gap-3 items-start">
                                  <div className="w-2 h-2 rounded-full bg-sky-300 dark:bg-sky-500 mt-2 flex-shrink-0" />
                                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                    {link.title} :{' '}
                                    <a className="underline" href={link.link}>
                                      {link.link}
                                    </a>
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
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
      year: '08/2025 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Zalo Mini Apps',
          appDetails: ['Developed Zalo Mini Apps for multiple retail brands'],
          responsibilities: [
            'Designed and implemented project architecture to ensure scalability and maintainability.',
            'Mentored junior developers on coding practices and project workflows.',
            'Reviewed and refactored code for performance, scalability, and readability.',
            'Collaborated with the team to maintain consistent business logic and UI/UX across brand apps.',
          ],
          linkApps: [
            {
              id: 0,
              title: 'ONWAYS Rewards',
              link: 'https://zalo.me/s/957354804063278119',
            },
            {
              id: 0,
              title: 'MARC Rewards',
              link: 'https://zalo.me/s/3920331891151869531',
            },
          ],
        },
      ],
    },
    {
      year: '06/2025 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - POS mobile (React JS)',
          appDetails: [
            'A lightweight mobile version of the POS system designed for creating draft orders quickly and conveniently.',
            'Focused on essential features such as product selection, customer information entry, and draft order management, optimized for mobile usage.',
            'Provides a simplified and responsive interface, ensuring sales staff can efficiently create and manage draft orders outside the desktop environment.',
          ],
          responsibilities: [
            'Project structure setup: designed and implemented the foundational architecture for the project, ensuring scalability and maintainability.',
            'Contribute ideas, improve technology, and enhance the user experience of the application.',
            'Managed app data and state using Context API and handled data fetching by Axios.',
            'Developed a styled app using Tailwind CSS.',
            'Monitoring, analysis and reporting app via Sentry, Microsoft clarity.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '10/2024 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - POS desktop (React JS)',
          appDetails: [
            "A retail POS system for Maison's stores, supporting core sales operations such as product scanning, payment processing (cash, card, QR code), order management, inventory tracking, and revenue reporting.",
            'The system also includes features for managing promotions, generating sales receipts, handling refunds, and providing detailed sales analytics to assist in business decision-making.',
          ],
          responsibilities: ['Maintain the app, fix bugs, and add new features.'],
          linkApps: null,
        },
      ],
    },
    {
      year: '06/2024 - Present',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - Self Checkout (React JS)',
          appDetails: [
            'Self Checkout offers time savings, convenience, improved information security, reduced staff workload, and a modern shopping experience for customers.',
          ],
          responsibilities: [
            'Project structure setup: designed and implemented the foundational architecture for the project, ensuring scalability and maintainability.',
            'Contribute ideas, improve technology, and enhance the user experience of the application.',
            'Managed app data and state using Context API and handled data fetching by Axios.',
            'Developed a styled app using Tailwind CSS.',
            'Print Integration: Implemented seamless printing solutions, enabling users to print receipts and other necessary documents directly from the system.',
            'RFID Integration: Replaced traditional bar code scanning with RFID technology, improving product scanning speed and accuracy.',
            'Monitoring, analysis and reporting app via Sentry.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '08/2023 - 10/2023',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Loyalty PepsiCo (Zalo Mini App)',
          appDetails: [
            'Loyalty application designed exclusively for distributors and agents of PepsiCo Foods. Its purpose is to help wholesale users manage information about revenue, reward points, and receive attractive gifts from PepsiCo Foods.',
          ],
          responsibilities: [
            'Project structure setup: designed and implemented the foundational architecture for the project, ensuring scalability and maintainability.',
            'Develop the application using open-source code, API, and documentation from Zalo.',
            'Managed app data and state using Zustand and handled data fetching by Axios',
            'Developed a styled app using Tailwind CSS.',
            'Generate ideas, design, and create experiences based on customer requirements.',
            'Integrate auto build and auto deploy with CI/CD.',
          ],
          linkApps: [
            {
              id: 0,
              title: 'Loyalty cho Elite Partner của Pepsico Foods',
              link: 'https://zalo.me/s/2285472306095214609',
            },
          ],
        },
      ],
    },
    {
      year: '11/2018 - 12/2023',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Giacmosuaviet, AeonEshop',
          appDetails: ['E-Commerce app (React Native)'],
          responsibilities: [
            'Migrated source code from React Native CLI to Expo CLI, streamlining development workflows.',
            'Managed app data and state using API integration, AsyncStorage, Redux, and Redux-Saga.',
            'Integrated third-party libraries such as Facebook, Google, Code Push, and React-Native-Insider.',
            'Enhanced app features with Firebase Analytics, React-Native-Insider, and Sentry for tracking and crash reporting.',
            'Ensured effective communication and user notifications through Firebase and React-Native-Insider.',
            'Deployed apps using native build tools, ensuring a smooth user experience.',
          ],
          linkApps: null,
        },
        {
          project: 'Guardian Vietnam, CoupleTx, On Ways, The Cosmo, Sofia',
          appDetails: ['E-Commerce app (React Native)'],
          responsibilities: [
            'Project structure setup: designed and implemented the foundational architecture for the project, ensuring scalability and maintainability.',
            'Led the development and optimization of e-commerce platforms.',
            'Collaborated with cross-functional teams to deploy tailored e-commerce applications.',
            'Upgraded applications and transitioned source code from React Native CLI to Expo CLI for enhanced development agility.',
            'Managed app data and state using fetch API, AsyncStorage, Redux, and Redux Toolkit.',
            'Applied routing with React Navigation and implemented crash reporting with Sentry.',
            'Managed notifications through Expo Notifications and built/deployed apps using Expo CLI',
            'Monitoring, analysis and reporting app via Firebase Analytics, Sentry.',
            'Integrate auto build and auto deploy with CI/CD.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '05/2018 - 10/2018',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'HaraRetail',
          appDetails: ['Chain Store Management Software'],
          responsibilities: [
            'Front-end development based on design documentation.',
            'Supported app testing and collaborated with teammates.',
            "Upgraded the application according to the Product Owner's specifications.",
            'Migrated source code from React Native CLI to Expo CLI for improved development efficiency.',
            'Managed app data and state using API integration, AsyncStorage, Redux, and Redux-Saga.',
            'Implemented routing with React Navigation and React Native Router Flux.',
            'Integrated Firebase Analytics for tracking and Sentry for crash reporting.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '02/2018 - 04/2018',
      company: 'Haravan',
      position: 'Internship',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Internship',
          appDetails: ['Training and Learning'],
          responsibilities: [
            'Gained proficiency in JavaScript, ES6, and React Native API',
            'Learned React Native components, API integration, debugging, and app deployment.',
            'Studied and implemented efficient source code structures.',
          ],
          linkApps: null,
        },
      ],
    },
  ];

  return (
    <section className="dark:bg-gray-900">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
      >
        EXPERIENCES
      </motion.h2>
      <div className="-mt-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} isLast={index === experiences.length - 1} />
        ))}
      </div>
    </section>
  );
};
