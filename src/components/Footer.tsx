import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaGoogle, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#432719] text-[#f5efe9]">
        {/* TOP */}
        <div className="mx-auto max-w-7xl px-4 py-20 grid gap-16 lg:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Desert In Alaska Corp - Commercial Fire Suppression & HVAC Contractors Detroit"
              width={200}
              height={140}
              className="w-56 md:w-64 lg:w-62 h-auto"
            />

            <p className="text-sm leading-relaxed text-[#e7d6c8] max-w-sm font-serif">
              Desert In Alaska Corp is a trusted Detroit-based contractor
              specializing in commercial fire suppression systems, HVAC, gas
              piping, and mechanical services. Serving Metro Detroit businesses
              since 1997 with licensed and certified expertise.
            </p>

            <div className="flex gap-6 pt-4 text-xs text-[#4195bd]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={18} />
                <span>Certified Commercial Experts</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-lg font-medium font-sans">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#e7d6c8] font-serif">
              <li>
                <Link href="/" className="hover:text-white">
                  Commercial Fire Suppression Detroit
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Our Detroit Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Commercial HVAC & Mechanical Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Fire Suppression Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Our Detroit Office
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 text-lg font-medium font-sans">
              Commercial Services
            </h4>

            <ul className="space-y-3 text-sm text-[#e7d6c8] font-serif">
              <li>
                <a
                  href="/services/commercial-fire-suppression-detroit"
                  className="hover:underline"
                >
                  Commercial Fire Suppression Systems
                </a>
              </li>

              <li>
                <a
                  href="/services/commercial-hvac-detroit"
                  className="hover:underline"
                >
                  Commercial HVAC Installation & Repair
                </a>
              </li>

              <li>
                <a
                  href="/services/kitchen-exhaust-systems-detroit"
                  className="hover:underline"
                >
                  Kitchen Exhaust Hood Systems
                </a>
              </li>

              <li>
                <a
                  href="/services/gas-piping-detroit"
                  className="hover:underline"
                >
                  Commercial Gas Piping Installation
                </a>
              </li>

              <li>
                <a
                  href="/services/industrial-dry-chemical-fire-suppression-detroit"
                  className="hover:underline"
                >
                  Industrial Dry Chemical Systems
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-lg font-medium font-sans">
              Detroit Office
            </h4>

            <ul className="space-y-4 text-sm text-[#e7d6c8] font-serif">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#4195bd]" />
                <a
                  href="https://maps.google.com/maps?q=11402+Schaefer+Hwy+Detroit+MI+48227"
                  className="hover:text-white transition"
                >
                  <span>
                    11402 Schaefer Hwy
                    <br />
                    Detroit, MI 48227
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:13139313070"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Phone size={18} className="text-[#4195bd]" />
                  <span>313-931-3070</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:desertinalaska@outlook.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail size={18} className="text-[#4195bd]" />
                  <span>desertinalaska@outlook.com</span>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#4195bd]" />
                <span>Monday – Saturday | 8:00 AM – 6:00 PM</span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61582170474611"
                aria-label="Facebook"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/desertinalaska/"
                aria-label="Instagram"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://x.com/desertinalaska1"
                aria-label="X"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/desertinalaska/"
                aria-label="LinkedIn"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://share.google/JPBW3nf2o7HYJbXcY"
                target="_blank"
                aria-label="Google Reviews"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <FaGoogle size={18} />
              </a>
              <a
                href="https://www.quora.com/profile/Desertin-Alaska"
                target="_blank"
                aria-label="Quora"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <FaQuora size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 font-serif">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-[#d8c2b1]">
            <p>
              © 2026 Desert In Alaska Corp – Commercial Fire Suppression & HVAC
              Contractors in Detroit, MI. All rights reserved.
            </p>

            <Link href="/" className="hover:text-white transition">
              www.desertinalaska.com
            </Link>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
