"use client";

import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol style={{
          display: 'flex',
          listStyle: 'none',
          padding: '0.5rem 0',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
        }}>
          {items.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 && <span style={{ margin: '0 0.5rem' }}>/</span>}
              {index === items.length - 1 ? (
                <span style={{ color: 'var(--accent)' }}>{item.name}</span>
              ) : (
                <a 
                  href={item.url}
                  style={{ 
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}


