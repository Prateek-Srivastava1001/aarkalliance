/* ------------------------------------------------------------------ */
/*  Content types                                                      */
/*  These describe the shape of the JSON files in /src/content.        */
/*  Editing those JSON files is all you need to add/remove/reorder     */
/*  services and projects — the UI reads from them automatically.      */
/* ------------------------------------------------------------------ */

/** A single service offering (see /src/content/services.json). */
export interface Service {
  /** Stable unique id / URL slug, e.g. "waterproofing". */
  id: string;
  /** Display name, e.g. "Waterproofing". */
  title: string;
  /** Short one-liner shown under the title. */
  tagline: string;
  /** Longer paragraph used on cards / detail sections. */
  description: string;
  /**
   * Lucide icon name (see https://lucide.dev/icons).
   * Falls back to a default icon if the name is not found.
   */
  icon: string;
  /** Image path. Local files live in /public/images/services. */
  image: string;
  /** Bullet points describing what's included. */
  highlights: string[];
  /** Set true to feature prominently. */
  featured?: boolean;
}

/** A completed project / portfolio entry (see /src/content/projects.json). */
export interface Project {
  /** Stable unique id / URL slug. */
  id: string;
  /** Property / client name, e.g. "Hyatt Regency Pune". */
  name: string;
  /** City or area, e.g. "Pune". */
  location: string;
  /** Hotel/brand group, e.g. "Marriott International". */
  brand: string;
  /** Sector tag used for filtering, e.g. "Hospitality". */
  category: string;
  /** Scope of work delivered — pulls from service ids or free text. */
  scope: string[];
  /** Short description of the engagement. */
  description: string;
  /** Image path. Local files live in /public/images/projects. */
  image: string;
  /** Optional year of completion. */
  year?: string;
  /** Set true to show on the homepage highlight grid. */
  featured?: boolean;
}

/** A trust/stat figure (see /src/content/stats.json). */
export interface Stat {
  value: string;
  label: string;
}

/** A step in the delivery process. */
export interface ProcessStep {
  title: string;
  description: string;
}

/** A client testimonial. */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
