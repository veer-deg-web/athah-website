import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import type { ClientTestimonial } from "@/components/clients/client-data";

export type FeedbackStatus = "pending" | "approved" | "rejected";

export type FeedbackSubmission = {
  id: string;
  createdAt: string;
  status: FeedbackStatus;
  quote: string;
  name: string;
  role: string;
  organization: string;
  email: string;
  phone: string;
  type: string;
  logo?: string;
  referenceEvent?: string;
};

const storageRoot = path.join(process.cwd(), "storage", "testimonials");
const feedbackFile = path.join(storageRoot, "feedback.json");

const seededTestimonials: ClientTestimonial[] = [
  {
    quote:
      "Athah transformed our annual function. The choreography, lighting, and costumes were spectacular — and the entire process was completely stress-free for our school.",
    name: "Principal",
    role: "Arihant International School, Nahan",
    type: "School Partner",
    logo: "/logos/schools/arihant.png",
  },
  {
    quote:
      "Finding reliable activity teachers was always a challenge. Since partnering with Athah, our dance and music programs run seamlessly every single week without any management from our side.",
    name: "Head of Activities",
    role: "Tula's Institute, Dehradun",
    type: "School Partner",
    logo: "/logos/schools/tulas.png",
  },
  {
    quote:
      "Parents can now see their children's daily progress through the reels and activity photos Athah creates. School trust and admissions interest have both grown significantly.",
    name: "Director",
    role: "River Valley Global School",
    type: "School Partner",
    logo: "/logos/schools/rivervalley.png",
  },
  {
    quote:
      "The choreography for our annual day was exceptional — students were more confident, parents were amazed, and the event highlight reel went viral among our school community.",
    name: "Principal",
    role: "Delhi Public School",
    type: "School Partner",
    logo: "/logos/schools/dps-vikasnagar.png",
  },
  {
    quote:
      "Athah handles our content, social media, and activity documentation. The school's digital presence has never been stronger. They truly are a one-stop creative partner.",
    name: "Head of Administration",
    role: "Swami Vivekanand Public School",
    type: "School Partner",
    logo: "/logos/schools/swami-vivekanand.png",
  },
  {
    quote:
      "Professional, punctual, and genuinely creative. The stage design, sound, and lighting for our founder's day event was beyond what we expected at this budget.",
    name: "Event Coordinator",
    role: "RIT",
    type: "Institution Partner",
    logo: "/logos/schools/rit.png",
  },
];

async function ensureStorage() {
  await mkdir(storageRoot, { recursive: true });
  try {
    await readFile(feedbackFile, "utf8");
  } catch {
    await writeFile(feedbackFile, "[]", "utf8");
  }
}

async function readFeedbackUnsafe() {
  await ensureStorage();
  const raw = await readFile(feedbackFile, "utf8");
  return JSON.parse(raw) as FeedbackSubmission[];
}

async function writeFeedback(feedback: FeedbackSubmission[]) {
  await ensureStorage();
  await writeFile(feedbackFile, JSON.stringify(feedback, null, 2), "utf8");
}

export async function listFeedbackSubmissions() {
  const feedback = await readFeedbackUnsafe();
  return feedback.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createFeedbackSubmission(
  input: Omit<FeedbackSubmission, "id" | "createdAt" | "status">
) {
  const feedback = await readFeedbackUnsafe();
  const submission: FeedbackSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "pending",
    ...input,
  };
  feedback.push(submission);
  await writeFeedback(feedback);
  return submission;
}

export async function updateFeedbackStatus(id: string, status: FeedbackStatus) {
  const feedback = await readFeedbackUnsafe();
  const target = feedback.find((item) => item.id === id);
  if (!target) return null;
  target.status = status;
  await writeFeedback(feedback);
  return target;
}

export async function listApprovedTestimonials(): Promise<ClientTestimonial[]> {
  const feedback = await readFeedbackUnsafe();
  const approved = feedback
    .filter((item) => item.status === "approved")
    .map<ClientTestimonial>((item) => ({
      quote: item.quote,
      name: item.name,
      role: `${item.role}, ${item.organization}`,
      type: item.type,
      logo: item.logo || "",
    }));
  return [...seededTestimonials, ...approved];
}

export function validateFeedbackForm(formData: FormData) {
  const quote = String(formData.get("quote") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const role = String(formData.get("role") || "").trim();
  const organization = String(formData.get("organization") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const type = String(formData.get("type") || "").trim() || "Client Feedback";
  const referenceEvent = String(formData.get("referenceEvent") || "").trim();

  const errors: string[] = [];
  if (quote.length < 40) errors.push("Please add at least 40 characters of feedback.");
  if (name.length < 2) errors.push("Name is required.");
  if (role.length < 2) errors.push("Role is required.");
  if (organization.length < 2) errors.push("Organization is required.");
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("A valid email is required.");
  if (phone.length < 8) errors.push("A valid phone number is required.");

  return {
    errors,
    values: {
      quote,
      name,
      role,
      organization,
      email,
      phone,
      type,
      referenceEvent,
      logo: "",
    },
  };
}
