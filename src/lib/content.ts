import type {
  Service,
  Project,
  Stat,
  ProcessStep,
} from "@/types/content";

import siteData from "@/content/site.json";
import servicesData from "@/content/services.json";
import projectsData from "@/content/projects.json";
import statsData from "@/content/stats.json";
import processData from "@/content/process.json";

/* ------------------------------------------------------------------ */
/*  Single source of truth for all site content.                      */
/*  Everything below is driven by the JSON files in /src/content.     */
/*  Add, remove or reorder entries there — the UI updates on its own. */
/* ------------------------------------------------------------------ */

export interface Site {
  name: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    serviceAreas: string;
    gstin: string;
    pan: string;
  };
  social: {
    instagram: string;
    linkedin: string;
  };
}

export const site = siteData as Site;
export const services = servicesData as Service[];
export const projects = projectsData as Project[];
export const stats = statsData as Stat[];
export const process = processData as ProcessStep[];

/** Services flagged to feature on the homepage (falls back to all). */
export const featuredServices = services.filter((s) => s.featured).length
  ? services.filter((s) => s.featured)
  : services;

/** Projects flagged to feature on the homepage (falls back to all). */
export const featuredProjects = projects.filter((p) => p.featured).length
  ? projects.filter((p) => p.featured)
  : projects;

/** Unique client/brand groups, in first-seen order — used for the logo wall. */
export const clientBrands = Array.from(
  new Set(projects.map((p) => p.brand).filter((b) => b && b !== "Hospitality"))
);

/** Look up a single service by id. */
export const getService = (id: string) => services.find((s) => s.id === id);

/** Look up a single project by id. */
export const getProject = (id: string) => projects.find((p) => p.id === id);
