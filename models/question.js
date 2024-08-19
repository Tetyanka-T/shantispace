import mongoose, { Schema, models } from 'mongoose'

const questionSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    adminAnswer: {
      type: String,
      default: ''
    },
    adminName: {
      type: String,
      default: 'Дарина Потапова'
    }
  },
  { versionKey: false, timestamps: true }
)

const Question =
  mongoose.models.Question || mongoose.model('Question', questionSchema)

export default Question
