import Script from 'next/script';
import '../globals.css';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';

export const metadata = {
  title: 'AI-People: Маркетплейс AI-моделей | Гиперреалистичные виртуальные инфлюенсеры и AI-арт 2025',
  description: 'Первый в мире курируемый маркетплейс для премиум AI-контента. Покупайте и продавайте гиперреалистичных виртуальных инфлюенсеров, AI-арт и AI-модели. Присоединяйтесь к 50,000+ креаторам и брендам, революционизирующим цифровой маркетинг. Запуск 01.11.2025.',
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
    title: 'AI-People: Маркетплейс AI-моделей | Виртуальные инфлюенсеры и AI-арт',
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
    title: 'AI-People: Маркетплейс AI-моделей',
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
      {children}
    </>
  );
}
