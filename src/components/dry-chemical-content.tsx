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
         Industrial Fire Suppression System Installation, Inspection & Maintenance Services
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
        Industrial dry chemical fire suppression systems are specialized fire protection solutions designed to quickly detect and suppress fires involving flammable liquids, combustible gases, industrial machinery, and hazardous materials. These systems use dry chemical agents to interrupt the combustion process, helping protect employees, equipment, facilities, and business operations. <Link href="/" className="text-blue-600 hover:text-blue-800">Desert In Alaska Corp</Link> provides industrial dry chemical fire suppression system installation, inspections, maintenance, testing, and repairs throughout Detroit and Metro Detroit.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
       <div>
  <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
    What Is an Industrial Dry Chemical Fire Suppression System?
  </h3>

  <p className="text-[#3f3029] mb-4 leading-relaxed">
    An industrial dry chemical fire suppression system is an automatic fire
    protection system that uses a dry chemical extinguishing agent to suppress
    fires before they spread. These systems are commonly used in industrial
    facilities where traditional water-based sprinkler systems may not be
    effective or appropriate.
  </p>

  <p className="text-[#3f3029] mb-4 leading-relaxed">
    Dry chemical systems are designed to rapidly discharge extinguishing agents
    onto a fire source, interrupting the chemical reaction that sustains
    combustion.
  </p>

  <h4 className="font-semibold text-[#2b1a12] mb-3">
    Common Fire Hazards Protected by Dry Chemical Systems
  </h4>

  <ul className="space-y-4">
    {[
      "Flammable liquid fires",
      "Combustible gas fires",
      "Fuel storage areas",
      "Industrial machinery fires",
      "Paint spray booths",
      "Chemical processing operations",
      "Manufacturing equipment",
      "Vehicle maintenance facilities",
      "Industrial cooking and processing equipment",
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
<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      How Does an Industrial Dry Chemical Fire Suppression System Work?
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Industrial dry chemical systems provide fast fire detection and
      suppression to minimize damage and reduce downtime.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      Fire Suppression Process
    </h4>

    <div className="space-y-4">
      {[
        "Heat, flame, or fire detection devices identify a fire.",
        "The control system activates automatically.",
        "Dry chemical extinguishing agents are discharged through strategically placed nozzles.",
        "The chemical agent interrupts the combustion process.",
        "The fire is rapidly suppressed or extinguished.",
        "Equipment shutdown and alarm notifications may activate simultaneously.",
      ].map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#86522d] text-white font-semibold">
            {i + 1}
          </div>
          <p className="text-[#3f3029] pt-1">{step}</p>
        </div>
      ))}
    </div>

    <p className="text-[#3f3029] mt-8 leading-relaxed">
      This rapid response helps prevent fire spread and protects critical
      assets.
    </p>
  </div>
</section>

<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Benefits of Industrial Dry Chemical Fire Suppression Systems
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Many industrial facilities choose dry chemical suppression because of its
      effectiveness and versatility.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      Key Benefits
    </h4>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Rapid fire suppression response",
        "Effective on Class B and Class C fire hazards",
        "Protects valuable equipment and assets",
        "Reduces facility downtime",
        "Minimizes property damage",
        "Supports OSHA and NFPA compliance",
        "Suitable for high-risk industrial environments",
        "Can integrate with fire alarm and detection systems",
        "Provides automatic and manual activation options",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
      Industrial Dry Chemical Fire Suppression Services in Detroit
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-8">
      Desert In Alaska Corp delivers comprehensive industrial fire protection
      solutions tailored to the needs of manufacturing, processing, and
      commercial facilities throughout Metro Detroit.
    </p>

    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Dry Chemical Fire Suppression System Installation
        </h4>

        <p className="text-[#3f3029] mb-3">
          We design and install custom fire suppression systems for:
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Manufacturing facilities",
            "Industrial plants",
            "Chemical processing facilities",
            "Automotive facilities",
            "Warehouses",
            "Fuel handling operations",
            "Power generation facilities",
            "Industrial maintenance shops",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-[#3f3029] mt-4">
          Every system is designed according to facility hazards, operational
          requirements, and applicable fire protection standards.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Fire Suppression System Inspections
        </h4>

        <p className="text-[#3f3029] mb-3">
          Routine inspections help ensure your system remains operational and
          compliant.
        </p>

        <p className="text-[#3f3029] mb-3">
          Inspection services include:
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "System component evaluation",
            "Nozzle inspections",
            "Detection device testing",
            "Control panel inspections",
            "Agent cylinder checks",
            "Compliance verification",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Preventative Maintenance Programs
        </h4>

        <p className="text-[#3f3029] mb-3">
          Regular maintenance helps maximize system reliability and performance.
        </p>

        <p className="text-[#3f3029] mb-3">
          Our maintenance services include:
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Scheduled inspections",
            "Agent cylinder servicing",
            "Detection system testing",
            "Mechanical component adjustments",
            "System performance evaluations",
            "Documentation and compliance reporting",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Fire Suppression System Repairs
        </h4>

        <p className="text-[#3f3029]">
          If your system experiences damage, activation issues, or component
          failures, our technicians provide prompt repair services to restore
          protection and compliance.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Industries That Use Dry Chemical Fire Suppression Systems
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Dry chemical suppression systems are commonly installed in facilities
      where flammable materials or specialized industrial processes create
      elevated fire risks.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      Industries Served
    </h4>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Manufacturing facilities",
        "Automotive production plants",
        "Metal fabrication shops",
        "Chemical processing facilities",
        "Fuel storage operations",
        "Aerospace facilities",
        "Warehouses",
        "Utility plants",
        "Transportation facilities",
        "Industrial maintenance operations",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Types of Fires Dry Chemical Systems Can Suppress
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Dry chemical fire suppression systems are particularly effective against
      specific fire classifications.
    </p>

    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Class B Fires
        </h4>

        <p className="text-[#3f3029] mb-4">
          Fires involving flammable liquids such as:
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Gasoline",
            "Diesel fuel",
            "Solvents",
            "Oils",
            "Paints",
            "Industrial chemicals",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Class C Fires
        </h4>

        <p className="text-[#3f3029] mb-4">
          Fires involving energized electrical equipment such as:
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Electrical panels",
            "Control systems",
            "Industrial machinery",
            "Electrical distribution equipment",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <p className="text-[#3f3029] mt-8 leading-relaxed">
      System design requirements vary depending on facility hazards and fire
      classifications.
    </p>
  </div>
</section>
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Why Industrial Facilities Need Fire Suppression Systems
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Industrial operations often involve equipment, chemicals, fuels, and
      manufacturing processes that create elevated fire risks.
    </p>

    <p className="text-[#3f3029] font-medium mb-4">
      A properly designed fire suppression system helps:
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Protect employees and visitors",
        "Reduce property loss",
        "Preserve critical equipment",
        "Support business continuity",
        "Meet regulatory requirements",
        "Lower operational risks",
        "Improve workplace safety",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>

    <p className="text-[#3f3029] mt-8 leading-relaxed">
      Fire protection systems are a critical component of industrial risk
      management and facility safety planning.
    </p>
  </div>
</section>
<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Why Choose Desert In Alaska Corp?
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Since 1997, Desert In Alaska Corp has provided commercial and industrial
      fire protection services throughout Metro Detroit. Our experienced team
      designs, installs, inspects, and maintains fire suppression systems that
      help businesses remain safe, compliant, and operational.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      What Makes Us Different
    </h4>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Experienced industrial fire protection specialists",
        "Custom-designed suppression solutions",
        "Code-compliant installations",
        "Preventative maintenance programs",
        "Responsive service and support",
        "Comprehensive inspection services",
        "Knowledge of industrial fire protection standards",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Service Areas
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      We proudly serve industrial and commercial facilities throughout:
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Detroit",
        "Dearborn",
        "Warren",
        "Livonia",
        "Southfield",
        "Troy",
        "Sterling Heights",
        "Novi",
        "Farmington Hills",
        "Metro Detroit and surrounding communities",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Industrial Fire Suppression System Process
    </h3>

    <div className="space-y-5">
      {[
        {
          title: "Step 1: Site Assessment",
          description:
            "We evaluate facility operations, hazards, equipment, and fire risks.",
        },
        {
          title: "Step 2: System Design",
          description:
            "Our team develops a custom suppression system based on applicable codes and operational requirements.",
        },
        {
          title: "Step 3: Professional Installation",
          description:
            "Certified technicians install suppression equipment, detection systems, and discharge components.",
        },
        {
          title: "Step 4: Testing & Commissioning",
          description:
            "The system undergoes testing to verify functionality and compliance.",
        },
        {
          title: "Step 5: Ongoing Maintenance",
          description:
            "Regular inspections and maintenance ensure long-term reliability and performance.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="flex gap-4 border-l-4 border-[#86522d] pl-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#86522d] text-white font-semibold">
            {i + 1}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#2b1a12]">
              {step.title}
            </h4>
            <p className="text-[#3f3029] mt-1">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Frequently Asked Questions
    </h3>

    <div className="space-y-4">
      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          What is a dry chemical fire suppression system?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A dry chemical fire suppression system is an automatic fire protection
          system that uses specialized extinguishing agents to suppress fires
          involving flammable liquids, gases, and electrical equipment.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Where are dry chemical fire suppression systems used?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          These systems are commonly installed in manufacturing plants, fuel
          storage facilities, chemical processing operations, warehouses,
          automotive facilities, and industrial environments.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          What types of fires can dry chemical systems extinguish?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          Dry chemical systems are highly effective against Class B fires
          involving flammable liquids and Class C fires involving energized
          electrical equipment.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Are dry chemical systems better than water-based systems?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          For certain industrial hazards, dry chemical systems provide superior
          protection because water may not effectively suppress flammable liquid
          or electrical fires.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          How often should industrial fire suppression systems be inspected?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          Inspection schedules depend on system type, local regulations, and
          NFPA requirements. Most facilities benefit from regular inspections
          and preventative maintenance programs.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Can dry chemical fire suppression systems operate automatically?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          Yes. Most systems include automatic detection and activation
          capabilities while also allowing manual activation when necessary.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Do industrial fire suppression systems require maintenance?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          Yes. Regular inspections, testing, and maintenance are necessary to
          ensure reliability, compliance, and proper operation during an
          emergency.
        </p>
      </details>
    </div>
  </div>
</section>
<section className="bg-[#86522d] py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Request a Free Quote for Industrial Dry Chemical Fire Suppression Systems
      in Detroit
    </h2>

    <p className="text-white/90 text-lg leading-relaxed mb-8">
      Protect your facility, employees, and equipment with a professionally
      designed industrial dry chemical fire suppression system. Desert In Alaska
      Corp provides installation, inspections, maintenance, testing, and repair
      services for industrial fire protection systems throughout Detroit and
      Metro Detroit.
    </p>

    <p className="text-white/90 text-lg leading-relaxed mb-8">
      Contact our team today to schedule a consultation and receive a
      customized fire suppression solution for your facility.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-[#86522d] font-semibold hover:bg-gray-100 transition-colors"
    >
      Request Your Free Quote
    </Link>
  </div>
</section>
      {/* WHY CHOOSE */}
      
      {/* INDUSTRIES */}
      

      {/* CTA */}
     

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
