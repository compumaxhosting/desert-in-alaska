import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Desert in Alaska | Commercial HVAC & Fire Suppression Services",
    template: "%s | Desert in Alaska",
  },
  description:
    "Desert in Alaska provides commercial HVAC, kitchen exhaust hood systems, fire suppression, gas piping, boiler systems, refrigeration, and custom duct fabrication for restaurants and industrial facilities.",
  keywords: [
    "commercial HVAC services",
    "kitchen exhaust hood installation",
    "fire suppression system installation",
    "restaurant ventilation systems",
    "gas piping services",
    "boiler system steam hot water",
    "commercial refrigeration services",
    "cold storage refrigeration",
    "custom ductwork fabrication",
    "commercial appliance repair",
    "industrial HVAC contractor",
  ],
  authors: [{ name: "Desert in Alaska" }],
  creator: "Desert in Alaska",
  publisher: "Desert in Alaska",
  metadataBase: new URL("https://www.desertinalaska.com"),
  openGraph: {
    title: "Desert in Alaska | Commercial HVAC & Fire Suppression Experts",
    description:
      "Experts in commercial HVAC, fire suppression, kitchen exhaust systems, refrigeration, boilers, and custom ductwork for restaurants and industrial facilities.",
    url: "https://www.desertinalaska.com",
    siteName: "Desert in Alaska",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
