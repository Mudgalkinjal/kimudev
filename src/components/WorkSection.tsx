import React from 'react'
import { motion } from 'framer-motion'
import MachineLearning from '../pages/MachineLearning'

const WorkSection: React.FC = () => {
  return (
    <section
      id="work section4"
      className="section w-full h-screen flex flex-col items-center justify-center bg-gray-700"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        <p className="text-lg mt-4 max-w-lg text-gray-400">
          Showcase your professional journey here.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
        <motion.div
          className="bg-gray-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold">Frontend</h3>
          <p className="mt-2 text-gray-300 text-center">
            Explore user-friendly designs and responsive interfaces.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold">Backend</h3>
          <p className="mt-2 text-gray-300 text-center">
            Dive into robust server-side development and APIs.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/machinelearning">
            <h3 className="text-2xl font-bold">Machine Learning</h3>
            <p className="mt-2 text-gray-300 text-center">
              Experiment with AI models and predictive analytics.
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkSection
