"use client";

import Image from "next/image";
import Footer from "../../components/Footer";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import { useLanguage } from "../../hooks/useLanguage";

export default function CreatorInfoPage() {
  useLanguage();

  return (
    <div className="container home-page creator-info-page">
      <HeaderWithMenu homeHref="/" />

      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025" data-lang-ru="🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. Стартуем 01.12.2025">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe and be among the first to break into the project. Early subscribers get privileges at launch. Launching 12/01/2025
          </span>
        </div>
      </div>

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
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as a Creator" data-lang-ru="Присоединяйтесь как Креатор">Join as a Creator</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Monetize Your AI Talent — Create. Earn. Grow Globally." data-lang-ru="Монетизируйте ваш AI-талант — Создавайте. Зарабатывайте. Развивайтесь глобально.">Monetize Your AI Talent — Create. Earn. Grow Globally.</h2>
          <h3 className="hero-description" data-lang-en="Welcome to AI People — the first curated marketplace for AI models, virtual influencers, and professional AI content. Here, your creativity meets opportunity: publish your hyperrealistic AI-generated models, photos, and videos — and start earning from every sale, worldwide." data-lang-ru="Добро пожаловать в AI People — первый курируемый маркетплейс для AI-моделей, виртуальных инфлюенсеров и профессионального AI-контента. Здесь ваше творчество встречается с возможностями: публикуйте ваши гиперреалистичные AI-модели, фото и видео — и начинайте зарабатывать с каждой продажи по всему миру.">Welcome to AI People — the first curated marketplace for AI models, virtual influencers, and professional AI content. Here, your creativity meets opportunity: publish your hyperrealistic AI-generated models, photos, and videos — and start earning from every sale, worldwide.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p data-lang-en="You bring the art — we bring the audience. Our platform connects skilled AI creators with global buyers: agencies, brands, influencers, and entrepreneurs seeking high-quality AI content for marketing, social media, and digital storytelling. You focus on creation. We handle the rest — marketing, promotion, and guaranteed crypto payments." data-lang-ru="Вы создаете искусство — мы приводим аудиторию. Наша платформа соединяет талантливых AI-креаторов с глобальными покупателями: агентствами, брендами, инфлюенсерами и предпринимателями, ищущими высококачественный AI-контент для маркетинга, социальных сетей и цифрового сторителлинга. Вы сосредотачиваетесь на создании. Мы занимаемся всем остальным — маркетингом, продвижением и гарантированными криптоплатежами.">
              You bring the art — we bring the audience. Our platform connects skilled AI creators with global buyers: agencies, brands, influencers, and entrepreneurs seeking high-quality AI content for marketing, social media, and digital storytelling. You focus on creation. We handle the rest — marketing, promotion, and guaranteed crypto payments.
            </p>
            
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What You Get" data-lang-ru="Что вы получаете">What You Get</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="75% revenue share — transparent and fair. You keep most of what you earn." data-lang-ru="75% от выручки — прозрачно и честно. Вы получаете большую часть заработанного.">75% revenue share — transparent and fair. You keep most of what you earn.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="No KYC up to 10,000 USDT — fast, borderless crypto payouts." data-lang-ru="Без KYC до 10 000 USDT — быстрые, безграничные криптоплатежи.">No KYC up to 10,000 USDT — fast, borderless crypto payouts.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Guaranteed payments — no risk of fraud or unpaid orders." data-lang-ru="Гарантированные платежи — никакого риска мошенничества или неоплаченных заказов.">Guaranteed payments — no risk of fraud or unpaid orders.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Anonymity and security — all communication happens within the platform." data-lang-ru="Анонимность и безопасность — все общение происходит внутри платформы.">Anonymity and security — all communication happens within the platform.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Full marketing support — we promote your content globally to maximize reach and sales." data-lang-ru="Полная маркетинговая поддержка — мы продвигаем ваш контент глобально для максимизации охвата и продаж.">Full marketing support — we promote your content globally to maximize reach and sales.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Transaction protection — the platform acts as an escrow guarantor for every deal." data-lang-ru="Защита транзакций — платформа выступает гарантом-эскроу для каждой сделки.">Transaction protection — the platform acts as an escrow guarantor for every deal.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Long-term partnership — continuous growth, stable income, and recurring buyers." data-lang-ru="Долгосрочное партнерство — непрерывный рост, стабильный доход и постоянные покупатели.">Long-term partnership — continuous growth, stable income, and recurring buyers.</span>
              </div>
            </div>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Why It's Profitable for You" data-lang-ru="Почему это прибыльно для вас">Why It's Profitable for You</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Monetize without limits — upload your AI content once, and earn repeatedly from every sale." data-lang-ru="Монетизируйте без ограничений — загрузите ваш AI-контент один раз и зарабатывайте повторно с каждой продажи.">Monetize without limits — upload your AI content once, and earn repeatedly from every sale.</li>
              <li data-lang-en="Work from anywhere — all payments are in crypto, no banking restrictions or geo limits." data-lang-ru="Работайте из любой точки мира — все платежи в криптовалюте, никаких банковских ограничений или географических лимитов.">Work from anywhere — all payments are in crypto, no banking restrictions or geo limits.</li>
              <li data-lang-en="We handle promotion — your portfolio is marketed to verified international buyers." data-lang-ru="Мы занимаемся продвижением — ваше портфолио продвигается среди проверенных международных покупателей.">We handle promotion — your portfolio is marketed to verified international buyers.</li>
              <li data-lang-en="Priority for professionals — we highlight creators with vision, style, and consistency." data-lang-ru="Приоритет для профессионалов — мы выделяем креаторов с видением, стилем и последовательностью.">Priority for professionals — we highlight creators with vision, style, and consistency.</li>
              <li data-lang-en="Focus on high-demand niches — lifestyle, business, fashion, fitness, gaming, and NSFW (18+) — one of the most profitable and fast-growing AI segments." data-lang-ru="Фокус на высоко востребованных нишах — образ жизни, бизнес, мода, фитнес, гейминг и NSFW (18+) — один из самых прибыльных и быстрорастущих AI-сегментов.">Focus on high-demand niches — lifestyle, business, fashion, fitness, gaming, and NSFW (18+) — one of the most profitable and fast-growing AI segments.</li>
              <li data-lang-en="Build a personal brand — become a recognized AI creator with a global audience." data-lang-ru="Создавайте личный бренд — станьте признанным AI-креатором с глобальной аудиторией.">Build a personal brand — become a recognized AI creator with a global audience.</li>
            </ul>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Role as a Creator" data-lang-ru="Ваша роль как креатора">Your Role as a Creator</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Produce original, high-quality AI-generated content — models, photos, or videos that meet platform standards." data-lang-ru="Создавайте оригинальный, высококачественный AI-контент — модели, фото или видео, соответствующие стандартам платформы.">Produce original, high-quality AI-generated content — models, photos, or videos that meet platform standards.</li>
              <li data-lang-en="Deliver custom orders on time and per client specifications." data-lang-ru="Выполняйте индивидуальные заказы в срок и согласно требованиям клиента.">Deliver custom orders on time and per client specifications.</li>
              <li data-lang-en="Continuously improve your AI skills — stay ahead of trends and tools." data-lang-ru="Постоянно совершенствуйте ваши AI-навыки — оставайтесь впереди трендов и инструментов.">Continuously improve your AI skills — stay ahead of trends and tools.</li>
              <li data-lang-en="Maintain professional communication with the AI People team and buyers." data-lang-ru="Поддерживайте профессиональное общение с командой AI People и покупателями.">Maintain professional communication with the AI People team and buyers.</li>
              <li data-lang-en="Uphold ethical and legal standards in all your creative work." data-lang-ru="Соблюдайте этические и правовые стандарты во всей вашей творческой работе.">Uphold ethical and legal standards in all your creative work.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="Whether you're an AI artist, designer, or digital visionary — this is your space to turn creativity into income and talent into recognition. AI People empowers you to work independently, earn globally, and grow as part of a pioneering creator community." data-lang-ru="Будь вы AI-художником, дизайнером или цифровым визионером — это ваше пространство для превращения творчества в доход, а таланта в признание. AI People дает вам возможность работать независимо, зарабатывать глобально и развиваться как часть пионерского сообщества креаторов.">Whether you're an AI artist, designer, or digital visionary — this is your space to turn creativity into income and talent into recognition. AI People empowers you to work independently, earn globally, and grow as part of a pioneering creator community.</p>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Creator Commitments" data-lang-ru="Обязательства креатора">Creator Commitments</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Create only original and compliant AI content." data-lang-ru="Создавайте только оригинальный и соответствующий требованиям AI-контент.">Create only original and compliant AI content.</li>
              <li data-lang-en="Respect all intellectual property and copyright laws." data-lang-ru="Уважайте все права интеллектуальной собственности и законы об авторском праве.">Respect all intellectual property and copyright laws.</li>
              <li data-lang-en="Follow platform standards and content guidelines." data-lang-ru="Следуйте стандартам платформы и правилам контента.">Follow platform standards and content guidelines.</li>
              <li data-lang-en="Provide accurate previews and descriptions for each upload." data-lang-ru="Предоставляйте точные предварительные просмотры и описания для каждой загрузки.">Provide accurate previews and descriptions for each upload.</li>
              <li data-lang-en="Communicate promptly and professionally with the team." data-lang-ru="Общайтесь быстро и профессионально с командой.">Communicate promptly and professionally with the team.</li>
              <li data-lang-en="Deliver custom content within agreed timeframes." data-lang-ru="Выполняйте индивидуальный контент в согласованные сроки.">Deliver custom content within agreed timeframes.</li>
              <li data-lang-en="Maintain a portfolio that reflects ongoing quality and improvement." data-lang-ru="Поддерживайте портфолио, отражающее постоянное качество и улучшения.">Maintain a portfolio that reflects ongoing quality and improvement.</li>
            </ul>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Future Starts Here" data-lang-ru="Ваше будущее начинается здесь">Your Future Starts Here</h3>
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="🌍 Join the Waiting List Now. Be among the first creators to get early access, earn crypto from your AI models, and build your name in the world's fastest-growing digital market." data-lang-ru="🌍 Присоединяйтесь к списку ожидания прямо сейчас. Станьте одним из первых креаторов, получивших ранний доступ, зарабатывайте криптовалюту на ваших AI-моделях и создавайте свое имя на самом быстрорастущем цифровом рынке мира.">🌍 Join the Waiting List Now. Be among the first creators to get early access, earn crypto from your AI models, and build your name in the world's fastest-growing digital market.</p>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/auth/creator" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Continue to Registration</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



