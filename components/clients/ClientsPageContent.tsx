import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ClientFeedbackForm from "@/components/clients/ClientFeedbackForm";
import ClientPartnerCard from "@/components/clients/ClientPartnerCard";
import ClientTestimonialCard from "@/components/clients/ClientTestimonialCard";
import {
  clientMetrics,
  clientPartners,
} from "@/components/clients/client-data";
import { listApprovedTestimonials } from "@/lib/testimonials";

export default async function ClientsPageContent() {
  const clientTestimonials = await listApprovedTestimonials();

  return (
    <>
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(217,119,6,0.08) 0%, transparent 50%), #0A0A0A",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Clients & Partners
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Built on <br />
            <span className="text-primary-container">Trust</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Brands, schools, artists, and institutions who trust Athah with their most important moments.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            {clientMetrics.map((metric) => (
              <div key={metric.label} className="stagger-item">
                <div className="text-headline-lg text-primary-container mb-xs">{metric.value}</div>
                <div className="text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div>
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Client Stories</h2>
            <p className="text-body-md text-on-surface-variant">
              Real experiences from the clients who trust us with their biggest moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {clientTestimonials.map((testimonial) => (
              <ClientTestimonialCard
                key={`${testimonial.name}-${testimonial.role}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Partner Institutions</h2>
            <p className="text-body-md text-on-surface-variant">Organizations that have partnered with Athah.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
            {clientPartners.map((partner) => (
              <ClientPartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Become an Athah Partner</h2>
            <p className="text-body-md text-on-surface-variant">
              Join our growing network of schools, brands, and institutions building something extraordinary.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </ScrollReveal>

      {/* <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-xl items-start">
          <div className="stagger-item">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
              Share Feedback
            </span>
            <h2 className="text-headline-lg mb-md">Add Your Experience</h2>
            <p className="text-body-md text-on-surface-variant">
              Worked with Athah already? Send your feedback here. It will be reviewed by the team first and then approved for the public testimonials section.
            </p>
          </div>
          <div className="stagger-item bg-[#121010] border border-[#2A2218] p-lg md:p-xl">
            <ClientFeedbackForm />
          </div>
        </div>
      </ScrollReveal> */}
    </>
  );
}
