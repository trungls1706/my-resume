import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <section>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6"
      >
        Experience
      </motion.h2>
      {[1, 2, 3].map((exp, index) => (
        <ExperienceCard key={exp} company={exp} index={index} />
      ))}
    </section>
  );
}; 