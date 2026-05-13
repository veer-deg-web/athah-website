import Link from "next/link";
import ModelSpotlight from "@/components/ModelSpotlight";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: "movie", title: "Cinematography", desc: "4K/8K cinematic production for all formats." },
  { icon: "photo_camera", title: "Photography", desc: "Editorial, event, and product photography." },
  { icon: "tv", title: "Commercial Ads", desc: "Brand films and TVC production." },
  { icon: "music_video", title: "Music Videos", desc: "Concept-to-delivery music video production." },
  { icon: "mic", title: "Podcasts", desc: "Studio-quality audio and video podcast production." },
  { icon: "flight", title: "Drone Shoots", desc: "Licensed aerial cinematography and mapping." },
  { icon: "reel", title: "Reels & Shorts", desc: "Social-optimized short-form video content." },
  { icon: "film_reel", title: "Documentaries", desc: "Long-form storytelling and documentary films." },
  { icon: "celebration", title: "Event Aftermovies", desc: "Cinematic event recap films." },
];

const packages = [
  {
    name: "Core Essentials",
    price: "₹25,000",
    unit: "/ project",
    features: [
      "4 Hours Coverage",
      "Single 4K Camera",
      "Highlight Reel (3 min)",
      "10 Edited Photographs",
    ],
    missing: ["No Drone", "No Same-Day Edit"],
    cta: "Book Basic",
    featured: false,
  },
  {
    name: "Pro Production",
    price: "₹65,000",
    unit: "/ project",
    features: [
      "Full Day Coverage",
      "Multi-Cam (3 Units)",
      "4K Cinematic Edit",
      "Drone Coverage Included",
      "Same-Day Social Reels",
      "50 Edited Photographs",
    ],
    missing: [],
    cta: "Request Proposal",
    featured: true,
  },
  {
    name: "Global Access",
    price: "Custom",
    unit: "pricing",
    features: [
      "Multi-Day Coverage",
      "Dedicated Media Server",
      "8K Production Option",
      "Broadcast-Ready Delivery",
      "Full Documentary Edit",
    ],
    missing: [],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function MediaPageContent() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/IMG-20260508-WA0049.jpg"
          >
            <source src="/assets/VID-20260509-WA0017.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(245,158,11,0.16) 0%, transparent 55%), rgba(10,10,10,0.62)" }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link href="/divisions" className="text-label-sm text-on-surface-variant/50 uppercase tracking-wide mb-lg flex items-center gap-xs group">
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            All Divisions
          </Link>
          <span className="inline-block px-md py-xs border border-primary text-primary text-label-sm uppercase tracking-widest rounded-full mb-md">
            Athah Media
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            The Visual <br />
            <span className="text-primary-container">Pulse of Every</span> <br />
            Event
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-xl">
            Cinema-grade media production for brands, artists, schools, and events. We treat your story as art.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link
              href="/portfolio"
              className="bg-[#D97706] text-white px-lg py-md text-headline-md rounded-none hover:scale-95 transition-all inline-block"
            >
              VIEW PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="border border-outline-variant px-lg py-md text-headline-md hover:bg-surface-container-high transition-all inline-block"
            >
              OUR PACKAGES
            </Link>
          </div>
        </div>
      </section>

      <ModelSpotlight
        badge="Production Gear"
        title="The Media Division Deserves the Camera Language"
        description="Here the 3D models reinforce the actual service: capture. Using camera props on the Media page feels intentional because they visualize equipment, framing, and production craft."
        notes={[
          "Video camera and still camera match the production offering",
          "3D adds context without competing with the real showreel footage",
          "A contained gear scene feels more premium than a mixed prop collage",
          "Keeps motion and visual interest inside the right division page",
        ]}
        align="left"
        items={[
          {
            url: "/glb/video-camera.glb",
            position: [-1.2, -0.1, 0.5],
            rotation: [0.12, 0.7, 0],
            scale: 1.05,
            floatSpeed: 1,
          },
          {
            url: "/glb/camera.glb",
            position: [1.55, 0.2, -0.25],
            rotation: [0.08, -0.65, 0],
            scale: 1.15,
            floatSpeed: 1.15,
          },
        ]}
      />

      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Production Services</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              From the first frame to the final cut — every service under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {services.map((s) => (
              <div key={s.title} className="bg-[#121010] border border-[#2A2218] p-lg stagger-item card-lift group">
                <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center mb-md group-hover:bg-primary-container/20 transition-colors">
                  <span className="material-symbols-outlined text-primary-container">{s.icon}</span>
                </div>
                <h3 className="text-headline-md mb-sm">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Media Portfolio</h2>
            <p className="text-body-md text-on-surface-variant">A curated selection of our production work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter" style={{ height: "600px" }}>
            <div className="md:col-span-8 relative bg-[#121010] border border-[#2A2218] overflow-hidden group stagger-item">
              <video
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/IMG-20260508-WA0052.jpg"
              >
                <source src="/assets/VID-20260509-WA0018.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-lg">
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">Showreel Cut</span>
                <h4 className="text-headline-md">High-Energy Performance Coverage</h4>
              </div>
            </div>
            <div className="md:col-span-4 relative bg-[#121010] border border-[#2A2218] overflow-hidden group stagger-item">
              <img
                src="/assets/IMG-20260508-WA0049.jpg"
                alt="Athah media portfolio"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-lg">
                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">Photography</span>
                <h4 className="text-headline-md">Live Stage Moments</h4>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item max-w-2xl">
            <h2 className="text-headline-lg mb-md">Media Packages</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              Scalable production solutions for every need and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-center">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`border p-lg flex flex-col ${
                  pkg.featured
                    ? "border-2 border-primary-container bg-surface-container-high relative scale-105"
                    : "border-outline-variant/20 bg-background"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-md py-xs text-label-sm font-bold uppercase tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-lg">
                  <h3 className="text-headline-md mb-xs">{pkg.name}</h3>
                  <div className="flex items-baseline gap-xs">
                    <span className="text-[32px] font-bold">{pkg.price}</span>
                    <span className="text-on-surface-variant">{pkg.unit}</span>
                  </div>
                </div>
                <ul className="space-y-md mb-xl flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-sm text-body-md">
                      <span className={`material-symbols-outlined text-[20px] ${pkg.featured ? "text-primary-container" : "text-primary"}`}>
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                  {pkg.missing.map((m) => (
                    <li key={m} className="flex items-center gap-sm text-body-md text-on-surface-variant/50">
                      <span className="material-symbols-outlined text-[20px]">cancel</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-md text-label-sm uppercase tracking-wide font-bold text-center transition-all hover:scale-95 ${
                    pkg.featured
                      ? "bg-[#D97706] text-white"
                      : "border border-outline-variant/30 hover:bg-surface-container-high"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto bg-primary-container p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg text-on-primary-container mb-md">
              Ready to tell your story?
            </h2>
            <p className="text-body-md text-on-primary-container/80">
              Send us your brief and we&apos;ll respond with a tailored media proposal.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 self-start md:self-end bg-background text-on-background px-lg py-md font-bold text-label-sm uppercase tracking-widest hover:scale-95 transition-all flex-shrink-0"
          >
            Get Started
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
