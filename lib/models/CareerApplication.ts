import mongoose, { Schema, Document } from "mongoose";

export interface ICareerApplication extends Document {
  status: "new" | "reviewing" | "shortlisted" | "rejected";
  fullName: string;
  email: string;
  phone: string;
  division: string;
  roleTitle: string;
  roleType: string;
  location: string;
  experience: string;
  portfolioUrl?: string;
  coverLetter: string;
  resumeFileName?: string;
  resumeStoredName?: string;
  resumeDownloadPath?: string;
  createdAt: Date;
}

const CareerApplicationSchema: Schema = new Schema({
  status: { type: String, enum: ["new", "reviewing", "shortlisted", "rejected"], default: "new" },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  division: { type: String, required: true },
  roleTitle: { type: String, required: true },
  roleType: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String },
  portfolioUrl: { type: String },
  coverLetter: { type: String, required: true },
  resumeFileName: { type: String },
  resumeStoredName: { type: String },
  resumeDownloadPath: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.CareerApplication || mongoose.model<ICareerApplication>("CareerApplication", CareerApplicationSchema);
