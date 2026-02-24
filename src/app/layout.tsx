import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Detroit Commercial Fire Suppression, HVAC & Mechanical Contractors | Desert In Alaska",
    template: "%s | Desert In Alaska",
  },
  description:
    "Fire suppression, commercial HVAC, kitchen exhaust, and gas piping services in Detroit, MI. Licensed & insured experts serving Metro Detroit since 1997. Call 313-931-3070.",
  keywords: [
    "industrial dry chemical fire suppression Detroit MI",
    "commercial fire suppression Detroit MI",
    "commercial HVAC Detroit MI",
    "gas piping contractors Detroit",
    "fire suppression contractors in Detroit",
    "dry chemical fire suppression systems Detroit",
    "paint booth fire suppression Detroit",
    "fire suppression company in Metro Detroit",
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
