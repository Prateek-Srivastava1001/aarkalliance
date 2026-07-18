import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images in /public/images are already compressed WebP, sized for the site.
    // Serve them as-is (no on-demand optimization) so they're fast and cache
    // forever on the CDN. To use your own photos, replace the files in
    // /public/images keeping the same names.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
