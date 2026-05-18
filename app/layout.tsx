import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Athah — Creating Experiences That Define Moments",
  description:
    "India's premier creative force — events, media, growth studio, and arts academy, delivered with cinematic precision.",
  keywords: [
    "Athah Events",
    "Athah Media",
    "Athah Growth Studio",
    "Athah Arts Academy",
    "event management",
    "wedding planners",
    "corporate events",
    "cinematography",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
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
