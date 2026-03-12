"use client";

import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <>
    <Header />
      <section className="min-h-screen flex items-center bg-[#faf8f5] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
          >
            {/* 404 NUMBER */}
            <h1 className="text-[120px] md:text-[160px] font-light text-[#4b2a18] leading-none">
              404
            </h1>

            {/* TITLE */}
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#3a2418]">
              Page Not Found
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl mx-auto text-[#8b7a6c] font-serif">
              Oops! The page you are looking for doesn’t exist or may have been
              moved. Let’s get you back on track.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#9b5d2e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#864f26] transition"
              >
                <Home size={18} />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#9b5d2e] px-6 py-3 text-sm font-semibold text-[#9b5d2e] hover:bg-[#9b5d2e] hover:text-white transition"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
