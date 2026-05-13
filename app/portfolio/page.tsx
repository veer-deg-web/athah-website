import type { Metadata } from "next";
import PortfolioPageContent from "@/components/pages/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio — Athah Events, Media & Production Work",
  description:
    "Explore Athah's portfolio of events, weddings, concerts, commercial shoots, and media productions.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
