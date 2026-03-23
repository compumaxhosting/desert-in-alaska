import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Kitchen Exhaust Systems Detroit MI | Hood Installation & Ventilation",
  description:
    "Kitchen exhaust hood installation and ventilation systems in Detroit, MI. Commercial kitchen exhaust, ductwork & code-compliant systems. Call 313-931-3070.",
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
