import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";
import { createPageMetadata } from "@/lib/seo";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Athah — Creative Partner for Events, Media, Growth & Arts",
  description:
    "Athah brings together events, media production, growth strategy, and arts education for schools, institutions, artists, and brands.",
  path: "/",
  keywords: [
    "Athah",
    "events company India",
    "school creative partner",
    "media production",
    "arts academy",
  ],
});

export default async function HomePage() {
  const content = await getPageContent("home");
  return <HomePageContent content={content} />;
}
