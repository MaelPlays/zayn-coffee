"use client";

import { useEffect } from "react";
import { gsap, NO_MOTION_PREF, ease } from "@/lib/animations/gsap";

/** Hero entrance and scroll parallax. Renders nothing; drives the server-rendered hero markup. */
export function HeroMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-hero]");
    if (!root) return;
    const mm = gsap.matchMedia();

    mm.add(NO_MOTION_PREF, () => {
      const q = (sel: string) => root.querySelectorAll(sel);

      gsap
        .timeline({ defaults: { ease: ease.out } })
        .fromTo(q("[data-hero-image]"), { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: ease.inOut }, 0.1)
        .fromTo(q("[data-hero-image] img"), { scale: 1.25 }, { scale: 1, duration: 2, ease: ease.soft }, 0.1)
        // y: 0 overrides the pixel offset GSAP parses from the CSS pre-hide transform.
        .fromTo(q("[data-reveal-line]"), { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.2, stagger: 0.12 }, 0.2)
        .fromTo(q("[data-fade]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, clearProps: "transform" }, 0.8);

      gsap.to(q("[data-parallax]"), {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
