import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SingleBlog({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <>
    <Header />
      <section className="bg-white min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-sm text-[#8b5428]">
            ← Back to blog
          </Link>

          <h1 className="mt-6 text-4xl text-[#3b2a1f] font-medium">
            {blog.title}
          </h1>

          <div className="relative mt-8 h-100">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <p className="mt-6 text-lg text-[#6b5a4d]">{blog.description}</p>

          <div className="mt-10 space-y-10">
            {blog.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl text-[#3b2a1f] font-medium">
                  {section.title}
                </h2>
                <p className="mt-3 text-[#444] leading-relaxed">
                  {section.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
