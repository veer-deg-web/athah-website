import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Divisions — Athah Events, Media, Growth Studio & Arts Academy",
  description:
    "Explore Athah's four creative divisions: Events, Media, Growth Studio, and Arts Academy.",
};

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
          <h1 className="text-display uppercase mb-lg max-w-4xl leading-none">
            Four Disciplines. <br />
            <span className="text-primary-container">One Vision.</span>
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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-xl items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className="stagger-item md:[direction:ltr]">
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                  {div.name}
                </span>
                <h2 className="text-headline-lg mb-md">{div.tagline}</h2>
                <p className="text-body-lg text-on-surface-variant mb-lg">
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
                  className="bg-[#D97706] text-white px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all inline-flex items-center gap-sm"
                >
                  Explore {div.name}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              <div
                className="stagger-item relative min-h-[400px] bg-[#121010] border border-[#2A2218] flex flex-col justify-between p-xl md:[direction:ltr] card-lift"
              >
                <span className="material-symbols-outlined text-primary-container text-[80px]">
                  {div.icon}
                </span>
                <div>
                  <p className="text-headline-lg text-primary-container font-bold mb-xs">
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
