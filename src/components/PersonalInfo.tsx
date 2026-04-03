import { motion } from 'framer-motion';
import { ResumeButton } from './ResumeButton';

interface PersonalInfoProps {
  showDetails: boolean;
}

export const PersonalInfo = ({ showDetails }: PersonalInfoProps) => {
  const skills = [
    'React Native',
    'Expo',
    'React Js',
    'Next Js',
    'Node Js',
    'Nest JS',
    'Supabase',
    'MongoDB',
    'Docker',
    'Tailwind CSS',
    'Marterial UI',
    'Redux',
    'Context API',
    'JavaScript',
    'TypeScript',
    'AWS',
  ];

  const certificates = [
    {
      id: 0,
      title: 'AWS Certified Developer – Associate',
      onClick: () => {
        window.open('https://www.credly.com/badges/94fc8a9e-0764-4e17-b37b-1d4abbe372d9');
      },
    },
    {
      id: 0,
      title: 'Rest API (Intermediate) Certificate',
      onClick: () => {
        window.open('https://www.hackerrank.com/certificates/c10d5ef03890');
      },
    },
    {
      id: 0,
      title: 'JavaScript (Intermediate) Certificate',
      onClick: () => {
        window.open('https://www.hackerrank.com/certificates/2d9ccea95d8d');
      },
    },
    {
      id: 0,
      title: 'Frontend Developer (React) Certificate',
      onClick: () => {
        window.open('https://www.hackerrank.com/certificates/b0debef1ccdd');
      },
    },
    {
      id: 0,
      title: 'CSS (Basic) Certificate ',
      onClick: () => {
        window.open('https://www.hackerrank.com/certificates/53e33645c7f7');
      },
    },
  ];

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full lg:w-[28.57%] bg-white dark:bg-gray-800 p-4 lg:p-6 shadow-lg lg:fixed lg:left-0 lg:h-screen overflow-y-auto order-first ${
        !showDetails ? 'hidden lg:block' : 'block'
      }`}
    >
      <div className="max-w-sm mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6 lg:mb-8"
        >
          {/* Profile image placeholder */}
          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"
          ></motion.div> */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Ly Son Trung
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4">
            Frontend React Developer
          </p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 justify-center items-center"
          >
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/trungls1706/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors"
                title="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/trungls1706"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-[#333] text-white rounded-lg hover:bg-[#24292e] transition-colors"
                title="GitHub Profile"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>
              <motion.a
                href="https://trungls1706.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors"
                title="Personal Website"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 18.25v-1.5h2.5v1.5h-2.5zm6.5-6.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-.69.28-1.31.73-1.77l.77.77c-.31.31-.5.73-.5 1.23 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.49-.2-.92-.5-1.23l.77-.77c.45.46.73 1.08.73 1.77zM12 4.5c4.14 0 7.5 3.36 7.5 7.5 0 1.54-.47 2.97-1.27 4.15l-1.07-1.07c.52-.89.84-1.94.84-3.08 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 1.14.32 2.19.84 3.08l-1.07 1.07C5.47 14.97 5 13.54 5 12c0-4.14 3.36-7.5 7.5-7.5zm-3.25 7.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.69-.28-1.31-.73-1.77l-.77.77c.31.31.5.73.5 1.23 0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75c0-.49.2-.92.5-1.23l-.77-.77c-.45.46-.73 1.08-.73 1.77z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/trungls1706/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-[#FFA116] text-white rounded-lg hover:bg-[#FF8A00] transition-colors"
                title="LeetCode Profile"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </motion.a>
            </div>

            <ResumeButton className="justify-center scale-90" />
          </motion.div>
        </motion.div>

        <div className="space-y-4 lg:space-y-6">
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
              Passionate Frontend Developer with 5+ years of experience in building mobile and web
              applications. Specialized in React Native, ReactJS, NextJS and modern frontend technologies.
              Proactively expand skill set into backend development (NodeJS, NestJS) to better support full-stack requirements when needed.
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="lg:mb-0 "
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              Certificates
            </h2>

            <div className="flex flex-wrap gap-2">
              {certificates?.map((certificate, index) => (
                <motion.button
                  key={index}
                  onClick={certificate.onClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 text-sm"
                >
                  {certificate.title}
                </motion.button>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="lg:mb-0"
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              Languages
            </h2>
            <div className="space-y-2">
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                Vietnamese (Native proficiency)
              </p>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                English (Limited working proficiency)
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-6 lg:mb-0"
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
              Contact
            </h2>
            <div className="space-y-2">
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-400"
              >
                <span>📧</span>
                <span>trungls1706@gmail.com</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-400"
              >
                <span>📱</span>
                <span>(+84) 0909 659 318</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-400"
              >
                <span>📍</span>
                <span>Ho Chi Minh, Vietnam</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base text-gray-600 dark:text-gray-400"
              >
                <span>🎂</span>
                <span>17/06/1995</span>
              </motion.p>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};
