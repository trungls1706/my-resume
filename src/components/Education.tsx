import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EducationItemProps {
  year: string;
  university: string;
  location: string;
  major: string;
  gpa: string;
  isLast: boolean;
}

const EducationItem = ({
  year,
  university,
  location,
  major,
  gpa,
  isLast,
}: EducationItemProps) => {
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
            className={`absolute right-0 w-1 bg-gradient-to-b from-amber-400 via-orange-400 to-yellow-500 top-0 ${
              isLast ? 'bottom-0' : '-bottom-12'
            } shadow-[0_0_12px_rgba(251,191,36,0.6)] rounded-full hidden sm:block`}
          />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-18px] w-9 h-9 rounded-full bg-white dark:bg-gray-800 border-[3px] border-amber-400 flex items-center justify-center cursor-pointer hover:bg-amber-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-amber-200 dark:hover:shadow-amber-900 transition-all hidden sm:flex"
            whileHover={{ 
              scale: 1.02,
              borderColor: '#FBBF24',
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
                color: isExpanded ? '#F59E0B' : '#FBBF24'
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className="text-2xl font-bold leading-none bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-base font-bold py-1.5 px-4 text-left sm:text-right sm:pr-8 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700/50 mb-4 sm:mb-0">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
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
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {university}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full self-start sm:self-auto">
                  {location}
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 sm:gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-300 dark:bg-amber-500 mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    Major: {major}
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-amber-300 dark:bg-amber-500 mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    GPA: {gpa}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Education = () => {
  const educations = [
    {
      year: '2013 — 2018',
      university: 'NGUYEN TAT THANH UNIVERSITY',
      location: 'Ho Chi Minh',
      major: 'Software Engineering',
      gpa: '2.0/4',
    },
  ];

  return (
    <section className="dark:bg-gray-900">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
      >
        EDUCATION
      </motion.h2>
      <div className="-mt-4">
        {educations.map((education, index) => (
          <EducationItem key={index} {...education} isLast={index === educations.length - 1} />
        ))}
      </div>
    </section>
  );
}; 