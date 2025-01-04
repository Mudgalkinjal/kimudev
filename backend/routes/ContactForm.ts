import express, { Request, Response } from 'express'
import ContactForm from '../models/ContactFormSchema'

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
  try {
    const { name, email, subject, message } = req.body
    const newContact = new ContactForm({ name, email, subject, message })
    await newContact.save()
    res.status(201).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit the contact form' })
  }
})

export default router
