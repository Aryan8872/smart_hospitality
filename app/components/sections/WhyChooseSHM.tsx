"use client";

import React from "react";

export const WhyChooseSHM: React.FC = () => {
  const items = [
    { icon: "👁", title: "Understand Your Business", desc: "Discover what guests actually experience at every touchpoint" },
    { icon: "😊", title: "Improve Guest Satisfaction", desc: "Identify service gaps and build stronger hospitality habits" },
    { icon: "👥", title: "Build Team Confidence", desc: "Turn observations into practical coaching and SOPs" },
    { icon: "⚙️", title: "Improve Operations", desc: "Reduce inconsistencies in service, kitchen and inventory routines" },
    { icon: "📈", title: "Strengthen Commerciality", desc: "Review menu margins, sales opportunities and avoidable costs" },
    { icon: "📊", title: "Track Progress", desc: "Use baseline KPIs and reassessment to verify improvements" },
  ];

  return (
    <section className="py-24 md:py-32 bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Why SHM</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">Why Choose an SHM Assessment?</h2>
            <p className="text-stone-400 mb-12 leading-relaxed text-sm md:text-base">Understand your operation, strengthen guest satisfaction and uncover opportunities</p>

            <div className="space-y-10">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-stone-800 text-[#B89856] bg-stone-900/50">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2 text-base md:text-lg tracking-tight">{item.title}</h4>
                    <p className="text-sm text-stone-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] md:h-[700px]">
            <div className="w-full h-full bg-stone-800 rounded-lg flex items-center justify-center">
              <span className="text-6xl">📊</span>
            </div>
            <div className="absolute inset-0 border border-stone-800 m-6 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
