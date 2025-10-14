import './globals.css';
import Script from 'next/script';
import ThemeInitializer from './components/ThemeInitializer';
import ErrorBoundary from './components/ErrorBoundary';
import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import HreflangLinks from './components/HreflangLinks';
import { LanguageProvider } from './contexts/LanguageContext';

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <HreflangLinks currentPath="/" locale="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
              "foundingDate": "2024",
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
        {/* Critical CSS - Inline for fastest rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `:root{--bg:#0b0b0c;--bg-primary:#0b0b0c;--bg-secondary:#111114;--bg-hover:#1a1a1f;--panel:#111114;--text:#f5f5f7;--text-primary:#f5f5f7;--text-secondary:#b5b7bd;--subtext:#b5b7bd;--muted:#1a1a1f;--accent:#8b5cf6;--accent-2:#ec4899;--danger:#f43f5e;--border:#232329;--shadow:0 10px 30px rgba(0,0,0,0.35)}.light{--bg:#ffffff;--bg-primary:#ffffff;--bg-secondary:#f7f7f8;--bg-hover:#efeff1;--panel:#f7f7f8;--text:#0a0a0b;--text-primary:#0a0a0b;--text-secondary:#52525b;--subtext:#52525b;--muted:#efeff1;--accent:#7c3aed;--accent-2:#db2777;--danger:#e11d48;--border:#e5e7eb;--shadow:0 10px 30px rgba(0,0,0,0.08)}*{box-sizing:border-box}html,body{height:100%}body{margin:0;padding-top:80px!important;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;min-height:100vh}a{color:inherit;text-decoration:none}.container{max-width:1200px;margin:0 auto;padding:12px;width:100%;min-width:320px}.topbar{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;gap:12px;padding:4px 12px;background:rgba(11,11,12,0.5);border-bottom:1px solid var(--border);min-height:80px;height:80px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}.light .topbar{background:rgba(255,255,255,0.5);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}.brand{display:flex;align-items:center;gap:10px;margin-right:auto}.logo-img{height:48px;width:auto;max-height:58px;max-width:150px;object-fit:contain}.actions{display:flex;gap:8px;align-items:center}.btn{border:none;padding:8px 16px;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;display:inline-flex;align-items:center;gap:6px;background:var(--panel);color:var(--text);min-height:42px}.btn:hover{background:var(--bg-hover);transform:scale(1.02)}.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:white}.gradient-text{background:linear-gradient(135deg,#8b5cf6 0%,#ec4899 50%,#f43f5e 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:800}.light .gradient-text{background:linear-gradient(135deg,#7c3aed 0%,#db2777 50%,#e11d48 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}@media (max-width:639px){body{padding-top:80px!important}.topbar{gap:6px;padding:4px 72px;min-height:72px!important;height:72px!important;background:rgba(11,11,12,0.5)}.container{padding:8px}.logo-img{height:84px;width:auto;max-width:231px;object-fit:contain}.btn{padding:6px 10px;font-size:12px;min-height:36px}.light .topbar{background:rgba(255,255,255,0.5)}}`
        }} />
      </head>
    <body suppressHydrationWarning>
      <ErrorBoundary>
        <LanguageProvider forceLanguage={typeof window !== 'undefined' && window.location.pathname.startsWith('/ru') ? 'ru' : undefined}>
          <ThemeInitializer />
          {children}
        </LanguageProvider>
      </ErrorBoundary>
      {/* Optimized modular script loading */}
      <Script src="/scripts/polyfills.js" strategy="beforeInteractive" />
      <Script src="/scripts/theme.js" strategy="beforeInteractive" />
      <Script src="/scripts/language.js" strategy="afterInteractive" />
      <Script src="/scripts/ui-components.js" strategy="afterInteractive" />
      <Script src="/scripts/main-init.js" strategy="afterInteractive" />
    </body>
    </html>
  );
}