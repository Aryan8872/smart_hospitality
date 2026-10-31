"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Standards", href: "#standards" },
  { label: "Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
];

/**
 * Fixed, full-viewport footer that sits *behind* the page.
 *
 * `.wrapper` (see globals.css) reserves one screen of scroll with
 * `margin-bottom: 100svh`, so the last screen of scrolling slides the
 * opaque page up and uncovers this footer — the parallax reveal from
 * the AURUM reference — instead of the footer just being the final
 * stacked block.
 *
 * The inner content gets a scrubbed rise/scale so it settles into place
 * as the footer is uncovered. The scrub is driven by `.wrapper`'s bottom
 * edge (a normal in-flow box) rather than the footer itself, because a
 * `position: fixed` element has no meaningful document position to
 * trigger against.
 */
export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reduced motion: the footer still reveals on scroll, it just does not
    // drift — every other animated block honours this too.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const footer = footerRef.current;
    const content = contentRef.current;
    const wrapper = document.querySelector<HTMLElement>(".wrapper");
    if (!footer || !content || !wrapper) return;

    const ctx = gsap.context(() => {
      gsap.from(content, {
        y: 100,
        opacity: 0.5,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          // wrapper bottom hits the viewport bottom → reveal starts
          start: "bottom bottom",
          // wrapper bottom reaches the viewport top → fully revealed
          end: "bottom top",
          scrub: true,
        },
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-sticky" aria-label="Site footer">
      <div ref={contentRef} className="relative z-10 w-full px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.3em] mb-6 text-[#FBFAF7]/45">
          Hospitality Performance Advisory
        </div>

        <a
          href="mailto:info@shm.com.np"
          className="font-heading inline-block text-[13vw] sm:text-[9vw] leading-[0.9] font-light tracking-tighter text-[#FBFAF7] hover:text-[#42A85D] transition-colors duration-500"
        >
          Let&apos;s Talk
        </a>

        <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#FBFAF7]/55">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FBFAF7] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-[#FBFAF7]/45">
          <a
            href="mailto:info@shm.com.np"
            className="hover:text-[#FBFAF7] transition-colors duration-300"
          >
            info@shm.com.np
          </a>
          <span className="hidden sm:inline text-[#FBFAF7]/20">/</span>
          <span>Kathmandu, Nepal</span>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-[10px] leading-relaxed text-[#FBFAF7]/35">
          © 2026 Smart Hospitality Management (SHMG). Website prototype for
          review. Original SHMG concept — not affiliated with LQA or Forbes
          Travel Guide. Privacy and legal pages to be prepared before launch.
        </div>
      </div>
    </footer>
  );
};
