import { MetadataRoute } from "next";
import * as BlogData from "@/data/BlogData";

interface BlogPost {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.desertinalaska.com";

  const now = new Date();

  /* STATIC PAGES */
  const staticPages = [
    "",
    "/about-us",
    "/services",
    "/projects",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  /* SERVICE PAGES (VERY IMPORTANT) */
  const servicePages = [
    "/services/commercial-fire-suppression-detroit",
    "/services/commercial-hvac-detroit",
    "/services/kitchen-exhaust-systems-detroit",
    "/services/gas-piping-detroit",
    "/services/industrial-dry-chemical-fire-suppression-detroit",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  /* BLOG PAGES */
  const blogPages = (Object.values(BlogData)[0] as BlogPost[]).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
