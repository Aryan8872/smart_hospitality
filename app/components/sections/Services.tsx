"use client";

import React from "react";
import Image from "next/image";

/** Shared hover treatment — mirrors the .card-img zoom from the AURUM reference. */
const IMG_CLASS =
  "object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]";

export const Services: React.FC = () => {
  const services = [
    { num: "01", title: "Guest Service Assessments", desc: "Independent mystery visits, reservation and arrival checks, service quality, billing accuracy and corrective-action reporting.", tags: ["Assess", "Guest Experience"], img: "/images/service-guest-assessments.webp", alt: "Dining room laid for service with pressed napkins, glassware and set tables" },
    { num: "02", title: "Restaurant Operations Audit", desc: "Review SOPs, shift handovers, hygiene, POS controls, inventory, complaints and daily management systems.", tags: ["Operations", "Audit"], img: "/images/service-operations-audit.webp", alt: "Hands writing notes on an audit checklist during a restaurant operations review" },
    { num: "03", title: "Kitchen & Food Safety", desc: "Evaluate receiving, storage, allergen communication, sanitation, recipe consistency and food quality.", tags: ["Safety", "Kitchen"], img: "/images/service-kitchen-food-safety.webp", alt: "Fresh vegetables, eggs, herbs and a knife arranged on a wooden chopping board" },
    { num: "04", title: "Menu & Profit Improvement", desc: "Menu engineering, food and beverage costs, waste, average check, table turnover and contribution margins.", tags: ["Profit", "Menu"], img: "/images/service-menu-profit.webp", alt: "Three plated dishes photographed from above during a menu review" },
    { num: "05", title: "SHMG Academy", desc: "Frontline service, café and beverage skills, complaint recovery, supervisor coaching and train-the-trainer programs.", tags: ["Training", "Academy"], img: "/images/service-academy-training.webp", alt: "Trainer leading a hospitality workshop beside a whiteboard of sticky notes" },
    { num: "06", title: "Digital Revenue & Reputation", desc: "Google Business Profile, local SEO, review management, direct inquiries and responsible guest engagement.", tags: ["Digital", "Reputation"], img: "/images/service-digital-reputation.webp", alt: "Laptop displaying a business performance and revenue dashboard" },
  ];

  return (
    <section className="relative pt-24 sm:pt-36 pb-8" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-heading split-animate text-4xl sm:text-5xl font-light tracking-tighter">
            Our{" "}
            <em className="font-serif italic font-normal">Services</em>
          </h2>
          <p className="hidden sm:block text-sm text-black/40">6 Core Offerings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-6 sm:mb-10">
        <div className="group relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] shadow-2xl shadow-black/15 bg-[#1E4D33]">
          <Image
            src={services[0].img}
            alt={services[0].alt}
            fill
            sizes="(min-width: 1280px) 1200px, 92vw"
            className={IMG_CLASS}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between w-full gap-4">
            <div>
              <p className="text-xs text-[#42A85D] font-medium mb-2">01</p>
              <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-tighter text-white">{services[0].title}</h3>
              <p className="text-base text-white/80 mt-2 max-w-md">{services[0].desc}</p>
            </div>
            <div className="flex gap-2 text-xs text-white/80">
              {services[0].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-6 sm:mb-10">
        <div className="group lg:col-span-7 lg:-mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15 bg-[#2A6647]">
          <Image
            src={services[1].img}
            alt={services[1].alt}
            fill
            sizes="(min-width: 1024px) 56vw, 92vw"
            className={IMG_CLASS}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="text-xs text-[#42A85D] font-medium mb-2">02</p>
            <h3 className="font-heading text-2xl font-light tracking-tighter text-white">{services[1].title}</h3>
            <p className="text-base text-white/80 mt-2 max-w-sm">{services[1].desc}</p>
            <div className="flex gap-2 text-xs text-white/80 mt-4">
              {services[1].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
        <div className="group lg:col-span-5 lg:mt-24 relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto shadow-2xl shadow-black/15 bg-[#1E4D33]">
          <Image
            src={services[2].img}
            alt={services[2].alt}
            fill
            sizes="(min-width: 1024px) 40vw, 92vw"
            className={IMG_CLASS}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="text-xs text-[#42A85D] font-medium mb-2">03</p>
            <h3 className="font-heading text-2xl font-light tracking-tighter text-white">{services[2].title}</h3>
            <p className="text-base text-white/80 mt-2 max-w-sm">{services[2].desc}</p>
            <div className="flex gap-2 text-xs text-white/80 mt-4">
              {services[2].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-6 sm:mb-10">
        <div className="group lg:col-span-7 lg:-mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15 bg-[#1E4D33]">
          <Image
            src={services[4].img}
            alt={services[4].alt}
            fill
            sizes="(min-width: 1024px) 56vw, 92vw"
            className={IMG_CLASS}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="text-xs text-[#42A85D] font-medium mb-2">05</p>
            <h3 className="font-heading text-2xl font-light tracking-tighter text-white">{services[4].title}</h3>
            <p className="text-base text-white/80 mt-2 max-w-sm">{services[4].desc}</p>
            <div className="flex gap-2 text-xs text-white/80 mt-4">
              {services[4].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
        <div className="group lg:col-span-5 lg:mt-24 relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto shadow-2xl shadow-black/15 bg-[#2A6647]">
          <Image
            src={services[5].img}
            alt={services[5].alt}
            fill
            sizes="(min-width: 1024px) 40vw, 92vw"
            className={IMG_CLASS}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <p className="text-xs text-[#42A85D] font-medium mb-2">06</p>
            <h3 className="font-heading text-2xl font-light tracking-tighter text-white">{services[5].title}</h3>
            <p className="text-base text-white/80 mt-2 max-w-sm">{services[5].desc}</p>
            <div className="flex gap-2 text-xs text-white/80 mt-4">
              {services[5].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden aspect-[16/12] sm:aspect-[21/9] mb-6 sm:mb-10">
        <Image
          src={services[3].img}
          alt={services[3].alt}
          fill
          sizes="100vw"
          className={IMG_CLASS}
        />
        <div className="absolute inset-0 bg-[#2A6647]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-8 sm:pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs text-[#42A85D] font-medium mb-2">04</p>
              <h3 className="font-heading text-2xl sm:text-3xl font-light tracking-tighter text-white">{services[3].title}</h3>
              <p className="text-base text-white/80 mt-2 max-w-md">{services[3].desc}</p>
            </div>
            <div className="flex gap-2 text-xs text-white/80">
              {services[3].tags.map((tag) => <span key={tag} className="border border-white/20 rounded-full px-3 py-1">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
