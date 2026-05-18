import type { Metadata } from "next";
import MediaPageContent from "@/components/pages/MediaPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Athah Media — Cinematography, Photography & Production",
  description:
    "Cinema-grade media production including cinematography, photography, commercial ads, music videos, drone shoots, and event aftermovies.",
  path: "/divisions/media",
});

export default function AthahMediaPage() {
  return <MediaPageContent />;
}
