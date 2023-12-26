import mongoose, { Schema, models } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email addres']
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  { versionKey: false, timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
