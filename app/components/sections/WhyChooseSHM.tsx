"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
  {
    title: "Understand Your Business",
    desc: "Discover what guests actually experience at every touchpoint.",
    img: "/images/why-understand-business.webp",
    alt: "Overhead view of guests sharing plates across a busy restaurant table",
  },
  {
    title: "Improve Guest Satisfaction",
    desc: "Identify service gaps and build stronger hospitality habits.",
    img: "/images/why-guest-satisfaction.webp",
    alt: "Guest enjoying a meal in warm restaurant lighting",
  },
  {
    title: "Build Team Confidence",
    desc: "Turn observations into practical coaching and SOPs.",
    img: "/images/why-team-confidence.webp",
    alt: "Two colleagues reviewing service notes together at a laptop",
  },
  {
    title: "Improve Operations",
    desc: "Reduce inconsistencies in service, kitchen and inventory routines.",
    img: "/images/why-operations.webp",
    alt: "Café counter where staff take a card payment at the till",
  },
  {
    title: "Strengthen Commerciality",
    desc: "Review menu margins, sales opportunities and avoidable costs.",
    img: "/images/service-operations-audit.webp",
    alt: "Assessor writing notes on a printed hospitality review",
  },
  {
    title: "Track Progress",
    desc: "Use baseline KPIs and reassessment to verify improvements.",
    img: "/images/why-track-progress.webp",
    alt: "Laptop showing a performance dashboard with charts",
  },
];

export const WhyChooseSHM: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    let timer: number | undefined;

    const ctx = gsap.context(() => {
      timer = window.setTimeout(() => {
        ScrollTrigger.refresh();

        const cards = Array.from(section.querySelectorAll(".card-item"));

        cards.forEach((card, i) => {
          const nextCard = cards[i + 1];
          if (!nextCard) return;

          const cardInner = card.querySelector(".card-inner");
          if (!cardInner) return;

          gsap.to(cardInner, {
            scale: 0.92,
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top 12vh",
              scrub: true,
            },
          });
        });
      }, 100);
    }, section);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="stack-section relative z-20">
      <div className="mx-auto mb-16 max-w-[1320px] px-6 sm:px-10 md:mb-20">
        <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-ivory leading-none">
          {"Why Choose SHM /".split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className="inline-block will-change-transform">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start border-b border-gold/15 pb-10">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold col-span-12 md:col-span-4">
            ( Measurable Impact )
          </p>
          <div className="col-span-12 md:col-span-8 space-y-4">
            <p className="font-display text-2xl sm:text-3xl font-light text-ivory leading-snug">
              Transforming Service Gaps Into Commercial Strength.
            </p>
            <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed max-w-[55ch]">
              We discover what guests truly experience, translate observations into actionable SOPs, and coach your team toward lasting consistency.
            </p>
          </div>
        </div>
      </div>

      <div className="stack-container">
        {BENEFITS.map((item, idx) => (
          <div
            key={idx}
            className="card-item"
            style={{ zIndex: idx + 1 }}
          >
            <div className="card-inner">
              <div className="card-content">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="font-display text-[5.5rem] font-light leading-none text-gold/30">
                      0{idx + 1}
                    </div>
                    <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.28em] text-gold/60">
                      Outcome
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[clamp(2rem,3vw,2.9rem)] font-light leading-tight tracking-tight text-ivory">
                    {item.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-10 bg-gold/50" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-gold/80">
                      Key benefit
                    </span>
                  </div>
                </div>

                <div>
                  <p className="max-w-sm text-sm font-light leading-relaxed text-ivory/55">
                    {item.desc}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ivory/30">
                      SHMG Standard
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/60">
                      0{idx + 1} / 06
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-img-wrap">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 769px) 45vw, 100vw"
                  className="parallax-img scale-105 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
