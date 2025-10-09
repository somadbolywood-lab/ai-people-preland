import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-People: Регистрация покупателя | Присоединяйтесь к маркетплейсу AI-моделей',
  description: 'Зарегистрируйтесь как покупатель на маркетплейсе AI-People. Получите доступ к премиум AI-моделям, виртуальным инфлюенсерам и гиперреалистичному AI-контенту для ваших маркетинговых кампаний.',
  keywords: 'покупатель AI-моделей, покупатель виртуальных инфлюенсеров, покупатель AI-контента, регистрация покупателя маркетплейса AI',
  robots: 'index, follow',
  openGraph: {
    title: 'AI-People: Регистрация покупателя',
    description: 'Присоединяйтесь как покупатель и получите доступ к премиум AI-моделям и виртуальным инфлюенсерам',
    type: 'website',
    url: 'https://ai-people.com/ru/auth/buyer',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-People: Регистрация покупателя',
    description: 'Присоединяйтесь как покупатель и получите доступ к премиум AI-моделям и виртуальным инфлюенсерам',
  },
}

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
