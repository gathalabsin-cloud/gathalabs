import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "content/blog");

  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );

    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      description: data.description,
    };
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Blog</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-white/10 p-6 rounded-3xl hover:bg-white/5 transition"
          >
            <h2 className="text-2xl font-bold">
              {post.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}