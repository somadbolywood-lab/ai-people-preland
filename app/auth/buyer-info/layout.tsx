import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as Buyer | AI-People Marketplace',
  description: 'Access premium AI models and hyperrealistic virtual influencers for your business. Get ready-made packages or order custom content.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


