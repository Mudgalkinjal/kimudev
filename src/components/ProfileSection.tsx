import React from 'react'
import { motion } from 'framer-motion'

const ProfileSection: React.FC = () => {
  return (
    <section
      id="contact section3"
      className="section w-full h-screen flex items-center justify-center bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Profile</h2>
        <p className="text-lg mt-4 max-w-lg text-gray-400">
          Add your profile information.
        </p>
      </motion.div>
    </section>
  )
}

export default ProfileSection
