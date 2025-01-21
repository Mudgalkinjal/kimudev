// import React from 'react'

// export default function Employment_one() {
//   return <div>Employment 1</div>
// }

import React from 'react'
import { motion } from 'framer-motion'

const Employment_one: React.FC = () => {
  return (
    <section
      id="work-experience"
      className="section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-15 overflow-hidden"
    >
      {/* Background Text */}
      <h1 className="absolute top-8 left-8 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0">
        Work Experience
      </h1>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-gray-700 rounded-lg p-10 shadow-lg z-10"
      >
        <div className=" text-gray-400 space-y-8">
          <h3 className="text-2xl font-semibold text-white">
            Full Stack Developer
          </h3>
          <p className="text-lg">
            <span className="font-semibold text-gray-300">
              EY | May 2022 - October 2023
            </span>
          </p>
          <ul className="list-none list-inside text-lg space-y-1">
            <li>
              Led the development of a business management tool, improving
              collaboration and efficiency by streamlining processes with modern
              web technologies like React, Node.js, and MongoDB.
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
      </motion.div>
    </section>
  )
}

export default Employment_one
