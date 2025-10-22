/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic site - no static export needed
  trailingSlash: true,
  
  // Image optimization with cache busting
  images: {
    unoptimized: false, // Enable optimization for Vercel
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
    minimumCacheTTL: 0, // Disable aggressive caching for development
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Headers are handled by vercel.json to avoid conflicts
  
  // Experimental features to fix OpenTelemetry issues
  experimental: {
    // instrumentationHook removed - no longer needed in Next.js 15
  },
  
  // Simplified webpack configuration for Vercel compatibility
  webpack: (config, { isServer }) => {
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
  
  // Bundle Analyzer Integration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../bundle-analysis.html',
            generateStatsFile: true,
            statsFilename: '../bundle-stats.json',
            logLevel: 'info'
          })
        );
      }
      return config;
    }
  }),

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