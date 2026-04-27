import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/commercial-hvac-services-detroit-mi.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/residential-hvac-services-detroit-michigan.php",
        destination: "/services/commercial-hvac-detroit",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/shop.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/c1.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/c2.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/completed.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
      {
        source: "/c3.php",
        destination: "/",
        permanent: true, // ✅ 301 redirect (SEO safe)
      },
    ];
  },
};

export default nextConfig;
