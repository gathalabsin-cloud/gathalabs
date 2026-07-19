import fs from "fs";
import path from "path";

export default function sitemap() {
  const blogDirectory = path.join(process.cwd(), "content/blog");

  let blogUrls = [];

  if (fs.existsSync(blogDirectory)) {
    blogUrls = fs
      .readdirSync(blogDirectory)
      .filter((file) => file.endsWith(".md"))
      .map((file) => ({
        url: `https://gathalabs.in/blog/${file.replace(".md", "")}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  }

  return [
    {
      url: "https://gathalabs.in",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },

    {
      url: "https://gathalabs.in/blog",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    {
      url: "https://gathalabs.in/courses",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://gathalabs.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    {
      url: "https://gathalabs.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },

    ...blogUrls,
  ];
}