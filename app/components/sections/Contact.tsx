"use client";

import React from "react";
import Image from "next/image";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-paper py-24 text-navy md:py-32"
    >
      {/* Client-supplied cream wave artwork */}
      <Image
        src="/images/contact-bg.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/35 via-paper/10 to-paper/45" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-10">
        <div className="mb-14">
          <h2 className="what-i-do-title font-heading text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-navy leading-none">
            {"Let's Connect /".split("").map((char, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <span className="inline-block will-change-transform">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-deep col-span-12 md:col-span-4">
              ( Inquiries & Audits )
            </p>
            <div className="col-span-12 md:col-span-8 space-y-4">
              <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
                Start Your Quality Journey with an Independent Appraisal.
              </p>
              <p className="text-sm sm:text-base text-navy/65 font-light leading-relaxed max-w-[55ch]">
                Tell us where the experience falls short or where you seek growth. We will outline the highest-yield interventions for your property.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="reveal-up lg:col-span-7" data-reveal>
            <div className="border border-navy/10 bg-paper/85 p-7 backdrop-blur-sm sm:p-10">
              <div className="flex items-center justify-between gap-4 border-b border-navy/10 pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-deep">
                  Request a consultation
                </p>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-navy/35">
                  Prototype
                </span>
              </div>

              <form
                className="mt-7 space-y-8"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="business-name"
                      className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-navy/70 font-medium"
                    >
                      Business name
                    </label>
                    <input
                      id="business-name"
                      name="business-name"
                      type="text"
                      placeholder="Restaurant or café name"
                      className="w-full border-b border-navy/30 bg-transparent py-2.5 text-base sm:text-lg font-normal text-navy outline-none transition-colors duration-300 placeholder:text-navy/40 focus:border-gold-deep"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business-type"
                      className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-navy/70 font-medium"
                    >
                      Business type
                    </label>
                    <select
                      id="business-type"
                      name="business-type"
                      defaultValue=""
                      className="w-full cursor-pointer appearance-none border-b border-navy/30 bg-transparent py-2.5 text-base sm:text-lg font-normal text-navy outline-none transition-colors duration-300 focus:border-gold-deep"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe_bakery">Café / Bakery</option>
                      <option value="bar_lounge">Bar / Lounge</option>
                      <option value="multi_outlet">Multi-outlet</option>
                      <option value="hotel_resort">Hotel / Resort</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-navy/70 font-medium"
                  >
                    Contact email
                  </label>
                  <input
                    id="contact-email"
                    name="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-navy/30 bg-transparent py-2.5 text-base sm:text-lg font-normal text-navy outline-none transition-colors duration-300 placeholder:text-navy/40 focus:border-gold-deep"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.22em] text-navy/70 font-medium"
                  >
                    What would you like to improve?
                  </label>
                  <textarea
                    id="contact-message"
                    name="contact-message"
                    rows={4}
                    placeholder="Service, training, cost control…"
                    className="w-full resize-none border-b border-navy/30 bg-transparent py-2.5 text-base sm:text-lg font-normal text-navy outline-none transition-colors duration-300 placeholder:text-navy/40 focus:border-gold-deep leading-relaxed"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="btn-gold">
                    <span>Request consultation</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  <p className="max-w-[15rem] text-[10px] font-light leading-relaxed text-navy/40">
                    Demo form — no data is transmitted. Connect your preferred
                    inbox before launch.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Contact card */}
          <aside className="reveal-up lg:col-span-5" data-reveal>
            <div className="relative overflow-hidden border border-gold/25 bg-navy px-8 py-10 text-ivory sm:px-10">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-gold/15"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-gold/10"
                aria-hidden="true"
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/75">
                Connect with us
              </p>

              <h3 className="mt-4 font-display text-[clamp(1.7rem,2.6vw,2.3rem)] font-light leading-tight">
                A conversation is the{" "}
                <em className="italic text-gold-light">first assessment.</em>
              </h3>

              <div className="mt-9 space-y-7 border-t border-gold/15 pt-8">
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/60">
                    Location
                  </h4>
                  <p className="mt-2 text-sm font-light text-ivory/70">
                    Balaju, Kathmandu, Nepal
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/60">
                    Email
                  </h4>
                  <a
                    href="mailto:info@shm.com.np"
                    className="mt-2 block break-all text-sm font-light text-ivory/70 transition-colors hover:text-gold-light"
                  >
                    info@shm.com.np
                  </a>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/60">
                    Phone
                  </h4>
                  <div className="mt-2 flex flex-col gap-1">
                    <a
                      href="tel:+9779708833780"
                      className="text-sm font-light text-ivory/70 transition-colors hover:text-gold-light"
                    >
                      970-8833780
                    </a>
                    <a
                      href="tel:+9779767591639"
                      className="text-sm font-light text-ivory/70 transition-colors hover:text-gold-light"
                    >
                      9767591639
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-t border-gold/15 pt-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-gold/60">
                  Quick response
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="mailto:info@shm.com.np"
                    className="btn-gold justify-center !px-5 !py-3.5 !text-[0.66rem]"
                  >
                    <span>Email us</span>
                  </a>
                  <a
                    href="tel:+9779708833780"
                    className="btn-outline-gold justify-center !px-5 !py-3 !text-[0.64rem]"
                  >
                    Call us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
