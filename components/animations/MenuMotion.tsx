"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/animations/gsap";

/**
 * Desktop only: pins the signature menu and scrubs the product track sideways.
 * Below lg, or with reduced motion, the menu is a plain stacked grid (or native horizontal scroll at lg).
 */
export function MenuMotion() {
  useEffect(() => {
    const pin = document.querySelector<HTMLElement>("[data-menu-pin]");
    const viewport = document.querySelector<HTMLElement>("[data-menu-viewport]");
    const track = document.querySelector<HTMLElement>("[data-menu-track]");
    const bar = document.querySelector<HTMLElement>("[data-menu-progress]");
    if (!pin || !viewport || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      gsap.set(viewport, { overflow: "hidden" });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
      tl.to(track, { x: () => -distance() }, 0);
      if (bar) tl.to(bar, { scaleX: 1 }, 0);
    });

    return () => mm.revert();
  }, []);

  return null;
}

