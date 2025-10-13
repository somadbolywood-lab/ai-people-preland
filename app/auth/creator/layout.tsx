import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sell AI Content — Keep 75% Commission | AI-People',
  description: 'Register as a creator on AI-People marketplace. Sell your AI models, virtual influencers, and AI-generated content. Earn $5K-$25K monthly.',
  keywords: 'AI creator registration, sell AI models, monetize AI art, AI marketplace creator, virtual influencer creator',
  robots: 'index, follow',
  openGraph: {
    title: 'Sell AI Content — Keep 75% Commission | AI-People',
    description: 'Join as a creator and monetize your AI art and virtual influencers',
    type: 'website',
    url: 'https://ai-people.io/auth/creator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell AI Content — Keep 75% Commission | AI-People',
    description: 'Join as a creator and monetize your AI art and virtual influencers',
  },
}

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
