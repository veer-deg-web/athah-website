import type { Metadata } from "next";
import MediaPageContent from "@/components/pages/MediaPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Photography & Videography Company in Dehradun — Athah Media",
  description:
    "Athah Media is Dehradun's cinema-grade production company. We offer event photography, videography, commercial ads, music videos, drone shoots, and aftermovies across Uttarakhand.",
  path: "/divisions/media",
  keywords: [
    "photography company Dehradun",
    "videography Dehradun",
    "cinematography Dehradun",
    "event photographer Dehradun",
    "drone shoot Dehradun",
    "music video production Dehradun",
    "commercial video production Uttarakhand",
  ],
});

export default function AthahMediaPage() {
  return <MediaPageContent />;
}
