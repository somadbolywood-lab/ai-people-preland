import './globals.css';
import Script from 'next/script';
import ErrorBoundary from './components/ErrorBoundary';
import Image from 'next/image';
// ThemeToggle removed - only dark theme now
import LanguageSelector from './components/LanguageSelector';
import HreflangLinks from './components/HreflangLinks';
import { ThemeProvider } from './components/ThemeProvider';
// LanguageProvider removed - using useLanguage hook in components instead

export const metadata = {
  title: "World's First Curated AI Models Marketplace | AI-People",
  description: 'Первый в мире маркетплейс AI-моделей, запуск 1 ноября 2025. Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров, AI-контент. Креаторы зарабатывают $5К-$25К/месяц. The world\'s first AI models marketplace launching November 1, 2025.',
  keywords: 'маркетплейс AI-моделей, виртуальные инфлюенсеры, AI-искусство, купить AI модели, продать AI модели, гиперреалистичные AI модели, AI контент маркетинг, платформа виртуальных инфлюенсеров 2025, заработок на AI, AI models marketplace, virtual influencers, AI art, hyperrealistic AI models, AI-generated content, AI creator platform, virtual influencer marketing, AI model licensing, buy AI models, sell AI models, AI marketplace 2025',
  authors: [{ name: 'AI-People Team' }],
  creator: 'AI-People',
  publisher: 'AI-People',
  robots: 'index, follow',
  metadataBase: new URL('https://ai-people.io'),
  alternates: {
    canonical: 'https://ai-people.io',
    languages: {
      'en-US': 'https://ai-people.io',
      'ru-RU': 'https://ai-people.io/ru',
      'x-default': 'https://ai-people.io',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
    url: 'https://ai-people.io',
    title: "World's First Curated AI Models Marketplace | AI-People",
    description: 'Первый маркетплейс AI-моделей в мире. Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров. Креаторы зарабатывают $5К-$25К/месяц. Запуск 01.12.2025.',
    siteName: 'AI-People',
    images: [
      {
        url: '/faq/AI-people Logo.png',
        width: 1200,
        height: 630,
        alt: 'AI-People Marketplace - Hyperrealistic AI Models',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "World's First Curated AI Models Marketplace | AI-People",
    description: 'Первый маркетплейс AI-моделей. Креаторы зарабатывают $5К-$25К/месяц. Запуск 01.12.2025.',
    images: ['/faq/AI-people Logo.png'],
  },
  icons: {
    icon: [
      { url: '/faq/Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/faq/Favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/faq/Favicon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'ЗДЕСЬ_БУДЕТ_КОД_ОТ_ЯНДЕКС_ВЕБМАСТЕР',
  },
};

export const viewport = {
  themeColor: '#8b5cf6',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta httpEquiv="Pragma" content="no-cache" />
            <meta httpEquiv="Expires" content="0" />
        
            {/* Critical CSS - prevents FOUC */}
            <style dangerouslySetInnerHTML={{
              __html: `
                /* Force dark theme by default to prevent white flash */
                html, body {
                  background-color: #0b0b0c !important;
                  color: #f5f5f7 !important;
                  transition: none !important;
                }
                
                /* Force all elements to dark theme immediately */
                * {
                  transition: none !important;
                  animation: none !important;
                }
                
                .topbar {
                  background: rgba(17, 17, 20, 0.5) !important;
                  backdrop-filter: blur(12px) !important;
                  -webkit-backdrop-filter: blur(12px) !important;
                  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
                }
                
                .topbar * {
                  color: #f5f5f7 !important;
                }
                
                .theme-toggle, .language-btn, .feedback-btn, .hamburger {
                  background: #111114 !important;
                  border: 1px solid #232329 !important;
                  color: #f5f5f7 !important;
                }
                
                .brand {
                  color: #f5f5f7 !important;
                }
                
                .btn {
                  background: #111114 !important;
                  color: #f5f5f7 !important;
                  border: 1px solid #232329 !important;
                }
                
                .btn.primary {
                  background: linear-gradient(135deg, #8b5cf6, #ec4899) !important;
                  color: white !important;
                  border: none !important;
                }
              `
            }} />
            
            {/* Dark theme only - no script needed */}
        
        <HreflangLinks currentPath="/" locale="en" />
        {/* Resource Hints - Critical Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ai-people.io" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/scripts/main-init.js" as="script" />
        <link rel="preload" href="/faq/AI-people Logo.png" as="image" />
        <link rel="preload" href="/assets/models/model-01.png" as="image" />
        <link rel="preload" href="/assets/models/model-02.png" as="image" />
        <link rel="preload" href="/assets/models/model-03.png" as="image" />
        
            {/* Optimized Font Loading */}
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />
            <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />
        
        {/* Prefetch Next Pages */}
        <link rel="prefetch" href="/blog" />
        <link rel="prefetch" href="/faq" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/auth/role" />
        
            {/* Theme initialization now handled by ThemeProvider component */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://ai-people.io/#organization",
              "name": "AI-People",
              "url": "https://ai-people.io",
              "logo": "https://ai-people.io/faq/AI-people Logo.png",
              "description": "Leading AI models marketplace featuring hyperrealistic virtual influencers, AI-generated content, and premium AI art",
              "foundingDate": "2025",
              "sameAs": [
                "https://www.instagram.com/ai_people_io",
                "https://www.tiktok.com/@ai_people_io",
                "https://x.com/ai_people_io",
                "https://www.reddit.com/u/AI-PEOPLE",
                "https://pin.it/12q1ESjB2",
                "https://youtube.com/@ai_people_io"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "feedback@ai-people.io",
                "availableLanguage": ["en", "ru"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "offers": {
                "@type": "Offer",
                "category": "AI Models Marketplace",
                "priceRange": "$49-$500+",
                "availability": "https://schema.org/PreOrder",
                "availabilityStarts": "2025-11-01T00:00:00Z",
                "validFrom": "2025-10-07"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://ai-people.io/#website",
              "name": "AI-People",
              "url": "https://ai-people.io",
              "publisher": { "@id": "https://ai-people.io/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ai-people.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "AI-People Marketplace Official Launch",
              "description": "World's first curated marketplace for hyperrealistic AI models and virtual influencers goes live",
              "startDate": "2025-11-01T00:00:00-05:00",
              "endDate": "2025-11-01T23:59:59-05:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://ai-people.io"
              },
              "image": "https://ai-people.io/faq/AI-people Logo.png",
              "organizer": {
                "@type": "Organization",
                "name": "AI-People",
                "url": "https://ai-people.io"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://ai-people.io/auth/role",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder",
                "validFrom": "2025-10-07"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OnlineMarketplace",
              "name": "AI-People Marketplace",
              "description": "World's first curated marketplace for hyperrealistic AI models and virtual influencers",
              "url": "https://ai-people.io",
              "provider": { "@id": "https://ai-people.io/#organization" },
              "hasStore": [
                {
                  "@type": "Store",
                  "name": "AI Models Store",
                  "description": "Premium AI models and virtual influencers"
                },
                {
                  "@type": "Store", 
                  "name": "Creator Tools Store",
                  "description": "AI creation tools and resources"
                }
              ],
              "category": "AI Technology Marketplace",
              "offers": {
                "@type": "AggregateOffer",
                "priceRange": "$49-$500+",
                "availability": "https://schema.org/PreOrder",
                "validFrom": "2025-11-01"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI-People Platform",
              "description": "AI models marketplace and virtual influencer platform",
              "url": "https://ai-people.io",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              },
              "publisher": { "@id": "https://ai-people.io/#organization" },
              "datePublished": "2025-10-01",
              "version": "1.0"
            })
          }}
        />
        {/* Critical CSS - Optimized inline for fastest rendering */}
      </head>
    <body suppressHydrationWarning>
      {/* Global SVG Gradients for Share Icons */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <linearGradient id="shareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="shareGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      
      <ThemeProvider>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </ThemeProvider>
      {/* Optimized modular script loading - theme.js removed (handled by React) */}
      <Script src="/scripts/polyfills.js" strategy="beforeInteractive" />
      <Script src="/scripts/sw-register.js" strategy="afterInteractive" />
      <Script src="/scripts/async-loader.js" strategy="afterInteractive" />
      <Script src="/scripts/critical-path-optimization.js" strategy="afterInteractive" />
      <Script src="/scripts/web-vitals.js" strategy="afterInteractive" />
      <Script src="/scripts/performance-api.js" strategy="afterInteractive" />
      <Script src="/scripts/yandex-metrika.js" strategy="afterInteractive" />
      <Script src="/scripts/performance.js" strategy="afterInteractive" />
      <Script src="/scripts/ui-components.js" strategy="afterInteractive" />
      <Script src="/scripts/main-init.js" strategy="afterInteractive" />
    </body>
    </html>
  );
}