import { Apps } from "@/components/Apps";
import { Contact } from "@/components/Contact";
import { Credibility } from "@/components/Credibility";
import { Ecosystem } from "@/components/Ecosystem";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Parcours } from "@/components/Parcours";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <SectionSeparator />
        <Vision />
        <SectionSeparator />
        <Parcours />
        <SectionSeparator />
        <Apps />
        <SectionSeparator />
        <Founder />
        <SectionSeparator />
        <Credibility />
        <SectionSeparator />
        <Ecosystem />
        <SectionSeparator />
        <Contact />
      </main>
    </>
  );
}
