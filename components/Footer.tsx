import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Divisions: [
    { label: "Athah Events", href: "/divisions/events" },
    { label: "Athah Media", href: "/divisions/media" },
    { label: "Athah Growth Studio", href: "/divisions/growth-studio" },
    { label: "Athah Arts Academy", href: "/divisions/arts-academy" },
  ],
  Solutions: [
    { label: "For Schools", href: "/solutions#schools" },
    { label: "For Brands", href: "/solutions#brands" },
    { label: "For Artists", href: "/solutions#artists" },
    { label: "For Weddings", href: "/solutions#weddings" },
  ],
  Company: [
    { label: "About Athah", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Clients", href: "/clients" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: "language", label: "Website", href: "https://athahartentertainment.com" },
  { icon: "photo_camera", label: "Instagram", href: "https://www.instagram.com/athah_events" },
  { icon: "play_circle", label: "YouTube", href: "#" },
  { icon: "hub", label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 mt-xl">
      <div className="max-w-7xl mx-auto px-margin pt-xl pb-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-xl mb-xl">
          {/* Brand column */}
          <div className="lg:col-span-2 min-w-0">
            <div className="mb-md">
              <Image
                src="/ATHAH LOGO.png"
                alt="ATHAH"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-body-md text-on-surface-variant/70 mb-lg max-w-md">
              Where Art Breathes Eternity — a creative partner for schools,
              institutions &amp; cultural ecosystems. Based in Dehradun.
            </p>
            <div className="flex gap-md">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-on-surface-variant/50 hover:text-primary-container transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              <h4 className="text-label-sm uppercase tracking-widest text-on-surface mb-md">
                {heading}
              </h4>
              <ul className="flex flex-col gap-base">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-md text-on-surface-variant/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-outline-variant/10 pt-lg pb-md flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-lg text-on-surface-variant/50">
            <a
              href="https://wa.me/918433167030"
              className="flex items-center gap-xs hover:text-primary-container transition-colors text-label-sm uppercase tracking-wide"
            >
              <span className="material-symbols-outlined text-[16px]">
                chat_bubble
              </span>
              WhatsApp Us
            </a>
            <a
              href="mailto:athaheventsddn@gmail.com"
              className="flex items-center gap-xs hover:text-primary-container transition-colors text-label-sm uppercase tracking-wide"
            >
              <span className="material-symbols-outlined text-[16px]">
                mail
              </span>
              athaheventsddn@gmail.com
            </a>
          </div>
          <p className="text-label-sm text-on-surface-variant/40 uppercase tracking-widest text-left md:text-right">
            © 2025 Athah Arts & Entertainment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
