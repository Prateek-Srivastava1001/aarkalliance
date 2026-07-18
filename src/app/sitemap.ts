import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/projects", "/contact"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
