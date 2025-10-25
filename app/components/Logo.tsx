import React from 'react';

interface LogoProps {
  homeHref: string;
}

export default function Logo({ homeHref }: LogoProps) {
  return (
    <div className="brand">
      <a href={homeHref} className="brand-link">
        <picture>
          <source 
            srcSet="/faq/AI-people Logo.webp 1x, /faq/AI-people Logo@2x.webp 2x" 
            type="image/webp" 
          />
          <img 
            src="/faq/AI-people Logo.png" 
            srcSet="/faq/AI-people Logo.png 1x, /faq/AI-people Logo@2x.png 2x"
            alt="AI-People" 
            className="logo-img"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </a>
    </div>
  );
}
