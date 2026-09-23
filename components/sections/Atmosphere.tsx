import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

/**
 * Café atmosphere, magazine-spread composition. Mixed image ratios in an
 * asymmetric two-column arrangement rather than a repeat of Story's split
 * layout, so the page keeps rotating its layout families.
 */
export function Atmosphere() {
  return (
    <section id="atmosphere" aria-labelledby="atmosphere-title" className="section-y">
      <div className="container-edge">
        <SectionHeading
          id="atmosphere-title"
          size="md"
          className="max-w-[18ch] lg:text-[clamp(2.75rem,5vw,5rem)]"
          lines={["A quiet room,", "filled slowly."]}
        />

        <div className="mt-14 flex flex-col gap-4 lg:mt-20 lg:flex-row lg:items-start lg:gap-6">
          <div data-clip className="lg:w-[42%]">
            <ImageFrame
              photo={images.interiorSeating}
              ratio="aspect-[4/5]"
              position="50% 40%"
              sizes="(min-width:1024px) 40vw, 100vw"
              hoverZoom
            />
          </div>

          <div className="flex flex-col gap-4 lg:w-[52%] lg:pt-10">
            <div data-clip>
              <ImageFrame
                photo={images.sandwich}
                ratio="aspect-[16/11]"
                sizes="(min-width:1024px) 48vw, 100vw"
                hoverZoom
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div data-clip>
                <ImageFrame
                  photo={images.latteCheesecake}
                  ratio="aspect-[3/4]"
                  sizes="(min-width:1024px) 24vw, 50vw"
                  hoverZoom
                />
              </div>
              <div data-clip>
                <ImageFrame
                  photo={images.icedRoll}
                  ratio="aspect-[3/4]"
                  sizes="(min-width:1024px) 24vw, 50vw"
                  hoverZoom
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
