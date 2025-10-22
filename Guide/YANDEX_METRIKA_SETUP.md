# 📊 ГАЙД: НАСТРОЙКА ЯНДЕКС.МЕТРИКИ

## 🎯 ЦЕЛЬ
Настроить Яндекс.Метрику для отслеживания российского трафика, Web Vitals и конверсий на сайте AI-People.

---

## 📋 ЭТАП 1: СОЗДАНИЕ СЧЕТЧИКА

### 1.1 Регистрация в Яндекс.Метрике
1. Перейдите на [metrika.yandex.ru](https://metrika.yandex.ru)
2. Нажмите **"Добавить счетчик"**
3. Войдите в Яндекс аккаунт или создайте новый
4. Нажмите **"Создать счетчик"**

### 1.2 Настройка счетчика
```
Название сайта: AI-People Marketplace
Адрес сайта: https://ai-people.io
Категория сайта: Интернет-магазины
Часовой пояс: UTC+3 (Москва)
```

### 1.3 Дополнительные настройки
```
✅ Вебвизор (запись действий пользователей)
✅ Карта кликов
✅ Карта скроллинга
✅ Анализ форм
✅ Отслеживание хешей в адресной строке
✅ Отслеживание файлов
✅ Внешние ссылки
✅ Точный показатель отказов
✅ Отслеживание загрузки страниц
```

---

## 🔑 ЭТАП 2: ПОЛУЧЕНИЕ КЛЮЧЕЙ

### 2.1 Получение ID счетчика
1. После создания счетчика скопируйте **"Номер счетчика"** (формат: XXXXXXXX)
2. Сохраните этот номер - он понадобится для интеграции

### 2.2 Получение кода верификации
1. В настройках счетчика найдите **"Код верификации"**
2. Скопируйте код (формат: 32-символьная строка)
3. Этот код нужен для подтверждения владения сайтом

---

## 💻 ЭТАП 3: ИНТЕГРАЦИЯ В КОД

### 3.1 Добавление Яндекс.Метрики в layout.tsx

Откройте файл `aipeople-next/app/layout.tsx` и добавьте:

```typescript
// В секцию <head>, после других скриптов
<Script
  id="yandex-metrika"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        trackHash:true,
        defer:true,
        ecommerce:true,
        userParams:true
      });
    `,
  }}
/>

{/* NoScript версия */}
<noscript>
  <div>
    <img src="https://mc.yandex.ru/watch/XXXXXXXX" style="position:absolute; left:-9999px;" alt="" />
  </div>
</noscript>
```

### 3.2 Настройка переменной окружения

Создайте файл `.env.local`:
```bash
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX
NEXT_PUBLIC_YANDEX_VERIFICATION_CODE=your_verification_code_here
```

### 3.3 Обновление layout.tsx с переменными

```typescript
// В начале файла
const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
const YANDEX_VERIFICATION_CODE = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE;

// В секции <head>
{YANDEX_METRIKA_ID && (
  <>
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(${YANDEX_METRIKA_ID}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            trackHash:true,
            defer:true,
            ecommerce:true,
            userParams:true
          });
        `,
      }}
    />
    <noscript>
      <div>
        <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`} style={{position:'absolute', left:'-9999px'}} alt="" />
      </div>
    </noscript>
  </>
)}

{/* Код верификации для Яндекс.Вебмастера */}
{YANDEX_VERIFICATION_CODE && (
  <meta name="yandex-verification" content={YANDEX_VERIFICATION_CODE} />
)}
```

### 3.4 Инициализация в нашем скрипте

Добавьте в начало `yandex-metrika.js`:

```javascript
// Установка глобальной переменной для инициализации
window.YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || 'XXXXXXXX';
```

---

## 🎯 ЭТАП 4: НАСТРОЙКА ЦЕЛЕЙ

### 4.1 Создание целей в Яндекс.Метрике

1. Перейдите в **"Настройки"** → **"Цели"**
2. Нажмите **"Добавить цель"**

#### Цель 1: Регистрация покупателя
```
Название: Buyer Registration
Тип: JavaScript-событие
Идентификатор: buyer_registration
```

#### Цель 2: Регистрация креатора
```
Название: Creator Registration  
Тип: JavaScript-событие
Идентификатор: creator_registration
```

#### Цель 3: Просмотр блога
```
Название: Blog View
Тип: JavaScript-событие
Идентификатор: blog_view
```

#### Цель 4: Отправка формы
```
Название: Form Submit
Тип: JavaScript-событие
Идентификатор: form_submit
```

### 4.2 Настройка пользовательских событий

Добавьте в компоненты кнопки с отслеживанием:

```typescript
// Пример для кнопки регистрации покупателя
<button 
  data-ym-goal="buyer_registration"
  data-ym-params='{"user_type": "buyer", "source": "homepage"}'
  onClick={() => {
    // Ваш код регистрации
    window.ym(window.YANDEX_METRIKA_ID, 'reachGoal', 'buyer_registration', {
      user_type: 'buyer',
      source: 'homepage'
    });
  }}
>
  Стать покупателем
</button>

// Пример для кнопки регистрации креатора
<button 
  data-ym-goal="creator_registration"
  data-ym-params='{"user_type": "creator", "source": "homepage"}'
  onClick={() => {
    // Ваш код регистрации
    window.ym(window.YANDEX_METRIKA_ID, 'reachGoal', 'creator_registration', {
      user_type: 'creator',
      source: 'homepage'
    });
  }}
>
  Стать креатором
</button>
```

---

## 📊 ЭТАП 5: НАСТРОЙКА WEB VITALS

### 5.1 Автоматическое отслеживание

Наш скрипт `yandex-metrika.js` уже настроен для отправки Web Vitals в Яндекс.Метрику. Убедитесь, что:

1. Яндекс.Метрика загружена до Web Vitals скрипта
2. В консоли браузера нет ошибок
3. События `web_vitals_*` появляются в отчетах

### 5.2 Создание целей для Web Vitals

Добавьте в Яндекс.Метрике цели:

```
web_vitals_lcp - Largest Contentful Paint
web_vitals_fid - First Input Delay
web_vitals_cls - Cumulative Layout Shift
page_load_time - Время загрузки страницы
memory_usage - Использование памяти
```

---

## 🔍 ЭТАП 6: НАСТРОЙКА ОТЧЕТОВ

### 6.1 Создание пользовательских отчетов

1. Перейдите в **"Отчеты"** → **"Создать отчет"**
2. Создайте отчет **"Производительность сайта"**:

```
Метрики:
- Показатель отказов
- Время на сайте
- Глубина просмотра
- Web Vitals события

Измерения:
- Страница
- Источник
- Устройство
- Браузер
```

### 6.2 Настройка сегментов

Создайте сегменты для анализа:

```
Сегмент 1: Покупатели
- Цель: buyer_registration

Сегмент 2: Креаторы  
- Цель: creator_registration

Сегмент 3: Читатели блога
- Цель: blog_view
```

---

## 🧪 ЭТАП 7: ТЕСТИРОВАНИЕ

### 7.1 Проверка установки

1. Откройте сайт в браузере
2. Откройте **Developer Tools** (F12)
3. Перейдите в **Console**
4. Выполните команду: `ym(window.YANDEX_METRIKA_ID, 'reachGoal', 'test_goal')`
5. Проверьте в Яндекс.Метрике → **Отчеты** → **В реальном времени**

### 7.2 Проверка Web Vitals

1. Откройте **Network** вкладку в DevTools
2. Обновите страницу
3. Проверьте отправку событий `web_vitals_*`
4. Убедитесь, что данные поступают в Яндекс.Метрику

### 7.3 Проверка целей

1. Выполните действия, которые должны отслеживаться
2. Проверьте в **В реальном времени** → **Цели**
3. Убедитесь, что цели срабатывают

---

## 📈 ЭТАП 8: МОНИТОРИНГ И ОПТИМИЗАЦИЯ

### 8.1 Еженедельные проверки

- **Трафик**: Количество визитов и посетителей
- **Web Vitals**: Показатели производительности
- **Конверсии**: Достижение целей
- **Вебвизор**: Записи действий пользователей

### 8.2 Оптимизация на основе данных

- **Медленные страницы**: Оптимизация на основе Web Vitals
- **Низкие конверсии**: A/B тестирование элементов
- **Высокие отказы**: Улучшение UX на основе вебвизора

---

## 🚨 РЕШЕНИЕ ПРОБЛЕМ

### Проблема: Счетчик не загружается
**Решение:**
1. Проверьте правильность ID счетчика
2. Убедитесь, что скрипт загружается
3. Проверьте блокировщики рекламы

### Проблема: Web Vitals не отправляются
**Решение:**
1. Проверьте загрузку `yandex-metrika.js`
2. Убедитесь, что `ym` функция доступна
3. Проверьте консоль на ошибки

### Проблема: Данные не появляются в отчетах
**Решение:**
1. Подождите 2-4 часа для обработки
2. Проверьте фильтры в отчетах
3. Убедитесь в правильности настройки целей

### Проблема: Вебвизор не работает
**Решение:**
1. Проверьте настройки вебвизора в счетчике
2. Убедитесь, что включена запись сессий
3. Проверьте права доступа к вебвизору

---

## 📞 ПОДДЕРЖКА

### Полезные ресурсы:
- [Справка Яндекс.Метрики](https://yandex.ru/support/metrica/)
- [API Яндекс.Метрики](https://yandex.ru/dev/metrika/)
- [Вебвизор Яндекс.Метрики](https://yandex.ru/support/metrica/webvisor/)

### Контакты:
- **Email**: feedback@ai-people.io
- **Документация**: [Академия Яндекс.Метрики](https://yandex.ru/support/metrica/academy/)

---

## ✅ ЧЕКЛИСТ ЗАВЕРШЕНИЯ

- [ ] Создан счетчик Яндекс.Метрики
- [ ] Получен ID счетчика
- [ ] Получен код верификации
- [ ] Добавлен код в layout.tsx
- [ ] Настроены переменные окружения
- [ ] Созданы цели и события
- [ ] Протестирована отправка данных
- [ ] Настроены отчеты
- [ ] Проверена работа Web Vitals
- [ ] Настроен вебвизор
- [ ] Документированы настройки

---

**🎉 ПОЗДРАВЛЯЕМ! Яндекс.Метрика успешно настроена для AI-People!**
