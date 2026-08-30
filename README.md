# ALL WINDOWS — Корпоративный сайт

Современный веб-сайт компании **ALL WINDOWS** — производителя и установщика оконных, дверных и фасадных систем в Ташкенте.

## Стек технологий

- **React 19** & **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** & **tw-animate-css**
- **Framer Motion** (анимации интерфейса)
- **Lucide React** (иконки)
- **Radix UI** & **Shadcn UI** (компоненты)
- **Wouter** (клиентский роутинг)
- **TanStack Query**

## Структура проекта

```text
├── public/                 # Статические ресурсы (favicon, robots.txt)
├── src/
│   ├── components/         # React компоненты и UI библиотека (Radix/Shadcn)
│   ├── hooks/              # Пользовательские React хуки
│   ├── lib/                # Вспомогательные утилиты (cn, etc.)
│   ├── pages/              # Страницы приложения
│   ├── App.tsx             # Главный компонент, роутинг, страницы и калькулятор
│   ├── index.css           # Tailwind стили, CSS-переменные и дизайн-токены
│   └── main.tsx            # Точка входа в React приложение
├── index.html              # HTML-шаблон
├── package.json            # Зависимости и npm скрипты
├── tsconfig.json           # Конфигурация TypeScript
└── vite.config.ts          # Конфигурация Vite
```

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
# или
pnpm install
# или
yarn install
```

### 2. Запуск в режиме разработки

```bash
npm run dev
```

Сайт откроется локально по адресу [http://localhost:3000](http://localhost:3000).

### 3. Сборка для продакшена

```bash
npm run build
```

Собранные оптимизированные статические файлы будут находиться в папке `dist/`.

### 4. Предпросмотр продакшен сборки

```bash
npm run preview
```

### 5. Проверка типов TypeScript

```bash
npm run typecheck
```
