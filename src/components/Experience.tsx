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
      year: '06/2025 - 03/2026',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - POS mobile (React JS)',
          appDetails: [
            'PWA mobile POS for fast draft orders, enabling quicker order creation and improving customer checkout speed by ~20%.',
          ],
          responsibilities: [
            'Designed and implemented scalable, maintainable architecture for mobile POS app.',
            'Managed app data and state using Context API; handled API requests with Axios.',
            'Developed styled UI with Tailwind CSS, improving usability on mobile devices.',
            'Contributed ideas and technology improvements to enhance user experience.',
            'Monitored app performance and usage via Sentry, Microsoft Clarity, and Feedback, enabling data-driven optimizations.',
            'Delivered as a PWA, allowing offline usage and faster access on mobile devices.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '10/2024 - 03/2026',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - POS web (React JS)',
          appDetails: [
            'Retail POS system for 200+ stores in Vietnam and 30+ stores in Cambodia, supporting core sales operations including product scanning, payment processing (cash, card, QR code), order management, inventory tracking, revenue reporting, promotions, refunds, and detailed sales analytics for business decisions.',
          ],
          responsibilities: [
            'Refactored legacy codebase into a clean, modular architecture, reducing redundant code by ~35% and improving readability and maintainability.',
            'Optimized order flow, creating orders ~25% faster.',
            'Improved performance for inventory, payments, and reporting for reliable real-time data.',
            'Simplified complex business logic, making the system more scalable for future feature expansion.',
            'Collaborated with backend, QA, ops, and store teams to align business logic, ensure smooth feature integration, and maintain consistent UI/UX.',
          ],
          linkApps: null,
        },
      ],
    },
    {
      year: '06/2024 - 03/2026',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'MAISON - Self Checkout (React JS)',
          appDetails: [
            'Self Checkout system providing time savings, improved convenience, enhanced information security, reduced staff workload, and a modern shopping experience.',
          ],
          responsibilities: [
            'Designed and implemented scalable, maintainable project architecture, standardizing modules and enabling code reuse, reducing development time by ~30%.',
            'Managed app data and state using Context API, and handled data fetching with Axios.',
            'Developed responsive UI using Tailwind CSS, enhancing user experience and reducing user errors by ~25%.',
            'Integrated printing solutions, enabling direct receipt and document printing.',
            'Replaced traditional barcode scanning with RFID technology, improving product scanning speed by 40% and accuracy by 30%.',
            'Contributed ideas to enhance app features, optimize tech stack, and streamline workflows.',
            'Monitored, analyzed, and reported app performance and crashes via Sentry, reducing downtime to <1%.',
            'Delivered the project at 50% lower cost than prior provider.',
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
          project: 'Zalo Mini App',
          appDetails: ['Developed Zalo Mini Apps for multiple retail brands'],
          responsibilities: [
            'Designed and implemented scalable, reusable architecture for multiple Zalo Mini Apps, improving maintainability and reducing development time for new brand apps.',
            'Developed applications using Zalo APIs, integrating backend services and managing state with Zustand and Axios.',
            'Refactored and reviewed code to enhance performance, scalability, and readability.',
            'Mentored junior developers, improving code quality and team productivity.',
            'Implemented CI/CD pipelines for automated build and deployment, improving release efficiency.',
          ],
          linkApps: [
            {
              id: 1,
              title: 'ONWAYS Rewards',
              link: 'https://zalo.me/s/957354804063278119',
            },
            {
              id: 2,
              title: 'MARC Rewards',
              link: 'https://zalo.me/s/3920331891151869531',
            },
            {
              id: 3,
              title: 'Pepsico Foods',
              link: 'https://zalo.me/s/2285472306095214609',
            },
          ],
        },
      ],
    },
    {
      year: '05/2018 - 12/2023',
      company: 'Haravan',
      position: 'Software Specialist',
      location: 'Ho Chi Minh',
      description: [
        {
          project: 'Giacmosuaviet, AeonEshop, Guardian Vietnam, CoupleTx, On Ways, The Cosmo, Sofia, HaraRetail',
          appDetails: [
            'E-commerce apps built with React Native Expo, serving 100k+ active users across multiple brands, supporting shopping, notifications, analytics, and seamless user experience.',
          ],
          responsibilities: [
            'Migrated and upgraded multiple codebases from React Native CLI to Expo CLI, streamlining workflows and reducing build & release time by ~30%.',
            'Designed and implemented scalable, reusable architectures, improving maintainability and supporting simultaneous development of 7+ brand apps.',
            'Managed app data and state with API integration, AsyncStorage, Redux, Redux-Saga, Redux Toolkit, handling thousands of requests per minute.',
            'Integrated third-party libraries/services: Facebook, Google, CodePush, React-Native-Insider, Firebase Analytics, Sentry, enhancing features, tracking, and reducing crash rate to <1%.',
            'Applied React Navigation for routing, managed notifications through Firebase / Expo Notifications, and deployed apps using native build tools and CI/CD pipelines, speeding up releases by ~25%.',
            'Collaborated with cross-functional teams to deliver consistent UI/UX, optimized performance, and e-commerce experiences across brands.',
            'Monitored, analyzed, and reported app metrics to drive continuous improvement and maintain high app stability and user retention.',
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
            'Gained proficiency in JavaScript, ES6, and React Native API.',
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
