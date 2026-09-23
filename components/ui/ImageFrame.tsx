import Image from "next/image";
import type { Photo } from "@/lib/images";
import { cn } from "@/lib/utils/cn";

type Props = {
  photo: Photo;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]". Omit to use the photo's own ratio. */
  ratio?: string;
  /** Fill the parent's height instead of using an aspect ratio. */
  fill?: boolean;
  sizes: string;
  priority?: boolean;
  position?: string;
  /** Adds a data hook (and overscan) for scroll parallax handled by ScrollAnimations. */
  parallax?: boolean;
  /** Subtle zoom on parent `.group` hover. */
  hoverZoom?: boolean;
  className?: string;
};

export function ImageFrame({ photo, ratio, fill, sizes, priority, position = "center", parallax, hoverZoom, className }: Props) {
  const ownRatio = !ratio && !fill;
  return (
    <div
      className={cn("relative overflow-hidden bg-paper", ratio, fill && "h-full", className)}
      style={ownRatio ? { aspectRatio: `${photo.width} / ${photo.height}` } : undefined}
    >
      <div
        className={cn("absolute inset-x-0", parallax ? "-inset-y-[8%]" : "inset-y-0")}
        data-parallax={parallax ? "" : undefined}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            hoverZoom &&
              "transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]",
          )}
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}
