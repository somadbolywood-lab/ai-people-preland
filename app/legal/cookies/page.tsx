"use client";

import Footer from "../../components/Footer";
import { useLanguage } from "../../hooks/useLanguage";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import HreflangLinks from "../../components/HreflangLinks";
import HeaderWithMenu from "../../components/HeaderWithMenu";

export default function CookiePolicyPage() {
  useLanguage({ forceLanguage: 'en' });

  return (
    <>
      <Head>
        <title>Cookie Policy — AI-PEOPLE.IO</title>
        <meta name="description" content="Cookie Policy for AI-PEOPLE.IO: what cookies are, types we use (essential, analytics, functional, marketing), how to manage them, and contacts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/cookies" />
        <link rel="alternate" href="https://ai-people.io/legal/cookies" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/cookies" hrefLang="ru" />
        <meta property="og:title" content="Cookie Policy — AI-PEOPLE.IO" />
        <meta property="og:description" content="How AI-PEOPLE.IO uses cookies and how you can manage them." />
        <meta property="og:url" content="https://ai-people.io/legal/cookies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-03.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="Cookie types we use and management options." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-03.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookie Policy — AI-PEOPLE.IO",
              "description": "Cookie types and management for AI-PEOPLE.IO.",
              "url": "https://ai-people.io/legal/cookies",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-14",
              "inLanguage": "en"
            })
          }}
        />
      </Head>
      <HreflangLinks currentPath="/legal/cookies" locale="en" />
    <div className="container">
      <HeaderWithMenu homeHref="/" />

      <main className="legal-main">
        <div className="legal-container">
      <h1 className="unified-h1">
        <span className="gradient-text">Cookie Policy</span>
      </h1>
          <p className="legal-subtitle">Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io</p>

          <div className="legal-content">
            <section>
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember preferences, and improve your experience.</p>
            </section>

            <section>
              <h2>2. Types of Cookies We Use</h2>
              <h3>a) Essential Cookies</h3>
              <p>Necessary for core functionality: login sessions, security, language settings.</p>
              <h3>b) Analytics Cookies</h3>
              <p>Used to analyze behavior and traffic to improve usability and performance.</p>
              <h3>c) Functional Cookies</h3>
              <p>Enable personalization such as remembering preferences and content filters.</p>
              <h3>d) Marketing Cookies</h3>
              <p>Deliver relevant content and measure marketing effectiveness.</p>
            </section>

            <section>
              <h2>3. How We Use Cookies</h2>
              <ul>
                <li>Provide secure and seamless access to AI-PEOPLE.IO</li>
                <li>Remember session preferences</li>
                <li>Analyze performance and optimize content</li>
                <li>Support advertising and membership marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2>4. Managing Cookies</h2>
              <p>You can manage or disable cookies via your browser settings. Disabling some cookies may affect website functionality.</p>
              <ul>
                <li>Block third‑party cookies</li>
                <li>Delete existing cookies</li>
                <li>Notify when cookies are being set</li>
              </ul>
            </section>

            <section>
              <h2>5. Third-Party Cookies</h2>
              <ul>
                <li>Google Analytics — traffic analytics</li>
                <li>Meta / Twitter pixels — marketing performance</li>
              </ul>
              <p>These services may collect data under their own privacy policies.</p>
            </section>

            <section>
              <h2>6. Updates to This Policy</h2>
              <p>We may update this Cookie Policy periodically. Changes take effect once posted here. The “Effective Date” above indicates the last revision.</p>
            </section>

            <section>
              <h2>7. Contact</h2>
              <p>If you have questions about this Cookie Policy, contact: support@ai-people.io<br/>New York, USA</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
