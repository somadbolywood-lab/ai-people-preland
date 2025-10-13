import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Покупка премиум AI-моделей для ваших кампаний | AI-People',
  description: 'Зарегистрируйтесь как покупатель на маркетплейсе AI-People. Получите доступ к премиум AI-моделям, виртуальным инфлюенсерам и гиперреалистичному AI-контенту для ваших маркетинговых кампаний.',
  keywords: 'покупатель AI-моделей, покупатель виртуальных инфлюенсеров, покупатель AI-контента, регистрация покупателя маркетплейса AI',
  robots: 'index, follow',
  openGraph: {
    title: 'Покупка премиум AI-моделей для ваших кампаний | AI-People',
    description: 'Присоединяйтесь как покупатель и получите доступ к премиум AI-моделям и виртуальным инфлюенсерам',
    type: 'website',
    url: 'https://ai-people.io/ru/auth/buyer',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Покупка премиум AI-моделей для ваших кампаний | AI-People',
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
