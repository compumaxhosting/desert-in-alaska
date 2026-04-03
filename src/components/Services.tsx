"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Wind, Utensils, Fuel, Factory } from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* SERVICES WITH LINKS */
const services = [
  {
    icon: <Wind />,
    title: "Commercial HVAC Services",
    link: "/services/commercial-hvac-detroit",
    image: "/hvac.webp",
    text: "Commercial HVAC installation, repair, replacement, and preventative maintenance for Detroit restaurants, warehouses, and industrial facilities.",
  },
  {
    icon: <Utensils />,
    title: "Commercial Kitchen Exhaust Systems",
    link: "/services/kitchen-exhaust-systems-detroit",
    image: "/kitchen.webp",
    text: "Kitchen exhaust hood installation, ductwork, and ventilation system servicing for Detroit restaurants and commercial kitchens.",
  },
  {
    icon: <Fuel />,
    title: "Gas Piping & Mechanical Services",
    link: "/services/gas-piping-detroit",
    image: "/service-four.webp",
    text: "Commercial gas piping installation, tenant improvements, and mechanical system modifications for Detroit commercial properties.",
  },
  {
    icon: <Factory />,
    title: "Industrial Dry Chemical Systems",
    link: "/services/industrial-dry-chemical-fire-suppression-detroit",
    image: "/industrial.webp",
    text: "Industrial dry chemical fire suppression systems for Detroit paint booths, collision centers, and manufacturing facilities.",
  },
];

/* CLICKABLE CARD */
function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <Link href={item.link}>
      <div
        ref={ref}
        className={`rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md cursor-pointer
        transition-all duration-500 ease-out will-change-transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
        <div className="relative h-48">
          <Image
            src={item.image}
            alt={`${item.title} in Detroit`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8b5428] text-white shadow-md">
            {item.icon}
          </div>
        </div>

        <div className="p-8 pt-6">
          <h4 className="text-lg font-medium text-[#3b2a1f]">{item.title}</h4>
          <p className="mt-3 text-sm text-[#876C61]">{item.text}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#eeebe8] py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* ✅ H1 (BIG SEO BOOST) */}
        <div className="text-center mb-5">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#3b2a1f]">
            Commercial Fire Suppression, HVAC &
            <br /> Mechanical Services in Detroit, MI
          </h1>

          <p className="mt-4 text-[#6b5a4d] max-w-3xl mx-auto">
            Expert fire protection, HVAC, kitchen exhaust, gas piping, and
            industrial system solutions for Detroit businesses.
          </p>
          <p className="mt-4 text-[#6b5a4d] max-w-3xl mx-auto">
            We specialize in designing, installing, and maintaining reliable
            commercial systems that keep your operations safe, efficient, and
            code-compliant. From preventative maintenance to emergency service,
            our Detroit team delivers professional solutions tailored to your
            business needs.
          </p>
        </div>

        {/* HEADER */}
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <p className="text-xs uppercase tracking-widest text-[#8b5428]">
            What We Do
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl text-[#3b2a1f] font-semibold">
            Our Commercial Services
          </h2>
        </div>

        {/* FEATURED SERVICE */}
        <div
          className={`mt-7 overflow-hidden rounded-2xl relative transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <Image
            src="/fire.webp"
            alt="Commercial fire suppression system installation in Detroit"
            width={1400}
            height={600}
            className="h-105 w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-10 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8b5428] px-4 py-2 text-sm">
                <Flame size={16} />
                Primary Focus
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl">
                Commercial Fire Suppression Systems in Detroit
              </h3>

              <p className="mt-4 text-white/85">
                Installation and servicing of commercial kitchen fire
                suppression systems, industrial dry chemical systems, and
                complete life safety solutions.
              </p>

              {/* ✅ FIXED LINK */}
              <Link
                href="/services/commercial-fire-suppression-detroit"
                className="mt-6 inline-flex items-center gap-2 bg-[#8b5428] px-6 py-3 text-sm font-semibold hover:bg-[#73431f]"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#3b2a1f] px-8 py-4 text-sm font-semibold text-[#3b2a1f] hover:bg-[#3b2a1f] hover:text-white transition"
          >
            Request Service →
          </Link>
        </div>
      </div>
    </section>
  );
}
