import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Креатор — монетизируйте свой AI‑арт | AI-People',
  description: 'Монетизируйте AI‑арт и развивайте бренд. 75% вознаграждение, безопасные выплаты и маркетинговая поддержка на первом курируемом AI‑маркетплейсе.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

