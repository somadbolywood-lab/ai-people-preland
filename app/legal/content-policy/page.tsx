"use client";

import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import Image from "next/image";
import Head from "next/head";
import HreflangLinks from "../../components/HreflangLinks";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import { useLanguage } from "../../hooks/useLanguage";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ContentPolicyPage() {
  useHamburgerMenu();
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (currentLanguage === 'ru' && !pathname.startsWith('/ru')) {
      router.push(`/ru${pathname}`);
    } else if (currentLanguage === 'en' && pathname.startsWith('/ru')) {
      router.push(pathname.substring(3) || '/');
    }
  }, [currentLanguage, pathname, router]);
  return (
    <>
      <Head>
        <title>Content & 18+ Policy — AI-PEOPLE.IO</title>
        <meta name="description" content="Standards for content on AI-PEOPLE.IO, including AI-generated materials and 18+ guidelines. Effective Oct 2025." />
        <link rel="canonical" href="https://ai-people.io/legal/content-policy" />
        <link rel="alternate" href="https://ai-people.io/legal/content-policy" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/content-policy" hrefLang="ru" />
        <meta property="og:title" content="Content & 18+ Policy — AI-PEOPLE.IO" />
        <meta property="og:description" content="Content standards, AI-generated labeling, moderation and age-restricted access." />
        <meta property="og:url" content="https://ai-people.io/legal/content-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-04.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content & 18+ Policy — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="Content standards, AI-generated labeling, moderation and age-restricted access." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-04.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Content & 18+ Policy — AI-PEOPLE.IO",
              "url": "https://ai-people.io/legal/content-policy",
              "inLanguage": "en",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-14"
            })
          }}
        />
      </Head>
      <HreflangLinks currentPath="/legal/content-policy" locale="en" />

    <div className="container">
        <HeaderWithMenu homeHref="/" />

        <main className="legal-main">
          <div className="legal-container">
            <h1 className="unified-h1"><span className="gradient-text">Content & 18+ Policy</span></h1>
            <p className="legal-subtitle">Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io</p>

            <div className="legal-content">
              <section>
                <h2>1. Purpose of This Policy</h2>
                <p>This Policy explains the standards for all content on AI-PEOPLE.IO to ensure ethical, lawful, and respectful use of AI-generated and user-submitted materials.</p>
              </section>

              <section>
                <h2>2. General Content Guidelines</h2>
                <ul>
                  <li>Comply with applicable US and international laws.</li>
                  <li>Respect intellectual property rights.</li>
                  <li>No violence, hate, discrimination, or harassment.</li>
                  <li>No deepfakes/impersonation of real individuals unless clearly labeled as AI-generated.</li>
                  <li>Real-person content requires explicit consent.</li>
                </ul>
              </section>

              <section>
                <h2>3. AI-Generated Content</h2>
                <ul>
                  <li>Label as AI-generated, virtual, or synthetic.</li>
                  <li>Avoid misleading or harmful content.</li>
                  <li>Respect ethical standards and community values.</li>
                </ul>
              </section>

              <section>
                <h2>4. Sensitive and 18+ Content</h2>
                <ul>
                  <li>No explicit adult/pornographic content on the main site.</li>
                  <li>Any 18+ section will be age‑gated and require user consent.</li>
                  <li>Never include or resemble real individuals without consent.</li>
                  <li>Keep AI‑generated 18+ visuals within artistic/fictional context.</li>
                </ul>
                <p>Goal: balance creative freedom with ethical responsibility and legal compliance.</p>
              </section>

              <section>
                <h2>5. Intellectual Property Rights</h2>
                <p>Creators retain IP to their content while granting AI‑PEOPLE.IO a limited, non‑exclusive license to display, promote, and distribute within the platform.</p>
              </section>

              <section>
                <h2>6. Reporting and Moderation</h2>
                <p>We may remove violating content, suspend repeat offenders, and report unlawful behavior when required.</p>
                <p>Report content: report@ai-people.io</p>
              </section>

              <section>
                <h2>7. Age Restriction and Access Control</h2>
                <p>Adult sections, if any, will be clearly labeled, accessible only to verified 18+ users, and separated from general browsing areas.</p>
              </section>

              <section>
                <h2>8. Updates to This Policy</h2>
                <p>We may revise this Policy periodically. Changes become effective once published on this page.</p>
              </section>

              <section>
                <h2>9. Contact</h2>
                <p>Questions about content rules or age restrictions: support@ai-people.io<br/>New York, USA</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


