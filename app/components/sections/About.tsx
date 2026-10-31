"use client";

import React from "react";
import Image from "next/image";

/**
 * About — "Beyond the Skyline" text composition.
 *
 * Mirrors the AURUM reference exactly:
 *   • heading + supporting paragraph + a meta row, each marked
 *     `split-animate`
 *   • every element splits into per-word masks and rises on scroll
 *   • trigger  top 85%  ·  duration 1s  ·  ease power3.out
 *     stagger 0.02s  ·  toggleActions "play none none reverse"
 *
 * Unlike the reference, the splitter here preserves inline markup, so
 * the accented closing phrase keeps its colour and the meta row keeps
 * its two-column flex layout.
 */
export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] bg-stone-100 rounded-2xl overflow-hidden">
            <Image
              src="/images/about-hospitality-interior.webp"
              alt="Warmly lit restaurant dining room with timber tables, pendant lighting and a service counter"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 sm:-right-10 bg-[#FBFAF7] p-6 sm:p-10 hidden md:block border border-black/10">
            <div className="text-4xl sm:text-5xl font-heading text-[#42A85D] mb-2 font-light tracking-tighter">
              1000+
            </div>
            <div className="text-xs font-bold tracking-widest uppercase text-black">
              Point
              <br />
              Framework
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="order-1 lg:order-2">
          <span className="block text-[#42A85D] text-xs uppercase tracking-[0.25em] font-medium mb-5">
            About
          </span>

          {/* ── Headline: accented closing phrase, same shape as
                 "Beyond the <br> Skyline." — but allowed to wrap
                 naturally instead of a hard <br>, so it holds up
                 from 360px to 1920px. ── */}
          <h2 className="font-heading split-animate text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-light tracking-tighter text-[#12281A] mb-8">
            About Smart Hospitality{" "}
            <span className="text-[#42A85D]">Management.</span>
          </h2>

          <p className="text-base md:text-lg font-light leading-relaxed text-black/60 mb-5 split-animate">
            International hospitality thinking, adapted to local businesses.
            SHMG is a proposed independent Nepal-origin hospitality performance
            advisory combining guest experience assessment, training, cost
            control and owner-focused business improvement.
          </p>

          <p className="text-base md:text-lg font-light leading-relaxed text-black/60 split-animate">
            For independent food-service businesses.
          </p>

          {/* ── Hairline + meta row, as in the reference ── */}
          <div className="h-px w-full bg-black/10 my-8" />

          <div className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-12 text-xs uppercase tracking-[0.2em] text-black/50 split-animate">
            <div>Nepal Origin</div>
            <div>Kathmandu, Nepal</div>
          </div>

          <div className="mt-12 space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-black/10 text-[#42A85D] bg-[#FBFAF7]">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="text-black font-light mb-2 text-base md:text-lg tracking-tight">
                  Our Mission
                </h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  Improve every guest touchpoint through mystery assessments and
                  operational audits; build staff capability; strengthen
                  profitability with menu engineering, cost controls and digital
                  visibility; provide owners with actionable performance
                  insights.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-black/10 text-[#42A85D] bg-[#FBFAF7]">
                <span className="text-2xl">👁</span>
              </div>
              <div>
                <h4 className="text-black font-light mb-2 text-base md:text-lg tracking-tight">
                  Our Vision
                </h4>
                <p className="text-sm text-black/60 leading-relaxed">
                  To become a trusted independent hospitality performance
                  platform originating in Nepal and expanding across South Asia,
                  supporting world-class service, data-driven management and
                  sustainable operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
