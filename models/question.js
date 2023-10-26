import mongoose, { Schema, models } from "mongoose";

const questionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    adminAnswer: String,
    adminName: {
      type: String,
      default: "Дарина Полозок"
    },
  },
  { versionKey: false, timestamps: true }
);

const Question = models.Question || mongoose.model("question", questionSchema);

export default Question;
