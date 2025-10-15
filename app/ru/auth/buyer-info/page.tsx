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
          <h1 className="title"><span className="gradient-text">Присоединяйтесь как Покупатель</span></h1>
          <h2 className="hero-subtitle">Доступ к премиум AI-моделям и гиперреалистичным виртуальным инфлюенсерам для вашего бизнеса</h2>
          <h3 className="hero-description">Откройте для себя первый в мире курируемый маркетплейс профессионального AI-контента. Получайте готовые пакеты или заказывайте индивидуальный контент для ваших маркетинговых кампаний.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p>
              🔥 Будущее заработка и контента — здесь! 🔥 Представьте, что у вас под рукой целая команда из десятков ИИ-моделей, готовых работать круглосуточно без выходных. Вы получаете доступ не просто к фото и видео — вы открываете новые источники дохода, инструменты для продвижения и безграничные возможности для креатива.
            </p>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Что вы получаете:</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Доступ к 18+ премиум ИИ-моделям с уникальными стилями и образами — создавайте контент, который будет выделяться на ОнлиФанс, Патреон, ТикТок или в собственных проектах.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>500+ готовых фото в самых востребованных нишах: образ жизни, фитнес, бизнес, мода, геймерские и романтические сценарии — используйте их для рекламы, соцсетей, сайтов или перепродажи.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>100+ эксклюзивных видео премиум-качества — идеальный инструмент для продвижения брендов, личных страниц и монетизации в подписочных сервисах.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Возможность заказать индивидуальный контент под ваши задачи: маркетинг, продвижение, личное использование или коммерческие проекты.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Приоритетная поддержка и безопасная связь внутри платформы.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span data-lang-en="Regular updates with new models and content — you'll always be one step ahead of the competition." data-lang-ru="Регулярные обновления с новыми моделями и контентом — всегда будете на шаг впереди конкурентов.">Регулярные обновления с новыми моделями и контентом — всегда будете на шаг впереди конкурентов.</span>
              </div>
            </div>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>💡 Как это поможет вам зарабатывать и экономить время?</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Создавайте подписочные сервисы (ОнлиФанс, Патреон, Бусти) без участия реальных моделей. ИИ-контент уже продаётся и собирает подписчиков.</li>
              <li>Продвигайте бизнес — используйте уникальные изображения и видео для рекламы продуктов, построения бренда или увеличения продаж.</li>
              <li>Станьте реселлером — перепродавайте готовые пакеты фото и видео на платформах с цифровым контентом.</li>
              <li>Экономьте время и деньги — не нужно нанимать моделей, фотографов, видеографов. Всё уже готово.</li>
              <li>Получайте контент под заказ — а значит, всегда будете иметь материалы, которых нет ни у кого.</li>
            </ul>
            
            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>⚡ Это не просто коллекция — это ваш инструмент для монетизации идей и выхода на новый уровень в цифровом пространстве. Подпишитесь на лист ожидания сейчас и получите доступ к премиум-контенту и первым релизам раньше всех!</p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Ваши обязанности:</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Используйте весь приобретенный контент исключительно в законных и легитимных целях</li>
              <li>Уважайте права креаторов, авторские права и интеллектуальную собственность</li>
              <li>Соблюдайте условия использования платформы и правила сообщества</li>
              <li>Поддерживайте уважительное и профессиональное общение через платформу</li>
              <li>Предоставляйте четкие требования и обратную связь для индивидуальных заказов</li>
              <li>Оплачивайте услуги своевременно и согласно согласованным условиям</li>
              <li>Сообщайте о любом неподходящем контенте или поведении модераторам платформы</li>
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

