import React from 'react'
import { motion } from 'framer-motion'

const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="expertise-section"
      className="section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-15 overflow-hidden"
    >
      <h1 className="absolute top-8 left-8 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0">
        My Expertise
      </h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-gray-700 rounded-lg p-8 shadow-lg z-10 sm:mb-2"
      >
        <div className="text-sm sm:text-lg mt-4 mb-4 ml-4 mr-4 text-gray-400">
          <ul className="list-none list-inside space-y-2">
            <li className="flex items-start">
              <span className="mr-2">🌐</span>
              <div>
                <span className="font-bold text-white">
                  Web Development & Full Stack
                </span>
                : From intuitive front-end designs to efficient back-end
                systems, I enjoy bringing ideas to life using tools like React,
                Node.js, and AWS.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📊 </span>
              <div>
                <span className="font-bold text-white">Data Analytics</span>: I
                love working with data—building ETL pipelines, analyzing trends,
                and creating insightful dashboards that empower informed
                decision-making.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🤖 </span>
              <div>
                <span className="font-bold text-white">Machine Learning</span>:
                Exploring data patterns and crafting intelligent solutions with
                Python and cloud-based tools has been a rewarding part of my
                journey.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔗 </span>
              <div>
                <span className="font-bold text-white">
                  Blockchain Solutions
                </span>
                : While not my starting point, I’ve successfully contributed to
                blockchain-based applications, focusing on transparency,
                security, and usability.
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default ExpertiseSection
