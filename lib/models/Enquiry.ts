import mongoose, { Schema, Document } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  phone: string;
  email: string;
  division: string;
  eventType: string;
  budget: string;
  message: string;
  eventLocation?: string;
  eventDate?: string;
  status: "new" | "contacted" | "closed";
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema({
  name: { type: String, required: true, maxlength: 200 },
  phone: { type: String, required: true, maxlength: 20 },
  email: { type: String, required: true, maxlength: 200 },
  division: { type: String, required: true, maxlength: 100 },
  eventType: { type: String, maxlength: 100 },
  budget: { type: String, maxlength: 50 },
  message: { type: String, required: true, maxlength: 3000 },
  eventLocation: { type: String, maxlength: 300 },
  eventDate: { type: String, maxlength: 50 },
  status: {
    type: String,
    enum: ["new", "contacted", "closed"],
    default: "new",
  },
  createdAt: { type: Date, default: Date.now },
});

// Index for fast admin queries
EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ status: 1 });

export default mongoose.models.Enquiry ||
  mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
