"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Wind, Utensils, Fuel, Factory } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: <Wind />,
    title: "Commercial HVAC Services",
    image: "/hvac.jpg",
    text: "Commercial HVAC installation, repair, replacement, and preventative maintenance for Detroit restaurants, warehouses, and industrial facilities.",
  },
  {
    icon: <Utensils />,
    title: "Commercial Kitchen Exhaust Systems",
    image: "/kitchen.jpg",
    text: "Kitchen exhaust hood installation, ductwork, and ventilation system servicing for Detroit restaurants and commercial kitchens.",
  },
  {
    icon: <Fuel />,
    title: "Gas Piping & Mechanical Services",
    image: "/gas.jpg",
    text: "Commercial gas piping installation, tenant improvements, and mechanical system modifications for Detroit commercial properties.",
  },
  {
    icon: <Factory />,
    title: "Industrial Dry Chemical Systems",
    image: "/industrial.jpg",
    text: "Industrial dry chemical fire suppression systems for Detroit paint booths, collision centers, and manufacturing facilities.",
  },
];

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md
        transition-all duration-500 ease-out will-change-transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }
      `}
    >
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={`${item.title} in Detroit`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/70 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#8b5428] text-white shadow-md">
          {item.icon}
        </div>
      </div>

      <div className="p-8 pt-6">
        <h4 className="text-lg font-medium text-[#3b2a1f] font-sans-400">
          {item.title}
        </h4>
        <p className="mt-3 text-sm text-[#876C61] font-serif">{item.text}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#eeebe8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <p className="text-xs uppercase tracking-widest text-[#8b5428] font-serif">
            What We Do
          </p>

          {/* ✅ SEO H2 */}
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#3b2a1f] font-sans-400">
            Commercial Fire Suppression & HVAC Services in Detroit
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#6b5a4d] font-serif">
            Comprehensive commercial fire suppression, HVAC, kitchen exhaust,
            and mechanical services for restaurants, industrial facilities, and
            businesses throughout Metro Detroit.
          </p>
        </div>

        {/* Featured Service */}
        <div
          className={`mt-16 overflow-hidden rounded-2xl relative transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <Image
            src="/fire.jpg"
            alt="Commercial fire suppression system installation in Detroit"
            width={1400}
            height={600}
            className="h-105 w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#b6876f] mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-10 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#8b5428] px-4 py-2 text-sm">
                <Flame size={16} />
                Primary Focus
              </div>

              {/* ✅ SEO H3 */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-sans-400">
                Commercial Fire Suppression Systems in Detroit
              </h3>

              <p className="mt-4 text-white/85 font-serif">
                Installation and servicing of commercial kitchen fire
                suppression systems, industrial dry chemical systems, fire
                extinguisher certification, and complete life safety solutions
                for Detroit businesses.
              </p>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#8b5428] px-6 py-3 text-sm font-semibold hover:bg-[#73431f] transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }
          `}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#3b2a1f] px-8 py-4 text-sm font-semibold text-[#3b2a1f] hover:bg-[#3b2a1f] hover:text-white transition"
          >
            View All Commercial Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
