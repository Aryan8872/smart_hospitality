"use client";

import React from "react";
import Image from "next/image";

/**
 * About — SMART HOSPITALITY MANAGEMENT GROUP
 * 
 * Verbatim text structure:
 * - Header: SMART HOSPITALITY MANAGEMENT GROUP
 * - Tagline: Global Standards. Local Hospitality. Measurable Excellence.
 * - Mission: Elevating Service. Empowering People. Improving Performance.
 * - Vision: To Set the Benchmark for Hospitality Excellence in Nepal and Beyond.
 * - Brand Promise: We Assess. We Train. We Improve. We Elevate.
 * 
 * GSAP split-animate word reveal active across heading, tagline, mission, vision, and promise.
 */
export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full h-[400px] sm:h-[520px] md:h-[640px] bg-stone-100 overflow-hidden border border-black/10">
            <Image
              src="/images/about-hospitality-interior.webp"
              alt="Warmly lit restaurant dining room with timber tables, pendant lighting and pristine service layout"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
          {/* Framed metric block */}
          <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#FBFAF7] p-6 sm:p-8 hidden md:block border border-black/10">
            <div className="text-3xl sm:text-4xl font-heading text-[#B89856] mb-1 font-light tracking-tighter">
              1,000+
            </div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#12281A]">
              Audit Points
              <br />
              Framework
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="order-1 lg:order-2">
          {/* Section eyebrow */}
          <span className="block text-[#B89856] text-xs uppercase tracking-[0.25em] font-medium mb-4">
            About Us
          </span>

          {/* Header */}
          <h2 className="font-heading split-animate text-3xl sm:text-4xl md:text-5xl leading-[1.08] font-light tracking-tighter text-[#12281A] mb-4">
            SMART HOSPITALITY <br />
            <span className="text-[#1E4D33] font-normal">MANAGEMENT GROUP</span>
          </h2>

          {/* Tagline */}
          <p className="split-animate text-base sm:text-lg font-medium text-[#B89856] tracking-tight mb-8">
            Global Standards. Local Hospitality. Measurable Excellence.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-black/10 mb-8" />

          {/* Mission & Vision stack */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="border-l-2 border-[#1E4D33] pl-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#1E4D33] font-semibold block mb-1">
                Our Mission
              </span>
              <h3 className="split-animate text-base sm:text-lg font-heading font-medium text-[#12281A] mb-2 tracking-tight">
                Elevating Service. Empowering People. Improving Performance.
              </h3>
              <p className="split-animate text-xs sm:text-sm text-black/70 leading-relaxed font-light mb-2">
                At Smart Hospitality Management Group (SHMG), our mission is to elevate the quality of hospitality across hotels, resorts, restaurants, and experiential tourism destinations.
              </p>
              <p className="split-animate text-xs sm:text-sm text-black/70 leading-relaxed font-light">
                We bridge the gap between global hospitality benchmarks and authentic local experiences through independent quality assessments, structured training, operational audits, and performance advisory services. By developing people, refining standards, and optimizing operations, we empower hospitality businesses to deliver exceptional guest experiences and achieve sustainable profitability.
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-2 border-[#B89856] pl-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#B89856] font-semibold block mb-1">
                Our Vision
              </span>
              <h3 className="split-animate text-base sm:text-lg font-heading font-medium text-[#12281A] mb-2 tracking-tight">
                To Set the Benchmark for Hospitality Excellence in Nepal and Beyond.
              </h3>
              <p className="split-animate text-xs sm:text-sm text-black/70 leading-relaxed font-light mb-2">
                Our vision is to become the leading independent hospitality advisory and standards organization in Nepal and a recognized voice for service excellence in the region.
              </p>
              <p className="split-animate text-xs sm:text-sm text-black/70 leading-relaxed font-light">
                We aspire to build an ecosystem where properties of all sizes—from boutique lodges to luxury resorts—operate with international discipline, culinary innovation, professional management, and genuine warmth. Through data-driven insights and continuous learning, we aim to transform hospitality into a powerful driver of economic growth and national pride.
              </p>
            </div>

            {/* Brand Promise */}
            <div className="bg-[#FBFAF7] p-6 border border-black/10">
              <span className="text-xs uppercase tracking-widest font-mono text-black/40 font-medium block mb-2">
                Brand Promise
              </span>
              <p className="split-animate font-heading text-lg sm:text-xl font-light tracking-tight text-[#1E4D33]">
                &ldquo;We Assess. We Train. We Improve. We Elevate.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
