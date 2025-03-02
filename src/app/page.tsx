'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MobileMenuButton } from '@/components/MobileMenuButton';
import { PersonalInfo } from '@/components/PersonalInfo';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';

export default function Home() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <MobileMenuButton showDetails={showDetails} setShowDetails={setShowDetails} />
      <PersonalInfo showDetails={showDetails} />

      {/* Projects and Experience Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-[71.43%] overflow-y-auto p-4 lg:p-6 order-last fixed right-0 h-screen ${
          showDetails ? 'hidden lg:block' : 'block'
        }`}
      >
        <div 
        className="space-y-8 lg:space-y-12 w-full">
          <Experience />
        </div>
      </motion.div>
    </div>
  );
}
