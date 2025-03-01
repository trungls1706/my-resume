import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItemProps {
  year: string;
  company: string;
  position: string;
  location: string;
  description: string[];
  isLast: boolean;
}

const ExperienceItem = ({ year, company, position, location, description, isLast }: ExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="relative"
      layout
      transition={{
        layout: { duration: 0.3, ease: "easeInOut" }
      }}
    >
      <div className="flex gap-6">
        {/* Left side - Timeline */}
        <div className="w-32 relative flex-shrink-0">
          <div className={`absolute right-0 w-[2px] bg-gradient-to-b from-blue-500 to-teal-500 top-0 ${isLast ? 'bottom-0' : '-bottom-12'}`} />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-16px] w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-50 shadow-md"
            whileHover={{ scale: 1.1, borderColor: '#0EA5E9' }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }}
          >
            <motion.span
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="text-blue-500 text-xl font-bold leading-none"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-sm font-semibold py-1 text-right pr-8 text-gray-600">{year}</div>
        </div>

        {/* Right side - Content */}
        <motion.div 
          className="flex-grow pb-12"
          layout
          transition={{
            layout: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">{company}</h3>
                <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{location}</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-600">{position}</h4>
            </div>

            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 space-y-4">
                      {description.map((desc, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                          className="flex gap-3 items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {desc}
                          </p>
                        </motion.div>
                      ))}
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

//viewChildren
export const Experience = () => {
  const experiences = [
    {
      year: "2018 - NOW",
      company: "INSPECTORIO",
      position: "Technical Architect",
      location: "django villas",
      description: [
        "Inspectorio was almost 2-years old when I join. Its product is very interesting and kind of leading in the market. What Inspectorio is a product with high quality in order to match with its idea and position.",
        "I started with improving the test coverage, adding unittest, adding Sentry, and changing the git flow so that we can develop faster, easier and safer. We reduced the change of having unknown/randomly issue to 0 for new deployment.",
        "We changed from Flask to Django, DynamoDB to Postgresql/MongoDB, session-id to JWT... etc to give the product more extensibility, stability, scalability.",
        "The microservice structure gives us the ability to scale up the product and team easily while adding more complexity to the developers' work. I'm trying to reduce the work complexity of developers while keeping same productivity."
      ]
    },
    {
      year: "2017 - 2018",
      company: "THE LUXE NOMAD",
      position: "Lead Engineer",
      location: "django villas",
      description: [
        "The Luxe Nomad is a travel agency company.",
        "I've rebuilt the whole website into Django + ReactJS within 2 months, including: booking, admin, channel manage, data migration from old system, payment, voucher. Also switched from MongoDB to Postgresql with data migration for better performance and reduce the complexity of code base.",
        "We use checkout.com as a payment service, which allow customer to pay via many types of card.",
        "At Luxe Nomad, I spend more time to optimize the AWS infrastructure to reduce the server cost, which was really high. The frontend script is built from local and added to git history for each deployment to reduce the EC2 usage from medium to small. We deployed admin, frontend, channel manager, worker and email worker into different server for better performance and stability."
      ]
    }
  ];

  return (
    <section>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
      >
        EXPERIENCES
      </motion.h2>
      <div className="pl-4">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            {...exp} 
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
