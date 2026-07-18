import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of hospitality projects delivered by Aark Alliance for Marriott, Hyatt and IHG properties across India.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Finishes delivered across{" "}
            <span className="text-gradient-brass">India&apos;s hotels</span>
          </>
        }
        intro="A selection of properties we've helped build, renovate and rebrand — for the operators guests trust most."
      />

      <section className="pb-8">
        <Container>
          <ProjectsGallery projects={projects} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
