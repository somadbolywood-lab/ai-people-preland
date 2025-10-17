# 🚀 ГАЙД ПО СБОРКЕ И ДЕПЛОЮ ПРОЕКТА

## 📁 ПРАВИЛЬНАЯ РАБОЧАЯ ДИРЕКТОРИЯ
```bash
C:\Users\HP\Desktop\AI-PEOPLE Preland 06.10.25\aipeople-next
```

## 🔧 ПОШАГОВЫЕ КОМАНДЫ

### 1. ПЕРЕХОД В ПРАВИЛЬНУЮ ПАПКУ
```bash
cd "C:\Users\HP\Desktop\AI-PEOPLE Preland 06.10.25\aipeople-next"
```

### 2. ПРОВЕРКА ЧТО МЫ В ПРАВИЛЬНОЙ ПАПКЕ
```bash
# Проверяем наличие package.json
dir package.json

# Проверяем текущую директорию
pwd
```

### 3. ПРОВЕРКА СТАТУСА GIT
```bash
git status
```

### 4. СБОРКА ПРОЕКТА
```bash
npm run build
```

### 5. ПРОВЕРКА ОШИБОК СБОРКИ
```bash
# Если сборка прошла успешно - продолжаем
# Если есть ошибки - исправляем их перед коммитом
```

### 6. КОММИТ ИЗМЕНЕНИЙ
```bash
git add .
git commit -m "описание изменений"
```

### 7. ВЫГРУЗКА НА GITHUB
```bash
git push
```

## ⚡ БЫСТРАЯ КОМАНДА (ВСЕ В ОДНУ)
```bash
cd "C:\Users\HP\Desktop\AI-PEOPLE Preland 06.10.25\aipeople-next" && dir package.json && npm run build && git add . && git commit -m "описание изменений" && git push
```

## 🔍 ДОПОЛНИТЕЛЬНЫЕ КОМАНДЫ ДЛЯ ПРОВЕРКИ

### Просмотр изменений перед коммитом
```bash
git diff
```

### Просмотр истории коммитов
```bash
git log --oneline
```

### Проверка подключения к GitHub
```bash
git remote -v
```

## ⚠️ ВАЖНЫЕ ПРИМЕЧАНИЯ
- Всегда проверяйте что находитесь в папке `aipeople-next`
- Убедитесь что сборка прошла без ошибок перед коммитом
- Проверяйте статус git перед началом работы
