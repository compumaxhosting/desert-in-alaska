"use client";

import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const contactItems = [
  {
    href: "https://wa.me/13139953255",
    ariaLabel: "Chat on WhatsApp",
    Icon: FaWhatsapp,
    text: "WhatsApp",
    external: true,
  },
  {
    href: "tel:13139313070",
    ariaLabel: "Call Desert In Alaska at 313-931-3070",
    Icon: Phone,
    text: "Call",
  },
  {
    href: "mailto:desertinalaska@outlook.com",
    ariaLabel: "Email Desert In Alaska",
    Icon: Mail,
    text: "Email",
  },
];

const ContactBarTwo: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Quick contact options"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#9b5d2e] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, ariaLabel, Icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#cc2a18] transition-colors font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        <Icon size={24} aria-hidden="true" />
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBarTwo;
