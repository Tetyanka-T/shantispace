import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema(
  {
    thema: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
