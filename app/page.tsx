import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";
import { createPageMetadata } from "@/lib/seo";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Athah — Best Event Management Company in Dehradun | Weddings, School Events, Corporate",
  description:
    "Athah is Dehradun's #1 event management company. We handle weddings, school annual days, corporate events, concerts, media production, and arts faculty placement across Uttarakhand.",
  path: "/",
  keywords: [
    "event management company in Dehradun",
    "best event management Dehradun",
    "wedding planner Dehradun",
    "school annual day organizer Dehradun",
    "corporate event management Uttarakhand",
    "event company Dehradun",
    "school event management Dehradun",
    "Athah events Dehradun",
    "arts faculty for schools Dehradun",
    "media production company Dehradun",
    "cinematography Dehradun",
    "photography company Dehradun",
    "concert organizer Dehradun",
    "cultural event management Uttarakhand",
    "Athah",
  ],
});

export default async function HomePage() {
  const content = await getPageContent("home");
  return <HomePageContent content={content} />;
}
