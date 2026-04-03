"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const galleryItems = [
  {
    src: "/gallery1.webp",
    title: "Commercial Fire Suppression & Life Safety System Installation",
    tag: "Fire Suppression",
    alt: "Commercial fire suppression system installation in Detroit restaurant",
  },
  {
    src: "/gallery2.webp",
    title: "Commercial Kitchen Exhaust Hood Installation",
    tag: "Exhaust Systems",
    alt: "Commercial kitchen exhaust hood system installed in Metro Detroit",
  },
  {
    src: "/service-four.webp",
    title: "Commercial Gas Piping & Mechanical Services",
    tag: "Mechanical Services",
    alt: "Commercial gas piping installation in Detroit industrial facility",
  },
  {
    src: "/gallery4.webp",
    title: "Commercial HVAC Installation & Upgrades",
    tag: "HVAC",
    alt: "Commercial HVAC system installation in Detroit warehouse",
  },
  {
    src: "/gallery3.webp",
    title: "Industrial Dry Chemical Fire Suppression System",
    tag: "Dry Chemical",
    alt: "Industrial dry chemical fire suppression system in Detroit manufacturing plant",
  },
  {
    src: "/gallery5.webp",
    title: "Fire Sprinkler System Modification & Upgrades",
    tag: "Fire Suppression",
    alt: "Commercial fire sprinkler modification project in Metro Detroit",
  },
];

export default function Gallery() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section className="bg-[#faf8f5] pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-widest text-[#8b5428] font-serif">
            Our Work in Detroit
          </p>

          {/* ✅ SEO-Optimized H2 */}
          <h2 className="mt-4 text-4xl md:text-5xl leading-[1.01] text-[#3b2a1f]">
            Commercial Fire Suppression & <br />
            HVAC in Metro{" "}
            <a
              href="https://www.wikidata.org/wiki/Q12439"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit"
            >
              Detroit
            </a>
          </h2>

          <p className="pt-4 text-sm text-[#6b5a4d] font-serif max-w-3xl mx-auto">
            We provide expert commercial and industrial fire suppression, HVAC,
            mechanical, and gas piping solutions for restaurants, warehouses,
            and manufacturing facilities throughout Detroit and surrounding
            areas. Reliable, built to keep your business safe and running
            efficiently
          </p>
        </div>

        {/* GALLERY GRID */}
        <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 220}ms` }}
              className={`group relative h-65 overflow-hidden rounded-2xl
                transform transition-all duration-1200 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-2000 ease-out group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#271200] via-[#c98b55]/30 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <div className="p-7">
                  <p className="mb-1 text-xs tracking-widest text-[#c98b55] font-serif">
                    {item.tag}
                  </p>
                  <h3 className="text-lg font-medium text-white font-sans">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-[#3b2a1f] px-10 py-4 font-serif font-semibold text-[#3b2a1f] transition-all duration-300 hover:bg-[#3b2a1f] hover:text-white"
          >
            View All Commercial Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
