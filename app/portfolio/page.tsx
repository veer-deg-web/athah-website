import type { Metadata } from "next";
import PortfolioPageContent from "@/components/pages/PortfolioPageContent";
import { createPageMetadata } from "@/lib/seo";
import dbConnect from "@/lib/mongodb";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio — Athah Events, Media & Production Work",
  description:
    "Explore Athah's portfolio of events, weddings, concerts, commercial shoots, and media productions.",
  path: "/portfolio",
});

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function PortfolioPage() {


  return <PortfolioPageContent />;
}
