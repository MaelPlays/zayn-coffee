"use client";

import { useEffect } from "react";
import { gsap, NO_MOTION_PREF } from "@/lib/animations/gsap";

/**
 * Drives the white-to-black wash behind the experience statement.
 * The transition is timed to finish exactly as Navigation's own dark-section
 * threshold fires ("top 36px"), so the fixed nav never inverts over a
 * half-transitioned, low-contrast background. Reduced-motion users get the
 * section's static default (solid black, set in markup) and skip this entirely.
 */
export function ExperienceMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-experience]");
    if (!section) return;
    const mm = gsap.matchMedia();

    mm.add(NO_MOTION_PREF, () => {
      gsap.fromTo(
        section,
        { backgroundColor: "#ffffff", color: "#000000" },
        {
          backgroundColor: "#000000",
          color: "#ffffff",
          ease: "none",
          scrollTrigger: { trigger: section, start: "top 90%", end: "top 200px", scrub: true },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return null;
}
