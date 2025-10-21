"use client";

import Script from "next/script";

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-People marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-People is the world's first curated marketplace for hyperrealistic AI models and virtual influencers. We connect AI creators with brands and businesses, revolutionizing digital marketing through artificial intelligence."
        }
      },
      {
        "@type": "Question", 
        "name": "How much can creators earn on AI-People?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Creators can earn $5,000-$25,000 per month by selling AI models and virtual influencer content on our platform. We provide secure payouts including cryptocurrency options."
        }
      },
      {
        "@type": "Question",
        "name": "What types of AI models are available?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We offer hyperrealistic AI models, virtual influencers, AI-generated photos and videos, perfect for marketing campaigns, social media, e-commerce, and fan platforms."
        }
      },
      {
        "@type": "Question",
        "name": "When does AI-People launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-People officially launches on November 1, 2025. Early subscribers get exclusive privileges and early access to the platform."
        }
      },
      {
        "@type": "Question",
        "name": "Is commercial licensing included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, full commercial licensing is included with every purchase. You can use AI models for marketing, advertising, and commercial purposes without additional fees."
        }
      },
      {
        "@type": "Question",
        "name": "What languages does AI-People support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-People supports English and Russian languages, with full localization for both creators and buyers worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How do I become a creator on AI-People?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply register as a creator, upload your AI models, set your prices, and start earning. We handle marketing, customer support, and secure payments."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods are accepted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept major credit cards, PayPal, and cryptocurrency payments. Creators receive secure and fast payouts through multiple payment options."
        }
      }
    ]
  };

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
}
