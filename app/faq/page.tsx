"use client";
import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer";
import Head from "next/head";
import HeaderWithMenu from "../components/HeaderWithMenu";
import FAQSchema from "../components/FAQSchema";
import { useLanguage } from "../hooks/useLanguage";

export default function Page() {
  useLanguage({ forceLanguage: 'en' });

  
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
      </Head>
      <div className="container faq-page">
      <HeaderWithMenu homeHref="/" />

      {/* Pre-launch Notification Banner */}
      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!" data-lang-ru="🔥 Это только разминка! Вы на прелендинговой странице - подпишитесь сейчас и станьте одним из первых, кто освоит проект. Ранние подписчики получат эксклюзивные бонусы при запуске. Шагните в 2026 год с революционными возможностями!">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!
          </span>
        </div>
      </div>

      {/* Marquee */}
      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
            {Array.from({length:19}).map((_,i)=> (
              <div className="marquee-item" key={`m-a-${i}`}>
                <picture>
                  <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                  <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} quality={100} loading="eager" />
                </picture>
              </div>
            ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={160} height={100} quality={100} loading="eager" />
              </picture>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="FAQ" data-lang-ru="FAQ">FAQ</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Everything about the marketplace of already ready virtual AI models" data-lang-ru="Всё о маркетплейсе уже готовых виртуальных AI-моделей">Everything about the marketplace of already ready virtual AI models</h2>
          <h3 className="hero-description" data-lang-en="How technology, creativity and monetization unite in one AI space. Create, own and earn from digital personas of the future using the power of AI" data-lang-ru="Как технологии, креатив и монетизация объединяются в одном AI-пространстве. Создавай, владей и зарабатывай на цифровых образах будущего, используя потенциал AI">How technology, creativity and monetization unite in one AI space. Create, own and earn from digital personas of the future using the power of AI</h3>
        </section>

        {/* FAQ Question 1 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-1" data-lang-en="What is AI-PEOPLE?" data-lang-ru="Что такое AI-PEOPLE?">What is AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-1">
            <p data-lang-en="AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding." data-lang-ru="AI-PEOPLE — это инновационный маркетплейс AI-моделей и цифровых личностей, который объединяет креаторов (создателей AI-контента) и покупателей — компании или частных пользователей, желающих использовать модели в рекламе, контенте или личном продвижении.">AI-PEOPLE is a next-generation marketplace for AI-generated models and digital humans. It connects creators who make AI models, photos, and videos — with businesses and individuals who want to use them for marketing, content, and branding.</p>
          </div>
        </section>

        {/* FAQ Question 2 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-2" data-lang-en="Who can use AI-PEOPLE?" data-lang-ru="Кто может использовать AI-PEOPLE?">Who can use AI-PEOPLE?</h2>
          <div className="collapsible-content" id="faq-2">
            <p data-lang-en="Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding." data-lang-ru="Платформа открыта для всех — брендов, фрилансеров, маркетологов, инфлюенсеров и частных пользователей. Вы можете покупать, продавать или заказывать кастомные AI-модели для любых целей: от рекламы до личного бренда.">Anyone. AI-PEOPLE is designed for brands, creators, marketers, influencers, and individuals who want ready-to-use visual assets powered by AI. You can buy, sell, or customize AI models for your projects — from digital ads to personal branding.</p>
                </div>
        </section>

        {/* FAQ Question 3 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-3" data-lang-en="Can I sell my own AI models here?" data-lang-ru="Могу ли я продавать свои AI-модели на платформе?">Can I sell my own AI models here?</h2>
          <div className="collapsible-content" id="faq-3">
            <p data-lang-en="Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase." data-lang-ru="Да! Креаторы могут загружать свои AI-модели, фото-пакеты и видео, сохраняя полное авторское право и получая доход от каждой покупки или лицензии.">Yes! Creators can upload and monetize their AI-generated models, image packs, or videos. You keep full creative control and earn from every download or license purchase.</p>
                </div>
        </section>

        {/* FAQ Question 4 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-4" data-lang-en="Is it legal to use AI-generated people in content?" data-lang-ru="Законно ли использовать AI‑сгенерированных людей в контенте?">Is it legal to use AI-generated people in content?</h2>
          <div className="collapsible-content" id="faq-4">
            <p data-lang-en="Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content." data-lang-ru="Да, полностью легально. Все AI-модели на платформе сопровождаются чёткой лицензией использования. Мы обеспечиваем этичный и безопасный для коммерческого применения контент.">Absolutely. All AI models on AI-PEOPLE come with a clear usage license. We focus on ethical, copyright-safe, and commercial-ready AI content.</p>
        </div>
      </section>

        {/* FAQ Question 5 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-5" data-lang-en="Can I order a custom AI model or campaign?" data-lang-ru="Могу ли я заказать кастомную AI‑модель или кампанию?">Can I order a custom AI model or campaign?</h2>
          <div className="collapsible-content" id="faq-5">
            <p data-lang-en="Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work." data-lang-ru="Да, вы можете заказать создание индивидуальной AI‑модели или полноценную рекламную кампанию с выбранной моделью. AI-PEOPLE напрямую связывает заказчиков с креаторами для кастомных проектов.">Yes — you can request custom model creation or order a full AI-driven ad campaign with a chosen model. Our platform connects you directly with creators for custom work.</p>
          </div>
        </section>

        {/* FAQ Question 6 */}
        <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-6" data-lang-en="Does AI-PEOPLE include 18+ content?" data-lang-ru="Есть ли на AI‑PEOPLE контент 18+?">Does AI-PEOPLE include 18+ content?</h2>
          <div className="collapsible-content" id="faq-6">
            <p data-lang-en="AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines." data-lang-ru="На платформе действуют строгие правила контента. Отдельный раздел (18+) будет запущен позже и станет доступен только для проверенных и лицензированных пользователей, в соответствии с законодательством и этическими нормами.">AI-PEOPLE operates under clear content rules. A separate restricted section (18+) will be available later for licensed and verified users, following all legal and ethical guidelines.</p>
        </div>
      </section>

        {/* FAQ Question 7 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-7" data-lang-en="Is AI-PEOPLE free to use?" data-lang-ru="Бесплатна ли AI‑PEOPLE?">Is AI-PEOPLE free to use?</h2>
          <div className="collapsible-content" id="faq-7">
            <p data-lang-en="Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees." data-lang-ru="Регистрация бесплатна. Доступ к каталогам AI-моделей и премиум-контенту предоставляется через членскую подписку, которая открывает эксклюзивные функции и ранний доступ к новым креаторам. Прозрачная система оплаты — без скрытых комиссий.">Registration is free. Access to AI model catalogs and premium content will be available through a membership plan, offering exclusive features and early access to new creators. Transparent pricing — no hidden fees.</p>
        </div>
      </section>

        {/* FAQ Question 8 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-8" data-lang-en="Where is AI-PEOPLE based?" data-lang-ru="Где расположена AI‑PEOPLE?">Where is AI-PEOPLE based?</h2>
          <div className="collapsible-content" id="faq-8">
            <p data-lang-en="AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere." data-lang-ru="AI-PEOPLE работает по всему миру, главный офис расположен в Нью-Йорке (США). Наша цель — сделать AI‑творчество доступным каждому.">AI-PEOPLE operates globally, with headquarters in New York, USA. Our mission is to make AI-powered creativity accessible to everyone, everywhere.</p>
        </div>
      </section>

        {/* FAQ Question 9 */}
      <section className="features">
          <h2 className="section-title collapsible-header" data-collapsible="faq-9" data-lang-en="How can I contact you?" data-lang-ru="Как с вами связаться?">How can I contact you?</h2>
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
            "inLanguage": ["en", "ru"],
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
      <FAQSchema />
      </div>
    </>
  );
}