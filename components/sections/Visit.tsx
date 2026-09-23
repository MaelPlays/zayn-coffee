import { Button } from "@/components/ui/Button";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

/** Simple Icons CDN, monochrome to match the strict black/white palette. lucide-react has no brand marks. */
const socialSlug: Record<string, string> = { Instagram: "instagram", Facebook: "facebook" };

export function Visit() {
  const primarySocial = site.social[0];

  return (
    <section id="visit" aria-labelledby="visit-title" className="section-y">
      <div className="container-edge">
        <SectionHeading id="visit-title" as="h2" size="lg" lines={["Come say", "hello."]} />
        <div className="max-w-[46ch]">
          <p data-rise className="body-copy mt-8">
            Drop by for a cup, a plate and a place to sit. No reservation needed, just come as you are.
          </p>
          <div data-rise className="mt-8 flex flex-wrap gap-3">
            <Button href={site.directionsHref}>Get directions</Button>
            <Button href={primarySocial.href} variant="outline">
              Follow us
            </Button>
          </div>
        </div>
      </div>

      <div data-clip className="relative mt-16 h-[46dvh] min-h-[18rem] w-full lg:mt-20 lg:h-[58dvh]">
        <ImageFrame
          photo={images.storefrontWide}
          fill
          parallax
          position="50% 55%"
          sizes="100vw"
          className="h-full"
        />
      </div>

      <div className="container-edge">
        <div data-rise className="mt-16 grid gap-10 border-t border-rule pt-10 sm:grid-cols-3 lg:mt-20">
          <div>
            <p className="micro mb-3 text-muted">Address</p>
            <p className="text-sm leading-relaxed text-fg">{site.address}</p>
          </div>

          <div>
            <p className="micro mb-3 text-muted">Hours</p>
            <ul className="grid gap-1.5">
              {site.hours.map((h) => (
                <li key={h.days} className="text-sm leading-relaxed text-fg">
                  <span className="text-muted">{h.days}</span> {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="micro mb-3 text-muted">Contact</p>
            <ul className="grid gap-1.5">
              <li>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-sm leading-relaxed text-fg hover:text-muted">
                  {site.phone}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex gap-4">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block opacity-80 transition-opacity hover:opacity-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${socialSlug[s.label]}/000000`}
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
