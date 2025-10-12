"use client";

interface HreflangLinksProps {
  currentPath: string;
  locale?: string;
}

export default function HreflangLinks({ currentPath, locale = 'en' }: HreflangLinksProps) {
  const baseUrl = 'https://ai-people.io';
  
  // Remove locale prefix from path for canonical URL
  const cleanPath = currentPath.replace(/^\/ru/, '');
  const canonicalPath = cleanPath || '/';
  
  // Generate alternate URLs
  const enUrl = `${baseUrl}${canonicalPath}`;
  const ruUrl = `${baseUrl}/ru${canonicalPath}`;
  
  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={enUrl} />
      
      {/* Hreflang links */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ru" href={ruUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
}
