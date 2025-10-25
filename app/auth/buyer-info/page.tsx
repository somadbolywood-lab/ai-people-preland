"use client";

import Image from "next/image";
import Footer from "../../components/Footer";
import HeaderWithMenu from "../../components/HeaderWithMenu";
import { useLanguage } from "../../hooks/useLanguage";

export default function BuyerInfoPage() {
  useLanguage();

  return (
    <div className="container home-page buyer-info-page">
      <HeaderWithMenu homeHref="/" />

      <div className="notification-banner">
        <div className="notification-content">
          <span data-lang-en="🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!" data-lang-ru="🔥 Это только разминка! Вы на прелендинговой странице - подпишитесь сейчас и станьте одним из первых, кто освоит проект. Ранние подписчики получат эксклюзивные бонусы при запуске. Шагните в 2026 год с революционными возможностями!">
            🔥 This is just the warm-up! You're on the pre-landing page — subscribe now and be among the first to break into the project. Early subscribers get exclusive perks at launch. Step into 2026 with game-changing opportunities!
          </span>
        </div>
      </div>

      <section className="marquee" aria-label="Model previews">
        <div className="marquee-track">
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-a-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={360} height={234} quality={100} loading="eager" sizes="(max-width: 639px) 360px, (max-width: 430px) 360px, (max-width: 393px) 360px, (max-width: 375px) 360px, 320px" />
              </picture>
            </div>
          ))}
          {Array.from({length:19}).map((_,i)=> (
            <div className="marquee-item" key={`m-b-${i}`}>
              <picture>
                <source srcSet={`/assets/models/model-${String(i+1).padStart(2, '0')}.webp`} type="image/webp" />
                <Image src={`/assets/models/model-${String(i+1).padStart(2, '0')}.png`} alt={`AI Model ${i+1}`} width={360} height={234} quality={100} loading="eager" sizes="(max-width: 639px) 360px, (max-width: 430px) 360px, (max-width: 393px) 360px, (max-width: 375px) 360px, 320px" />
              </picture>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero">
          <h1 className="title"><span className="gradient-text" data-lang-en="Join as a Buyer" data-lang-ru="Присоединяйтесь как Покупатель">Join as a Buyer</span></h1>
          <h2 className="hero-subtitle" data-lang-en="Unlock the Power of AI Models — Elevate Your Brand, Scale Your Vision" data-lang-ru="Раскройте силу AI‑моделей — усиливайте бренд, масштабируйте видение">Unlock the Power of AI Models — Elevate Your Brand, Scale Your Vision</h2>
          <h3 className="hero-description" data-lang-en="Welcome to AI People — the world’s first curated marketplace for professional AI models and hyperrealistic virtual influencers. Here, innovation meets creativity: access, customize, and collaborate with next-generation AI models designed to help your brand grow faster, look sharper, and sell smarter." data-lang-ru="Добро пожаловать в AI People — первый в мире курируемый маркетплейс профессиональных AI‑моделей и гиперреалистичных виртуальных инфлюенсеров. Здесь инновации встречаются с креативом: получайте доступ, настраивайте и работайте с AI‑моделями нового поколения, созданными, чтобы ваш бренд рос быстрее, выглядел сильнее и продавал эффективнее.">Welcome to AI People — the world’s first curated marketplace for professional AI models and hyperrealistic virtual influencers. Here, innovation meets creativity: access, customize, and collaborate with next-generation AI models designed to help your brand grow faster, look sharper, and sell smarter.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Why Join AI People" data-lang-ru="Зачем присоединяться к AI People">Why Join AI People</h3>
            <p data-lang-en="Imagine having an entire team of elite AI models ready to create content, promote your business, and fuel your marketing 24/7 — no contracts, no downtime, no limits. This isn’t just digital imagery. It’s a new economy of creativity, where your campaigns are faster, smarter, and endlessly scalable." data-lang-ru="Представьте целую команду элитных AI‑моделей, готовых создавать контент, продвигать ваш бизнес и питать маркетинг 24/7 — без контрактов, простоев и ограничений. Это не просто цифровые изображения. Это новая экономика креатива, где ваши кампании становятся быстрее, умнее и бесконечно масштабируемыми.">
              Imagine having an entire team of elite AI models ready to create content, promote your business, and fuel your marketing 24/7 — no contracts, no downtime, no limits. This isn’t just digital imagery. It’s a new economy of creativity, where your campaigns are faster, smarter, and endlessly scalable.
            </p>
            
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="What You Get" data-lang-ru="Что вы получаете">What You Get</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Access to 18+ exclusive AI models — each with a unique appearance, character and style. Perfect for OnlyFans, Funvue, Fansly, Patreon, TikTok or any digital brand." data-lang-ru="Доступ к 18+ эксклюзивным AI‑моделям — каждая с уникальной внешностью, характером и стилем. Идеально для OnlyFans, Funvue, Fansly, Patreon, TikTok или любого цифрового бренда.">Access to 18+ exclusive AI models — each with a unique appearance, character and style. Perfect for OnlyFans, Funvue, Fansly, Patreon, TikTok or any digital brand.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Thousands of photos in top niches: lifestyle, fitness, business, fashion, gaming and romance — perfect for advertising, social media or resale." data-lang-ru="Тысячи фото в топовых нишах: лайфстайл, фитнес, бизнес, мода, гейминг и романтика — идеально для рекламы, соцсетей или перепродажи.">Thousands of photos in top niches: lifestyle, fitness, business, fashion, gaming and romance — perfect for advertising, social media or resale.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Thousands of premium videos created for engagement — boost brand visibility, social growth or subscription monetization." data-lang-ru="Тысячи премиум‑видео, созданных для вовлечения — усиливайте видимость бренда, рост в соцсетях или монетизацию по подписке.">Thousands of premium videos created for engagement — boost brand visibility, social growth or subscription monetization.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Custom content on demand — order tailored photos or videos for marketing, campaigns, or personal use." data-lang-ru="Индивидуальный контент по запросу — заказывайте фото или видео под задачи маркетинга, кампаний или личного использования.">Custom content on demand — order tailored photos or videos for marketing, campaigns, or personal use.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Priority buyer support & secure platform tools — communicate safely and effectively with creators." data-lang-ru="Приоритетная поддержка покупателей и защищённые инструменты платформы — безопасная и эффективная коммуникация с креаторами.">Priority buyer support & secure platform tools — communicate safely and effectively with creators.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Regular drops of new AI models & content — stay ahead of market trends and competitors." data-lang-ru="Регулярные дропы новых AI‑моделей и контента — будьте впереди трендов и конкурентов.">Regular drops of new AI models & content — stay ahead of market trends and competitors.</span>
              </div>
            </div>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="How AI People Helps You Earn & Scale" data-lang-ru="Как AI People помогает зарабатывать и масштабироваться">How AI People Helps You Earn & Scale</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Build and grow your subscription business (OnlyFans, Fanvue, Patreon, Boosty, etc.) — with 100% AI-generated content that sells." data-lang-ru="Стройте и развивайте подписочный бизнес (OnlyFans, Fanvue, Patreon, Boosty и т. д.) — с 100% AI‑контентом, который продаётся.">Build and grow your subscription business (OnlyFans, Fanvue, Patreon, Boosty, etc.) — with 100% AI-generated content that sells.</li>
              <li data-lang-en="Promote smarter — use original AI photos and videos to elevate your brand, boost ad performance, and increase conversions." data-lang-ru="Продвигайте умнее — используйте оригинальные AI‑фото и видео для усиления бренда, роста эффективности рекламы и конверсий.">Promote smarter — use original AI photos and videos to elevate your brand, boost ad performance, and increase conversions.</li>
              <li data-lang-en="Monetize creativity — resell photo/video packs on digital platforms or bundle them into your own services." data-lang-ru="Монетизируйте креатив — перепродавайте фото/видео‑пакеты на цифровых платформах или включайте их в собственные услуги.">Monetize creativity — resell photo/video packs on digital platforms or bundle them into your own services.</li>
              <li data-lang-en="Save time and budget — no hiring, shooting, or editing. You get agency-level content instantly." data-lang-ru="Экономьте время и бюджет — без найма, съёмок и монтажа. Агенское качество — сразу.">Save time and budget — no hiring, shooting, or editing. You get agency-level content instantly.</li>
              <li data-lang-en="Go exclusive — request custom-made content that no one else owns, giving your brand a real competitive edge." data-lang-ru="Будьте эксклюзивны — запрашивайте контент на заказ, которым не владеет никто другой, получая реальное конкурентное преимущество.">Go exclusive — request custom-made content that no one else owns, giving your brand a real competitive edge.</li>
            </ul>
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Your Advantage" data-lang-ru="Ваше преимущество">Your Advantage</h3>
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="AI People isn’t just a content hub — it’s your strategic growth engine. From digital marketing to entertainment, from startups to established brands — you gain instant creative power that works while you sleep." data-lang-ru="AI People — это не просто хаб контента, а ваш стратегический двигатель роста. От цифрового маркетинга до индустрии развлечений, от стартапов до зрелых брендов — вы получаете мгновенную креативную мощность, которая работает, пока вы спите.">AI People isn’t just a content hub — it’s your strategic growth engine. From digital marketing to entertainment, from startups to established brands — you gain instant creative power that works while you sleep.</p>
            
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Join the Waiting List Now" data-lang-ru="Присоединяйтесь к списку ожидания сейчас">Join the Waiting List Now</h3>
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}} data-lang-en="Be among the first to access premium content, exclusive models, and early-release packages before the marketplace goes live." data-lang-ru="Будьте среди первых, кто получит доступ к премиум‑контенту, эксклюзивным моделям и ранним пакетам до запуска маркетплейса.">Be among the first to access premium content, exclusive models, and early-release packages before the marketplace goes live.</p>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}} data-lang-en="Buyer Commitments" data-lang-ru="Обязательства покупателя">Buyer Commitments</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li data-lang-en="Use all purchased content only for legal, ethical purposes" data-lang-ru="Используйте весь приобретённый контент только в законных и этичных целях">Use all purchased content only for legal, ethical purposes</li>
              <li data-lang-en="Respect creator rights and copyrights" data-lang-ru="Уважайте права креаторов и авторские права">Respect creator rights and copyrights</li>
              <li data-lang-en="Follow our Terms of Service and Community Guidelines" data-lang-ru="Следуйте нашим Условиям обслуживания и Правилам сообщества">Follow our Terms of Service and Community Guidelines</li>
              <li data-lang-en="Communicate professionally and respectfully" data-lang-ru="Общайтесь профессионально и уважительно">Communicate professionally and respectfully</li>
              <li data-lang-en="Provide clear requirements and feedback for custom orders" data-lang-ru="Предоставляйте чёткие требования и обратную связь для заказов на контент">Provide clear requirements and feedback for custom orders</li>
              <li data-lang-en="Complete timely payments for purchased services" data-lang-ru="Осуществляйте своевременную оплату приобретённых услуг">Complete timely payments for purchased services</li>
              <li data-lang-en="Report any violations or inappropriate behavior to moderators" data-lang-ru="Сообщайте о нарушениях или неподобающем поведении модераторам">Report any violations or inappropriate behavior to moderators</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/auth/buyer" className="btn primary" data-lang-en="Continue to Registration" data-lang-ru="Продолжить регистрацию">Continue to Registration</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



