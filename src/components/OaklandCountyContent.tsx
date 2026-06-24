"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function OaklandCountyContent() {
  return (
    <main className="bg-[#faf8f5]">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-five.webp"
          alt="Oakland County Michigan fire protection and mechanical services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Oakland County, Michigan Fire Protection & Mechanical Services
          </h1>

          <p className="mt-4 text-lg">
            Oakland County is a key part of Metro Detroit, and local businesses
            need reliable fire protection, HVAC, kitchen exhaust, gas piping,
            and dry chemical suppression services to stay safe, compliant, and
            energy efficient.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[#3b2416] px-6 py-3 rounded-md font-semibold hover:bg-[#2a180f]"
          >
            Request Service →
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#2b1a12]">
          Expert Fire Protection and Mechanical Services for Oakland County
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Oakland County, Michigan is a major part of the Metro Detroit region
          known for its strong commercial infrastructure, industrial facilities,
          restaurants, healthcare centers, and growing residential communities.
          Businesses in this region require reliable fire protection systems,
          HVAC solutions, kitchen exhaust maintenance, gas piping services, and
          dry chemical fire suppression systems to meet safety codes and
          operational demands.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Our services in Oakland County focus on helping commercial and
          industrial facilities stay compliant, safe, and energy-efficient
          through certified installation, inspection, repair, and maintenance
          solutions.
        </p>
        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Oakland County, Michigan requires advanced fire protection and
          mechanical systems for commercial and industrial buildings. Services
          include fire suppression systems, HVAC installation and repair,
          kitchen exhaust cleaning, gas piping services, and dry chemical fire
          suppression systems. These systems ensure safety, code compliance,
          energy efficiency, and fire prevention across restaurants, factories,
          healthcare facilities, and commercial buildings throughout the region.
        </p>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Fire Suppression Services in Oakland County, Michigan
          </h2>

          <p className="text-[#3f3029] leading-relaxed mb-6">
            Fire suppression systems are essential safety installations designed
            to automatically detect and control fires in commercial and
            industrial environments. These systems protect lives, property, and
            business operations.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What is a Fire Suppression System?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            A fire suppression system is a network of devices that detects heat,
            smoke, or flames and automatically releases a suppressant such as
            water, gas, or chemicals to control or extinguish fire.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Fire Suppression Services We Provide
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Fire Suppression System Installation",
              "Commercial Fire Suppression Systems",
              "Fire Suppression System Inspection",
              "Fire Suppression Maintenance Services",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            How Fire Suppression Systems Work
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Detect heat or smoke through sensors",
              "Trigger automatic alarm system",
              "Release fire suppressant agent",
              "Control or extinguish fire immediately",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Protects lives and property",
              "Reduces fire damage",
              "Ensures code compliance",
              "Required for many commercial buildings",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Fire Code Compliance in Oakland County
          </h3>
          <p className="text-[#3f3029] leading-relaxed">
            Most commercial facilities must comply with NFPA fire codes and
            Michigan building safety regulations requiring regular inspections
            and certified installation.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            HVAC Installation & Repair in Oakland County
          </h2>

          <p className="text-[#3f3029] leading-relaxed mb-6">
            Heating, ventilation, and air conditioning systems are essential for
            comfort, energy efficiency, and indoor air quality in commercial and
            residential buildings.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            HVAC Services We Offer
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "HVAC Installation",
              "HVAC Repair Services",
              "Commercial HVAC Installation",
              "Emergency HVAC Repair",
              "HVAC Maintenance Services",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            How HVAC Systems Work
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Heating air during winter",
              "Cooling air during summer",
              "Filtering and circulating air",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Signs You Need HVAC Repair
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Weak airflow",
              "Rising energy bills",
              "Strange noises",
              "Uneven heating or cooling",
              "Frequent system breakdowns",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            HVAC Installation Process
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Site inspection",
              "Load calculation",
              "System selection",
              "Installation and duct setup",
              "Testing and commissioning",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Energy-Efficient HVAC Systems
          </h3>
          <p className="text-[#3f3029] leading-relaxed">
            Modern HVAC systems reduce energy consumption and improve long-term
            operational savings for commercial buildings in Oakland County.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Kitchen Exhaust Services in Oakland County
          </h2>

          <p className="text-[#3f3029] leading-relaxed mb-6">
            Commercial kitchens produce grease, smoke, and heat that must be
            properly ventilated to prevent fire hazards and maintain air
            quality.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Kitchen Exhaust Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Kitchen Exhaust Cleaning",
              "Restaurant Hood Cleaning",
              "Kitchen Exhaust Installation",
              "Exhaust Fan Repair",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Why Kitchen Exhaust Cleaning is Important
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Reduces fire risk",
              "Improves ventilation",
              "Meets NFPA 96 compliance",
              "Enhances kitchen safety",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Fire Hazards of Dirty Exhaust Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Grease buildup",
              "Blocked airflow",
              "Increased fire risk",
              "Equipment overheating",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            NFPA 96 Requirements
          </h3>
          <p className="text-[#3f3029] leading-relaxed">
            Commercial kitchens must follow NFPA 96 fire safety standards
            requiring routine cleaning and inspection of exhaust systems.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Gas Piping Services in Oakland County
          </h2>

          <p className="text-[#3f3029] leading-relaxed mb-6">
            Gas piping systems are critical for commercial kitchens, industrial
            facilities, and heating systems. Safe installation and maintenance
            are essential to prevent hazards.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Gas Piping Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Gas Piping Installation",
              "Commercial Gas Piping",
              "Gas Line Repair",
              "Emergency Gas Leak Repair",
              "Natural Gas Piping Services",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Signs of Gas Leaks
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Rotten egg smell",
              "Hissing sound near pipes",
              "Dead vegetation near gas lines",
              "Sudden health symptoms",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Gas Piping Safety Standards
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            All gas piping must follow strict Michigan safety codes and be
            installed by certified professionals.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            When Gas Lines Should Be Replaced
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Aging pipes",
              "Frequent leaks",
              "Corrosion damage",
              "Renovation or system upgrade",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Dry Chemical Fire Suppression Systems
          </h2>

          <p className="text-[#3f3029] leading-relaxed mb-6">
            Dry chemical systems are specialized fire protection systems
            commonly used in industrial and high-risk environments.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What is a Dry Chemical Fire Suppression System?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            A dry chemical system uses powdered chemicals to quickly suppress
            fires by interrupting the chemical reaction of combustion.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Where Dry Chemical Systems Are Used
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Industrial facilities",
              "Fuel storage areas",
              "Manufacturing plants",
              "Commercial kitchens",
              "Vehicle maintenance shops",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Benefits of Dry Chemical Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              "Fast fire suppression",
              "Effective on flammable liquids",
              "Reduces explosion risk",
              "Ideal for high-risk environments",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Inspection Requirements
          </h3>
          <p className="text-[#3f3029] leading-relaxed">
            Dry chemical systems require routine inspection to ensure proper
            pressure levels, system integrity, and compliance with fire safety
            regulations.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Industries We Serve in Oakland County
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Restaurants and commercial kitchens",
              "Industrial warehouses",
              "Manufacturing facilities",
              "Healthcare centers",
              "Office buildings",
              "Retail establishments",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Why Oakland County Businesses Choose Professional Fire & HVAC
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Improved safety and fire protection",
              "Regulatory compliance (NFPA & Michigan codes)",
              "Energy efficiency improvements",
              "Reduced operational risks",
              "Long-term system reliability",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3b2a1f]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-[#6b5a4d]">
              Answers to common questions about fire suppression, HVAC, kitchen
              exhaust, gas piping, and dry chemical systems.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is a fire suppression system?",
                answer:
                  "A fire suppression system is an automated system that detects and suppresses fires using water, gas, or chemical agents.",
              },
              {
                question:
                  "How often should fire suppression systems be inspected?",
                answer:
                  "Most systems should be inspected at least once or twice a year depending on local fire codes and industry requirements.",
              },
              {
                question: "How do fire suppression systems work?",
                answer:
                  "They detect heat or smoke and automatically release a suppression agent to control or extinguish the fire.",
              },
              {
                question: "What businesses need fire suppression systems?",
                answer:
                  "Restaurants, factories, warehouses, and commercial buildings handling flammable materials are typically required to have them.",
              },
              {
                question: "How much does HVAC installation cost?",
                answer:
                  "Costs vary based on system size, building type, and efficiency requirements, typically ranging from a few thousand to tens of thousands of dollars.",
              },
              {
                question: "What are signs your HVAC system needs repair?",
                answer:
                  "Weak airflow, unusual noises, rising energy bills, and inconsistent temperatures are common warning signs.",
              },
              {
                question:
                  "How often should kitchen exhaust systems be cleaned?",
                answer:
                  "Most commercial kitchens require cleaning every 3 to 6 months depending on usage.",
              },
              {
                question: "What are signs of a gas leak?",
                answer:
                  "Smell of sulfur, hissing sounds, and physical symptoms like dizziness are common indicators.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#e6ddd5] bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[#8b5428]">Q:</span>
                    <span className="text-base sm:text-lg font-medium text-[#3b2a1f]">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-[#8b5428] transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="border-t border-[#f1e7de] px-5 py-5 md:px-6">
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-[#8b5428]">A:</span>
                    <p className="text-sm sm:text-base leading-relaxed text-[#6b5a4d]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#86522d] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Request a Free Quote for Oakland County Commercial Systems
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Protect your facility, employees, and equipment with code-compliant
            fire suppression, HVAC, kitchen exhaust, and gas piping solutions.
            Desert In Alaska Corp provides installation, inspections,
            maintenance, testing, and repairs throughout Oakland County.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-[#86522d] font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Your Free Quote
          </Link>
        </div>
      </section>

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
          <Link href="/services/kitchen-exhaust-systems" className="underline">
            Kitchen Exhaust Systems
          </Link>
        </div>
      </section>
    </main>
  );
}
