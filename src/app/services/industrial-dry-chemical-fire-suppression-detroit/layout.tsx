import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Dry Chemical Fire Suppression Systems Detroit MI",
  description:
    "Industrial dry chemical fire suppression systems in Detroit, MI for paint booths, collision centers & manufacturing facilities. Call 313-931-3070.",
  keywords: [
    "dry chemical fire suppression Detroit",
    "industrial fire suppression systems Detroit",
    "paint booth fire suppression Detroit",
    "collision center fire suppression Detroit",
    "industrial suppression systems Detroit MI",
  ],
  alternates: {
    canonical: "/services/industrial-dry-chemical-fire-suppression-detroit",
  },
  openGraph: {
    title:
      "Industrial Dry Chemical Fire Suppression Detroit | Desert In Alaska",
    description:
      "Specialized fire suppression systems for industrial facilities and paint booths in Detroit.",
    url: "https://www.desertinalaska.com/services/industrial-dry-chemical-fire-suppression-detroit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
