"use client";

import Image from "next/image";
import Link from "next/link";
import { IoShieldOutline, IoTimeOutline } from "react-icons/io5";
import { PiMedalThin } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import HeroTrustBar from "./HeroTrustBar";

export default function Hero() {
  const trustRef = useRef<HTMLDivElement | null>(null);
  const [trustVisible, setTrustVisible] = useState(false);

  // ❌ removed requestAnimationFrame (was delaying LCP)

  useEffect(() => {
    const el = trustRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrustVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden sm:max-h-screen">
      {/* ✅ Image optimized (same look) */}
      <Image
        src="/hero.webp"
        alt="Detroit commercial fire suppression and HVAC systems installation"
        fill
        priority
        quality={70} // reduced from 80 → faster
        sizes="(max-width: 768px) 100vw, 100vw"
        style={{ objectFit: "cover" }}
      />

      {/* SAME overlay (no change) */}
      <div className="absolute inset-0 bg-linear-to-br from-[hsl(20_45%_12%)]/95 via-[hsl(20_35%_22%)]/90 to-[hsl(210_25%_30%)]/70" />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-content-around">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl text-white">
            {/* Top Label */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#c88a4a] font-serif">
              <span className="h-px w-12 bg-[#c88a4a]" />
              Metro Detroit’s Trusted Experts
            </div>

            {/* ✅ H1 visible immediately (no delay) */}
            <h1 className="text-2xl font-medium font-sans-400 leading-[1.05] sm:text-3xl md:text-4xl lg:text-4xl">
              Commercial Fire Protection & HVAC Experts in Detroit Since 1997
            </h1>
            <p className="text-md font-medium font-sans-400 leading-[1.05] sm:text-md md:text-xl lg:text-xl text-[#c88a4a] mt-4">
              NFPA-compliant fire suppression, HVAC, and mechanical systems for
              restaurants, industrial facilities, and commercial buildings.
            </p>
            {/* Description */}
            <p className="mt-6 max-w-2xl text-xs text-white/85 sm:text-sm font-serif">
              We provide comprehensive fire suppression systems, commercial HVAC
              solutions, kitchen exhaust, and mechanical services across Metro
              Detroit.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:3139313070"
                className="rounded-md font-serif bg-[#8b5428] px-8 py-4 text-xs sm:text-xs md: text-sm font-semibold text-white hover:bg-[#73431f] transition inline-flex items-center gap-2"
              >
                <FiPhone size={16} />
                Emergency Service Available
              </a>

              <Link
                href="/contact"
                className="rounded-md font-serif border border-white/60 px-8 py-4 text-xs sm:text-xs md: text-sm font-semibold text-white hover:bg-white hover:text-black transition"
              >
                Schedule On-Site Inspection
              </Link>
            </div>
            <HeroTrustBar />  

            {/* Trust Indicators (same design, just smarter render) */}
            <div
              ref={trustRef}
              className={`mt-6 flex flex-wrap gap-8 border-t border-white/20 pt-8 text-sm text-white font-serif
                transition-all duration-700 ease-out
                ${
                  trustVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <IoShieldOutline className="text-lg" />
                <span>Licensed & Insured</span>
              </div>

              <div className="flex items-center gap-2">
                <PiMedalThin className="text-lg" />
                <span>Certified Technicians</span>
              </div>

              <div className="flex items-center gap-2">
                <IoTimeOutline className="text-lg" />
                <span>Emergency Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
