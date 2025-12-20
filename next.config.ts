import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-domain.com", // replace later
        pathname: "/**",
      },
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
