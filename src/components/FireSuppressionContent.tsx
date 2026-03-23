"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function FireSuppressionContent() {
  return (
    <main className="bg-[#faf8f5]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-one.jpg"
          alt="Commercial Fire Suppression Systems in Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Commercial Fire Suppression Systems in Detroit, MI
          </h1>

          <p className="mt-4 text-lg">
            Protect your business, employees, and property with reliable,
            code-compliant fire suppression systems designed for commercial and
            industrial environments.
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
          Detroit’s Trusted Commercial Fire Suppression Contractors
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp specializes in commercial fire suppression
          systems for restaurants, warehouses, and industrial facilities
          throughout Detroit and Metro Detroit. Our licensed technicians design,
          install, and maintain systems that meet strict fire safety codes,
          insurance requirements, and compliance standards.
        </p>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Whether you operate a busy commercial kitchen or an industrial
          facility, we provide complete fire protection solutions tailored to
          your business needs.
        </p>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Our Fire Suppression Services
          </h3>

          <ul className="space-y-4">
            {[
              "Commercial kitchen fire suppression system installation and service",
              "Industrial dry chemical fire suppression systems",
              "Fire extinguisher sales, inspection, and certification",
              "Fire sprinkler system modifications and tenant improvements",
              "Emergency exit signs and lighting systems",
              "Routine inspections, testing, and preventative maintenance",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/service-one.jpg"
            alt="Fire Suppression Installation Detroit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-[#2b1a12]">
            Why Choose Desert In Alaska Corp?
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {[
              "Serving Detroit and Metro Detroit since 1997",
              "Licensed, insured, and certified contractors",
              "Experienced in commercial and industrial fire safety systems",
              "Code-compliant installations and inspections",
              "Fast turnaround and reliable service",
              "Trusted by restaurants, warehouses, and manufacturers",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Flame className="text-[#86522d]" />
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

        <p className="mt-4 text-[#5a4a42]">
          We provide commercial fire suppression solutions for a wide range of
          industries across Detroit:
        </p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-[#3f3029]">
          <li>• Restaurants and commercial kitchens</li>
          <li>• Warehouses and distribution centers</li>
          <li>• Manufacturing facilities</li>
          <li>• Auto body shops and paint booths</li>
          <li>• Retail and commercial buildings</li>
          <li>• Industrial plants</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Need Fire Suppression Installation in Detroit?
        </h3>

        <p className="mt-4">
          Call <strong>313-931-3070</strong> or request a free quote today.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
        >
          Get a Free Quote →
        </Link>
      </section>

      {/* INTERNAL LINKS (SEO BOOST) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h4 className="text-lg font-semibold mb-4">
          Explore Our Other Services
        </h4>

        <div className="flex flex-wrap gap-4">
          <Link href="/services/commercial-hvac-detroit" className="underline">
            Commercial HVAC Services
          </Link>

          <Link
            href="/services/kitchen-exhaust-systems-detroit"
            className="underline"
          >
            Kitchen Exhaust Systems
          </Link>

          <Link href="/services/gas-piping-detroit" className="underline">
            Gas Piping & Mechanical Services
          </Link>
        </div>
      </section>
    </main>
  );
}
