import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC & Fire Suppression Blog | Expert Tips & Insights Detroit",

  description:
    "Read expert insights, tips, and updates on commercial HVAC, fire suppression systems, gas piping, and mechanical services from Desert In Alaska Corp in Detroit.",

  keywords: [
    "HVAC blog Detroit",
    "fire suppression tips",
    "commercial HVAC insights",
    "mechanical services blog",
    "gas piping advice Detroit",
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
    canonical: "/blog",
  },

  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/blog",
    title: "HVAC & Fire Suppression Blog | Desert In Alaska Corp",
    description:
      "Stay updated with industry insights, safety tips, and expert advice on HVAC and fire suppression systems in Detroit.",
    siteName: "Desert In Alaska Corp",
    images: [
      {
        url: "/blog/gas-piping-blog.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HVAC & Mechanical Blog Detroit",
    description:
      "Expert HVAC, fire suppression, and mechanical service tips from Desert In Alaska Corp.",
    images: ["/blog/gas-piping-blog.webp"],
    creator: "@yourhandle",
  },

  themeColor: "#ffffff",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
