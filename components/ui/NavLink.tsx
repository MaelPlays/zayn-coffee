import { cn } from "@/lib/utils/cn";

/** Text link with an underline that draws in from the left on hover/focus. */
export function NavLink({ className, children, ...rest }: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "relative micro py-2 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[var(--dur-fast)] after:ease-[var(--ease-out)] hover:after:scale-x-100 focus-visible:after:scale-x-100",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
