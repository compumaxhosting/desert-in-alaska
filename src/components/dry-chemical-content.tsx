"use client";

import Image from "next/image";
import Link from "next/link";
import { Factory } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function DryChemicalContent() {
  return (
    <main className="bg-[#faf8f5]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-five.webp"
          alt="Industrial Dry Chemical Fire Suppression Systems Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Industrial Dry Chemical Fire Suppression Systems in Detroit, MI
          </h1>

          <p className="mt-4 text-lg">
            Advanced fire protection systems for industrial facilities, paint
            booths, and high-risk environments.
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
          Detroit Industrial Fire Suppression Specialists
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp provides industrial dry chemical fire
          suppression systems designed for high-risk environments across Detroit
          and Metro Detroit. These systems are ideal for facilities where
          traditional water-based systems are not effective.
        </p>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Our team ensures every system is properly designed, installed, and
          maintained to meet strict safety codes and industry regulations.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Our Dry Chemical Services
          </h3>

          <ul className="space-y-4">
            {[
              "Industrial dry chemical fire suppression system installation",
              "Paint booth fire suppression systems",
              "Collision center fire protection systems",
              "System upgrades and retrofits",
              "Inspection, testing, and maintenance",
              "Code-compliant system design",
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
            src="/service-five.webp"
            alt="Dry Chemical Fire Suppression Detroit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-[#2b1a12]">
            Why Choose Our Industrial Systems?
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {[
              "Serving Detroit since 1997",
              "Specialized industrial fire protection systems",
              "Designed for high-risk environments",
              "Code-compliant installations",
              "Reliable and fast system activation",
              "Trusted by industrial and manufacturing facilities",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Factory className="text-[#86522d]" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl font-semibold text-[#2b1a12]">
          Applications & Industries
        </h3>

        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-[#3f3029]">
          <li>• Paint booths and spray finishing operations</li>
          <li>• Auto body and collision repair centers</li>
          <li>• Manufacturing plants</li>
          <li>• Industrial processing facilities</li>
          <li>• Chemical handling environments</li>
          <li>• High-risk mechanical areas</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Need Industrial Fire Suppression in Detroit?
        </h3>

        <p className="mt-4">
          Call <strong>313-931-3070</strong> for expert system installation.
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
