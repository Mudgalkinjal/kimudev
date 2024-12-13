import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll' // For smooth scrolling
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center relative">
      {/* Profile Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center">
        <motion.img
          src="/bp.png"
          alt="Your Name"
          className="rounded-full w-32 h-32 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Kinjal Mudgal
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Frontend Visionary | ML Enthusiast | Notion Wizard
        </motion.p>
      </section>

      {/* Navigation Menu */}
      <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 p-3 rounded-full flex space-x-4 shadow-lg">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white"
        >
          <FaHome size={24} />
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white"
        >
          <FaCode size={24} />
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white"
        >
          <FaProjectDiagram size={24} />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-gray-400 hover:text-white"
        >
          <FaEnvelope size={24} />
        </Link>
      </nav>

      {/* Sections */}
      <section
        id="about"
        className="w-full h-screen flex items-center justify-center bg-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg mt-4 max-w-lg text-gray-400">
            Hi there! 👋 I'm Kinjal, a passionate Web Developer, Machine
            Learning Enthusiast, and a dedicated Notion Template Creator. With
            over seven years of experience in web development, I specialize in
            crafting seamless digital experiences that combine functionality and
            aesthetics. I love exploring the intersection of technology and
            creativity—whether it's building dynamic websites, diving into the
            world of machine learning, or designing productivity templates that
            empower others to stay organized and achieve their goals. In my free
            time, you’ll find me mentoring aspiring developers, experimenting
            with new ideas, or working on unique projects that inspire
            innovation.
          </p>
        </motion.div>
      </section>

      <section
        id="work"
        className="w-full h-screen flex flex-col items-center justify-center bg-gray-600"
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

        {/* Project Rectangles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          <motion.div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold">Frontend</h3>
            <p className="mt-2 text-gray-300 text-center">
              Explore user-friendly designs and responsive interfaces.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold">Backend</h3>
            <p className="mt-2 text-gray-300 text-center">
              Dive into robust server-side development and APIs.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold">Machine Learning</h3>
            <p className="mt-2 text-gray-300 text-center">
              Experiment with AI models and predictive analytics.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        id="work"
        className="w-full h-screen flex items-center justify-center bg-gray-600"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <p className="text-lg mt-4 max-w-lg text-gray-400">
            Showcase your professional journey here.
          </p>
        </motion.div>
      </section>

      <section
        id="contact"
        className="w-full h-screen flex items-center justify-center bg-gray-500"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-lg mt-4 max-w-lg text-gray-400">
            Add your contact information or a form here.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default App
