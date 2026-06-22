import {
  Flame,
  Fan,
  UtensilsCrossed,
  Factory,
  Warehouse,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Fire Suppression Installation Detroit",
    description:
      "Complete fire suppression system design, installation, and inspection to keep your facility protected and code compliant.",
  },
  {
    icon: Fan,
    title: "HVAC Commercial Contractors Detroit",
    description:
      "Expert HVAC installation, repair, and maintenance for commercial buildings and industrial facilities.",
  },
];

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "Specialized systems for kitchen exhaust, fire suppression, and HVAC.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Reliable mechanical solutions for production and industrial facilities.",
  },
  {
    icon: Warehouse,
    title: "Warehouses",
    description:
      "Fire protection and HVAC systems that meet code and protect operations.",
  },
  {
    icon: ShoppingCart,
    title: "Retail Buildings",
    description:
      "Comfort, safety, and efficiency for retail and commercial spaces.",
  },
];

export default function WhatWeDoAndIndustriesWeServe() {
  return (
    <section className="bg-[#F4EEE8] py-8 lg:py-10">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <div className="border-b border-[#D7C7B5] lg:border-b-0 lg:border-r">
            <SectionHeading title="What We Do" />

            <div className="grid md:grid-cols-2">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-8 py-8 text-center ${
                    index === 0
                      ? "border-b border-[#D7C7B5] md:border-b-0 md:border-r md:border-[#D7C7B5]"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#2B211C] mx-auto">
                    <item.icon size={22} className="text-[#C89245]" />
                  </div>

                  <h3 className="mx-auto mb-4 max-w-[320px] text-[20px] font-semibold leading-tight text-[#2B211C]">
                    {item.title}
                  </h3>

                  <p className="mx-auto max-w-[360px] text-[15px] leading-6 text-[#5A5148]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-10 lg:mt-0">
            <SectionHeading title="Industries We Serve" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg px-5 py-6 text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#C89245]">
                    <item.icon size={22} className="text-[#C89245]" />
                  </div>

                  <h3 className="mx-auto mb-3 max-w-[220px] text-[18px] font-semibold leading-tight text-[#2B211C]">
                    {item.title}
                  </h3>

                  <p className="mx-auto max-w-[260px] text-[13px] leading-6 text-[#5A5148]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-0 sm:mb-5 lg:mb-10 text-center">
      <h2 className="text-[25px] font-semibold text-[#2B211C] md:text-[26px] lg:text-[32px]">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-[2px] w-16 bg-[#C89245]" />
    </div>
  );
}
