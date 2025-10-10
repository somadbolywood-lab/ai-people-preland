import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as Creator | AI-People Marketplace',
  description: 'Monetize your AI art and build your brand. Earn 75% commission, secure payments, and full marketing support on the world\'s first curated AI marketplace.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

