import { MenuItem } from "@/components/ui/MenuItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuMotion } from "@/components/animations/MenuMotion";
import { signatureMenu } from "@/lib/menu";

export function SignatureMenu() {
  return (
    <section id="menu" data-nav-theme="dark" aria-labelledby="menu-title" className="theme-dark bg-bg text-fg">
      <div data-menu-pin className="flex flex-col gap-12 py-24 lg:h-[100dvh] lg:justify-between lg:gap-0 lg:pb-10 lg:pt-28">
        <div className="container-edge">
          <SectionHeading
            id="menu-title"
            size="md"
            lines={["Signature cups"]}
            className="lg:text-[clamp(2.75rem,4.6vw,4.5rem)]"
          />
          <p data-rise className="body-copy mt-6 lg:mt-8">
            Four cups we pour every day. Ask what is best right now.
          </p>
        </div>

        <div>
          <div data-menu-viewport className="lg:overflow-x-auto">
            <div
              data-menu-track
              className="grid gap-14 px-[var(--gutter)] sm:grid-cols-2 sm:gap-x-8 lg:flex lg:w-max lg:gap-10 lg:pr-[var(--gutter)]"
            >
              {signatureMenu.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </div>
          <div aria-hidden className="container-edge mt-8 hidden lg:block">
            <div className="h-px bg-rule">
              <div data-menu-progress className="h-px origin-left scale-x-0 bg-fg" />
            </div>
          </div>
        </div>
      </div>
      <MenuMotion />
    </section>
  );
}
