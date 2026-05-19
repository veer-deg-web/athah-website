import mongoose, { Schema, Document } from "mongoose";

export interface IAdminSettings extends Document {
  key: string;
  value: string;
  updatedAt: Date;
}

const AdminSettingsSchema: Schema = new Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.AdminSettings ||
  mongoose.model<IAdminSettings>("AdminSettings", AdminSettingsSchema);
