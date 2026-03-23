import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial HVAC Installation & Repair Detroit MI | Heating & Cooling Experts",
  description:
    "Commercial HVAC installation, repair, and maintenance in Detroit, MI. Rooftop units, furnaces, AC systems & more. Call 313-931-3070.",
  keywords: [
    "commercial HVAC Detroit",
    "HVAC installation Detroit MI",
    "commercial heating and cooling Detroit",
    "HVAC repair Detroit commercial",
    "rooftop HVAC units Detroit",
    "commercial air conditioning Detroit",
  ],
  alternates: {
    canonical: "/services/commercial-hvac-detroit",
  },
  openGraph: {
    title: "Commercial HVAC Services in Detroit | Desert In Alaska",
    description:
      "Expert HVAC installation and repair for commercial buildings in Detroit. Licensed contractors since 1997.",
    url: "https://www.desertinalaska.com/services/commercial-hvac-detroit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
