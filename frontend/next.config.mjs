/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure absolute imports work correctly
    typedRoutes: false,
  },
  // Ensure proper module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
    }
    return config
  },
}

export default nextConfig;
