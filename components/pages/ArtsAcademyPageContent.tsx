import Link from "next/link";
import ModelSpotlight from "@/components/ModelSpotlight";
import ScrollReveal from "@/components/ScrollReveal";

const faculties = [
  { icon: "self_improvement", title: "Dance Faculty", desc: "Classical, contemporary, folk, and western dance instructors for all levels.", types: ["Bharatnatyam", "Hip-Hop", "Kathak", "Contemporary"] },
  { icon: "music_note", title: "Music Faculty", desc: "Vocal and instrumental music teachers across all genres.", types: ["Vocal Training", "Guitar", "Piano", "Tabla"] },
  { icon: "theater_comedy", title: "Theatre Faculty", desc: "Drama, script writing, stage presence, and performance arts coaches.", types: ["Acting", "Script Writing", "Voice & Diction", "Stage Direction"] },
  { icon: "brush", title: "Fine Arts Faculty", desc: "Sketching, painting, sculpture, and mixed media art instructors.", types: ["Sketching", "Watercolor", "Oil Painting", "Sculpture"] },
  { icon: "piano", title: "Instrument Training", desc: "Individual and group instrument coaching across 20+ instruments.", types: ["Strings", "Wind", "Percussion", "Keys"] },
  { icon: "groups", title: "Workshops", desc: "Intensive workshops for skill development and competitions.", types: ["Competition Prep", "Holiday Workshops", "Masterclasses", "Recital Training"] },
];

const audiences = [
  {
    icon: "school",
    title: "For Schools",
    points: [
      "Curated faculty based on curriculum needs",
      "Flexible scheduling — periods or after-school",
      "Faculty replacement system — no disruptions",
      "Annual day and recital production support",
      "Progress reports for each student",
    ],
  },
  {
    icon: "domain",
    title: "For Institutions",
    points: [
      "College cultural program faculty",
      "Corporate arts and wellness workshops",
      "Large-group instruction capability",
      "Event-tied performance training",
      "Custom curriculum design",
    ],
  },
];

export default function ArtsAcademyPageContent() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/IMG-20260508-WA0016.jpg"
            alt="Athah Arts Academy performance"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(255,86,38,0.14) 0%, transparent 55%), rgba(19,19,19,0.7)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/divisions" className="text-label-sm text-on-surface-variant/50 uppercase tracking-wide mb-lg flex items-center gap-xs group">
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            All Divisions
          </Link>
          <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            Athah Arts Academy
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Nurturing <br />
            <span className="text-primary-container">Creative</span> <br />
            Excellence
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            Trained arts faculty for schools and institutions — dance, music, theatre, and fine arts — delivered with professional standards and flexible scheduling.
          </p>
          <Link
            href="/contact"
            className="bg-[#FF4400] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all inline-block"
          >
            HIRE FACULTY
          </Link>
        </div>
      </section>

      <ModelSpotlight
        badge="Instrument Focus"
        title="Arts Academy Should Showcase the Instruments"
        description="This page is the natural home for music-led models. Guitar, violin, and microphone support the academy story far better here because they connect directly to training, recital practice, and performance readiness."
        notes={[
          "Ties the 3D content directly to faculty and student practice",
          "Feels aligned with recital, vocal, and instrument training",
          "Supports the academy narrative without cluttering other pages",
          "Lets each division keep its own visual identity",
        ]}
        items={[
          {
            url: "/glb/guitar.glb",
            position: [-1.75, 0, -0.2],
            rotation: [0.18, 0.8, -0.2],
            scale: 1.65,
            floatSpeed: 0.95,
          },
          {
            url: "/glb/violin.glb",
            position: [1.35, 0.15, 0.1],
            rotation: [0.1, -0.9, 0.25],
            scale: 2.1,
            floatSpeed: 1.1,
          },
          {
            url: "/glb/microphone.glb",
            position: [0, -0.35, 1.3],
            rotation: [0.08, 0.2, 0],
            scale: 0.78,
            floatSpeed: 1.3,
          },
        ]}
        align="left"
      />

      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Our Faculty</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              20+ trained professionals covering every creative discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {faculties.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#333336] p-lg stagger-item card-lift">
                <span className="material-symbols-outlined text-primary-container text-[40px] mb-md block">{f.icon}</span>
                <h3 className="text-headline-md mb-sm">{f.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-md">{f.desc}</p>
                <div className="flex flex-wrap gap-sm">
                  {f.types.map((t) => (
                    <span key={t} className="px-sm py-xs border border-outline-variant/30 text-label-sm text-on-surface-variant">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Tailored for Every Institution</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {audiences.map((a) => (
              <div key={a.title} className="bg-[#111111] border border-[#333336] p-xl stagger-item card-lift">
                <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">{a.icon}</span>
                <h3 className="text-headline-md mb-lg">{a.title}</h3>
                <ul className="flex flex-col gap-md">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-md">
                      <span className="material-symbols-outlined text-primary-container text-[20px] flex-shrink-0">check_circle</span>
                      <span className="text-body-md text-on-surface-variant">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
            <div className="stagger-item">
              <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                Our Promise
              </span>
              <h2 className="text-headline-lg mb-lg">Faculty Replacement System</h2>
              <p className="text-body-lg text-on-surface-variant mb-md">
                No disruptions. Ever. If a faculty member is unavailable, we guarantee a qualified replacement within 24 hours — maintaining the quality and continuity of your program.
              </p>
              <p className="text-body-md text-on-surface-variant mb-lg">
                This commitment distinguishes Athah Arts Academy from independent faculty arrangements. We take full accountability.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
              >
                Learn More{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="stagger-item grid grid-cols-2 gap-md">
              <div className="col-span-2 relative min-h-[220px] overflow-hidden border border-[#333336]">
                <img
                  src="/assets/IMG-20260508-WA0058.jpg"
                  alt="Students performing at an Athah-led program"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-lg">
                  <p className="text-headline-md">Students stay stage-ready while we handle continuity.</p>
                </div>
              </div>
              {[
                { icon: "swap_horiz", label: "24hr Replacement", value: "Guaranteed" },
                { icon: "verified", label: "Faculty Quality", value: "Pre-vetted" },
                { icon: "assignment", label: "Reports", value: "Monthly" },
                { icon: "phone_in_talk", label: "Support", value: "Always On" },
              ].map((item) => (
                <div key={item.label} className="bg-[#111111] border border-[#333336] p-lg flex flex-col gap-sm">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">{item.icon}</span>
                  <p className="text-primary-container font-bold text-headline-md">{item.value}</p>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Elevate Your Arts Program</h2>
            <p className="text-body-md text-on-surface-variant">
              Tell us about your institution and we&apos;ll match you with the perfect faculty.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Request Faculty
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
