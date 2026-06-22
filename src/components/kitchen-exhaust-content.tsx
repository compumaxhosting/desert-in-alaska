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
          src="/service-three.webp"
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
         Professional Kitchen Exhaust Hood Installation, Ventilation & Exhaust System Services
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Commercial kitchen exhaust systems are essential for removing smoke, grease, heat, steam, and cooking odors from restaurants, cafeterias, food processing facilities, and commercial kitchens. A properly designed kitchen exhaust system improves air quality, enhances fire safety, supports code compliance, and creates a safer working environment for employees and customers {" "}
          <Link
    href="/"
    className="text-blue-600  hover:text-blue-800"
  >
   Desert In Alaska Corp
  </Link>{" "}
           
          provides commercial kitchen exhaust system installation, repair, maintenance, and ventilation solutions throughout Detroit and Metro Detroit.
        </p>

        
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <div>
  <h3 className="text-xl font-semibold text-[#2b1a12] mb-4">
    What Is a Commercial Kitchen Exhaust System?
  </h3>

  <p className="text-[#3f3029] mb-4">
    A commercial kitchen exhaust system is a ventilation system designed to
    remove airborne contaminants generated during cooking operations. It
    consists of multiple components that work together to capture
    grease-laden vapors, smoke, heat, and odors and safely discharge them
    outside the building.
  </p>

  <h4 className="font-semibold text-[#2b1a12] mb-3">
    Key Components Include:
  </h4>

  <ul className="space-y-4">
    {[
      "Kitchen exhaust hood",
      "Grease filters",
      "Exhaust ductwork",
      "Exhaust fan",
      "Make-up air unit",
      "Fire suppression system",
      "Ventilation controls",
    ].map((item, i) => (
      <li key={i} className="flex gap-3">
        <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
        <span className="text-[#3f3029]">{item}</span>
      </li>
    ))}
  </ul>

  <p className="text-[#3f3029] mt-4">
    These systems are commonly required in restaurants, hotels, schools,
    hospitals, cafeterias, food courts, and commercial food preparation
    facilities.
  </p>
</div>

        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/service-three.webp"
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
      Why Kitchen Exhaust Systems Are Important
    </h3>

    <p className="text-[#3f3029] mt-4 leading-relaxed">
      Commercial kitchens generate large amounts of heat, smoke, grease
      particles, and moisture. Without proper ventilation, these contaminants
      can create unsafe working conditions and increase fire risks.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mt-6">
      Benefits of a Properly Installed Kitchen Exhaust System
    </h4>

    <div className="grid sm:grid-cols-2 gap-6 mt-6">
      {[
        "Removes smoke and cooking fumes",
        "Improves indoor air quality",
        "Reduces grease accumulation",
        "Helps meet NFPA and local code requirements",
        "Creates a cooler kitchen environment",
        "Improves employee comfort and productivity",
        "Supports health inspection compliance",
        "Helps protect equipment and property from fire hazards",
      ].map((item, i) => (
        <div key={i} className="flex gap-3">
          <Utensils className="text-[#86522d]" />
          <span className="text-[#3f3029]">{item}</span>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
      Kitchen Exhaust System Services in Detroit
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-8">
      Desert In Alaska Corp provides complete kitchen exhaust and commercial
      ventilation services for businesses throughout Metro Detroit. Our
      experienced technicians design systems that meet safety standards,
      operational needs, and local building requirements.
    </p>

    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Kitchen Exhaust Hood Installation
        </h4>

        <p className="text-[#3f3029] mb-3">
          We install commercial kitchen hoods for:
        </p>

        <ul className="space-y-2">
          {[
            "Restaurants",
            "Fast-food establishments",
            "Cafeterias",
            "Catering facilities",
            "Hotels",
            "Food processing operations",
            "Institutional kitchens",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-[#3f3029] mt-4">
          Our team ensures proper sizing, airflow calculations, and
          code-compliant installation.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Exhaust Fan Installation & Replacement
        </h4>

        <p className="text-[#3f3029] mb-3">
          Proper airflow is critical for kitchen performance. We install and
          replace:
        </p>

        <ul className="space-y-2">
          {[
            "Roof-mounted exhaust fans",
            "Utility set exhaust fans",
            "Inline exhaust fans",
            "Variable speed ventilation systems",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Commercial Kitchen Ventilation Design
        </h4>

        <p className="text-[#3f3029] mb-3">
          Every kitchen has unique ventilation requirements. We design systems
          based on:
        </p>

        <ul className="space-y-2">
          {[
            "Cooking equipment layout",
            "Airflow requirements",
            "Occupancy levels",
            "Building configuration",
            "Local code requirements",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Exhaust Ductwork Installation
        </h4>

        <p className="text-[#3f3029] mb-3">Our services include:</p>

        <ul className="space-y-2">
          {[
            "Grease duct installation",
            "Duct modifications",
            "Duct replacement",
            "Code-compliant routing and clearances",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Make-Up Air Systems
        </h4>

        <p className="text-[#3f3029]">
          Effective ventilation requires balanced airflow. We install make-up
          air systems that replace exhausted air and maintain comfortable indoor
          conditions.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Kitchen Exhaust System Maintenance
        </h4>

        <p className="text-[#3f3029] mb-3">
          Routine maintenance helps maximize system efficiency and reduce costly
          repairs.
        </p>

        <p className="text-[#3f3029] mb-3">
          Maintenance services include:
        </p>

        <ul className="space-y-2">
          {[
            "Exhaust fan inspections",
            "Airflow testing",
            "Filter replacement",
            "System performance evaluations",
            "Ventilation troubleshooting",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Types of Commercial Kitchen Exhaust Hoods
    </h3>

    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Type I Exhaust Hoods
        </h4>

        <p className="text-[#3f3029] mb-4">
          Type I hoods are designed for cooking appliances that produce grease
          and smoke.
        </p>

        <p className="text-[#3f3029] font-medium mb-3">
          Common applications:
        </p>

        <ul className="space-y-2">
          {[
            "Fryers",
            "Grills",
            "Charbroilers",
            "Woks",
            "Ranges",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-[#3f3029] mt-4">
          These hoods typically require integrated fire suppression systems.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2b1a12] mb-3">
          Type II Exhaust Hoods
        </h4>

        <p className="text-[#3f3029] mb-4">
          Type II hoods are designed for heat, steam, and moisture removal
          where grease production is minimal.
        </p>

        <p className="text-[#3f3029] font-medium mb-3">
          Common applications:
        </p>

        <ul className="space-y-2">
          {[
            "Dishwashers",
            "Steamers",
            "Ovens",
            "Baking equipment",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
              <span className="text-[#3f3029]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#f8f5f2] py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      How Does a Kitchen Exhaust System Work?
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      A commercial kitchen exhaust system works by capturing contaminated air
      directly above cooking equipment.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      The Process
    </h4>

    <div className="space-y-4">
      {[
        "Cooking equipment generates heat, smoke, and grease vapors.",
        "The exhaust hood captures airborne contaminants.",
        "Grease filters remove grease particles.",
        "Ductwork transports contaminated air.",
        "Exhaust fans discharge air outside the building.",
        "Make-up air systems replace exhausted air to maintain balance.",
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
      This process helps maintain safe, comfortable, and code-compliant kitchen
      operations.
    </p>
  </div>
</section>

<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-[#2b1a12] mb-6">
      Industries We Serve
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      We provide kitchen exhaust system solutions for:
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Restaurants",
        "Bars and grills",
        "Cafeterias",
        "Food courts",
        "Hospitals",
        "Schools and universities",
        "Hotels and resorts",
        "Commercial food processing facilities",
        "Corporate kitchens",
        "Catering operations",
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
      Why Choose Desert In Alaska Corp?
    </h3>

    <p className="text-[#3f3029] leading-relaxed mb-6">
      Since 1997, Desert In Alaska Corp has provided commercial mechanical,
      HVAC, fire suppression, and kitchen exhaust solutions throughout Metro
      Detroit. Our team delivers reliable installations, code-compliant
      workmanship, and professional service tailored to commercial facilities.
    </p>

    <h4 className="text-xl font-semibold text-[#2b1a12] mb-4">
      What Sets Us Apart
    </h4>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Licensed and insured professionals",
        "Commercial kitchen ventilation expertise",
        "Code-compliant installations",
        "Fire safety-focused designs",
        "Preventative maintenance programs",
        "Experienced Detroit service team",
        "Responsive customer support",
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
      We proudly serve businesses throughout:
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Detroit",
        "Dearborn",
        "Livonia",
        "Warren",
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
      Frequently Asked Questions
    </h3>

    <div className="space-y-4">
      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: What is the purpose of a kitchen exhaust system?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: A kitchen exhaust system removes smoke, grease, heat, moisture, and
          cooking odors from commercial kitchens, improving air quality and
          reducing fire risks.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: Are kitchen exhaust systems required by code?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: Yes. Most commercial kitchens must have properly designed exhaust and
          ventilation systems that comply with NFPA standards, fire codes, and
          local building regulations.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: What is the difference between Type I and Type II hoods?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: Type I hoods are designed for grease-producing cooking equipment such
          as fryers and grills. Type II hoods handle heat and steam from
          equipment that produces little or no grease.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: How often should kitchen exhaust systems be inspected?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: Inspection frequency depends on cooking volume and local regulations.
          Many commercial kitchens benefit from regular inspections and
          preventative maintenance programs to maintain compliance and
          performance.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: Can an exhaust system help reduce fire hazards?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: Yes. Proper ventilation reduces grease buildup, improves air
          circulation, and works alongside kitchen fire suppression systems to
          improve overall fire safety.
        </p>
      </details>

      <details className="border border-[#d6c4b8] rounded-lg p-4">
        <summary className="font-semibold text-[#2b1a12] cursor-pointer">
          Q: Do restaurants need make-up air systems?
        </summary>
        <p className="mt-3 text-[#3f3029]">
          A: Yes. Most commercial kitchens require make-up air systems to replace
          exhausted air and maintain balanced airflow throughout the facility.
        </p>
      </details>
    </div>
  </div>
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
