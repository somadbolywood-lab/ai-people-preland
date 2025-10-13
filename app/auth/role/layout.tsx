import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choose Your Role — Buyer or Creator | AI-People',
  description: 'Join AI-People marketplace as a creator or buyer. Choose your role and start your journey in the world\'s first AI models marketplace.',
  keywords: 'AI marketplace role selection, creator registration, buyer registration, AI models marketplace, virtual influencers',
  robots: 'index, follow',
  openGraph: {
    title: 'Choose Your Role — Buyer or Creator | AI-People',
    description: 'Choose your role in the AI marketplace - creator or buyer',
    type: 'website',
    url: 'https://ai-people.io/auth/role',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choose Your Role — Buyer or Creator | AI-People',
    description: 'Choose your role in the AI marketplace - creator or buyer',
  },
}

export default function RoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
