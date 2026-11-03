"use client";

import React from "react";
import Image from "next/image";

const BRANDS = [
  { src: "/brand_logo/shmg.png", alt: "SHMG" },
  { src: "/brand_logo/nepalfounder.png", alt: "Nepal Founder" },
  { src: "/brand_logo/offernepal.png", alt: "Offer Nepal" },
  { src: "/brand_logo/onevillage.png", alt: "One Village" },
  { src: "/brand_logo/sixsummit.png", alt: "Six Summit" },
];

/**
 * Hero section.
 * Architecture:
 * - `<header id="top">` has `marginBottom: "-100svh"`
 * - `<div id="hero-content">` is `sticky top-0 min-h-screen`
 * - `<div className="h-screen pointer-events-none" />` spacer follows it
 * This guarantees the About section slides directly up over the Hero,
 * covering it like a rising curtain without affecting any animations.
 */
export const Hero: React.FC = () => {
  return (
    <header
      id="top"
      className="relative z-0 bg-ink"
      style={{ marginBottom: "-100svh" }}
    >
      <div
        id="hero-content"
        className="sticky top-0 flex min-h-screen flex-col justify-between overflow-hidden will-change-transform"
      >
        {/* Background ambient light shapes */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full bg-royal/30 blur-[150px]" />
          <div className="absolute -left-52 bottom-0 h-[34rem] w-[34rem] rounded-full bg-gold/[0.07] blur-[120px]" />
          <div className="absolute inset-0 hidden lg:block">
            <span className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/[0.07] to-transparent" />
            <span className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
          </div>
          <div className="corner-frame hidden md:block" />
        </div>

        {/* Ambient background arch image */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[55%]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#040a14_0%,rgba(4,10,20,0.92)_28%,rgba(4,10,20,0.45)_62%,rgba(4,10,20,0.75)_100%)]" />
          <Image
            src="/images/about-hospitality-interior.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="hero-img object-cover object-center opacity-45 lg:opacity-35"
          />
        </div>

        {/* ── Content area ── */}
        <div className="relative z-10 flex-1 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 pb-12 pt-32 sm:pt-36">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Copy column */}
              <div className="max-w-2xl">
                <p className="eyebrow hero-fade mb-4 text-[10px] uppercase tracking-[0.25em] text-[#B89856]">
                  Hospitality Standards . PERFORMANCE  · EXCELLENCE
                </p>

                <h1 className="hero-heading-split display-xl text-[clamp(2.1rem,4.2vw,3.8rem)] leading-[1.05] tracking-tight text-ivory">
                  {"Elevated standards. Exceptional hospitality."
                    .split(" ")
                    .map((word, wordIdx) => (
                      <span
                        key={wordIdx}
                        className="inline-block overflow-hidden mr-[0.26em] align-top"
                      >
                        <span
                          className={`hero-letter-word inline-block translate-y-[120%] will-change-transform ${
                            word.toLowerCase().includes("standards")
                              ? "italic text-gold-light"
                              : ""
                          }`}
                        >
                          {word}
                        </span>
                      </span>
                    ))}
                </h1>

                <p className="hero-fade mt-6 max-w-lg text-sm font-light leading-relaxed text-ivory/60 sm:text-[0.95rem]">
                  Independent Hospitality Assessments, Operational Management,
                  Professional Training & Performance Improvement.
                </p>

                <div className="hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href="#contact"
                    className="btn-gold group !py-3 !px-7 !text-xs !rounded-full shadow-lg"
                  >
                    <span>Request an Assessment</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#services"
                    className="btn-ghost group !py-3 !px-6 !text-xs"
                  >
                    Explore Services
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↘
                    </span>
                  </a>
                </div>
              </div>

              {/* Arched image + seal */}
              <div className="relative hidden justify-center lg:flex">
                <div className="relative w-full max-w-[320px] xl:max-w-[300px]">
                  <div
                    className="absolute -inset-3 arch-mask border border-gold/25"
                    aria-hidden="true"
                  />
                  <div className="hero-arch relative aspect-[3/3.8] w-full overflow-hidden arch-mask border border-gold/40">
                    <div className="hero-img-overlay absolute inset-0 z-10 bg-paper" />
                    <Image
                      src="/images/hero2.png"
                      alt="A guest enjoying a meal in warm, considered restaurant lighting"
                      fill
                      priority
                      sizes="(min-width: 1024px) 28vw, 60vw"
                      className="hero-person-img object-cover will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/15" />
                    <div className="absolute inset-x-0 bottom-0 p-5 pl-14">
                      <p className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-gold-light/90">
                        The standard behind the experience
                      </p>
                      <p className="mt-1 font-display text-sm italic text-ivory/80">
                        Warmth, measured.
                      </p>
                    </div>
                  </div>

                  {/* Rotating seal */}
                  <div className="absolute -bottom-6 -left-8 h-22 w-22 rounded-full border border-gold/30 bg-ink/85 backdrop-blur-md sm:h-26 sm:w-26">
                    <svg
                      viewBox="0 0 200 200"
                      className="h-full w-full animate-[spin_28s_linear_infinite]"
                      aria-hidden="true"
                    >
                      <defs>
                        <path
                          id="shm-seal"
                          d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                        />
                      </defs>
                      <text
                        fill="#C9A25B"
                        fontSize="11.5"
                        letterSpacing="4.6"
                        fontFamily="JetBrains Mono, monospace"
                      >
                        <textPath href="#shm-seal">
                          ASSESS · TRAIN · IMPROVE · ELEVATE ·
                        </textPath>
                      </text>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-base italic text-gold-light">
                        SHM
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Marquee strip: exact placement, size, and styling matching the snippet ── */}
        <div className="relative w-full z-20 py-8 sm:py-8 border-t border-gold/20 bg-[#FBFAF7]/95 backdrop-blur-sm overflow-hidden select-none">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
            <div
              className="brand-marquee-track flex flex-nowrap items-center"
              style={{
                animation: "infinite-marquee 22s linear infinite",
              }}
            >
              {[0, 1].map((set) => (
                <div key={set} className="flex items-center shrink-0">
                  {BRANDS.map((brand) => (
                    <div
                      key={`${set}-${brand.src}`}
                      className="h-24 sm:h-[7.2rem] w-72 sm:w-[21.6rem] flex items-center justify-center shrink-0 px-8 sm:px-10"
                    >
                      <img
                        src={brand.src}
                        alt={brand.alt}
                        className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
                        loading={set === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-range spacer — provides the exact 1 screen of scroll distance
          so About slides up over Hero while Hero remains pinned at sticky top-0 */}
      <div className="h-[100svh] pointer-events-none" aria-hidden="true" />
    </header>
  );
};
