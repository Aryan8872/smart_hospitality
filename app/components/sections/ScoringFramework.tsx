"use client";

import React from "react";

export const ScoringFramework: React.FC = () => {
  const items = [
    { pts: "250", label: "Guest Service & Emotional Experience" },
    { pts: "150", label: "Operations & SOP Compliance" },
    { pts: "100", label: "Product & Facility Quality" },
    { pts: "150", label: "Revenue & Sales Performance" },
    { pts: "150", label: "Cost & Profit Controls" },
    { pts: "100", label: "People & Leadership" },
    { pts: "60", label: "Digital & Reputation" },
    { pts: "40", label: "Sustainability, Safety & Local Value" },
    { pts: "1,000", label: "Total Proposed Points", highlight: true },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Framework</span>
          <h2 className="font-heading split-animate text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6">Scoring Framework</h2>
          <p className="text-sm md:text-base text-stone-500 split-animate">Original SHM planning weights — not LQA criteria or existing certification</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${item.highlight ? "bg-stone-900 text-white" : "bg-white"}`}>
              <span className={`text-5xl font-heading font-bold block mb-3 ${item.highlight ? "text-white" : "text-[#B89856]"}`}>{item.pts}</span>
              <p className={`text-base font-medium ${item.highlight ? "text-white" : "text-stone-900"}`}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
