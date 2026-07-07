import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Athah — Our Story, Vision & Team",
  description:
    "Learn about Athah's brand story, creative philosophy, and the team behind India's premier creative force.",
  path: "/about",
});

function PageHero() {
  return (
    <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 50%), #0A0A0A",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
          About Athah
        </span>
        <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
          We Are <span className="text-primary-container">Athah</span>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          A creative partner for schools, institutions &amp; cultural ecosystems — based in Dehradun. From arts faculty and cultural events to social media and videography, we handle it all.
        </p>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="stagger-item">
          <h2 className="text-headline-lg mb-lg">The Meaning of Athah</h2>
          <p className="text-body-lg text-on-surface-variant mb-md">
            Inspired by the Sanskrit word &ldquo;Athah&rdquo; — meaning
            infinite or bottomless — our team embodies the endless possibilities
            that creativity offers. We are not just an art and entertainment
            company; we are a vibrant community of dreamers, creators, and
            visionaries working to bring imagination to life.
          </p>
          <p className="text-body-md text-on-surface-variant mb-md">
            Founded on the principle that everyone has a unique artistic voice,
            Athah provides a dynamic platform for people of all ages to explore
            and express themselves. We merge traditional Indian art forms with
            contemporary styles to create experiences that are both culturally
            rooted and globally relevant.
          </p>
          <p className="text-body-md text-on-surface-variant">
            From weekly activity classes to large-scale annual functions —
            one partner, every creative need.
          </p>
        </div>

        <div
          className="stagger-item relative h-[480px] border border-[#2A2218] overflow-hidden"
          style={{ background: "#080808" }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#e2e2e2 1px, transparent 1px), linear-gradient(90deg, #e2e2e2 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Pulsing amber spotlight */}
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.22) 0%, rgba(217,119,6,0.09) 38%, transparent 68%)",
              animationDuration: "3s",
            }}
          />

          {/* Layer 1 — 200px, blurred, 5% */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              style={{
                fontSize: "200px",
                fontWeight: 800,
                color: "#D97706",
                opacity: 0.05,
                lineHeight: 1,
                filter: "blur(7px)",
              }}
            >
              अथाह
            </span>
          </div>

          {/* Layer 2 — 130px, slight blur, 11% */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              style={{
                fontSize: "130px",
                fontWeight: 800,
                color: "#D97706",
                opacity: 0.11,
                lineHeight: 1,
                filter: "blur(2px)",
              }}
            >
              अथाह
            </span>
          </div>

          {/* Layer 3 — 72px, sharp, 22% */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#F59E0B",
                opacity: 0.22,
                lineHeight: 1,
              }}
            >
              अथाह
            </span>
          </div>

          {/* Front — ATHAH with amber glow */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-sm">
            <p
              className="font-bold uppercase"
              style={{
                fontSize: "30px",
                color: "#FFFFFF",
                letterSpacing: "0.35em",
                textShadow:
                  "0 0 24px rgba(245,158,11,0.8), 0 0 56px rgba(245,158,11,0.4), 0 0 100px rgba(245,158,11,0.18)",
              }}
            >
              ATHAH
            </p>
            <div className="flex items-center gap-sm mt-xs">
              <div className="w-8 h-px bg-amber-500/40" />
              <p
                className="text-label-sm uppercase text-amber-500/50"
                style={{ letterSpacing: "0.2em" }}
              >
                Infinite
              </p>
              <div className="w-8 h-px bg-amber-500/40" />
            </div>
          </div>

          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 48%, rgba(8,8,8,0.85) 100%)",
            }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

function VisionMission() {
  return (
    <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="stagger-item bg-[#121010] border border-[#2A2218] p-xl">
            <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
              visibility
            </span>
            <h2 className="text-headline-md mb-md">Our Vision</h2>
            <p className="text-body-lg text-on-surface-variant">
              To be the most trusted creative partner for schools and institutions — where art is accessible, students are seen, and every cultural moment is preserved with excellence.
            </p>
          </div>
          <div className="stagger-item bg-[#121010] border border-[#2A2218] p-xl">
            <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
              rocket_launch
            </span>
            <h2 className="text-headline-md mb-md">Our Mission</h2>
            <p className="text-body-lg text-on-surface-variant">
              To deliver every creative service — from weekly dance classes to large-scale annual functions — with professional precision, structured management, and zero stress for our school partners.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function CreativePhilosophy() {
  const pillars = [
    { icon: "palette", title: "Art First", desc: "Every decision is driven by aesthetics, storytelling, and emotional impact." },
    { icon: "precision_manufacturing", title: "Precision Always", desc: "Military-grade logistics meets creative freedom. Nothing is left to chance." },
    { icon: "hub", title: "Unified Ecosystem", desc: "Four divisions. Infinite synergy. The sum is always greater than the parts." },
    { icon: "star", title: "Premium Standard", desc: "We don't offer tiers. Everything we do is held to the highest standard." },
  ];

  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div>
        <div className="mb-xl stagger-item max-w-2xl">
          <h2 className="text-headline-lg mb-md">Creative Philosophy</h2>
          <p className="text-body-lg text-on-surface-variant">
            The principles that guide every project, every hire, and every
            decision at Athah.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#121010] border border-[#2A2218] p-lg flex gap-lg items-start stagger-item card-lift"
            >
              <span className="material-symbols-outlined text-primary-container text-[40px] flex-shrink-0">
                {p.icon}
              </span>
              <div>
                <h3 className="text-headline-md mb-sm">{p.title}</h3>
                <p className="text-body-md text-on-surface-variant">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function TeamStructure() {
  const teams = [
    { division: "Athah Events", size: "12+", roles: "Event Coordinators, Stage Managers, AV Technicians" },
    { division: "Athah Media", size: "8+", roles: "Cinematographers, Photographers, Editors, Drone Pilots" },
    { division: "Athah Growth Studio", size: "6+", roles: "Strategists, Content Creators, Designers" },
    { division: "Athah Arts Academy", size: "20+", roles: "Dance, Music, Theatre & Fine Arts Faculty" },
  ];

  return (
    <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-md">
          <div className="stagger-item flex-1">
            <h2 className="text-headline-lg mb-md">Our Team</h2>
            <p className="text-body-md text-on-surface-variant">
              Founded by Mohit Kashyap — a growing team of creative professionals across four specialized divisions.
            </p>
          </div>
          <Link
            href="/careers"
            className="text-primary text-label-sm uppercase tracking-wide flex items-center gap-xs group stagger-item"
          >
            Join Our Team{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {teams.map((t) => (
            <div
              key={t.division}
              className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift"
            >
              <div className="flex justify-between items-start mb-md">
                <h3 className="text-headline-md">{t.division}</h3>
                <span className="text-primary-container text-headline-lg font-bold">
                  {t.size}
                </span>
              </div>
              <p className="text-body-md text-on-surface-variant">{t.roles}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function CareersCTA() {
  return (
    <ScrollReveal className="py-xl px-margin">
      <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
        <div className="flex-1 min-w-0 max-w-2xl">
          <h2 className="text-headline-lg mb-md">Careers at Athah</h2>
          <p className="text-body-md text-on-surface-variant">
            Join a team that believes craft and precision can change how people
            experience the world. We&apos;re always looking for extraordinary
            individuals.
          </p>
        </div>
        <Link
          href="/careers"
          className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all"
        >
          View Open Roles
        </Link>
      </div>
    </ScrollReveal>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <BrandStory />
      <VisionMission />
      <CreativePhilosophy />
      <TeamStructure />
      <CareersCTA />
    </>
  );
}
