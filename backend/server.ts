import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Database Connection
mongoose
  .connect(process.env.MONGO_URI || '', {
    // Explicit options are no longer needed in recent Mongoose versions
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err))

// Basic Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

// Listen on Port
const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
