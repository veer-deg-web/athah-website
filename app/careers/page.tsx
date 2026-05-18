import type { Metadata } from "next";
import CareersPageContent from "@/components/careers/CareersPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at Athah — Join India's Creative Force",
  description:
    "Explore career opportunities at Athah in event production, media, growth studio, arts faculty, and more.",
  path: "/careers",
  keywords: [
    "Athah careers",
    "creative jobs India",
    "event production jobs",
    "media production careers",
  ],
});

export default function CareersPage() {
  return <CareersPageContent />;
}
