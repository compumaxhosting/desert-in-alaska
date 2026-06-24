"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function WayneCountyContent() {
  return (
    <main className="bg-[#faf8f5]">
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/service-five.webp"
          alt="Commercial fire suppression HVAC kitchen exhaust gas piping services Wayne County MI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Commercial Fire Suppression, HVAC, Kitchen Exhaust & Gas Piping
            Services in Wayne County, MI
          </h1>

          <p className="mt-4 text-lg">
            Certified technicians providing installation, inspections,
            maintenance, repairs, testing, and code-compliant solutions for
            commercial and industrial facilities.
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
          Quick Answer
        </h2>

        <p className="mt-4 text-[#5a4a42] leading-relaxed">
          Looking for reliable fire suppression, HVAC, kitchen exhaust, gas
          piping, or dry chemical fire suppression services in Wayne County,
          Michigan? Our certified technicians provide installation, inspections,
          maintenance, repairs, testing, and code-compliant solutions for
          commercial and industrial facilities. We help businesses improve
          safety, maintain compliance, reduce downtime, and protect valuable
          assets throughout Wayne County and surrounding communities.
        </p>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Fire Suppression Systems in Wayne County, Michigan
          </h2>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What Are Fire Suppression Systems?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Fire suppression systems are specialized fire protection solutions
            designed to detect, control, and extinguish fires before they
            spread. Unlike standard fire alarms, suppression systems actively
            respond to hazards using wet chemical, dry chemical, clean agent, or
            other suppression technologies.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Why Fire Suppression Systems Matter
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Protect employees and customers",
              "Reduce property damage",
              "Minimize operational downtime",
              "Meet local and national fire code requirements",
              "Improve business continuity",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Our Fire Suppression Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Fire suppression system installation",
              "System inspections and testing",
              "Preventive maintenance",
              "Emergency repairs",
              "Code compliance evaluations",
              "Wet chemical fire suppression systems",
              "Pre-engineered fire suppression systems",
              "Commercial fire protection equipment",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Industries We Serve
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Restaurants",
              "Manufacturing facilities",
              "Warehouses",
              "Commercial buildings",
              "Automotive facilities",
              "Industrial plants",
              "Healthcare facilities",
              "Educational institutions",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            HVAC Installation & Repair Services
          </h2>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What Is Commercial HVAC?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Commercial HVAC systems regulate heating, cooling, ventilation, and
            indoor air quality within commercial and industrial properties. A
            properly functioning HVAC system supports employee comfort,
            operational efficiency, and energy savings.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            HVAC Installation Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Rooftop HVAC units",
              "Split systems",
              "Air handlers",
              "Ventilation systems",
              "Ductwork systems",
              "Indoor air quality equipment",
              "Energy-efficient HVAC solutions",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            HVAC Repair & Maintenance
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Diagnostic troubleshooting",
              "Emergency repairs",
              "Preventive maintenance",
              "System upgrades",
              "Component replacement",
              "Performance optimization",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Benefits of Professional HVAC Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Improved energy efficiency",
              "Lower operating costs",
              "Better indoor comfort",
              "Extended equipment lifespan",
              "Improved air quality",
              "Reduced breakdowns",
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
            Commercial Kitchen Exhaust Systems
          </h2>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What Is a Kitchen Exhaust System?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            A kitchen exhaust system removes smoke, heat, grease, odors, and
            airborne contaminants generated during commercial cooking
            operations. Proper ventilation is essential for maintaining a safe
            and compliant kitchen environment.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Why Kitchen Exhaust Systems Are Important
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Commercial kitchens generate significant grease-laden vapors that
            can create fire hazards and ventilation problems. Professional
            exhaust system services help businesses:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Improve fire safety",
              "Maintain code compliance",
              "Enhance air quality",
              "Improve kitchen efficiency",
              "Protect equipment",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Our Kitchen Exhaust Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Exhaust hood installation",
              "Kitchen ventilation system design",
              "Grease duct installation",
              "Exhaust fan services",
              "Hood inspections",
              "Preventive maintenance",
              "Compliance evaluations",
              "Ventilation upgrades",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Common Facilities We Serve
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Restaurants",
              "Cafeterias",
              "Hotels",
              "Hospitals",
              "Schools",
              "Food processing facilities",
              "Catering operations",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Commercial Gas Piping Services
          </h2>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What Is Commercial Gas Piping?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Commercial gas piping systems safely distribute natural gas or
            propane to equipment and appliances throughout a facility. Proper
            installation and maintenance are critical for safety, efficiency,
            and code compliance.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            Our Gas Piping Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Gas piping installation",
              "Gas line replacement",
              "Gas line repairs",
              "Leak detection",
              "Pressure testing",
              "System inspections",
              "Preventive maintenance",
              "Fuel gas system upgrades",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Benefits of Professional Gas Piping Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Improved safety",
              "Reduced leak risks",
              "Reliable fuel delivery",
              "Regulatory compliance",
              "Long-term system performance",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Common Applications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Commercial kitchens",
              "Industrial equipment",
              "Boilers",
              "Manufacturing systems",
              "Heating systems",
              "Process equipment",
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

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            What Are Dry Chemical Fire Suppression Systems?
          </h3>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Dry chemical fire suppression systems are designed to quickly
            suppress fires involving flammable liquids, combustible materials,
            and industrial hazards. These systems release specialized dry
            chemical agents that interrupt the combustion process and prevent
            fire spread.
          </p>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mb-4">
            How Dry Chemical Systems Work
          </h3>
          <div className="space-y-4">
            {[
              "The detection system activates.",
              "The suppression system releases dry chemical agents.",
              "The fire is rapidly controlled or extinguished.",
              "Damage and operational disruptions are minimized.",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Applications for Dry Chemical Fire Suppression
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Paint booths",
              "Industrial machinery",
              "Fuel storage areas",
              "Mechanical equipment",
              "Manufacturing operations",
              "Chemical processing facilities",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#2b1a12] mt-10 mb-4">
            Dry Chemical System Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "System design",
              "Installation",
              "Inspections",
              "Testing",
              "Maintenance",
              "Recharge services",
              "Repairs",
              "Compliance evaluations",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#2b1a12] mb-6">
            Why Businesses Choose Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Experienced professionals who understand commercial and industrial requirements",
              "Code compliance expertise for fire safety, mechanical, and fuel gas systems",
              "Comprehensive service solutions from one provider",
              "Preventive maintenance programs that reduce emergency repairs",
              "Faster response for repairs, inspections, and testing",
              "Integrated service offerings for fire suppression, HVAC, exhaust, and gas piping",
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
            Service Areas Throughout Wayne County, Michigan
          </h2>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            We proudly serve businesses throughout Wayne County, including:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Allen Park",
              "Belleville",
              "Dearborn",
              "Dearborn Heights",
              "Detroit",
              "Ecorse",
              "Flat Rock",
              "Garden City",
              "Gibraltar",
              "Grosse Pointe",
              "Grosse Pointe Farms",
              "Grosse Pointe Park",
              "Grosse Pointe Shores",
              "Grosse Pointe Woods",
              "Hamtramck",
              "Harper Woods",
              "Highland Park",
              "Inkster",
              "Lincoln Park",
              "Livonia",
              "Melvindale",
              "Northville",
              "Plymouth",
              "River Rouge",
              "Riverview",
              "Rockwood",
              "Romulus",
              "Southgate",
              "Taylor",
              "Trenton",
              "Wayne",
              "Westland",
              "Woodhaven",
              "Wyandotte",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#86522d] mt-1" />
                <span className="text-[#3f3029]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[#3f3029] leading-relaxed mb-6">
            Whether you operate a restaurant, manufacturing facility, warehouse,
            healthcare facility, office building, or commercial property, our
            team provides dependable fire protection and mechanical system
            solutions throughout Wayne County.
          </p>
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
                question:
                  "How often should a fire suppression system be inspected?",
                answer:
                  "Most commercial fire suppression systems require routine inspections and maintenance to ensure compliance, reliability, and proper operation. Inspection schedules may vary based on system type, occupancy, and applicable regulations.",
              },
              {
                question: "What businesses need fire suppression systems?",
                answer:
                  "Restaurants, manufacturing facilities, warehouses, industrial plants, healthcare facilities, and many commercial properties often require fire suppression systems to meet safety and code requirements.",
              },
              {
                question: "How long do commercial HVAC systems last?",
                answer:
                  "Commercial HVAC systems typically last 15–25 years depending on maintenance, operating conditions, equipment quality, and usage patterns.",
              },
              {
                question: "Why is kitchen exhaust maintenance important?",
                answer:
                  "Kitchen exhaust systems accumulate grease and contaminants over time. Regular maintenance helps reduce fire risks, improve ventilation performance, and support code compliance.",
              },
              {
                question: "How can I tell if I have a gas leak?",
                answer:
                  "Common signs may include unusual odors, equipment performance issues, or pressure irregularities. Suspected gas leaks should always be evaluated immediately by qualified professionals.",
              },
              {
                question:
                  "What is the difference between wet chemical and dry chemical fire suppression?",
                answer:
                  "Wet chemical systems are commonly used for commercial cooking applications, while dry chemical systems are often used for industrial hazards, flammable liquids, and specialized equipment protection.",
              },
              {
                question: "Do you provide emergency repair services?",
                answer:
                  "Yes. Emergency repair services help businesses minimize downtime and restore critical fire protection and mechanical systems quickly.",
              },
              {
                question: "Why is code compliance important?",
                answer:
                  "Code compliance helps protect occupants, reduce liability, avoid penalties, and ensure critical life-safety systems function properly during emergencies.",
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
            Request a Free Quote for Wayne County Commercial Systems
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Protect your facility, employees, and equipment with code-compliant
            fire suppression, HVAC, kitchen exhaust, and gas piping solutions.
            Desert In Alaska Corp provides installation, inspections,
            maintenance, testing, and repairs throughout Wayne County.
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
