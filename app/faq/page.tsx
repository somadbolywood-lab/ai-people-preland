"use client";
import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer";
import Head from "next/head";
import HeaderWithMenu from "../components/HeaderWithMenu";

export default function Page() {

  // FAQ Schema.org structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": ["en", "ru"],
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-People marketplace? / Что такое маркетплейс AI-People?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-People is the world's first curated marketplace for hyperrealistic AI models and virtual influencers, launching November 1, 2025. We connect businesses with AI creators to buy and sell premium AI-generated content for marketing campaigns. / AI-People — это первый в мире курируемый маркетплейс для гиперреалистичных AI-моделей и виртуальных инфлюенсеров, запускается 1 ноября 2025 года."
        }
      },
      {
        "@type": "Question", 
        "name": "When does AI-People launch? / Когда запускается AI-People?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-People officially launches on November 1, 2025. Early subscribers can join our waitlist now for exclusive benefits and priority access. / AI-People официально запускается 1 ноября 2025 года. Ранние подписчики могут присоединиться к списку ожидания для эксклюзивных преимуществ."
        }
      },
      {
        "@type": "Question",
        "name": "How much can creators earn on AI-People? / Сколько могут зарабатывать креаторы на AI-People?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Successful creators on AI-People are earning $5,000-$25,000 per month selling hyperrealistic AI models and virtual influencer content to businesses. / Успешные креаторы на AI-People зарабатывают $5,000-$25,000 в месяц, продавая гиперреалистичные AI-модели и контент виртуальных инфлюенсеров бизнесам."
        }
      },
      {
        "@type": "Question",
        "name": "What types of AI models can I buy? / Какие типы AI-моделей можно купить?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy hyperrealistic AI models, virtual influencers, AI-generated photo packages, video content, and custom AI personalities for your marketing campaigns. / Вы можете купить гиперреалистичные AI-модели, виртуальных инфлюенсеров, пакеты AI-фото, видеоконтент и кастомные AI-персонажи для маркетинговых кампаний."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI-generated content legal for commercial use? / Легально ли использовать AI-контент коммерчески?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all content on AI-People comes with commercial licensing rights. Our legal framework ensures you can use purchased AI models for advertising, social media, branding, and e-commerce without restrictions. / Да, весь контент на AI-People поставляется с правами коммерческого использования. Вы можете использовать купленные AI-модели для рекламы, соцсетей, брендинга и e-commerce без ограничений."
        }
      }
    ]
  };
  
  useEffect(() => {
    // Initialize collapsible sections
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        // Initialize collapsible functionality
        const headers = document.querySelectorAll('.collapsible-header');
        
        console.log('[FAQ] Found collapsible headers:', headers.length);
        console.log('[FAQ] Headers:', headers);
        
        if (headers.length === 0) {
          console.log('[FAQ] No headers found, retrying in 500ms...');
          setTimeout(() => {
            const retryHeaders = document.querySelectorAll('.collapsible-header');
            console.log('[FAQ] Retry found headers:', retryHeaders.length);
            if (retryHeaders.length > 0) {
              initializeCollapsibleHeaders(retryHeaders);
            } else {
              console.log('[FAQ] Still no headers found after retry');
            }
          }, 500);
          return;
        }
        
        initializeCollapsibleHeaders(headers);
      }, 500);
      
      function initializeCollapsibleHeaders(headers: NodeListOf<Element>) {
        headers.forEach(header => {
          // Check if already initialized
          if (header.hasAttribute('data-collapsible-initialized')) {
            console.log('[FAQ] Header already initialized');
            return;
          }
          
          header.setAttribute('data-collapsible-initialized', 'true');
          
          const handleClick = function(this: HTMLElement) {
            const targetId = this.getAttribute('data-collapsible');
            const content = document.getElementById(targetId || '');
            
            console.log('[FAQ] Toggling collapsible:', targetId);
            
            if (content) {
              // Toggle expanded class on header and content
              this.classList.toggle('expanded');
              content.classList.toggle('expanded');
            }
          };
          
          header.addEventListener('click', handleClick);
          console.log('[FAQ] Initialized header:', header.getAttribute('data-collapsible'));
        });
      }
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Head>
        <title>AI-People FAQ: Frequently Asked Questions About AI Models Marketplace | 2025</title>
        <meta name="description" content="Get answers to frequently asked questions about AI-People marketplace, AI models, virtual influencers, pricing, licensing, and how to start earning with AI-generated content." />
        <meta name="keywords" content="AI models FAQ, virtual influencers questions, AI marketplace help, AI art licensing, AI model pricing, virtual influencer marketing" />
        <meta property="og:title" content="AI-People FAQ: Frequently Asked Questions About AI Models Marketplace" />
        <meta property="og:description" content="Get answers to frequently asked questions about AI-People marketplace, AI models, virtual influencers, pricing, and licensing." />
        <meta property="og:url" content="https://ai-people.com/faq" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="AI-People FAQ: Frequently Asked Questions" />
        <meta name="twitter:description" content="Get answers about AI models marketplace, virtual influencers, pricing, and licensing." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AI-People marketplace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People is the world's first curated marketplace for hyperrealistic AI models and virtual influencers, launching November 1, 2025. We connect professional AI creators with businesses, offering ready-made content packages with commercial licensing. No direct competitors exist in this specialized space."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How much can creators earn on AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Creators receive 75% of each sale (platform takes 25% fee). With Basic packages at $49, Pro at $69, and Exclusive from $500+, creators typically earn $5,000-$25,000+ monthly depending on portfolio size and sales volume. Upsells like 18+ packages provide additional revenue streams."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of AI models are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People offers hyperrealistic AI models, virtual influencers, AI art collections in photo and video formats. Content includes Basic packages (25 photos + 1 min video), Pro packages (50 photos + 3 min video), and Exclusive full rights buyouts. Custom orders are also available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When does AI-People launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People officially launches on November 1, 2025. We are currently in pre-launch phase, accepting early registrations for creators and buyers. Join our waiting list now for exclusive founding member benefits and priority access on launch day."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use AI-People marketplace now?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People is currently in pre-launch phase. The full marketplace with purchasing functionality will be available on November 1, 2025. You can join our waiting list now to secure your spot and receive VIP early access when we launch."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the benefits of joining the pre-launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Early subscribers get: (1) Priority marketplace access on launch day, (2) Founding member special pricing, (3) VIP status badge, (4) Exclusive early-bird deals on AI model packages, (5) Direct communication channel with the AI-People team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AI-People the first AI models marketplace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI-People is the world's first curated marketplace specifically designed for hyperrealistic AI models and virtual influencers. We are pioneering this market category with no direct competitors, creating a unique platform that connects professional AI creators with businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is AI-People different from stock photo sites or AI tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike stock photo sites (Shutterstock, Adobe Stock) or DIY AI tools (Midjourney, DALL-E), AI-People is a specialized marketplace with curated professional AI models, 75% creator commission, commercial licensing included, and ready-made content packages starting at $49. We focus exclusively on the AI content creator economy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are AI-People package prices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People offers three main tiers: Basic Package ($49 USDT) includes 25 photos + 1 minute video, Pro Package ($69 USDT) includes 50 photos + 3 minutes video, and Exclusive ($500+ USDT) offers full rights buyout with model removal from catalog. All packages include commercial licensing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What payment methods does AI-People accept?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People accepts USDT cryptocurrency on Tron and BSC networks for fast, secure blockchain transactions. We're planning to add traditional payment methods like credit cards and PayPal after the November 1, 2025 launch based on user demand."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the creator commission on AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Creators receive 75% of each sale, with AI-People taking a 25% platform fee. This means on a $49 Basic Package, the creator earns $36.75 USDT. On a $69 Pro Package, creator earns $51.75 USDT. On a $500 Exclusive buyout, creator earns $375 USDT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the minimum withdrawal amount for creators?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum withdrawal amount is 100 USDT. Creators can withdraw earnings to their USDT wallet once they reach this threshold. For withdrawals under 10,000 USDT, KYC verification is not required, providing privacy and convenience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long is the payment hold period?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People implements a 72-hour hold period after purchase for buyer verification. This allows buyers to confirm that received content matches the creator's model page description and custom order requirements were met on time. After 72 hours without issues, funds automatically release to creator's wallet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AI-People offer refunds?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, AI-People does not offer refunds for purchased content. Since content is digital and immediately accessible after purchase, all sales are final. Watermarked preview images are provided to help buyers make informed decisions before purchasing. The 72-hour verification period protects buyers from content mismatches."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are preview images watermarked?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all preview images on AI-People include watermarks and download protection. This prevents unauthorized use without licensing. After purchase and payment verification, buyers receive full high-resolution files without watermarks for commercial use. Preview protection ensures creator rights are respected."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use AI-People content for commercial projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all AI-People content packages include full commercial licensing. You can use purchased content for advertising campaigns, product marketing, social media, websites, presentations, and any commercial projects without additional fees or attribution requirements. License is perpetual and worldwide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I request custom AI model content?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can request custom content packages tailored to your specific needs. Provide detailed specifications including style preferences, format requirements, and quantity. Creators will deliver custom orders within agreed timelines, with the 72-hour verification period protecting order quality."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is 18+ adult content available on AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI-People offers age-verified 18+ content sections with strict legal compliance. All adult content is clearly labeled, age-gated, and available only where legal. 18+ packages can be offered as upsells to existing buyers, including commercial licenses for platforms like OnlyFans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI tools do I need to create content for AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Popular tools include Midjourney, Stable Diffusion, or DALL-E for generation, Adobe Photoshop or Affinity Photo for post-processing, and Topaz Gigapixel AI or Magnific AI for upscaling. You can use any professional AI generation tools—we evaluate content quality, not which tools you use."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need professional AI experience to join as creator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, AI-People welcomes creators of all experience levels—from beginners to 3+ year professionals. We accept creators based on content quality, not experience years. Even beginners can earn if they produce hyperrealistic, commercial-grade AI models. Quality review ensures marketplace standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the 72-hour verification period work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After purchase, there's a 72-hour hold period where buyers verify that received content matches the creator's description and custom order specifications were met on time. After 72 hours without issues, funds automatically release to the creator's USDT wallet. This protects both buyers and creators."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What file formats and resolution does AI-People provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People content includes high-resolution images (2K-4K resolution) in JPG and PNG formats, and videos in MP4 format. All content is professional-grade quality suitable for commercial use, large-format printing, and digital advertising campaigns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose AI-People instead of hiring real models?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traditional photoshoots cost $5,000-$15,000 per day plus model fees, studio rental, and post-production. AI-People packages start at $49 with instant delivery, saving 85-95% on costs. You eliminate scheduling conflicts, geographical constraints, and gain unlimited variations without additional expenses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AI-People require KYC verification?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For creator withdrawals under 10,000 USDT, KYC verification is not required, providing privacy and convenience. KYC may be required for larger withdrawals or specific compliance cases. Buyers do not need KYC for purchases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can creators sell same models on other platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Basic and Pro packages, yes—creators can sell on multiple platforms simultaneously. However, Exclusive packages involve full rights buyout with model removal from AI-People catalog and buyer exclusivity, so those specific models cannot be sold elsewhere after Exclusive purchase."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I download content after purchase?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After completing USDT payment and 72-hour verification period, purchased content packages are available for download from your buyer dashboard. You receive high-resolution files in organized folders with all photos and videos included in your selected package tier."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the main use cases for AI-People content?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Primary use cases include: advertising campaigns (digital and print), social media marketing, website and landing page visuals, product branding, presentations and pitch decks, email marketing, and eCommerce product photography. All content includes commercial licensing for these applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AI-People ensure content quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People operates a curated marketplace with quality review for all uploaded content. Only hyperrealistic, professional-grade AI models are approved. We reject low-quality, poorly generated, or non-commercial content to maintain premium marketplace standards and protect buyer investment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I preview AI models before purchasing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every AI model package includes watermarked preview images showcasing the model's appearance, style, and quality. These protected previews help you evaluate content before purchase. Full high-resolution files without watermarks are available after payment and verification period."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose AI-People over Shutterstock or Adobe Stock?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stock photo sites offer generic content with expensive royalty-based pricing and limited AI models. AI-People is a specialized AI marketplace with hyperrealistic models, one-time purchase (no ongoing royalties), 75% creator payout, and prices starting at $49 versus $100+ on stock sites."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why not just use Midjourney or DALL-E directly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Midjourney and DALL-E are DIY generation tools requiring technical expertise, monthly subscriptions ($30-$60), and hours of work for consistent results. AI-People offers ready-made professional packages created by expert creators—instant download with no generation needed, no learning curve, starting at $49."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AI-People support multiple languages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI-People platform supports English and Russian languages with full interface translation. We plan to add more languages (Spanish, Chinese, Japanese) after launch based on user demand and market expansion into new regions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How secure are cryptocurrency payments on AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People uses USDT cryptocurrency on secure blockchain networks (Tron, BSC), eliminating credit card storage risks. Wallet-to-wallet transactions provide maximum security and privacy. All transactions are recorded on immutable blockchain ledger for transparency and dispute resolution."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What monthly budget should I expect for AI-People content?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monthly budgets vary by needs: small businesses typically spend $100-$500 (2-7 packages), marketing agencies $500-$1,000 (7-14 packages), mid-size companies $1,000-$5,000 (14-70 packages), and enterprises $5,000+ monthly. One-time purchases without subscriptions are available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many packages should creators produce monthly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Creator capacity varies: beginners typically produce 2-3 packages monthly, intermediate creators 4-6 packages, and advanced creators 7+ packages monthly. AI-People prioritizes quality over quantity—focus on hyperrealistic, professional-grade content rather than high volume for better earnings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who are AI-People's competitors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People has no direct competitors as the world's first curated marketplace for hyperrealistic AI models. Alternative solutions include stock photo sites (different business model), DIY AI tools (technical barrier), or freelance platforms (inconsistent quality), but no platform offers our specialized AI marketplace approach."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens on November 1, 2025 launch day?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On November 1, 2025, AI-People marketplace goes live with full functionality: buyers can purchase AI model packages, creators can upload and sell content, USDT payments activate, and the curated catalog becomes available. Early subscribers receive priority access and founding member special pricing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I sell my AI models on other platforms while using AI-People?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Basic and Pro packages, yes—creators can sell on multiple platforms simultaneously. However, Exclusive packages involve full rights buyout with model removal from AI-People catalog and buyer exclusivity, so those specific models cannot be sold elsewhere after Exclusive purchase."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What team sizes use AI-People marketplace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-People serves all business sizes: solo freelancers and individuals, small teams (1-10 people), mid-size companies (11-50 people), large enterprises (51-200 people), and Fortune 500 corporations (200+ people). Our three-tier package system scales for any need."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is AI-People focusing on the US market?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The United States represents the largest AI content market ($36.2 billion projected by 2026) with highest business adoption rates. We're targeting US market first for SEO optimization and brand establishment, with global expansion to Europe and Asia planned for 2026."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AI-People handle payment disputes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 72-hour verification period allows buyers to report content mismatches before funds release. If issues arise, AI-People team reviews evidence from both parties. Valid disputes may result in content replacement or payment hold extension. After 72 hours without dispute, transactions are final and non-refundable."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I sell 18+ packages as upsells?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, creators can offer 18+ content packages as upsells to buyers who already purchased their models. This includes adult content with commercial license for platforms like OnlyFans. Upsells are a significant additional revenue stream for creators beyond initial package sales."
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <div className="container faq-page">
      <HeaderWithMenu homeHref="/" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. 🚀 Launching 12/01/2025
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}><Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} loading="lazy" /></div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="FAQ" data-lang-ru="FAQ">FAQ</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Everything about the marketplace of already ready virtual AI models" data-lang-ru="Всё о маркетплейсе уже готовых виртуальных AI-моделей">Everything about the marketplace of already ready virtual AI models</h2>
          <h3 className="hero-description" data-lang-en="How technology, creativity and monetization unite in one AI space. Create, own and earn from digital personas of the future using the power of AI." data-lang-ru="Как технологии, креатив и монетизация объединяются в одном AI-пространстве. Создавай, владей и зарабатывай на цифровых образах будущего, используя потенциал AI.">How technology, creativity and monetization unite in one AI space. Create, own and earn from digital personas of the future using the power of AI.</h3>
        </section>

        {/* FAQ Question 1 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-1" data-lang-en="What is AI-PEOPLE?" data-lang-ru="Что такое AI-PEOPLE?"></h2>
          <div className="collapsible-content" id="faq-1">
            <p data-lang-en="AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding." data-lang-ru="AI-PEOPLE — это инновационный маркетплейс AI-моделей и цифровых личностей, который объединяет креаторов (создателей AI-контента) и покупателей — компании или частных пользователей, желающих использовать модели в рекламе, контенте или личном продвижении.">AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding.</p>
          </div>
        </section>

        {/* FAQ Question 2 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-2" data-lang-en="Who can use AI-PEOPLE?" data-lang-ru="Кто может использовать AI-PEOPLE?"></h2>
          <div className="collapsible-content" id="faq-2">
            <p data-lang-en="Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding." data-lang-ru="Платформа открыта для всех — брендов, фрилансеров, маркетологов, инфлюенсеров и частных пользователей. Вы можете покупать, продавать или заказывать кастомные AI-модели для любых целей: от рекламы до личного бренда.">Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding.</p>
                </div>
        </section>

        {/* FAQ Question 3 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-3" data-lang-en="Can I sell my own AI models here?" data-lang-ru="Могу ли я продавать свои AI-модели на платформе?"></h2>
          <div className="collapsible-content" id="faq-3">
            <p data-lang-en="Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase." data-lang-ru="Да! Креаторы могут загружать свои AI-модели, фото-пакеты и видео, сохраняя полное авторское право и получая доход от каждой покупки или лицензии.">Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase.</p>
                </div>
        </section>

        {/* FAQ Question 4 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-4" data-lang-en="Is it legal to use AI-generated people in content?" data-lang-ru="Законно ли использовать AI‑сгенерированных людей в контенте?"></h2>
          <div className="collapsible-content" id="faq-4">
            <p data-lang-en="Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content." data-lang-ru="Да, полностью легально. Все AI-модели на платформе сопровождаются чёткой лицензией использования. Мы обеспечиваем этичный и безопасный для коммерческого применения контент.">Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content.</p>
        </div>
      </section>

        {/* FAQ Question 5 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-5" data-lang-en="Can I order a custom AI model or campaign?" data-lang-ru="Могу ли я заказать кастомную AI‑модель или кампанию?"></h2>
          <div className="collapsible-content" id="faq-5">
            <p data-lang-en="Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work." data-lang-ru="Да, вы можете заказать создание индивидуальной AI‑модели или полноценную рекламную кампанию с выбранной моделью. AI-PEOPLE напрямую связывает заказчиков с креаторами для кастомных проектов.">Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work.</p>
          </div>
        </section>

        {/* FAQ Question 6 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-6" data-lang-en="Does AI-PEOPLE include 18+ content?" data-lang-ru="Есть ли на AI‑PEOPLE контент 18+?"></h2>
          <div className="collapsible-content" id="faq-6">
            <p data-lang-en="AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines." data-lang-ru="На платформе действуют строгие правила контента. Отдельный раздел (18+) будет запущен позже и станет доступен только для проверенных и лицензированных пользователей, в соответствии с законодательством и этическими нормами.">AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines.</p>
        </div>
      </section>

        {/* FAQ Question 7 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-7" data-lang-en="Is AI-PEOPLE free to use?" data-lang-ru="Бесплатна ли AI‑PEOPLE?"></h2>
          <div className="collapsible-content" id="faq-7">
            <p data-lang-en="Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees." data-lang-ru="Регистрация бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные функции и ранний доступ к новым креаторам. Прозрачная система оплаты — без скрытых комиссий.">Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees.</p>
        </div>
      </section>

        {/* FAQ Question 8 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-8" data-lang-en="Where is AI-PEOPLE based?" data-lang-ru="Где расположена AI‑PEOPLE?"></h2>
          <div className="collapsible-content" id="faq-8">
            <p data-lang-en="AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere." data-lang-ru="AI-PEOPLE работает по всему миру, главный офис расположен в Нью-Йорке (США). Наша цель — сделать AI‑творчество доступным каждому.">AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere.</p>
        </div>
      </section>

        {/* FAQ Question 9 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-9" data-lang-en="How can I contact you?" data-lang-ru="Как с вами связаться?"></h2>
          <div className="collapsible-content" id="faq-9">
            <p data-lang-en="You can reach us via the Contact form on the website or by email at contact@ai-people.io. We reply to every inquiry — creators, partners, and press are always welcome." data-lang-ru="Связаться с нами можно через форму обратной связи на сайте или по email contact@ai-people.io. Мы открыты для креаторов, партнёров и СМИ.">You can reach us via the Contact form on the website or by email at contact@ai-people.io. We reply to every inquiry — creators, partners, and press are always welcome.</p>
        </div>
      </section>


        {/* Call to Action - Join the revolution block */}
        <section style={{padding: '2rem 0'}}>
          <div className="call-to-action" style={{textAlign: 'center'}}>
            <h2 data-lang-en="Join the AI-Content Revolution" data-lang-ru="Присоединяйтесь к революции AI-контента">Join the AI-Content Revolution</h2>
            <p data-lang-en="Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits." data-lang-ru="Независимо от того, являетесь ли вы бизнесом, ищущим экономически выгодные и качественные визуалы, или креатором, готовым продемонстрировать своё мастерство в сфере AI, — AI-PEOPLE ваша стартовая площадка. Подпишитесь на ранний доступ, чтобы получить эксклюзивные функции, бонусы и возможности нашего сообщества.">Whether you're a brand searching for cost-effective, high-quality visuals, or a creator ready to showcase your AI mastery — AI-PEOPLE is your launchpad. Get early access to exclusive features, creator opportunities, and community benefits.</p>
            <p data-lang-en="Have questions? Visit our " data-lang-ru="Есть вопросы? Перейдите в ">Have questions? Visit our <a href="/faq" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="FAQ" data-lang-ru="раздел FAQ">FAQ</a> <span data-lang-en=" or explore our " data-lang-ru=" или изучите наши "> or explore our </span><a href="/blog" style={{color: '#1e40af', textDecoration: 'underline', fontWeight: '700'}} data-lang-en="expert insights about AI models and virtual influencers" data-lang-ru="инсайты о виртуальных инфлюенсерах и AI-моделях">expert insights about AI models and virtual influencers</a>.</p>
            <a href="/auth/role" className="btn primary" style={{marginTop: '1.5rem', display: 'inline-block'}}><span data-lang-en="Join the Waiting List" data-lang-ru="Присоединиться к списку ожидания">Join the Waiting List</span></a>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Schema.org FAQ Structured Data */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type":"Question","name":"What is AI-PEOPLE?","acceptedAnswer":{"@type":"Answer","text":"AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding."}},
              {"@type":"Question","name":"Who can use AI-PEOPLE?","acceptedAnswer":{"@type":"Answer","text":"Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding."}},
              {"@type":"Question","name":"Can I sell my own AI models here?","acceptedAnswer":{"@type":"Answer","text":"Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase."}},
              {"@type":"Question","name":"Is it legal to use AI-generated people in content?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content."}},
              {"@type":"Question","name":"Can I order a custom AI model or campaign?","acceptedAnswer":{"@type":"Answer","text":"Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work."}},
              {"@type":"Question","name":"Does AI-PEOPLE include 18+ content?","acceptedAnswer":{"@type":"Answer","text":"AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines."}},
              {"@type":"Question","name":"Is AI-PEOPLE free to use?","acceptedAnswer":{"@type":"Answer","text":"Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees."}},
              {"@type":"Question","name":"Where is AI-PEOPLE based?","acceptedAnswer":{"@type":"Answer","text":"AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere."}},
              {"@type":"Question","name":"How can I contact you?","acceptedAnswer":{"@type":"Answer","text":"You can reach us via the Contact form on the website or by email at contact@ai-people.io. We reply to every inquiry — creators, partners, and press are always welcome."}}
            ]
          })
        }}
      />
      </div>
    </>
  );
}