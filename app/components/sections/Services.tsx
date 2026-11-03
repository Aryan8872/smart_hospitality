"use client";

import React from "react";
import { ALL_SERVICES } from "@/app/data/servicesData";

/**
 * Services — a sixteen-course menu of advisory work.
 * Editorial two-column index rather than a generic card grid:
 * numbered rows, serif titles, generous rules, gold hover states.
 */
export const Services: React.FC = () => {
  const columns = [ALL_SERVICES.slice(0, 8), ALL_SERVICES.slice(8, 16)];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-royal/20 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-ivory leading-none">
            {"Our Services /".split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start border-b border-gold/15 pb-12">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold col-span-12 md:col-span-4">
              ( Advisory Menu )
            </p>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <p className="font-display text-2xl sm:text-3xl font-light text-ivory leading-snug">
                Precision Quality Audits & Operational Benchmarking.
              </p>
              <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed max-w-[55ch]">
                From mystery guest evaluations to financial menu engineering, our 16-point framework drives repeat visits, higher spend per head, and operational clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Index */}
        <div className="mt-4 grid gap-x-16 lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((srv) => (
                <a
                  key={srv.num}
                  href="#contact"
                  className="group relative flex items-start gap-5 border-b border-gold/10 py-6 transition-colors duration-300 hover:border-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 sm:gap-7 sm:py-7"
                >
                  <span className="absolute inset-y-0 -left-4 -right-4 -z-0 bg-gradient-to-r from-gold/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative z-10 pt-1.5 font-mono text-[10px] tracking-[0.18em] text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    {srv.num}
                  </span>
                  <span className="relative z-10 min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-4">
                      <span className="font-display text-[1.35rem] font-light leading-tight text-ivory/90 transition-colors duration-300 group-hover:text-gold-light sm:text-[1.55rem]">
                        {srv.title}
                      </span>
                      <span
                        className="mt-1 shrink-0 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="mt-2 block max-w-xl text-xs font-light leading-relaxed text-ivory/38 transition-colors duration-300 group-hover:text-ivory/55">
                      {srv.desc}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
};
