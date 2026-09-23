"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, NO_MOTION_PREF } from "@/lib/animations/gsap";
import { setLenis } from "@/lib/animations/lenis";

/**
 * Lenis drives scroll; GSAP's ticker drives Lenis, so ScrollTrigger and
 * smooth scrolling share one clock. Touch devices keep native scrolling
 * (Lenis does not smooth touch by default) and reduced-motion users get none.
 */
export function SmoothScroll() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(NO_MOTION_PREF, () => {
      const lenis = new Lenis({ autoRaf: false, lerp: 0.1, anchors: { duration: 1.4 } });
      const tick = (time: number) => lenis.raf(time * 1000);

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);

      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        setLenis(null);
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
