import { ImageFrame } from "@/components/ui/ImageFrame";
import { images } from "@/lib/images";

/**
 * Full-bleed visual storytelling moment between the menu and the atmosphere
 * section. One photograph, one line of type. No eyebrow (budget spent on
 * Hero and Story), no card, no split layout, so it reads as a pause.
 */
export function Craft() {
  return (
    <section id="craft" data-nav-theme="dark" aria-labelledby="craft-title" className="relative">
      <div data-clip className="relative h-[78dvh] min-h-[30rem] w-full lg:h-[94dvh]">
        <ImageFrame
          photo={images.baristaBar}
          fill
          parallax
          position="88% 78%"
          sizes="100vw"
          className="h-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="container-edge pb-12 lg:pb-20">
          <h2 id="craft-title" className="text-white">
            <span className="sr-only">Crafted slowly.</span>
            <span aria-hidden data-reveal className="block">
              <span className="display-xl block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <span data-reveal-line className="block will-change-transform">
                  Crafted
                </span>
              </span>
              <span className="block overflow-hidden pb-2 -mb-1 leading-[1.1]">
                <span
                  data-reveal-line
                  className="serif-accent block whitespace-nowrap text-[clamp(2.5rem,7.5vw,7rem)] leading-[1.1] will-change-transform"
                >
                  slowly.
                </span>
              </span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
