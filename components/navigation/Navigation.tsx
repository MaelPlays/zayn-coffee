"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { gsap, ScrollTrigger, ease, prefersReducedMotion } from "@/lib/animations/gsap";
import { getLenis } from "@/lib/animations/lenis";
import { NavLink } from "@/components/ui/NavLink";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstOpen = useRef(true);

  /*
   * Invert the nav while it sits over any [data-nav-theme="dark"] section.
   * Driven by live rect overlap with the nav band (not fixed scroll-distance
   * triggers) so it stays correct even for a trailing section shorter than
   * the viewport, whose top can never scroll past a fixed threshold line.
   */
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header");
    if (!header) return;
    const sections = gsap.utils.toArray<HTMLElement>("[data-nav-theme='dark']");
    if (!sections.length) return;

    const check = () => {
      const navBand = header.offsetHeight;
      const active = sections.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < navBand && r.bottom > 0;
      });
      setOverDark(active);
    };

    check();
    const trigger = ScrollTrigger.create({ trigger: document.body, start: "top top", end: "max", onUpdate: check, onRefresh: check });
    window.addEventListener("resize", check);
    return () => {
      trigger.kill();
      window.removeEventListener("resize", check);
    };
  }, []);

  /* Mobile menu open / close motion, scroll lock, focus handling. */
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const lines = menu.querySelectorAll("[data-menu-line]");
    const reduce = prefersReducedMotion();
    gsap.killTweensOf([menu, lines]);

    const outside = document.querySelectorAll<HTMLElement>("#main, footer");

    if (open) {
      const lenis = getLenis();
      if (lenis) lenis.stop();
      else document.body.style.overflow = "hidden";

      outside.forEach((el) => (el.inert = true));
      gsap.set(menu, { autoAlpha: 1 });
      if (reduce) {
        gsap.set(menu, { clipPath: "inset(0% 0 0 0)" });
        gsap.set(lines, { yPercent: 0 });
      } else {
        gsap.fromTo(menu, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 0.8, ease: ease.inOut });
        gsap.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: ease.out, stagger: 0.07, delay: 0.35 });
      }
      menu.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
    } else if (!firstOpen.current) {
      getLenis()?.start();
      document.body.style.overflow = "";
      outside.forEach((el) => (el.inert = false));
      gsap.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: reduce ? 0 : 0.6,
        ease: ease.inOut,
        onComplete: () => void gsap.set(menu, { autoAlpha: 0 }),
      });
    }
    firstOpen.current = false;

    return () => {
      getLenis()?.start();
      document.body.style.overflow = "";
      outside.forEach((el) => (el.inert = false));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const dark = open || overDark;

  return (
    <>
      <header
        data-theme={dark ? "dark" : "light"}
        className="fixed inset-x-0 top-0 z-[var(--z-nav)] text-black transition-colors duration-[var(--dur-fast)] data-[theme=dark]:text-white"
      >
        <div className="container-edge flex h-[76px] items-center justify-between">
          <a href="#top" aria-label={`${site.name}, back to top`} className="block">
            <Image src={images.logo.src} alt="" width={112} height={112} priority className="size-14 bg-white object-contain" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {site.nav.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="micro -mr-2 min-h-11 px-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!open}
        role="dialog"
        aria-label="Site menu"
        className="invisible fixed inset-0 z-[var(--z-menu)] flex flex-col justify-between bg-black px-[var(--gutter)] pb-10 pt-28 text-white lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="grid gap-2">
            {site.nav.map((item) => (
              <li key={item.label} className="overflow-hidden">
                <a
                  data-menu-line
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display-lg block py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="overflow-hidden">
          <p data-menu-line className="micro text-[#a8a8a8]">
            {site.town}
          </p>
        </div>
      </div>
    </>
  );
}
