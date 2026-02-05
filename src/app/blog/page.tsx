import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
    <Header />
      <section className="bg-[#eeebe8] min-h-screen py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-[#3b2a1f] font-medium">
              Our Blog
            </h1>
            <p className="mt-4 text-[#6b5a4d]">
              Latest insights on fire safety, HVAC and mechanical systems.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                  <div className="relative h-60">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl text-[#3b2a1f] font-medium">
                      {blog.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#876C61]">
                      {blog.description}
                    </p>

                    <span className="mt-4 inline-block text-sm text-[#8b5428] font-semibold">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
