import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
      {children}
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center px-margin overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/IMG-20260508-WA0059.jpg"
        >
          <source src="/assets/VID-20260509-WA0013.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 65% 25%, rgba(245,158,11,0.14) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.1) 0%, transparent 45%), linear-gradient(135deg, rgba(6,6,6,0.8) 0%, rgba(10,10,10,0.72) 50%, rgba(26,8,0,0.86) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e2e2 1px,transparent 1px),linear-gradient(90deg,#e2e2e2 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-xl pb-xl">
        <div className="max-w-5xl">
          <Tag>Creative Partner for Schools &amp; Institutions</Tag>
          <h1 className="text-display uppercase mb-lg leading-none">
            Where Art <br />
            <span className="text-primary-container">Breathes</span> <br />
            Eternity
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            Dance. Music. Theatre. Fine Arts. Events. Media. One partner for
            every creative need — delivering cultural programs, arts faculty,
            and content creation for schools and institutions across India.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link
              href="/contact"
              className="bg-[#D97706] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all duration-150 btn-primary-hover inline-block"
            >
              PLAN YOUR EVENT
            </Link>
            <Link
              href="/portfolio"
              className="border border-outline-variant px-lg py-md text-headline-md hover:bg-surface-container-high transition-all inline-block"
            >
              VIEW SHOWREEL
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-xs animate-bounce">
        <span className="material-symbols-outlined text-on-surface-variant/40 text-[20px]">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "100+", label: "Events Delivered" },
    { value: "50+", label: "Schools Served" },
    { value: "4", label: "Creative Divisions" },
    { value: "7+", label: "Art Forms Taught" },
  ];

  return (
    <ScrollReveal>
      <section className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
          {stats.map((s) => (
            <div key={s.label} className="stagger-item">
              <div className="text-headline-lg text-primary-container mb-xs">
                {s.value}
              </div>
              <div className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function AboutStrip() {
  const items = [
    { icon: "event", label: "Events", value: "Weddings to Concerts" },
    { icon: "videocam", label: "Media", value: "Cinema-grade Production" },
    { icon: "trending_up", label: "Growth", value: "Brand Amplification" },
    { icon: "school", label: "Academy", value: "Arts & Faculty Training" },
  ];

  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="stagger-item">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            The Athah Story
          </span>
          <h2 className="text-headline-lg mb-lg">
            The Force Behind Every Moment
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-md">
            Born from a passion for art and a belief that every school deserves a
            reliable creative partner, Athah Art Entertainment is based in
            Dehradun and serves schools, institutions, and cultural ecosystems
            across India.
          </p>
          <p className="text-body-md text-on-surface-variant mb-lg">
            Founded by Mohit Kashyap, Athah handles everything from weekly dance
            and music classes to large-scale annual functions — with professional
            faculty, zero management stress, and structured backup always in
            place.
          </p>
          <Link
            href="/about"
            className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
          >
            Read Our Story
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="stagger-item grid grid-cols-2 gap-md">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col gap-sm card-lift"
            >
              <span className="material-symbols-outlined text-primary-container text-[32px]">
                {item.icon}
              </span>
              <p className="text-label-sm uppercase tracking-wide text-on-surface">
                {item.label}
              </p>
              <p className="text-body-md text-on-surface-variant">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function DivisionsOverview() {
  const divisions = [
    {
      id: "events",
      href: "/divisions/events",
      tag: "Athah Events",
      title: "Events That Move People",
      desc: "Weddings, concerts, school ceremonies, and cultural productions executed with flawless precision.",
      tags: ["Weddings", "Corporate", "Concerts", "School"],
      icon: "celebration",
      span: "md:col-span-8",
      contentClass: "max-w-2xl",
      titleClass: "text-headline-lg md:text-[56px] md:leading-[1.05]",
      media: { type: "image", src: "/assets/IMG-20260508-WA0060.jpg" },
    },
    {
      id: "media",
      href: "/divisions/media",
      tag: "Athah Media",
      title: "Cinematography & Production",
      desc: "Cinema-grade visuals for ads, music videos, aftermovies, and drone shoots.",
      tags: ["Film", "Photo", "Drone"],
      icon: "movie",
      span: "md:col-span-4",
      contentClass: "max-w-[17rem]",
      titleClass: "text-headline-md md:text-[44px] md:leading-[1.05]",
      media: {
        type: "video",
        src: "/assets/VID-20260509-WA0014.mp4",
        poster: "/assets/IMG-20260508-WA0049.jpg",
      },
    },
    {
      id: "growth-studio",
      href: "/divisions/growth-studio",
      tag: "Athah Growth Studio",
      title: "Strategic Brand Growth",
      desc: "Content, social media, branding, and campaigns for schools, artists, and brands.",
      tags: ["Social", "Content", "Strategy"],
      icon: "trending_up",
      span: "md:col-span-4",
      contentClass: "max-w-[17rem]",
      titleClass: "text-headline-md md:text-[44px] md:leading-[1.05]",
      media: { type: "image", src: "/assets/IMG-20260508-WA0052.jpg" },
    },
    {
      id: "arts-academy",
      href: "/divisions/arts-academy",
      tag: "Athah Arts Academy",
      title: "Nurturing Creative Talent",
      desc: "Dance, music, theatre, and fine arts faculty for schools with flexible scheduling.",
      tags: ["Dance", "Music", "Theatre"],
      icon: "music_note",
      span: "md:col-span-8",
      contentClass: "max-w-2xl",
      titleClass: "text-headline-lg md:text-[56px] md:leading-[1.05]",
      media: { type: "image", src: "/assets/IMG-20260508-WA0016.jpg" },
    },
  ];

  return (
    <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-md">
          <div className="stagger-item flex-1 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Our Four Divisions</h2>
            <p className="text-body-md text-on-surface-variant">
              Four distinct disciplines. One unified vision. Together, they
              cover every dimension of the creative economy.
            </p>
          </div>
          <Link
            href="/divisions"
            className="text-primary text-label-sm uppercase tracking-wide flex items-center gap-xs group stagger-item"
          >
            Explore All{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {divisions.map((div) => (
            <Link
              key={div.id}
              href={div.href}
              className={`${div.span} bg-[#121010] border border-[#2A2218] p-lg md:p-xl flex flex-col justify-between min-h-[360px] group overflow-hidden relative stagger-item card-lift`}
            >
              <div className="absolute inset-0">
                {div.media.type === "video" ? (
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={div.media.poster}
                  >
                    <source src={div.media.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={div.media.src}
                    alt={div.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/45 to-background/90" />
              </div>
              <div className={`relative z-10 ${div.contentClass}`}>
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                  {div.tag}
                </span>
                <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                  {div.icon}
                </span>
                <h3 className={`${div.titleClass} mb-sm text-balance`}>
                  {div.title}
                </h3>
                <p className="text-body-md md:text-[18px] md:leading-[1.5] text-on-surface-variant">
                  {div.desc}
                </p>
              </div>
              <div className="relative z-10 flex gap-sm flex-wrap mt-lg">
                {div.tags.map((t) => (
                  <span
                    key={t}
                    className="px-md py-xs bg-surface-container-high text-label-sm border border-outline-variant/30"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-auto flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group-hover:gap-sm transition-all">
                  Explore
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      cat: "School Event",
      title: "Arihant International School Annual Function",
      tags: ["Choreography", "Lighting", "Stage Design"],
      media: "/assets/IMG-20260508-WA0016.jpg",
    },
    {
      cat: "School Event",
      title: "Tula's Institute Annual Day, Dehradun",
      tags: ["Event Production", "Videography", "Faculty"],
      media: "/assets/IMG-20260508-WA0059.jpg",
    },
    {
      cat: "School Event",
      title: "Delhi Public School Cultural Program",
      tags: ["Dance Faculty", "Music", "Content Creation"],
      media: "/assets/IMG-20260508-WA0049.jpg",
    },
    {
      cat: "School Event",
      title: "River Valley Global School Founder's Day",
      tags: ["Stage", "Sound", "Photography"],
      media: "/assets/IMG-20260508-WA0060.jpg",
    },
  ];

  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end mb-xl gap-md">
          <div className="stagger-item">
            <h2 className="text-headline-lg mb-md">Featured Projects</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              A curated selection of our most ambitious work.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-primary text-label-sm uppercase tracking-wide flex items-center gap-xs group stagger-item whitespace-nowrap"
          >
            Full Portfolio{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative min-h-[300px] bg-[#121010] border border-[#2A2218] overflow-hidden group stagger-item card-lift cursor-pointer"
            >
              <img
                src={p.media}
                alt={p.title}
                className="absolute inset-0 z-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-lg z-10">
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">
                  {p.cat}
                </span>
                <h4 className="text-headline-md mb-md">{p.title}</h4>
                <div className="flex gap-sm flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-md py-xs bg-surface-container-high/80 text-label-sm border border-outline-variant/30 text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function ShowreelSection() {
  const features = [
    {
      icon: "movie",
      title: "4K Multi-Cam Shoots",
      desc: "Full broadcast-quality productions for every scale",
    },
    {
      icon: "flight_takeoff",
      title: "Aerial Drone Coverage",
      desc: "Breathtaking perspectives from the sky",
    },
    {
      icon: "edit_square",
      title: "Same-Day Edits",
      desc: "Reels delivered while your event is still trending",
    },
  ];

  return (
    <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="relative aspect-video overflow-hidden border border-outline-variant/20 group stagger-item card-lift cursor-pointer">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/IMG-20260508-WA0049.jpg"
            >
              <source src="/assets/VID-20260509-WA0018.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-background/40" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
              <span className="material-symbols-outlined text-white text-[80px] transition-transform group-hover:scale-110">
                play_circle
              </span>
            </div>
            <div className="absolute bottom-md left-md">
              <p className="text-label-sm text-on-surface-variant/70 uppercase tracking-wide">
                Athah Showreel 2024
              </p>
            </div>
          </div>

          <div className="stagger-item">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              Watch Our Work
            </span>
            <h2 className="text-headline-lg mb-lg">The Art of Storytelling</h2>
            <p className="text-body-lg text-on-surface-variant mb-xl">
              We don&apos;t just capture events — we craft visual legacies.
              Cinema-grade optics, expert editing, and an eye for the
              extraordinary moment.
            </p>
            <ul className="space-y-md">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-md stagger-item">
                  <span className="material-symbols-outlined text-primary-container bg-surface-container p-sm rounded-lg">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-body-lg font-bold mb-xs">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function WhyAthahSection() {
  const reasons = [
    {
      icon: "verified",
      title: "One Partner, Every Need",
      desc: "Dance, music, theatre, fine art, events, media — one trusted partner manages it all.",
    },
    {
      icon: "swap_horiz",
      title: "Backup & Replacement Guarantee",
      desc: "Not satisfied with an artist? We replace immediately. No management stress for schools.",
    },
    {
      icon: "school",
      title: "School & Institution Specialists",
      desc: "Specialists in educational events, arts faculty staffing, and cultural program production.",
    },
    {
      icon: "visibility",
      title: "Making Student Work Visible",
      desc: "Children practice every day but parents never see the effort. Athah captures and shares it.",
    },
    {
      icon: "photo_camera",
      title: "School-Safe Content Creation",
      desc: "Parent-friendly reels, activity photos, and highlights — school-approved and professionally crafted.",
    },
    {
      icon: "currency_rupee",
      title: "Affordable & Transparent Pricing",
      desc: "Monthly activity teachers from ₹15,000. Cultural events from ₹1.5L. No hidden costs.",
    },
  ];

  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div>
        <div className="mb-xl stagger-item max-w-2xl">
          <h2 className="text-headline-lg mb-md">Why Athah?</h2>
          <p className="text-body-lg text-on-surface-variant">
            We built a company that solves every creative challenge under one
            roof — without compromising on quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift group"
            >
              <span className="material-symbols-outlined text-primary-container text-[40px] mb-md block">
                {r.icon}
              </span>
              <h3 className="text-headline-md mb-sm">{r.title}</h3>
              <p className="text-body-md text-on-surface-variant">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Athah transformed our annual function. The choreography, lighting, and costumes were spectacular — and the entire process was stress-free for our team.",
      name: "Principal",
      role: "Arihant International School, Nahan",
    },
    {
      quote:
        "Finding reliable activity teachers was always a challenge. Since partnering with Athah, our dance and music programs run seamlessly every single week.",
      name: "Head of Activities",
      role: "Tula's Institute, Dehradun",
    },
    {
      quote:
        "Parents can now see their children's daily progress through the reels and photos Athah creates. School trust and admissions interest have both improved.",
      name: "Director",
      role: "River Valley Global School",
    },
  ];

  return (
    <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="mb-xl stagger-item max-w-2xl">
          <h2 className="text-headline-lg mb-md">What Clients Say</h2>
          <p className="text-body-md text-on-surface-variant">
            Stories from those who trusted us with their most important moments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col justify-between stagger-item card-lift"
            >
              <div>
                <span className="text-primary-container text-[48px] font-serif leading-none block mb-md">
                  &ldquo;
                </span>
                <blockquote className="text-body-lg text-on-surface-variant italic mb-lg">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="border-t border-outline-variant/20 pt-md">
                <p className="text-body-md font-bold text-on-surface">{t.name}</p>
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function PartnersSection() {
  const partners = [
    "Arihant International School",
    "Tula's Dehradun",
    "Delhi Public School",
    "River Valley Global School",
    "Swami Vivekanand Public School",
    "RIT",
    "Lal Manjan Studio",
    "athah_events",
  ];

  return (
    <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
      <div>
        <div className="mb-xl stagger-item max-w-2xl">
          <h2 className="text-headline-lg mb-md">Trusted By</h2>
          <p className="text-body-md text-on-surface-variant">
            Brands, institutions, and artists who partner with Athah.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {partners.map((p) => (
            <div
              key={p}
              className="border border-outline-variant/20 flex items-center justify-center py-lg px-md stagger-item group hover:border-primary-container/50 transition-colors"
            >
              <p className="text-label-sm uppercase tracking-widest text-on-surface-variant/50 group-hover:text-on-surface-variant transition-colors text-center">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function CTASection() {
  return (
    <ScrollReveal className="py-xl px-margin">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg relative overflow-hidden stagger-item">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
            style={{ background: "rgba(245,158,11,0.08)" }}
          />
          <div className="relative z-10 flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Let&apos;s bring your vision to life. Talk to our team and get a
              bespoke proposal within 24 hours.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-md self-start md:self-end md:justify-end">
            <Link
              href="/contact"
              className="bg-[#D97706] text-white px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all btn-primary-hover text-center"
            >
              Book Consultation
            </Link>
            <a
              href="https://wa.me/918433167030"
              className="border border-outline-variant text-on-surface px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:bg-surface-container-high transition-all text-center flex items-center justify-center gap-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutStrip />
      <DivisionsOverview />
      <FeaturedProjects />
      <ShowreelSection />
      <WhyAthahSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
