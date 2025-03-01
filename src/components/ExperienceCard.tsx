import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: number;
  index: number;
}

export const ExperienceCard = ({ company, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-4 lg:mb-6"
    >
      <h3 className="text-lg lg:text-xl font-semibold mb-2">Company {company}</h3>
      <p className="text-gray-500 mb-2 text-sm lg:text-base">Senior Developer • 2020 - Present</p>
      <p className="text-gray-600 text-sm lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </motion.div>
  );
};
