import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export type CareerApplicationStatus = "new" | "reviewing" | "shortlisted" | "rejected";

export type CareerApplication = {
  id: string;
  createdAt: string;
  status: CareerApplicationStatus;
  fullName: string;
  email: string;
  phone: string;
  division: string;
  roleTitle: string;
  roleType: string;
  location: string;
  experience: string;
  portfolioUrl: string;
  coverLetter: string;
  resumeFileName: string | null;
  resumeStoredName: string | null;
  resumeDownloadPath: string | null;
};

export type CareerApplicationInput = Omit<
  CareerApplication,
  "id" | "createdAt" | "status" | "resumeStoredName" | "resumeDownloadPath"
> & {
  resume?: File | null;
};

const storageRoot = path.join(process.cwd(), "storage", "careers");
const resumesRoot = path.join(storageRoot, "resumes");
const applicationsFile = path.join(storageRoot, "applications.json");

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function ensureStorage() {
  await mkdir(resumesRoot, { recursive: true });
  try {
    await readFile(applicationsFile, "utf8");
  } catch {
    await writeFile(applicationsFile, "[]", "utf8");
  }
}

async function readApplicationsUnsafe() {
  await ensureStorage();
  const raw = await readFile(applicationsFile, "utf8");
  return JSON.parse(raw) as CareerApplication[];
}

async function writeApplications(applications: CareerApplication[]) {
  await ensureStorage();
  await writeFile(applicationsFile, JSON.stringify(applications, null, 2), "utf8");
}

export async function listCareerApplications() {
  const applications = await readApplicationsUnsafe();
  return applications.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createCareerApplication(input: CareerApplicationInput) {
  const applications = await readApplicationsUnsafe();
  const id = crypto.randomUUID();
  let resumeStoredName: string | null = null;
  let resumeDownloadPath: string | null = null;

  if (input.resume && input.resume.size > 0) {
    const extension = path.extname(input.resume.name) || ".bin";
    resumeStoredName = `${slugify(input.fullName)}-${id}${extension}`;
    const bytes = Buffer.from(await input.resume.arrayBuffer());
    await writeFile(path.join(resumesRoot, resumeStoredName), bytes);
    resumeDownloadPath = `/api/careers/applications/${id}/resume`;
  }

  const application: CareerApplication = {
    id,
    createdAt: new Date().toISOString(),
    status: "new",
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
    resumeFileName: input.resume?.size ? input.resume.name : null,
    resumeStoredName,
    resumeDownloadPath,
  };

  applications.push(application);
  await writeApplications(applications);

  return application;
}

export async function getCareerApplicationById(id: string) {
  const applications = await readApplicationsUnsafe();
  return applications.find((application) => application.id === id) ?? null;
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
