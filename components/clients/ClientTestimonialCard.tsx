import type { ClientTestimonial } from "@/components/clients/client-data";

export default function ClientTestimonialCard({
  testimonial,
}: {
  testimonial: ClientTestimonial;
}) {
  return (
    <figure className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col justify-between stagger-item card-lift">
      <div>
        {testimonial.logo ? (
          <div className="mb-lg flex min-h-16 items-center">
            <img
              src={testimonial.logo}
              alt={`${testimonial.role} logo`}
              className="max-h-16 w-auto max-w-[12rem] object-contain"
              loading="lazy"
            />
          </div>
        ) : null}
        <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
          {testimonial.type}
        </span>
        <span className="text-primary-container text-[40px] font-serif leading-none block mb-sm">
          &ldquo;
        </span>
        <blockquote className="text-body-md text-on-surface-variant italic mb-lg">
          {testimonial.quote}
        </blockquote>
      </div>
      <figcaption className="border-t border-outline-variant/20 pt-md">
        <p className="text-body-md font-bold text-on-surface">{testimonial.name}</p>
        <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
          {testimonial.role}
        </p>
      </figcaption>
    </figure>
  );
}
