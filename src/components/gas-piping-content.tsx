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
            Commercial Gas Piping Installation in Detroit, MI
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
          Reliable energy is the backbone of any successful commercial
          operation, from high-capacity industrial kitchens to complex
          manufacturing facilities where gas piping systems must be safe,
          efficient, and built to last. At Desert In Alaska Corp, we specialize
          in professional commercial gas piping and mechanical services
          throughout the Greater Detroit area, bringing over 25 years of
          hands-on experience to local businesses across Wayne, Macomb, Oakland,
          and Washtenaw counties. Our team ensures every system is
          precision-engineered to meet the highest safety standards, providing
          the dependable infrastructure necessary to power your equipment and
          sustain your facility&apos;s growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Expert Gas Piping Solutions for Detroit Businesses
          </h3>
          <p className="mt-4 text-md">
            Whether you are launching a new restaurant in Downtown Detroit or
            upgrading an industrial plant in Dearborn, your gas infrastructure
            requires a licensed professional. Improper installation isn&apos;t
            just an efficiency issue; it’s a significant safety risk.
          </p>
          <p className="mt-4 text-md">
            {" "}
            Our team simplifies the complexities of mechanical system design,
            ensuring your facility remains compliant with Michigan’s strict
            mechanical codes while optimizing your energy distribution.
          </p>

          <p className="text-xl font-semibold text-[#2b1a12] mb-4">
            Our Core Services Include:
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "Commercial Gas Line Installation",
                desc: "Custom-designed systems for new builds and facility expansions.",
                link: "#",
              },
              {
                title: "System Upgrades & Modifications",
                desc: "Scaling your existing gas infrastructure to support new, high-demand equipment.",
                link: "#",
              },
              {
                title: "Tenant Improvements",
                desc: "Specialized gas piping for retail build-outs and commercial renovations.",
                link: "#",
              },
              {
                title: "Safety Inspections & Leak Detection",
                desc: "Comprehensive testing to ensure your staff and property remain protected.",
                link: "#",
              },
              {
                title: "Code Compliance & Permitting",
                desc: "Navigating local Detroit regulations to ensure your project passes inspection the first time.",
                link: "#",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />

                <span className="text-[#3f3029]">
                  <Link
                    href={item.link}
                    className="font-medium "
                  >
                    {item.title}
                  </Link>
                  : {item.desc}
                </span>
              </li>
            ))}
          </ul>
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
          Why Detroit Contractors Trust{" "}
          <Link href="/">
            Desert In Alaska
          </Link>{" "}
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
          Solving Your Commercial Mechanical Challenges
        </h4>

        <p className="mt-4 text-md">
          Many business owners face the same pain points: rising energy costs,
          outdated pipes, or equipment that isn&apos;t receiving the necessary
          BTU load. Our mechanical experts analyze your specific requirements to
          recommend the most cost-effective piping materials and layouts,
          reducing long-term maintenance needs.
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
              How long does a commercial gas line installation take?
            </p>
            <p>
              Project timelines vary based on the scale of the facility, but
              most tenant improvements or equipment upgrades in Detroit are
              completed within 3 to 7 business days, including permitting and
              pressure testing.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Do I need a permit for gas piping modifications in Detroit?
            </p>
            <p>
              Yes. Any modification to a commercial gas system requires a permit
              from the City of Detroit’s Buildings, Safety Engineering, and
              Environmental Department (BSEED). We handle the entire permitting
              process for our clients.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              What materials do you use for commercial gas lines?
            </p>
            <p>
              We typically use schedule 40 black steel pipe or CSST (Corrugated
              Stainless Steel Tubing), depending on the specific application,
              local code requirements, and the volume of gas required for your
              equipment.
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
