/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic site - no static export needed
  trailingSlash: true,
  
  // Image optimization
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
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // HTTP/2 Server Push Headers for Critical Resources
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Critical JavaScript
          {
            key: 'Link', 
            value: '</scripts/theme.js>; rel=preload; as=script'
          },
          {
            key: 'Link',
            value: '</scripts/main-init.js>; rel=preload; as=script'
          },
          // Critical Images
          {
            key: 'Link',
            value: '</faq/AI-people Logo.png>; rel=preload; as=image'
          },
          {
            key: 'Link',
            value: '</assets/models/model-01.png>; rel=preload; as=image'
          },
          {
            key: 'Link',
            value: '</assets/models/model-02.png>; rel=preload; as=image'
          },
          {
            key: 'Link',
            value: '</assets/models/model-03.png>; rel=preload; as=image'
          },
          // Fonts
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap>; rel=preload; as=style'
          }
        ]
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Link',
            value: '</blog>; rel=prefetch'
          }
        ]
      },
      {
        source: '/faq',
        headers: [
          {
            key: 'Link',
            value: '</faq>; rel=prefetch'
          }
        ]
      },
      {
        source: '/auth/:path*',
        headers: [
          {
            key: 'Link',
            value: '</auth/role>; rel=prefetch'
          }
        ]
      }
    ];
  },
  
  // Experimental features to fix OpenTelemetry issues
  experimental: {
    // instrumentationHook removed - no longer needed in Next.js 15
  },
  
  // Webpack configuration for Resource Bundling and OpenTelemetry
  webpack: (config, { isServer, dev }) => {
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
    
    // Resource Bundling Optimization
    if (!isServer && !dev) {
      // Split chunks optimization
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            // Vendor libraries (React, Next.js, etc.)
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              enforce: true,
            },
            // Common chunks shared across pages
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
            },
            // Performance monitoring scripts
            performance: {
              test: /[\\/]scripts[\\/](web-vitals|performance|yandex-metrika)\.js/,
              name: 'performance',
              chunks: 'all',
              priority: 8,
            },
            // UI components
            ui: {
              test: /[\\/]scripts[\\/](ui-components|theme|language)\.js/,
              name: 'ui',
              chunks: 'all',
              priority: 7,
            },
            // Service Worker and polyfills
            core: {
              test: /[\\/]scripts[\\/](sw-register|polyfills|main-init)\.js/,
              name: 'core',
              chunks: 'all',
              priority: 9,
            },
          },
        },
        // Tree shaking optimization
        usedExports: true,
        sideEffects: false,
      };
      
      // Module concatenation for better performance
      config.optimization.concatenateModules = true;
      
      // Minimize CSS
      config.optimization.minimizer = config.optimization.minimizer || [];
      config.optimization.minimizer.push(
        new (require('css-minimizer-webpack-plugin'))({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                colormin: true,
                minifySelectors: true,
              },
            ],
          },
        })
      );
    }
    
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