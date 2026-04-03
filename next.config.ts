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
    ];
  },
};

export default nextConfig;
