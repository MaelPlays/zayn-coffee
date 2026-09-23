import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { NavLink } from "@/components/ui/NavLink";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-nav-theme="dark" className="bg-black py-16 text-white lg:py-20">
      <div className="container-edge">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#top" aria-label={`${site.name}, back to top`} className="inline-block">
              <Image src={images.logo.src} alt="" width={112} height={112} className="size-16 bg-white object-contain" />
            </a>
            <p className="mt-6 max-w-[28ch] text-sm leading-relaxed text-[#a8a8a8]">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3 lg:gap-x-12">
            {site.nav.map((item) => (
              <NavLink key={item.label} href={item.href} className="text-white">
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start gap-6 border-t border-[#2a2a2a] pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="micro text-[#a8a8a8]">
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="group micro inline-flex items-center gap-2">
            Back to top
            <ArrowUp aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-[var(--dur-fast)] group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
