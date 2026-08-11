import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPortfolioSlugs } from "@/data/portfolio-projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vitasoft.uz";
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/pricing",
    "/contact",
  ];
  const slugs = getAllPortfolioSlugs();

  const staticPages = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const projectPages = routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({
      url: `${baseUrl}/${locale}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...projectPages];
}
