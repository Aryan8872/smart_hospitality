"use client";

import React from "react";

export const Services: React.FC = () => {
  const services = [
    { icon: "🔍", tag: "ASSESS", title: "Guest Service Assessments", desc: "Independent mystery visits, reservation and arrival checks, service quality, billing accuracy and corrective-action reporting." },
    { icon: "⚙️", tag: "OPERATE", title: "Restaurant Operations Audit", desc: "Review SOPs, shift handovers, hygiene, POS controls, inventory, complaints and daily management systems." },
    { icon: "🛡️", tag: "PROTECT", title: "Kitchen & Food Safety", desc: "Evaluate receiving, storage, allergen communication, sanitation, recipe consistency and food quality." },
    { icon: "📈", tag: "GROW", title: "Menu & Profit Improvement", desc: "Menu engineering, food and beverage costs, waste, average check, table turnover and contribution margins." },
    { icon: "🎓", tag: "TRAIN", title: "SHM Academy", desc: "Frontline service, café and beverage skills, complaint recovery, supervisor coaching and train-the-trainer programs." },
    { icon: "🌐", tag: "CONNECT", title: "Digital Revenue & Reputation", desc: "Google Business Profile, local SEO, review management, direct inquiries and responsible guest engagement." },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FBFAF7]" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mb-16">
          <span className="block text-[#42A85D] text-xs uppercase tracking-[0.25em] font-medium mb-4">Our Services</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6 leading-[1.05]">
            From Guest Experience to Business Results
          </h2>
          <p className="text-sm md:text-base text-black/60">Services designed for independent hospitality operators</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-10 border border-black/5 hover:border-[#42A85D]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 flex items-center justify-center bg-[#FBFAF7] text-black mb-8 group-hover:bg-[#42A85D] group-hover:text-white transition-colors duration-500">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <span className="block text-[#42A85D] text-xs uppercase tracking-widest font-medium mb-3">{service.tag}</span>
              <h3 className="text-xl md:text-2xl font-heading font-light tracking-tight text-black mb-4">{service.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
