"use client";

import React from "react";
import {
  ChefHatOutlineIcon,
  FireOutlineIcon,
  GraphUpOutlineIcon,
  HeartOutlineIcon,
  StarOutlineIcon,
  UsersGroupRoundedOutlineIcon,
} from "@solar-icons/react";

const COURSES = [
  {
    icon: StarOutlineIcon,
    title: "Service Foundations",
    desc: "Guest welcome, reservations, table service and farewell.",
  },
  {
    icon: HeartOutlineIcon,
    title: "Guest Recovery",
    desc: "Listening, empathy, complaint ownership and follow-up.",
  },
  {
    icon: ChefHatOutlineIcon,
    title: "Food & Beverage Skills",
    desc: "Menu knowledge, café service, quality and thoughtful recommendations.",
  },
  {
    icon: FireOutlineIcon,
    title: "Kitchen Coordination",
    desc: "Food safety awareness, service timing and teamwork.",
  },
  {
    icon: GraphUpOutlineIcon,
    title: "Restaurant Profitability",
    desc: "Recipe costing, menu engineering, inventory and waste.",
  },
  {
    icon: UsersGroupRoundedOutlineIcon,
    title: "Leadership & Coaching",
    desc: "Supervisory standards, training and performance conversations.",
  },
];

export const Academy: React.FC = () => {
  return (
    <section
      id="academy"
      className="relative overflow-hidden bg-paper py-24 text-navy md:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/[0.08] blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="mb-16 md:mb-20">
          <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-navy leading-none">
            {"SHM Academy /".split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-deep col-span-12 md:col-span-4">
              ( Capability Development )
            </p>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
                Practical Hospitality Training & Team Mentorship.
              </p>
              <p className="text-sm sm:text-base text-navy/65 font-light leading-relaxed max-w-[55ch]">
                Developing frontline teams through immersive masterclasses, floor simulations, and structured leadership protocols tailored for service resilience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, index) => {
            const Icon = course.icon;
            return (
              <article
                key={course.title}
                className="group relative flex flex-col overflow-hidden bg-paper p-8 transition-colors duration-500 hover:bg-navy sm:p-10"
              >
                <span className="pointer-events-none absolute -right-3 -top-7 font-display text-[6.5rem] font-light leading-none text-navy/[0.04] transition-colors duration-500 group-hover:text-gold/10">
                  0{index + 1}
                </span>

                <div className="relative flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors duration-500 group-hover:border-gold/70 group-hover:bg-gold/10 group-hover:text-gold-light">
                    <Icon size={22} strokeWidth={0.9} />
                  </span>

                  <h3 className="mt-7 font-display text-[1.55rem] font-medium leading-tight text-navy transition-colors duration-500 group-hover:text-ivory">
                    {course.title}
                  </h3>
                  <p className="mt-3 max-w-[19rem] text-[0.82rem] font-light leading-relaxed text-navy/55 transition-colors duration-500 group-hover:text-ivory/55">
                    {course.desc}
                  </p>

                  <span className="mt-auto flex items-center gap-3 pt-7 font-mono text-[9px] uppercase tracking-[0.24em] text-navy/35 transition-colors duration-500 group-hover:text-gold/80">
                    <span className="h-px w-6 bg-current opacity-50 transition-all duration-500 group-hover:w-10" />
                    Course outline
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};
