import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogDirectory = path.join(process.cwd(), "content/blog");

  const blogUrls: MetadataRoute.Sitemap = fs.existsSync(blogDirectory)
    ? fs
        .readdirSync(blogDirectory)
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
          url: `https://gathalabs.in/blog/${file.replace(".md", "")}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        }))
    : [];

  return [
    {
      url: "https://gathalabs.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://gathalabs.in/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gathalabs.in/courses",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://gathalabs.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://gathalabs.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogUrls,
  ];
}