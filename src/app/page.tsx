'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg lg:hidden"
      >
        <span className="sr-only">Toggle Details</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {showDetails ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Personal Info Section - Now on the left with reduced width */}
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
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">John Doe</h1>
            <p className="text-lg lg:text-xl text-gray-600">Full Stack Developer</p>
          </motion.div>

          <div className="space-y-4 lg:space-y-6">
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">About Me</h2>
              <p className="text-gray-600 text-sm lg:text-base">
                Passionate developer with 5+ years of experience in building web applications.
                Specialized in React, Node.js, and modern web technologies.
              </p>
            </motion.section>

            <motion.section
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill, index) => (
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
                  <span>john.doe@example.com</span>
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-sm lg:text-base"
                >
                  <span className="text-gray-600">📱</span>
                  <span>+1 (123) 456-7890</span>
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-sm lg:text-base"
                >
                  <span className="text-gray-600">📍</span>
                  <span>San Francisco, CA</span>
                </motion.p>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>

      {/* Projects and Experience Section - Now on the right with increased width */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full lg:w-2/3 overflow-y-auto p-4 lg:p-8 order-last lg:ml-[33.333333%] ${
          showDetails ? 'hidden lg:block' : 'block'
        }`}
      >
        <div className="space-y-8 lg:space-y-12 max-w-3xl mx-auto">
          {/* Projects Section */}
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
              <motion.div
                key={project}
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
            ))}
          </section>

          {/* Experience Section */}
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
              <motion.div
                key={exp}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-4 lg:mb-6"
              >
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Company {exp}</h3>
                <p className="text-gray-500 mb-2 text-sm lg:text-base">Senior Developer • 2020 - Present</p>
                <p className="text-gray-600 text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </section>
        </div>
      </motion.div>
    </div>
  );
}