import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Kitchen Exhaust Systems Detroit MI | Hood Installation & Repair",
  description:
    "Get commercial kitchen exhaust systems in Detroit MI. We install, repair, and maintain restaurant hood systems, exhaust fans, ductwork, and ventilation solutions for businesses.",
  keywords: [
    "kitchen exhaust systems Detroit",
    "commercial kitchen hood installation Detroit",
    "restaurant ventilation systems Detroit",
    "kitchen exhaust ductwork Detroit MI",
    "commercial kitchen ventilation Detroit",
  ],
  alternates: {
    canonical: "/services/kitchen-exhaust-systems-detroit",
  },
  openGraph: {
    title: "Kitchen Exhaust Hood Systems in Detroit | Desert In Alaska",
    description:
      "Professional kitchen exhaust hood installation and ventilation systems for restaurants in Detroit.",
    url: "https://www.desertinalaska.com/services/kitchen-exhaust-systems-detroit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
