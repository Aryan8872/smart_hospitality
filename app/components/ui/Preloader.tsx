"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  /**
   * Fired the moment the curtain starts lifting. The hero entrance is
   * wired to this so the headline rises behind the curtain instead of
   * finishing before it has cleared.
   */
  onReveal?: () => void;
}

/** bar 1.5s + text 0.45s + curtain 1.1s */
const TIMELINE_MS = 3050;
/** safety valve — covers a stalled raf, throttled tab or blocked script */
const FALLBACK_MS = TIMELINE_MS + 400;

export const Preloader: React.FC<PreloaderProps> = ({ onReveal }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textInnerRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef(onReveal);

  // Keep the newest callback reachable from inside the timeline without
  // writing to a ref during render (react-hooks/refs).
  useEffect(() => {
    revealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const textInner = textInnerRef.current;
    const bar = barRef.current;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setVisible(false);
    };

    // No curtain under reduced motion — show the page immediately.
    if (reduced || !container || !text || !textInner || !bar) {
      revealRef.current?.();
      finish();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });

      // 1. Wordmark rises out of its clip mask.
      tl.fromTo(
        textInner,
        { yPercent: 100, y: 0 },
        { yPercent: 0, y: 0, duration: 0.8, ease: "power3.out" },
        0,
      )
        // 2. Progress bar: 0 → 100% over 1.5s.
        .fromTo(
          bar,
          { width: "0%" },
          { width: "100%", duration: 1.5, ease: "power2.inOut" },
          0,
        )
        // 3. Wordmark lifts away as the bar completes.
        .to(text, { y: -40, opacity: 0, duration: 0.45, ease: "power2.in" }, 1.5)
        // 4. Curtain: 1.5 + 0.45 + 1.1 = 3.05s, matching TIMELINE_MS.
        .to(
          container,
          {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
            onStart: () => revealRef.current?.(),
          },
          1.95,
        );
    }, container);

    // rAF can stall (background tab, occluded window, battery saver).
    // Never leave the visitor staring at a curtain.
    const fallback = window.setTimeout(() => {
      revealRef.current?.();
      finish();
    }, FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="preloader" aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-5 border border-gold/15 sm:inset-8"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="mb-7 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gold/35 bg-paper p-1.5">
          <img
            src="/brand_logo/shmg.png"
            alt=""
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </span>

        <div ref={textRef} className="preloader-text text-gold-light">
          <span ref={textInnerRef} className="whitespace-nowrap">
            Smart Hospitality
          </span>
        </div>

        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.42em] text-ivory/45">
          Management Group
        </p>

        <div className="preloader-progress">
          <div ref={barRef} className="preloader-bar" />
        </div>

        <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.3em] text-ivory/25">
          Independent hospitality advisory · Nepal
        </p>
      </div>
    </div>
  );
};
