import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Fire Suppression Detroit, MI | Desert in Alaska Corp",
  description:
    "Expert commercial fire suppression, HVAC, and kitchen exhaust services in Metro Detroit. Licensed, code-compliant, and trusted since 1997. Call for a consultation!",
  alternates: {
    canonical: "/services/commercial-fire-suppression-detroit",
  },
  openGraph: {
    title: "Commercial Fire Suppression Detroit, MI | Desert in Alaska Corp",
    description:
      "Expert commercial fire suppression, HVAC, and kitchen exhaust services in Metro Detroit.",
    url: "https://www.desertinalaska.com/services/commercial-fire-suppression-detroit",
    type: "website",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            "@id": "https://www.desertinalaska.com",
            url: "https://www.desertinalaska.com/services/commercial-fire-suppression-detroit",
            telephone: "[Insert Phone Number]",
            address: {
              "@type": "PostalAddress",
              streetAddress: "[Insert Street Address]",
              addressLocality: "Detroit",
              addressRegion: "MI",
              postalCode: "[Insert Zip Code]",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "[Insert Latitude]",
              longitude: "[Insert Longitude]",
            },
            servesCuisine: "Commercial Kitchens",
            areaServed: "Metro Detroit",
            description:
              "Expert commercial fire suppression, HVAC, and mechanical services in Metro Detroit since 1997. Licensed specialists in kitchen hoods, gas piping, and industrial dry chemical systems.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Mechanical & Life Safety Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Fire Suppression & Life Safety",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Heating & Cooling (HVAC)",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Kitchen Exhaust Systems",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gas Piping & Mechanical Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Industrial Dry Chemical Systems",
                  },
                },
              ],
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
            ],
          }),
        }}
      />
    </>
  );
}
