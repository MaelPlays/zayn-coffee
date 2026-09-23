"use client";

import { useEffect } from "react";
import { gsap, NO_MOTION_PREF, ease } from "@/lib/animations/gsap";

/**
 * Site-wide scroll reveals, driven by data attributes so sections stay server components:
 *   [data-reveal]   masked line reveal (children [data-reveal-line])
 *   [data-rise]     fade and lift
 *   [data-clip]     clip-path wipe with an inner image settling
 *   [data-parallax] slow vertical drift
 * The hero owns its own intro, so anything inside [data-hero] is skipped.
 */
export function ScrollAnimations() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(NO_MOTION_PREF, () => {
      const outside = (sel: string) =>
        gsap.utils.toArray<HTMLElement>(sel).filter((el) => !el.closest("[data-hero]"));
      const trigger = (el: Element, start = "top 88%") => ({ trigger: el, start, once: true });

      outside("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll("[data-reveal-line]"),
          { yPercent: 110, y: 0 },
          { yPercent: 0, y: 0, duration: 1.2, ease: ease.out, stagger: 0.1, scrollTrigger: trigger(el) },
        );
      });

      outside("[data-rise]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1, ease: ease.soft, clearProps: "transform", scrollTrigger: trigger(el, "top 92%") },
        );
      });

      outside("[data-clip]").forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: trigger(el, "top 85%") });
        tl.fromTo(el, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: ease.inOut }, 0);
        const img = el.querySelector("img");
        if (img) tl.fromTo(img, { scale: 1.2 }, { scale: 1, duration: 2, ease: ease.soft }, 0);
      });

      outside("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
