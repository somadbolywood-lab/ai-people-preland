/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic site - no static export needed
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    qualities: [25, 50, 75, 100], // Configure quality values
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai-people.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // Experimental features to fix OpenTelemetry issues
  experimental: {
    // instrumentationHook removed - no longer needed in Next.js 15
  },
  
  // Webpack configuration to handle OpenTelemetry
  webpack: (config, { isServer }) => {
    // Ignore OpenTelemetry modules that cause issues
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@opentelemetry/auto-instrumentations-node': 'commonjs @opentelemetry/auto-instrumentations-node',
        '@opentelemetry/sdk-node': 'commonjs @opentelemetry/sdk-node',
        '@opentelemetry/api': 'commonjs @opentelemetry/api',
      });
    }
    
    // Ignore problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  
  // Note: redirects and headers don't work with output: 'export'
  // These will be handled by Cloudflare Pages configuration
  
  // Environment-specific optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn', 'log'], // Keep console.log for debugging
      },
    },
  }),
};

module.exports = nextConfig;
