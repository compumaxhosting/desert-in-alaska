// ServicesOfferedAfterHero.tsx

const services = [
  "Fire suppression system design & installation",
  "Restaurant kitchen fire safety systems",
  "Commercial HVAC installation & maintenance",
  "NFPA inspection & compliance services",
  "Emergency repair services",
];

export default function ServicesOfferedAfterHero() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-left md:text-center text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight text-[#3b2a1f]">
            Complete Fire Protection & Mechanical Systems for Commercial
            Buildings
          </h2>

          <p className="mt-4 text-left md:text-center text-base md:text-lg leading-relaxed text-[#6b5a4d] max-w-3xl mx-auto">
            We design, install, and maintain commercial fire suppression and
            HVAC systems that meet strict safety and compliance standards across
            Detroit and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10">
          <ul className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <li
                key={service}
                className={`flex items-center gap-3 rounded-xl border border-[#e7ddd3] bg-white px-5 py-4 text-[#6b5a4d] shadow-sm transition-all duration-200 hover:shadow-md ${
                  index === services.length - 1
                    ? "md:col-span-2 md:w-[55%] md:mx-auto"
                    : ""
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4e6d7] text-sm font-bold text-[#8b5428]">
                  ✓
                </span>

                <span className="text-sm sm:text-base font-medium leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}