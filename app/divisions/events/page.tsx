import type { Metadata } from "next";
import EventsPageContent from "@/components/pages/EventsPageContent";

export const metadata: Metadata = {
  title: "Athah Events — Weddings, Corporate, Concerts & More",
  description:
    "Full-scale event management for weddings, corporate events, concerts, school events, cultural festivals, and artist nights.",
};

export default function AthahEventsPage() {
  return <EventsPageContent />;
}
