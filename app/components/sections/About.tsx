"use client";

import React from "react";

export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="w-full h-[500px] md:h-[600px] bg-stone-100 rounded-2xl flex items-center justify-center">
            <span className="text-6xl">🎯</span>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#FBFAF7] p-10 hidden md:block border border-black/10">
            <div className="text-5xl font-heading text-[#42A85D] mb-2 font-light tracking-tighter">1000+</div>
            <div className="text-xs font-bold tracking-widest uppercase text-black">Point<br />Framework</div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="block text-[#42A85D] text-xs uppercase tracking-[0.25em] font-medium mb-4">About SHM</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-8 leading-[1.05]">
            About Smart Hospitality Management
          </h2>
          <p className="text-sm md:text-base text-black/60 mb-6 leading-relaxed">
            International hospitality thinking, adapted to local businesses. SHM is a proposed independent Nepal-origin hospitality performance advisory combining guest experience assessment, training, cost control and owner-focused business improvement.
          </p>
          <p className="text-sm md:text-base text-black/60 mb-10 leading-relaxed">
            For independent food-service businesses.
          </p>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-black/10 text-[#42A85D] bg-[#FBFAF7]">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="text-black font-light mb-2 text-base md:text-lg tracking-tight">Our Mission</h4>
                <p className="text-sm text-black/60 leading-relaxed">Improve every guest touchpoint through mystery assessments and operational audits; build staff capability; strengthen profitability with menu engineering, cost controls and digital visibility; provide owners with actionable performance insights.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-black/10 text-[#42A85D] bg-[#FBFAF7]">
                <span className="text-2xl">👁</span>
              </div>
              <div>
                <h4 className="text-black font-light mb-2 text-base md:text-lg tracking-tight">Our Vision</h4>
                <p className="text-sm text-black/60 leading-relaxed">To become a trusted independent hospitality performance platform originating in Nepal and expanding across South Asia, supporting world-class service, data-driven management and sustainable operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
