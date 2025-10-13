import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Premium AI Models for Your Campaigns | AI-People',
  description: 'Register as a buyer on AI-People marketplace. Access premium AI models, virtual influencers, and hyperrealistic AI-generated content for your marketing campaigns.',
  keywords: 'AI models buyer, virtual influencer buyer, AI content buyer, AI marketplace buyer registration',
  robots: 'index, follow',
  openGraph: {
    title: 'Buy Premium AI Models for Your Campaigns | AI-People',
    description: 'Join as a buyer and access premium AI models and virtual influencers',
    type: 'website',
    url: 'https://ai-people.io/auth/buyer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Premium AI Models for Your Campaigns | AI-People',
    description: 'Join as a buyer and access premium AI models and virtual influencers',
  },
}

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
