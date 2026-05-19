import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import dbConnect from "./mongodb";
import CareerApplication, { ICareerApplication } from "./models/CareerApplication";

export type CareerApplicationStatus = "new" | "reviewing" | "shortlisted" | "rejected";

export type CareerApplicationInput = {
  fullName: string;
  email: string;
  phone: string;
  division: string;
  roleTitle: string;
  roleType: string;
  location: string;
  experience?: string;
  portfolioUrl?: string;
  coverLetter: string;
  resume?: File | null;
};

const storageRoot = path.join(process.cwd(), "storage", "careers");
const resumesRoot = path.join(storageRoot, "resumes");

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function ensureStorage() {
  await mkdir(resumesRoot, { recursive: true });
}

export async function listCareerApplications() {
  await dbConnect();
  return CareerApplication.find({}).sort({ createdAt: -1 });
}

export async function createCareerApplication(input: CareerApplicationInput) {
  await dbConnect();
  await ensureStorage();
  
  const id = crypto.randomUUID();
  let resumeStoredName: string | undefined = undefined;
  let resumeDownloadPath: string | undefined = undefined;

  if (input.resume && input.resume.size > 0) {
    const extension = path.extname(input.resume.name) || ".bin";
    resumeStoredName = `${slugify(input.fullName)}-${id}${extension}`;
    const bytes = Buffer.from(await input.resume.arrayBuffer());
    await writeFile(path.join(resumesRoot, resumeStoredName), bytes);
    resumeDownloadPath = `/api/careers/applications/${id}/resume`;
  }

  const application = new CareerApplication({
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    division: input.division,
    roleTitle: input.roleTitle,
    roleType: input.roleType,
    location: input.location,
    experience: input.experience,
    portfolioUrl: input.portfolioUrl,
    coverLetter: input.coverLetter,
    resumeFileName: input.resume?.size ? input.resume.name : undefined,
    resumeStoredName,
    resumeDownloadPath,
  });

  await application.save();
  return application;
}

export async function getCareerApplicationById(id: string) {
  await dbConnect();
  return CareerApplication.findById(id);
}

export async function getCareerResumeFile(storedName: string) {
  return readFile(path.join(resumesRoot, storedName));
}

export function validateCareerApplicationForm(formData: FormData) {
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const division = String(formData.get("division") || "").trim();
  const roleTitle = String(formData.get("roleTitle") || "").trim();
  const roleType = String(formData.get("roleType") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const experience = String(formData.get("experience") || "").trim();
  const portfolioUrl = String(formData.get("portfolioUrl") || "").trim();
  const coverLetter = String(formData.get("coverLetter") || "").trim();
  const resume = formData.get("resume");

  const errors: string[] = [];

  if (fullName.length < 2) errors.push("Full name is required.");
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("A valid email is required.");
  if (phone.length < 8) errors.push("A valid phone number is required.");
  if (!division) errors.push("Please choose a division.");
  if (!roleTitle) errors.push("Please enter the role you are applying for.");
  if (!roleType) errors.push("Please select an engagement type.");
  if (!location) errors.push("Please enter your current location.");
  if (!coverLetter || coverLetter.length < 40) {
    errors.push("Please add a short cover note with at least 40 characters.");
  }
  if (portfolioUrl && !/^https?:\/\//.test(portfolioUrl)) {
    errors.push("Portfolio link must start with http:// or https://");
  }

  const resumeFile = resume instanceof File ? resume : null;
  if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
    errors.push("Resume must be 5MB or smaller.");
  }

  return {
    errors,
    values: {
      fullName,
      email,
      phone,
      division,
      roleTitle,
      roleType,
      location,
      experience,
      portfolioUrl,
      coverLetter,
      resume: resumeFile,
      resumeFileName: resumeFile?.name ?? null,
    },
  };
}
