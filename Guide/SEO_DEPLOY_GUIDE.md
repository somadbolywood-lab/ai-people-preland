SEO Deploy Guide: Cloudflare, Google Search Console, Yandex Webmaster

Цель: быстро ввести ai-people.io в индекс Google и Яндекса. Пошаговые действия со скрин-ориентирами (что нажать и где искать).

---

1) Cloudflare (до запуска и сразу после)

1.1 Вход
- Зайдите: https://dash.cloudflare.com → войдите
- Выберите зону: ai-people.io

1.2 DNS (пока без хостинга)
- В разделе DNS ничего не меняйте (A/AAAA/CNAME добавим после выбора хостинга)
- Прокси (оранжевая туча) включим после запуска

1.3 SSL/TLS
- SSL/TLS → Overview: пока Flexible; после выпуска SSL на сервере переключите Full (strict)
- SSL/TLS → Edge Certificates: включить Always Use HTTPS и Automatic HTTPS Rewrites (HSTS позже)

1.4 Перенаправления 301
- Rules → Redirects → Create Rule:
  - If Hostname equals www.ai-people.io
  - Then Static redirect to https://ai-people.io (301)

1.5 Performance
- Speed → Optimization: включить Brotli, HTTP/2, HTTP/3, Early Hints
- Caching: Standard; Browser Cache TTL 1–4 часа

Итог: Cloudflare готов. После выбора хостинга добавим записи и включим Full (strict).

---

2) Google Search Console (GSC)

2.1 Добавление сайта (Domain property)
1. https://search.google.com/search-console → Add property
2. Вкладка Domain → введите ai-people.io → Continue
3. Скопируйте TXT google-site-verification=...
4. Cloudflare → DNS: Type TXT, Name @, Content google-site-verification=..., TTL Auto
5. Вернитесь в GSC → Verify (1–5 минут)

Скрин-ориентиры: Add property (слева сверху) → Domain → окно с TXT после Continue.

2.2 Sitemap
1. Меню Sitemaps → Add a new sitemap: https://ai-people.io/sitemap.xml → Submit

2.3 Ускорение индекса
1. URL Inspection → введите URL (например, https://ai-people.io/)
2. Request indexing
3. Повторить для: /ru, /blog, /faq, /auth/role, /auth/buyer, /auth/creator, /legal/terms, /legal/privacy, /legal/cookies (10–20 URL/день)

2.4 Проверки через сутки
- Indexing → Pages: без ошибок
- Enhancements: FAQ rich results без ошибок
- Experience → Page Experience/Core Web Vitals: появится позже

---

3) Яндекс.Вебмастер

3.1 Добавление сайта
1. https://webmaster.yandex.ru/ → Добавить сайт
2. Укажите https://ai-people.io/ → подтверждение DNS (TXT)
3. Cloudflare → DNS: добавьте TXT из окна подтверждения
4. Вернитесь → Проверить

Скрин-ориентиры: кнопка «Добавить сайт» (вверху); во всплывающем окне выбрать DNS/TXT.

3.2 Sitemap и зеркало
1. Индексирование → Файлы Sitemap → добавить https://ai-people.io/sitemap.xml
2. Настройки → Зеркала сайта → выбрать основное: https без www

3.3 Переобход страниц
1. Индексирование → Переобход страниц
2. Вставляйте URL: /, /ru, /blog, /faq, /auth/role, /auth/buyer, /auth/creator, /legal/* → Отправить

3.4 Диагностика
- Диагностика сайта: robots.txt доступен (200), блокировок нет
- Страницы в поиске: появятся после обхода

---

4) Что проверить на сайте
- https://ai-people.io/robots.txt — корректен
- https://ai-people.io/sitemap.xml — открывается, есть EN/RU, lastModified
- Canonical указывает на .io
- hreflang в <head> и в sitemap
- JSON-LD (FAQ/Organization/WebSite) валиден (Rich Results Test)
- Ключевые URL отдают 200 и https

---

5) FAQ
- Нужен ли хостинг, чтобы верифицировать домен? — Нет, верификация через DNS работает уже сейчас.
- Нужен ли SSL на сервере при Cloudflare? — Для Full (strict) да (Let’s Encrypt на origin).
- Нужны ли редиректы? — Да: www → non‑www, http → https (удобно настроить в Cloudflare Redirects).

Следующий шаг: выберем хостинг → добавим A/AAAA/CNAME, переключим SSL в Full (strict) → отправим ключевые URL в GSC/Яндекс.

