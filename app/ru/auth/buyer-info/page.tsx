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
          <h1 className="unified-h1"><span className="gradient-text">Присоединяйтесь как Креатор</span></h1>
          <h2 className="hero-subtitle">Монетизируйте свой AI-талант — Создавайте. Зарабатывайте. Растите глобально.</h2>
          <h3 className="hero-description">Добро пожаловать в AI People — первый курируемый маркетплейс для AI-моделей, виртуальных инфлюенсеров и профессионального AI-контента. Здесь ваше творчество встречается с возможностями: публикуйте свои гиперреалистичные AI-генерированные модели, фото и видео — и начинайте зарабатывать с каждой продажи по всему миру.</h3>
        </section>

        <section className="content-section" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          <div className="content-block">
            <p>
              Добро пожаловать в AI People — первый курируемый маркетплейс для AI-моделей, виртуальных инфлюенсеров и профессионального AI-контента. Здесь ваше творчество встречается с возможностями: публикуйте свои гиперреалистичные AI-генерированные модели, фото и видео — и начинайте зарабатывать с каждой продажи по всему миру.
            </p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Почему создавать с AI People</h3>
            <p>
              Вы приносите искусство — мы приносим аудиторию. Наша платформа соединяет талантливых AI-креаторов с глобальными покупателями: агентствами, брендами, инфлюенсерами и предпринимателями, ищущими высококачественный AI-контент для маркетинга, социальных сетей и цифрового сторителлинга. Вы сосредотачиваетесь на создании. Мы занимаемся остальным — маркетингом, продвижением и гарантированными криптоплатежами.
            </p>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Что вы получаете</h3>
            <div className="role-benefits" style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>75% от выручки — прозрачно и справедливо. Вы получаете большую часть того, что зарабатываете.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Без KYC до 10,000 USDT — быстрые, безграничные криптоплатежи.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Гарантированные платежи — никакого риска мошенничества или неоплаченных заказов.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Анонимность и безопасность — всё общение происходит внутри платформы.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Полная маркетинговая поддержка — мы продвигаем ваш контент глобально для максимизации охвата и продаж.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Защита транзакций — платформа выступает гарантом эскроу для каждой сделки.</span>
              </div>
              <div className="benefit-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Долгосрочное партнёрство — непрерывный рост, стабильный доход и постоянные покупатели.</span>
              </div>
            </div>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Почему это выгодно для вас</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Монетизируйте без ограничений — загрузите свой AI-контент один раз и зарабатывайте повторно с каждой продажи.</li>
              <li>Работайте откуда угодно — все платежи в криптовалюте, никаких банковских ограничений или географических лимитов.</li>
              <li>Мы занимаемся продвижением — ваш портфель продвигается проверенным международным покупателям.</li>
              <li>Приоритет для профессионалов — мы выделяем креаторов с видением, стилем и последовательностью.</li>
              <li>Фокус на востребованных нишах — лайфстайл, бизнес, мода, фитнес, гейминг и NSFW (18+) — один из самых прибыльных и быстрорастущих AI-сегментов.</li>
              <li>Создавайте личный бренд — становитесь признанным AI-креатором с глобальной аудиторией.</li>
            </ul>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Ваша роль как креатора</h3>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Создавайте оригинальный, высококачественный AI-генерированный контент — модели, фото или видео, соответствующие стандартам платформы.</li>
              <li>Выполняйте индивидуальные заказы вовремя и согласно спецификациям клиента.</li>
              <li>Постоянно улучшайте свои AI-навыки — оставайтесь впереди трендов и инструментов.</li>
              <li>Поддерживайте профессиональное общение с командой AI People и покупателями.</li>
              <li>Соблюдайте этические и правовые стандарты во всей творческой работе.</li>
            </ul>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Обязательства креатора</h3>
            <p>Для обеспечения доверия и высокого качества на нашем маркетплейсе:</p>
            <ul style={{marginLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
              <li>Создавайте только оригинальный и соответствующий требованиям AI-контент.</li>
              <li>Уважайте законы об интеллектуальной собственности и авторских правах.</li>
              <li>Следуйте стандартам платформы и правилам контента.</li>
              <li>Предоставляйте точные превью и описания для каждого размещения.</li>
              <li>Оперативно и профессионально общайтесь с командой.</li>
              <li>Выполняйте индивидуальный контент в согласованные сроки.</li>
              <li>Поддерживайте портфель, отражающий постоянное качество и улучшение.</li>
            </ul>

            <h3 style={{marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem'}}>Ваше будущее начинается здесь</h3>
            <p>
              Будь вы AI-художником, дизайнером или цифровым визионером — это ваше пространство для превращения творчества в доход, а таланта — в признание. AI People даёт возможность работать независимо, зарабатывать глобально и расти как часть сообщества креаторов-первопроходцев.
            </p>

            <p className="role-cta-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>🌍 Присоединяйтесь к списку ожидания уже сейчас. Станьте одним из первых креаторов с ранним доступом, зарабатывайте криптовалюту на ваших AI-моделях и строите своё имя на самом быстрорастущем цифровом рынке мира.</p>
            
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
              <a href="/ru/auth/creator" className="btn primary">Продолжить регистрацию</a>
            </div>
          </div>
        </section>
      </main>

      <FooterRU />
    </div>
  );
}

