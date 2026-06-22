export default function WhyChooseUs() {
  const trustPoints = [
    "Since 1997",
    "NFPA Code Compliant",
    "Commercial Specialists",
    "Emergency Service Available",
  ];

  return (
    <section className="bg-[#86522d] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#f3d3a4]">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
            Trusted Commercial Fire Protection & HVAC Experts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#f8efe7] sm:text-base">
            Delivering reliable fire suppression, HVAC, and mechanical
            solutions for commercial and industrial facilities throughout
            Metro Detroit.
          </p>
        </div>

        {/* Trust Points */}
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {trustPoints.map((item) => (
            <div
              key={item}
              className="border-l-2 border-[#f3d3a4] pl-4"
            >
              <p className="text-sm font-medium text-[#f9f0e9] sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="text-xl font-semibold text-[#f3d3a4] sm:text-2xl">
                25+
              </p>
              <p className="mt-1 text-xs text-[#f8efe7] sm:text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#f3d3a4] sm:text-2xl">
                NFPA
              </p>
              <p className="mt-1 text-xs text-[#f8efe7] sm:text-sm">
                Compliant
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#f3d3a4] sm:text-2xl">
                24/7
              </p>
              <p className="mt-1 text-xs text-[#f8efe7] sm:text-sm">
                Emergency Service
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-[#f3d3a4] sm:text-2xl">
                Detroit
              </p>
              <p className="mt-1 text-xs text-[#f8efe7] sm:text-sm">
                Service Area
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#f8efe7] sm:text-base">
            Serving restaurants, industrial facilities, warehouses, and
            commercial buildings with code-compliant fire protection,
            HVAC, and mechanical solutions.
          </p>
        </div>
      </div>
    </section>
  );
}