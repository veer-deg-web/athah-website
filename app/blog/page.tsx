import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/seo";
import dbConnect from "@/lib/mongodb";
import Blog, { IBlog } from "@/lib/models/Blog";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Journal — Athah Insights on Events, Media & Growth",
  description:
    "Expert insights on event production, cinematography, social media growth, stage design, and the creative industry.",
  path: "/blog",
});

const defaultCategories = [
  "All", "Event Production", "Cinematography", "Creative Education",
  "Social Media Growth", "Stage & Lighting", "Artist Stories", "Industry Insights",
];

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function BlogPage() {
  await dbConnect();
  const dbPosts = await Blog.find({}).sort({ createdAt: -1 }).lean() as IBlog[];

  // Fallback to empty states if no posts found
  const posts = dbPosts.length > 0 ? dbPosts : [];
  
  // Extract dynamic categories from posts if needed, or use defaults
  const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];
  
  // Use default categories if we have very few dynamic ones
  const finalCategories = categories.length > 1 ? categories : defaultCategories;

  const featured = posts.length > 0 ? posts[0] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.07) 0%, transparent 50%), #0A0A0A" }}
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
      {featured && (
        <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
          <div>
            <p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-md stagger-item">
              Featured Article
            </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div
                className="md:col-span-7 relative min-h-[400px] bg-[#121010] border border-[#2A2218] overflow-hidden group stagger-item card-lift cursor-pointer"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 60%, rgba(245,158,11,0.12) 0%, transparent 55%), #121010",
                }}
              >
                {featured.imageUrl && (
                   <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: `url(${featured.imageUrl})` }} />
                )}
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
                  className="bg-[#121010] border border-[#2A2218] p-lg flex-1 stagger-item card-lift cursor-pointer"
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
      )}

      {/* Category Filter + Grid */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-wrap gap-sm mb-xl stagger-item">
            {finalCategories.map((c, i) => (
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
                className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift cursor-pointer"
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
