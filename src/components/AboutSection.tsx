import React from 'react'
import { motion } from 'framer-motion'

const AboutSection: React.FC = () => {
  return (
    <section
      id="contact section5"
      className="section w-full h-screen flex flex-col items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl bg-gray-800 rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center">About Me</h2>
        <div className="text-base mt-6 text-gray-400">
          <p className="mb-6">
            Hello! I’m{' '}
            <span className="font-bold text-white">Kinjal Mudgal</span>, a
            passionate{' '}
            <span className="font-bold text-white">Full Stack Developer</span>{' '}
            with over 7 years of experience building robust web applications and
            scalable solutions. My work spans a wide spectrum of modern web
            development, data analytics, machine learning, and blockchain
            technology, always with a focus on delivering seamless user
            experiences and high-performance applications.
          </p>

          <h2 className="text-xl font-semibold text-white">
            A Glimpse Into My Expertise
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              🌐{' '}
              <span className="font-bold text-white">
                Web Development & Full Stack
              </span>
              : From intuitive front-end designs to efficient back-end systems,
              I enjoy bringing ideas to life using tools like React, Node.js,
              and AWS.
            </li>
            <li>
              📊 <span className="font-bold text-white">Data Analytics</span>: I
              love working with data—building ETL pipelines, analyzing trends,
              and creating insightful dashboards that empower informed
              decision-making.
            </li>
            <li>
              🤖 <span className="font-bold text-white">Machine Learning</span>:
              Exploring data patterns and crafting intelligent solutions with
              Python and cloud-based tools has been a rewarding part of my
              journey.
            </li>
            <li>
              🔗{' '}
              <span className="font-bold text-white">Blockchain Solutions</span>
              : While not my starting point, I’ve successfully contributed to
              blockchain-based applications, focusing on transparency, security,
              and usability.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6">How I Work</h2>
          <p className="mt-4">
            I thrive in collaborative environments, whether leading technical
            discussions, reviewing code, or mentoring peers. My approach is
            rooted in agility, adaptability, and a relentless drive to deliver
            impactful results. Every project I tackle is an opportunity to
            learn, grow, and innovate.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
