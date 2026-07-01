import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Gas Piping Detroit MI | Installation & Repair",
  description:
    "Commercial gas piping services in Detroit MI. We install, repair, inspect, and upgrade gas piping systems for restaurants, businesses, and industrial facilities.",
  alternates: {
    canonical: "/services/gas-piping-detroit",
  },
  openGraph: {
    title: "Commercial Gas Piping Detroit MI | Installation & Repair",
    description:
      "Commercial gas piping services in Detroit MI. We install, repair, inspect, and upgrade gas piping systems for restaurants, businesses, and industrial facilities.",
    url: "https://www.desertinalaska.com/services/gas-piping-detroit",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Desert In Alaska Corp",
            image: "https://www.desertinalaska.com/logo.png",
            "@id": "https://www.desertinalaska.com/services/gas-piping-detroit",
            url: "https://www.desertinalaska.com/services/gas-piping-detroit",
            telephone: "313-931-3070",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11402 Schaefer Hwy",
              addressLocality: "Detroit",
              addressRegion: "MI",
              postalCode: "48227",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.3734,
              longitude: -83.1782,
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Wayne County" },
              { "@type": "AdministrativeArea", name: "Macomb County" },
              { "@type": "AdministrativeArea", name: "Oakland County" },
              { "@type": "AdministrativeArea", name: "Washtenaw County" },
              { "@type": "City", name: "Detroit" },
            ],
            description:
              "Professional commercial gas piping installation and mechanical services serving Wayne, Macomb, Oakland, and Washtenaw counties. Licensed contractors specializing in industrial gas lines since 1997.",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Gas Piping Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Gas Line Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gas Leak Detection and Safety Inspections",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
