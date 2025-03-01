import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: number;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-4 lg:mb-6"
    >
      <h3 className="text-lg lg:text-xl font-semibold mb-2">Project {project}</h3>
      <p className="text-gray-600 mb-4 text-sm lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-wrap gap-2">
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
        >
          React
        </motion.span>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
        >
          Node.js
        </motion.span>
      </div>
    </motion.div>
  );
}; 