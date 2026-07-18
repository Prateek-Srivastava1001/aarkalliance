import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
      <Image
        src={project.image}
        alt={`${project.name}, ${project.location}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Brand chip */}
      {project.brand && project.brand !== "Hospitality" && (
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-bone/90">
          {project.brand}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-bone">
          {project.name}
        </h3>

        {/* Scope — revealed on hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.scope.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-surface/70 px-2.5 py-1 text-[11px] text-bone/80 backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
