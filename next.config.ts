import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/prathap-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
