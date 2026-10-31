"use client";

import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 lg:gap-8">
        <div className="lg:col-span-3 lg:pr-12">
          <span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Contact</span>
          <h2 className="font-heading split-animate text-3xl md:text-5xl font-light tracking-tighter text-[#12281A] mb-6">Start Your Journey</h2>
          <p className="text-stone-500 text-sm md:text-base mb-10 split-animate">Request a consultation — prototype form, no data transmission</p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Business Name</label>
                <input className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 placeholder:text-stone-300" placeholder="Restaurant or café name" type="text" />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Business Type</label>
                <select className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 text-stone-900 appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled className="text-stone-300">Select</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe_bakery">Café / Bakery</option>
                  <option value="bar_lounge">Bar / Lounge</option>
                  <option value="multi_outlet">Multi-outlet</option>
                  <option value="hotel_resort">Hotel / Resort</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Contact Email</label>
              <input className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 placeholder:text-stone-300" placeholder="you@example.com" type="email" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">What would you like to improve?</label>
              <textarea className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 resize-none placeholder:text-stone-300" placeholder="Service, training, cost control..." rows={4} />
            </div>
            <button className="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 text-sm font-medium hover:bg-[#B89856] transition-colors duration-300 mt-4" type="submit">
              Request Consultation (Demo)
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-stone-50 p-10 lg:p-14 border border-stone-100 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-10">Connect With Us</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="mt-0.5 text-[#B89856]">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-stone-900 mb-2 uppercase tracking-widest">Location</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-0.5 text-[#B89856]">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-stone-900 mb-2 uppercase tracking-widest">Email</h4>
                  <a href="mailto:info@shm.com.np" className="text-sm text-stone-500 hover:text-[#B89856] transition-colors block">info@shm.com.np</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-stone-200">
            <p className="text-xs text-stone-900 uppercase tracking-widest font-medium mb-6">Quick Response</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@shm.com.np" className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm font-medium">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
