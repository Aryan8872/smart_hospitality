"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Buildings2OutlineIcon,
  ChefHatOutlineIcon,
  CupHotOutlineIcon,
  RocketOutlineIcon,
  ShopOutlineIcon,
  WineglassOutlineIcon,
} from "@solar-icons/react";

gsap.registerPlugin(ScrollTrigger);

const SEGMENTS = [
  {
    icon: ChefHatOutlineIcon,
    title: "Independent Restaurants",
    desc: "Service standards, kitchen coordination, menu performance and repeat business.",
  },
  {
    icon: CupHotOutlineIcon,
    title: "Cafés & Bakeries",
    desc: "Speed, product consistency, customer care and takeaway operations.",
  },
  {
    icon: WineglassOutlineIcon,
    title: "Bars & Lounges",
    desc: "Beverage service, stock accountability and guest experience.",
  },
  {
    icon: ShopOutlineIcon,
    title: "Multi-Outlet Groups",
    desc: "Consistent SOPs, outlet comparisons and management reporting.",
  },
  {
    icon: Buildings2OutlineIcon,
    title: "Boutique Hotels & Resorts",
    desc: "Tailored hospitality assessments as a secondary service offering.",
  },
  {
    icon: RocketOutlineIcon,
    title: "Pre-Opening Businesses",
    desc: "Concept readiness, staff training, operating standards and launch support.",
  },
];

/** Progress spent opening the seed; the rest of the pin holds the open stage. */
const OPEN_THROUGH = 0.48;

/**
 * Who we serve.
 *
 * Paperdrops-style clip window: a navy seed beside the wordmark grows into
 * a full-viewport stage. The sector grid stays full-size; only the clip
 * expands. The section remains sticky so Why Choose SHM still slides over it.
 */
export const WhoWeServe: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const seedRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const section = sectionRef.current;
    const seed = seedRef.current;
    const panel = panelRef.current;
    const world = worldRef.current;
    if (!root || !section || !seed || !panel || !world) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      panel.classList.add("is-ready");
      return;
    }

    // Seed offset is measured relative to the sticky stage and cached so
    // mid-animation layout thrash (fonts, images, overlays) cannot drift the window.
    let from = { x: 0, y: 0, w: 0, h: 0 };
    let stage = { w: 0, h: 0 };

    const measure = () => {
      const stageBox = section.getBoundingClientRect();
      const seedBox = seed.getBoundingClientRect();
      stage = { w: stageBox.width, h: stageBox.height };
      from = {
        x: seedBox.left - stageBox.left,
        y: seedBox.top - stageBox.top,
        w: seedBox.width,
        h: seedBox.height,
      };
    };

    const apply = (progress: number) => {
      if (stage.w < 1 || from.w < 1) return;

      const p = Math.min(1, Math.max(0, progress));
      const x = from.x * (1 - p);
      const y = from.y * (1 - p);
      const w = from.w + (stage.w - from.w) * p;
      const h = from.h + (stage.h - from.h) * p;

      panel.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      panel.style.width = `${w}px`;
      panel.style.height = `${h}px`;
      world.style.width = `${stage.w}px`;
      world.style.height = `${stage.h}px`;
      world.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    };

    const openProgress = (pinProgress: number) =>
      Math.min(1, Math.max(0, pinProgress) / OPEN_THROUGH);

    panel.classList.add("is-live");
    measure();
    apply(0);
    panel.classList.add("is-ready");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 1.55)}`,
        scrub: true,
        invalidateOnRefresh: true,
        onRefresh: (self) => {
          measure();
          apply(openProgress(self.progress));
        },
        onUpdate: (self) => apply(openProgress(self.progress)),
      });
    }, root);

    const onResize = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
      panel.classList.remove("is-live", "is-ready");
      panel.style.transform = "";
      panel.style.width = "";
      panel.style.height = "";
      world.style.transform = "";
      world.style.width = "";
      world.style.height = "";
    };
  }, []);

  return (
    <div ref={rootRef} className="relative z-10" style={{ marginBottom: "-100svh" }}>
      <section
        ref={sectionRef}
        id="who-we-serve"
        className="sticky top-0 h-svh overflow-hidden bg-paper text-navy"
      >
        <div className="relative z-0 flex h-full items-center px-6 sm:px-10">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-12 lg:gap-16">
            <div ref={seedRef} className="serve-seed" aria-hidden="true" />
            <div className="min-w-0">
              <h2 className="what-i-do-title font-heading text-[clamp(2.4rem,6.2vw,5.4rem)] font-black uppercase leading-none text-navy">
                {"Who We Serve /".split("").map((char, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom">
                    <span className="inline-block will-change-transform">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </h2>
              <p className="mt-5 max-w-[36rem] font-display text-lg font-light leading-snug text-navy/75 sm:mt-6 sm:text-2xl">
                A practical performance partner for every table.
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                ( Six sectors )
              </p>
            </div>
          </div>
        </div>

        <div ref={panelRef} className="serve-panel" aria-label="Hospitality sectors we serve">
          <div ref={worldRef} className="serve-world">
            <div className="flex h-full flex-col px-4 pb-4 pt-20 sm:px-8 sm:pb-7 sm:pt-28 lg:px-12">
              <div className="mb-3 flex shrink-0 flex-col gap-2 border-b border-gold/20 pb-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                    Core sectors
                  </p>
                  <p className="mt-1.5 font-heading text-[clamp(1.45rem,3vw,2.8rem)] font-black uppercase leading-none text-ivory sm:mt-2">
                    Who We Serve
                  </p>
                </div>
                <p className="max-w-[36rem] text-xs font-light leading-relaxed text-ivory/60 sm:text-sm">
                  Independent quality assessments, practical training and operational improvement across dining rooms, cafés, bars and pre-opening teams.
                </p>
              </div>

              <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-px bg-gold/20 lg:grid-cols-3 lg:grid-rows-2">
                {SEGMENTS.map((segment, index) => {
                  const Icon = segment.icon;
                  return (
                    <article
                      key={segment.title}
                      className="serve-segment group relative flex flex-col justify-between overflow-hidden p-3 sm:p-5 lg:p-6"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-light sm:h-11 sm:w-11">
                          <Icon size={18} strokeWidth={0.9} />
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.22em] text-gold/55">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-2 sm:mt-3">
                        <h3 className="font-display text-[0.86rem] font-medium leading-tight text-ivory sm:text-[1.2rem] lg:text-[1.35rem]">
                          {segment.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[0.65rem] font-light leading-relaxed text-ivory/55 sm:mt-1.5 sm:line-clamp-3 sm:text-xs lg:text-[0.8rem]">
                          {segment.desc}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra scroll while sticky: seed opens, stage holds, then Why Choose
          covers the final 100svh via the root's negative margin. */}
      <div className="h-[220svh]" aria-hidden="true" />
    </div>
  );
};
