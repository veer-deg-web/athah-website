import type { Metadata } from "next";
import MediaPageContent from "@/components/pages/MediaPageContent";

export const metadata: Metadata = {
  title: "Athah Media — Cinematography, Photography & Production",
  description:
    "Cinema-grade media production including cinematography, photography, commercial ads, music videos, drone shoots, and event aftermovies.",
};

export default function AthahMediaPage() {
  return <MediaPageContent />;
}
