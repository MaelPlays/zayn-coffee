import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Variant = "solid" | "outline" | "text";

const base =
  "group inline-flex items-center gap-3 whitespace-nowrap micro transition-[background,color,transform] duration-[var(--dur-fast)] ease-[var(--ease-out)] active:translate-y-px";

const variants: Record<Variant, string> = {
  solid: "bg-fg text-bg px-5 py-3.5 sm:px-7 sm:py-4 hover:bg-transparent hover:text-fg outline outline-1 outline-fg",
  outline: "px-5 py-3.5 sm:px-7 sm:py-4 outline outline-1 outline-current hover:bg-fg hover:text-bg",
  text: "py-2 border-b border-current",
};

type Props = React.ComponentProps<"a"> & { variant?: Variant };

export function Button({ variant = "solid", className, children, ...rest }: Props) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden
        strokeWidth={1.5}
        className="size-4 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}
