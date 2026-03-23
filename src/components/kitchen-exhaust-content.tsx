"use client";

import Image from "next/image";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function KitchenExhaustContent() {
  return (
    <main className="bg-[#faf8f5]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-three.jpg"
          alt="Commercial Kitchen Exhaust Systems Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Commercial Kitchen Exhaust Systems in Detroit, MI
          </h1>

          <p className="mt-4 text-lg">
            Professional kitchen exhaust hood installation and ventilation
            systems for restaurants and commercial kitchens across Detroit.
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
          Detroit Kitchen Exhaust & Ventilation Experts
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp provides complete commercial kitchen exhaust
          systems for restaurants and food service businesses throughout Detroit
          and Metro Detroit. We design and install systems that remove smoke,
          grease, and heat efficiently while meeting all safety and code
          requirements.
        </p>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          From hood installation to ductwork and ventilation upgrades, we ensure
          your kitchen operates safely, efficiently, and in full compliance.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Our Kitchen Exhaust Services
          </h3>

          <ul className="space-y-4">
            {[
              "Commercial kitchen exhaust hood installation",
              "Ventilation system design and setup",
              "Exhaust ductwork fabrication and installation",
              "Grease duct systems and airflow optimization",
              "System upgrades and retrofits",
              "Maintenance and inspection services",
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
            src="/service-three.jpg"
            alt="Kitchen Exhaust Hood Installation Detroit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-[#2b1a12]">
            Why Choose Our Kitchen Exhaust Systems?
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {[
              "Serving Detroit restaurants since 1997",
              "Code-compliant installations (NFPA standards)",
              "Improved air quality and ventilation efficiency",
              "Custom solutions for commercial kitchens",
              "Reliable installation and fast turnaround",
              "Trusted by restaurant owners across Detroit",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Utensils className="text-[#86522d]" />
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
          <li>• Restaurants and cafes</li>
          <li>• Commercial kitchens</li>
          <li>• Catering facilities</li>
          <li>• Food processing units</li>
          <li>• Hotels and hospitality businesses</li>
          <li>• Institutional kitchens</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Need Kitchen Exhaust Installation in Detroit?
        </h3>

        <p className="mt-4">
          Call <strong>313-931-3070</strong> for expert installation and
          service.
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

          <Link href="/services/commercial-hvac-detroit" className="underline">
            Commercial HVAC
          </Link>

          <Link href="/services/gas-piping-detroit" className="underline">
            Gas Piping Services
          </Link>
        </div>
      </section>
    </main>
  );
}
