import type { Metadata } from "next";
import ArtsAcademyPageContent from "@/components/pages/ArtsAcademyPageContent";

export const metadata: Metadata = {
  title: "Athah Arts Academy — Arts Faculty for Schools & Institutions",
  description:
    "Trained dance, music, theatre, and fine arts faculty for schools and institutions with flexible scheduling and replacement systems.",
};

export default function ArtsAcademyPage() {
  return <ArtsAcademyPageContent />;
}
