// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import contactRoutes from './routes/ContactForm.js' // Ensure the correct path and .js extension if using ES modules

// dotenv.config()

// const app = express()

// // Middleware
// app.use(cors())
// app.use(express.json())

// // Mount the routes
// app.use('/api/auth', contactRoutes)

// // Start the server locally
// const PORT = process.env.PORT || 5001
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`)
// })

import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/ContactForm.js'
import { VercelRequest, VercelResponse } from '@vercel/node'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
console.log('i am here ')
console.log('MONGO_URI:', process.env.MONGO_URI)

// Database Connection
let isConnected = false // Flag to prevent multiple database connections
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

// Basic Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

// Mount routes
app.use('/api/auth', authRoutes)

// Export the serverless function (for Vercel)
const handler = async (req: VercelRequest, res: VercelResponse) => {
  console.log('inside handler')
  await connectDB() // Ensure DB connection for every request
  app(req as any, res as any) // Delegate the request to Express
}

export default handler

// Start the server locally for development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5001
  app.listen(PORT, async () => {
    console.log(`Server running locally on http://localhost:${PORT}`)
    await connectDB() // Connect to the database at startup
  })
}
