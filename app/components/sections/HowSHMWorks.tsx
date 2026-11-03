"use client";

import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand the property, its goals and the guest promise it wants to keep.",
  },
  {
    num: "02",
    title: "Assess",
    desc: "Measure the real experience against the 1,000-point framework.",
  },
  {
    num: "03",
    title: "Diagnose",
    desc: "Prioritise gaps by guest impact, operational risk and commercial value.",
  },
  {
    num: "04",
    title: "Improve",
    desc: "Agree the plan, coach the team and fix the systems behind the symptoms.",
  },
  {
    num: "05",
    title: "Reassess",
    desc: "Verify progress, document the gain and raise the baseline again.",
  },
];

export const HowSHMWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full bg-royal/25 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="mb-16 md:mb-20">
          <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-ivory leading-none">
            {"How SHM Works /".split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold col-span-12 md:col-span-4">
              ( Structured Flow )
            </p>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <p className="font-display text-2xl sm:text-3xl font-light text-ivory leading-snug">
                From Diagnostic Baseline to Measured Elevation.
              </p>
              <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed max-w-[55ch]">
                A five-phase cyclical framework ensuring zero disruption to live operations while systematically upgrading guest experience standards.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          {/* Connecting rule — desktop */}
          <div
            className="absolute left-0 right-0 top-[3.15rem] hidden h-px bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="reveal-up group relative"
                data-reveal
              >
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-[6.3rem] w-[6.3rem] shrink-0 items-center justify-center rounded-full border border-gold/25 bg-ink transition-colors duration-500 group-hover:border-gold/60">
                    <span className="font-display text-[2.4rem] font-light leading-none text-gold-light transition-colors duration-500 group-hover:text-ivory">
                      {step.num}
                    </span>
                  </span>
                  <span className="h-px flex-1 bg-gold/15 lg:hidden" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium text-ivory">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[15rem] text-xs font-light leading-relaxed text-ivory/45">
                  {step.desc}
                </p>

                {index === STEPS.length - 1 && (
                  <span className="mt-5 inline-flex items-center gap-2 border border-gold/40 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-gold-light">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    Continuous
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
};
