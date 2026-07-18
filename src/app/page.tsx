import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Projects />
      <About />
      <Process />
      <CTA />
    </>
  );
}
