import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fire Protection & HVAC Services Wayne County MI | Suppression, Gas & Exhaust",
  description:
    "Fire suppression, HVAC installation, kitchen exhaust, gas piping & dry chemical systems in Wayne County MI. Certified commercial safety & repair services.",
  keywords: [
    "Fire Suppression Systems Wayne County MI",
    "HVAC Installation Wayne County Michigan",
    "Commercial HVAC Repair Wayne County",
    "Kitchen Exhaust Cleaning Wayne County",
    "Restaurant Hood Cleaning Michigan",
    "Gas Piping Installation Wayne County MI",
    "Emergency Gas Leak Repair Michigan",
    "Dry Chemical Fire Suppression Systems",
    "Commercial Fire Protection Wayne County",
    "HVAC Maintenance Services Michigan",
    "Fire Suppression Installation Michigan",
    "Kitchen Exhaust Systems Wayne County",
    "Industrial HVAC Services Michigan",
    "Code Compliance Fire Systems Michigan",
    "Commercial Mechanical Services Wayne County MI",
  ],
  authors: [{ name: "Desert in Alaska" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.desertinalaska.com/wayne-county-michigan/",
  },
  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/wayne-county-michigan/",
    siteName: "Desert in Alaska",
    title:
      "Fire Protection & HVAC Services Wayne County MI | Suppression & Mechanical Solutions",
    description:
      "Wayne County Michigan fire suppression, HVAC repair, kitchen exhaust cleaning, gas piping & dry chemical fire protection services for commercial buildings.",
    images: [
      {
        url: "https://www.desertinalaska.com/service-five.webp",
        alt: "Commercial fire protection and HVAC services in Wayne County Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fire Protection & HVAC Services Wayne County MI | Commercial Systems",
    description:
      "Fire suppression, HVAC installation, kitchen exhaust cleaning, gas piping & dry chemical systems in Wayne County Michigan.",
    images: [
      "https://www.desertinalaska.com/service-five.webp",
    ],
  },
};

export default function WayneCountyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
