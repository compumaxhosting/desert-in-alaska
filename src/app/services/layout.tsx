import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Desert In Alaska | Detroit HVAC & Fire Experts",
  description:
    "Learn about Detroit’s trusted HVAC & fire suppression experts since 1997. Licensed, certified & committed to safety. Contact us today!",
  keywords: [
    "Desert In Alaska Detroit",
    "HVAC contractors Detroit",
    "fire suppression company Detroit",
    "commercial HVAC company",
    "Detroit mechanical contractors",
    "fire safety experts",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Desert in Alaska Corp",
            description:
              "Detroit commercial HVAC and fire suppression experts since 1997.",
            url: "https://www.desertinalaska.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11402 Schaefer Hwy",
              addressLocality: "Detroit",
              addressRegion: "MI",
              postalCode: "48227",
            },
            telephone: "313-931-3070",
            founder: {
              "@type": "Person",
              name: "Mark Nemer",
            },
          }),
        }}
      />

      {children}
    </>
  );
}
