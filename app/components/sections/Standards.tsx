"use client";

import React, { useState } from "react";

export const Standards: React.FC = () => {
  const [activeTab, setActiveTab] = useState("departments");

  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100" id="standards">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">SHM Standards</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-6">
            Assessment Standards
          </h2>
          <p className="text-sm md:text-base text-stone-500">A proposed original 1,000-point SHM framework with service quality and emotional impact feedback</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 bg-white border border-stone-100">
            {["departments", "criteria", "emotional"].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-3 text-sm font-medium transition-all capitalize ${
                  activeTab === tab ? "bg-[#B89856] text-white" : "text-stone-600 hover:text-[#B89856]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 border border-stone-100">
          {activeTab === "departments" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Guest Welcome", desc: "Reservations, greeting, seating and first impressions" },
                { title: "Dining Service", desc: "Menu knowledge, attentiveness, order accuracy and farewell" },
                { title: "Kitchen & Food Safety", desc: "Food hygiene, handling, preparation and culinary consistency" },
                { title: "Café & Beverage", desc: "Drink quality, presentation and guest engagement" },
                { title: "Cleanliness", desc: "Dining area, washrooms, equipment and sanitation" },
                { title: "Cost & Inventory", desc: "Purchasing, stock controls, waste, cash and profitability" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-stone-50 border border-stone-100 hover:border-[#B89856]/30 transition-all">
                  <h4 className="text-lg font-heading font-medium text-stone-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "criteria" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Service", desc: "Warmth, accuracy, menu knowledge and complaint handling" },
                { title: "Product", desc: "Food, beverage, presentation, atmosphere and consistency" },
                { title: "Emotional Intelligence", desc: "Empathy, personalization and guest recognition" },
                { title: "Cleanliness", desc: "Sanitation, safe food handling and facility care" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-stone-50 border border-stone-100 hover:border-[#B89856]/30 transition-all">
                  <h4 className="text-lg font-heading font-medium text-stone-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "emotional" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Very Dissatisfied", desc: "Neglected, frustrated or overlooked" },
                { title: "Dissatisfied", desc: "Disappointed or disconnected" },
                { title: "Comfortable", desc: "Respected, understood and comfortable" },
                { title: "Positively Engaged", desc: "Appreciated, delighted and valued" },
                { title: "Memorable Experience", desc: "Recognized, special and genuinely cared for" },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-stone-50 border-l-4 border-[#B89856]">
                  <h5 className="text-base font-heading font-medium text-stone-900 mb-2">{item.title}</h5>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
