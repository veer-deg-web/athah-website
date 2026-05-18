export type ClientTestimonial = {
  quote: string;
  name: string;
  role: string;
  type: string;
  logo?: string;
};

export type ClientPartner = {
  name: string;
  category: string;
  logo: string;
};

export const clientPartners: ClientPartner[] = [
  {
    name: "Arihant International School, Nahan",
    category: "School",
    logo: "/logos/schools/arihant.png",
  },
  {
    name: "Tula's Dehradun",
    category: "School",
    logo: "/logos/schools/tulas.png",
  },
  {
    name: "Delhi Public School",
    category: "School",
    logo: "/logos/schools/dps-vikasnagar.png",
  },
  {
    name: "Swami Vivekanand Public School",
    category: "School",
    logo: "/logos/schools/swami-vivekanand.png",
  },
  {
    name: "RIT",
    category: "Institution",
    logo: "/logos/schools/rit.png",
  },
  {
    name: "PM Shri Kendriya Vidyalaya Raiwala",
    category: "School",
    logo: "/logos/schools/kvs.png",
  },
];

export const clientMetrics = [
  { value: "100+", label: "Events Delivered" },
  { value: "50+", label: "Schools Served" },
  { value: "7+", label: "Art Forms Taught" },
  { value: "24hr", label: "Proposal Turnaround" },
];
