import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Solutions — Athah for Schools, Brands, Artists & More",
  description:
    "Tailored creative solutions for schools, colleges, artists, brands, creators, weddings, and event organizers.",
};

const solutions = [
  {
    id: "schools",
    icon: "school",
    title: "Solutions for Schools",
    tagline: "Elevate Every Educational Milestone",
    desc: "Annual days, sports meets, graduation ceremonies, cultural programs, and arts faculty — all from one trusted partner.",
    services: ["Event Management", "Arts Faculty", "Videography", "Social Media"],
    cta: "Partner With Us",
  },
  {
    id: "colleges",
    icon: "domain",
    title: "Solutions for Colleges",
    tagline: "Campus Events at a New Level",
    desc: "Fests, convocations, cultural nights, and college brand management. We handle the scale that student teams can't.",
    services: ["Large-Scale Events", "Stage & AV", "Media Coverage", "Growth Studio"],
    cta: "Enquire Now",
  },
  {
    id: "artists",
    icon: "star",
    title: "Solutions for Artists",
    tagline: "Build Your Brand & Book More Gigs",
    desc: "Artist management, EPK production, social media growth, music video production, and tour support.",
    services: ["Artist Management", "Music Videos", "Social Media", "Press Kits"],
    cta: "Work With Us",
  },
  {
    id: "brands",
    icon: "business",
    title: "Solutions for Brands",
    tagline: "Content That Converts",
    desc: "Commercial productions, social campaigns, brand events, and ongoing content strategies that grow your presence.",
    services: ["Brand Films", "Campaigns", "Social Media", "Corporate Events"],
    cta: "Start Growing",
  },
  {
    id: "creators",
    icon: "video_library",
    title: "Solutions for Creators",
    tagline: "Professional Production for Creators",
    desc: "Studio-quality content production, podcast setups, YouTube production, and growth strategy for independent creators.",
    services: ["Video Production", "Podcast Setup", "Thumbnails & Branding", "Growth Strategy"],
    cta: "Level Up",
  },
  {
    id: "weddings",
    icon: "favorite",
    title: "Solutions for Weddings",
    tagline: "Your Dream Wedding. Our Flawless Execution.",
    desc: "End-to-end wedding management — from the first décor concept to the final reel. Comprehensive and bespoke.",
    services: ["Wedding Planning", "Stage & Décor", "Photography", "Cinematic Films"],
    cta: "Plan My Wedding",
  },
  {
    id: "event-organizers",
    icon: "event",
    title: "Solutions for Event Organizers",
    tagline: "The Back-End You Need",
    desc: "White-label production, AV, lighting, stage, and crew support for event companies and promoters.",
    services: ["Stage Production", "Lighting & Sound", "Crew Supply", "Media Coverage"],
    cta: "Partner With Athah",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(245,158,11,0.09) 0%, transparent 50%), #0A0A0A" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">Our Solutions</span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Built for <br />
            <span className="text-primary-container">Your Brief</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Whether you&apos;re a school, a brand, an artist, or an event organizer — Athah has a tailored solution for you.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      {solutions.map((s, i) => (
        <ScrollReveal
          key={s.id}
          className={`py-xl px-margin ${i % 2 === 1 ? "bg-surface-container-lowest border-y border-outline-variant/10" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
              <div
                className={`md:col-span-7 stagger-item ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                  {s.title}
                </span>
                <h2 className="text-headline-lg mb-md">{s.tagline}</h2>
                <p className="text-body-lg text-on-surface-variant mb-lg">{s.desc}</p>
                <div className="flex flex-wrap gap-sm mb-lg">
                  {s.services.map((svc) => (
                    <span key={svc} className="px-md py-xs border border-outline-variant/30 text-label-sm text-on-surface-variant">
                      {svc}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-sm bg-[#D97706] text-white px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all"
                >
                  {s.cta}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              <div
                className={`md:col-span-5 stagger-item ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div
                  className="relative h-[300px] bg-[#121010] border border-[#2A2218] flex items-center justify-center card-lift"
                >
                  <span className="material-symbols-outlined text-primary-container/30 text-[120px]">
                    {s.icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Final CTA */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Not sure which solution fits?</h2>
            <p className="text-body-md text-on-surface-variant">
              Describe your challenge. We&apos;ll build the perfect combination of Athah services around it.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all"
          >
            Talk to Our Team
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
