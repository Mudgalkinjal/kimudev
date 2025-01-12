import React from 'react'
import { motion } from 'framer-motion'

const Employment_two: React.FC = () => {
  return (
    <section className="section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-12 overflow-hidden">
      <h1 className="absolute top-8 left-8 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0">
        Work Experience
      </h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-gray-700 rounded-lg p-10 shadow-lg z-10"
      >
        <div className=" text-gray-400 space-y-8">
          <h3 className="text-2xl font-semibold text-white">
            Associate Web Developer
          </h3>
          <p className="text-lg mt-2">
            <span className="font-semibold text-gray-300">
              Barracuda Networks | March 2016 - January 2021
            </span>
          </p>
          <ul className="list-disc list-inside mt-2 text-lg space-y-1">
            <li>
              Spearheaded a homepage redesign using React and AWS, resulting in
              an 18% increase in user engagement and conversions.
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
      </motion.div>
    </section>
  )
}

export default Employment_two

/*
import React from 'react'
import { motion } from 'framer-motion'

const Employment_three: React.FC = () => {
  return (
    <section
      id="work-experience-section2"
      className="section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-12 overflow-hidden"
    >
      <h1 className="absolute top-4 left-4 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0">
        Work Experience
      </h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl bg-gray-700 rounded-lg p-8 shadow-lg z-10"
      >
        <div className="mt-6 text-gray-400 space-y-8">
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

export default Employment_three
*/
