import { cn } from "@/lib/utils/cn";
import { TextReveal } from "./TextReveal";

type Props = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  lines: string[];
  id?: string;
  className?: string;
};

const sizeClass = { xl: "display-xl", lg: "display-lg", md: "display-md" } as const;

/** Large editorial heading. Each entry in `lines` is one masked line that animates in. */
export function SectionHeading({ as: Tag = "h2", size = "lg", lines, id, className }: Props) {
  return (
    <Tag id={id} className={cn(sizeClass[size], className)}>
      <TextReveal lines={lines} />
    </Tag>
  );
}
