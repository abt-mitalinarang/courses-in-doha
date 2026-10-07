/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://preview-api.optiecommerce2026.shop/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;