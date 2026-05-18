import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers at Athah — Join India's Creative Force",
  description:
    "Explore career opportunities at Athah in event production, media, growth studio, arts faculty, and more.",
};

const openings = [
  {
    team: "Athah Events",
    icon: "celebration",
    roles: [
      { title: "Senior Event Coordinator", type: "Full-Time", location: "Mumbai" },
      { title: "AV Technician", type: "Full-Time", location: "Mumbai" },
      { title: "Stage Production Manager", type: "Contract", location: "Pan-India" },
    ],
  },
  {
    team: "Athah Media",
    icon: "movie",
    roles: [
      { title: "Cinematographer", type: "Full-Time", location: "Mumbai" },
      { title: "Video Editor", type: "Full-Time", location: "Remote" },
      { title: "Drone Pilot (Licensed)", type: "Freelance", location: "Pan-India" },
    ],
  },
  {
    team: "Athah Growth Studio",
    icon: "trending_up",
    roles: [
      { title: "Social Media Strategist", type: "Full-Time", location: "Remote" },
      { title: "Content Creator (Video)", type: "Full-Time", location: "Mumbai" },
      { title: "Brand Designer", type: "Full-Time", location: "Remote" },
    ],
  },
  {
    team: "Athah Arts Academy",
    icon: "music_note",
    roles: [
      { title: "Dance Instructor (Bharatnatyam)", type: "Part-Time", location: "Mumbai / Pune" },
      { title: "Music Faculty (Guitar)", type: "Part-Time", location: "Mumbai" },
      { title: "Theatre Coach", type: "Part-Time", location: "Mumbai" },
    ],
  },
];

const perks = [
  { icon: "rocket_launch", title: "Growth First", desc: "Every team member has a clear growth path. We invest in your skills, not just your role." },
  { icon: "palette", title: "Creative Freedom", desc: "We hire specialists and trust them. Your ideas are welcomed and acted upon." },
  { icon: "groups", title: "Collaborative Culture", desc: "Cross-division collaboration means your work has wider impact than most agencies can offer." },
  { icon: "work", title: "Exciting Projects", desc: "From weddings to concerts to brand campaigns — no two days are the same." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.1) 0%, transparent 55%), #0A0A0A" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Careers
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Build the <br />
            <span className="text-primary-container">Creative Industry</span> <br />
            With Us
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            At Athah, you don&apos;t just work on projects. You shape how India experiences creativity. We&apos;re looking for extraordinary people — specialists, thinkers, and makers.
          </p>
        </div>
      </section>

      {/* Perks */}
      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Why Work at Athah?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {perks.map((p) => (
              <div key={p.title} className="bg-[#121010] border border-[#2A2218] p-lg flex gap-lg stagger-item card-lift">
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

      {/* Open Roles */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Open Positions</h2>
            <p className="text-body-md text-on-surface-variant">
              Find your place in the Athah ecosystem.
            </p>
          </div>

          <div className="flex flex-col gap-xl">
            {openings.map((team) => (
              <div key={team.team} className="stagger-item">
                <div className="flex items-center gap-md mb-lg border-b border-outline-variant/20 pb-md">
                  <span className="material-symbols-outlined text-primary-container text-[32px]">
                    {team.icon}
                  </span>
                  <h3 className="text-headline-md">{team.team}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                  {team.roles.map((role) => (
                    <div
                      key={role.title}
                      className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col justify-between card-lift group"
                    >
                      <div>
                        <h4 className="text-headline-md mb-md">{role.title}</h4>
                        <div className="flex flex-wrap gap-sm mb-md">
                          <span className="px-sm py-xs bg-primary-container/10 border border-primary-container/30 text-label-sm text-primary-container">
                            {role.type}
                          </span>
                          <span className="px-sm py-xs bg-surface-container-high text-label-sm text-on-surface-variant">
                            {role.location}
                          </span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group-hover:gap-sm transition-all mt-md"
                      >
                        Apply Now
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Internships & Freelance */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="bg-[#121010] border border-[#2A2218] p-xl stagger-item card-lift">
              <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                explore
              </span>
              <h3 className="text-headline-md mb-md">Internship Programs</h3>
              <p className="text-body-md text-on-surface-variant mb-lg">
                3 and 6-month internships across all four Athah divisions. Real work, real mentorship, and a launchpad into the creative industry.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
              >
                Apply for Internship{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="bg-[#121010] border border-[#2A2218] p-xl stagger-item card-lift">
              <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                star
              </span>
              <h3 className="text-headline-md mb-md">Artist Applications</h3>
              <p className="text-body-md text-on-surface-variant mb-lg">
                Performers, musicians, dancers — join Athah&apos;s artist roster for artist nights, cultural events, and collaborative productions.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
              >
                Submit Your Profile{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Spontaneous Application */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Don&apos;t See the Right Role?</h2>
            <p className="text-body-md text-on-surface-variant">
              We always want to hear from extraordinary people. Send us your portfolio and tell us how you&apos;d add value to Athah.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Send Your Portfolio
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
