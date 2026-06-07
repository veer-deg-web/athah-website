import type { Metadata } from "next";
import EventsPageContent from "@/components/pages/EventsPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Event Management Company in Dehradun — Athah Events | Weddings, Corporate, School",
  description:
    "Athah Events is Dehradun's top event management company. We handle weddings, corporate events, school annual days, concerts, and cultural festivals across Uttarakhand.",
  path: "/divisions/events",
  keywords: [
    "event management company in Dehradun",
    "wedding planner Dehradun",
    "school annual day Dehradun",
    "corporate event management Dehradun",
    "concert organizer Dehradun",
    "cultural event company Uttarakhand",
    "event organizer Dehradun",
  ],
});

export default function AthahEventsPage() {
  return <EventsPageContent />;
}
