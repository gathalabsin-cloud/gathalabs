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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, " ")} | Gatha Labs`,
    description: "Gatha Labs Blog",
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black">
          Blog post not found.
        </h1>
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
    <main className="min-h-screen bg-[#f5f7fb] py-14 px-4">
      <article className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

        {/* Top Section */}
        <div className="px-8 md:px-14 pt-12 pb-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Technology
            </span>

            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Computer Basics
            </span>

            <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              Education
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#0f172a]">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-500 leading-8 mt-8 max-w-4xl">
            {data.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Content */}
        <div className="px-8 md:px-14 pb-16">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: contentHtml,
            }}
          />
        </div>
      </article>
    </main>
  );
}