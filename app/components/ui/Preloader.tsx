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
      //
      //    `y: 0` is load-bearing. The element's hidden state lives in CSS
      //    as `transform: translateY(100%)`, which GSAP parses into a
      //    px-based `y` (43px here). A yPercent-only tween would leave that
      //    px offset in place and the wordmark would stop dead at the mask
      //    edge — invisible for the whole preloader. Same idiom as the hero
      //    line reveal in useAnimations.ts.
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
      <div ref={textRef} className="preloader-text">
        <span ref={textInnerRef}>Smart Hospitality</span>
      </div>
      <div className="preloader-progress">
        <div ref={barRef} className="preloader-bar" />
      </div>
    </div>
  );
};
