"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const ContactForm_1 = __importDefault(require("./routes/ContactForm"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database Connection
mongoose_1.default
    .connect(process.env.MONGO_URI || '', {
// Explicit options are no longer needed in recent Mongoose versions
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));
// Basic Routes
app.get('/', (req, res) => {
    res.send('API is running');
});
// Mount routes
app.use('/api/auth', ContactForm_1.default);
// Listen on Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
