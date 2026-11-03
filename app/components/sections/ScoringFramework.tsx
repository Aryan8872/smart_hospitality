"use client";

import React from "react";

const WEIGHTS = [
  { pts: 250, label: "Guest Service & Emotional Experience" },
  { pts: 150, label: "Operations & SOP Compliance" },
  { pts: 100, label: "Product & Facility Quality" },
  { pts: 150, label: "Revenue & Sales Performance" },
  { pts: 150, label: "Cost & Profit Controls" },
  { pts: 100, label: "People & Leadership" },
  { pts: 60, label: "Digital & Reputation" },
  { pts: 40, label: "Sustainability, Safety & Local Value" },
];

const MAX_POINTS = 250;

/**
 * Scoring Framework — the 1,000-point system as a data composition.
 * A gold emblem anchors the total; eight weighted bars carry the detail.
 */
export const ScoringFramework: React.FC = () => {
  return (
    <section
      id="scoring"
      className="relative overflow-hidden bg-navy py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-royal/25 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/[0.07] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="mb-14">
          <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-ivory leading-none">
            {"Scoring System /".split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold col-span-12 md:col-span-4">
              ( Evaluation Rubric )
            </p>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <p className="font-display text-2xl sm:text-3xl font-light text-ivory leading-snug">
                Rigorous Quantitative Metrics for Hospitality Excellence.
              </p>
              <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed max-w-[55ch]">
                Every assessment is weighted to reflect what guests feel first and what the business needs to sustain long-term operational excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Total emblem */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative">
              <div
                className="absolute inset-[-2.5rem] rounded-full border border-gold/10"
                aria-hidden="true"
              />
              <div
                className="relative flex h-64 w-64 items-center justify-center rounded-full p-[2px] sm:h-80 sm:w-80"
                style={{
                  background:
                    "conic-gradient(from -90deg, #96743a 0deg, #c9a25b 160deg, #e8d4a4 300deg, rgba(201,162,91,0.15) 300deg 360deg)",
                }}
              >
                <div className="absolute inset-[9px] rounded-full bg-navy" />
                <div className="absolute inset-[9px] rounded-full border border-gold/15" />
                <div className="relative text-center">
                  <div className="font-mono text-[9px] uppercase tracking-[0.32em] text-gold/70">
                    Total framework
                  </div>
                  <div className="mt-2 font-display text-[5.2rem] font-light leading-none text-ivory sm:text-[6.4rem]">
                    1,000
                  </div>
                  <div className="mt-2 font-display text-lg italic text-gold-light">
                    points
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-gold/40" />
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ivory/35">
                  8 weighted categories
                </span>
                <span className="h-px w-10 bg-gold/40" />
              </div>
            </div>
          </div>

          {/* Weighted bars */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {WEIGHTS.map((item, index) => (
                <div key={item.label} className="reveal-up" data-reveal>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] tracking-[0.18em] text-gold/50">
                        0{index + 1}
                      </span>
                      <span className="font-display text-base font-light text-ivory/85 sm:text-lg">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-gold-light">
                      {item.pts}
                    </span>
                  </div>
                  <div className="score-bar mt-3">
                    <span
                      style={{ width: `${(item.pts / MAX_POINTS) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};
