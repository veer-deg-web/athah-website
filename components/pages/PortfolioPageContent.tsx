"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type VideoItem = {
  title: string;
  href: string;
  embedSrc: string;
};

type CategoryItem =
  | {
      id: string;
      label: string;
      title: string;
      description: string;
      type: "videos";
      href?: string;
      videos: VideoItem[];
    }
  | {
      id: string;
      label: string;
      title: string;
      description: string;
      type: "folder";
      href: string;
      embedSrc: string;
    };

const categories: CategoryItem[] = [
  {
    id: "ads",
    label: "Ads",
    title: "Advertising Showcase",
    description:
      "Brand-facing ad work, campaign cuts, and commercial-ready motion pieces collected in Drive.",
    type: "folder",
    href: "https://drive.google.com/drive/folders/1lPkReSDMIhKaEcnpbBIIVFhY3gpK0ZJI",
    embedSrc:
      "https://drive.google.com/embeddedfolderview?id=1lPkReSDMIhKaEcnpbBIIVFhY3gpK0ZJI#grid",
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Corporate Video Showcase",
    description:
      "Professional visual storytelling, presentation reels, and polished client-facing production.",
    type: "videos",
    href: "https://drive.google.com/drive/folders/18RsUOBdPDBupB0Xu0hDs7diQXWXhfhmc",
    videos: [
      {
        title: "Corporate Video 01",
        href: "https://drive.google.com/file/d/1kAar5d9NRstZInWme13Bl1pZuUD2MOzX/view",
        embedSrc:
          "https://drive.google.com/file/d/1kAar5d9NRstZInWme13Bl1pZuUD2MOzX/preview",
      },
      {
        title: "Corporate Video 02",
        href: "https://drive.google.com/file/d/1TyCzRazWrMPsJ-Asqwu5mCzWrk2QTAGF/view",
        embedSrc:
          "https://drive.google.com/file/d/1TyCzRazWrMPsJ-Asqwu5mCzWrk2QTAGF/preview",
      },
      {
        title: "Corporate Video 03",
        href: "https://drive.google.com/file/d/1wELeiVrjkQ_aFXHoZ2qmFBxbuhuPB4kb/view",
        embedSrc:
          "https://drive.google.com/file/d/1wELeiVrjkQ_aFXHoZ2qmFBxbuhuPB4kb/preview",
      },
      {
        title: "Corporate Video 04",
        href: "https://drive.google.com/file/d/1BBhwLOK2G23ROZwam5yPs7qrpyAZhw1H/view",
        embedSrc:
          "https://drive.google.com/file/d/1BBhwLOK2G23ROZwam5yPs7qrpyAZhw1H/preview",
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    title: "Event Coverage Highlights",
    description:
      "Live event documentation, on-ground coverage, stage energy, and audience-driven production moments.",
    type: "videos",
    href: "https://drive.google.com/drive/folders/1mT03StZ5n1UZi5nBUW92G9knJFpQEDUE?usp=drive_link",
    videos: [
      {
        title: "Event Video 01",
        href: "https://drive.google.com/file/d/1XaSxmWka59hqLFZkEs9vOH6wPOubAZLE/view",
        embedSrc:
          "https://drive.google.com/file/d/1XaSxmWka59hqLFZkEs9vOH6wPOubAZLE/preview",
      },
      {
        title: "Event Video 02",
        href: "https://drive.google.com/file/d/1Y0L9FgwrLJ30TZafskta2bFAGYpWECz7/view",
        embedSrc:
          "https://drive.google.com/file/d/1Y0L9FgwrLJ30TZafskta2bFAGYpWECz7/preview",
      },
      {
        title: "Event Video 03",
        href: "https://drive.google.com/file/d/1UQT6EPw3i7OXhHP652Ln-XO-9rtTozE0/view",
        embedSrc:
          "https://drive.google.com/file/d/1UQT6EPw3i7OXhHP652Ln-XO-9rtTozE0/preview",
      },
      {
        title: "Event Video 04",
        href: "https://drive.google.com/file/d/1I4hV6Z4nw91j4ZVj34FDfOtNuzMDx9Wr/view",
        embedSrc:
          "https://drive.google.com/file/d/1I4hV6Z4nw91j4ZVj34FDfOtNuzMDx9Wr/preview",
      },
      {
        title: "Event Video 05",
        href: "https://drive.google.com/file/d/1JeGl6dx2FoOkgKLBI7lw1XwPqe2yPqL-/view",
        embedSrc:
          "https://drive.google.com/file/d/1JeGl6dx2FoOkgKLBI7lw1XwPqe2yPqL-/preview",
      },
      {
        title: "Event Video 06",
        href: "https://drive.google.com/file/d/19FRiljqpp892AQDi2y_XnpGssuWt03g2/view",
        embedSrc:
          "https://drive.google.com/file/d/19FRiljqpp892AQDi2y_XnpGssuWt03g2/preview",
      },
      {
        title: "Event Video 07",
        href: "https://drive.google.com/file/d/1g5I-eN9qwdPWauFVnH-D9-16QocXnbmE/view",
        embedSrc:
          "https://drive.google.com/file/d/1g5I-eN9qwdPWauFVnH-D9-16QocXnbmE/preview",
      },
    ],
  },
  {
    id: "festival",
    label: "Festival",
    title: "Festival Atmosphere Reels",
    description:
      "Cultural energy, festival staging, ambience, and visual rhythm captured across celebration-led experiences.",
    type: "videos",
    videos: [
      {
        title: "Festival Video 01",
        href: "https://drive.google.com/file/d/1L5amDhZfYO5KulnNyPbXhdVaGcZQ7QAO/view",
        embedSrc:
          "https://drive.google.com/file/d/1L5amDhZfYO5KulnNyPbXhdVaGcZQ7QAO/preview",
      },
      {
        title: "Festival Video 02",
        href: "https://drive.google.com/file/d/12LbjZFqP_nMJaSCp6hoE7V1ISpaOm9fR/view",
        embedSrc:
          "https://drive.google.com/file/d/12LbjZFqP_nMJaSCp6hoE7V1ISpaOm9fR/preview",
      },
      {
        title: "Festival Video 03",
        href: "https://drive.google.com/file/d/1vEO17vYJbEDhRnnMaGNf50J1ui58MGzQ/view",
        embedSrc:
          "https://drive.google.com/file/d/1vEO17vYJbEDhRnnMaGNf50J1ui58MGzQ/preview",
      },
    ],
  },
  {
    id: "film",
    label: "Film",
    title: "Story-Driven Film Frames",
    description:
      "Narrative-led visual language with a more cinematic pace, composition, and emotional treatment.",
    type: "videos",
    videos: [
      {
        title: "Film Video 01",
        href: "https://drive.google.com/file/d/12POIKSTsQvXHUmcPH2fHkt5dL9UmYkhO/view",
        embedSrc:
          "https://drive.google.com/file/d/12POIKSTsQvXHUmcPH2fHkt5dL9UmYkhO/preview",
      },
    ],
  },
  {
    id: "songs",
    label: "Songs",
    title: "Music & Performance Visuals",
    description:
      "Song-led edits, music performance visuals, and rhythm-focused showcase pieces.",
    type: "videos",
    videos: [
      {
        title: "Song Video 01",
        href: "https://drive.google.com/file/d/1UdgcI1Yt3kiHGakCRZFFDYvs77CMzkLs/view",
        embedSrc:
          "https://drive.google.com/file/d/1UdgcI1Yt3kiHGakCRZFFDYvs77CMzkLs/preview",
      },
      {
        title: "Song Video 02",
        href: "https://drive.google.com/file/d/1hJkiB6F0QeaYcuMTlFR69EPfDOQYXzDj/view",
        embedSrc:
          "https://drive.google.com/file/d/1hJkiB6F0QeaYcuMTlFR69EPfDOQYXzDj/preview",
      },
      {
        title: "Song Video 03",
        href: "https://drive.google.com/file/d/1CpiPs9_YDSEpCHNyZlFrvbdIQ57tw-ef/view",
        embedSrc:
          "https://drive.google.com/file/d/1CpiPs9_YDSEpCHNyZlFrvbdIQ57tw-ef/preview",
      },
    ],
  },
];

const referenceItems = [
  {
    label: "Company Overview",
    title: "Athah Company Profile",
    description:
      "Explore our brand story, capabilities, service strengths, and presentation-ready company overview.",
    embedSrc: "https://drive.google.com/file/d/1c63ZgWpBFi7Mc1pflycAsVOI3yq9ADtO/preview",
    href: "https://drive.google.com/file/d/1c63ZgWpBFi7Mc1pflycAsVOI3yq9ADtO/view?usp=drive_link",
  },
  {
    label: "Reference Gallery",
    title: "Event Portfolio & Execution Gallery",
    description:
      "A broader Drive archive of event execution references, snapshots, and extended production material.",
    embedSrc: "https://drive.google.com/embeddedfolderview?id=1mT03StZ5n1UZi5nBUW92G9knJFpQEDUE#grid",
    href: "https://drive.google.com/drive/folders/1mT03StZ5n1UZi5nBUW92G9knJFpQEDUE?usp=drive_link",
  },
];

function DriveFrame({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      allow="autoplay; fullscreen"
      loading="lazy"
    />
  );
}

export default function PortfolioPageContent() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const scrollToCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);

    if (categoryId === "all") {
      const top = document.getElementById("portfolio-gallery-top");
      top?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const section = document.getElementById(`portfolio-category-${categoryId}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative py-xl px-margin overflow-hidden border-b border-outline-variant/10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255,86,38,0.1) 0%, transparent 52%), #131313",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-md block">
            Our Portfolio
          </span>
          <h1 className="text-display uppercase mb-lg max-w-4xl leading-none">
            Every Project. <br />
            <span className="text-primary-container">Every Moment.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            A curated selection of Athah&apos;s finest work across events, media, and creative productions.
          </p>
        </div>
      </section>

      <ScrollReveal className="py-xl px-margin max-w-7xl mx-auto">
        <div id="portfolio-gallery-top">
          <div className="flex flex-wrap gap-sm mb-xl stagger-item">
            <button
              type="button"
              onClick={() => scrollToCategory("all")}
              className={`px-md py-xs text-label-sm uppercase tracking-wide transition-all ${
                activeCategoryId === "all"
                  ? "bg-primary-container text-on-primary-container"
                  : "border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50 hover:text-on-surface"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToCategory(category.id)}
                className={`px-md py-xs text-label-sm uppercase tracking-wide transition-all ${
                  activeCategoryId === category.id
                    ? "bg-primary-container text-on-primary-container"
                    : "border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50 hover:text-on-surface"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mb-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToCategory(category.id)}
                className={`text-left bg-[#111111] border overflow-hidden stagger-item card-lift transition-all ${
                  activeCategoryId === category.id
                    ? "border-primary-container"
                    : "border-[#333336]"
                }`}
              >
                <div className="relative aspect-video bg-black border-b border-outline-variant/10">
                  {category.type === "videos" ? (
                    <DriveFrame
                      src={category.videos[0].embedSrc}
                      title={category.videos[0].title}
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <DriveFrame
                      src={category.embedSrc}
                      title={category.title}
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                </div>
                <div className="p-lg">
                  <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
                    {category.label}
                  </span>
                  <h3 className="text-headline-md mb-sm">{category.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-md">{category.description}</p>
                  <span className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide">
                    View Gallery
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-xl">
            {categories.map((category) => (
              <section
                key={category.id}
                id={`portfolio-category-${category.id}`}
                className={`bg-[#111111] border overflow-hidden stagger-item scroll-mt-24 ${
                  activeCategoryId === category.id
                    ? "border-primary-container"
                    : "border-[#333336]"
                }`}
              >
                <div className="p-lg md:p-xl border-b border-outline-variant/10">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-md">
                    <div className="max-w-3xl">
                      <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
                        {category.label}
                      </span>
                      <h2 className="text-headline-lg mb-sm">{category.title}</h2>
                      <p className="text-body-md text-on-surface-variant">{category.description}</p>
                    </div>
                    {category.href ? (
                      <Link
                        href={category.href}
                        target="_blank"
                        className="text-primary text-label-sm uppercase tracking-wide flex items-center gap-xs"
                      >
                        Open in Drive
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="p-lg md:p-xl">
                  {category.type === "videos" ? (
                    <div className="flex flex-col gap-gutter">
                      <div className="bg-black border border-outline-variant/20 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.34)]">
                        <div className="relative aspect-[16/9]">
                          <DriveFrame
                            src={category.videos[0].embedSrc}
                            title={category.videos[0].title}
                            className="absolute inset-0 h-full w-full"
                          />
                        </div>
                        <div className="p-lg">
                          <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">
                            {category.label} 01
                          </span>
                          <p className="text-headline-md text-on-surface mb-sm">{category.videos[0].title}</p>
                          <Link
                            href={category.videos[0].href}
                            target="_blank"
                            className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide"
                          >
                            Open Drive Link
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                          </Link>
                        </div>
                      </div>

                      {category.videos.length > 1 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                          {category.videos.slice(1).map((video, index) => (
                            <div
                              key={video.href}
                              className="bg-black border border-outline-variant/20 overflow-hidden shadow-[0_18px_48px_rgba(0,0,0,0.28)]"
                            >
                              <div className="relative aspect-video">
                                <DriveFrame
                                  src={video.embedSrc}
                                  title={video.title}
                                  className="absolute inset-0 h-full w-full"
                                />
                              </div>
                              <div className="p-md">
                                <span className="text-primary-container text-label-sm uppercase tracking-widest mb-xs block">
                                  {category.label} {String(index + 2).padStart(2, "0")}
                                </span>
                                <p className="text-body-lg text-on-surface mb-sm">{video.title}</p>
                                <Link
                                  href={video.href}
                                  target="_blank"
                                  className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide"
                                >
                                  Open Drive Link
                                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-gutter">
                      <div className="relative overflow-hidden bg-black border border-outline-variant/20 min-h-[560px]">
                        <DriveFrame
                          src={category.embedSrc}
                          title={category.title}
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                      <div className="bg-black border border-outline-variant/20 p-lg">
                        <h3 className="text-headline-md mb-sm">Drive Folder Linked</h3>
                        <p className="text-body-md text-on-surface-variant mb-md">
                          This category is connected to the real Drive folder, but it still needs direct file links to
                          become a fully playable inline video gallery like the other sections.
                        </p>
                        <Link
                          href={category.href}
                          target="_blank"
                          className="inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide"
                        >
                          Open Ads Folder
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-xl max-w-3xl stagger-item">
            <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
              Reference Material
            </span>
            <h2 className="text-headline-lg mb-md">Detailed Portfolio Documents</h2>
            <p className="text-body-md text-on-surface-variant">
              Supporting presentation and reference archives for deeper review beyond the top video showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter">
            {referenceItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#111111] border border-[#333336] overflow-hidden stagger-item"
              >
                <div className="p-lg md:p-xl border-b border-outline-variant/10">
                  <span className="text-primary-container text-label-sm uppercase tracking-widest mb-sm block">
                    {item.label}
                  </span>
                  <h3 className="text-headline-md mb-sm">{item.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{item.description}</p>
                </div>
                <div className="p-lg md:p-xl">
                  <div className="relative overflow-hidden bg-black border border-outline-variant/20 min-h-[420px]">
                    <DriveFrame
                      src={item.embedSrc}
                      title={item.title}
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="mt-md inline-flex items-center gap-xs text-primary text-label-sm uppercase tracking-wide"
                  >
                    Open in Drive
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="py-xl px-margin">
        <div className="max-w-7xl mx-auto glass-card p-xl flex flex-col md:flex-row md:items-end justify-between gap-lg stagger-item">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2 className="text-headline-lg mb-md">Want Your Project Here?</h2>
            <p className="text-body-md text-on-surface-variant">
              Let&apos;s create something worth showcasing.
            </p>
          </div>
          <Link
            href="/contact"
            className="self-start md:self-end bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all flex-shrink-0"
          >
            Start a Project
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
