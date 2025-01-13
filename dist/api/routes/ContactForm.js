
import express from 'express';
import ContactForm from '../models/ContactFormSchema.js';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = express.Router();
router.post('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Incoming request:', req.body);
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new ContactForm({ name, email, subject, message });
        yield newContact.save();
        console.log('Contact form saved successfully:', newContact);
        res.status(201).json({ message: 'Contact form submitted successfully' });
    }
    catch (error) {
        console.error('Error saving contact form:', error);
        res.status(500).json({ error: 'Failed to submit the contact form' });
    }
}));
export default router;
