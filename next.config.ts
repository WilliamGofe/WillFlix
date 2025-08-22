import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['image.tmdb.org', 'occ-0-8407-90.1.nflxso.net', 'static.wikia.nocookie.net'],
  },
};

export default nextConfig;

