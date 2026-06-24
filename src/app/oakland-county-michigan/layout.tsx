import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Fire Protection Services Oakland County MI | HVAC, Fire Suppression & Gas Piping",
  description:
    "Fire protection services in Oakland County MI including fire suppression, HVAC installation, kitchen exhaust cleaning, gas piping & dry chemical systems.",
  keywords: [
    "Fire Suppression Systems Oakland County Michigan",
    "HVAC Installation Oakland County MI",
    "HVAC Repair Services Oakland County",
    "Commercial HVAC Installation Michigan",
    "Emergency HVAC Repair Oakland County",
    "Kitchen Exhaust Cleaning Oakland County",
    "Restaurant Hood Cleaning Michigan",
    "Gas Piping Installation Oakland County",
    "Emergency Gas Leak Repair Michigan",
    "Dry Chemical Fire Suppression Systems",
    "Fire Suppression Installation Michigan",
    "Fire Code Compliance Oakland County",
    "Commercial Fire Protection Services Michigan",
    "HVAC Maintenance Oakland County MI",
    "Kitchen Exhaust Systems Michigan",
    "Industrial Fire Safety Systems Oakland County",
  ],
  authors: [{ name: "Desert in Alaska" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.desertinalaska.com/oakland-county-michigan/",
  },
  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/oakland-county-michigan/",
    siteName: "Desert in Alaska",
    title: "Fire Protection Services Oakland County MI | HVAC & Safety Systems",
    description:
      "Oakland County Michigan fire suppression, HVAC repair, kitchen exhaust cleaning, gas piping & dry chemical fire protection services for commercial buildings.",
    images: [
      {
        url: "https://www.desertinalaska.com/images/service-five.webp",
        alt: "Fire protection and HVAC services in Oakland County Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Protection Services Oakland County MI | HVAC & Safety Systems",
    description:
      "Fire suppression, HVAC installation, kitchen exhaust cleaning, gas piping & industrial fire safety services in Oakland County Michigan.",
    images: [
      "https://www.desertinalaska.com/images/service-five.webp",
    ],
  },
};

export default function OaklandCountyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
