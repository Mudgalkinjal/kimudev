var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/ContactForm.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log('MONGO_URI:', process.env.MONGO_URI);
let isConnected = false;
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
app.get('/', (req, res) => {
    res.send('API is running');
});
app.use('/api/auth', authRoutes);
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside handler');
    yield connectDB();
    app(req, res);
});
export default handler;
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Server running locally on http://localhost:${PORT}`);
        yield connectDB();
    }));
}
