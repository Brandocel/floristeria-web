import type { MetadataRoute } from "next";
import { locales } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}