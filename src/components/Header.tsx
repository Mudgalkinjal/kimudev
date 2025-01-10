import React from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <section
      id="section1"
      className="section w-full h-screen flex flex-col items-center justify-center"
    >
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
        This That
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
  )
}

export default Header
