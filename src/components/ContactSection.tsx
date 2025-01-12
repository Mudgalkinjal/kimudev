import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

type ContactFormData = {
  name: string
  email: string
  subject?: string
  message: string
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  subject: Yup.string().optional(),
  message: Yup.string().required('Message is required'),
})

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001'
export default function ContactSection() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
  })

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch(`${API_URL}/api/auth/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()
      if (!response.ok) {
        setError(responseData.message || 'Failed to send message.')
        setSuccess('')
      } else {
        setSuccess(responseData.message || 'Message sent successfully!')
        setError('')
      }
      console.log('response received')
    } catch (error) {
      console.log('response failed')
      setError('Something went wrong. Please try again later.')
      setSuccess('')
    }
  }

  return (
    <section
      id="contact-me"
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

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Success Message */}
        {success && (
          <div className="text-indigo-600 text-center mb-4">{success}</div>
        )}

        <form className="space-y-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            {...register('name')}
            className={`w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>

          <input
            type="email"
            placeholder="Your Email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input
            type="text"
            placeholder="Subject"
            {...register('subject')}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300"
          />

          <textarea
            placeholder="Your Message"
            {...register('message')}
            className={`w-full px-4 py-2 border rounded-lg bg-gray-700 text-gray-300 ${
              errors.message ? 'border-red-500' : 'border-gray-600'
            }`}
            rows={5}
          ></textarea>
          <p className="text-red-500 text-sm">{errors.message?.message}</p>

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
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              {/* linkedin.com/in/ *}
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              {/* github.com/ */}
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  )
}
