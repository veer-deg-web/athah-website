import type { Metadata } from "next";
import ArtsAcademyPageContent from "@/components/pages/ArtsAcademyPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dance & Music Faculty for Schools in Dehradun — Athah Arts Academy",
  description:
    "Athah Arts Academy provides trained dance, music, theatre, and fine arts faculty to schools and institutions in Dehradun and Uttarakhand — with flexible scheduling and guaranteed replacement.",
  path: "/divisions/arts-academy",
  keywords: [
    "dance teacher for school Dehradun",
    "music faculty for school Dehradun",
    "arts faculty placement Dehradun",
    "school activity teacher Dehradun",
    "dance classes for schools Uttarakhand",
    "arts academy Dehradun",
    "theatre faculty Dehradun",
  ],
});

export default function ArtsAcademyPage() {
  return <ArtsAcademyPageContent />;
}
