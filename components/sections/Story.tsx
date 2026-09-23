import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const principles = [
  { label: "Coffee", text: "Pulled and poured by hand, one cup at a time." },
  { label: "Food", text: "Simple plates, made fresh and meant to share." },
  { label: "Company", text: "A table for whoever walks through the door." },
];

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="section-y">
      <div className="container-edge grid gap-14 lg:grid-cols-12 lg:gap-x-10">
        <div data-clip className="lg:col-span-5">
          <ImageFrame
            photo={images.barista}
            ratio="aspect-[4/5]"
            parallax
            position="50% 40%"
            sizes="(min-width:1024px) 40vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-between gap-16 lg:col-span-6 lg:col-start-7 lg:pt-4">
          <div>
            <p data-rise className="micro mb-8 text-muted">
              Our story
            </p>
            <SectionHeading
              id="story-title"
              size="md"
              className="lg:text-[clamp(2.75rem,5vw,5rem)]"
              lines={["A small café", "with a slower", "kind of day."]}
            />
            <p data-rise className="body-copy mt-10 max-w-[46ch]">
              Zayn Coffee is built on a simple idea: a good cup deserves a good seat. We keep the menu short, the
              bar unhurried and the door open, so the morning rush never has to feel like one.
            </p>
          </div>

          <ul data-rise className="border-t border-rule">
            {principles.map((p) => (
              <li
                key={p.label}
                className="grid grid-cols-[6rem_1fr] items-baseline gap-4 border-b border-rule py-5 sm:grid-cols-[8rem_1fr]"
              >
                <span className="micro">{p.label}</span>
                <span className="text-sm leading-relaxed text-muted">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
