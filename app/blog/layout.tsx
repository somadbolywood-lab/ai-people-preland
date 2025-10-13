import Script from 'next/script';

export const metadata = {
  title: 'AI-People Blog — AI Models & Virtual Influencers',
  description: 'Expert insights on AI models marketplace, virtual influencer marketing, monetizing AI art, and latest trends in AI-generated content industry. Real data, proven strategies, and actionable tips.',
  keywords: 'AI models blog, virtual influencers insights, AI art monetization, AI marketplace trends, make money with AI art, sell AI content, AI creator success stories',
  alternates: {
    canonical: 'https://ai-people.io/blog',
  },
  openGraph: {
    title: 'AI-People Blog — AI Models & Virtual Influencers',
    description: 'Expert insights on AI models, virtual influencers, and monetizing AI-generated content.',
    url: 'https://ai-people.io/blog',
    type: 'website',
    images: [
      {
        url: '/assets/models/model-01.png',
        width: 1200,
        height: 630,
        alt: 'AI-People Blog - AI Models & Virtual Influencers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-People Blog — AI Models & Virtual Influencers',
    description: 'Expert insights on AI models marketplace and monetizing AI art.',
    images: ['/assets/models/model-01.png'],
  },
};

// Blog schema with all posts
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "AI-People Blog",
  "description": "Expert insights on AI models, virtual influencers, and monetizing AI-generated content",
  "url": "https://ai-people.io/blog",
  "publisher": {
    "@type": "Organization",
    "name": "AI-People",
    "url": "https://ai-people.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ai-people.io/faq/AI-people Logo.png",
      "width": 512,
      "height": 512
    }
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "AI-Generated Content Marketing 2025: Virtual Models Cut Costs 90%",
      "image": "https://ai-people.io/assets/models/model-01.png",
      "url": "https://ai-people.io/blog/1",
      "datePublished": "2025-09-01",
      "dateModified": "2025-10-07",
      "author": {
        "@type": "Organization",
        "name": "AI-People Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AI-People"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "How to Make Money with AI Art: $5K-$25K/Month Creator Guide 2025",
      "image": "https://ai-people.io/assets/models/model-02.png",
      "url": "https://ai-people.io/blog/2",
      "datePublished": "2025-09-15",
      "dateModified": "2025-10-07",
      "author": {
        "@type": "Organization",
        "name": "AI-People Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AI-People"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "Why Top Brands Are Switching to Virtual Influencers: Market Analysis 2025",
      "image": "https://ai-people.io/assets/models/model-03.png",
      "url": "https://ai-people.io/blog/3",
      "datePublished": "2025-09-28",
      "dateModified": "2025-10-07",
      "author": {
        "@type": "Organization",
        "name": "AI-People Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AI-People"
      }
    },
    {
      "@type": "BlogPosting",
      "headline": "AI Instagram Model Kion Signs Million-Dollar Brand Deals",
      "image": "https://ai-people.io/assets/models/model-04.png",
      "url": "https://ai-people.io/blog/4",
      "datePublished": "2025-10-06",
      "dateModified": "2025-10-07",
      "author": {
        "@type": "Organization",
        "name": "AI-People Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AI-People"
      }
    }
  ]
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
