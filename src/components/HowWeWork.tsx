// components/HowWeWork.tsx

import {
  ClipboardCheck,
  MonitorSmartphone,
  Wrench,
  FileCheck,
  Settings,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Site Inspection",
    description:
      "We assess your facility, identify risks, and understand your requirements.",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "System Design",
    description:
      "Our experts design a custom solution that meets NFPA codes and your needs.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "Installation",
    description:
      "Certified technicians install systems with precision and minimal disruption.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Compliance Testing",
    description:
      "We test and inspect to ensure full code compliance and system reliability.",
    icon: FileCheck,
  },
  {
    id: 5,
    title: "Maintenance",
    description:
      "Ongoing service and maintenance keep your systems operating at peak performance.",
    icon: Settings,
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#86492d] via-[#9b5d2e] to-[#86492d]" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16 flex items-center justify-center gap-4">
          <div className="hidden sm:block h-px w-16 md:w-24 bg-[#f0c27a]/70" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-wide">
            How We Work
          </h2>

          <div className="hidden sm:block h-px w-16 md:w-24 bg-[#f0c27a]/70" />
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:grid lg:grid-cols-5 lg:gap-4">
          {/* Connector Line */}
          <div className="absolute left-[10%] right-[10%] top-12 border-t border-dashed border-[#f0c27a]/60" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="absolute left-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0c27a] text-sm font-bold text-[#86492d] shadow-md">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-[#f0c27a]/40 backdrop-blur-sm">
                  <Icon
                    size={42}
                    strokeWidth={1.5}
                    className="text-[#f0c27a]"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg xl:text-xl font-medium text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="max-w-[220px] text-xs xl:text-sm leading-relaxed text-[#f4e5d6]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Timeline */}
        <div className="relative lg:hidden">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-[#f0c27a]/40" />

          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex gap-5">
                  {/* Number */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0c27a] text-sm font-bold text-[#86492d] shadow-lg">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="rounded-2xl border border-[#f0c27a]/20 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#f0c27a]/30">
                          <Icon
                            size={24}
                            strokeWidth={1.75}
                            className="text-[#f0c27a]"
                          />
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#f4e5d6]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}