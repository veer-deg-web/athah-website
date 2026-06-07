import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/seo";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "School Annual Day Management in Dehradun — Athah Events | Annual Function Organizer",
  description:
    "Athah is Dehradun's specialist school annual day and cultural event company. We manage choreography, stage design, lighting, sound, AV, photography, and videography for schools across Uttarakhand.",
  path: "/solutions/school-annual-day",
  keywords: [
    "school annual day company Dehradun",
    "annual function organizer Dehradun",
    "school cultural program Dehradun",
    "annual day management Dehradun",
    "school event management Dehradun",
    "school function organizer Uttarakhand",
    "annual day choreography Dehradun",
    "school stage decoration Dehradun",
    "school annual function Dehradun",
    "best school event company Dehradun",
  ],
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteMetadata.url },
    { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteMetadata.url}/solutions` },
    { "@type": "ListItem", position: 3, name: "School Annual Day", item: `${siteMetadata.url}/solutions/school-annual-day` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "School Annual Day Event Management in Dehradun",
  provider: {
    "@type": "LocalBusiness",
    name: "Athah Arts & Entertainment",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Dehradun" },
    { "@type": "State", name: "Uttarakhand" },
  ],
  description:
    "Complete school annual day and cultural event management for schools in Dehradun — choreography, stage, lighting, sound, photography, videography, and faculty coordination.",
  offers: {
    "@type": "Offer",
    description: "School annual day packages starting from ₹1.5 lakh",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best school annual day organizer in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Athah Arts & Entertainment is Dehradun's leading school annual day and cultural event company, having managed annual functions for Arihant International School, Tula's Institute, Delhi Public School, and River Valley Global School, among others.",
      },
    },
    {
      "@type": "Question",
      name: "What does Athah include in a school annual day package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our school annual day packages include choreography and dance production, stage design and fabrication, professional lighting, PA sound systems, AV and LED screens, photography, videography, and post-event media delivery including highlight reels and parent-friendly photos.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a school annual day event cost in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "School annual day packages at Athah start from ₹1.5 lakh for mid-scale programs and go up based on student count, stage complexity, lighting requirements, and media coverage. We offer transparent fixed-price proposals — no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How early should a school book Athah for their annual day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking 2–4 months in advance. This allows adequate time for choreography rehearsals, costume coordination, and stage planning. For November–February peak season, earlier is better.",
      },
    },
    {
      "@type": "Question",
      name: "Does Athah also provide dance and music teachers for school practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Through Athah Arts Academy, we place trained dance and music faculty in schools for regular practice sessions leading up to the annual day — ensuring students are fully rehearsed and stage-ready.",
      },
    },
  ],
};

const services = [
  { icon: "self_improvement", title: "Choreography & Dance Production", desc: "Trained choreographers who work with your students from first rehearsal to final performance — across classical, folk, western, and fusion styles." },
  { icon: "view_quilt", title: "Stage Design & Fabrication", desc: "Custom stage sets built to match your annual day theme — backdrops, props, set pieces, and décor tailored to your school's vision." },
  { icon: "light_mode", title: "Professional Lighting", desc: "Wash, spot, moving head, and effects lighting designed for auditorium and outdoor stages — making every performance look cinematic." },
  { icon: "volume_up", title: "Sound System & AV", desc: "Premium PA systems, wireless mics, LED screens, projectors, and live sound engineering for crystal-clear audio across any venue size." },
  { icon: "photo_camera", title: "Photography", desc: "Professional event photography capturing every performance, candid moment, and award ceremony — delivered with quick turnaround." },
  { icon: "videocam", title: "Videography & Aftermovie", desc: "Multi-camera event documentation including a cinematic highlights reel and individual performance clips for sharing with parents." },
  { icon: "palette", title: "Costume & Theme Coordination", desc: "We help source costumes, manage dress coordination, and align everything to your annual day theme for a cohesive look." },
  { icon: "groups", title: "On-Day Event Management", desc: "A dedicated on-ground team manages the entire run-of-show — backstage coordination, cue calls, and zero-delay execution." },
];

const process = [
  { step: "01", title: "Initial Consultation", desc: "We understand your school's vision, student count, venue, timeline, and budget in a free 30-min call." },
  { step: "02", title: "Concept & Proposal", desc: "We present a detailed theme concept, production plan, and fixed-price proposal within 48 hours." },
  { step: "03", title: "Rehearsal Phase", desc: "Our choreographers work with students through structured weekly rehearsals leading up to the event." },
  { step: "04", title: "Technical Setup", desc: "Full venue setup — stage, lighting, sound, and AV — completed the day before to allow a smooth dress rehearsal." },
  { step: "05", title: "Event Day Execution", desc: "Our on-ground team manages every cue, every act, and every technical requirement so your staff can enjoy the show." },
  { step: "06", title: "Media Delivery", desc: "Professional photos and edited highlight video delivered within the agreed timeline — ready to share with parents." },
];

const schools = [
  { name: "Arihant International School", location: "Nahan Road, Dehradun", logo: "/logos/schools/arihant.png" },
  { name: "Tula's Institute", location: "Dhoolkot, Dehradun", logo: "/logos/schools/tulas.png" },
  { name: "Delhi Public School", location: "Vikasnagar, Dehradun", logo: "/logos/schools/dps-vikasnagar.png" },
  { name: "River Valley Global School", location: "Dehradun", logo: "/logos/schools/rivervalley.png" },
  { name: "Swami Vivekanand Public School", location: "Dehradun", logo: "/logos/schools/swami-vivekanand.png" },
  { name: "PM Shri Kendriya Vidyalaya Raiwala", location: "Raiwala, Dehradun", logo: "/logos/schools/kvs.png" },
];

export default function SchoolAnnualDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/IMG-20260508-WA0016.jpg"
            alt="School annual day performance managed by Athah in Dehradun"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(245,158,11,0.16) 0%, transparent 55%), rgba(10,10,10,0.72)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-xs mb-lg text-label-sm text-on-surface-variant/50 uppercase tracking-wide">
            <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/solutions" className="hover:text-on-surface transition-colors">Solutions</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface-variant">School Annual Day</span>
          </div>
          <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            School Annual Day Specialists — Dehradun
          </span>
          <h1 className="text-display uppercase mb-lg max-w-4xl leading-none">
            School Annual Day <br />
            <span className="text-primary-container">Management in</span> <br />
            Dehradun
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            Dehradun's most trusted school annual day and cultural event company. From choreography and stage design to photography and aftermovies — we handle everything so your staff can enjoy the show.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link
              href="/contact"
              className="bg-[#D97706] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all inline-block"
            >
              GET A FREE QUOTE
            </Link>
            <a
              href="https://wa.me/918433167030"
              className="border border-outline-variant px-lg py-md text-headline-md hover:bg-surface-container-high transition-all inline-flex items-center gap-sm"
            >
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <ScrollReveal>
        <section className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            {[
              { value: "50+", label: "Schools Served" },
              { value: "100+", label: "Annual Days Managed" },
              { value: "6+", label: "Years in Dehradun" },
              { value: "24hr", label: "Proposal Turnaround" },
            ].map((s) => (
              <div key={s.label} className="stagger-item">
                <div className="text-headline-lg text-primary-container mb-xs">{s.value}</div>
                <div className="text-label-sm uppercase tracking-widest text-on-surface-variant">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item max-w-2xl">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              What We Cover
            </span>
            <h2 className="text-headline-lg mb-md">Everything Your Annual Day Needs</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              One partner manages every element — from the first rehearsal to the final edited video.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
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

      {/* Process */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item max-w-2xl">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              How It Works
            </span>
            <h2 className="text-headline-lg mb-md">From First Call to Final Reel</h2>
            <p className="text-body-md text-on-surface-variant">
              A structured, stress-free process designed around your school's schedule.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-outline-variant/20 hidden md:block" />
            <div className="flex flex-col gap-lg">
              {process.map((w) => (
                <div key={w.step} className="flex gap-lg items-start stagger-item">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold z-10">
                    {w.step}
                  </div>
                  <div className="bg-[#121010] border border-[#2A2218] p-lg flex-1">
                    <h3 className="text-headline-md mb-sm">{w.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Schools we've worked with */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item max-w-2xl">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              Trusted By
            </span>
            <h2 className="text-headline-lg mb-md">Schools We Have Served in Dehradun</h2>
            <p className="text-body-md text-on-surface-variant">
              We are the preferred annual day partner for some of Dehradun's most respected institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {schools.map((school) => (
              <div
                key={school.name}
                className="bg-[#121010] border border-[#2A2218] p-lg flex items-center gap-lg stagger-item card-lift"
              >
                <div className="h-14 w-14 shrink-0 flex items-center justify-center">
                  <img
                    src={school.logo}
                    alt={`${school.name} logo`}
                    className="max-h-14 w-auto max-w-[56px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-body-md font-bold text-on-surface">{school.name}</p>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">{school.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Event gallery */}
      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item max-w-2xl">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              Our Work
            </span>
            <h2 className="text-headline-lg mb-md">Annual Day Moments We Have Created</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { title: "Arihant International — Grand Annual Function", src: "/assets/IMG-20260508-WA0059.jpg" },
              { title: "Live Stage Choreography Performance", src: "/assets/IMG-20260508-WA0016.jpg" },
              { title: "Audience-Ready School Production", src: "/assets/IMG-20260508-WA0049.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative min-h-[280px] bg-[#121010] border border-[#2A2218] overflow-hidden group stagger-item card-lift"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-lg">
                  <p className="text-headline-md">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-lg stagger-item">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
            >
              View Full Portfolio
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
          <div className="stagger-item">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              FAQs
            </span>
            <h2 className="text-headline-lg mb-md">Common Questions About School Annual Day Management</h2>
            <p className="text-body-md text-on-surface-variant mb-lg">
              Planning your school's annual day? Here's what most principals and activity coordinators ask us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
            >
              Ask Us Directly
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="flex flex-col gap-md stagger-item">
            {[
              {
                q: "How much does a school annual day cost in Dehradun?",
                a: "Packages start from ₹1.5 lakh for mid-scale programs. Full production packages with choreography, stage, lighting, sound, photography, and videography are priced based on guest count and venue. We provide fixed-price proposals — no hidden costs.",
              },
              {
                q: "How far in advance should we book?",
                a: "We recommend 2–4 months before your event date. This allows sufficient rehearsal time and ensures availability of our choreographers and production team.",
              },
              {
                q: "Do you handle the rehearsals too?",
                a: "Yes. Our choreographers conduct structured weekly rehearsals with your students from booking confirmation to event day — working within your school's schedule.",
              },
              {
                q: "Do you cover schools outside Dehradun city?",
                a: "Yes. We cover all of Uttarakhand including Mussoorie, Rishikesh, Haridwar, Roorkee, and Haridwar district schools.",
              },
              {
                q: "What if we only need one service — like just photography?",
                a: "Absolutely. While we offer end-to-end packages, you can book individual services like photography, videography, stage, or sound independently.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="bg-[#121010] border border-[#2A2218] p-lg group open:border-primary-container/40"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-md list-none">
                  <span className="text-body-lg font-medium text-on-surface">{item.q}</span>
                  <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-body-md text-on-surface-variant mt-md">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
            style={{ background: "rgba(245,158,11,0.08)" }}
          />
          <div className="relative z-10 flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">
              Plan Your School Annual Day in Dehradun
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Tell us your date, venue, and student count. We&apos;ll send a detailed proposal within 24 hours — completely free.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-md self-start md:self-end">
            <Link
              href="/contact"
              className="bg-[#D97706] text-white px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all text-center"
            >
              Get Free Proposal
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
      </ScrollReveal>
    </>
  );
}
