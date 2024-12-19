import React from 'react'
import { motion } from 'framer-motion'

const ContactMe: React.FC = () => {
  return (
    <section
      id="contact-me section4"
      className="section w-full min-h-screen flex flex-col items-center justify-center bg-gray-600 px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl bg-gray-500 rounded-lg p-8 shadow-lg text-gray-100"
      >
        <h2 className="text-3xl font-bold text-white text-center">
          Contact Me
        </h2>
        <p className="text-lg mt-4 text-center">
          I’d love to hear from you! Whether you have a question, a
          collaboration idea, or just want to say hello, feel free to get in
          touch.
        </p>

        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-800 w-full"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/kinjalmudgal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              linkedin.com/in/kinjalmudgal
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/Mudgalkinjal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              github.com/Mudgalkinjal
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactMe
