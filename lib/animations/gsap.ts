import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const NO_MOTION_PREF = "(prefers-reduced-motion: no-preference)";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export const ease = {
  out: "power4.out",
  inOut: "power4.inOut",
  soft: "power3.out",
} as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION).matches;
