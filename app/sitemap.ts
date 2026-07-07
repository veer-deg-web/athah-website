import type { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/seo";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: RouteConfig[] = [
  // Highest priority — landing
  { path: "", priority: 1.0, changeFrequency: "weekly" },

  // High-traffic conversion pages
  { path: "/contact", priority: 0.95, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/clients", priority: 0.85, changeFrequency: "monthly" },

  // Division hub + sub-pages
  { path: "/divisions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/divisions/events", priority: 0.8, changeFrequency: "monthly" },
  { path: "/divisions/media", priority: 0.8, changeFrequency: "monthly" },
  { path: "/divisions/growth-studio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/divisions/arts-academy", priority: 0.8, changeFrequency: "monthly" },

  // Solutions hub + landing pages
  { path: "/solutions", priority: 0.75, changeFrequency: "monthly" },
  { path: "/solutions/school-annual-day", priority: 0.85, changeFrequency: "monthly" },

  // Supporting pages
  { path: "/careers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.65, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteMetadata.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
