"use client";

import React from "react";

/**
 * Hero section with AURUM-style line-by-line reveal animation.
 *
 * Structure (per line):
 *   <span class="block overflow-hidden">           ← clip mask
 *     <span class="hero-line-inner block translate-y-full"> ← starts hidden below
 *       Better Service.
 *     </span>
 *   </span>
 *
 * The useAnimations hook drives: gsap.to(".hero-line-inner", {
 *   y: 0, stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 0.3
 * })
 */
export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background ambient shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-stone-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-800/10 rounded-full blur-3xl" />
      </div>

      {/* Floating glassmorphic orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[8%] w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-sm border border-white/20 shadow-[inset_0_0_60px_rgba(255,255,255,0.25)] animate-[drift1_14s_ease-in-out_infinite]" />
        <div className="absolute top-[28%] right-[10%] w-28 h-28 sm:w-44 sm:h-44 rounded-[40%] bg-gradient-to-tl from-[#42A85D]/25 to-white/10 backdrop-blur-md border border-white/15 shadow-[inset_0_0_40px_rgba(66,168,93,0.3)] animate-[drift2_19s_ease-in-out_infinite]" />
        <div className="absolute top-[52%] left-[38%] w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-white/20 to-transparent backdrop-blur-[2px] border border-white/25 animate-[drift3_24s_ease-in-out_infinite]" />
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FBFAF7] via-[#FBFAF7]/55 to-[#FBFAF7]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF7]/60 via-transparent to-[#FBFAF7]/30" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 pb-[24vw] sm:pb-[20vw] lg:pb-[17vw] pt-40">
          <div className="max-w-2xl">
            {/* Subtitle — fades in via .hero-fade */}
            <p className="text-xs uppercase tracking-[0.25em] text-[#1E4D33] font-medium mb-8 opacity-0 hero-fade">
              Restaurant • Café • Bar Excellence
            </p>

            {/* ── HERO TITLE ──
                Each line is wrapped in overflow:hidden mask.
                The inner span starts at translate-y-full (100% below).
                useAnimations drives them to y:0 with stagger.
            */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-[#12281A] font-light tracking-tighter">
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <span className="hero-line-inner">
                  Better Service.
                </span>
              </span>
              {/* Line 2 */}
              <span className="block overflow-hidden">
                <span className="hero-line-inner">
                  <em className="font-serif italic font-normal">
                    Smarter Operations.
                  </em>
                </span>
              </span>
              {/* Line 3 */}
              <span className="block overflow-hidden">
                <span className="hero-line-inner">
                  Stronger Business.
                </span>
              </span>
            </h1>

            {/* Sub-tagline — fades in via .hero-fade */}
            <p className="mt-8 text-sm text-black/50 tracking-wide opacity-0 hero-fade">
              / Independent hospitality assessments for Nepal&apos;s
              restaurants, cafés and bars /
            </p>

            {/* CTAs — fade in with hero-fade */}
            <div className="mt-10 flex items-center gap-6 opacity-0 hero-fade">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-[#1E4D33] hover:bg-[#2A6647] active:scale-95 text-white font-medium text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-[#1E4D33]/30 hover:shadow-2xl hover:shadow-[#1E4D33]/40"
              >
                Request Assessment
                <span className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="text-sm text-black/50 hover:text-black transition-colors duration-300 border-b border-black/20 hover:border-black pb-0.5"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant watermark text */}
      <div className="absolute -bottom-[4vw] left-1/2 -translate-x-1/2 w-full z-[5] pointer-events-none overflow-hidden">
        <p
          className="font-heading text-[19.5vw] leading-none text-center text-[#1E4D33]/10 whitespace-nowrap select-none font-light tracking-tighter"
          style={{ WebkitTextStroke: "1px rgba(30, 77, 51, 0.12)" }}
        >
          HOSPITALITY
        </p>
      </div>
    </header>
  );
};
