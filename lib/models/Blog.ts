import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  category: string;
  title: string;
  excerpt: string;
  content: string; // The full HTML/Markdown body
  readTime: string;
  imageUrl?: string;
  date: string;
  createdAt: Date;
}

const BlogSchema: Schema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true, default: "" },
  readTime: { type: String, required: true },
  imageUrl: { type: String },
  date: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
