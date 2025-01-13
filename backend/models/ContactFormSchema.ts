import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IContactForm extends Document {
  name: string
  email: string
  subject?: string
  message: string
}

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
    timestamps: true,
  }
)

const ContactForm: Model<IContactForm> = mongoose.model<IContactForm>(
  'ContactForm',
  ContactFormSchema
)

export default ContactForm
