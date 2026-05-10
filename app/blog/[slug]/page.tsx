import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Blog post not found.
      </div>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          {data.title}
        </h1>

        <p className="text-gray-400 mb-10">
          {data.description}
        </p>

        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        />
      </div>
    </div>
  );
}