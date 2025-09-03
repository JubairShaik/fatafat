import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Turbopack specific optimizations for Next.js 15+
  experimental: {
    // Turbopack is stable in Next.js 15
    turbo: {
      // Skip type checking in turbopack for faster builds
      resolveAlias: {},
    },
  },
  
  // Skip source map generation for faster builds
  productionBrowserSourceMaps: false,
  
  // Disable powered by header
  poweredByHeader: false,
  
  // Webpack config for additional optimizations
  webpack: (config, { dev, isServer }) => {
    // Skip warnings and reduce output verbosity
    if (!dev) {
      config.stats = 'errors-only';
    }
    
    return config;
  },
};

export default nextConfig;