"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Divisions",
    href: "/divisions",
    children: [
      { label: "Athah Events", href: "/divisions/events" },
      { label: "Athah Media", href: "/divisions/media" },
      { label: "Athah Growth Studio", href: "/divisions/growth-studio" },
      { label: "Athah Arts Academy", href: "/divisions/arts-academy" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Solutions", href: "/solutions" },
  { label: "Clients", href: "/clients" },
  // { label: "Blog", href: "/blog" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDivisionsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-outline-variant/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex justify-between items-center h-20 px-margin max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/ATHAH LOGO.png"
            alt="ATHAH"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-lg">
          {navLinks.slice(0, -1).map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDivisionsOpen(true)}
                onMouseLeave={() => setDivisionsOpen(false)}
              >
                <button
                  className={`text-label-sm uppercase tracking-wide flex items-center gap-xs transition-colors duration-200 ${
                    pathname.startsWith("/divisions")
                      ? "text-primary border-b-2 border-primary pb-px"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[16px]">
                    expand_more
                  </span>
                </button>
                {divisionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-surface-container-low border border-outline-variant/20 shadow-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-md py-sm text-label-sm uppercase tracking-wide text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-sm uppercase tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-px"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-md">
          <Link
            href="/contact"
            className="text-label-sm uppercase tracking-wide text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/contact"
            className="bg-primary-container text-on-primary-container px-md py-base text-label-sm uppercase tracking-wide font-bold rounded-lg hover:scale-95 transition-all duration-150"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container-low border-t border-outline-variant/20 px-margin py-lg flex flex-col gap-sm">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <p className="text-label-sm uppercase tracking-wide text-on-surface-variant py-sm">
                  {link.label}
                </p>
                <div className="pl-md flex flex-col gap-xs">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-label-sm uppercase tracking-wide text-on-surface-variant hover:text-primary-container transition-colors py-xs"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-sm uppercase tracking-wide py-sm transition-colors ${
                  pathname === link.href
                    ? "text-primary-container"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="mt-sm bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-wide font-bold text-center rounded-lg"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
