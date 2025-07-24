import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //add cloudinary config
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
