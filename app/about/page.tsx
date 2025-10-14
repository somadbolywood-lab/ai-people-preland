"use client";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import HeaderWithMenu from "../components/HeaderWithMenu";

export default function Page() {

  return (
    <div className="container home-page">
      <Head>
        <title>About AI-People | Curated AI Models & Virtual Influencers</title>
        <meta name="description" content="About AI-People — the first curated marketplace for hyperrealistic AI models and virtual influencers. Learn our mission, what we build, and how we empower creators and brands." />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <link rel="canonical" href="https://ai-people.io/about" />
        <meta property="og:title" content="About AI-People" />
        <meta property="og:description" content="The first curated marketplace for hyperrealistic AI models and virtual influencers." />
        <meta property="og:url" content="https://ai-people.io/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About AI-People" />
        <meta name="twitter:description" content="The first curated marketplace for hyperrealistic AI models and virtual influencers." />
      </Head>
      <HeaderWithMenu homeHref="/" />

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="About" data-lang-ru="О нас">About</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Learn more about AI-People" data-lang-ru="Узнайте больше об AI-People">Learn more about AI-People</h2>
          <h3 className="hero-description" data-lang-en="This page is intentionally left minimal and will be filled later." data-lang-ru="Страница пока пустая и будет заполнена позже.">This page is intentionally left minimal and will be filled later.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          {/* Empty content by request */}
        </section>
      </main>

      {/* Schema.org - About (EN) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About AI-People",
            "url": "https://ai-people.io/about",
            "inLanguage": ["en", "ru"],
            "isPartOf": {
              "@type": "WebSite",
              "name": "AI-People",
              "url": "https://ai-people.io"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AI-People"
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}


