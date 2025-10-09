# 🗄️ AI-PEOPLE DATABASE SCHEMA

## 📋 Содержание
- [Обзор](#обзор)
- [Быстрый старт](#быстрый-старт)
- [Структура таблиц](#структура-таблиц)
- [Views (Представления)](#views-представления)
- [Stored Procedures](#stored-procedures)
- [Примеры запросов](#примеры-запросов)
- [Миграция и обслуживание](#миграция-и-обслуживание)

---

## 🎯 Обзор

База данных для **pre-launch** кампании AI-People. Хранит лиды покупателей (buyers) и креаторов (creators), собранные через формы регистрации.

### Основные возможности:
✅ **Сбор лидов** - Buyer и Creator регистрации  
✅ **Квалификация** - Автоматический расчёт lead score (0-100)  
✅ **Аналитика** - Pre-built views для дашбордов  
✅ **Email Marketing** - Трекинг кампаний и активности  
✅ **GDPR/CCPA** - Compliance с согласиями пользователей  

---

## 🚀 Быстрый старт

### 1. Создать базу данных

```sql
CREATE DATABASE aipeople_prelaunch 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE aipeople_prelaunch;
```

### 2. Импортировать схему

```bash
mysql -u your_user -p aipeople_prelaunch < schema.sql
```

### 3. Проверить установку

```sql
SHOW TABLES;
-- Должно показать: buyer_leads, creator_leads, lead_activity_log, email_campaigns

SELECT * FROM v_daily_lead_stats LIMIT 10;
-- Проверка views
```

---

## 📊 Структура таблиц

### 🛒 `buyer_leads` - Покупатели

**Назначение:** Хранит лиды покупателей AI-контента

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | BIGINT | Уникальный ID |
| `email` | VARCHAR(255) | Email (unique) |
| `name` | VARCHAR(255) | Полное имя |
| `role` | VARCHAR(100) | business_owner, marketer, freelancer, agency, startup, other |
| `company` | VARCHAR(255) | Название компании |
| `team_size` | VARCHAR(50) | 1-10, 11-50, 51-200, 200+ |
| `use_case` | VARCHAR(100) | advertising, social_media, branding, ecommerce, other |
| `monthly_budget` | VARCHAR(50) | 0-100, 100-500, 500-1000, 1000-5000, 5000+ |
| `ai_experience` | VARCHAR(50) | never_used, beginner, intermediate, advanced |
| `source` | VARCHAR(255) | google, social_media, friend, blog, other |
| `email_consent` | BOOLEAN | Согласие на email-маркетинг |
| `terms_accepted` | BOOLEAN | Принятие условий |
| `lead_score` | INT | Автоматически рассчитывается (0-100) |
| `lead_status` | ENUM | new, contacted, qualified, unqualified, converted, lost |
| `created_at` | TIMESTAMP | Дата регистрации |

**Расчёт lead_score:**
- **Budget** (0-40): 5000+ = 40pts, 1000-5000 = 30pts, etc.
- **Role** (0-25): business_owner/agency = 25pts, startup = 20pts, etc.
- **Use Case** (0-15): advertising/branding = 15pts, etc.
- **Experience** (0-10): advanced = 10pts, etc.
- **Email Consent** (0-10): TRUE = 10pts

**Максимальный score:** 100 points

---

### 🎨 `creator_leads` - Креаторы

**Назначение:** Хранит лиды креаторов, которые хотят продавать AI-контент

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | BIGINT | Уникальный ID |
| `email` | VARCHAR(255) | Email (unique) |
| `name` | VARCHAR(255) | Полное имя |
| `username` | VARCHAR(100) | Желаемый username (unique) |
| `ai_experience` | VARCHAR(50) | beginner, intermediate, 1-2years, 3plus_years |
| `specialization` | VARCHAR(100) | photo, video, 3d, mixed, other |
| `platforms` | JSON | ["midjourney", "stable_diffusion", "flux", etc.] |
| `expected_monthly_income` | VARCHAR(50) | 0-500, 500-1000, 1000-3000, 3000-5000, 5000+ |
| `ready_content_count` | VARCHAR(50) | 0-1, 2-5, 6-10, 11+ |
| `monthly_production_capacity` | VARCHAR(50) | 0-1, 2-3, 4-6, 7+ |
| `source` | VARCHAR(255) | google, social_media, friend, blog, other |
| `email_consent` | BOOLEAN | Согласие на email-маркетинг |
| `terms_accepted` | BOOLEAN | Принятие условий |
| `content_rights_confirmed` | BOOLEAN | Подтверждение прав на контент |
| `lead_score` | INT | Автоматически рассчитывается (0-100) |
| `lead_status` | ENUM | new, contacted, portfolio_review, approved, rejected, onboarded |
| `portfolio_quality` | ENUM | not_reviewed, excellent, good, average, needs_improvement |
| `created_at` | TIMESTAMP | Дата регистрации |

**Расчёт lead_score:**
- **Experience** (0-25): 3+ years = 25pts, 1-2 years = 20pts, etc.
- **Ready Content** (0-25): 11+ = 25pts, 6-10 = 20pts, etc.
- **Production** (0-20): 7+ = 20pts, 4-6 = 15pts, etc.
- **Platforms** (0-15): 5+ = 15pts, 3+ = 10pts, 1+ = 5pts
- **Consents** (0-15): email = 7pts, rights = 8pts

**Максимальный score:** 100 points

**Доступные платформы:**
```json
[
  "midjourney", "stable_diffusion", "dall_e", "leonardo_ai", "flux",
  "seaart", "nanabanana", "ideogram", "krea_ai", "magnific_ai"
]
```

---

### 📈 `lead_activity_log` - Лог активности

**Назначение:** Трекинг всех действий лидов для аналитики

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | BIGINT | Уникальный ID |
| `lead_type` | ENUM | buyer / creator |
| `lead_id` | BIGINT | ID лида |
| `activity_type` | VARCHAR(100) | Тип активности |
| `activity_data` | JSON | Структурированные данные |
| `page_url` | VARCHAR(512) | URL страницы |
| `session_id` | VARCHAR(255) | ID сессии |
| `created_at` | TIMESTAMP | Время события |

**Примеры activity_type:**
- `form_submitted` - Форма отправлена
- `form_step_completed` - Шаг wizard завершён
- `email_opened` - Email открыт
- `link_clicked` - Клик по ссылке
- `page_viewed` - Просмотр страницы

---

### 📧 `email_campaigns` - Email кампании

**Назначение:** Управление email-маркетингом

| Поле | Тип | Описание |
|------|-----|----------|
| `id` | BIGINT | Уникальный ID |
| `campaign_name` | VARCHAR(255) | Название кампании |
| `campaign_type` | ENUM | welcome, nurture, launch_announcement, follow_up, promotional |
| `target_audience` | ENUM | buyers, creators, both |
| `subject_line` | VARCHAR(255) | Тема письма |
| `status` | ENUM | draft, scheduled, sending, sent, paused, cancelled |
| `total_sent` | INT | Всего отправлено |
| `total_opened` | INT | Всего открыто |
| `total_clicked` | INT | Всего кликов |
| `scheduled_at` | TIMESTAMP | Время отправки |

---

## 📊 Views (Представления)

### 1. `v_daily_lead_stats` - Дневная статистика

```sql
SELECT * FROM v_daily_lead_stats 
WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
ORDER BY date DESC;
```

**Результат:**
```
| date       | lead_type | leads_count | unique_sources | avg_lead_score |
|------------|-----------|-------------|----------------|----------------|
| 2025-10-07 | buyer     | 45          | 5              | 67.3           |
| 2025-10-07 | creator   | 32          | 4              | 72.1           |
```

---

### 2. `v_lead_sources` - Атрибуция источников

```sql
SELECT * FROM v_lead_sources 
ORDER BY total_leads DESC;
```

**Результат:**
```
| lead_type | source       | total_leads | converted_leads | avg_lead_score | percentage |
|-----------|--------------|-------------|-----------------|----------------|------------|
| buyer     | google       | 120         | 15              | 68.5           | 35.2%      |
| buyer     | social_media | 95          | 8               | 62.3           | 27.8%      |
```

---

### 3. `v_high_value_buyers` - Топ покупатели

```sql
SELECT * FROM v_high_value_buyers LIMIT 20;
```

**Критерии:** budget >= $1000 OR lead_score >= 70 OR role = business_owner/agency

---

### 4. `v_high_quality_creators` - Топ креаторы

```sql
SELECT * FROM v_high_quality_creators LIMIT 20;
```

**Критерии:** ready_content >= 6 OR experience >= 1-2 years OR lead_score >= 70

---

### 5. `v_lead_funnel` - Воронка конверсии

```sql
SELECT * FROM v_lead_funnel;
```

**Результат:**
```
| lead_type | total_leads | contacted | qualified | converted | conversion_rate |
|-----------|-------------|-----------|-----------|-----------|-----------------|
| buyer     | 450         | 320       | 180       | 42        | 9.33%           |
| creator   | 380         | 290       | 210       | 85        | 22.37%          |
```

---

## ⚙️ Stored Procedures

### 1. Расчёт buyer lead score

```sql
CALL sp_calculate_buyer_lead_score(123);
```

**Автоматически вызывается при:**
- INSERT в `buyer_leads`
- UPDATE полей: `monthly_budget`, `role`, `use_case`, `ai_experience`, `email_consent`

---

### 2. Расчёт creator lead score

```sql
CALL sp_calculate_creator_lead_score(456);
```

**Автоматически вызывается при:**
- INSERT в `creator_leads`
- UPDATE полей: `ai_experience`, `ready_content_count`, `monthly_production_capacity`, `platforms`, `email_consent`, `content_rights_confirmed`

---

## 💡 Примеры запросов

### Добавить buyer лида

```sql
INSERT INTO buyer_leads (
  email, name, role, company, team_size, 
  use_case, monthly_budget, ai_experience, 
  source, email_consent, terms_accepted
) VALUES (
  'john@example.com', 
  'John Smith', 
  'business_owner', 
  'Acme Corp', 
  '11-50',
  'advertising', 
  '1000-5000', 
  'intermediate', 
  'google', 
  TRUE, 
  TRUE
);

-- lead_score будет автоматически рассчитан триггером
```

---

### Добавить creator лида

```sql
INSERT INTO creator_leads (
  email, name, username, ai_experience, 
  specialization, platforms, 
  expected_monthly_income, ready_content_count, 
  monthly_production_capacity, source,
  email_consent, terms_accepted, content_rights_confirmed
) VALUES (
  'alice@example.com',
  'Alice Johnson',
  'alice_ai_art',
  '1-2years',
  'photo',
  '["midjourney", "stable_diffusion", "leonardo_ai"]',
  '1000-3000',
  '6-10',
  '4-6',
  'social_media',
  TRUE,
  TRUE,
  TRUE
);

-- lead_score будет автоматически рассчитан триггером
```

---

### Найти высокобюджетных buyers

```sql
SELECT 
  email, name, company, monthly_budget, lead_score, created_at
FROM buyer_leads
WHERE 
  monthly_budget IN ('1000-5000', '5000+')
  AND lead_status = 'new'
ORDER BY lead_score DESC
LIMIT 50;
```

---

### Найти ready-to-onboard креаторов

```sql
SELECT 
  email, name, username, specialization, 
  ready_content_count, monthly_production_capacity, 
  lead_score, portfolio_quality
FROM creator_leads
WHERE 
  ready_content_count IN ('6-10', '11+')
  AND ai_experience IN ('1-2years', '3plus_years')
  AND content_rights_confirmed = TRUE
  AND lead_status NOT IN ('rejected', 'onboarded')
ORDER BY lead_score DESC
LIMIT 30;
```

---

### Логировать активность

```sql
INSERT INTO lead_activity_log (
  lead_type, lead_id, activity_type, activity_data
) VALUES (
  'buyer',
  123,
  'email_opened',
  '{"campaign_id": 5, "email_subject": "Welcome to AI-People"}'
);
```

---

### Статистика источников за неделю

```sql
SELECT 
  lead_type,
  source,
  COUNT(*) as new_leads,
  AVG(lead_score) as avg_score
FROM (
  SELECT 'buyer' as lead_type, source, lead_score, created_at 
  FROM buyer_leads
  UNION ALL
  SELECT 'creator' as lead_type, source, lead_score, created_at 
  FROM creator_leads
) as all_leads
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY lead_type, source
ORDER BY new_leads DESC;
```

---

### Обновить статус лида

```sql
-- Перевести в "contacted"
UPDATE buyer_leads 
SET 
  lead_status = 'contacted',
  contacted_at = NOW(),
  priority = 'high'
WHERE id = 123;

-- Перевести креатора в review
UPDATE creator_leads 
SET 
  lead_status = 'portfolio_review',
  contacted_at = NOW(),
  notes = 'Portfolio looks promising, high-quality photo content'
WHERE id = 456;
```

---

### Найти дубликаты email

```sql
-- Email, зарегистрированные как buyer И creator
SELECT 
  b.email,
  b.name as buyer_name,
  c.name as creator_name,
  b.created_at as buyer_registered,
  c.created_at as creator_registered
FROM buyer_leads b
INNER JOIN creator_leads c ON b.email = c.email;
```

---

## 🔧 Миграция и обслуживание

### Бэкап базы данных

```bash
# Полный бэкап
mysqldump -u user -p aipeople_prelaunch > backup_$(date +%Y%m%d).sql

# Только структура (без данных)
mysqldump -u user -p --no-data aipeople_prelaunch > schema_backup.sql

# Только данные (без структуры)
mysqldump -u user -p --no-create-info aipeople_prelaunch > data_backup.sql
```

---

### Восстановление из бэкапа

```bash
mysql -u user -p aipeople_prelaunch < backup_20251007.sql
```

---

### Очистка старых логов

```sql
-- Удалить activity_log старше 90 дней
DELETE FROM lead_activity_log 
WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);

-- Проверить размер логов перед удалением
SELECT 
  COUNT(*) as total_records,
  MIN(created_at) as oldest,
  MAX(created_at) as newest
FROM lead_activity_log;
```

---

### Оптимизация таблиц

```sql
-- Анализ таблиц
ANALYZE TABLE buyer_leads, creator_leads, lead_activity_log;

-- Оптимизация таблиц
OPTIMIZE TABLE buyer_leads, creator_leads, lead_activity_log;

-- Проверка размера таблиц
SELECT 
  table_name,
  ROUND(((data_length + index_length) / 1024 / 1024), 2) AS "Size (MB)"
FROM information_schema.TABLES
WHERE table_schema = 'aipeople_prelaunch'
ORDER BY (data_length + index_length) DESC;
```

---

### GDPR: Удаление данных пользователя

```sql
-- Удалить все данные пользователя (GDPR right to be forgotten)
START TRANSACTION;

-- Удалить activity logs
DELETE FROM lead_activity_log 
WHERE (lead_type = 'buyer' AND lead_id = (SELECT id FROM buyer_leads WHERE email = 'user@example.com'))
   OR (lead_type = 'creator' AND lead_id = (SELECT id FROM creator_leads WHERE email = 'user@example.com'));

-- Удалить buyer lead
DELETE FROM buyer_leads WHERE email = 'user@example.com';

-- Удалить creator lead
DELETE FROM creator_leads WHERE email = 'user@example.com';

COMMIT;
```

---

### Мониторинг производительности

```sql
-- Медленные запросы
SELECT * FROM mysql.slow_log 
ORDER BY query_time DESC 
LIMIT 10;

-- Использование индексов
EXPLAIN SELECT * FROM buyer_leads WHERE email = 'test@example.com';

-- Статистика по таблицам
SHOW TABLE STATUS FROM aipeople_prelaunch;
```

---

## 📈 Дашборд метрики (для BI-систем)

### KPIs для отслеживания

```sql
-- 1. Total Leads (последние 30 дней)
SELECT 
  COUNT(*) as total_buyers
FROM buyer_leads 
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);

SELECT 
  COUNT(*) as total_creators
FROM creator_leads 
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- 2. Average Lead Score
SELECT 
  ROUND(AVG(lead_score), 2) as avg_buyer_score
FROM buyer_leads
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- 3. Email Consent Rate
SELECT 
  ROUND(SUM(CASE WHEN email_consent = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) as consent_rate
FROM buyer_leads
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);

-- 4. High-Value Leads Count
SELECT COUNT(*) FROM v_high_value_buyers;
SELECT COUNT(*) FROM v_high_quality_creators;

-- 5. Top 5 Traffic Sources
SELECT source, COUNT(*) as leads
FROM (
  SELECT source FROM buyer_leads
  UNION ALL
  SELECT source FROM creator_leads
) as all_sources
GROUP BY source
ORDER BY leads DESC
LIMIT 5;
```

---

## 🔐 Безопасность

### Создать read-only пользователя (для аналитики)

```sql
CREATE USER 'analytics'@'localhost' IDENTIFIED BY 'secure_password';
GRANT SELECT ON aipeople_prelaunch.* TO 'analytics'@'localhost';
FLUSH PRIVILEGES;
```

---

### Создать пользователя для API

```sql
CREATE USER 'api_user'@'%' IDENTIFIED BY 'secure_password';
GRANT SELECT, INSERT, UPDATE ON aipeople_prelaunch.buyer_leads TO 'api_user'@'%';
GRANT SELECT, INSERT, UPDATE ON aipeople_prelaunch.creator_leads TO 'api_user'@'%';
GRANT INSERT ON aipeople_prelaunch.lead_activity_log TO 'api_user'@'%';
FLUSH PRIVILEGES;
```

---

## 📞 Поддержка

При возникновении проблем проверьте:

1. **Ошибки подключения:** `mysql -u user -p -e "SELECT 1"`
2. **Проверка схемы:** `SHOW TABLES; DESCRIBE buyer_leads;`
3. **Логи MySQL:** `/var/log/mysql/error.log`
4. **Триггеры активны:** `SHOW TRIGGERS;`
5. **Views существуют:** `SHOW FULL TABLES WHERE Table_type = 'VIEW';`

---

**🎉 База данных готова к использованию!**

