import Image from "next/image";
import Link from "next/link";
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
import { FaGoogle} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#432719] text-[#f5efe9]">
        {/* TOP */}
        <div className="mx-auto max-w-7xl px-4 py-20 grid gap-16 lg:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Desert In Alaska Corp - Commercial Fire Suppression & HVAC Contractors Detroit"
                width={200}
                height={140}
                className="w-56 md:w-64 h-auto"
                priority
              />
              <span className="text-sm italic text-slate-500 leading-tight font-bold ">
                Mechanical and fire Suppression contractor
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#e7d6c8] max-w-xs font-serif">
              <Link href="/">Desert In Alaska</Link> Corp is a trusted
              Detroit-based contractor specializing in commercial fire
              suppression systems, HVAC, gas piping, and mechanical services.
              Serving Metro Detroit businesses since 1997 with licensed and
              certified expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-xs text-[#4195bd]">
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
                <Link
                  href="/services/commercial-fire-suppression-detroit"
                  className="hover:underline"
                >
                  Commercial Fire Suppression Systems
                </Link>
              </li>

              <li>
                <Link
                  href="/services/commercial-hvac-detroit"
                  className="hover:underline"
                >
                  Commercial HVAC Installation & Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/services/kitchen-exhaust-systems-detroit"
                  className="hover:underline"
                >
                  Kitchen Exhaust Hood Systems
                </Link>
              </li>

              <li>
                <Link
                  href="/services/gas-piping-detroit"
                  className="hover:underline"
                >
                  Commercial Gas Piping Installation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/industrial-dry-chemical-fire-suppression-detroit"
                  className="hover:underline"
                >
                  Industrial Dry Chemical Systems
                </Link>
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
                <Link
                  href="https://maps.app.goo.gl/u8wJqF5pcWsRHHmv6"
                  className="hover:text-white transition"
                >
                  <span>
                    11402 Schaefer Hwy
                    <br />
                    Detroit, MI 48227
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="tel:13139313070"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Phone size={18} className="text-[#4195bd]" />
                  <span>313-931-3070</span>
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:desertinalaska@outlook.com"
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail size={18} className="text-[#4195bd]" />
                  <span>desertinalaska@outlook.com</span>
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#4195bd] mt-1 shrink-0" />

                <div className="flex flex-col">
                  <span>Monday – Saturday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61582170474611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Facebook size={18} aria-hidden="true" />
              </Link>

              <Link
                href="https://www.instagram.com/desertinalaska/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Instagram size={18} aria-hidden="true" />
              </Link>

              <Link
                href="https://x.com/desertinalaska1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X (formerly Twitter) profile"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <FaXTwitter size={18} aria-hidden="true" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/desertinalaska/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <Linkedin size={18} aria-hidden="true" />
              </Link>

              <Link
                href="https://share.google/JPBW3nf2o7HYJbXcY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read our Google Reviews"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <FaGoogle size={18} aria-hidden="true" />
              </Link>

              <Link
                href="https://www.tiktok.com/@desertinalaska0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok profile"
                className="rounded-md bg-white/10 p-2 text-[#4195bd] transition hover:bg-white/20 hover:text-white"
              >
                <SiTiktok size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 font-serif">
          <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-center text-sm text-[#d8c2b1] text-center">
            <p>© 2026 Desert In Alaska Corp – All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
