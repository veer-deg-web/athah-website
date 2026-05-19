import type { Metadata } from "next";
import PortfolioPageContent from "@/components/pages/PortfolioPageContent";
import { createPageMetadata } from "@/lib/seo";
import dbConnect from "@/lib/mongodb";
import Portfolio, { IPortfolio } from "@/lib/models/Portfolio";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio — Athah Events, Media & Production Work",
  description:
    "Explore Athah's portfolio of events, weddings, concerts, commercial shoots, and media productions.",
  path: "/portfolio",
});

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function PortfolioPage() {
  await dbConnect();
  const dbCategories = await Portfolio.find({}).sort({ order: 1 }).lean() as IPortfolio[];
  
  // Serialize the _id correctly since it's an object id when returning lean()
  const categories = dbCategories.map(cat => ({
    ...cat,
    _id: cat._id?.toString()
  }));

  return <PortfolioPageContent initialCategories={categories} />;
}
