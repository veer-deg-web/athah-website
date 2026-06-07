import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://athah.in";

export const siteMetadata = {
  name: "Athah",
  url: siteUrl,
  defaultTitle: "Athah — Best Event Management Company in Dehradun",
  description:
    "Athah is Dehradun's top event management company — weddings, school annual days, corporate events, media production, and arts faculty for schools across Uttarakhand.",
  locale: "en_IN",
  ogImage: "/assets/IMG-20260508-WA0059.jpg",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  index?: boolean;
  follow?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteMetadata.ogImage,
  index = true,
  follow = true,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteMetadata.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      type: "website",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
