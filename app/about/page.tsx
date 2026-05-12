import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Athah — Our Story, Vision & Team",
  description:
    "Learn about Athah's brand story, creative philosophy, and the team behind India's premier creative force.",
};

function PageHero() {
  return (
    <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(255,86,38,0.08) 0%, transparent 50%), #131313",
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
          className="stagger-item relative h-[400px] border border-[#333336] overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 40% 60%, rgba(255,86,38,0.15) 0%, transparent 60%), #111111",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-display text-primary-container/20 font-bold uppercase"
              style={{ fontSize: "120px", letterSpacing: "-0.05em" }}
            >
              अथ
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-headline-lg text-on-surface/80 font-bold uppercase tracking-widest">
              ATHAH
            </p>
          </div>
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
          <div className="stagger-item bg-[#111111] border border-[#333336] p-xl">
            <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
              visibility
            </span>
            <h2 className="text-headline-md mb-md">Our Vision</h2>
            <p className="text-body-lg text-on-surface-variant">
              To be the most trusted creative partner for schools and institutions — where art is accessible, students are seen, and every cultural moment is preserved with excellence.
            </p>
          </div>
          <div className="stagger-item bg-[#111111] border border-[#333336] p-xl">
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
              className="bg-[#111111] border border-[#333336] p-lg flex gap-lg items-start stagger-item card-lift"
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
          <div className="stagger-item">
            <h2 className="text-headline-lg mb-md">Our Team</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
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
              className="bg-[#111111] border border-[#333336] p-lg stagger-item card-lift"
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
