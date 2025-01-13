// import express from 'express'

// const router = express.Router()

// // POST /contact route
// router.post('/contact', (req, res) => {
//   console.log('Contact form submitted successfully!')
//   res.status(200).send({ message: 'Contact form submitted successfully!' })
// })

// export default router

import express, { Request, Response } from 'express'
import ContactForm from '../models/ContactFormSchema.js'

const router = express.Router()

interface ContactFormRequest extends Request {
  body: {
    name: string
    email: string
    subject?: string
    message: string
  }
}
router.post('/contact', async (req: ContactFormRequest, res: Response) => {
  console.log('Incoming request:', req.body)
  try {
    const { name, email, subject, message } = req.body

    const newContact = new ContactForm({ name, email, subject, message })
    await newContact.save()

    console.log('Contact form saved successfully:', newContact)
    res.status(201).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Error saving contact form:', error)
    res.status(500).json({ error: 'Failed to submit the contact form' })
  }
})

export default router
