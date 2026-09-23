/**
 * Splits copy into masked lines. Markup only: motion is applied by
 * ScrollAnimations via [data-reveal-line], so this stays a server component.
 * Screen readers get the full sentence through the visually hidden span.
 */
export function TextReveal({ lines }: { lines: string[] }) {
  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden data-reveal className="block">
        {lines.map((line) => (
          <span key={line} className="block overflow-hidden whitespace-nowrap pb-[0.08em] -mb-[0.08em]">
            <span data-reveal-line className="block will-change-transform">
              {line}
            </span>
          </span>
        ))}
      </span>
    </>
  );
}
