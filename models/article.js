import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema(
  {
    thema: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
      required: true,
    },
    imgSrc: String,
  },
  { versionKey: false, timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
