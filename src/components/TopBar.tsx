

import { Phone, Mail, Facebook, Instagram,  Linkedin } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="hidden lg:flex items-center bg-[#432719] text-white text-sm px-6 py-2">
      {/* Left */}
      <div className="flex items-center gap-6 flex-1">
        <a
          href="tel:13139313070"
          className="flex items-center gap-2 hover:text-[#c98b55] transition"
        >
          <Phone size={14} />
          <span>313-931-3070</span>
        </a>

        <a
          href="mailto:desertinalaska@outlook.com"
          className="flex items-center gap-2 hover:text-[#c98b55] transition"
        >
          <Mail size={14} />
          <span>desertinalaska@outlook.com</span>
        </a>
      </div>

      {/* Middle (Social Icons) */}
      <div className="flex items-center gap-3 justify-center flex-1">
        {/* FACEBOOK */}
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/profile.php?id=61582170474611"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <Facebook size={16} />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/desertinalaska/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <Instagram size={16} />
        </a>

        {/* X */}
        <a
          href="https://x.com/desertinalaska1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <FaXTwitter size={16} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/desertinalaska/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-white"
        >
          <Linkedin size={16} />
        </a>

        {/* GOOGLE */}
        <a
          href="https://share.google/JPBW3nf2o7HYJbXcY"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Reviews"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <FaGoogle size={16} />
        </a>
      </div>

      {/* Right */}
      <div className="flex-1 text-right">Mon – Sat, 8:00 AM – 6:00 PM</div>
    </div>
  );
}
