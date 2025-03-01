import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6"
      >
        Projects
      </motion.h2>
      {[1, 2, 3, 4, 5].map((project, index) => (
        <ProjectCard key={project} project={project} index={index} />
      ))}
    </section>
  );
}; 