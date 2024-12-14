import React from 'react'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact section5"
      className="section w-full h-screen flex items-center justify-center bg-gray-600"
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
  )
}

export default ContactSection
