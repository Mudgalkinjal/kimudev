import mongoose, { Schema, Document, Model } from 'mongoose'

// Define the interface for TypeScript
export interface IContactForm extends Document {
  name: string
  email: string
  subject?: string
  message: string
}

// Define the schema
const ContactFormSchema: Schema = new Schema<IContactForm>(
  {
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
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
)

// Create the model
const ContactForm: Model<IContactForm> = mongoose.model<IContactForm>(
  'ContactForm',
  ContactFormSchema
)

export default ContactForm
