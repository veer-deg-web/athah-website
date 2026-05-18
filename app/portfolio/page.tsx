import type { Metadata } from "next";
import PortfolioPageContent from "@/components/pages/PortfolioPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio — Athah Events, Media & Production Work",
  description:
    "Explore Athah's portfolio of events, weddings, concerts, commercial shoots, and media productions.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
