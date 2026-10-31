"use client";

import React from "react";

export const HowSHMWorks: React.FC = () => {
  const steps = [
    { num: 1, title: "Discover" },
    { num: 2, title: "Assess" },
    { num: 3, title: "Diagnose" },
    { num: 4, title: "Improve" },
    { num: 5, title: "Reassess", highlight: true },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Process</span>
          <h2 className="font-heading split-animate text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6">How SHMG Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className={`p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center ${item.highlight ? "bg-stone-900 text-white" : "bg-white"}`}>
              <div className={`w-14 h-14 flex items-center justify-center text-2xl font-heading font-bold mb-6 ${item.highlight ? "bg-[#B89856] text-white" : "bg-stone-50 text-stone-900"}`}>{item.num}</div>
              <h3 className={`text-lg font-heading font-medium ${item.highlight ? "text-white" : "text-stone-900"}`}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
