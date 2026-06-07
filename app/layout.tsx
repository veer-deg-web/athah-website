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
    "event management company in Dehradun",
    "best event management Dehradun",
    "wedding planner Dehradun",
    "school annual day Dehradun",
    "corporate event management Dehradun",
    "event organizer Uttarakhand",
    "school event management company",
    "arts faculty for schools Dehradun",
    "media production company Dehradun",
    "cinematography Dehradun",
    "photography Dehradun",
    "concert organizer Dehradun",
    "Athah Events",
    "Athah Media",
    "Athah Growth Studio",
    "Athah Arts Academy",
    "creative partner Dehradun",
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
        width: 1200,
        height: 630,
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
  "@type": ["EventPlanner", "LocalBusiness", "Organization"],
  name: "Athah Arts & Entertainment",
  alternateName: ["Athah", "Athah Events", "Athah Dehradun"],
  url: siteMetadata.url,
  logo: `${siteMetadata.url}/ATHAH LOGO.png`,
  image: `${siteMetadata.url}${siteMetadata.ogImage}`,
  description:
    "Athah is Dehradun's leading event management company offering weddings, school annual days, corporate events, media production, and arts faculty placement across Uttarakhand.",
  telephone: "+91-98975-91309",
  email: "athaheventsddn@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "154/1 Mazaar Lane, Chakrata Road",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3165,
    longitude: 78.0322,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/athah_events",
    "https://athahartentertainment.com",
  ],
  areaServed: [
    { "@type": "City", name: "Dehradun" },
    { "@type": "State", name: "Uttarakhand" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Wedding Planning",
    "School Annual Day Events",
    "Corporate Event Management",
    "Concert Production",
    "Cinematography",
    "Photography",
    "Arts Faculty Placement",
    "Social Media Marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Athah Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Management in Dehradun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Planning in Dehradun" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "School Annual Day Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cinematography & Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media & Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arts Faculty Placement for Schools" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best event management company in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Athah Arts & Entertainment is Dehradun's leading event management company, having executed 100+ events including weddings, school annual days, corporate events, and concerts across Uttarakhand.",
      },
    },
    {
      "@type": "Question",
      name: "Does Athah handle school annual day events in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Athah specializes in school annual functions, cultural programs, and graduation ceremonies for schools and institutions in Dehradun and across Uttarakhand. We manage everything from choreography and lighting to stage design and AV production.",
      },
    },
    {
      "@type": "Question",
      name: "How much does event management cost in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Event management packages at Athah start from ₹1.5 lakh for cultural events and school programs. Wedding and large-scale corporate events are priced based on guest count, venue, and production requirements. Contact us for a custom proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Does Athah provide wedding planning services in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Athah manages complete wedding planning in Dehradun — from venue coordination and décor to photography, videography, catering liaison, and artist management. We handle every detail so you can enjoy your day.",
      },
    },
    {
      "@type": "Question",
      name: "Can Athah provide arts and dance faculty for schools in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Athah Arts Academy provides trained dance, music, theatre, and fine arts faculty to schools in Dehradun and Uttarakhand. We also offer a 24-hour faculty replacement guarantee to ensure zero disruptions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Athah offer photography and videography services in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Athah Media provides cinema-grade photography and videography in Dehradun — covering events, weddings, corporate videos, music videos, drone shoots, and social media reels.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
