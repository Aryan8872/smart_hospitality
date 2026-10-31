"use client";

import React from "react";

export const Academy: React.FC = () => {
  const courses = [
    { icon: "🎯", title: "Service Foundations", desc: "Guest welcome, reservations, table service and farewell" },
    { icon: "🤝", title: "Guest Recovery", desc: "Listening, empathy, complaint ownership and follow-up" },
    { icon: "🍽️", title: "Food & Beverage Skills", desc: "Menu knowledge, café service, quality and thoughtful recommendations" },
    { icon: "👨‍🍳", title: "Kitchen Coordination", desc: "Food safety awareness, service timing and teamwork" },
    { icon: "💰", title: "Restaurant Profitability", desc: "Recipe costing, menu engineering, inventory and waste" },
    { icon: "👥", title: "Leadership & Coaching", desc: "Supervisory standards, training and performance conversations" },
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100" id="academy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Academy</span>
          <h2 className="font-heading split-animate text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6">SHM Academy</h2>
          <p className="text-sm md:text-base text-stone-500 split-animate">Building service confidence and stronger leadership through practical training</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((item, idx) => (
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
