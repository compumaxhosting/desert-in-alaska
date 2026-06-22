// components/FaqHomePage.tsx

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What businesses need fire suppression systems in Detroit?",
    answer:
      "Commercial kitchens, warehouses, manufacturing facilities, retail buildings, and many other commercial properties are required to have NFPA-compliant fire suppression systems to meet safety and insurance requirements.",
  },
  {
    question: "How often should fire suppression systems be inspected?",
    answer:
      "According to NFPA standards, fire suppression systems should be professionally inspected and tested at least twice per year to ensure proper operation and compliance.",
  },
  {
    question: "What is the cost of fire suppression installation?",
    answer:
      "Installation costs vary based on the size of the facility, system complexity, and code requirements. Small commercial systems typically cost less than large industrial or specialized suppression systems.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e6ddd5] bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
      >
        <div className="flex items-start gap-3">
          <span className="shrink-0 font-semibold text-[#8b5428]">Q:</span>

          <h3 className="text-base sm:text-lg font-medium text-[#3b2a1f] leading-snug">
            {faq.question}
          </h3>
        </div>

        <ChevronDown
          size={20}
          className={`shrink-0 text-[#8b5428] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#f1e7de] px-5 py-5 md:px-6">
            <div className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-[#8b5428]">
                A:
              </span>

              <p className="text-sm sm:text-base leading-relaxed text-[#6b5a4d]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqHomePage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#f8f5f2] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3b2a1f]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-[#6b5a4d]">
            Answers to common questions about commercial fire suppression,
            inspections, compliance, and installation services in Detroit.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}