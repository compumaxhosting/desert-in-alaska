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
          src="/service-two.webp"
          alt="Commercial HVAC Installation and Repair Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Commercial HVAC Services Detroit MI
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
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Desert In Alaska Corp provides expert{" "}
          <Link href="/" className="text-blue-600  hover:text-blue-800">
            commercial HVAC services in Metro Detroit
          </Link>{" "}
          MI for businesses, industrial facilities, restaurants, and commercial
          properties. Our team installs, repairs, and maintains heating,
          ventilation, and air conditioning systems designed for reliable
          performance.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          From HVAC repairs and replacements to preventative maintenance, we
          help Detroit businesses maintain comfortable indoor environments and
          efficient building operations.
        </p>
        <h2 className="text-2xl font-semibold text-[#2b1a12]">
          Reliable Commercial HVAC Services in Metro Detroit
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Maintaining a comfortable and efficient environment is vital for any
          business. Atc{" "}
          <Link href="/" className="text-blue-600  hover:text-blue-800">
            Desert In Alaska Corp
          </Link>{" "}
          , we specialize in professional commercial HVAC installation and
          repair tailored to the unique climate of Metro Detroit. Since 1997,
          our team has been the trusted choice for businesses looking to balance
          high-performance climate control with long-term energy savings.
        </p>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          We proudly serve businesses across Wayne County, Macomb County,
          Oakland County, and Washtenaw County, delivering reliable HVAC
          solutions tailored to each location’s needs.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
              Commercial HVAC Services We Provide in Detroit
            </h3>

            <ul className="space-y-4">
              {[
                "Commercial HVAC installation",
                "HVAC repair services",
                "Preventive HVAC maintenance",
                "Heating system services",
                "Cooling system services",
                "Air conditioning repair",
                "Ventilation system installation",
                "HVAC system upgrades",
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
              Commercial HVAC Systems We Service
            </h3>

            <ul className="space-y-4">
              {[
                "Rooftop HVAC units",
                "Commercial air conditioning systems",
                "Heating systems",
                "Ventilation equipment",
                "Make-up air systems",
                "Industrial HVAC equipment",
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
            src="/service-two.webp"
            alt="Professional HVAC technician installing a rooftop commercial unit in Detroit, MI."
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1a12]">
          Why Metro Detroit Businesses Choose Our HVAC Solutions
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full border border-[#ccc] text-left">
            <thead>
              <tr className="bg-[#2b1a12] text-white">
                <th className="p-4 border border-[#ccc] font-semibold">
                  Benefit
                </th>
                <th className="p-4 border border-[#ccc] font-semibold">
                  Why It Matters for You
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#2b1a12] text-white">
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Lower Operating Costs
                </td>
                <td className="p-4 border border-[#ccc]">
                  Modern high-efficiency units can reduce monthly energy bills
                  by 30–50%.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Extended Equipment Life
                </td>
                <td className="p-4 border border-[#ccc]">
                  Our Preventative Maintenance prevents the wear and tear that
                  leads to premature system failure.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Total Code Compliance
                </td>
                <td className="p-4 border border-[#ccc]">
                  We ensure all gas piping and kitchen exhaust systems meet{" "}
                  <strong>Michigan & NFPA safety standards.</strong>
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Zero Operational Downtime
                </td>
                <td className="p-4 border border-[#ccc]">
                  Fast emergency repairs and quiet installations mean your
                  business stays open and productive.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Improved Air Quality
                </td>
                <td className="p-4 border border-[#ccc]">
                  Professional ductwork and ventilation protect the health of
                  your staff and customers.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Detroit businesses depend on reliable HVAC systems throughout
          Michigan’s changing seasons. Our technicians provide HVAC solutions
          designed for offices, restaurants, warehouses, and industrial
          buildings across Detroit and Metro Detroit.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          We focus on efficient operation, reduced downtime, and dependable
          climate control for commercial properties.
        </p>
      </section>
      {/* ADVANTAGE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h5 className="text-2xl font-semibold text-[#2b1a12]">
            The Desert In Alaska Corp Advantage
          </h5>

          <p className="mt-4 text-[#5a4a42]">
            With over 25 years of experience serving the Metro Detroit area, we
            understand the local infrastructure and the rigorous standards
            required for commercial properties.
          </p>

          <p className="mt-6 font-semibold text-[#2b1a12]">
            Expertise You Can Trust
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            <div className="flex gap-3">
              <Snowflake className="text-[#86522d]" />
              <span className="text-[#3f3029]">
                Licensed & Insured Professionals: Our team consists of fully
                credentialed experts who prioritize safety and precision in
                every project.
              </span>
            </div>

            <div className="flex gap-3">
              <Snowflake className="text-[#86522d]" />
              <span className="text-[#3f3029]">
                Specialized Industrial Knowledge: We don’t just handle office
                buildings; we have the technical expertise to service
                warehouses, manufacturing plants, and high-traffic restaurants.
              </span>
            </div>

            <div className="flex gap-3">
              <Snowflake className="text-[#86522d]" />
              <span className="text-[#3f3029]">
                Local Commitment: Based in Detroit, we are familiar with local
                building codes and the specific challenges Michigan businesses
                face.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h6 className="text-2xl font-semibold text-[#2b1a12]">
          Common HVAC Questions & Solutions
        </h6>

        <div className="mt-6 space-y-6 text-[#3f3029]">
          <div>
            <p className="font-semibold">
              Q: What commercial HVAC services do you provide?
            </p>
            <p>
              A: We provide commercial HVAC installation, repairs, maintenance,
              ventilation services, and system upgrades.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Q: How often should commercial HVAC systems be maintained?
            </p>
            <p>
              A: Regular maintenance helps improve efficiency, prevent
              breakdowns, and extend HVAC equipment life.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Q: Do you repair commercial HVAC systems in Detroit?
            </p>
            <p>
              A: Yes, we provide commercial HVAC repair and maintenance services
              for Detroit businesses
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Q: Do you install new commercial HVAC systems?
            </p>
            <p>
              A:Yes, our team installs HVAC systems for new construction,
              replacements, and commercial upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <p className="text-2xl sm:text-3xl font-semibold">
          Optimize Your Business Environment Today
        </p>

        <p className="mt-4">
          Don&apos;t let an inefficient system eat into your profits. Partner
          with the experts who have been keeping Metro Detroit comfortable for
          over two decades.
        </p>

        <p className="mt-2">
          Contact Desert In Alaska Corp today to schedule an HVAC audit or
          request a free quote for your next commercial project.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
        >
          Request a Free Quote →
        </Link>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-lg font-semibold mb-4">Explore Our Other Services</p>

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
