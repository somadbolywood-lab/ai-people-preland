"use client";

import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  locale?: string;
  alternateLocale?: string;
  alternateUrl?: string;
}

export default function MetaTags({
  title,
  description,
  keywords = "AI models, virtual influencers, AI-generated content, digital marketing, AI-People",
  url,
  image = "https://ai-people.com/faq/AI-people%20Logo.png",
  type = "website",
  locale = "en",
  alternateLocale,
  alternateUrl
}: MetaTagsProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AI-People" />
      
      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale} />
      <meta property="og:locale" content={locale === 'ru' ? 'ru_RU' : 'en_US'} />
      
      {/* Alternate Language */}
      {alternateLocale && alternateUrl && (
        <link rel="alternate" hrefLang={alternateLocale} href={alternateUrl} />
      )}
      {locale && url && (
        <link rel="alternate" hrefLang={locale} href={url} />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content="AI-People" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="msapplication-TileColor" content="#8b5cf6" />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": url,
            "inLanguage": locale === 'ru' ? 'ru-RU' : 'en-US',
            "publisher": {
              "@type": "Organization",
              "name": "AI-People",
              "url": "https://ai-people.com",
              "logo": {
                "@type": "ImageObject",
                "url": image,
                "width": 512,
                "height": 512
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": locale === 'ru' ? 'Главная' : 'Home',
                  "item": locale === 'ru' ? 'https://ai-people.com/ru' : 'https://ai-people.com'
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": title,
                  "item": url
                }
              ]
            }
          })
        }}
      />
    </Head>
  );
}
