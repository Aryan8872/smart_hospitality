"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface HTMLElement {
    /** Authored markup captured before splitting, used to restore on cleanup. */
    __splitHTML?: string;
  }
}

/* ------------------------------------------------------------------
 * Splitter
 *
 * Turns copy into per-word masks while PRESERVING the author's markup.
 * The naive `innerText` split used before flattened <em>, <span> and
 * <br>, which is why accent colours, italics and line breaks vanished
 * the moment the reveal was applied.
 *
 * Produced structure:
 *
 *   <h2 class="split-animate">
 *     <span class="sr-only">Original text</span>          ← accessible name
 *     <span class="split-words" aria-hidden="true">       ← display: contents
 *       <span class="word-wrap"><span class="word-inner">Word</span></span>
 *       …
 *     </span>
 *   </h2>
 * ------------------------------------------------------------------ */

const INLINE_TAGS = new Set([
  "SPAN", "EM", "STRONG", "B", "I", "U", "A", "SMALL",
  "MARK", "SUB", "SUP", "CODE", "ABBR", "S", "WBR",
]);

function makeWord(text: string, words: HTMLElement[]): HTMLElement {
  const wrap = document.createElement("span");
  wrap.className = "word-wrap";

  const inner = document.createElement("span");
  inner.className = "word-inner";
  inner.textContent = text;

  wrap.appendChild(inner);
  words.push(inner);
  return wrap;
}

function splitNode(node: Node, target: Node, words: HTMLElement[]) {
  // ── text: split on whitespace, keep the gaps as real spaces ──
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent ?? "";
    for (const part of text.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        target.appendChild(document.createTextNode(" "));
      } else {
        target.appendChild(makeWord(part, words));
      }
    }
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const el = node as HTMLElement;

  // ── explicit line break: keep it ──
  if (el.tagName === "BR") {
    target.appendChild(document.createElement("br"));
    return;
  }

  // ── inline element: keep the element (colour, italics, links) and
  //    split its contents in place ──
  if (INLINE_TAGS.has(el.tagName)) {
    const clone = el.cloneNode(false) as HTMLElement;
    target.appendChild(clone);
    for (const child of Array.from(el.childNodes)) splitNode(child, clone, words);
    return;
  }

  // ── block-level child (a flex/grid cell): animate it as one unit and
  //    leave its own layout untouched ──
  const wrap = document.createElement("span");
  wrap.className = "word-wrap";

  const inner = document.createElement("span");
  inner.className = "word-inner";
  inner.appendChild(el.cloneNode(true));

  wrap.appendChild(inner);
  words.push(inner);
  target.appendChild(wrap);
}

function splitElement(el: HTMLElement): HTMLElement[] {
  if (el.dataset.splitState === "done") return [];

  // Keep the authored markup so cleanup restores it verbatim. Flattening
  // to text here would destroy <div>/<em>/<span> structure if the effect
  // ever re-runs (React StrictMode, Fast Refresh, remount).
  el.__splitHTML = el.innerHTML;

  // Join top-level nodes with a space so block siblings (e.g. the two
  // meta columns) don't run together in the accessible name.
  const accessibleText = Array.from(el.childNodes)
    .map((node) => node.textContent ?? "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const srOnly = document.createElement("span");
  srOnly.className = "sr-only";
  srOnly.textContent = accessibleText;

  const wrapper = document.createElement("span");
  wrapper.className = "split-words";
  wrapper.setAttribute("aria-hidden", "true");

  const words: HTMLElement[] = [];
  for (const child of Array.from(el.childNodes)) splitNode(child, wrapper, words);

  el.replaceChildren(srOnly, wrapper);
  el.dataset.splitState = "done";
  return words;
}

/* ------------------------------------------------------------------
 * Reveal — identical motion signature to the AURUM "Beyond the
 * Skyline" reference:
 *
 *   from      yPercent 110   (hidden behind its mask)
 *   to        yPercent 0
 *   duration  1s
 *   ease      power3.out
 *   stagger   0.02s per word
 *   trigger   element top hits 85% of the viewport
 *   toggles   play on enter, reverse when scrolled back above
 * ------------------------------------------------------------------ */
const REVEAL = {
  duration: 1,
  ease: "power3.out",
  stagger: 0.02,
  start: "top 85%",
  toggleActions: "play none none reverse",
} as const;

/** Safety valve: if the curtain never reports back, the hero still plays. */
const HERO_FALLBACK_MS = 5000;

/**
 * If the browser's animation frame loop never advances (occluded window,
 * background tab, aggressive power saving) GSAP cannot move anything.
 * Masked text would then stay hidden forever, so after this grace period
 * we write the finished state directly.
 */
const TICKER_FAILSAFE_MS = 6000;

const showFinishedState = () => {
  document
    .querySelectorAll<HTMLElement>(".word-inner, .hero-line-inner")
    .forEach((el) => {
      el.style.transform = "translate(0%, 0%)";
    });
  document.querySelectorAll<HTMLElement>(".hero-fade").forEach((el) => {
    el.style.opacity = "1";
  });
  document.querySelectorAll<HTMLElement>(".reveal-up").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
  document
    .querySelectorAll<HTMLElement>(".score-bar > span")
    .forEach((el) => {
      el.style.transform = "scaleX(1)";
    });
};

export const useAnimations = (revealed: boolean) => {
  const heroTimeline = useRef<gsap.core.Timeline | null>(null);

  /* ── Everything that must exist regardless of the preloader ── */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion: CSS renders every element in its final state.
    if (prefersReducedMotion) return;

    const keys: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    // 1. Lenis — a single raf loop driven by GSAP's ticker.
    //    (The old code ran its own requestAnimationFrame loop *and*
    //    gsap.ticker, advancing the scroll twice every frame.)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // 2. Scroll-triggered word reveal — headings, copy, meta rows.
    document.querySelectorAll<HTMLElement>(".split-animate").forEach((el) => {
      const words = splitElement(el);
      if (!words.length) return;

      gsap.set(words, { yPercent: 110 });

      const tween = gsap.to(words, {
        yPercent: 0,
        duration: REVEAL.duration,
        ease: REVEAL.ease,
        stagger: REVEAL.stagger,
        scrollTrigger: {
          trigger: el,
          start: REVEAL.start,
          toggleActions: REVEAL.toggleActions,
        },
      });

      tweens.push(tween);
      if (tween.scrollTrigger) keys.push(tween.scrollTrigger);
    });

    // 2b. "About SHMG /" char-by-char reveal — same signature as portfolio
    //     WhatIDo title. Each char is wrapped in an overflow-hidden outer span
    //     (the clip) with an inner animated span (the actual element).
    document.querySelectorAll<HTMLElement>(".what-i-do-title").forEach((el) => {
      // The inner spans are the direct children's first child (the animated element)
      const outerSpans = Array.from(el.querySelectorAll<HTMLElement>(":scope > span"));
      const innerSpans = outerSpans
        .map((s) => s.querySelector<HTMLElement>("span"))
        .filter(Boolean) as HTMLElement[];

      if (!innerSpans.length) return;

      gsap.set(innerSpans, { yPercent: 105 });

      const tween = gsap.to(innerSpans, {
        yPercent: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.03,
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tweens.push(tween);
      if (tween.scrollTrigger) keys.push(tween.scrollTrigger);
    });

    // 3. Generic fade-up reveals (cards, rows, panels).
    document.querySelectorAll<HTMLElement>(".reveal-up").forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { y: 38, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) keys.push(tween.scrollTrigger);

      // Bars inside the row draw in with the same trigger.
      const bars = el.querySelectorAll<HTMLElement>(".score-bar > span");
      if (bars.length) {
        const barTween = gsap.fromTo(
          bars,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
        tweens.push(barTween);
        if (barTween.scrollTrigger) keys.push(barTween.scrollTrigger);
      }
    });

    // 5. Editorial image parallax.
    document.querySelectorAll<HTMLElement>(".parallax-img").forEach((img) => {
      if (!img.parentElement) return;
      // Overscan so the vertical drift never exposes an edge.
      gsap.set(img, { scale: 1.14 });
      const tween = gsap.fromTo(
        img,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      tweens.push(tween);
      if (tween.scrollTrigger) keys.push(tween.scrollTrigger);
    });

    // 6. Hero scroll scrub animation matching portfolio #hero-content
    const heroContent = document.querySelector("#hero-content");
    if (heroContent) {
      const tween = gsap.to(heroContent, {
        opacity: 0.45,
        scale: 0.92,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      tweens.push(tween);
      if (tween.scrollTrigger) keys.push(tween.scrollTrigger);
    }

    // 7. Pointer parallax on the hero arch — fine pointers only.
    const hero = document.querySelector<HTMLElement>("#top");
    const heroArch = document.querySelector<HTMLElement>(".hero-arch");
    let detachPointer: (() => void) | undefined;
    if (hero && heroArch && window.matchMedia("(pointer: fine)").matches) {
      const xTo = gsap.quickTo(heroArch, "x", {
        duration: 0.9,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(heroArch, "y", {
        duration: 0.9,
        ease: "power3.out",
      });

      const onMove = (event: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        xTo(x * 16);
        yTo(y * 12);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);

      detachPointer = () => {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        gsap.killTweensOf(heroArch);
      };
    }

    // 4. Re-measure once webfonts / images settle. Masked words change
    //    line boxes, so this genuinely matters.
    let disposed = false;
    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };

    const timers = [
      window.setTimeout(refresh, 250),
      window.setTimeout(refresh, 800),
      window.setTimeout(refresh, 2000),
    ];

    // Ticker failsafe — see TICKER_FAILSAFE_MS.
    const frameAtStart = gsap.ticker.frame;
    timers.push(
      window.setTimeout(() => {
        if (disposed) return;
        if (gsap.ticker.frame === frameAtStart) showFinishedState();
      }, TICKER_FAILSAFE_MS),
    );

    if (document.fonts?.ready) document.fonts.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    return () => {
      disposed = true;
      detachPointer?.();
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("load", refresh);

      gsap.ticker.remove(raf);
      lenis.destroy();

      tweens.forEach((t) => t.kill());
      keys.forEach((st) => st.kill());

      // Restore the authored markup so a remount re-splits cleanly.
      document.querySelectorAll<HTMLElement>(".split-animate").forEach((el) => {
        if (el.dataset.splitState !== "done") return;

        if (el.__splitHTML !== undefined) {
          el.innerHTML = el.__splitHTML;
        } else {
          // Fallback for any element split before the backup existed.
          const sr = el.querySelector(":scope > .sr-only");
          if (sr) el.textContent = sr.textContent ?? "";
        }

        delete el.__splitHTML;
        delete el.dataset.splitState;
      });
    };
  }, []);

  /* ── Hero entrance: plays when the curtain lifts ── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(".hero-letter-word", { yPercent: 120, y: 0 });
    gsap.set(".hero-img-overlay", { yPercent: 0 });
    gsap.set(".hero-person-img", { scale: 1.15 });

    const tl = gsap.timeline({ paused: true });
    // 1. Portfolio signature word-by-word reveal
    tl.to(".hero-letter-word", {
      yPercent: 0,
      stagger: 0.08,
      duration: 1.5,
      ease: "power4.inOut",
      force3D: true,
      delay: 0.2,
    })
      // 2. Profile animation: overlay slide down + image scale settle
      .to(
        ".hero-img-overlay",
        {
          yPercent: 100,
          duration: 1.5,
          ease: "power4.inOut",
          force3D: true,
        },
        0.2,
      )
      .fromTo(
        ".hero-person-img",
        { scale: 1.15 },
        { scale: 1, duration: 1.5, ease: "power4.inOut", force3D: true },
        "<",
      )
      // 3. Subsidiary elements fade/slide in
      .to(
        ".hero-fade",
        { opacity: 1, duration: 1.2, ease: "power4.out" },
        0.4,
      );

    heroTimeline.current = tl;

    // If the preloader never signals (stalled raf, error, blocked
    // script…) the headline still reveals instead of staying hidden.
    const fallback = window.setTimeout(() => {
      if (tl.progress() === 0) {
        // Ticker never ran — jump straight to the finished state.
        gsap.set(".hero-line-inner", { clearProps: "transform" });
        gsap.set(".hero-fade", { opacity: 1 });
      } else {
        tl.play();
      }
    }, HERO_FALLBACK_MS);

    return () => {
      window.clearTimeout(fallback);
      tl.kill();
      heroTimeline.current = null;
    };
  }, []);

  useEffect(() => {
    if (!revealed) return;
    heroTimeline.current?.play();
  }, [revealed]);
};
