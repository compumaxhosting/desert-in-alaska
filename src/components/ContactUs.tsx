"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import RequestQuoteForm from "@/components/RequestQuoteForm";

export default function ContactUs() {
  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* LEFT – REQUEST A QUOTE */}
          <RequestQuoteForm />

          {/* RIGHT – CONTACT INFO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-[#432719]">
              CONTACT INFORMATION
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6b5a4d]">
              Have questions? Our team is ready to help. Reach out to us through
              any of the following channels.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:3139313070"
                className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="rounded-md bg-[#86522d] p-3 text-white transition group-hover:bg-[#6f4224]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Phone</p>
                  <p className="font-medium text-[#432719] group-hover:underline">
                    313-931-3070
                  </p>
                </div>
              </a>

              <a
                href="mailto:desertinalaska@outlook.com"
                className="group flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="rounded-md bg-[#86522d] p-3 text-white transition group-hover:bg-[#6f4224]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Email</p>
                  <p className="font-medium text-[#432719] group-hover:underline">
                    desertinalaska@outlook.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="rounded-md bg-[#86522d] p-3 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Address</p>
                  <p className="font-medium text-[#432719]">
                    11402 Schaefer Hwy
                    <br />
                    Detroit, MI 48227
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <div className="rounded-md bg-[#86522d] p-3 text-white">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8b7a6c]">Business Hours</p>
                  <p className="font-medium text-[#432719]">
                    Monday – Saturday
                    <br />
                    8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps?q=11402+Schaefer+Hwy,+Detroit,+MI+48227&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
