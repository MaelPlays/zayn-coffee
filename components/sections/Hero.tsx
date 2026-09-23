import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextReveal } from "@/components/ui/TextReveal";
import { HeroMotion } from "@/components/animations/HeroMotion";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="top" data-hero aria-labelledby="hero-title" className="flex min-h-[100dvh] flex-col pb-8 pt-24">
      <div className="container-edge grid flex-1 content-start gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:gap-x-10">
        <div className="lg:col-span-8 lg:row-start-1">
          <p data-fade className="micro mb-5 text-[0.625rem] tracking-[0.14em] text-muted sm:text-[0.6875rem] sm:tracking-[0.18em] lg:mb-10">
            Specialty coffee / Good food / Slow moments
          </p>
          <h1 id="hero-title" className="display-hero">
            <TextReveal lines={["Coffee", "worth slowing", "down for."]} />
          </h1>
        </div>

        <div
          data-hero-image
          className="relative h-[34dvh] min-h-[14rem] lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1 lg:h-auto"
        >
          <ImageFrame
            photo={images.heroLatte}
            fill
            parallax
            priority
            position="50% 62%"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </div>

        <div className="flex items-end justify-between gap-8 lg:col-span-8 lg:row-start-3">
          <div data-fade className="grid gap-6 lg:gap-8">
            <p className="body-copy">
              Specialty coffee, good food and a bright corner of Hilongos to sit in. Stay a while.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#menu">Explore our coffee</Button>
              <Button href="#visit" variant="outline">
                Visit us
              </Button>
            </div>
          </div>

          <a
            data-fade
            href="#story"
            aria-label="Continue to the story"
            className="hidden flex-col items-center gap-3 lg:flex"
          >
            <span className="h-14 w-px bg-current" aria-hidden />
            <ArrowDown aria-hidden strokeWidth={1.5} className="size-4 motion-safe:animate-[nudge_2.4s_ease-in-out_infinite]" />
          </a>
        </div>
      </div>
      <HeroMotion />
    </section>
  );
}
