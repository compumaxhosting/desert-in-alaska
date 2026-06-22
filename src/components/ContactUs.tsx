"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import BookAppointmentForm from "./BookAppointmentForm";

export default function ContactUs() {
  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* LEFT – REQUEST A QUOTE */}
          <BookAppointmentForm />
          
          {/* RIGHT – CONTACT INFO & REVIEW */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold text-[#432719]">
              CONTACT INFORMATION
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#6b5a4d]">
              Have questions? Our team is ready to help. Reach out to us through
              any of the following channels.
            </p>

            {/* Layout Grid: Left for Links/Info, Right for Review Scanner */}
            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_240px] items-start">
              
              {/* Contact Info Items */}
              <div className="space-y-4">
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

              {/* REVIEW US SCANNER CARD (Placed Side-by-Side) */}
              <a
                href="https://g.page/r/CUMIyvnBv6BHEAE/review"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[2rem] border border-[#a89276]/30 bg-[#1a110b] p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#847361]">
                  Review Us
                </div>
                
                {/* QR Code Container */}
                <div className="mx-auto my-4 relative aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-white p-2">
                  <div className="relative h-full w-full">
                    <Image
                      src="/review-scanner.jpeg"
                      alt="Scan to leave a review"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Yellow Call to Action Button */}
                <div className="rounded-xl border border-[#eab308]/20 bg-[#2d2312] px-3 py-3 text-center text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.1)] transition group-hover:bg-[#362a14]">
                  <p className="text-sm font-bold flex items-center justify-center gap-1.5 leading-tight">
                    ★ Click or Scan
                  </p>
                  <p className="text-sm font-bold leading-tight">
                    to Leave a 5-Star
                  </p>
                  <p className="text-sm font-bold leading-tight">
                    Review
                  </p>
                </div>
              </a>

            </div>

            {/* Map Section Below */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
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