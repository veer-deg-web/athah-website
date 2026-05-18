import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Clients & Partners — Athah's Network",
  description: "Brands, institutions, and artists who trust Athah for their creative needs.",
};

const testimonials = [
  {
    quote: "Athah transformed our annual function. The choreography, lighting, and costumes were spectacular — and the entire process was completely stress-free for our school.",
    name: "Principal",
    role: "Arihant International School, Nahan",
    type: "School Partner",
    logo: "/schhol logo /arihant .png",
  },
  {
    quote: "Finding reliable activity teachers was always a challenge. Since partnering with Athah, our dance and music programs run seamlessly every single week without any management from our side.",
    name: "Head of Activities",
    role: "Tula's Institute, Dehradun",
    type: "School Partner",
    logo: "/schhol logo /tulas.png",
  },
  {
    quote: "Parents can now see their children's daily progress through the reels and activity photos Athah creates. School trust and admissions interest have both grown significantly.",
    name: "Director",
    role: "River Valley Global School",
    type: "School Partner",
    logo: "/schhol logo /rivervalley.png",
  },
  {
    quote: "The choreography for our annual day was exceptional — students were more confident, parents were amazed, and the event highlight reel went viral among our school community.",
    name: "Principal",
    role: "Delhi Public School",
    type: "School Partner",
    logo: "/schhol logo /dpsvikasnanagar.jpg",
  },
  {
    quote: "Athah handles our content, social media, and activity documentation. The school's digital presence has never been stronger. They truly are a one-stop creative partner.",
    name: "Head of Administration",
    role: "Swami Vivekanand Public School",
    type: "School Partner",
    logo: "/schhol logo /swami vivekanand.png",
  },
  {
    quote: "Professional, punctual, and genuinely creative. The stage design, sound, and lighting for our founder's day event was beyond what we expected at this budget.",
    name: "Event Coordinator",
    role: "RIT",
    type: "Institution Partner",
    logo: "/schhol logo /rit.png",
  },
];

const partners = [
  {
    name: "Arihant International School, Nahan",
    category: "School",
    logo: "/schhol logo /arihant .png",
  },
  {
    name: "Tula's Dehradun",
    category: "School",
    logo: "/schhol logo /tulas.png",
  },
  {
    name: "Delhi Public School",
    category: "School",
    logo: "/schhol logo /dpsvikasnanagar.jpg",
  },
  {
    name: "Swami Vivekanand Public School",
    category: "School",
    logo: "/schhol logo /swami vivekanand.png",
  },
  {
    name: "RIT",
    category: "Institution",
    logo: "/schhol logo /rit.png",
  },
  {
    name: "PM Shri Kendriya Vidyalaya Raiwala",
    category: "School",
    logo: "/schhol logo /KVS.png",
  },
];

const metrics = [
  { value: "100+", label: "Events Delivered" },
  { value: "50+", label: "Schools Served" },
  { value: "7+", label: "Art Forms Taught" },
  { value: "24hr", label: "Proposal Turnaround" },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(245,158,11,0.08) 0%, transparent 50%), #0A0A0A" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Clients & Partners
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Built on <br />
            <span className="text-primary-container">Trust</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Brands, schools, artists, and institutions who trust Athah with their most important moments.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <ScrollReveal>
        <section className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            {metrics.map((m) => (
              <div key={m.label} className="stagger-item">
                <div className="text-headline-lg text-primary-container mb-xs">{m.value}</div>
                <div className="text-label-sm uppercase tracking-widest text-on-surface-variant">{m.label}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Client Stories</h2>
            <p className="text-body-md text-on-surface-variant">
              Real experiences from the clients who trust us with their biggest moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col justify-between stagger-item card-lift"
              >
                <div>
                  <div className="mb-lg h-16 w-full flex items-center">
                    <img
                      src={t.logo}
                      alt={`${t.role} logo`}
                      className="max-h-14 w-auto max-w-[11rem] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                    {t.type}
                  </span>
                  <span className="text-primary-container text-[40px] font-serif leading-none block mb-sm">
                    &ldquo;
                  </span>
                  <blockquote className="text-body-md text-on-surface-variant italic mb-lg">
                    {t.quote}
                  </blockquote>
                </div>
                <figcaption className="border-t border-outline-variant/20 pt-md">
                  <p className="text-body-md font-bold text-on-surface">{t.name}</p>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Partner Grid */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Partner Institutions</h2>
            <p className="text-body-md text-on-surface-variant">Organizations that have partnered with Athah.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
            {partners.map((p) => (
              <div
                key={p.name}
                className="border border-outline-variant/20 flex flex-col items-center justify-center py-lg px-md gap-md stagger-item group hover:border-primary-container/50 transition-colors bg-[#111111]"
              >
                <div className="h-24 w-full flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-20 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 group-hover:text-on-surface-variant transition-colors text-center">
                  {p.name}
                </p>
                <span className="text-label-sm text-primary-container/60">{p.category}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Become an Athah Partner</h2>
            <p className="text-body-md text-on-surface-variant">
              Join our growing network of schools, brands, and institutions building something extraordinary.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
