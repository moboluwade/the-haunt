import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "utfs.io/f/",
    },
    {
      protocol: "https",
      hostname: "img.icons8.com",
    }
  ]
 }
  /* config options here */
};

export default nextConfig;
