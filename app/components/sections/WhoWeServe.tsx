"use client";

import React from "react";

export const WhoWeServe: React.FC = () => {
  const items = [
    { icon: "🍽️", title: "Independent Restaurants", desc: "Service standards, kitchen coordination, menu performance and repeat business" },
    { icon: "☕", title: "Cafés & Bakeries", desc: "Speed, product consistency, customer care and takeaway operations" },
    { icon: "🍸", title: "Bars & Lounges", desc: "Beverage service, stock accountability and guest experience" },
    { icon: "🏪", title: "Multi-Outlet Groups", desc: "Consistent SOPs, outlet comparisons and management reporting" },
    { icon: "🏨", title: "Boutique Hotels & Resorts", desc: "Tailored hospitality assessments as a secondary service offering" },
    { icon: "🚀", title: "Pre-Opening Businesses", desc: "Concept readiness, staff training, operating standards and launch support" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white" id="who-we-serve">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Who We Serve</span>
          <h2 className="font-heading split-animate text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6">A Practical Performance Partner</h2>
          <p className="text-sm md:text-base text-stone-500 split-animate">For independent food-service businesses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
              <div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-medium tracking-tight text-stone-900 mb-4">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
