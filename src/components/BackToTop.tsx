"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WHATSAPP LEFT — always visible */}
      <a
        href="https://wa.me/13139953255"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{ position: "fixed", bottom: 16, left: 16, zIndex: 9999 }}
        className="rounded-full bg-[#25D366] p-3 text-white shadow-lg hover:bg-[#1ebe5d] transition"
      >
        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* BACK TO TOP RIGHT */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{ position: "fixed", bottom: 16, right: 16, zIndex: 9999 }}
          className="rounded-full bg-[#9b5d2e] p-3 text-white shadow-lg hover:bg-[#864f26] transition"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  );
}
