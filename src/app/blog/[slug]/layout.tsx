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

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,

    keywords: blog.metaKeywords.split(",").map((keyword) => keyword.trim()),

    authors: [{ name: "Desert In Alaska Corp" }],

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

    metadataBase: new URL("https://www.desertinalaska.com"),

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },

    openGraph: {
      type: "article",
      url: `https://www.desertinalaska.com/blog/${blog.slug}`,
      title: blog.metaTitle,
      description: blog.metaDescription,
      siteName: "Desert In Alaska Corp",

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
      images: [blog.image],
      creator: "@yourhandle",
    },

    themeColor: "#ffffff",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
