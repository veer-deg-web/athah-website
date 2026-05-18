import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Divisions — Athah Events, Media, Growth Studio & Arts Academy",
  description:
    "Explore Athah's four creative divisions: Events, Media, Growth Studio, and Arts Academy.",
  path: "/divisions",
});

const divisions = [
  {
    id: "events",
    href: "/divisions/events",
    name: "Athah Events",
    tagline: "Events That Move People",
    desc: "From intimate weddings to large-scale corporate summits, concerts, and school ceremonies — we execute every event with cinematic precision and flawless logistics.",
    icon: "celebration",
    services: ["Weddings", "Corporate Events", "Concerts", "School Events", "Cultural Festivals", "Artist Nights"],
    highlight: "500+ events executed",
  },
  {
    id: "media",
    href: "/divisions/media",
    name: "Athah Media",
    tagline: "Stories Through a Lens",
    desc: "Cinema-grade cinematography, photography, commercial production, music videos, podcasts, drone shoots, and event aftermovies.",
    icon: "movie",
    services: ["Cinematography", "Photography", "Commercial Ads", "Music Videos", "Drone Shoots", "Documentaries"],
    highlight: "4K & 8K production",
  },
  {
    id: "growth-studio",
    href: "/divisions/growth-studio",
    name: "Athah Growth Studio",
    tagline: "Strategic Brand Amplification",
    desc: "We help schools, artists, and brands grow strategically through content creation, social media management, branding, and campaign strategy.",
    icon: "trending_up",
    services: ["Content Creation", "Social Media", "Branding", "Campaign Management", "Reels Production", "Strategy"],
    highlight: "10x average growth",
  },
  {
    id: "arts-academy",
    href: "/divisions/arts-academy",
    name: "Athah Arts Academy",
    tagline: "Nurturing Creative Excellence",
    desc: "Providing trained dance, music, theatre, and fine arts faculty to schools and institutions with flexible scheduling and faculty replacement systems.",
    icon: "music_note",
    services: ["Dance Faculty", "Music Faculty", "Theatre Faculty", "Fine Arts", "Instrument Training", "Workshops"],
    highlight: "20+ trained faculty",
  },
];

export default function DivisionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(245,158,11,0.08) 0%, transparent 50%), #0A0A0A" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Our Divisions
          </span>
          <h1 className="text-display uppercase mb-lg max-w-5xl leading-[0.92] text-primary-container">
            Four Disciplines. <br />
            <span className="text-on-surface">One Vision.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Each division is a specialist in its domain. Together, they form an
            unbeatable creative ecosystem for any brief.
          </p>
        </div>
      </section>

      {/* Division Cards */}
      {divisions.map((div, i) => (
        <ScrollReveal
          key={div.id}
          className={`py-xl px-margin ${i % 2 === 1 ? "bg-surface-container-lowest border-y border-outline-variant/10" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 items-center gap-lg lg:grid-cols-2 lg:gap-xl">
              <div
                className={`stagger-item max-w-2xl ${i % 2 === 1 ? "lg:order-2 lg:justify-self-end lg:text-left" : "lg:order-1"}`}
              >
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                  {div.name}
                </span>
                <h2 className="text-headline-lg mb-md text-primary-container">
                  {div.tagline}
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-lg max-w-xl">
                  {div.desc}
                </p>
                <div className="flex flex-wrap gap-sm mb-lg">
                  {div.services.map((s) => (
                    <span
                      key={s}
                      className="px-md py-xs border border-outline-variant/30 text-label-sm text-on-surface-variant"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={div.href}
                  className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all inline-flex items-center gap-sm"
                >
                  Explore {div.name}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              <div
                className={`stagger-item relative flex min-h-[320px] flex-col justify-between border border-[#2A2218] bg-[#121010] p-lg card-lift sm:min-h-[360px] md:p-xl lg:min-h-[420px] ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                <span className="material-symbols-outlined text-primary-container text-[56px] sm:text-[68px] lg:text-[80px]">
                  {div.icon}
                </span>
                <div>
                  <p className="text-headline-md sm:text-headline-lg text-primary-container font-bold mb-xs">
                    {div.highlight}
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    {div.name} — delivering excellence across every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* CTA */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Not sure which division fits?</h2>
            <p className="text-body-md text-on-surface-variant">
              Talk to our team. We&apos;ll identify the right combination of divisions to solve your creative challenge.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Get a Custom Proposal
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
