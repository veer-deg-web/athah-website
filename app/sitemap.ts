import type { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/blog",
  "/careers",
  "/clients",
  "/contact",
  "/divisions",
  "/divisions/events",
  "/divisions/media",
  "/divisions/growth-studio",
  "/divisions/arts-academy",
  "/portfolio",
  "/solutions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteMetadata.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
