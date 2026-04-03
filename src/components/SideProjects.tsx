import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectItemProps {
  year: string;
  title: string;
  location: string;
  appDetails: string[];
  responsibilities: string[];
  links?: {
    web?: string;
    ios?: string;
    android?: string;
  };
  isLast: boolean;
}

const ProjectItem = ({
  year,
  title,
  location,
  appDetails,
  responsibilities,
  links,
  isLast,
}: ProjectItemProps) => {
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
            className={`absolute right-0 w-1 bg-gradient-to-b from-emerald-400 via-green-400 to-teal-500 top-0 ${
              isLast ? 'bottom-0' : '-bottom-12'
            } shadow-[0_0_12px_rgba(52,211,153,0.6)] rounded-full hidden sm:block`}
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-15px] w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-[3px] border-emerald-400 flex items-center justify-center cursor-pointer hover:bg-emerald-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 transition-all hidden sm:flex"
            whileHover={{
              scale: 1.02,
              borderColor: '#34D399',
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
                color: isExpanded ? '#10B981' : '#34D399',
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="text-2xl font-bold leading-none bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-base font-bold py-1.5 px-4 text-left sm:text-right sm:pr-8 rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 border border-emerald-200 dark:border-emerald-700/50 mb-4 sm:mb-0">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 dark:from-emerald-400 dark:via-green-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
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
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  {title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full self-start sm:self-auto">
                  {location}
                </span>
              </div>

              {/* Links Section */}
              {links && (
                <div className="flex flex-wrap gap-4 mt-2">
                  {links.web && (
                    <a
                      href={links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    >
                      🌐 Web
                    </a>
                  )}
                  {links.ios && (
                    <a
                      href={links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    >
                      📱 iOS
                    </a>
                  )}
                  {links.android && (
                    <a
                      href={links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    >
                      📱 Android
                    </a>
                  )}
                </div>
              )}
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
                      {/* App Details Section */}
                      <div className="space-y-2 sm:space-y-3">
                        <h5 className="text-base sm:text-lg font-bold text-emerald-500 dark:text-emerald-400">
                          App Details
                        </h5>
                        {appDetails.map((detail, index) => (
                          <div key={index} className="flex gap-2 sm:gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-emerald-300 dark:bg-emerald-500 mt-2 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Development Responsibilities Section */}
                      <div className="space-y-2 sm:space-y-3">
                        <h5 className="text-base sm:text-lg font-bold text-emerald-500 dark:text-emerald-400">
                          Development Responsibilities
                        </h5>
                        {responsibilities.map((responsibility, index) => (
                          <div key={index} className="flex gap-2 sm:gap-3 items-start">
                            <div className="w-2 h-2 rounded-full bg-emerald-300 dark:bg-emerald-500 mt-2 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>
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

export const SideProjects = () => {
  const projects = [
    {
      year: '01/2026 - Present',
      title: 'PTEElite',
      location: 'Ho Chi Minh',
      appDetails: [
        'Online education platform for PTE learners, featuring landing page, user registration, mock tests, and admin dashboard, helping increase brand awareness and student bookings.',
      ],
      responsibilities: [
        'Independently designed and developed a full-stack PTE education platform based on user requirements.',
        'Designed UI following Material Design and prototyped using Stitch.',
        'Architected and implemented the system using Next.js (App Router) and Supabase (Auth, PostgreSQL, Storage, RLS).',
        'Built secure authentication and role-based access control for students and admins.',
        'Designed scalable database schema and access policies to ensure data security.',
        'Optimized SEO and performance, improving search visibility and page load speed by ~30%.',
        'Increased user reach and conversion, contributing to 40% more student inquiries and bookings after launch.',
      ],
      links: {
        web: 'https://pteelite.edu.vn',
      },
    },
    {
      year: '03/2026 - 03/2026',
      title: 'NestJS Recruitment API (Personal Project)',
      location: 'Ho Chi Minh',
      appDetails: [
        'Backend system for a job board platform, supporting user management, job postings, and application workflows.',
      ],
      responsibilities: [
        'Built RESTful APIs using NestJS with MongoDB (Mongoose).',
        'Implemented authentication & authorization with JWT, Passport, and RBAC (Admin, HR, User).',
        'Designed modules for Companies, Jobs, Resumes, and Subscribers with pagination and search.',
        'Integrated email service (Nodemailer + Handlebars) for notifications and job updates.',
        'Applied security best practices: Helmet, rate limiting, CORS, and password hashing (Bcrypt).',
        'Standardized API responses and implemented global error handling using Interceptors.',
        'Documented APIs using Swagger (OpenAPI).',
        'Containerized application with Docker & Docker Compose.',
      ],
      links: {
        web: 'https://github.com/trungls1706/nest-js',
      },
    },
    {
      year: '07/2024 - 10/2024',
      title: 'Mimosa TEK',
      location: 'Ho Chi Minh',
      appDetails: [
        'A smart farming app that helps farmers manage crops and track cultivation cycles efficiently.',
      ],
      responsibilities: [
        'Refactored legacy codebase into a cleaner, modular architecture, reducing development time by 30% and improving maintainability.',
        'Collaborated with backend team to ensure efficient API integration and stable data flow.',
      ],
      links: {
        ios: 'https://apps.apple.com/us/app/mimosatek/id1472868830',
        android: 'https://play.google.com/store/apps/details?id=com.mimosatek',
      },
    },
    {
      year: '10/2023 - 02/2025',
      title: 'Betta Market',
      location: 'Ho Chi Minh',
      appDetails: [
        'Community platform for fish enthusiasts with shop, auction, and online competition features serving 6,000+ users.',
      ],
      responsibilities: [
        'Designed and implemented scalable app architecture, improving maintainability and supporting growth to 6,000 users.',
        'Built, tested, and deployed the app using React Native CLI.',
        'Integrated APIs and managed state with Redux Toolkit and AsyncStorage, reducing data load time by 30%.',
        'Integrated third-party services: Facebook, Google, Firebase Analytics, Sentry, and CodePush.',
        'Set up push notifications via Firebase, achieving 20% open rate and boosting user engagement.',
        'Monitored app stability using Sentry and Firebase, reducing critical issues by 40%.',
        'Managed deployment and OTA updates using native tools and CodePush.',
      ],
      links: {
        web: 'https://bettamarket.net',
        ios: 'https://apps.apple.com/us/app/bettamarket/id6468897251',
        android: 'https://play.google.com/store/apps/details?id=bettamarket.net.app',
      },
    },
  ];

  return (
    <section className="dark:bg-gray-900">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
      >
        SIDE PROJECTS
      </motion.h2>
      <div className="-mt-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} isLast={index === projects.length - 1} />
        ))}
      </div>
    </section>
  );
};
