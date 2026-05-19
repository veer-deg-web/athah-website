import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.defaultTitle,
    template: "%s | Athah",
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  publisher: siteMetadata.name,
  category: "Arts & Entertainment",
  keywords: [
    "Athah Events",
    "Athah Media",
    "Athah Growth Studio",
    "Athah Arts Academy",
    "event management",
    "wedding planners",
    "corporate events",
    "cinematography",
    "school events",
    "creative partner",
  ],
  openGraph: {
    siteName: siteMetadata.name,
    type: "website",
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        alt: siteMetadata.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD structured data for Google rich results
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Athah Arts & Entertainment",
  alternateName: "Athah",
  url: siteMetadata.url,
  logo: `${siteMetadata.url}/ATHAH LOGO.png`,
  image: `${siteMetadata.url}${siteMetadata.ogImage}`,
  description: siteMetadata.description,
  telephone: "+91-98975-91309",
  email: "athaheventsddn@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "154/1 Mazaar Lane, Chakrata Road",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/athah_events",
    "https://athahartentertainment.com",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Athah Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photography & Videography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media & Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arts Faculty Placement" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
