import Link from "next/link";
import ModelSpotlight from "@/components/ModelSpotlight";
import ScrollReveal from "@/components/ScrollReveal";

const eventTypes = [
  { icon: "favorite", title: "Weddings", desc: "Bespoke wedding ceremonies and receptions crafted with love and precision." },
  { icon: "business_center", title: "Corporate Events", desc: "Conferences, product launches, galas, and team events — handled professionally." },
  { icon: "music_note", title: "Concerts", desc: "High-energy live music productions with world-class stage and AV setups." },
  { icon: "school", title: "School Events", desc: "Annual days, graduations, sports meets, and cultural programs." },
  { icon: "festival", title: "Cultural Festivals", desc: "Large-scale cultural celebrations with crowd, logistics, and production managed." },
  { icon: "star", title: "Artist Nights", desc: "Intimate and large artist performances with full backstage management." },
];

const services = [
  { icon: "design_services", title: "Event Planning", desc: "End-to-end planning from concept to execution." },
  { icon: "view_quilt", title: "Stage Design", desc: "Custom stage fabrication and scenic design." },
  { icon: "light_mode", title: "Lighting", desc: "Professional event lighting — wash, spot, and effects." },
  { icon: "volume_up", title: "Sound", desc: "Premium PA systems and live sound engineering." },
  { icon: "auto_awesome", title: "Special FX", desc: "Confetti, fog, pyrotechnics, and visual effects." },
  { icon: "person_pin", title: "Artist Management", desc: "End-to-end artist booking and hospitality." },
  { icon: "photo_camera", title: "Photography", desc: "Event photography for all scales and formats." },
  { icon: "videocam", title: "Videography", desc: "Cinematic event documentation and aftermovies." },
];

const workflow = [
  { step: "01", title: "Discovery Call", desc: "We understand your vision, scale, and brief in a 30-min consultation." },
  { step: "02", title: "Concept & Proposal", desc: "Custom event concept with detailed proposal within 48 hours." },
  { step: "03", title: "Planning & Production", desc: "Full pre-production: vendors, logistics, run-of-show, tech riders." },
  { step: "04", title: "Execution Day", desc: "On-site team, 24/7 support, zero compromise on quality." },
  { step: "05", title: "Wrap & Debrief", desc: "Post-event media delivery, reporting, and client debrief." },
];

const teamProfiles = [
  {
    initials: "ED",
    name: "Event Director",
    role: "Event Director",
    blurb: "Leads concept direction, client strategy, and overall experience design from the first brief to the final cue.",
    specialties: ["Show Flow", "Client Direction", "Concept Planning"],
  },
  {
    initials: "PL",
    name: "Production Lead",
    role: "Production Lead",
    blurb: "Owns stage build, technical coordination, and vendor movement so the production runs tightly on ground.",
    specialties: ["Stage Ops", "Tech Riders", "Vendor Control"],
  },
  {
    initials: "AM",
    name: "Artist Manager",
    role: "Artist & Experience Manager",
    blurb: "Handles artist hospitality, backstage movement, and audience-facing details that make the event feel polished.",
    specialties: ["Artist Mgmt", "Backstage", "Guest Experience"],
  },
];

export default function EventsPageContent() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/IMG-20260508-WA0060.jpg"
            alt="Athah events production"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(255,86,38,0.14) 0%, transparent 55%), rgba(19,19,19,0.66)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/divisions" className="text-label-sm text-on-surface-variant/50 uppercase tracking-wide mb-lg flex items-center gap-xs group">
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            All Divisions
          </Link>
          <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            Athah Events
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Events That <br />
            <span className="text-primary-container">Move People</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            From intimate ceremonies to stadium-scale productions — every Athah event is engineered to perfection and crafted to be remembered.
          </p>
          <Link
            href="/contact"
            className="bg-[#FF4400] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all duration-150 inline-block"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      </section>

      <ModelSpotlight
        badge="Stage Design Preview"
        title="See the Event World Before It Goes Live"
        description="The Events division is where stagecraft, sound, and showmanship come together. A focused 3D stage preview fits here because it supports the production story instead of interrupting the homepage."
        notes={[
          "Useful for concerts, annual functions, and artist nights",
          "A cleaner place to show staging capability than the landing page",
          "Works as a visual bridge between planning and execution",
          "Keeps the homepage focused on the overall brand message",
        ]}
        fitMode="manual"
        autoRotate={false}
        sceneClassName="mx-auto w-full max-w-[46rem] lg:max-w-[54rem]"
        canvasClassName="h-[580px] w-full lg:h-[720px]"
        items={[
          {
            url: "/glb/concert-stage.glb",
            position: [0, -0.05, 0.1],
            rotation: [0, Math.PI / 12, 0],
            scale: 0.7,
            floating: false,
          },
        ]}
      />

      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Events We Manage</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Every category. Every scale. Every emotion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="bg-[#111111] border border-[#333336] p-lg stagger-item card-lift group"
              >
                <span className="material-symbols-outlined text-primary-container text-[40px] mb-md block">
                  {e.icon}
                </span>
                <h3 className="text-headline-md mb-sm">{e.title}</h3>
                <p className="text-body-md text-on-surface-variant">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item max-w-2xl">
            <h2 className="text-headline-lg mb-md">Services We Provide</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              Every service you need for a complete event — in-house.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#111111] border border-[#333336] p-lg flex flex-col gap-sm stagger-item card-lift"
              >
                <span className="material-symbols-outlined text-primary-container text-[32px]">
                  {s.icon}
                </span>
                <h3 className="text-body-lg font-bold">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Our Event Workflow</h2>
            <p className="text-body-md text-on-surface-variant">From first call to final frame.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-outline-variant/20 hidden md:block" />
            <div className="flex flex-col gap-lg">
              {workflow.map((w) => (
                <div key={w.step} className="flex gap-lg items-start stagger-item">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary-container text-on-primary-container flex items-center justify-center text-label-sm font-bold z-10">
                    {w.step}
                  </div>
                  <div className="bg-[#111111] border border-[#333336] p-lg flex-1">
                    <h3 className="text-headline-md mb-sm">{w.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-xl gap-md">
            <div className="stagger-item">
              <h2 className="text-headline-lg mb-md">Event Gallery</h2>
              <p className="text-body-md text-on-surface-variant">A snapshot of the moments we've created.</p>
            </div>
            <Link
              href="/portfolio"
              className="text-primary text-label-sm uppercase tracking-wide flex items-center gap-xs group stagger-item"
            >
              Full Portfolio{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { title: "School Annual Function", src: "/assets/IMG-20260508-WA0059.jpg" },
              { title: "Live Stage Choreography", src: "/assets/IMG-20260508-WA0016.jpg" },
              { title: "Audience-Ready Production", src: "/assets/IMG-20260508-WA0049.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative min-h-[280px] bg-[#111111] border border-[#333336] overflow-hidden group stagger-item card-lift"
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
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item max-w-3xl">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
              Team Profiles
            </span>
            <h2 className="text-headline-lg mb-md">The Team Behind the Show</h2>
            <p className="text-body-md text-on-surface-variant">
              A high-accountability event team with clear ownership across concept, production, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {teamProfiles.map((member) => (
              <div
                key={member.name}
                className="bg-[#111111] border border-[#333336] p-lg stagger-item card-lift"
              >
                <div className="mb-lg flex items-center gap-md">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-container/40 bg-primary-container/10 text-primary-container text-headline-md font-bold tracking-wide">
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-headline-md">{member.name}</h3>
                    <p className="text-label-sm uppercase tracking-widest text-primary-container">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant mb-md">
                  {member.blurb}
                </p>
                <div className="flex flex-wrap gap-sm">
                  {member.specialties.map((item) => (
                    <span
                      key={item}
                      className="px-sm py-xs border border-outline-variant/30 text-label-sm text-on-surface-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Let&apos;s Plan Your Event</h2>
            <p className="text-body-md text-on-surface-variant">
              Share your vision. We&apos;ll send a bespoke proposal within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-[#FF4400] text-white px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Book Consultation
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
