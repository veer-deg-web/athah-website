import type { Metadata } from "next";
import ArtsAcademyPageContent from "@/components/pages/ArtsAcademyPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Athah Arts Academy — Arts Faculty for Schools & Institutions",
  description:
    "Trained dance, music, theatre, and fine arts faculty for schools and institutions with flexible scheduling and replacement systems.",
  path: "/divisions/arts-academy",
});

export default function ArtsAcademyPage() {
  return <ArtsAcademyPageContent />;
}
