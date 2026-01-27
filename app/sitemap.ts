import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllSlugs } from "@/lib/courses";
import { getAllJournalSlugs } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/courses",
    "/locations",
    "/about",
    "/book",
    "/faq",
    "/instructors",
    "/legal",
    "/contact",
    "/journal",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const courseRoutes = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const journalRoutes = getAllJournalSlugs().map((slug) => ({
    url: `${siteConfig.url}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...journalRoutes];
}
