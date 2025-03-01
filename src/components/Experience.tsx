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
      <div className="flex gap-2">
        {/* Left side - Timeline */}
        <div className="w-28 relative flex-shrink-0">
          <div className={`absolute right-0 w-0.5 bg-gray-300 top-0 ${isLast ? 'bottom-0' : '-bottom-12'}`} />
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute right-[-12px] w-6 h-6 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center cursor-pointer hover:bg-teal-50"
            whileHover={{ scale: 1.1 }}
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
              className="text-teal-500 text-lg font-bold leading-none"
              style={{ marginTop: '-1px' }}
            >
              +
            </motion.span>
          </motion.button>
          <div className="text-sm font-semibold py-1 text-right pr-6">{year}</div>
        </div>

        {/* Right side - Content */}
        <motion.div 
          className="flex-grow pb-12 pr-4"
          layout
          transition={{
            layout: { duration: 0.3, ease: "easeInOut" }
          }}
        >
          <motion.div 
            className="cursor-pointer group"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex items-baseline gap-3">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">{company}</h3>
              <span className="text-sm text-gray-500 font-medium">{location}</span>
            </div>
            <h4 className="text-lg font-semibold text-teal-600 mt-1">{position}</h4>
          </motion.div>

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
                  <div className="mt-4 space-y-3 text-gray-700 max-w-3xl">
                    {description.map((desc, index) => (
                      <motion.p 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ 
                          duration: 0.2,
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                        className="leading-relaxed"
                      >
                        {desc}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
      <h2 className="text-3xl font-bold mb-8">EXPERIENCES</h2>
      <div>
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
