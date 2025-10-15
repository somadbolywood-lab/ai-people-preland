"use client";

import Footer from "../../components/Footer";
import { useLanguage } from "../../hooks/useLanguage";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import HreflangLinks from "../../components/HreflangLinks";
import HeaderWithMenu from "../../components/HeaderWithMenu";

export default function TermsOfServicePage() {
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
        <title>Terms of Service — AI-PEOPLE.IO</title>
        <meta name="description" content="AI-PEOPLE.IO Terms of Service. Rules for creators and clients, eligibility, IP, conduct, membership, disclaimers and contacts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ai-people.io/legal/terms" />
        <link rel="alternate" href="https://ai-people.io/legal/terms" hrefLang="en" />
        <link rel="alternate" href="https://ai-people.io/ru/legal/terms" hrefLang="ru" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:title" content="Terms of Service — AI-PEOPLE.IO" />
        <meta property="og:description" content="Terms governing the use of AI-PEOPLE.IO marketplace." />
        <meta property="og:url" content="https://ai-people.io/legal/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ai-people.io/assets/models/model-02.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service — AI-PEOPLE.IO" />
        <meta name="twitter:description" content="Terms governing the use of AI-PEOPLE.IO marketplace." />
        <meta name="twitter:image" content="https://ai-people.io/assets/models/model-02.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service — AI-PEOPLE.IO",
              "description": "Terms governing the use of AI-PEOPLE.IO marketplace.",
              "url": "https://ai-people.io/legal/terms",
              "datePublished": "2025-10-01",
              "dateModified": "2025-10-14",
              "inLanguage": "en"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "AI-PEOPLE.IO Terms of Service",
              "url": "https://ai-people.io/legal/terms",
              "inLanguage": "en",
              "version": "2025-10",
              "publisher": {
                "@type": "Organization",
                "name": "AI-PEOPLE.IO",
                "url": "https://ai-people.io"
              },
              "isPartOf": {
                "@type": "WebSite",
                "name": "AI-PEOPLE.IO",
                "url": "https://ai-people.io"
              }
            })
          }}
        />
      </Head>
      <HreflangLinks currentPath="/legal/terms" locale="en" />
    <div className="container">
      <HeaderWithMenu homeHref="/" />

      <main className="legal-main">
        <div className="legal-container">
      <h1 className="unified-h1">
        <span className="gradient-text">Terms of Service</span>
      </h1>
          <p className="legal-subtitle">Effective Date: October 2025 • Location: New York, USA • Contact: support@ai-people.io</p>

          <div className="legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By visiting AI-PEOPLE.IO or creating an account, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree, you may not use our services.</p>
            </section>

            <section>
              <h2>2. Description of Services</h2>
              <p>AI-PEOPLE.IO is an AI model marketplace enabling Creators to upload, display, and sell AI-generated model content (images, videos, voice, etc.), and enabling Clients to purchase or request AI models for personal or commercial use. Access to certain features and AI model catalogs may require a membership plan. Registration is free; paid access will be introduced later with transparent pricing.</p>
            </section>

            <section>
              <h2>3. Eligibility</h2>
              <p>You must be at least 18 years old to use AI-PEOPLE.IO. By registering, you confirm that your information is accurate and that you are legally capable of entering into agreements.</p>
            </section>

            <section>
              <h2>4. User Accounts</h2>
              <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. We may suspend or terminate accounts that violate these Terms.</p>
            </section>

            <section>
              <h2>5. Intellectual Property</h2>
              <p>All AI models, visual materials, and textual content on AI-PEOPLE.IO are protected by copyright and intellectual property laws. You may not reproduce, modify, or distribute any content without permission. Creators retain ownership of their AI content but grant the Platform a limited license to display, promote, and distribute it within the marketplace.</p>
            </section>

            <section>
              <h2>6. Membership and Payments</h2>
              <p>Registration is free. Access to premium content and full model catalogs will be available via membership plans. When introduced, payment terms, pricing, and refund policies will be clearly stated.</p>
            </section>

            <section>
              <h2>7. User Conduct</h2>
              <p>You agree not to upload illegal or harmful content, impersonate others, engage in fraudulent activities, or violate any applicable laws or third‑party rights. Violation may result in suspension or permanent ban.</p>
            </section>

            <section>
              <h2>8. Disclaimer of Warranties</h2>
              <p>AI-PEOPLE.IO provides its services “as is” and “as available”. We do not guarantee uninterrupted service or error‑free operation. The Platform is not liable for user‑generated or AI‑generated content.</p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>AI-PEOPLE.IO shall not be held liable for any indirect, incidental, or consequential damages arising from your use of the Platform.</p>
            </section>

            <section>
              <h2>10. Changes to Terms</h2>
              <p>We may update these Terms from time to time. The latest version will always be available on this page, with the date of revision noted.</p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>For inquiries regarding these Terms, contact: support@ai-people.io<br/>New York, USA</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
