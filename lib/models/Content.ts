import mongoose, { Schema, Document } from "mongoose";

export interface IContent extends Document {
  filename: string;
  storedName: string;
  url: string;
  mimeType?: string;
  size?: number;
  uploadedAt: Date;
}

const ContentSchema: Schema = new Schema({
  filename: { type: String, required: true },
  storedName: { type: String, required: true },
  url: { type: String, required: true },
  mimeType: { type: String },
  size: { type: Number },
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);
