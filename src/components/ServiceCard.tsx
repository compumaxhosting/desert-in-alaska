"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Snowflake,
  Utensils,
  FlameKindling,
  Factory,
} from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const services = [
  {
    badge: "Primary Focus",
    icon: Flame,
    title: "Fire Suppression & Life Safety",
    link: "/services/commercial-fire-suppression-detroit",
    description:
      "Comprehensive fire safety solutions for commercial and industrial facilities.",
    image: "/service-one.webp",
    points: [
      "Commercial kitchen fire suppression systems (full installation and service)",
      "Fire sprinkler system modifications and upgrades",
      "Fire extinguisher certification and servicing",
      "Emergency lighting and exit sign systems",
    ],
  },
  {
    badge: "Core Service",
    icon: Snowflake,
    title: "Heating & Cooling (HVAC)",
    link: "/services/commercial-hvac-detroit",
    description:
      "Complete HVAC services for commercial buildings, restaurants, and industrial facilities.",
    image: "/service-two.webp",
    points: [
      "Commercial HVAC installation",
      "Heating and cooling system repair",
      "Rooftop units and system replacement",
      "Preventative maintenance programs",
    ],
  },
  {
    badge: "Commercial",
    icon: Utensils,
    title: "Commercial Kitchen Exhaust Systems",
    link: "/services/kitchen-exhaust-systems-detroit",
    description: "Professional kitchen exhaust hood and ventilation solutions.",
    image: "/service-three.webp",
    points: [
      "Kitchen exhaust hood installation",
      "Ductwork and ventilation systems",
      "System servicing and upgrades",
      "Code-compliant installations",
    ],
  },
  {
    badge: "Mechanical",
    icon: FlameKindling,
    title: "Gas Piping & Mechanical Services",
    link: "/services/gas-piping-detroit",
    description:
      "Expert gas piping and mechanical system services for commercial properties.",
    image: "/service-four.webp",
    points: [
      "Commercial gas piping installation",
      "Tenant improvements",
      "System modifications",
      "Safety inspections and compliance",
    ],
  },
  {
    badge: "Industrial",
    icon: Factory,
    title: "Industrial Dry Chemical Systems",
    link: "/services/industrial-dry-chemical-fire-suppression-detroit",
    description:
      "Specialized fire suppression systems for industrial environments.",
    image: "/service-five.webp",
    points: [
      "Collision shop fire suppression",
      "Industrial paint booth systems",
      "Dry chemical system installation",
      "System maintenance and inspection",
    ],
  },
];

export default function ServiceCard() {
  return (
    <section className="bg-[#faf8f5] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {services.map((service, index) => {
          const isImageLeft = index % 2 === 0;
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* IMAGE (CLICKABLE) */}
              <Link
                href={service.link}
                className={`relative w-full overflow-hidden rounded-2xl
                h-64 sm:h-80 md:h-105 block
                order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </Link>

              {/* CONTENT */}
              <div
                className={`order-2 max-w-xl
                ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
              >
                {/* BADGE */}
                <div className="inline-flex items-center gap-3 font-serif text-sm sm:text-base font-medium text-[#7b4a2d]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#efe7de]">
                    <Icon className="h-6 w-6 text-[#7b4a2d]" />
                  </span>
                  {service.badge}
                </div>

                {/* CLICKABLE TITLE */}
                <Link href={service.link}>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-sans text-[#2b1a12] hover:underline">
                    {service.title}
                  </h2>
                </Link>

                <p className="mt-4 text-sm sm:text-base font-serif leading-relaxed text-[#5a4a42]">
                  {service.description}
                </p>

                {/* POINTS */}
                <ul className="mt-6 space-y-3 sm:space-y-4 font-serif">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <IoMdCheckmarkCircleOutline className="h-5 w-5 text-[#86522d] mt-1" />
                      <span className="text-sm text-[#3f3029]">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-7">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 rounded-md border border-[#3b2416] px-5 py-3 text-sm font-semibold text-[#3b2416] hover:bg-[#3b2416] hover:text-white transition"
                  >
                    Learn More →
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-[#3b2416] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2a180f]"
                  >
                    Request Service
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
