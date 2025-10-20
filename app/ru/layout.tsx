import Script from 'next/script';
import '../globals.css';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';
import HreflangLinks from '../components/HreflangLinks';
// LanguageProvider removed - using useLanguage hook in components instead

export const metadata = {
  title: 'Первый в мире курируемый маркетплейс AI-моделей | AI-People',
  description: 'Первый в мире курируемый маркетплейс для премиум AI-контента. Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров, AI-арт и AI-модели. Присоединяйтесь к 50,000+ креаторам и брендам, революционизирующим цифровой маркетинг. Запуск 01.12.2025.',
  keywords: 'маркетплейс AI-моделей, виртуальные инфлюенсеры, AI-арт, гиперреалистичные AI модели, AI-контент, платформа AI креаторов, маркетинг виртуальных инфлюенсеров, лицензирование AI моделей, купить AI модели, продать AI модели, AI маркетплейс 2025, платформа виртуальных моделей, создание AI контента, гиперреалистичный AI, маркетплейс AI искусства, маркетплейс цифровых инфлюенсеров',
  authors: [{ name: 'AI-People Team' }],
  creator: 'AI-People',
  publisher: 'AI-People',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ai-people.io/ru',
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
    url: 'https://ai-people.io/ru',
    title: 'Первый в мире курируемый маркетплейс AI-моделей | AI-People',
    description: 'Ведущий маркетплейс AI-моделей с гиперреалистичными виртуальными инфлюенсерами и премиум AI-артом. Присоединяйтесь к креаторам, зарабатывающим $5К-$25К/месяц.',
    siteName: 'AI-People',
    images: [
      {
        url: '/faq/AI-people Logo.png',
        width: 1200,
        height: 630,
        alt: 'AI-People Маркетплейс - Гиперреалистичные AI-модели',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Первый в мире курируемый маркетплейс AI-моделей | AI-People',
    description: 'Ведущий маркетплейс AI-моделей с гиперреалистичными виртуальными инфлюенсерами и премиум AI-артом.',
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

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `body{margin:0;padding-top:80px!important;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;min-height:100vh}@media (max-width:639px){body{padding-top:80px!important}}`
      }} />
      {/* Organization JSON-LD (RU) */}
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
            "description": "Ведущий курируемый маркетплейс AI-моделей с гиперреалистичными виртуальными инфлюенсерами и премиум AI-артом",
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
              "availableLanguage": ["ru", "en"]
            },
            "address": {"@type": "PostalAddress", "addressCountry": "RU"}
          })
        }}
      />
      {/* WebSite JSON-LD (RU) */}
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
      <HreflangLinks currentPath="/ru" locale="ru" />
      {children}
    </>
  );
}
