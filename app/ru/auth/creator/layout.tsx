import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-People: Регистрация креатора | Монетизируйте ваше AI-искусство',
  description: 'Зарегистрируйтесь как креатор на маркетплейсе AI-People. Продавайте ваши AI-модели, виртуальных инфлюенсеров и AI-контент. Зарабатывайте $5K-$25K в месяц.',
  keywords: 'регистрация AI-креатора, продать AI-модели, монетизировать AI-искусство, креатор маркетплейса AI, креатор виртуальных инфлюенсеров',
  robots: 'index, follow',
  openGraph: {
    title: 'AI-People: Регистрация креатора',
    description: 'Присоединяйтесь как креатор и монетизируйте ваше AI-искусство и виртуальных инфлюенсеров',
    type: 'website',
    url: 'https://ai-people.com/ru/auth/creator',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-People: Регистрация креатора',
    description: 'Присоединяйтесь как креатор и монетизируйте ваше AI-искусство и виртуальных инфлюенсеров',
  },
}

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
