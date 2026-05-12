import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio — Athah Events, Media & Production Work",
  description: "Explore Athah's portfolio of events, weddings, concerts, commercial shoots, and media productions.",
};

const categories = ["All", "School Events", "Annual Functions", "Dance & Music", "Media & Content", "Weddings", "Live Band"];

const projects = [
  { cat: "Annual Function", title: "Arihant International School Annual Function, Nahan", tags: ["Choreography", "Lighting", "Sound", "Costumes"], size: "col-span-2", mediaType: "image", src: "/assets/IMG-20260508-WA0016.jpg" },
  { cat: "School Event", title: "Tula's Dehradun Annual Day", tags: ["Event Production", "Stage Design", "Videography"], size: "col-span-1", mediaType: "image", src: "/assets/IMG-20260508-WA0059.jpg" },
  { cat: "School Event", title: "Delhi Public School Cultural Program", tags: ["Dance Faculty", "Music", "Content Creation"], size: "col-span-1", mediaType: "video", src: "/assets/VID-20260509-WA0014.mp4", poster: "/assets/IMG-20260508-WA0049.jpg" },
  { cat: "School Event", title: "River Valley Global School Founder's Day", tags: ["Stage", "Sound System", "Photography"], size: "col-span-1", mediaType: "image", src: "/assets/IMG-20260508-WA0060.jpg" },
  { cat: "Media & Content", title: "School Social Media & Activity Documentation", tags: ["Reels", "Photography", "Social Media Handling"], size: "col-span-2", mediaType: "video", src: "/assets/VID-20260509-WA0018.mp4", poster: "/assets/IMG-20260508-WA0052.jpg" },
  { cat: "Dance & Music", title: "Kathak & Western Dance Recital", tags: ["Faculty", "Choreography", "Videography"], size: "col-span-1", mediaType: "image", src: "/assets/IMG-20260508-WA0058.jpg" },
  { cat: "Wedding", title: "Wedding Choreography & Production", tags: ["Choreography", "Costume", "Background Dancers"], size: "col-span-1", mediaType: "image", src: "/assets/IMG-20260508-WA0054.jpg" },
  { cat: "Live Band", title: "Live Band Music at School Event", tags: ["Live Band", "Sound Recording", "MC / Anchor"], size: "col-span-1", mediaType: "video", src: "/assets/VID-20260509-WA0015.mp4", poster: "/assets/IMG-20260508-WA0047.jpg" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,86,38,0.08) 0%, transparent 50%), #131313" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">Our Portfolio</span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Every Project. <br />
            <span className="text-primary-container">Every Moment.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            A curated selection of Athah&apos;s finest work across events, media, and creative productions.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          {/* Category filters */}
          <div className="flex flex-wrap gap-sm mb-xl stagger-item">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-md py-xs text-label-sm uppercase tracking-wide transition-all ${
                  i === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50 hover:text-on-surface"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`relative min-h-[280px] bg-[#111111] border border-[#333336] overflow-hidden group stagger-item card-lift cursor-pointer ${
                  p.size === "col-span-2" ? "md:col-span-2" : ""
                }`}
              >
                {p.mediaType === "video" ? (
                  <video
                    className="absolute inset-0 z-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={p.poster}
                  >
                    <source src={p.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={p.src}
                    alt={p.title}
                    className="absolute inset-0 z-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-lg z-10">
                  <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">
                    {p.cat}
                  </span>
                  <h4 className="text-headline-md mb-md">{p.title}</h4>
                  <div className="flex gap-sm flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="px-md py-xs bg-surface-container-high/80 text-label-sm border border-outline-variant/30 text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl stagger-item">
            <button className="border border-outline-variant px-lg py-md text-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-all">
              Load More Projects
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Want Your Project Here?</h2>
            <p className="text-body-md text-on-surface-variant">Let&apos;s create something worth showcasing.</p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Start a Project
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
