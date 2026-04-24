"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from "@/data/BlogData";

export default function BlogPage() {
  const router = useRouter();

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
              
              <div
                key={blog.slug}
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full cursor-pointer"
              >
                
                {/* IMAGE */}
                <div className="relative h-60 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  
                  <h3 className="text-xl text-[#3b2a1f] font-medium line-clamp-2 hover:underline">
                    {blog.title}
                  </h3>

                  {blog.lastUpdated && (
                    <p className="mt-1 text-xs text-[#8b5428] font-medium">
                      Last updated: {blog.lastUpdated}
                    </p>
                  )}

                  <p className="mt-3 text-sm text-[#876C61] line-clamp-3 grow">
                    {blog.description}
                  </p>

                  <span className="mt-4 inline-block text-sm text-[#8b5428] font-semibold hover:underline">
                    Read More →
                  </span>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}