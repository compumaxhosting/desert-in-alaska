import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Fire Suppression, HVAC & Mechanical Services Detroit MI",
  description:
    "Commercial fire suppression, HVAC, kitchen exhaust, gas piping & industrial systems in Detroit, MI. Licensed contractors serving Metro Detroit since 1997.",
  keywords: [
    "commercial services Detroit MI",
    "fire suppression Detroit",
    "commercial HVAC Detroit",
    "kitchen exhaust systems Detroit",
    "gas piping Detroit",
    "industrial fire suppression Detroit",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
