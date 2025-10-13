# 🚀 AI-PEOPLE DATABASE SETUP GUIDE

> Внимание: полный Setup Guide теперь также отражён и в `database/README.md` (раздел «Установка и настройка»). Этот файл остаётся источником истины и может содержать более развёрнутые пошаговые инструкции. Ссылки и команды синхронизированы с `.io` доменами и текущей схемой.

## 📋 Содержание
1. [Системные требования](#системные-требования)
2. [Установка MySQL](#установка-mysql)
3. [Создание базы данных](#создание-базы-данных)
4. [Импорт схемы](#импорт-схемы)
5. [Тестовые данные](#тестовые-данные)
6. [Настройка приложения](#настройка-приложения)
7. [Проверка работоспособности](#проверка-работоспособности)
8. [Troubleshooting](#troubleshooting)

---

## 💻 Системные требования

### Минимальные требования:
- **MySQL:** 8.0+ или **MariaDB:** 10.5+
- **RAM:** 512 MB (рекомендуется 2+ GB)
- **Disk:** 100 MB для схемы (больше для данных)
- **OS:** Windows, Linux, macOS

### Проверка версии:
```bash
mysql --version
```

Должно быть: `mysql Ver 8.0.x` или выше

---

## 🔧 Установка MySQL

### Windows:
1. Скачать: https://dev.mysql.com/downloads/installer/
2. Запустить установщик `mysql-installer-web-community-x.x.x.msi`
3. Выбрать: **Developer Default**
4. Установить пароль для `root`
5. Проверить: Открыть командную строку → `mysql --version`

### macOS (Homebrew):
```bash
brew install mysql
brew services start mysql
mysql_secure_installation
```

### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo mysql_secure_installation
```

### Linux (CentOS/RHEL):
```bash
sudo yum install mysql-server
sudo systemctl start mysqld
sudo mysql_secure_installation
```

---

## 🗄️ Создание базы данных

### Шаг 1: Войти в MySQL
```bash
mysql -u root -p
```
Ввести пароль root

### Шаг 2: Создать базу данных
```sql
CREATE DATABASE aipeople_prelaunch 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;
```

### Шаг 3: Создать пользователя (рекомендуется)
```sql
-- Для локальной разработки
CREATE USER 'aipeople_user'@'localhost' IDENTIFIED BY 'secure_password_here';

-- Дать все права на базу
GRANT ALL PRIVILEGES ON aipeople_prelaunch.* TO 'aipeople_user'@'localhost';

-- Применить изменения
FLUSH PRIVILEGES;

-- Выйти
EXIT;
```

### Шаг 4: Проверить создание
```bash
mysql -u aipeople_user -p aipeople_prelaunch
```
Должен войти в базу без ошибок

---

## 📥 Импорт схемы

### Метод 1: Через командную строку (рекомендуется)
```bash
cd aipeople-next/database
mysql -u aipeople_user -p aipeople_prelaunch < schema.sql
```

### Метод 2: Через MySQL клиент
```bash
mysql -u aipeople_user -p aipeople_prelaunch
```
```sql
SOURCE /full/path/to/aipeople-next/database/schema.sql;
```

### Метод 3: Через phpMyAdmin
1. Открыть phpMyAdmin
2. Выбрать базу `aipeople_prelaunch`
3. Вкладка "Import" → Выбрать `schema.sql`
4. Нажать "Go"

### Проверка импорта:
```sql
USE aipeople_prelaunch;

-- Проверить таблицы
SHOW TABLES;

-- Должно показать:
-- buyer_leads
-- creator_leads
-- email_campaigns
-- lead_activity_log

-- Проверить views
SHOW FULL TABLES WHERE Table_type = 'VIEW';

-- Должно показать:
-- v_daily_lead_stats
-- v_high_quality_creators
-- v_high_value_buyers
-- v_lead_funnel
-- v_lead_sources
-- v_weekly_activity_summary

-- Проверить triggers
SHOW TRIGGERS;

-- Проверить stored procedures
SHOW PROCEDURE STATUS WHERE Db = 'aipeople_prelaunch';
```

---

## 🧪 Тестовые данные (опционально)

**⚠️ ТОЛЬКО для development/staging! НЕ использовать в production!**

### Импортировать тестовые данные:
```bash
mysql -u aipeople_user -p aipeople_prelaunch < seed_test_data.sql
```

### Что будет создано:
- ✅ **15 buyer leads** (5 high-value, 5 medium, 5 low)
- ✅ **15 creator leads** (5 high-quality, 5 medium, 5 beginners)
- ✅ **10 activity log entries**
- ✅ **4 email campaigns**
- ✅ Автоматический расчёт lead scores
- ✅ Разные статусы (new, contacted, qualified, etc.)

### Проверить тестовые данные:
```sql
-- Количество записей
SELECT 'buyers' as type, COUNT(*) as count FROM buyer_leads
UNION ALL
SELECT 'creators' as type, COUNT(*) as count FROM creator_leads;

-- Топ-5 buyers по lead score
SELECT email, name, role, monthly_budget, lead_score 
FROM buyer_leads 
ORDER BY lead_score DESC 
LIMIT 5;

-- Топ-5 creators по lead score
SELECT email, name, specialization, ai_experience, lead_score 
FROM creator_leads 
ORDER BY lead_score DESC 
LIMIT 5;

-- Статистика
SELECT * FROM v_daily_lead_stats;
```

---

## ⚙️ Настройка приложения

### Шаг 1: Создать .env файл
```bash
cd aipeople-next
cp database/database.config.example .env
```

### Шаг 2: Заполнить настройки подключения
Открыть `.env` и изменить:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=aipeople_prelaunch
DB_USER=aipeople_user
DB_PASSWORD=secure_password_here
DB_CHARSET=utf8mb4
DB_DEBUG=true
```

### Шаг 3: Установить MySQL драйвер для Node.js
```bash
npm install mysql2
# или
yarn add mysql2
```

### Шаг 4: Создать подключение (пример)
Создать файл `lib/db.ts`:
```typescript
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: process.env.DB_CHARSET || 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
```

### Шаг 5: Тестовый запрос
Создать файл `test-db-connection.ts`:
```typescript
import pool from './lib/db';

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('✅ Database connection successful!');
    console.log('Result:', rows);
    
    const [tables] = await pool.query('SHOW TABLES');
    console.log('Tables:', tables);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();
```

Запустить:
```bash
npx ts-node test-db-connection.ts
```

---

## ✅ Проверка работоспособности

### 1. Проверка подключения
```sql
SELECT 'Database connection OK' as status;
```

### 2. Проверка таблиц
```sql
SELECT 
  table_name,
  table_rows,
  ROUND(((data_length + index_length) / 1024 / 1024), 2) AS "Size (MB)"
FROM information_schema.TABLES
WHERE table_schema = 'aipeople_prelaunch'
ORDER BY table_rows DESC;
```

### 3. Проверка индексов
```sql
SELECT 
  table_name,
  index_name,
  column_name
FROM information_schema.STATISTICS
WHERE table_schema = 'aipeople_prelaunch'
ORDER BY table_name, index_name;
```

### 4. Проверка triggers
```sql
SELECT 
  TRIGGER_NAME,
  EVENT_MANIPULATION,
  EVENT_OBJECT_TABLE,
  ACTION_TIMING
FROM information_schema.TRIGGERS
WHERE TRIGGER_SCHEMA = 'aipeople_prelaunch';
```

### 5. Тест lead score calculation
```sql
-- Добавить тестовый buyer lead
INSERT INTO buyer_leads (
  email, name, role, monthly_budget, 
  use_case, ai_experience, source, 
  email_consent, terms_accepted
) VALUES (
  'test@example.com',
  'Test User',
  'business_owner',
  '5000+',
  'advertising',
  'advanced',
  'google',
  TRUE,
  TRUE
);

-- Проверить автоматически рассчитанный score
SELECT email, name, lead_score FROM buyer_leads WHERE email = 'test@example.com';
-- Должно быть: lead_score = 100 (максимальный)

-- Удалить тест
DELETE FROM buyer_leads WHERE email = 'test@example.com';
```

### 6. Тест views
```sql
-- Дневная статистика
SELECT * FROM v_daily_lead_stats LIMIT 10;

-- Источники лидов
SELECT * FROM v_lead_sources LIMIT 10;

-- High-value leads
SELECT COUNT(*) as high_value_buyers FROM v_high_value_buyers;
SELECT COUNT(*) as high_quality_creators FROM v_high_quality_creators;

-- Воронка конверсии
SELECT * FROM v_lead_funnel;
```

---

## 🔧 Troubleshooting

### Проблема 1: "Access denied for user"
**Ошибка:**
```
ERROR 1045 (28000): Access denied for user 'aipeople_user'@'localhost' (using password: YES)
```

**Решение:**
```sql
-- Войти как root
mysql -u root -p

-- Проверить пользователя
SELECT User, Host FROM mysql.user WHERE User = 'aipeople_user';

-- Пересоздать пользователя
DROP USER 'aipeople_user'@'localhost';
CREATE USER 'aipeople_user'@'localhost' IDENTIFIED BY 'new_password';
GRANT ALL PRIVILEGES ON aipeople_prelaunch.* TO 'aipeople_user'@'localhost';
FLUSH PRIVILEGES;
```

---

### Проблема 2: "Unknown database 'aipeople_prelaunch'"
**Ошибка:**
```
ERROR 1049 (42000): Unknown database 'aipeople_prelaunch'
```

**Решение:**
```sql
-- Проверить список баз
SHOW DATABASES;

-- Создать базу
CREATE DATABASE aipeople_prelaunch 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;
```

---

### Проблема 3: "Table 'buyer_leads' doesn't exist"
**Ошибка:**
```
ERROR 1146 (42S02): Table 'aipeople_prelaunch.buyer_leads' doesn't exist
```

**Решение:**
```bash
# Импортировать схему заново
mysql -u aipeople_user -p aipeople_prelaunch < schema.sql
```

---

### Проблема 4: "Trigger already exists"
**Ошибка:**
```
ERROR 1359 (HY000): Trigger already exists
```

**Решение:**
```sql
-- Удалить все triggers
DROP TRIGGER IF EXISTS trg_buyer_lead_score_insert;
DROP TRIGGER IF EXISTS trg_buyer_lead_score_update;
DROP TRIGGER IF EXISTS trg_creator_lead_score_insert;
DROP TRIGGER IF EXISTS trg_creator_lead_score_update;

-- Импортировать схему заново
SOURCE /path/to/schema.sql;
```

---

### Проблема 5: Медленные запросы
**Симптом:** Запросы выполняются > 1 секунды

**Диагностика:**
```sql
-- Проверить индексы
SHOW INDEX FROM buyer_leads;
SHOW INDEX FROM creator_leads;

-- Проверить план выполнения
EXPLAIN SELECT * FROM buyer_leads WHERE email = 'test@example.com';

-- Включить профилирование
SET profiling = 1;
SELECT * FROM v_daily_lead_stats;
SHOW PROFILES;
```

**Решение:**
```sql
-- Оптимизировать таблицы
ANALYZE TABLE buyer_leads, creator_leads, lead_activity_log;
OPTIMIZE TABLE buyer_leads, creator_leads, lead_activity_log;
```

---

### Проблема 6: "Too many connections"
**Ошибка:**
```
ERROR 1040 (HY000): Too many connections
```

**Решение:**
```sql
-- Проверить текущие подключения
SHOW PROCESSLIST;

-- Увеличить лимит (в my.cnf или my.ini)
[mysqld]
max_connections = 200

-- Перезапустить MySQL
# Linux:
sudo systemctl restart mysql
# Windows: Services → MySQL → Restart
```

---

### Проблема 7: Charset/Collation ошибки
**Ошибка:**
```
Illegal mix of collations
```

**Решение:**
```sql
-- Проверить charset базы
SELECT DEFAULT_CHARACTER_SET_NAME, DEFAULT_COLLATION_NAME
FROM information_schema.SCHEMATA
WHERE SCHEMA_NAME = 'aipeople_prelaunch';

-- Если неправильный, изменить
ALTER DATABASE aipeople_prelaunch 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

-- Изменить таблицы
ALTER TABLE buyer_leads CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE creator_leads CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

---

## 📊 Мониторинг и обслуживание

### Ежедневно:
```sql
-- Проверить количество новых лидов
SELECT COUNT(*) FROM buyer_leads WHERE DATE(created_at) = CURDATE();
SELECT COUNT(*) FROM creator_leads WHERE DATE(created_at) = CURDATE();
```

### Еженедельно:
```sql
-- Оптимизировать таблицы
OPTIMIZE TABLE buyer_leads, creator_leads, lead_activity_log;

-- Очистить старые логи (> 90 дней)
DELETE FROM lead_activity_log WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);
```

### Ежемесячно:
```bash
# Бэкап базы данных
mysqldump -u aipeople_user -p aipeople_prelaunch > backup_$(date +%Y%m%d).sql
```

---

## 🎉 Готово!

База данных установлена и готова к использованию!

### Следующие шаги:
1. ✅ Интегрировать с Next.js API routes
2. ✅ Настроить email кампании
3. ✅ Подключить аналитику
4. ✅ Настроить автоматические бэкапы

### Полезные ссылки:
- 📚 [README.md](./README.md) - Документация по базе данных
- 📊 [schema.sql](./schema.sql) - SQL схема
- 🧪 [seed_test_data.sql](./seed_test_data.sql) - Тестовые данные

---

**Вопросы?** Проверьте [Troubleshooting](#troubleshooting) или создайте issue.

