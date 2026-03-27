"use client";

import Image from "next/image";

import { useInView } from "@/hooks/useInView";

export default function OurStory() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section className="bg-[#faf8f5] py-14 md:py-16">
      {/* 🔥 Scroll trigger */}
      <div ref={ref} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-3 grid gap-20 lg:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div
          className={`relative transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl h-92.5">
            <Image
              src="/about.webp"
              alt="Commercial mechanical facility"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* YEARS BADGE */}
          <div
            className={`absolute -bottom-10 right-0 rounded-xl bg-[#86522d] px-3 py-5 md:px-4 md:py-8 text-center text-white shadow-2xl
              transition-all duration-700 ease-out delay-200
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }
            `}
          >
            <div className="text-3xl md:text-4xl font-normal leading-none">
              27+
            </div>
            <div className="mt-2 text-xs md:text-sm font-serif tracking-wide">
              Years of Excellence
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <h2 className="mt-4 text-4xl leading-[1.01] text-[#432719] font-sans">
            About Desert In Alaska Corp: Metro Detroit’s Mechanical Experts
          </h2>

          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Since 1997, Desert In Alaska Corp has been a cornerstone of
            mechanical excellence in Metro Detroit, proudly serving businesses
            across Wayne County, Macomb County, Oakland County, and Washtenaw
            County. What began as a dedicated residential and commercial HVAC
            provider has evolved into a comprehensive Life Safety and Mechanical
            Services firm. We don&apos;t just install equipment; we engineer
            safety and comfort for the businesses that power our community.
          </p>
          <h3 className="mt-4 text-3xl leading-[1.01] text-[#432719] font-sans">
            Our Evolution & Expertise
          </h3>
          <p className="mt-6 text-sm max-w-xl text-[#6b5a4d] font-serif leading-relaxed">
            Over two decades of service, we recognized a critical gap in the
            market for integrated fire safety and mechanical systems. Today, we
            bridge that gap by offering specialized services that keep your
            business compliant and your employees safe.
          </p>
        </div>
      </div>
      {/* MIDDLE CONTENT */}
      <div className="mt-20 max-w-4xl mx-auto px-3">
        <h3 className="text-3xl text-[#432719] font-sans text-center">
          Core Service Specializations
        </h3>

        <ul className="mt-6 space-y-3 text-sm text-[#6b5a4d] font-serif leading-relaxed">
          <li>
            • Fire Suppression & Life Safety: Custom-engineered systems designed
            to detect and extinguish fires before they devastate your property.
          </li>
          <li>
            • Heating & Cooling (HVAC): High-efficiency commercial climate
            control solutions tailored to the unique Michigan seasons.
          </li>
          <li>
            • Commercial Kitchen Exhaust Systems: Turnkey ventilation and hood
            installations that meet strict health and fire department codes.
          </li>
          <li>
            • Gas Piping & Mechanical Services: Certified, precision-engineered
            piping for industrial and commercial applications.
          </li>
          <li>
            • Industrial Dry Chemical Systems: Robust protection for high-hazard
            areas like paint booths and chemical storage.
          </li>
        </ul>

        <h3 className="mt-10 text-3xl text-[#432719] font-sans text-center">
          Why Partner With Us?
        </h3>

        <p className="mt-4 text-sm text-[#6b5a4d] font-serif leading-relaxed text-center">
          Navigating local fire codes and mechanical requirements in Metro
          Detroit requires a partner who knows the landscape.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-[#6b5a4d] font-serif leading-relaxed">
          <li>
            • Decades of Experience: Proudly serving the region since 1997.
          </li>
          <li>
            • Certified Professionals: Our team consists of licensed experts who
            prioritize safety and precision.
          </li>
          <li>
            • Code Compliance: We maintain a 100% focus on meeting NFPA and
            local Michigan safety standards.
          </li>
          <li>
            • Comprehensive Care: From initial design to 6-month inspections and
            maintenance, we handle it all.
          </li>
        </ul>
      </div>
    </section>
  );
}
