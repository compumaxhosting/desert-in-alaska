

import { Phone, Mail, Facebook, Instagram, X, Linkedin } from "lucide-react";

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
        <a
          href="https://www.facebook.com/people/Desert-in-Alaska/100070081153037/#"
          aria-label="Facebook"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <Facebook size={16} />
        </a>

        <a
          href="https://www.instagram.com/nemermark/"
          aria-label="Instagram"
          className="rounded-md bg-white/10 p-2  text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <Instagram size={16} />
        </a>

        <a
          href="https://x.com/desertinalaska1"
          aria-label="X (Twitter)"
          className="rounded-md bg-white/10 p-2  text-white transition hover:bg-white/20 hover:text-[#c98b55]"
        >
          <X size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/desertinalaska/"
          aria-label="LinkedIn"
          className="rounded-md bg-white/10 p-2 text-white transition hover:bg-white/20 hover:text-white"
        >
          <Linkedin size={16} />
        </a>
      </div>

      {/* Right */}
      <div className="flex-1 text-right">Mon – Sat, 8:00 AM – 6:00 PM</div>
    </div>
  );
}
