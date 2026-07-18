import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos are self-hosted in /public/images so the site never
    // depends on an external URL. To use your own photos, just replace the files
    // in /public/images (keep the same filename) — no code changes needed.
    // If you ever want to reference a remote image, add its host below.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
