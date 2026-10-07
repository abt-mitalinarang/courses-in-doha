import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui"],
  basePath: "/dashboard",
}

export default nextConfig
