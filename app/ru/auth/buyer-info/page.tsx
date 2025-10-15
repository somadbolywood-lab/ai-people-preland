"use client";

import Image from "next/image";
import FooterRU from "../../../components/FooterRU";
import HeaderWithMenu from "../../../components/HeaderWithMenu";
import { useLanguage } from "../../../hooks/useLanguage";

export default function BuyerInfoPage() {
  // Use unified language hook - language determined by URL prefix and global state
  useLanguage();

  return (
    <div className="container home-page">
      <HeaderWithMenu homeHref="/ru" />

      <div className="notification-banner">
        <div className="notification-content">
          <span>
            🔥 Это только разогрев! Сейчас ты на прелендинге — подпишись и окажись в числе первых, кто ворвётся в проект. Ранние подписчики получают привилегии на старте. 🚀 Стартуем 01.12.2025
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
          <h1 className="unified-h1"><span className="gradient-text">Присоединяйтесь как Покупатель</span></h1>
          <h2 className="hero-subtitle">Раскройте силу AI‑моделей — усиливайте бренд, масштабируйте видение</h2>
          <h3 className="hero-description">Добро пожаловать в AI People — первый в мире курируемый маркетплейс профессиональных AI‑моделей и гиперреалистичных виртуальных инфлюенсеров. Здесь инновации встречаются с креативом: получайте доступ, настраивайте и работайте с AI‑моделями нового поколения, созданными, чтобы ваш бренд рос быстрее, выглядел сильнее и продавал эффективнее.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Зачем присоединяться к AI People</h3>
            <p>
              Представьте целую команду элитных AI‑моделей, готовых создавать контент, продвигать ваш бизнес и питать маркетинг 24/7 — без контрактов, простоев и ограничений. Это не просто цифровые изображения. Это новая экономика креатива, где ваши кампании становятся быстрее, умнее и бесконечно масштабируемыми.
            </p>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Что вы получаете</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Доступ к 18+ эксклюзивным AI‑моделям — каждая с уникальной внешностью, характером и стилем. Идеально для OnlyFans, Patreon, TikTok или любого цифрового бренда.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Более 500 готовых фото в топовых нишах: лайфстайл, фитнес, бизнес, мода, гейминг и романтика — идеально для рекламы, соцсетей или перепродажи.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>100+ премиум‑видео, созданных для вовлечения — усиливайте видимость бренда, рост в соцсетях или монетизацию по подписке.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Индивидуальный контент по запросу — заказывайте фото или видео под задачи маркетинга, кампаний или личного использования.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Приоритетная поддержка покупателей и защищённые инструменты платформы — безопасная и эффективная коммуникация с креаторами.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Регулярные дропы новых AI‑моделей и контента — будьте впереди трендов и конкурентов.</span>
              </div>
            </div>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Как AI People помогает зарабатывать и масштабироваться</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Стройте и развивайте подписочный бизнес (OnlyFans, Patreon, Boosty) — с 100% AI‑контентом, который продаётся.</li>
              <li>Продвигайте умнее — используйте оригинальные AI‑фото и видео для усиления бренда, роста эффективности рекламы и конверсий.</li>
              <li>Монетизируйте креатив — перепродавайте фото/видео‑пакеты на цифровых платформах или включайте их в собственные услуги.</li>
              <li>Экономьте время и бюджет — без найма, съёмок и монтажа. Агенское качество — сразу.</li>
              <li>Будьте эксклюзивны — заказывайте контент на заказ, которым не владеет никто другой, получая реальное конкурентное преимущество.</li>
            </ul>
            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Ваше преимущество</h3>
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>AI People — это не просто хаб контента, а ваш стратегический двигатель роста. От цифрового маркетинга до индустрии развлечений, от стартапов до зрелых брендов — вы получаете мгновенную креативную мощность, которая работает, пока вы спите.</p>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Присоединяйтесь к списку ожидания сейчас</h3>
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>Будьте среди первых, кто получит доступ к премиум‑контенту, эксклюзивным моделям и ранним пакетам до запуска маркетплейса.</p>

            <h3 className="gradient-text" style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Обязательства покупателя</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Используйте весь приобретённый контент только в законных и этичных целях</li>
              <li>Уважайте права креаторов и авторские права</li>
              <li>Следуйте нашим Условиям обслуживания и Правилам сообщества</li>
              <li>Общайтесь профессионально и уважительно</li>
              <li>Предоставляйте чёткие требования и обратную связь для заказов на контент</li>
              <li>Осуществляйте своевременную оплату приобретённых услуг</li>
              <li>Сообщайте о нарушениях или неподобающем поведении модераторам</li>
            </ul>

            <div className="call-to-action" style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/ru/auth/buyer" className="btn primary">Продолжить регистрацию</a>
            </div>
          </div>
        </section>
      </main>

      <FooterRU />
    </div>
  );
}

