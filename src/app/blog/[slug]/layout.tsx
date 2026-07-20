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
  const author = "Desert Plumbing & Heating Supply";

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
