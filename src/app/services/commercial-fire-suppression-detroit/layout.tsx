import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Fire Suppression Systems Detroit MI | Installation & Service",
  description:
    "Expert commercial fire suppression systems in Detroit, MI. Kitchen systems, dry chemical, fire extinguishers & code-compliant installations. Call 313-931-3070.",
  keywords: [
    "commercial fire suppression Detroit",
    "fire suppression systems Detroit MI",
    "kitchen fire suppression Detroit",
    "industrial fire suppression Detroit",
    "fire suppression contractors Detroit",
    "dry chemical fire suppression Detroit",
  ],
  alternates: {
    canonical: "/services/commercial-fire-suppression-detroit",
  },
  openGraph: {
    title: "Commercial Fire Suppression Systems in Detroit | Desert In Alaska",
    description:
      "Licensed fire suppression contractors in Detroit. Installation, inspection & maintenance for commercial systems.",
    url: "https://www.desertinalaska.com/services/commercial-fire-suppression-detroit",
    type: "website",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
