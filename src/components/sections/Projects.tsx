import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Delivered for the names
                <br className="hidden sm:block" /> that set the{" "}
                <span className="text-gradient-brass">standard</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-bone transition-colors hover:border-brass/50 hover:text-brass"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
