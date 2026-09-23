import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceMotion } from "@/components/animations/ExperienceMotion";

/**
 * The page's one deliberate theme switch: a centered manifesto statement
 * that washes from white to black as it scrolls through. Reduced-motion
 * users get the static end state (solid black) rather than the transition.
 */
export function Experience() {
  return (
    <section
      id="experience"
      data-nav-theme="dark"
      data-experience
      className="flex min-h-[100dvh] items-center justify-center bg-black text-white"
    >
      <div className="container-edge text-center">
        <SectionHeading as="h2" size="lg" lines={["Good coffee.", "Good people.", "Good days."]} className="mx-auto" />
      </div>
      <ExperienceMotion />
    </section>
  );
}
