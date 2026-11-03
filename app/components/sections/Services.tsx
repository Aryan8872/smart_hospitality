"use client";

import React from "react";
import { ALL_SERVICES } from "@/app/data/servicesData";

export const Services: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white border-t border-black/10" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="block text-[#B89856] text-xs uppercase tracking-[0.25em] font-medium mb-4">
              Services
            </span>
            <h2 className="font-heading split-animate text-4xl sm:text-5xl font-light tracking-tighter">
              Our{" "}
              <em className="font-serif italic font-normal text-[#1E4D33]">
                Services
              </em>
            </h2>
          </div>
          <span className="hidden sm:block text-xs font-mono text-black/40 uppercase tracking-widest">
            16 Advisory &amp; Operational Modules
          </span>
        </div>

        {/* 16-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="bg-[#FBFAF7] p-7 border border-black/10 hover:border-[#B89856] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#B89856]">
                    {srv.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-[#1E4D33] transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-medium text-[#12281A] mb-3 leading-snug group-hover:text-[#1E4D33] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1E4D33]/80 font-medium">
                  Core Module
                </span>
                <span className="text-[10px] uppercase tracking-wider text-black/40 font-mono">
                  SHMG Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
