import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog & Journal — Athah Insights on Events, Media & Growth",
  description:
    "Expert insights on event production, cinematography, social media growth, stage design, and the creative industry.",
};

const categories = [
  "All", "Event Production", "Cinematography", "Creative Education",
  "Social Media Growth", "Stage & Lighting", "Artist Stories", "Industry Insights",
];

const posts = [
  {
    category: "Event Production",
    title: "The 10 Non-Negotiables of a High-End Corporate Event",
    excerpt: "When a Fortune-500 company books an event, the margin for error is zero. Here are the ten pillars every corporate event must have.",
    readTime: "6 min read",
    date: "Apr 28, 2025",
  },
  {
    category: "Cinematography",
    title: "Why Your Event Aftermovie Matters More Than You Think",
    excerpt: "An aftermovie isn't just documentation — it's a marketing asset, a memory, and a brand story. Here's how to get it right.",
    readTime: "5 min read",
    date: "Apr 20, 2025",
  },
  {
    category: "Social Media Growth",
    title: "How We Doubled a School's Instagram Following in 60 Days",
    excerpt: "A case study on the content strategy, posting cadence, and story-driven approach that made it happen.",
    readTime: "7 min read",
    date: "Apr 12, 2025",
  },
  {
    category: "Stage & Lighting",
    title: "Lighting Design 101: How Light Shapes the Mood of an Event",
    excerpt: "From warm wash to sharp follow spots — understanding how professional lighting transforms a space and an experience.",
    readTime: "8 min read",
    date: "Apr 5, 2025",
  },
  {
    category: "Artist Stories",
    title: "From School Concerts to Headline Artist — Riya Sharma's Journey",
    excerpt: "An intimate interview with pop artist Riya Sharma on discovering her voice, building her brand, and performing for 5,000 people.",
    readTime: "10 min read",
    date: "Mar 28, 2025",
  },
  {
    category: "Creative Education",
    title: "Why Every School Needs a Professional Arts Faculty Partner",
    excerpt: "The difference between an in-house arts teacher and a trained specialist from an arts academy — and why it matters for students.",
    readTime: "5 min read",
    date: "Mar 20, 2025",
  },
  {
    category: "Industry Insights",
    title: "The State of Live Events in India: 2025 Trends Report",
    excerpt: "From hybrid event formats to immersive installations — the five trends shaping India's live event industry this year.",
    readTime: "9 min read",
    date: "Mar 10, 2025",
  },
  {
    category: "Cinematography",
    title: "Drone Cinematography: When to Use It & When Not To",
    excerpt: "Drone shots are powerful — but overused, they're ordinary. A practical guide to aerial cinematography decisions.",
    readTime: "6 min read",
    date: "Mar 2, 2025",
  },
];

const featured = posts[0];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(255,86,38,0.07) 0%, transparent 50%), #131313" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Blog & Journal
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Insights from <br />
            <span className="text-primary-container">The Field</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Expert perspectives on event production, media craft, social media growth, and the creative industry.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-md stagger-item">
            Featured Article
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div
              className="md:col-span-7 relative min-h-[400px] bg-[#111111] border border-[#333336] overflow-hidden group stagger-item card-lift cursor-pointer"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 60%, rgba(255,86,38,0.12) 0%, transparent 55%), #111111",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-lg z-10">
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">
                  {featured.category}
                </span>
                <h2 className="text-headline-md mb-md">{featured.title}</h2>
                <p className="text-body-md text-on-surface-variant mb-md line-clamp-2">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-md text-label-sm text-on-surface-variant">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-gutter">
              {posts.slice(1, 3).map((post, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-[#333336] p-lg flex-1 stagger-item card-lift cursor-pointer"
                >
                  <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
                    {post.category}
                  </span>
                  <h3 className="text-headline-md mb-sm">{post.title}</h3>
                  <p className="text-body-md text-on-surface-variant line-clamp-2 mb-md">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-md text-label-sm text-on-surface-variant/70">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Filter + Grid */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-wrap gap-sm mb-xl stagger-item">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-md py-xs text-label-sm uppercase tracking-wide transition-all ${
                  i === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {posts.slice(3).map((post, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-[#333336] p-lg stagger-item card-lift cursor-pointer"
              >
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
                  {post.category}
                </span>
                <h3 className="text-headline-md mb-sm">{post.title}</h3>
                <p className="text-body-md text-on-surface-variant line-clamp-3 mb-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-md text-label-sm text-on-surface-variant/70">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
