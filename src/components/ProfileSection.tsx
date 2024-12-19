import React from 'react'
import { motion } from 'framer-motion'

const ProfileSection: React.FC = () => {
  return (
    <section
      id="work-experience section2"
      className="section w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl bg-gray-700 rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Profile & Work Experience
        </h2>
        <div className="mt-6 text-gray-400 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Full Stack Developer
            </h3>
            <p className="text-sm mt-2">
              <span className="font-semibold text-gray-300">
                EY | May 2022 - October 2023
              </span>
            </p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>
                Led the development of a business management tool, improving
                collaboration and efficiency by streamlining processes with
                modern web technologies like React, Node.js, and MongoDB.
              </li>
              <li>
                Developed ETL pipelines to process and integrate data into
                dashboards, enhancing data-driven decision-making.
              </li>
              <li>
                Designed scalable APIs and intuitive UIs for high-traffic
                applications, delivering consistent user experiences.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Web Developer</h3>
            <p className="text-sm mt-2">
              <span className="font-semibold text-gray-300">
                Barracuda Networks | March 2016 - January 2021
              </span>
            </p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>
                Spearheaded a homepage redesign using React and AWS, resulting
                in an 18% increase in user engagement and conversions.
              </li>
              <li>
                Developed an automated notification system, reducing manual
                workloads by 40% and increasing efficiency.
              </li>
              <li>
                Enhanced cross-platform performance by optimizing web pages,
                improving load times and mobile compatibility.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Web Developer</h3>
            <p className="text-sm mt-2">
              <span className="font-semibold text-gray-300">
                Transworld Technologies | January 2013 - January 2014
              </span>
            </p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>
                Built and tested dynamic websites using CMS platforms like
                Joomla and WordPress, ensuring project requirements were met.
              </li>
              <li>
                Conducted code optimizations to enhance website performance and
                accessibility.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver user-centric
                web solutions.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProfileSection
