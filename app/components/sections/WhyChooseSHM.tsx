"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseSHM: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const items = [
    { title: "Understand Your Business", desc: "Discover what guests actually experience at every touchpoint", img: "/images/why-understand-business.webp", alt: "Overhead view of guests sharing plates across a busy restaurant table" },
    { title: "Improve Guest Satisfaction", desc: "Identify service gaps and build stronger hospitality habits", img: "/images/why-guest-satisfaction.webp", alt: "Guest enjoying a meal in warm restaurant lighting" },
    { title: "Build Team Confidence", desc: "Turn observations into practical coaching and SOPs", img: "/images/why-team-confidence.webp", alt: "Two colleagues reviewing service notes together at a laptop" },
    { title: "Improve Operations", desc: "Reduce inconsistencies in service, kitchen and inventory routines", img: "/images/why-operations.webp", alt: "Café counter where staff take a card payment at the till" },
    { title: "Strengthen Commerciality", desc: "Review menu margins, sales opportunities and avoidable costs", img: "/images/why-commerciality.webp", alt: "Calculator, invoices and receipts laid out for a margin review" },
    { title: "Track Progress", desc: "Use baseline KPIs and reassessment to verify improvements", img: "/images/why-track-progress.webp", alt: "Laptop showing a performance dashboard with charts" },
  ];

  useEffect(() => {
    // `prefers-reduced-motion` people get the static stack — no scrub.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    if (!section) return;

    let timer: number | undefined;

    const ctx = gsap.context(() => {
      // Small delay to ensure DOM is fully ready
      timer = window.setTimeout(() => {
        ScrollTrigger.refresh();

        const cards = Array.from(section.querySelectorAll(".card-item"));

        cards.forEach((card, i) => {
          const nextCard = cards[i + 1];
          if (!nextCard) return;

          const cardInner = card.querySelector(".card-inner");
          if (!cardInner) return;

          gsap.to(cardInner, {
            scale: 0.9,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top 10vh",
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
    <section ref={sectionRef} className="stack-section stack-section--light">
      <div className="text-center mb-20 px-6">
        <div className="text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">
          Why SHMG
        </div>
        <h2 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-[#12281A]">
          Why Choose SHMG
        </h2>
      </div>

      <div className="stack-container">
        {items.map((item, idx) => (
          <div key={idx} className="card-item">
            <div className="card-inner">
              <div className="card-content">
                <div>
                  <div className="text-5xl font-heading mb-2 text-[#B89856]/40 font-light tracking-tighter">
                    0{idx + 1}
                  </div>
                  <h3 className="text-3xl font-heading font-medium tracking-tight text-[#12281A] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs mt-4 uppercase tracking-widest text-[#B89856]">
                    Key Benefit
                  </p>
                </div>
                <div className="text-stone-500 font-light text-lg">
                  {item.desc}
                </div>
              </div>
              <div className="card-img-wrap">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 769px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
