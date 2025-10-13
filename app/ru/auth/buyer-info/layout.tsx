import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Покупатель — доступ к гиперреалистичным AI‑моделям | AI-People',
  description: 'Доступ к премиум AI‑моделям и виртуальным инфлюенсерам для бизнеса. Готовые пакеты и кастомный контент.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

