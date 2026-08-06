import type { Metadata } from "next";
import { blogs } from "@/data/BlogData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Desert In Alaska Corp",
    };
  }

  const siteUrl = "https://www.desertinalaska.com";
  const author = "Desert in Alaska";

  if (blog.slug === "commercial-hvac-detroit-2026-guide") {
    return {
      metadataBase: new URL(siteUrl),
      title: "Commercial HVAC Detroit | Ultimate 2026 Business HVAC Guide",
      description:
        "Discover the ultimate 2026 Commercial HVAC Detroit guide covering repair, installation, maintenance, replacement, and energy-efficient solutions.",
      keywords: [
        "Commercial HVAC Detroit",
        "Commercial HVAC Services Detroit",
        "Commercial HVAC Repair Detroit",
        "Commercial HVAC Installation Detroit",
        "Commercial HVAC Maintenance Detroit",
        "Industrial HVAC Solutions Detroit",
        "Rooftop Unit Repair Detroit",
        "Rooftop HVAC Installation Detroit",
        "Commercial Air Conditioning Detroit",
        "Commercial Heating Services Detroit",
        "HVAC Preventive Maintenance Detroit",
        "Emergency Commercial HVAC Detroit",
        "Mechanical Contractor Detroit",
        "Commercial Ventilation Systems Detroit",
        "Building Climate Control Detroit",
        "HVAC System Replacement Detroit",
        "Commercial Furnace Repair Detroit",
        "Boiler Repair Detroit",
        "Chiller Maintenance Detroit",
        "Energy Efficient HVAC Detroit",
        "Office HVAC Services Detroit",
        "Warehouse HVAC Solutions Detroit",
        "Restaurant HVAC Services Detroit",
        "Facility HVAC Management Detroit",
        "Commercial HVAC Contractor Detroit",
      ],
      authors: [{ name: author }],
      alternates: {
        canonical: `${siteUrl}/blog/${blog.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
      referrer: "strict-origin-when-cross-origin",
      openGraph: {
        type: "website",
        url: `${siteUrl}/blog/${blog.slug}`,
        title: "Commercial HVAC Detroit | Ultimate 2026 Business HVAC Guide",
        description:
          "Learn everything Detroit businesses need to know about commercial HVAC repair, installation, maintenance, replacement, and energy efficiency in 2026.",
        siteName: author,
        images: [
          {
            url: "https://www.desertinalaska.com/blog/commercial-hvac-detroit-2026-guide.webp",
            width: 1200,
            height: 630,
            alt: "Commercial HVAC Detroit services for business buildings in 2026",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Commercial HVAC Detroit | Ultimate 2026 Business HVAC Guide",
        description:
          "Explore the complete 2026 guide to Commercial HVAC Detroit, including repair, maintenance, installation, and energy-efficient solutions.",
        images: [
          "https://www.desertinalaska.com/blog/commercial-hvac-detroit-2026-guide.webp",
        ],
        creator: "@desertinalaska1",
      },
      applicationName: author,
      appleWebApp: {
        capable: true,
        title: author,
        statusBarStyle: "black",
      },
      themeColor: "#ffffff",
    };
  }

  return {
    metadataBase: new URL(siteUrl),

    title: blog.metaTitle,

    description: blog.metaDescription,

    keywords: blog.metaKeywords.split(",").map((keyword) => keyword.trim()),

    authors: [
      {
        name: author,
      },
    ],

    alternates: {
      canonical: `${siteUrl}/blog/${blog.slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    referrer: "strict-origin-when-cross-origin",

    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${blog.slug}`,
      title: blog.metaTitle,
      description: blog.metaDescription,
      siteName: author,

      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.alt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [`${siteUrl}${blog.image}`],
      creator: "@desertinalaska1",
    },

    applicationName: author,

    appleWebApp: {
      capable: true,
      title: author,
      statusBarStyle: "black",
    },

    themeColor: "#ffffff",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
