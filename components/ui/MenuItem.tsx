import { ArrowUpRight } from "lucide-react";
import type { Photo } from "@/lib/images";
import { ImageFrame } from "./ImageFrame";

type Props = { name: string; note: string; price: string; photo: Photo };

/** Editorial product panel used in the signature menu. Image-led, text below. */
export function MenuItem({ name, note, price, photo }: Props) {
  return (
    <article className="group w-full lg:w-[34vw] lg:shrink-0 xl:w-[30vw]">
      <ImageFrame
        photo={photo}
        ratio="aspect-[4/5] lg:aspect-auto lg:h-[46dvh]"
        sizes="(min-width:1280px) 30vw, (min-width:1024px) 34vw, (min-width:640px) 50vw, 100vw"
        hoverZoom
      />
      <div className="mt-6 flex items-start justify-between gap-6 transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:translate-x-2">
        <div>
          <h3 className="display-md">{name}</h3>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted">{note}</p>
        </div>
        <div className="micro flex items-center gap-2 pt-2">
          <span>{price}</span>
          <ArrowUpRight
            aria-hidden
            strokeWidth={1.5}
            className="size-4 transition-transform duration-[var(--dur-fast)] group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}
