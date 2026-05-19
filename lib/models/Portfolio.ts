import mongoose, { Schema, Document } from "mongoose";

export interface IPortfolioVideo {
  title: string;
  href: string;
  embedSrc: string;
  orientation?: "portrait" | "landscape";
}

export interface IPortfolio extends Document {
  categoryId: string; // e.g. "ads", "corporate"
  label: string;
  title: string;
  description: string;
  type: "videos" | "folder";
  href?: string;
  embedSrc?: string;
  videos: IPortfolioVideo[];
  order: number;
}

const PortfolioVideoSchema = new Schema<IPortfolioVideo>({
  title: { type: String, required: true },
  href: { type: String, required: true },
  embedSrc: { type: String, required: true },
  orientation: { type: String, enum: ["portrait", "landscape"] }
}, { _id: false });

const PortfolioSchema: Schema = new Schema({
  categoryId: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ["videos", "folder"], required: true },
  href: { type: String },
  embedSrc: { type: String },
  videos: [PortfolioVideoSchema],
  order: { type: Number, default: 0 }
});

export default mongoose.models.Portfolio || mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);
