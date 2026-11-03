"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface PillarCardProps {
  number: number;
  roman: string;
  title: string;
  headline: string;
  desc1: string;
  desc2?: string;
  tags: string[];
  shape: string;
  className?: string;
  style?: React.CSSProperties;
}

const PillarCard: React.FC<PillarCardProps> = ({
  number,
  roman,
  title,
  headline,
  desc1,
  desc2,
  tags,
  shape,
  className = "",
  style,
}) => {
  return (
    <div
      className={`px-6 sm:px-10 lg:px-14 py-8 md:py-12 border-t border-navy/15 bg-paper ${className}`}
      style={style}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
        {/* Header: Roman/Number & Title */}
        <div className="lg:col-span-12 flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-mono text-lg sm:text-2xl font-medium text-gold-deep">
              ( 0{number} / {roman} )
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-navy leading-none">
              {title}
            </h3>
          </div>
          <div
            className="hidden lg:block w-20 h-20 fill-gold/25 animate-[spin_12s_linear_infinite] will-change-transform"
            dangerouslySetInnerHTML={{ __html: shape }}
          />
        </div>

        {/* Content: Headline, Description & Tags */}
        <div className="lg:col-start-4 lg:col-span-9 flex flex-col gap-6">
          <h4 className="font-display text-xl sm:text-2xl text-gold-deep font-light leading-snug">
            {headline}
          </h4>

          <div className="space-y-3 max-w-[55ch] text-base sm:text-lg text-navy/75 font-light leading-relaxed">
            <p>{desc1}</p>
            {desc2 && <p>{desc2}</p>}
          </div>

          <div className="flex flex-col mt-4">
            {tags.map((tag, i) => (
              <div
                key={i}
                className={`flex gap-6 py-4 items-center ${
                  i === 1 ? "border-y border-navy/15" : ""
                }`}
              >
                <span className="font-mono text-sm sm:text-base text-gold-deep">
                  0{i + 1}
                </span>
                <span className="font-heading text-lg sm:text-xl font-medium text-navy">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      roman: "I",
      title: "Our Mission",
      headline: "Elevating Service. Empowering People. Improving Performance.",
      desc1:
        "To transform hospitality businesses through independent quality assessments, professional training, operational excellence, and continuous improvement.",
      desc2:
        "We empower restaurants, cafés, hotels, and resorts to deliver exceptional guest experiences, develop confident teams, and achieve sustainable growth.",
      tags: [
        "Quality Mystery Assessments",
        "Staff Training & Empowerment",
        "Operational Excellence & SOPs",
      ],
      shape: `<svg viewBox="0 0 200 200"><path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/></svg>`,
    },
    {
      roman: "II",
      title: "Our Vision",
      headline: "To Set the Benchmark for Hospitality Excellence in Nepal and Beyond.",
      desc1:
        "To become Nepal's most trusted hospitality quality and performance management partner and a recognized benchmark for service excellence across South Asia.",
      desc2:
        "Where international standards meet authentic local hospitality, creating lasting guest value and long-term business profitability.",
      tags: [
        "National Quality Benchmark",
        "South Asian Hospitality Recognition",
        "Sustainable Industry Elevation",
      ],
      shape: `<svg viewBox="0 0 200 200"><path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" /></svg>`,
    },
    {
      roman: "III",
      title: "Brand Promise",
      headline: "We Assess. We Train. We Improve. We Elevate.",
      desc1:
        "Our promise is simple yet transformative: thorough, objective assessments followed by hands-on team coaching and measurable commercial improvement.",
      desc2:
        "Every touchpoint on the floor is accounted for, converting raw operational insights into guest satisfaction and bottom-line stability.",
      tags: [
        "Objective 1,000-Point Audit",
        "Actionable Coaching Playbooks",
        "Continuous P&L Impact",
      ],
      shape: `<svg viewBox="0 0 200 200"><path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" /></svg>`,
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-20 rounded-t-[2.5rem] bg-paper pt-24 pb-20 text-navy shadow-[0_-35px_80px_rgba(4,10,20,0.85)]"
    >
      {/* Top Header layout inspired by Portfolio What I Do */}
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 mb-20">
        <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-navy leading-none">
          {"About SHMG /".split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span className="inline-block will-change-transform">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-deep col-span-12 md:col-span-4">
            ( Advisory Framework )
          </p>
          <div className="col-span-12 md:col-span-8 space-y-4">
            <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
              Global Standards. Local Hospitality. Measurable Excellence.
            </p>
            <p className="text-sm sm:text-base text-navy/65 font-light leading-relaxed max-w-[55ch]">
              Smart Hospitality Management Group (SHMG) is Nepal&apos;s independent hospitality quality advisory, combining guest experience assessments, coaching SOPs, and financial review for hotels, restaurants, and resorts.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Stacking Cards — structure from WhatIDo */}
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 flex flex-col">
        {pillars.map((pillar, index) => (
          <PillarCard
            key={index}
            number={index + 1}
            roman={pillar.roman}
            title={pillar.title}
            headline={pillar.headline}
            desc1={pillar.desc1}
            desc2={pillar.desc2}
            tags={pillar.tags}
            shape={pillar.shape}
            className="sticky rounded-2xl shadow-xl shadow-navy/5 border border-gold/30 mb-12"
            style={{
              top: `calc(14vh + ${index * 6.5}rem)`,
              zIndex: index + 1,
            }}
          />
        ))}
      </div>
    </section>
  );
};
