"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaGoogle, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  // 🔒 HARD SCROLL LOCK (WORKS ON ALL DEVICES)
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Desert in Alaska"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-2 font-serif">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-extrabold rounded-md
                ${
                  isActive(link.href)
                    ? "bg-[#86492D]/10 text-[#4195bd]"
                    : "text-[#4195bd] hover:bg-[#86492D]/10"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </nav>

          {/* MOBILE BTN */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white z-9999 transition
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="px-6 py-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2 hover:bg-[#86492D]/10"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 w-fit rounded-md bg-[#9b5d2e] px-5 py-2 text-white"
            >
              Get a Quote
            </Link>

            {/* CONTACT */}
            <div className="mt-6 border-t pt-4">
              <a href="tel:13139313070" className="block py-2">
                📞 313-931-3070
              </a>

              <a
                href="mailto:desertinalaska@outlook.com"
                className="block py-2"
              >
                ✉️ desertinalaska@outlook.com
              </a>

              {/* SOCIAL */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61582170474611"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://www.instagram.com/desertinalaska/"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://x.com/desertinalaska1"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <FaXTwitter size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/desertinalaska/"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Linkedin size={16} />
                </a>

                {/* GOOGLE REVIEWS ICON */}
                <a
                  href="https://share.google/JPBW3nf2o7HYJbXcY"
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="bg-[#9b5d2e] p-2 rounded-md text-white flex items-center justify-center"
                >
                  <FaGoogle size={16} />
                </a>
                <a
                  href="https://www.quora.com/profile/Desertin-Alaska"
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="bg-[#9b5d2e] p-2 rounded-md text-white flex items-center justify-center"
                >
                  <FaQuora size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
