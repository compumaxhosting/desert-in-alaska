import { blogs } from "@/data/BlogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

function createAnchorId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function SingleBlog({ params }: Props) {
  const { slug } = await params; // ✅ REQUIRED IN NEXT 16

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <>
      <Header />

      <section className="bg-white min-h-screen py-8" style={{ scrollBehavior: "smooth" }}>
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-sm text-[#8b5428]">
            ← Back to blog
          </Link>

          <h1 className="mt-3 pb-1 md:mt-6 text-3xl md:text-4xl lg:text-5xl text-[#3b2a1f] font-medium">
            {blog.title}
          </h1>

          <div className="relative mt-8 h-100">
            <Image
              src={blog.image}
              alt={blog.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <p className="mt-6 text-lg text-[#6b5a4d]">{blog.description}</p>

          {blog.sections.length > 0 && (
            <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-[#e6ddd5] bg-[#faf8f5] p-6">
              <h2 className="text-xl font-semibold text-[#3b2a1f] mb-4">Table of Contents</h2>
              <ul className="space-y-3">
                {blog.sections.map((section, index) => {
                  const id = createAnchorId(section.title);
                  return (
                    <li key={id}>
                      <a href={`#${id}`} className="text-[#1915de] hover:text-[#3b2a1f]">
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}

          <div className="mt-10 space-y-10">
            {blog.sections.map((section, i) => (
              <div key={i}>
                <h2
                  id={createAnchorId(section.title)}
                  className="text-2xl pb-1 md:text-3xl text-[#3b2a1f] font-medium"
                >
                  {section.title}
                </h2>

                <div className="mt-2 text-[#444] leading-relaxed">
                  {section.paragraph}
                </div>

                {section.image && (
                  <div className="relative mt-6 h-80 w-full">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
