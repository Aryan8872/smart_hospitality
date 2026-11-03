"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gold cursor ring for fine pointers only.
 * Uses event delegation so dynamically mounted links still activate it,
 * and removes every listener on unmount.
 */
export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let visible = false;

    const render = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        visible = true;
        currentX = targetX;
        currentY = targetY;
        cursor.style.opacity = "1";
      }

      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest?.(
        "a, button, input, textarea, select, [data-cursor='active']",
      );
      cursor.classList.toggle("active", Boolean(interactive));
    };

    const onPointerLeave = () => {
      visible = false;
      cursor.style.opacity = "0";
    };

    const onPointerEnter = () => {
      visible = true;
      cursor.style.opacity = "1";
    };

    cursor.style.opacity = "0";
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerenter", onPointerEnter);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerenter", onPointerEnter);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
};
