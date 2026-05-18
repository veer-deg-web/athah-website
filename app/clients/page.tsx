import type { Metadata } from "next";
import ClientsPageContent from "@/components/clients/ClientsPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Clients & Partners — Athah's Network",
  description: "Brands, institutions, and artists who trust Athah for their creative needs.",
  path: "/clients",
});

export default function ClientsPage() {
  return <ClientsPageContent />;
}
