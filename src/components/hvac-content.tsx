"use client";

import Image from "next/image";
import Link from "next/link";
import { Snowflake } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function HVACContent() {
  return (
    <main className="bg-[#faf8f5]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-two.jpg"
          alt="Commercial HVAC Installation and Repair Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Commercial HVAC Installation & Repair in Detroit, MI
          </h1>

          <p className="mt-4 text-lg">
            Reliable heating and cooling solutions for commercial buildings,
            restaurants, warehouses, and industrial facilities.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#3b2416] px-6 py-3 rounded-md font-semibold hover:bg-[#2a180f]"
          >
            Request Service →
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2b1a12]">
          Detroit Commercial HVAC Experts Since 1997
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp provides complete commercial HVAC services
          across Detroit and Metro Detroit. From installation to repair and
          preventative maintenance, we ensure your heating and cooling systems
          operate efficiently year-round.
        </p>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          We work with restaurants, warehouses, retail spaces, and industrial
          facilities, delivering energy-efficient HVAC solutions tailored to
          your business.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Our HVAC Services
          </h3>

          <ul className="space-y-4">
            {[
              "Commercial HVAC system installation",
              "Heating and air conditioning repair",
              "Rooftop unit (RTU) installation and service",
              "Furnace and AC replacement",
              "Preventative maintenance programs",
              "System diagnostics and performance optimization",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/service-two.jpg"
            alt="Commercial HVAC System Detroit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-[#2b1a12]">
            Why Choose Our HVAC Services?
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {[
              "Serving Detroit businesses since 1997",
              "Licensed and insured HVAC contractors",
              "Energy-efficient system solutions",
              "Fast response and reliable repairs",
              "Experience with commercial and industrial systems",
              "Customized maintenance programs",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Snowflake className="text-[#86522d]" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl font-semibold text-[#2b1a12]">
          Industries We Serve
        </h3>

        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-[#3f3029]">
          <li>• Restaurants and commercial kitchens</li>
          <li>• Warehouses and logistics centers</li>
          <li>• Office buildings and retail stores</li>
          <li>• Manufacturing facilities</li>
          <li>• Industrial plants</li>
          <li>• Commercial complexes</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Need Commercial HVAC Service in Detroit?
        </h3>

        <p className="mt-4">
          Call <strong>313-931-3070</strong> for installation, repair, or
          maintenance.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
        >
          Get a Free Quote →
        </Link>
      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h4 className="text-lg font-semibold mb-4">Related Services</h4>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/services/commercial-fire-suppression-detroit"
            className="underline"
          >
            Fire Suppression Systems
          </Link>

          <Link
            href="/services/kitchen-exhaust-systems-detroit"
            className="underline"
          >
            Kitchen Exhaust Systems
          </Link>

          <Link href="/services/gas-piping-detroit" className="underline">
            Gas Piping Services
          </Link>
        </div>
      </section>
    </main>
  );
}
