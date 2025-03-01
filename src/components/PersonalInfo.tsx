import { motion } from 'framer-motion';
import { ResumeButton } from './ResumeButton';

interface PersonalInfoProps {
  showDetails: boolean;
}

export const PersonalInfo = ({ showDetails }: PersonalInfoProps) => {
  const skills = [
    'React Native',
    'React Js',
    'Next Js',
    'Tailwind CSS',
    'Marterial UI',
    'Redux',
    'Context API',
    'JavaScript',
    'TypeScript',
    'REST API',
    'Axios',
    'Expo',
    'Firebase',
  ];

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full lg:w-1/3 bg-white p-4 lg:p-8 shadow-lg lg:fixed lg:left-0 lg:h-screen overflow-y-auto order-first ${
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 rounded-full mx-auto mb-4"
          >
            {/* Profile image placeholder */}
          </motion.div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Ly Son Trung</h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-4">Frontend React Developer</p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ResumeButton className="justify-center scale-90" />
          </motion.div>
        </motion.div>

        <div className="space-y-4 lg:space-y-6">
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">About Me</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              Passionate Frontend Developer with 5+ years of experience in building web and mobile
              applications. Specialized in React, React Native, and modern frontend technologies.
            </p>
          </motion.section>

          <motion.section
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
            className="mb-6 lg:mb-0"
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Contact</h2>
            <div className="space-y-2">
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base"
              >
                <span className="text-gray-600">📧</span>
                <span>trungls1706@gmail.com</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base"
              >
                <span className="text-gray-600">📱</span>
                <span>(+84) 0909 659 318</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 text-sm lg:text-base"
              >
                <span className="text-gray-600">📍</span>
                <span>Ho Chi Minh, Vietnam</span>
              </motion.p>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};
