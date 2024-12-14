import React from 'react'
import { motion } from 'framer-motion'

const AboutSection: React.FC = () => {
  return (
    <section
      id="about section2"
      className="section w-full h-screen flex items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg mt-4 max-w-lg text-gray-400">
          Hi there! 👋 I'm Kinjal, a passionate Web Developer, Machine Learning
          Enthusiast, and a dedicated Notion Template Creator...
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
