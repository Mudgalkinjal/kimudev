// IntroductionSection.tsx
import React from 'react'
import { motion } from 'framer-motion'

const IntroductionSection: React.FC = () => {
  return (
    <section
      id="introduction-section"
      className="section relative w-full min-h-screen flex items-center justify-center bg-gray-800 px-6 py-15 overflow-hidden"
    >
      {/* Background Text */}
      <h1 className="absolute top-8 left-8 text-gray-400 text-6xl sm:text-8xl md:text-9xl font-bold opacity-10 z-0">
        About Me
      </h1>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl bg-gray-700 rounded-lg p-6 shadow-lg z-10"
      >
        <div className=" text-gray-400 space-y-8">
          <div className="text-lg sm:text-lg mt-4 ml-4 mr-4 mb-4  text-gray-400">
            <p>
              Hello! I’m <span className="font-bold text-white">Kinjal</span>, a
              passionate{' '}
              <span className="font-bold text-white">Full Stack Developer</span>{' '}
              with over 7 years of experience building robust web applications
              and scalable solutions. My work spans a wide spectrum of modern
              web development, data analytics, machine learning, and blockchain
              technology, always with a focus on delivering seamless user
              experiences and high-performance applications. <br />
              <br />
              Beyond coding, I am deeply passionate about productivity and
              workflow optimization. <br />
              On my{' '}
              <a
                href="https://www.notion.com/@browniepoints"
                rel="noreferrer"
                target="_blank"
                className="text-blue-500 underline"
              >
                Notion creator profile
              </a>
              , I design templates and systems that empower individuals to stay
              organized and achieve their goals. Additionally, I explore my
              creative side as a food photographer, capturing the art and
              essence of culinary experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default IntroductionSection
