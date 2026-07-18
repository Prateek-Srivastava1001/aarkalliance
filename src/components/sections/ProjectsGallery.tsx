"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  // Build filter chips from the brands present in the data (generic
  // "Hospitality" placeholder brands are grouped under "All").
  const brands = useMemo(() => {
    const set = new Set(
      projects.map((p) => p.brand).filter((b) => b && b !== "Hospitality")
    );
    return ["All", ...set];
  }, [projects]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.brand === active);

  return (
    <div>
      {brands.length > 2 && (
        <div className="flex flex-wrap gap-2.5">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActive(brand)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                active === brand
                  ? "border-brass bg-brass text-ink"
                  : "border-line text-muted hover:border-brass/50 hover:text-bone"
              )}
            >
              {brand}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
