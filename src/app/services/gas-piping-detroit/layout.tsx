import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Gas Piping Installation Detroit MI | Mechanical Contractors",
  description:
    "Commercial gas piping installation and mechanical services in Detroit, MI. Licensed contractors for restaurants, industrial & commercial systems. Call 313-931-3070.",
  keywords: [
    "commercial gas piping Detroit",
    "gas piping contractors Detroit MI",
    "gas line installation Detroit",
    "commercial gas line installation Detroit",
    "mechanical contractors Detroit MI",
    "industrial gas piping Detroit",
  ],
  alternates: {
    canonical: "/services/gas-piping-detroit",
  },
  openGraph: {
    title: "Commercial Gas Piping Services Detroit | Desert In Alaska",
    description:
      "Expert gas piping installation and mechanical services for commercial and industrial facilities in Detroit.",
    url: "https://www.desertinalaska.com/services/gas-piping-detroit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
