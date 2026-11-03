// Commented out as requested - not needed right now
/*
import React from "react";
import Link from "next/link";
import { ALL_SERVICES } from "@/app/data/servicesData";

export const metadata = {
  title: "Specialized Hospitality Services | Smart Hospitality Management Group",
  description:
    "Explore our complete 16-service catalogue covering guest experience, operational audits, food safety, staff training, revenue management, and digital reputation.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FBFAF7] min-h-screen text-[#12281A]">
      <header className="border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1E4D33] hover:text-[#B89856] transition-colors"
          >
            &larr; Back to Homepage
          </Link>
          <span className="font-mono text-xs text-black/50 uppercase tracking-widest">
            SHMG Services Directory
          </span>
        </div>
      </header>

      <section className="py-16 sm:py-24 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <span className="block text-[#B89856] text-xs uppercase tracking-[0.25em] font-medium mb-4">
            Service Architecture
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-[#12281A] max-w-4xl mb-6">
            16 Specialized Hospitality Services Designed for Real Impact
          </h1>
          <p className="text-base sm:text-lg text-black/65 font-light leading-relaxed max-w-3xl">
            From independent mystery assessments and operational audits to kitchen hygiene, revenue distribution, and workforce academy development—our structured services empower independent food-service and lodging businesses to achieve international standards.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
          {ALL_SERVICES.map((srv) => (
            <article
              key={srv.num}
              id={`service-${srv.num}`}
              className="bg-white p-8 sm:p-12 border border-black/10 hover:border-[#B89856] transition-all scroll-mt-24"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-sm font-semibold text-[#B89856]">
                      {srv.num}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-black/40 font-mono">
                      Service Scope
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#12281A] leading-snug">
                    {srv.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm sm:text-base text-black/75 font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
*/

export default function ServicesPage() {
  return null;
}
