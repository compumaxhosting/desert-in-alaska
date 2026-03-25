import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default:
      "Detroit Commercial Fire Suppression, HVAC & Mechanical Contractors | Desert In Alaska",
    template: "%s | Desert In Alaska",
  },

  description:
    "Fire suppression, commercial HVAC, kitchen exhaust, and gas piping services in Detroit, MI. Licensed & insured contractors serving Metro Detroit since 1997. Call 313-931-3070.",

  keywords: [
    "industrial dry chemical fire suppression Detroit MI",
    "commercial fire suppression Detroit MI",
    "commercial HVAC Detroit MI",
    "gas piping contractors Detroit",
    "fire suppression contractors in Detroit",
    "dry chemical fire suppression systems Detroit",
    "paint booth fire suppression Detroit",
    "fire suppression company in Metro Detroit",
  ],

  authors: [{ name: "Desert In Alaska" }],
  creator: "Desert In Alaska",
  publisher: "Desert In Alaska",

  metadataBase: new URL("https://www.desertinalaska.com"),

  verification: {
    google: "kn0v7q94F8ksUNmi6yPiubba8QGWVfmUL9prGS6iHL0",
  },

  other: {
    "p:domain_verify": "a9c6bedffe173035f52b87867ba65432",
  },

  openGraph: {
    title:
      "Detroit Commercial Fire Suppression & HVAC Contractors | Desert In Alaska",
    description:
      "Licensed commercial fire suppression and HVAC contractors in Detroit, MI. Serving Metro Detroit restaurants and industrial facilities since 1997.",
    url: "https://www.desertinalaska.com",
    siteName: "Desert In Alaska",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "Desert In Alaska",
              image: "https://www.desertinalaska.com/og-image.jpg",
              "@id": "https://www.desertinalaska.com",
              url: "https://www.desertinalaska.com",
              telephone: "+1-313-931-3070",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Detroit",
                addressLocality: "Detroit",
                addressRegion: "MI",
                postalCode: "48201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.3314,
                longitude: -83.0458,
              },
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
              sameAs: [
                "https://www.facebook.com/people/Desert-in-Alaska/61582170474611/",
                "https://www.facebook.com/people/Desert-in-Alaska/61582170474611/",
              ],
              description:
                "Commercial fire suppression, HVAC, kitchen exhaust, and gas piping services in Detroit, MI.",
            }),
          }}
        />
      </head>

      <body>
        {children}

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJE8X4GC1P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJE8X4GC1P');
          `}
        </Script>
      </body>
    </html>
  );
}
