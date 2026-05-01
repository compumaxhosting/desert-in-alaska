import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Commercial HVAC & Mechanical Work in Detroit",

  description:
    "Explore recent commercial HVAC, mechanical, and life safety projects completed by Desert In Alaska Corp across Metro Detroit.",

  keywords: [
    "HVAC projects Detroit",
    "commercial HVAC work",
    "mechanical projects Detroit",
    "Desert In Alaska projects",
    "HVAC installations",
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
    canonical: "/projects",
  },

  openGraph: {
    type: "website",
    url: "https://www.desertinalaska.com/projects",
    title: "Our Projects | Desert In Alaska Corp",
    description:
      "View our portfolio of commercial HVAC and mechanical projects across Metro Detroit. Quality work backed by decades of experience.",
    siteName: "Desert In Alaska Corp",
    images: [
      {
        url: "/service-one.webp",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our HVAC & Mechanical Projects",
    description:
      "See completed commercial HVAC and mechanical projects by Desert In Alaska Corp in Detroit.",
    images: ["/service-one.webp"],
    creator: "@yourhandle",
  },

  themeColor: "#ffffff",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
