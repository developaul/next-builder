import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? '/next-builder' : undefined;

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true
  },
  basePath
};

export default nextConfig;
