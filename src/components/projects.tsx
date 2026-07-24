"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const projects = [
  {
  image: "/img-top-1.webp",
  tag: "Commercial HVAC",
  location: "Detroit, MI",
  title: "Commercial Ventilation Installation",
  description:
    "Custom commercial ductwork and exhaust ventilation installation for reliable airflow.",
},
{
  image: "/img-top-2.webp",
  tag: "Rooftop HVAC",
  location: "Detroit, MI",
  title: "Rooftop HVAC System Installation",
  description:
    "High-efficiency rooftop HVAC units installed for dependable commercial climate control.",
},
  {
    image: "/restaurant.webp",
    tag: "Fire Suppression",
    location: "Detroit, MI",
    title: "Downtown Restaurant Fire Suppression System",
    description:
      "Complete commercial kitchen fire suppression installation for a new downtown restaurant.",
  },
  {
    image: "/kitchen-exhaust.webp",
    tag: "Kitchen Exhaust",
    location: "Southfield, MI",
    title: "Multi-Tenant Kitchen Exhaust Installation",
    description:
      "Exhaust hood installation for multiple restaurant tenants in a new commercial plaza.",
  },
  {
    image: "/gallery3.webp",
    tag: "Industrial Systems",
    location: "Warren, MI",
    title: "Automotive Paint Booth Fire System",
    description:
      "Dry chemical fire suppression system for collision center paint booths.",
  },
  {
    image: "/gallery4.webp",
    tag: "HVAC",
    location: "Dearborn, MI",
    title: "Office Building HVAC Replacement",
    description:
      "Complete rooftop unit replacement for a commercial office building.",
  },
  {
    image: "/gallery5.webp",
    tag: "Fire Suppression",
    location: "Royal Oak, MI",
    title: "Retail Plaza Fire Sprinkler Modification",
    description:
      "Tenant improvement sprinkler relocations and head replacements.",
  },
  {
    image: "/hero.webp",
    tag: "Fire Suppression",
    location: "Detroit, MI",
    title: "Fast Food Kitchen Fire Safety",
    description:
      "Kitchen fire suppression and exhaust hood system for a quick-service restaurant.",
  },
  {
    image: "/hvac-img.webp",
    tag: "HVAC",
    location: "Sterling Heights, MI",
    title: "Industrial Facility HVAC Upgrade",
    description:
      "Commercial HVAC installation for manufacturing facility offices.",
  },
  {
    image: "/gallery2.webp",
    tag: "Kitchen Exhaust",
    location: "Troy, MI",
    title: "Hotel Kitchen Ventilation System",
    description:
      "Complete kitchen exhaust system for hotel restaurant renovation.",
  },
  {
    image: "/industry.webp",
    tag: "Industrial Systems",
    location: "Livonia, MI",
    title: "Body Shop Dry Chemical System",
    description:
      "Fire suppression installation for automotive body shop spray booth.",
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView(0.15);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-widest text-[#8b5428] font-serif">
            Our Projects
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl leading-[1.05] text-[#3b2a1f]">
            RECENT INSTALLATIONS
          </h1>
          <p className="mt-4 text-sm text-[#8b5428] font-serif max-w-2xl mx-auto">
            A showcase of our commercial fire protection, HVAC, and mechanical
            projects across Metro Detroit.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`rounded-2xl bg-white shadow-md overflow-hidden
                transform transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >
              {/* IMAGE */}
              <div
                className="relative h-60 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* TAG */}
                <span className="absolute left-4 top-4 rounded-full bg-[#8b5428] px-4 py-1 text-xs font-serif text-white">
                  {project.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="mb-2 text-xs text-[#8b7a6c] font-serif">
                  {project.location}
                </p>
                <h3 className="text-lg font-medium text-[#3b2a1f]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b5a4d] font-serif">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* PREVIOUS BUTTON */}
            <button
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              onClick={goToPrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              onClick={goToNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* IMAGE */}
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              {/* PROJECT INFO */}
              <div className="mt-4 text-center">
                <p className="text-sm text-white/70">
                  {projects[currentIndex].location}
                </p>
                <h3 className="text-xl font-medium text-white">
                  {projects[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
