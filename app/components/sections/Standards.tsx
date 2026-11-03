"use client";

import React, { useState } from "react";

interface DepartmentStandard {
  num: string;
  title: string;
  desc: string;
}

interface Pillar {
  id: string;
  name: string;
  standards: DepartmentStandard[];
}

const PILLARS: Pillar[] = [
  {
    id: "guest-experience",
    name: "1. Guest Experience",
    standards: [
      {
        num: "01",
        title: "Reservations & Booking Experience",
        desc: "Booking accuracy, confirmations, guest communication and reservation management.",
      },
      {
        num: "02",
        title: "Front Office & Reception",
        desc: "Guest arrivals, check-in, check-out, billing and reception standards.",
      },
      {
        num: "03",
        title: "Guest Relations, Concierge & Bell Services",
        desc: "Personalized welcome, luggage handling, guest assistance and concierge services.",
      },
      {
        num: "04",
        title: "Housekeeping & Room Standards",
        desc: "Room cleanliness, amenities, bed presentation and guest comfort.",
      },
      {
        num: "05",
        title: "Laundry & Linen Management",
        desc: "Laundry quality, linen care, uniforms and hygiene standards.",
      },
      {
        num: "06",
        title: "Guest Feedback & Service Recovery",
        desc: "Guest satisfaction, complaint resolution, feedback and service improvement.",
      },
    ],
  },
  {
    id: "food-beverage",
    name: "2. Food & Beverage",
    standards: [
      {
        num: "07",
        title: "Restaurant & Dining Service",
        desc: "Guest welcome, menu knowledge, order accuracy and dining excellence.",
      },
      {
        num: "08",
        title: "Café & Beverage Service",
        desc: "Beverage quality, preparation, presentation, hygiene and guest service.",
      },
      {
        num: "09",
        title: "Kitchen & Culinary Operations",
        desc: "Food preparation, taste, presentation, portion control and culinary consistency.",
      },
      {
        num: "10",
        title: "Kitchen & Food Safety",
        desc: "Food hygiene, safe handling, storage, sanitation and temperature control.",
      },
      {
        num: "11",
        title: "Banquets, Events & Catering",
        desc: "Event planning, banquet setup, catering service and guest satisfaction.",
      },
      {
        num: "12",
        title: "In-Room Dining & Minibar",
        desc: "Room service quality, order accuracy, timely delivery and minibar standards.",
      },
    ],
  },
  {
    id: "sales-revenue",
    name: "3. Sales & Revenue",
    standards: [
      {
        num: "13",
        title: "Sales & Business Development",
        desc: "Corporate sales, partnerships, client relationships and business growth.",
      },
      {
        num: "14",
        title: "Marketing & Digital Reputation",
        desc: "Brand promotion, digital marketing, online reviews and reputation management.",
      },
      {
        num: "15",
        title: "Revenue Management & Distribution",
        desc: "Pricing strategy, occupancy, booking channels and revenue optimization.",
      },
    ],
  },
  {
    id: "management-admin",
    name: "4. Management & Administration",
    standards: [
      {
        num: "16",
        title: "Executive Management & Governance",
        desc: "Leadership, strategic planning, operational performance and management accountability.",
      },
      {
        num: "17",
        title: "Finance & Accounting",
        desc: "Budgeting, financial reporting, cash control, compliance and profitability.",
      },
      {
        num: "18",
        title: "Purchasing, Cost Control & Inventory",
        desc: "Procurement, supplier management, stock control and cost efficiency.",
      },
      {
        num: "19",
        title: "Human Resources & Staff Welfare",
        desc: "Recruitment, employee relations, workforce management and staff welfare.",
      },
      {
        num: "20",
        title: "Learning & Staff Development",
        desc: "Staff training, service skills, professional development and performance improvement.",
      },
      {
        num: "21",
        title: "Information Technology & Digital Systems",
        desc: "Property systems, digital operations, network reliability and guest technology.",
      },
    ],
  },
  {
    id: "property-quality",
    name: "5. Property & Quality Assurance",
    standards: [
      {
        num: "22",
        title: "Safety, Security & Emergency Preparedness",
        desc: "Guest safety, emergency readiness, surveillance, fire safety and asset protection.",
      },
      {
        num: "23",
        title: "Engineering, Facilities & Maintenance",
        desc: "Facility maintenance, equipment upkeep, energy management and property condition.",
      },
      {
        num: "24",
        title: "Sustainability & Environmental Responsibility",
        desc: "Waste management, energy saving, local sourcing and responsible operations.",
      },
      {
        num: "25",
        title: "Brand Standards & Quality Assurance",
        desc: "Brand compliance, SOP adherence, service consistency and audit readiness.",
      },
      {
        num: "26",
        title: "Legal, Licensing & Regulatory Compliance",
        desc: "Hospitality regulations, permits, labor laws and statutory compliance.",
      },
      {
        num: "27",
        title: "Vendor, Contractor & Partner Management",
        desc: "Outsourced services, service level agreements, vendor performance and contracts.",
      },
    ],
  },
  {
    id: "resort-specialized",
    name: "6. Resort & Specialized Operations",
    standards: [
      {
        num: "28",
        title: "Spa, Wellness & Recreation",
        desc: "Spa therapies, wellness experiences, fitness facilities and guest relaxation.",
      },
      {
        num: "29",
        title: "Swimming Pool, Beach & Outdoor Activities",
        desc: "Pool safety, recreational activities, outdoor cleanliness and leisure operations.",
      },
      {
        num: "30",
        title: "Transport, Travel Desk & Valet Services",
        desc: "Airport transfers, tour arrangements, driver standards and valet parking.",
      },
    ],
  },
];

export const Standards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"departments" | "criteria" | "emotional">("departments");
  const [selectedPillarId, setSelectedPillarId] = useState<string>("all");

  const filteredPillars =
    selectedPillarId === "all"
      ? PILLARS
      : PILLARS.filter((p) => p.id === selectedPillarId);

  return (
    <section className="py-24 md:py-32 bg-[#FBFAF7] border-t border-black/10" id="standards">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18 max-w-3xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-[0.25em] font-medium mb-4">
            SHM Assessment Standards
          </span>
          <h2 className="font-heading split-animate text-3xl sm:text-4xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-5">
            Operational Excellence Across 30 Core Departments
          </h2>
          <p className="text-sm md:text-base text-black/60 font-light leading-relaxed split-animate">
            A comprehensive 1,000-point performance framework assessing every critical guest touchpoint, back-of-house protocol, and management system.
          </p>
        </div>

        {/* Master View Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white border border-gold/30 shadow-md">
            <button
              onClick={() => setActiveTab("departments")}
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-medium tracking-wide transition-all uppercase font-mono ${
                activeTab === "departments"
                  ? "bg-gradient-to-r from-[#d8b978] via-[#c9a25b] to-[#b3884a] text-[#071326] font-semibold shadow"
                  : "text-black/60 hover:text-black"
              }`}
            >
              30 Departments
            </button>
            <button
              onClick={() => setActiveTab("criteria")}
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-medium tracking-wide transition-all uppercase font-mono ${
                activeTab === "criteria"
                  ? "bg-gradient-to-r from-[#d8b978] via-[#c9a25b] to-[#b3884a] text-[#071326] font-semibold shadow"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Assessment Criteria
            </button>
            <button
              onClick={() => setActiveTab("emotional")}
              className={`px-6 sm:px-8 py-2.5 text-xs sm:text-sm font-medium tracking-wide transition-all uppercase font-mono ${
                activeTab === "emotional"
                  ? "bg-gradient-to-r from-[#d8b978] via-[#c9a25b] to-[#b3884a] text-[#071326] font-semibold shadow"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Emotional Impact
            </button>
          </div>
        </div>

        {/* Tab 1: 30 Departments across 6 Pillars */}
        {activeTab === "departments" && (
          <div className="space-y-12">
            {/* Pillar Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-black/10 pb-6">
              <button
                onClick={() => setSelectedPillarId("all")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium font-mono transition-all ${
                  selectedPillarId === "all"
                    ? "bg-[#B89856] text-white shadow"
                    : "bg-white text-black/60 border border-black/10 hover:border-[#B89856]"
                }`}
              >
                All 6 Pillars (30)
              </button>
              {PILLARS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillarId(p.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium font-mono transition-all ${
                    selectedPillarId === p.id
                      ? "bg-[#B89856] text-white shadow"
                      : "bg-white text-black/60 border border-black/10 hover:border-[#B89856]"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Pillar Groups */}
            <div className="space-y-12">
              {filteredPillars.map((pillar) => (
                <div key={pillar.id} className="space-y-5">
                  <div className="flex items-center gap-4">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-[#12281A] uppercase">
                      {pillar.name}
                    </h3>
                    <div className="h-px flex-1 bg-black/10" />
                    <span className="text-xs font-mono text-[#B89856]">
                      {pillar.standards.length} Standards
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {pillar.standards.map((item) => (
                      <div
                        key={item.num}
                        className="bg-white p-6 border border-black/10 hover:border-[#B89856] transition-colors duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xs font-semibold text-[#B89856]">
                              {item.num}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1E4D33]/40" />
                          </div>
                          <h4 className="font-heading text-base font-medium text-[#12281A] mb-2 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Evaluation Criteria */}
        {activeTab === "criteria" && (
          <div className="bg-white p-8 sm:p-10 border border-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Service Excellence",
                  desc: "Warmth, timing, active listening, menu mastery, and structured complaint recovery procedures.",
                },
                {
                  num: "02",
                  title: "Product Quality",
                  desc: "Culinary execution, ingredient freshness, beverage precision, ambiance consistency, and presentation.",
                },
                {
                  num: "03",
                  title: "Emotional Resonance",
                  desc: "Authentic empathy, intuitive guest recognition, proactive personalization, and memorable moments.",
                },
                {
                  num: "04",
                  title: "Hygiene & Safety",
                  desc: "Meticulous sanitation, HACCP food hygiene protocols, physical security, and asset maintenance.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="p-6 bg-[#FBFAF7] border border-black/10 hover:border-[#B89856] transition-all"
                >
                  <span className="font-mono text-xs text-[#B89856] font-semibold block mb-2">
                    {item.num}
                  </span>
                  <h4 className="text-base font-heading font-medium text-[#12281A] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Emotional Impact Scale */}
        {activeTab === "emotional" && (
          <div className="bg-white p-8 sm:p-10 border border-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                {
                  stage: "Stage 01",
                  title: "Very Dissatisfied",
                  desc: "Neglected, frustrated, delayed, or overlooked throughout the guest journey.",
                  tone: "text-red-800",
                },
                {
                  stage: "Stage 02",
                  title: "Dissatisfied",
                  desc: "Disappointed, indifferent service, or disconnected experience from expectations.",
                  tone: "text-amber-800",
                },
                {
                  stage: "Stage 03",
                  title: "Comfortable",
                  desc: "Respected, basic expectations fulfilled, understood, and pleasantly accommodated.",
                  tone: "text-stone-800",
                },
                {
                  stage: "Stage 04",
                  title: "Positively Engaged",
                  desc: "Attentive treatment, appreciated, delighted by details, and genuinely valued.",
                  tone: "text-[#1E4D33]",
                },
                {
                  stage: "Stage 05",
                  title: "Memorable Experience",
                  desc: "Recognized, individual care, emotionally resonant, and eager to advocate and return.",
                  tone: "text-[#B89856]",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FBFAF7] border-l-2 border-[#B89856] border-t border-r border-b border-black/5"
                >
                  <span className="font-mono text-[10px] uppercase text-black/40 block mb-1">
                    {item.stage}
                  </span>
                  <h5 className={`text-sm font-heading font-semibold mb-2 ${item.tone}`}>
                    {item.title}
                  </h5>
                  <p className="text-xs text-black/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
