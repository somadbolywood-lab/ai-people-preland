# 🚀 ПРАВИЛЬНЫЙ ЗАПУСК СЕРВЕРА

## ❌ НЕ ДЕЛАТЬ (НЕ РАБОТАЕТ):
```bash
cd "C:\Users\HP\Desktop\AIgramm 30.09.25\aipeople-next" && npm run dev
```
**Проблема**: PowerShell не понимает `&&`

## ✅ ПРАВИЛЬНО (РАБОТАЕТ):
```bash
cd "C:\Users\HP\Desktop\AIgramm 30.09.25\aipeople-next"
npm run dev
```
**ВАЖНО**: Запускать `npm run dev` БЕЗ фона (`is_background: false`)

## 📋 АЛГОРИТМ:
1. **Перейти в папку проекта**: `cd "C:\Users\HP\Desktop\AIgramm 30.09.25\aipeople-next"`
2. **Проверить что package.json есть**: `dir` (должен быть package.json)
3. **Запустить сервер БЕЗ ФОНА**: `npm run dev` (is_background: false)
4. **Ждать**: 10-15 секунд компиляции
5. **Увидеть**: ✓ Ready in 3.3s
6. **Открыть**: http://localhost:3000

## 🎯 РЕЗУЛЬТАТ:
- Local: http://localhost:3000
- Network: http://10.201.0.4:3000
- Статус: ✓ Ready in 4.3s

## ⚠️ ВАЖНО:
- ВСЕГДА две отдельные команды
- НЕ использовать && в PowerShell
- Проверять что в правильной папке
- Запускать БЕЗ фона (is_background: false)
- Ждать компиляции Next.js
- Увидеть "✓ Ready in X.Xs" перед открытием браузера
