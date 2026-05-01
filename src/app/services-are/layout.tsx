import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Commercial HVAC, Gas Piping & Fire Protection Detroit",

  description:
    "Explore commercial HVAC, gas piping, fire suppression, and mechanical services by Desert In Alaska Corp. Serving Metro Detroit with reliable solutions since 1997.",

  keywords: [
    "commercial HVAC Detroit",
    "gas piping installation Detroit",
    "fire suppression systems Detroit",
    "mechanical services Detroit",
    "HVAC contractor Detroit",
  ],

  authors: [{ name: "Desert In Alaska Corp" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  metadataBase: new URL("https://www.desertinalaska.com"),

  alternates: {
    canonical: "/services-are", // 🔥 FIXED
  },

  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/services-are", // 🔥 FIXED
    title: "Commercial HVAC & Mechanical Services | Desert In Alaska Corp",
    description:
      "From HVAC installation to fire suppression and gas piping, Desert In Alaska Corp delivers expert commercial mechanical services in Detroit.",
    siteName: "Desert In Alaska Corp",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HVAC, Gas Piping & Fire Protection Services Detroit",
    description:
      "Reliable commercial HVAC and mechanical services including fire suppression and gas piping in Metro Detroit.",
    images: ["/og-image.webp"],
    creator: "@yourhandle",
  },

  themeColor: "#ffffff",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
