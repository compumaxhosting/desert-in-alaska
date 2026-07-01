import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial HVAC Detroit MI | Installation, Repair & Maintenance",
  description:
    "Commercial HVAC services in Detroit MI. We install, repair, and maintain HVAC systems for offices, restaurants, warehouses, and industrial facilities",
  keywords: [
    "commercial HVAC Detroit",
    "HVAC installation Detroit MI",
    "commercial heating and cooling Detroit",
    "HVAC repair Detroit commercial",
    "rooftop HVAC units Detroit",
    "commercial air conditioning Detroit",
  ],
  alternates: {
    canonical: "/services/commercial-hvac-detroit",
  },
  openGraph: {
    title: "Commercial HVAC Detroit MI | Installation, Repair & Maintenance",
    description:
      "Commercial HVAC services in Detroit MI. We install, repair, and maintain HVAC systems for offices, restaurants, warehouses, and industrial facilities",
    url: "https://www.desertinalaska.com/services/commercial-hvac-detroit",
    type: "website",
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
            "@type": "HVACBusiness",
            name: "Desert In Alaska Corp",
            image: "https://www.desertinalaska.com/hvac-service-detroit.jpg",
            "@id": "https://www.desertinalaska.com",
            url: "https://www.desertinalaska.com/services/commercial-hvac-detroit",
            telephone: "313-931-3070",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Detroit, MI 48227",
              addressLocality: "Detroit",
              addressRegion: "MI",
              postalCode: "48227",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.3626,
              longitude: -83.276,
            },
            areaServed: [
              { "@type": "City", name: "Detroit" },
              { "@type": "AdministrativeArea", name: "Wayne County" },
              { "@type": "AdministrativeArea", name: "Macomb County" },
              { "@type": "AdministrativeArea", name: "Oakland County" },
              { "@type": "AdministrativeArea", name: "Washtenaw County" },
            ],
            description:
              "Expert commercial HVAC installation, repair, and preventative maintenance in Metro Detroit since 1997. Specialists in rooftop units, commercial ventilation, and mechanical piping.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Commercial HVAC & Mechanical Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial HVAC Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "HVAC Preventative Maintenance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Mechanical Repairs",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Air Quality & Ventilation",
                  },
                },
              ],
            },
          }),
        }}
      />

      {children}
    </>
  );
}
