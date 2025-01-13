/* eslint-disable import/first */
// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import contactRoutes from './routes/ContactForm.js' // Ensure the correct path and .js extension if using ES modules
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/ContactForm.js';
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
console.log('i am here ');
console.log('MONGO_URI:', process.env.MONGO_URI);
// Database Connection
let isConnected = false; // Flag to prevent multiple database connections
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isConnected)
        return;
    try {
        const db = yield mongoose.connect(process.env.MONGO_URI || '');
        isConnected = !!db.connection.readyState;
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('Database connection failed:', err);
    }
});
// Basic Routes
app.get('/', (req, res) => {
    res.send('API is running');
});
// Mount routes
app.use('/api/auth', authRoutes);
// Export the serverless function (for Vercel)
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside handler');
    yield connectDB(); // Ensure DB connection for every request
    app(req, res); // Delegate the request to Express
});
export default handler;
// Start the server locally for development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Server running locally on http://localhost:${PORT}`);
        yield connectDB(); // Connect to the database at startup
    }));
}
