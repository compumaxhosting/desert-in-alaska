import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Desert In Alaska Corp | Commercial HVAC & Mechanical Experts Detroit",
  description:
    "Learn about Desert In Alaska Corp, a trusted provider of commercial HVAC, mechanical, and life safety services in Metro Detroit since 1997.",

  keywords: [
    "Desert In Alaska Corp",
    "commercial HVAC Detroit",
    "mechanical services Detroit",
    "HVAC company Metro Detroit",
    "life safety services",
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
    canonical: "/about-us",
  },

  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/about-us",
    title: "About Desert In Alaska Corp | HVAC & Mechanical Experts",
    description:
      "Discover the story behind Desert In Alaska Corp and our commitment to delivering expert commercial HVAC and mechanical solutions in Metro Detroit.",
    siteName: "Desert In Alaska Corp",
    images: [
      {
        url: "/gallery1.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Desert In Alaska Corp",
    description:
      "Trusted commercial HVAC and mechanical services provider in Metro Detroit since 1997.",
    images: ["/gallery1.webp"],
    creator: "@yourhandle",
  },

  themeColor: "#ffffff",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
