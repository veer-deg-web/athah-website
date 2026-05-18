import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import { careerOpenings, careerPerks } from "@/components/careers/careers-data";

export default function CareersPageContent() {
  return (
    <>
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(217,119,6,0.1) 0%, transparent 55%), #0A0A0A",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Careers
          </span>
          <h1 className="text-display uppercase mb-lg max-w-3xl leading-none">
            Build the <br />
            <span className="text-primary-container">Creative Industry</span> <br />
            With Us
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            At Athah, you don&apos;t just work on projects. You shape how India experiences creativity.
            We&apos;re looking for specialists, thinkers, teachers, and makers.
          </p>
        </div>
      </section>

      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl stagger-item">
            <h2 className="text-headline-lg mb-md">Why Work at Athah?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {careerPerks.map((perk) => (
              <div key={perk.title} className="bg-[#121010] border border-[#2A2218] p-lg flex gap-lg stagger-item card-lift">
                <span className="material-symbols-outlined text-primary-container text-[40px] flex-shrink-0">
                  {perk.icon}
                </span>
                <div>
                  <h3 className="text-headline-md mb-sm">{perk.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-xl items-start">
          <div>
            <div className="mb-xl stagger-item">
              <h2 className="text-headline-lg mb-md">Open Positions</h2>
              <p className="text-body-md text-on-surface-variant">
                Find your place in the Athah ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-xl">
              {careerOpenings.map((team) => (
                <div key={team.team} className="stagger-item">
                  <div className="flex items-center gap-md mb-lg border-b border-outline-variant/20 pb-md">
                    <span className="material-symbols-outlined text-primary-container text-[32px]">
                      {team.icon}
                    </span>
                    <h3 className="text-headline-md">{team.team}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    {team.roles.map((role) => (
                      <div
                        key={`${team.team}-${role.title}`}
                        className="bg-[#121010] border border-[#2A2218] p-lg flex flex-col justify-between card-lift group"
                      >
                        <div>
                          <h4 className="text-headline-md mb-md">{role.title}</h4>
                          <div className="flex flex-wrap gap-sm">
                            <span className="px-sm py-xs bg-primary-container/10 border border-primary-container/30 text-label-sm text-primary-container">
                              {role.type}
                            </span>
                            <span className="px-sm py-xs bg-surface-container-high text-label-sm text-on-surface-variant">
                              {role.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stagger-item bg-[#121010] border border-[#2A2218] p-lg md:p-xl">
            <div className="mb-lg">
              <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
                Apply Now
              </span>
              <h2 className="text-headline-lg mb-sm">Career Application Form</h2>
              <p className="text-body-md text-on-surface-variant">
                Submit your profile directly to the Athah team. Applications go to the internal dashboard for review.
              </p>
            </div>
            <CareerApplicationForm />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="bg-[#121010] border border-[#2A2218] p-xl stagger-item card-lift">
              <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                explore
              </span>
              <h3 className="text-headline-md mb-md">Internship Programs</h3>
              <p className="text-body-md text-on-surface-variant mb-lg">
                3 and 6-month internships across all four Athah divisions. Real work, real mentorship, and a launchpad into the creative industry.
              </p>
              <p className="text-label-sm uppercase tracking-widest text-primary-container">
                Mention internship details in the form above.
              </p>
            </div>

            <div className="bg-[#121010] border border-[#2A2218] p-xl stagger-item card-lift">
              <span className="material-symbols-outlined text-primary-container text-[48px] mb-md block">
                star
              </span>
              <h3 className="text-headline-md mb-md">Artist Applications</h3>
              <p className="text-body-md text-on-surface-variant mb-lg">
                Performers, musicians, dancers, and creative faculty can also use the same system to submit their profiles for future collaborations.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide group"
              >
                Need a direct conversation?
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
