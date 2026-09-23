import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { SignatureMenu } from "@/components/sections/SignatureMenu";
import { Craft } from "@/components/sections/Craft";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { Experience } from "@/components/sections/Experience";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";
import { ScrollAnimations } from "@/components/animations/ScrollAnimations";

export default function Page() {
  return (
    <>
      <main id="main">
        <Hero />
        <Story />
        <SignatureMenu />
        <Craft />
        <Atmosphere />
        <Experience />
        <Visit />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
