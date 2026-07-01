"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function GasPipingContent() {
  return (
    <main className="bg-[#faf8f5]">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-four.webp"
          alt="Commercial Gas Piping Installation Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Commercial Gas Piping Services Detroit MI
          </h1>

          <p className="mt-4 text-lg">
            Safe, code-compliant gas piping and mechanical services for
            commercial and industrial facilities across Detroit.
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
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2b1a12]">
          Commercial Gas Piping & Mechanical Services in Detroit, MI
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska provides commercial gas piping services in Detroit MI
          for restaurants, industrial facilities, and commercial buildings. Our
          team installs, repairs, and upgrades gas piping systems designed for
          safe and reliable operation.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Proper gas piping is essential for commercial kitchens, HVAC
          equipment, and industrial applications. We help businesses maintain
          safe gas delivery systems with professional installation and service.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
              Gas Piping Services We Provide in Detroit
            </h3>

            <ul className="space-y-4">
              {[
                "Commercial gas piping installation",
                "Gas line replacement",
                "Gas piping repairs",
                "Gas leak inspections",
                "Gas pressure testing",
                "Gas system upgrades",
                "Equipment gas connections",
                "Mechanical piping services",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                  <span className="text-[#3f3029]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
              Industries We Serve
            </h3>

            <ul className="space-y-4">
              {[
                "Restaurants",
                "Commercial kitchens",
                "Manufacturing facilities",
                "Warehouses",
                "Retail buildings",
                "Industrial facilities",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                  <span className="text-[#3f3029]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/service-four.webp"
            alt="Gas Piping Contractors Detroit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-2xl font-semibold text-[#2b1a12]">
          Why Detroit Contractors Trust <Link href="/">Desert In Alaska</Link>{" "}
          Corp
        </p>
        <p className="mt-4 text-md pb-3">
          Since 1997, we have built a reputation based on transparency and
          technical expertise. We understand that in the commercial sector,
          downtime is lost revenue. That is why we prioritize streamlined
          project management and reliable timelines.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#ccc] text-left">
            <thead>
              <tr className="bg-[#2b1a12] text-white">
                <th className="p-4 border border-[#ccc] font-semibold">
                  Feature
                </th>
                <th className="p-4 border border-[#ccc] font-semibold">
                  Our Standard of Service
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#2b1a12] text-white">
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Experience
                </td>
                <td className="p-4 border border-[#ccc]">
                  Serving the Metro Detroit area since 1997
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Licensing
                </td>
                <td className="p-4 border border-[#ccc]">
                  Fully licensed and insured mechanical contractors
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Compliance
                </td>
                <td className="p-4 border border-[#ccc]">
                  Strict adherence to NFPA 54 and local Michigan fuel gas codes
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Specialization
                </td>
                <td className="p-4 border border-[#ccc]">
                  Industrial-grade systems and high-pressure gas lines
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Safety
                </td>
                <td className="p-4 border border-[#ccc]">
                  Advanced leak detection and pressure testing on every job
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* INDUSTRIES */}
      <section className="max-w-6xl mx-auto px-4 py-5">
        <h4 className="text-2xl font-semibold text-[#2b1a12]">
          Reliable Gas Piping Solutions for Detroit Businesses
        </h4>

        <p className="mt-4 text-md">
          Detroit businesses rely on safe and efficient gas piping systems for
          heating equipment, cooking equipment, and industrial operations. Our
          technicians provide properly designed gas piping solutions that
          support performance and safety requirements.
        </p>
        <h5 className="text-2xl font-semibold text-[#2b1a12]">
          Serving All of Metro Detroit
        </h5>

        <p className="mt-2 text-[#5a4a42]">
          We are proud to support the growth of our local community. Our service
          area includes:
        </p>

        <ul className="mt-4 space-y-3">
          {[
            "Detroit (Downtown, Mid-town, and Industrial Districts)",
            "Dearborn & Dearborn Heights",
            "Royal Oak & Southfield",
            "Livonia & Warren",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl font-semibold text-[#2b1a12]">Service Summary</p>

        <p className="mt-2 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp provides expert commercial gas piping in Detroit
          for restaurants, industrial plants, and developers. Our service
          includes custom system design, certified installation, and safety
          inspections. We ensure code-compliant, high-performance energy
          delivery, allowing businesses to power heavy machinery and kitchens
          safely and efficiently.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-5">
        <h6 className="text-2xl font-semibold text-[#2b1a12]">
          Frequently Asked Questions
        </h6>

        <div className="mt-6 space-y-6 text-[#3f3029]">
          <div>
            <p className="font-semibold">
              Q: What types of gas piping systems do you install?
            </p>
            <p>
              A:We install and service commercial gas piping systems for
              restaurants, HVAC equipment, and industrial applications.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Q: Do I need a permit for gas piping modifications in Detroit?Do
              gas piping systems need inspections?
            </p>
            <p>
              A: Regular inspections and testing help identify leaks, pressure
              issues, and potential safety concerns.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Q: Can you repair existing gas piping?
            </p>
            <p>
              A: Yes, we provide gas piping repairs, upgrades, and replacement
              services.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Q: Do you provide commercial gas piping in Detroit?
            </p>
            <p>
              A: Yes, Desert In Alaska provides commercial gas piping solutions
              throughout Detroit and Metro Detroit.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <p className="text-2xl sm:text-3xl font-semibold">
          Need Gas Piping Installation in Detroit?
        </p>

        <p className="mt-4">
          Call <strong>313-931-3070</strong> for expert service and
          installation.
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
        <p className="text-lg font-semibold mb-4">Related Services</p>

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

          <Link
            href="/services/kitchen-exhaust-systems-detroit"
            className="underline"
          >
            Kitchen Exhaust Systems
          </Link>
        </div>
      </section>
    </main>
  );
}
