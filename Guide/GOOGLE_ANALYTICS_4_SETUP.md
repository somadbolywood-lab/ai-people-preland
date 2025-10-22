# 📊 ГАЙД: НАСТРОЙКА GOOGLE ANALYTICS 4

## 🎯 ЦЕЛЬ
Настроить Google Analytics 4 для отслеживания Web Vitals, конверсий и пользовательского поведения на сайте AI-People.

---

## 📋 ЭТАП 1: СОЗДАНИЕ АККАУНТА

### 1.1 Регистрация в Google Analytics
1. Перейдите на [analytics.google.com](https://analytics.google.com)
2. Нажмите **"Начать измерение"**
3. Войдите в Google аккаунт или создайте новый
4. Нажмите **"Создать аккаунт"**

### 1.2 Настройка аккаунта
```
Название аккаунта: AI-People Analytics
Страна: United States
Валюта: USD
```

### 1.3 Создание ресурса
```
Название ресурса: AI-People Website
URL веб-сайта: https://ai-people.io
Отрасль: Technology
Размер компании: 1-10 сотрудников
```

### 1.4 Настройка потока данных
```
Платформа: Веб
URL веб-сайта: https://ai-people.io
Название потока: AI-People Main Site
```

---

## 🔑 ЭТАП 2: ПОЛУЧЕНИЕ КЛЮЧЕЙ

### 2.1 Получение Measurement ID
1. В Google Analytics перейдите в **"Администратор"**
2. Выберите ваш ресурс
3. В разделе **"Потоки данных"** нажмите на ваш веб-поток
4. Скопируйте **"Идентификатор измерения"** (формат: G-XXXXXXXXXX)

### 2.2 Получение Google Tag Manager ID (опционально)
1. Перейдите на [tagmanager.google.com](https://tagmanager.google.com)
2. Создайте контейнер для веб-сайта
3. Скопируйте **"Идентификатор контейнера"** (формат: GTM-XXXXXXX)

---

## 💻 ЭТАП 3: ИНТЕГРАЦИЯ В КОД

### 3.1 Добавление Google Analytics в layout.tsx

Откройте файл `aipeople-next/app/layout.tsx` и добавьте:

```typescript
// В секцию <head>, после других скриптов
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        custom_map: {
          'custom_parameter_1': 'web_vitals_rating',
          'custom_parameter_2': 'user_type'
        }
      });
    `,
  }}
/>
```

### 3.2 Настройка переменной окружения

Создайте файл `.env.local`:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 3.3 Обновление layout.tsx с переменными

```typescript
// В начале файла
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// В секции <head>
{GA_MEASUREMENT_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            custom_map: {
              'custom_parameter_1': 'web_vitals_rating',
              'custom_parameter_2': 'user_type'
            }
          });
        `,
      }}
    />
  </>
)}
```

---

## 🎯 ЭТАП 4: НАСТРОЙКА ЦЕЛЕЙ И СОБЫТИЙ

### 4.1 Настройка целей в Google Analytics

1. Перейдите в **"Администратор"** → **"Цели"**
2. Создайте следующие цели:

#### Цель 1: Регистрация пользователя
```
Тип цели: Событие
Название: User Registration
Событие: registration_complete
```

#### Цель 2: Просмотр блога
```
Тип цели: Событие
Название: Blog View
Событие: blog_view
```

#### Цель 3: Отправка формы
```
Тип цели: Событие
Название: Form Submit
Событие: form_submit
```

### 4.2 Настройка пользовательских событий

Добавьте в компоненты кнопки с отслеживанием:

```typescript
// Пример для кнопки регистрации
<button 
  onClick={() => {
    // Ваш код
    gtag('event', 'registration_start', {
      event_category: 'engagement',
      event_label: 'buyer_registration'
    });
  }}
>
  Зарегистрироваться
</button>
```

---

## 📊 ЭТАП 5: НАСТРОЙКА WEB VITALS

### 5.1 Автоматическое отслеживание

Наш скрипт `web-vitals.js` уже настроен для отправки данных в Google Analytics. Убедитесь, что:

1. Google Analytics загружен до Web Vitals скрипта
2. В консоли браузера нет ошибок
3. События `web_vitals` появляются в Real-time отчетах

### 5.2 Проверка Web Vitals

1. Откройте Google Analytics
2. Перейдите в **"Отчеты"** → **"В реальном времени"**
3. Откройте ваш сайт в новой вкладке
4. Проверьте появление событий `web_vitals`

---

## 🔍 ЭТАП 6: НАСТРОЙКА ОТЧЕТОВ

### 6.1 Создание пользовательских отчетов

1. Перейдите в **"Исследования"** → **"Создать исследование"**
2. Создайте отчет **"Web Vitals Performance"**:

```
Метрики:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)  
- CLS (Cumulative Layout Shift)

Измерения:
- Страница
- Источник трафика
- Устройство
```

### 6.2 Настройка уведомлений

1. Перейдите в **"Администратор"** → **"Уведомления"**
2. Создайте уведомления для:
   - Резкое падение трафика
   - Высокие показатели отказов
   - Проблемы с Web Vitals

---

## 🧪 ЭТАП 7: ТЕСТИРОВАНИЕ

### 7.1 Проверка установки

1. Откройте сайт в браузере
2. Откройте **Developer Tools** (F12)
3. Перейдите в **Console**
4. Выполните команду: `gtag('event', 'test_event', {event_category: 'test'})`
5. Проверьте в Google Analytics → **Real-time** → **Events**

### 7.2 Проверка Web Vitals

1. Откройте **Network** вкладку в DevTools
2. Обновите страницу
3. Проверьте отправку событий `web_vitals`
4. Убедитесь, что данные поступают в Google Analytics

### 7.3 Проверка целей

1. Выполните действия, которые должны отслеживаться
2. Проверьте в **Real-time** → **Conversions**
3. Убедитесь, что цели срабатывают

---

## 📈 ЭТАП 8: МОНИТОРИНГ И ОПТИМИЗАЦИЯ

### 8.1 Еженедельные проверки

- **Трафик**: Количество пользователей и сессий
- **Web Vitals**: Показатели производительности
- **Конверсии**: Достижение целей
- **Ошибки**: Проблемы с отслеживанием

### 8.2 Оптимизация на основе данных

- **Медленные страницы**: Оптимизация на основе Web Vitals
- **Низкие конверсии**: A/B тестирование элементов
- **Высокие отказы**: Улучшение UX

---

## 🚨 РЕШЕНИЕ ПРОБЛЕМ

### Проблема: События не отслеживаются
**Решение:**
1. Проверьте правильность Measurement ID
2. Убедитесь, что скрипт загружается
3. Проверьте блокировщики рекламы

### Проблема: Web Vitals не отправляются
**Решение:**
1. Проверьте загрузку `web-vitals.js`
2. Убедитесь, что `gtag` функция доступна
3. Проверьте консоль на ошибки

### Проблема: Данные не появляются в отчетах
**Решение:**
1. Подождите 24-48 часов для обработки
2. Проверьте фильтры в отчетах
3. Убедитесь в правильности настройки целей

---

## 📞 ПОДДЕРЖКА

### Полезные ресурсы:
- [Google Analytics Help](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Web Vitals Documentation](https://web.dev/vitals/)

### Контакты:
- **Email**: feedback@ai-people.io
- **Документация**: [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

---

## ✅ ЧЕКЛИСТ ЗАВЕРШЕНИЯ

- [ ] Создан аккаунт Google Analytics
- [ ] Получен Measurement ID
- [ ] Добавлен код в layout.tsx
- [ ] Настроены переменные окружения
- [ ] Созданы цели и события
- [ ] Протестирована отправка данных
- [ ] Настроены отчеты
- [ ] Проверена работа Web Vitals
- [ ] Настроены уведомления
- [ ] Документированы настройки

---

**🎉 ПОЗДРАВЛЯЕМ! Google Analytics 4 успешно настроен для AI-People!**
