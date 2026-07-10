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
          src="/service-one.webp"
          alt="Commercial Fire Suppression Systems in Detroit MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Industrial Dry Chemical Fire Suppression Systems Detroit MI
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
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Industrial facilities require specialized fire protection solutions
          for high-risk environments. Desert In Alaska provides{" "}
          <Link
            href="/services/commercial-fire-suppression-detroit"
            className="text-[#8b5428] hover:underline"
          >
            industrial dry chemical fire suppression systems in Detroit MI
          </Link>{" "}
          designed to protect manufacturing facilities, paint booths, machinery
          areas, and hazardous locations.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Our team installs, services, and maintains dry chemical suppression
          systems that help businesses reduce fire risks and maintain safety
          compliance.
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2b1a12]">
          Commercial Fire Suppression Services in Metro Detroit
        </h2>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Protecting your business starts with a fire suppression system you can
          trust. At Desert In Alaska Corp, we specialize in high-performance
          life safety solutions tailored to the unique demands of Metro Detroit
          businesses. Since 1997, our mission has been to safeguard properties
          and lives through technical expertise and uncompromising quality.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          We proudly serve businesses throughout Wayne County, Macomb County,
          Oakland County, and Washtenaw County, delivering dependable fire
          suppression solutions designed for each location’s specific safety
          requirements
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h4 className="font-semibold text-[#2b1a12] mb-3">
              Key Services Include:
            </h4>

            <ul className="space-y-4">
              {[
                "Dry chemical suppression system installation",
                "System inspection and testing",
                "Fire suppression maintenance",
                "Industrial hazard assessments",
                "Detection and activation systems",
                "System upgrades and modifications",
                "Emergency fire suppression repairs",
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
            <h4 className="font-semibold text-[#2b1a12] mb-3">
              Industries We Protect
            </h4>

            <ul className="space-y-4">
              {[
                "Manufacturing facilities",
                "Automotive facilities",
                "Paint spray booths",
                "Industrial equipment areas",
                "Warehouses",
                "Flammable material storage areas",
                "Commercial facilities",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                  <span className="text-[#3f3029]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
            Comprehensive Fire Protection & Mechanical Solutions
          </h3>
          <p className="mt-4 text-[#5a4a42] leading-relaxed">
            Managing a commercial facility requires meeting strict safety
            regulations. We simplify compliance by providing turnkey services
            that cover every aspect of your mechanical and safety needs.
          </p>
          <ul className="space-y-4">
            {[
              {
                text: "Fire Suppression & Life Safety",
                desc: "Custom-engineered systems designed to detect and extinguish fires instantly, minimizing property damage and downtime.",
                link: "/services/commercial-fire-suppression-detroit",
              },
              {
                text: "Heating & Cooling (HVAC)",
                desc: "Reliable, high-efficiency commercial climate control built to handle Michigan’s extreme seasonal shifts.",
                link: "/services/commercial-hvac-detroit",
              },
              {
                text: "Commercial Kitchen Exhaust Systems",
                desc: "Complete turnkey hood and ventilation installations that ensure a safe, smoke-free environment for your staff.",
                link: "/services/kitchen-exhaust-systems-detroit",
              },
              {
                text: "Gas Piping & Mechanical Services",
                desc: "Certified precision piping for commercial and industrial applications, ensuring safe and efficient energy delivery.",
                link: "/services/gas-piping-detroit",
              },
              {
                text: "Industrial Dry Chemical Systems",
                desc: "Specialized protection for high-hazard areas like paint booths and chemical storage where water-based systems aren't an option.",
                link: "services/industrial-dry-chemical-fire-suppression-detroit",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">
                  <a href={item.link} className="font-semibold hover:underline">
                    {item.text}
                  </a>
                  : {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/service-one.webp"
            alt="Certified technician installing a commercial kitchen fire suppression system in Detroit."
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1a12]">
          The <Link href="/">Desert In Alaska</Link> Corp Advantage
        </p>

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
                  Total Code
                </td>
                <td className="p-4 border border-[#ccc]">
                  Our certified systems ensure you meet all Michigan & NFPA
                  72/96
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Benifit
                </td>
                <td className="p-4 border border-[#ccc]">
                  Why ItMatters For You
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Compliance
                </td>
                <td className="p-4 border border-[#ccc]">
                  standards, avoiding fines and legal issues.
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Reduced Business Risk
                </td>
                <td className="p-4 border border-[#ccc]">
                  Rapid detection and suppression minimize property damage,
                  protecting your investment from total loss.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Lower Insurance Premiums
                </td>
                <td className="p-4 border border-[#ccc]">
                  Many providers offer discounted rates for businesses with
                  professionally maintained, certified suppression systems.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Operational Continuity
                </td>
                <td className="p-4 border border-[#ccc]">
                  Our systems target fires locally (like in a kitchen hood),
                  preventing building-wide damage and long-term closures.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-[#ccc] font-semibold">
                  Expert 6-Month Inspections
                </td>
                <td className="p-4 border border-[#ccc]">
                  Scheduled maintenance ensures your system is always
                  &quot;emergency-ready,&quot; keeping your staff safe 24/7.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2b1a12]">
          Dry Chemical Fire Protection for Detroit Businesses
        </h2>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Detroit industrial facilities depend on reliable fire protection
          systems to protect employees, equipment, and operations. Our
          specialists provide customized suppression solutions based on each
          facility`&apos;s hazards and safety requirements.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h4 className="text-2xl font-semibold text-[#2b1a12]">
            Why Metro Detroit Trusts <Link href="/">Desert In Alaska Corp</Link>
          </h4>
          <p className="mt-4 text-[#5a4a42]">
            With over 25 years of local experience, we understand the specific
            fire codes and inspection requirements of the Metro Detroit area.
          </p>
          <div className="mt-10 space-y-10">
            {/* Expertise Section */}
            <div>
              <p className="text-lg font-semibold text-[#2b1a12] mb-4">
                Expertise You Can Count On
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Licensed & Certified: Our technicians are fully credentialed experts who stay current on all NFPA and Michigan safety standards.",
                  "Code Compliance Experts: We work closely with local fire marshals to ensure your system passes every inspection the first time.",
                  "Experience Since 1997: We bring decades of on-the-ground knowledge to every project, from downtown Detroit kitchens to suburban industrial plants.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Flame className="text-[#86522d] mt-1" />
                    <span className="text-[#3f3029]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h5 className="text-lg font-semibold text-[#2b1a12] mb-4">
                Frequently Asked Questions
              </h5>

              <div className="space-y-5">
                {[
                  {
                    q: "Q: What is a dry chemical fire suppression system?",
                    a: "A: A dry chemical suppression system uses specialized extinguishing agents to quickly control fires, especially in industrial and high-risk environments.",
                  },
                  {
                    q: "Q: Where are dry chemical systems used?",
                    a: "A: They are commonly used in paint booths, manufacturing areas, machinery spaces, and locations with flammable materials.",
                  },
                  {
                    q: "Q: Do dry chemical systems require maintenance?",
                    a: "A: Regular inspection and maintenance help ensure the system operates correctly when needed.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-[#2b1a12]">{item.q}</p>
                    <p className="text-[#3f3029] mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#2b1a12] text-white p-6 rounded-xl">
              <h6 className="text-lg font-semibold mb-2">
                Secure Your Business Today
              </h6>
              <p className="text-sm">
                Don&apos;t wait for an emergency to find out if your system
                works. Partner with Metro Detroit’s trusted experts in fire
                safety and mechanical services.
              </p>
              <p className="text-sm mt-2">
                Contact Desert In Alaska Corp today to schedule your
                consultation or 6-month inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      {/* CTA */}
      <section className="text-center py-16 bg-[#3b2416] text-white">
        <p className="text-2xl sm:text-3xl font-semibold">
          Need Fire Suppression Installation in Detroit?
        </p>

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
