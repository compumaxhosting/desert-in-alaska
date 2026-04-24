import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/commercial-hvac-services-detroit-mi.php",
        destination:
          "/services/commercial-hvac-detroit",
        permanent: true,
      },
      {
        source: "/residential-hvac-services-detroit-michigan.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
