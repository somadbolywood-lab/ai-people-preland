import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-People: Выбор роли | Выберите свой путь в маркетплейсе AI',
  description: 'Присоединяйтесь к маркетплейсу AI-People как креатор или покупатель. Выберите свою роль и начните путешествие в первом в мире маркетплейсе AI-моделей.',
  keywords: 'выбор роли маркетплейса AI, регистрация креатора, регистрация покупателя, маркетплейс AI-моделей, виртуальные инфлюенсеры',
  robots: 'index, follow',
  openGraph: {
    title: 'AI-People: Выбор роли',
    description: 'Выберите свою роль в маркетплейсе AI - креатор или покупатель',
    type: 'website',
    url: 'https://ai-people.com/ru/auth/role',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-People: Выбор роли',
    description: 'Выберите свою роль в маркетплейсе AI - креатор или покупатель',
  },
}

export default function RoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
