import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/ContactForm.js'
import { VercelRequest, VercelResponse } from '@vercel/node'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
console.log('MONGO_URI:', process.env.MONGO_URI)

let isConnected = false
const connectDB = async () => {
  if (isConnected) return
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || '')
    isConnected = !!db.connection.readyState
    console.log('MongoDB connected')
  } catch (err) {
    console.error('Database connection failed:', err)
  }
}

app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

app.use('/api/auth', authRoutes)

const handler = async (req: VercelRequest, res: VercelResponse) => {
  console.log('inside handler')
  await connectDB()
  app(req as any, res as any)
}

export default handler

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5001
  app.listen(PORT, async () => {
    console.log(`Server running locally on http://localhost:${PORT}`)
    await connectDB()
  })
}
