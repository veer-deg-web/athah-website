import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Athah — Book a Consultation",
  description:
    "Book a consultation with Athah. Tell us about your event, project, or creative brief and we'll respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(245,158,11,0.09) 0%, transparent 50%), #0A0A0A" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Get in Touch
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Let&apos;s Create <br />
            <span className="text-primary-container">Something</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Share your vision. We&apos;ll send a tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">

          {/* Form */}
          <div className="lg:col-span-8 stagger-item">
            <h2 className="text-headline-lg mb-lg">Inquiry Portal</h2>
            <p className="text-body-md text-on-surface-variant mb-xl">
              Fill out the details below. The more you share, the better we can tailor your proposal.
            </p>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-lg stagger-item">
            <div className="bg-surface-container-low border border-outline-variant/10 p-lg rounded-xl">
              <h3 className="text-headline-md text-primary mb-lg">Why Athah?</h3>
              <div className="flex flex-col gap-md">
                {[
                  { icon: "verified_user", title: "End-to-End Execution", desc: "One team manages everything — no coordination headaches." },
                  { icon: "movie_filter", title: "Cinema-Grade Quality", desc: "Professional-grade production across all services." },
                  { icon: "schedule", title: "24hr Response", desc: "A dedicated consultant reaches out within one business day." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-md">
                    <span className="material-symbols-outlined text-primary-container flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-on-surface mb-xs">{item.title}</h4>
                      <p className="text-on-surface-variant text-label-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-outline-variant/10 mt-lg pt-lg">
                <h4 className="text-label-sm text-primary uppercase tracking-widest mb-md">Testimonial</h4>
                <blockquote className="italic text-on-surface-variant text-body-md border-l-2 border-primary-container pl-md">
                  &ldquo;Athah transformed our annual function. The choreography, lighting, and costumes were spectacular — and the entire process was stress-free.&rdquo;
                </blockquote>
                <p className="text-label-sm text-on-surface mt-sm font-bold">— Principal, Arihant International School, Nahan</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-surface-container-highest p-lg rounded-xl space-y-md">
              <h4 className="font-bold text-on-surface mb-md">Direct Contact</h4>
              <a href="https://wa.me/918433167030" className="flex items-center gap-sm text-on-surface-variant hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container">chat_bubble</span>
                <span className="text-body-md">WhatsApp Us</span>
              </a>
              <a href="mailto:athaheventsddn@gmail.com" className="flex items-center gap-sm text-on-surface-variant hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container">mail</span>
                <span className="text-body-md">athaheventsddn@gmail.com</span>
              </a>
              <a href="tel:+919897591309" className="flex items-center gap-sm text-on-surface-variant hover:text-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container">call</span>
                <span className="text-body-md">+91 98975 91309</span>
              </a>
            </div>

            {/* Office */}
            <div className="bg-[#121010] border border-[#2A2218] p-lg rounded-xl">
              <h4 className="font-bold text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
                Office
              </h4>
              <p className="text-body-md text-on-surface-variant">
                154/1 Mazaar Lane, Chakrata Road<br />
                Dehradun, Uttarakhand<br />
                India
              </p>
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </>
  );
}
