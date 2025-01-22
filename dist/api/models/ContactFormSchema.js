import mongoose, { Schema } from 'mongoose';
const ContactFormSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const ContactForm = mongoose.model('ContactForm', ContactFormSchema);
export default ContactForm;
