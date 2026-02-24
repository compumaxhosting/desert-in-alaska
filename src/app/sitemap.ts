import { MetadataRoute } from "next";
import * as BlogData from "@/data/BlogData";

interface BlogPost {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://desertinalaska.com";

  // Static pages
  const staticPages = [
    "",
    "/about-us",
    "/services",
    "/projects",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamic blog pages
  const blogPages = (Object.values(BlogData)[0] as BlogPost[]).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}
