import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Desert In Alaska Corp | HVAC & Mechanical Services Detroit",

  description:
    "Contact Desert In Alaska Corp for expert commercial HVAC, fire suppression, and mechanical services in Detroit. Call 313-931-3070 or visit our office.",

  keywords: [
    "contact HVAC Detroit",
    "Desert In Alaska contact",
    "HVAC contractor Detroit phone number",
    "mechanical services Detroit contact",
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
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/contact",
    title: "Contact Desert In Alaska Corp | Get a Quote Today",
    description:
      "Reach out to Desert In Alaska Corp for reliable HVAC, mechanical, and fire protection services in Metro Detroit.",
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
    title: "Contact Desert In Alaska Corp",
    description:
      "Call or visit Desert In Alaska Corp for commercial HVAC and mechanical services in Detroit.",
    images: ["/og-image.webp"],
    creator: "@yourhandle",
  },

  themeColor: "#ffffff",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
