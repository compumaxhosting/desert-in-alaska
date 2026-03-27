"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useInView } from "@/hooks/useInView";

export default function AboutUs() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#faf8f5] py-14 md:py-16">
      <div ref={ref} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-3 grid gap-20 lg:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div
          className={`relative transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl h-92.5">
            <Image
              src="/about.webp"
              alt="Detroit commercial fire suppression and HVAC contractors"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* YEARS BADGE */}
          <div
            className={`absolute -bottom-10 right-0 rounded-xl bg-[#86522d] px-3 py-5 md:px-4 md:py-8 text-center text-white shadow-2xl
              transition-all duration-700 ease-out delay-200
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <div className="text-3xl md:text-4xl font-normal leading-none">
              27+
            </div>
            <div className="mt-2 text-xs md:text-sm font-serif tracking-wide">
              Years Serving Detroit
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <p className="text-xs uppercase tracking-widest text-[#86522d] font-serif">
            About Desert In Alaska
          </p>

          {/* ✅ SEO H2 */}
          <h2 className="mt-4 text-5xl leading-[1.01] text-[#432719] font-sans">
            Trusted Commercial Fire Suppression & HVAC Contractors in Detroit
          </h2>

          <p className="mt-6 max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Desert In Alaska Corp has been a trusted name in Detroit’s
            commercial fire suppression, HVAC, and mechanical services industry
            since 1997. What began as a commercial HVAC company has grown into a
            full-service fire safety and mechanical contracting firm serving
            restaurants, warehouses, and industrial facilities throughout Metro
            Detroit.
          </p>

          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            We specialize in commercial kitchen fire suppression systems,
            industrial dry chemical systems, gas piping, sprinkler
            modifications, and exhaust hood installations. Our licensed and
            certified technicians ensure every project meets strict safety
            standards, building codes, and compliance regulations.
          </p>

          {/* CHECKLIST */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 text-[#432719] font-serif">
            {[
              "Serving Detroit & Metro Detroit since 1997",
              "Licensed and fully insured contractors",
              "Certified commercial technicians",
              "Code-compliant fire safety installations",
              "Commercial & industrial project expertise",
              "Preventative maintenance programs available",
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 text-sm transition-all duration-500 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <IoMdCheckmarkCircleOutline className="mt-0.5 h-5 w-5 text-[#86522d] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about-us"
            className={`mt-12 inline-flex items-center gap-3 rounded-md bg-[#432719] px-8 py-4 text-sm font-semibold text-white hover:bg-[#2f1b12] font-serif
            transition-all duration-700 ease-out delay-300
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Learn More About Our Detroit Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
