import type { Metadata } from "next";
import EventsPageContent from "@/components/pages/EventsPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Athah Events — Weddings, Corporate, Concerts & More",
  description:
    "Full-scale event management for weddings, corporate events, concerts, school events, cultural festivals, and artist nights.",
  path: "/divisions/events",
});

export default function AthahEventsPage() {
  return <EventsPageContent />;
}
