import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const contentRoot = path.join(process.cwd(), "storage", "content");

// Default content for the home page
const defaultHomeContent = {
  heroTag: "Creative Partner for Schools & Institutions",
  heroTitleLine1: "Where Art",
  heroTitleLine2: "Breathes",
  heroTitleLine3: "Eternity",
  heroDesc: "Dance. Music. Theatre. Fine Arts. Events. Media. One partner for every creative need — delivering cultural programs, arts faculty, and content creation for schools and institutions across India.",
  heroBtn1: "PLAN YOUR EVENT",
  heroBtn2: "VIEW SHOWREEL",
  aboutTag: "The Athah Story",
  aboutTitle: "The Force Behind Every Moment",
  aboutDesc1: "Born from a passion for art and a belief that every school deserves a reliable creative partner, Athah Art Entertainment is based in Dehradun and serves schools, institutions, and cultural ecosystems across India.",
  aboutDesc2: "Founded by Mohit Kashyap, Athah handles everything from weekly dance and music classes to large-scale annual functions — with professional faculty, zero management stress, and structured backup always in place.",
  ctaTitle: "Ready to Create Something Extraordinary?",
  ctaDesc: "Let's bring your vision to life. Talk to our team and get a bespoke proposal within 24 hours.",
  ctaBtn1: "Book Consultation",
  ctaBtn2: "WhatsApp Us"
};

const defaults: Record<string, any> = {
  home: defaultHomeContent
};

export async function ensureContentStorage() {
  await mkdir(contentRoot, { recursive: true });
}

export async function getPageContent(slug: string) {
  await ensureContentStorage();
  const filePath = path.join(contentRoot, `${slug}.json`);
  
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    // If file doesn't exist, create it with default content
    const defaultData = defaults[slug] || {};
    await writeFile(filePath, JSON.stringify(defaultData, null, 2), "utf8");
    return defaultData;
  }
}

export async function savePageContent(slug: string, data: any) {
  await ensureContentStorage();
  const filePath = path.join(contentRoot, `${slug}.json`);
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  return data;
}

export async function getAllEditablePages() {
  // For now, we manually define the pages that have editable content
  return [
    { slug: "home", name: "Home Page" }
  ];
}
