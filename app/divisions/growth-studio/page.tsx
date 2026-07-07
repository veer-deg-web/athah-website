import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Social Media & Branding Agency in Dehradun — Athah Growth Studio",
  description:
    "Athah Growth Studio is Dehradun's strategic brand growth agency. We offer social media management, content creation, branding, and campaign strategy for schools, artists, and businesses in Uttarakhand.",
  path: "/divisions/growth-studio",
  keywords: [
    "social media agency Dehradun",
    "branding company Dehradun",
    "content creation Dehradun",
    "digital marketing Dehradun",
    "social media management Uttarakhand",
    "reels production Dehradun",
    "brand strategy Dehradun",
  ],
});

const audiences = [
  {
    icon: "school",
    title: "For Schools",
    desc: "Build a digital presence that attracts students, engages parents, and showcases your institution's excellence.",
    services: ["Social Media Management", "Event Content", "Admission Campaign", "Brand Guidelines"],
  },
  {
    icon: "star",
    title: "For Artists",
    desc: "Grow your fanbase, book more gigs, and build a brand that reflects your artistry.",
    services: ["Instagram & YouTube Growth", "Music Release Strategy", "EPK & Press Kit", "Reels Production"],
  },
  {
    icon: "business",
    title: "For Brands",
    desc: "Strategic content and campaigns that turn followers into customers and customers into loyalists.",
    services: ["Brand Identity", "Content Calendar", "Campaign Management", "Performance Tracking"],
  },
];

const services = [
  { icon: "video_library", title: "Content Creation", desc: "Scroll-stopping content for every platform." },
  { icon: "phone_iphone", title: "Social Media Handling", desc: "Full-service account management — strategy, posting, engagement." },
  { icon: "brush", title: "Branding", desc: "Logos, color systems, typography, and brand guidelines." },
  { icon: "campaign", title: "Campaign Management", desc: "Paid and organic campaigns that convert." },
  { icon: "reel", title: "Reels Production", desc: "High-quality short-form video optimized for reach." },
  { icon: "analytics", title: "Strategy Planning", desc: "Data-driven growth roadmaps tailored to your goals." },
];

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    unit: "/ month",
    features: ["12 Posts / Month", "1 Platform", "Monthly Report", "Basic Strategy"],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    unit: "/ month",
    features: ["30 Posts / Month", "3 Platforms", "Weekly Reports", "Reels Production (4/month)", "Ad Management Up to ₹20K"],
    featured: true,
  },
  {
    name: "Scale",
    price: "₹65,000",
    unit: "/ month",
    features: ["Unlimited Content", "All Platforms", "Dedicated Strategist", "Full Campaign Management", "Monthly Brand Audit"],
    featured: false,
  },
];

export default function GrowthStudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/IMG-20260508-WA0052.jpg"
          >
            <source src="/assets/VID-20260509-WA0015.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(245,158,11,0.16) 0%, transparent 50%), rgba(10,10,10,0.66)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/divisions" className="text-label-sm text-on-surface-variant/50 uppercase tracking-wide mb-lg flex items-center gap-xs group">
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            All Divisions
          </Link>
          <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            Athah Growth Studio
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Strategic <br />
            <span className="text-primary-container">Brand Growth</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            We amplify brands, artists, and institutions through intelligent content strategy, high-production creative, and data-driven campaigns.
          </p>
          <Link
            href="/contact"
            className="bg-[#D97706] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all inline-block"
          >
            START PARTNERSHIP
          </Link>
        </div>
      </section>

      {/* Target Audiences */}
      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Who We Grow</h2>
            <p className="text-body-md text-on-surface-variant">
              Customized growth strategies for three distinct audiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {audiences.map((a) => (
              <div key={a.title} className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift">
                <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                  {a.icon}
                </span>
                <h3 className="text-headline-md mb-sm">{a.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-lg">{a.desc}</p>
                <ul className="flex flex-col gap-sm">
                  {a.services.map((s) => (
                    <li key={s} className="flex items-center gap-sm text-label-sm text-on-surface-variant/70">
                      <span className="material-symbols-outlined text-primary-container text-[16px]">check</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item max-w-2xl">
            <h2 className="text-headline-lg mb-md">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {services.map((s) => (
              <div key={s.title} className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift">
                <span className="material-symbols-outlined text-primary-container text-[40px] mb-md block">{s.icon}</span>
                <h3 className="text-headline-md mb-sm">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Flexible Plans */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item max-w-2xl">
            <h2 className="text-headline-lg mb-md">Flexible Plans</h2>
            <p className="text-body-md text-on-surface-variant">
              Monthly retainer plans designed to scale with your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-center">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`border p-lg flex flex-col ${p.featured
                  ? "border-2 border-primary-container bg-surface-container-high relative scale-105"
                  : "border-outline-variant/20 bg-background"
                  }`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-md py-xs text-label-sm font-bold uppercase">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-lg">
                  <h3 className="text-headline-md mb-xs">{p.name}</h3>
                  <div className="flex items-baseline gap-xs">
                    <span className="text-[32px] font-bold">{p.price}</span>
                    <span className="text-on-surface-variant">{p.unit}</span>
                  </div>
                </div>
                <ul className="space-y-md mb-xl flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-sm text-body-md">
                      <span className={`material-symbols-outlined text-[20px] ${p.featured ? "text-primary-container" : "text-primary"}`}>
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`py-md text-label-sm uppercase tracking-wide font-bold text-center transition-all hover:scale-95 ${p.featured ? "bg-[#D97706] text-white" : "border border-outline-variant/30 hover:bg-surface-container-high"
                    }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Growth Model */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Ready to Grow?</h2>
            <p className="text-body-md text-on-surface-variant">
              Start with a free 30-minute growth audit and leave with a clear roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Book Free Audit
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
