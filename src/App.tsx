import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView, animate } from 'framer-motion';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp,
  Factory, FileCheck2, GlassWater, Instagram, Menu, Phone, Ruler, Send, 
  ShieldCheck, Sparkles, X, Wrench, Zap 
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import '@/index.css';

import { localImages as pics } from '@/assets/imgs';

type Lang = 'ru' | 'uz';
const queryClient = new QueryClient();

const ru = {
  nav: ['Продукция', 'Объекты', 'О компании', 'Услуги', 'Контакты'],
  estimate: 'Заказать замер', call: 'Позвонить', details: 'Подробнее', all: 'Все проекты',
};
const uz = {
  nav: ['Mahsulotlar', 'Obyektlar', 'Kompaniya haqida', 'Xizmatlar', 'Aloqa'],
  estimate: 'O‘lchov buyurtma qilish', call: 'Qo‘ng‘iroq qilish', details: 'Batafsil', all: 'Barcha loyihalar',
};
const copy = (lang: Lang) => lang === 'ru' ? ru : uz;

export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  subcategory?: string;
  title: string;
  brand: string;
  brandCountry?: string;
  subtitle: string;
  image: string;
  specs: string[];
  description: string;
  related?: string[];
};

export const categories: Category[] = [
  { 
    slug: 'aluminium', 
    title: 'Алюминиевые окна и двери', 
    subtitle: 'TERMO · Aldox · AKF Champion · точная геометрия', 
    image: pics.detail, 
    description: 'Лёгкие и тёплые алюминиевые конструкции с чистой архитектурной линией: флагманские серии TERMO с полиамидными термомостами, классические и усиленные системы Aldox и AKF Champion.' 
  },
  { 
    slug: 'pvc', 
    title: 'ПВХ окна и двери', 
    subtitle: 'Engelberg · Trio · Quattro · Deceuninck', 
    image: pics.interior, 
    description: 'Теплосберегающие и шумозащитные ПВХ окна: швейцарские системы Engelberg (7000, 7600, 8000), практичные Akfa Trio и Quattro, а также инновационные бельгийские системы Deceuninck.' 
  },
  { 
    slug: 'sliding', 
    title: 'Раздвижные системы', 
    subtitle: 'BKH · BKG · Lift & Slide · Складные гармошки', 
    image: pics.hero, 
    description: 'Свободный проём и плавный ход: легкие раздвижные BKG 40, теплые 2- и 3-рельсовые Standart BKH 38, подъемно-раздвижные порталы Standart BKH 60 и Premium BKH 65 для створок до 400 кг.' 
  },
  { 
    slug: 'facade', 
    title: 'Фасадные системы', 
    subtitle: 'BKF 48 · BKF 50 · BKF Max · JP Стойка-ригель', 
    image: pics.facade, 
    description: 'Светопрозрачные стоечно-ригельные и структурные фасады. Энергоэффективные системы Econom BKF 48, сейсмостойкие Premium BKF 50 (до 9 баллов) и ультратонкие фасады Premium BKF Max (22 мм).' 
  },
  { 
    slug: 'office-partitions', 
    title: 'Офисные перегородки', 
    subtitle: 'BKO 38 · BKO 40 · интерьерное зонирование', 
    image: pics.office, 
    description: 'Системы интерьерных перегородок BKO 38 и BKO 40 с одинарным, двойным или комбинированным заполнением для создания современных рабочих пространств и кабинетов.' 
  },
  { 
    slug: 'stained-glass', 
    title: 'Витражи и панорамное остекление', 
    subtitle: 'Свет как часть архитектуры', 
    image: pics.glass, 
    description: 'Панорамные решения с большим световым проёмом. Подбираем формулу стекла по инсоляции, нагрузке и сценарию использования пространства.' 
  },
  { 
    slug: 'rolling-shutters', 
    title: 'Рольставни и роллетные ворота', 
    subtitle: 'Akfa · защита и контроль света', 
    image: pics.tower, 
    description: 'Современная замена решёткам и жалюзи. Роллетные системы защищают проёмы, регулируют свет и аккуратно интегрируются в фасад здания.' 
  },
  { 
    slug: 'glass-railings', 
    title: 'Стеклянные перила и ограждения', 
    subtitle: 'Безопасность без визуальных границ', 
    image: pics.detail, 
    description: 'Лаконичные ограждения для лестниц, балконов и террас из закаленного триплекса. Рассчитываем крепления и выполняем аккуратный монтаж.' 
  },
  { 
    slug: 'mosquito-nets', 
    title: 'Москитные сетки', 
    subtitle: 'Рамочные решения для всех типов окон', 
    image: pics.residence, 
    description: 'Практичная защита от насекомых и пыли с точной посадкой в проём. Рамочные, дверные и раздвижные плиссе-системы.' 
  },
];

export const products: Product[] = [
  // ==========================================
  // --- 1. АЛЮМИНИЕВЫЕ ОКНА И ДВЕРИ (ALUMINIUM) ---
  // ==========================================
  {
    slug: 'termo-67',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'TERMO 67',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Теплая оконно-дверная система с термомостом 24 мм',
    image: pics.termo,
    specs: [
      'Монтажная глубина рамы: 59 мм',
      'Ширина профиля створки: 67 мм',
      'Толщина стеклопакета: 16 мм – 42 мм',
      'Ширина термомоста (полиамид): 24 мм',
      'Максимальный вес створки: окна 100 кг / двери 160 кг',
      'Максимальные габариты створки: 2500 мм × 1600 мм',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 3000 мм × 1600 мм',
      'Палитра: +450 оттенков и фактур по шкале RAL'
    ],
    description: 'Высокоэффективная теплая алюминиевая система TERMO 67 с полиамидной термоизолирующей вставкой 24 мм. Спроектирована для масштабного энергосберегающего остекления оконных и входных дверных конструкций.',
    related: ['termo-70', 'termo-77', 'thermo-65']
  },
  {
    slug: 'termo-70',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'TERMO 70',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Усиленная теплая алюминиевая система 70 мм',
    image: pics.window,
    specs: [
      'Монтажная глубина рамы: 70 мм',
      'Ширина рамы: 70 мм, ширина створки: 75,5 мм',
      'Толщина стеклопакета: 20 мм – 50 мм',
      'Ширина термобарьера: 24 мм',
      'Максимальный вес створки: окна 100 кг / двери 160 кг',
      'Тип открывания: Внутреннее открывание (окно / дверь)',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 2800 мм × 1400 мм'
    ],
    description: 'Премиальная система TERMO 70 с повышенной жесткостью и звукоизоляцией. Позволяет устанавливать двухкамерные энергосберегающие стеклопакеты толщиной до 50 мм.',
    related: ['termo-67', 'termo-77', 'termo-98']
  },
  {
    slug: 'thermo-65',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'THERMO 65',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Энергоэффективная оконно-дверная система 64 мм',
    image: pics.detail,
    specs: [
      'Монтажная глубина рамы: 64 мм',
      'Толщина стеклопакета: 6 мм – 32 мм',
      'Максимальный вес створки: окна 100 кг',
      'Максимальный размер створки (окна): 2200 мм × 1200 мм',
      'Максимальный размер створки (двери): 2800 мм × 1400 мм',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 2800 мм × 1400 мм'
    ],
    description: 'Оконно-дверная серия THERMO 65 — сбалансированное решение для жилых и коммерческих объектов с высокой степенью защиты от температурных перепадов и продуваний.',
    related: ['termo-67', 'ywd-78-thermo', 'aldox']
  },
  {
    slug: 'termo-77',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'TERMO 77',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Флагманская теплая алюминиевая система 77 мм',
    image: pics.residence,
    specs: [
      'Монтажная глубина рамы: 69 мм',
      'Ширина створки: 77 мм',
      'Ширина термобарьера окна: 34 мм, двери: 28 мм',
      'Толщина стеклопакета: 24 мм – 50 мм',
      'Ширина видимой части створки: min 67 мм / max 97 мм',
      'Максимальный вес створки: окна 100 кг / двери 160 кг',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 3000 мм × 1600 мм'
    ],
    description: 'Максимальная теплоизоляция в линейке TERMO с мощными полиамидными термомостами до 34 мм. Идеально подходит для панорамных энергопассивных зданий и высотных резиденций.',
    related: ['termo-98', 'termo-70', 'ywd-78-thermo']
  },
  {
    slug: 'termo-98',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'TERMO 98',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Сверхпрочная архитектурная термо-система 70 мм',
    image: pics.facade,
    specs: [
      'Монтажная глубина рамы: 70 мм',
      'Толщина стеклопакета: 20 мм – 50 мм',
      'Максимальный вес створки: окна 100 кг / двери 160 кг',
      'Максимальный размер створки (окна): 2200 мм × 1200 мм',
      'Максимальный размер створки (двери): 2800 мм × 1400 мм',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 2800 мм × 1400 мм'
    ],
    description: 'Архитектурная алюминиевая система TERMO 98 повышенной прочности для крупноформатных оконных и дверных проемов с высокими статическими и ветровыми нагрузками.',
    related: ['termo-77', 'ywd-78-thermo', 'termo-70']
  },
  {
    slug: 'ywd-78-thermo',
    categorySlug: 'aluminium',
    subcategory: 'TERMO серия',
    title: 'YWD 78 THERMO',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Премиальная термо-серия 75.5 мм для окон и входных групп',
    image: pics.workshop,
    specs: [
      'Монтажная глубина рамы: 75,5 мм',
      'Толщина стеклопакета: 20 мм – 36 мм',
      'Максимальный вес створки: окна 100 кг / двери 160 кг',
      'Максимальный размер створки (окна): 2200 мм × 1200 мм',
      'Максимальный размер створки (двери): 2800 мм × 1400 мм',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 2800 мм × 1400 мм'
    ],
    description: 'Специализированная серия YWD 78 THERMO с монтажной глубиной 75.5 мм, обеспечивающая высочайшую стабильность геометрии при интенсивной ежедневной эксплуатации.',
    related: ['termo-77', 'termo-70', 'termo-67']
  },
  {
    slug: 'aldox',
    categorySlug: 'aluminium',
    subcategory: 'Aldox серия',
    title: 'Aldox',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Классическая алюминиевая система 45.5 мм',
    image: pics.detail,
    specs: [
      'Монтажная глубина рамы: 45,5 мм',
      'Толщина заполнения/стеклопакета: 4 мм – 20 мм',
      'Максимальный вес створки (окна/двери): 80 кг / 140 кг',
      'Максимальный размер створки (окна): 1800 мм × 1000 мм',
      'Максимальный размер створки (двери): 2500 мм × 1500 мм',
      'Применение для окон: до 1850 мм × 1000 мм',
      'Системное дверное решение: до 2500 мм × 1500 мм'
    ],
    description: 'Проверенная временем алюминиевая система Aldox 45.5 мм для балконов, тамбуров, коммерческих входных групп и легких витражей.',
    related: ['aldox-2', 'akf-47-champion', 'thermo-65']
  },
  {
    slug: 'aldox-2',
    categorySlug: 'aluminium',
    subcategory: 'Aldox серия',
    title: 'Aldox 2',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Модернизированная алюминиевая система 45.5 мм',
    image: pics.detail,
    specs: [
      'Монтажная глубина рамы: 45,5 мм',
      'Толщина заполнения/стеклопакета: 4 мм – 20 мм',
      'Максимальный вес створки: 80 кг / 140 кг',
      'Максимальный размер створки (окна): 1800 мм × 1000 мм',
      'Максимальный размер створки (двери): 2500 мм × 1500 мм',
      'Применение для окон: до 1800 мм × 1000 мм',
      'Применение для дверей: до 2500 мм × 1500 мм'
    ],
    description: 'Обновленная модификация системы Aldox 2 с улучшенной геометрией фальца под фурнитуру и расширенными возможностями интеграции створок.',
    related: ['aldox', 'akf-47-champion', 'thermo-65']
  },
  {
    slug: 'akf-47-champion',
    categorySlug: 'aluminium',
    subcategory: 'Aldox серия',
    title: 'AKF 47 CHAMPION',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Усиленная алюминиевая система 47 мм повышенной прочности',
    image: pics.workshop,
    specs: [
      'Монтажная глубина рамы: 47 мм',
      'Толщина стеклопакета: 4 мм – 24 мм',
      'Максимальный вес створки: 100 кг (окна) / 160 кг (двери)',
      'Максимальный размер створки (окна): 2200 мм × 1200 мм',
      'Максимальный размер створки (двери): 2600 мм × 1200 мм',
      'Применение для окон: до 2200 мм × 1200 мм',
      'Системное дверное решение: до 2600 мм × 1200 мм'
    ],
    description: 'Усиленная алюминиевая система AKF 47 Champion. Отличается повышенной несущей способностью дверных петель (до 160 кг) и увеличенными габаритами створок.',
    related: ['aldox', 'aldox-2', 'thermo-65']
  },
  {
    slug: 'sistem-wh85',
    categorySlug: 'aluminium',
    subcategory: 'Sistem Aluminium',
    title: 'Sistem Aluminium WH85',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Ultra Performance Hinged System · 85 серия',
    image: pics.detail,
    specs: ['Монтажная глубина рамы 85 мм', 'Створка 95 мм', 'Терморазрыв полиамид 34 мм', 'Стеклопакет до 64 мм', 'Флагман термоизоляции'],
    description: 'Флагманская алюминиевая поворотно-откидная система ультра-высокой энергоэффективности от Sistem Aluminium (Турция).',
    related: ['sistem-wh70', 'termo-77', 'asas-rwt75']
  },
  {
    slug: 'sistem-wh70',
    categorySlug: 'aluminium',
    subcategory: 'Sistem Aluminium',
    title: 'Sistem Aluminium WH70 / W75',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'High Performance Insulated Serie · 75 серия',
    image: pics.hero,
    specs: ['Монтажная глубина 75 мм', 'Термомост 24–30 мм', 'Стеклопакет до 52 мм', 'Звукоизоляция до 42 дБ', 'Европейский паз под фурнитуру'],
    description: 'Высокоэффективная теплая алюминиевая система 75 серии для окон и дверей. Обеспечивает превосходную звукоизоляцию.',
    related: ['sistem-wh85', 'termo-70', 'asas-rwt75']
  },
  {
    slug: 'asas-rwt75',
    categorySlug: 'aluminium',
    subcategory: 'ASAŞ Rescara',
    title: 'ASAŞ Rescara RWT 75',
    brand: 'ASAŞ',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'High Thermal Architectural System · 75 серия',
    image: pics.facade,
    specs: ['Монтажная глубина 75 мм', 'Полиамидный термомост 34 мм', 'Стеклопакет до 56 мм', 'Теплопроводность Uf = 1.3 W/m²K'],
    description: 'Премиальная архитектурная алюминиевая система Rescara RWT 75 от ведущего турецкого концерна ASAŞ.',
    related: ['termo-77', 'sistem-wh85', 'termo-70']
  },

  // ==========================================
  // --- 2. ПВХ ОКНА И ДВЕРИ (PVC) ---
  // ==========================================
  {
    slug: 'engelberg-7000',
    categorySlug: 'pvc',
    subcategory: 'Engelberg',
    title: 'Engelberg 7000',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    subtitle: '5-камерная ПВХ система 70 мм премиум-класса',
    image: pics.interior,
    specs: [
      'Количество воздушных камер: 5',
      'Монтажная глубина рамы: 70 мм',
      'Толщина стеклопакета: 24 мм – 32 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки: окно 80 кг / дверь 110 кг',
      'Максимальный размер створки (окно): 2000 мм × 1000 мм',
      'Максимальный размер створки (дверь): 2000 мм × 900 мм'
    ],
    description: 'Премиальная 5-камерная система Engelberg 7000. Обеспечивает безупречный акустический комфорт и защиту от теплопотерь в климате Ташкента.',
    related: ['engelberg-7600', 'engelberg-8000', 'akfa-quattro-6000']
  },
  {
    slug: 'engelberg-7600',
    categorySlug: 'pvc',
    subcategory: 'Engelberg',
    title: 'Engelberg 7600',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    subtitle: '6-камерная ПВХ система 76 мм · Армирование 2,0 мм',
    image: pics.residence,
    specs: [
      'Количество воздушных камер: 6',
      'Монтажная глубина рамы: 76 мм',
      'Толщина стеклопакета: 24 мм – 32 мм',
      'Толщина армирующего профиля: 2,0 мм (усиленный металл)',
      'Максимальный вес створки (окна): 100 кг',
      'Максимальный размер створки (окна): 2000 мм × 1000 мм'
    ],
    description: 'Высокопрочная 6-камерная система Engelberg 7600 с усиленным 2-миллиметровым стальным армированием для максимальной ветровой устойчивости.',
    related: ['engelberg-8000', 'engelberg-7000', 'deceuninck-ligapro']
  },
  {
    slug: 'engelberg-8000',
    categorySlug: 'pvc',
    subcategory: 'Engelberg',
    title: 'Engelberg 8000',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    subtitle: 'Флагманская 6-камерная ПВХ система 80 мм · Армирование 2,0 мм',
    image: pics.interior,
    specs: [
      'Количество воздушных камер: 6',
      'Монтажная глубина рамы: 80 мм',
      'Толщина стеклопакета: 24 мм – 32 мм (до 52 мм)',
      'Толщина армирующего профиля: 2,0 мм',
      'Максимальный вес створки (окно): 100 кг',
      'Максимальный размер створки (окно): 2000 мм × 1000 мм'
    ],
    description: 'Флагман модельного ряда Engelberg — ширина 80 мм, 6 камер и усиленный 2.0 мм металл для максимального энергосбережения и жесткости.',
    related: ['engelberg-7600', 'deceuninck-ligapro', 'deceuninck-favorit-space']
  },
  {
    slug: 'akfa-trio-6000',
    categorySlug: 'pvc',
    subcategory: 'Akfa Trio',
    title: 'Trio 6000',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: '3-камерная ПВХ система 60 мм для окон и дверей',
    image: pics.tower,
    specs: [
      'Количество воздушных камер: 3',
      'Монтажная глубина рамы: 60 мм',
      'Толщина стеклопакета: 6 мм – 20 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки (окно / дверь): 80 кг / 110 кг',
      'Применение для окон: до 1850 мм × 900 мм',
      'Системное дверное решение: до 2000 мм × 900 мм'
    ],
    description: 'Классическая 3-камерная ПВХ система Trio 6000. Практичный выбор для качественного остекления квартир, балконов и административных объектов.',
    related: ['akfa-trio-5800', 'akfa-quattro-6000', 'akfa-quattro-5800']
  },
  {
    slug: 'akfa-quattro-5800',
    categorySlug: 'pvc',
    subcategory: 'Akfa Quattro',
    title: 'Quattro 5800',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: '4-камерная ПВХ система 58 мм',
    image: pics.workshop,
    specs: [
      'Количество воздушных камер: 4',
      'Монтажная глубина рамы: 58 мм',
      'Толщина стеклопакета: 6 мм – 20 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки (окно / дверь): 60 кг / 100 кг',
      'Максимальный размер створки (окно): 1850 мм × 800 мм',
      'Максимальный размер створки (дверь): 2000 мм × 800 мм'
    ],
    description: 'Энергосберегающая 4-камерная система Quattro 5800. Отличное соотношение теплотехнических качеств и компактных габаритов профиля.',
    related: ['akfa-quattro-6000', 'akfa-quattro-5200', 'akfa-trio-5800']
  },
  {
    slug: 'akfa-quattro-6000',
    categorySlug: 'pvc',
    subcategory: 'Akfa Quattro',
    title: 'Quattro 6000',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: '4-камерная ПВХ система 60 мм со створкой до 110 кг',
    image: pics.glass,
    specs: [
      'Количество воздушных камер: 4',
      'Монтажная глубина рамы: 60 мм',
      'Толщина стеклопакета: 6 мм – 20 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки (окно / дверь): 70 кг / 110 кг',
      'Максимальный размер створки (окно): 1750 мм × 850 мм',
      'Максимальный размер створки (дверь): 2000 мм × 900 мм'
    ],
    description: 'Популярная 4-камерная система Quattro 6000 с монтажной глубиной 60 мм. Обеспечивает улучшенную теплоизоляцию и стабильную геометрию створок.',
    related: ['akfa-quattro-5800', 'akfa-trio-6000', 'engelberg-7000']
  },
  {
    slug: 'akfa-trio-5800',
    categorySlug: 'pvc',
    subcategory: 'Akfa Trio',
    title: 'Trio 5800',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: '3-камерная компактная ПВХ система 58 мм',
    image: pics.tower,
    specs: [
      'Количество воздушных камер: 3',
      'Монтажная глубина рамы: 58 мм',
      'Толщина стеклопакета: 6 мм – 20 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки (окно / дверь): 70 кг / 100 кг',
      'Максимальный размер створки (окно): 1850 мм × 800 мм',
      'Максимальный размер створки (дверь): 2000 мм × 900 мм'
    ],
    description: 'Компактная и доступная 3-камерная система Trio 5800 для стандартного остекления оконных проемов, лоджий и хозяйственных блоков.',
    related: ['akfa-trio-6000', 'akfa-quattro-5200']
  },
  {
    slug: 'akfa-quattro-5200',
    categorySlug: 'pvc',
    subcategory: 'Akfa Quattro',
    title: 'Quattro 5200',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: '4-камерная компактная ПВХ система 52 мм',
    image: pics.detail,
    specs: [
      'Количество воздушных камер: 4',
      'Монтажная глубина рамы: 52 мм',
      'Толщина стеклопакета: 6 мм – 20 мм',
      'Толщина армирующего профиля: 1,2 мм',
      'Максимальный вес створки (окно / дверь): 60 кг / 100 кг',
      'Максимальный размер створки (окно): 1650 мм × 800 мм',
      'Максимальный размер створки (дверь): 1900 мм × 900 мм'
    ],
    description: 'Тонкая 4-камерная система Quattro 5200 для легких оконных и дверных конструкций с максимальной светопропускной способностью.',
    related: ['akfa-quattro-5800', 'akfa-trio-5800']
  },
  {
    slug: 'deceuninck-ligapro',
    categorySlug: 'pvc',
    subcategory: 'Deceuninck',
    title: 'Deceuninck ЛИГАПРО (LIGAPRO)',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Флагманская ПВХ система 76 мм / 6 камер · 8000 серия',
    image: pics.interior,
    specs: ['Ширина профиля 76 мм', '6 воздушных камер', 'Стеклопакет до 50 мм', 'Класс профиля А', 'Теплоизоляция 1.05 м²·°C/Вт'],
    description: 'Новейшая разработка Deceuninck — система ЛИГАПРО 76 мм с 6 камерами. Создана для сохранения тепла и абсолютной тишины.',
    related: ['deceuninck-favorit-space', 'engelberg-8000', 'engelberg-7600']
  },
  {
    slug: 'deceuninck-favorit-space',
    categorySlug: 'pvc',
    subcategory: 'Deceuninck',
    title: 'Deceuninck ФАВОРИТ СПЭЙС',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Инновационное окно Класса А · 76 мм / 6 камер',
    image: pics.residence,
    specs: ['Ширина профиля 76 мм', '6 камер', '3 контура уплотнения (средний контур)', 'Стеклопакет до 48 мм'],
    description: 'Премиальное энергосберегающее окно с 3 контурами уплотнения, полностью блокирующее сквозняки и уличную пыль.',
    related: ['deceuninck-ligapro', 'engelberg-8000', 'deceuninck-favorit']
  },

  // ==========================================
  // --- 3. РАЗДВИЖНЫЕ СИСТЕМЫ (SLIDING) ---
  // ==========================================
  {
    slug: 'econom-bkg-40',
    categorySlug: 'sliding',
    subcategory: 'BKG Раздвижные',
    title: 'Econom BKG 40',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Экономичная раздвижная алюминиевая система 40 мм',
    image: pics.sliding,
    specs: [
      'Монтажная глубина рамы: 40 мм',
      'Ширина профиля створки: 40 мм (видимая часть 75 мм)',
      'Толщина стеклопакета/заполнения: 4 мм – 20 мм',
      'Ширина фурнитурного паза створки: 16,4 мм',
      'Количество направляющих рельсов: 1',
      'Максимальный вес створки: 60 кг',
      'Максимальный размер створки: 2400 мм × 800 мм'
    ],
    description: 'Экономичная раздвижная алюминиевая система BKG 40 для балконных конструкций, летних террас и легких скользящих створок.',
    related: ['standart-bkh-38', 'standart-bkh-60', 'sistem-bf85']
  },
  {
    slug: 'standart-bkh-38',
    categorySlug: 'sliding',
    subcategory: 'BKH Раздвижные',
    title: 'Standart BKH 38',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Теплая раздвижная система (2 и 3 рельса) · Термомост 14 мм',
    image: pics.hero,
    specs: [
      'Монтажная глубина рамы (2 рельса): 102 мм',
      'Монтажная глубина рамы (3 рельса): 165 мм',
      'Ширина профиля створки: 38 мм',
      'Ширина термобарьера: 14 мм',
      'Толщина стеклопакета: 20 мм – 50 мм',
      'Толщина заполнения створки: 16 мм – 28 мм',
      'Максимальный вес створки: 100 кг / 160 кг (до 220 кг)'
    ],
    description: 'Теплая раздвижная система Standart BKH 38 с полиамидным термомостом 14 мм. Доступны конфигурации рамы на 2 и 3 рельса для широких проемов.',
    related: ['standart-bkh-60', 'premium-bkh-65', 'econom-bkg-40']
  },
  {
    slug: 'standart-bkh-60',
    categorySlug: 'sliding',
    subcategory: 'BKH Lift & Slide',
    title: 'Standart BKH 60 (Lift & Slide)',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Подъемно-раздвижная портальная система со створками до 400 кг',
    image: pics.residence,
    specs: [
      'Монтажная глубина рамы (2 рельса): 145 мм',
      'Толщина стеклопакета: 20 мм – 32 мм',
      'Максимальный вес створки: 400 кг',
      'Максимальный размер створки: 3300 мм × 2800 мм',
      'Высота подъема системы при открывании: 5 – 7 мм'
    ],
    description: 'Мощная подъемно-раздвижная система Standart BKH 60 для крупногабаритных панорамных выходов на веранды и террасы со створками весом до 400 кг.',
    related: ['premium-bkh-65', 'standart-bkh-38', 'sistem-bf85']
  },
  {
    slug: 'premium-bkh-65',
    categorySlug: 'sliding',
    subcategory: 'BKH Lift & Slide',
    title: 'Premium BKH 65 (Lift & Slide)',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Флагманский теплый подъемно-раздвижной портал · Термомост 34 мм',
    image: pics.hero,
    specs: [
      'Монтажная глубина рамы (2 рельса): 148 мм',
      'Монтажная глубина рамы (3 рельса): 232 мм',
      'Ширина профиля створки: 64 мм (видимая часть 98 мм)',
      'Ширина термобарьера рамы: 34 мм',
      'Толщина стеклопакета: 20 мм – 50 мм',
      'Максимальный вес створки: 400 кг',
      'Максимальный размер створки: 3300 мм × 2800 мм'
    ],
    description: 'Флагманская теплая подъемно-раздвижная система Premium BKH 65 с термомостом 34 мм и возможностью 3-рельсовой рамы глубиной 232 мм.',
    related: ['standart-bkh-60', 'sistem-bf85', 'standart-bkh-38']
  },
  {
    slug: 'sistem-bf85',
    categorySlug: 'sliding',
    subcategory: 'Складные (Гармошка)',
    title: 'Sistem Aluminium BF 85 (Гармошка)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Складывающаяся раздвижная система с нижним ходом · 85 серия',
    image: pics.hero,
    specs: ['Открывание проема до 95%', 'Нижняя несущая опора (Bottom Carriage)', 'Высота створки до 3.2 м', 'Вес створки до 140 кг', 'Теплый терморазрыв'],
    description: 'Премиальная складная дверная система BF 85. Позволяет открыть проем практически полностью, объединяя интерьер с террасой.',
    related: ['premium-bkh-65', 'standart-bkh-60', 'standart-bkh-38']
  },

  // ==========================================
  // --- 4. ФАСАДНЫЕ СИСТЕМЫ (FACADE) ---
  // ==========================================
  {
    slug: 'econom-bkf-48',
    categorySlug: 'facade',
    subcategory: 'BKF Фасады',
    title: 'Econom BKF 48',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Фасадная стоечно-ригельная система 48 мм',
    image: pics.facade,
    specs: [
      'Ширина профиля стойки/ригеля: 48 мм',
      'Варианты остекления: Декоративные капоты / Структурное',
      'Толщина стеклопакета: 6 мм – 38 мм (заполнение 4–38 мм)',
      'Максимальный вес стеклопакета: до 180 кг',
      'Длина ригеля (min/max): 36 мм / 141 мм',
      'Длина стойки (min/max): 53 мм / 153 мм',
      'Термобарьер створки: 27 мм'
    ],
    description: 'Универсальная фасадная стоечно-ригельная система Econom BKF 48. Подходит для витражей, наклонных кровель и фасадов средней этажности.',
    related: ['premium-bkf-50', 'premium-bkf-max', 'jp-facade-system']
  },
  {
    slug: 'premium-bkf-50',
    categorySlug: 'facade',
    subcategory: 'BKF Фасады',
    title: 'Premium BKF 50',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Сейсмостойкий фасад 50 мм (до 9 баллов) со стеклопакетом до 62 мм',
    image: pics.tower,
    specs: [
      'Ширина профиля стойки/ригеля: 50 мм',
      'Варианты остекления: Декоративные крышки / Структурное',
      'Толщина стеклопакета: 4 мм – 62 мм',
      'Максимальный вес стеклопакета: до 250 кг',
      'Сейсмостойкость: до 9 баллов',
      'Способ фиксации заполнения: прижимная планка / декоративная крышка'
    ],
    description: 'Премиальная стоечно-ригельная фасадная система Premium BKF 50 с повышенной сейсмостойкостью до 9 баллов и весом стеклопакета до 250 кг.',
    related: ['premium-bkf-max', 'econom-bkf-48', 'jp-facade-system']
  },
  {
    slug: 'premium-bkf-max',
    categorySlug: 'facade',
    subcategory: 'BKF Фасады',
    title: 'Premium BKF Max',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Минималистичная фасадная система со сверхтонкой стойкой 22 мм',
    image: pics.glass,
    specs: [
      'Ширина стойки и ригеля: 22 мм (сверхтонкий профиль)',
      'Варианты остекления: Декоративные крышки',
      'Толщина стеклопакета: 24 мм – 42 мм',
      'Максимальный вес заполнения: до 100 кг'
    ],
    description: 'Инновационная ультратонкая фасадная система Premium BKF Max со стойкой всего 22 мм для максимальной площади светового проема и легкого внешнего вида.',
    related: ['premium-bkf-50', 'econom-bkf-48', 'jp-facade-system']
  },
  {
    slug: 'jp-facade-system',
    categorySlug: 'facade',
    subcategory: 'JP Стойка-ригель',
    title: 'Стоечно-ригельный фасад JP 50',
    brand: 'JP / Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Классическое фасадное остекление',
    image: pics.facade,
    specs: ['Ширина стойки 50 мм', 'Глубина стойки 50–250 мм', 'Заполнение до 52 мм', 'Высота конструкции до 6 м'],
    description: 'Классическая стоечно-ригельная фасадная система с декоративными прижимными планками для бизнес-центров и высотных зданий.',
    related: ['jp-structural-facade', 'premium-bkf-50', 'econom-bkf-48']
  },
  {
    slug: 'jp-structural-facade',
    categorySlug: 'facade',
    subcategory: 'JP Стойка-ригель',
    title: 'Структурное остекление JP',
    brand: 'JP / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Сплошное остекление без наружных прижимных планок',
    image: pics.tower,
    specs: ['Гладкая стеклянная поверхность фасада', 'Специальный структурный силикон Dow Corning', 'Встроенные скрытые лючки', 'Триплекс 8+8 / 10+10 мм'],
    description: 'Эффект единого зеркального монолита. Полное отсутствие внешних металлических планок на фасаде.',
    related: ['jp-facade-system', 'premium-bkf-50']
  },

  // ==========================================
  // --- 5. ОФИСНЫЕ ПЕРЕГОРОДКИ (OFFICE PARTITIONS) ---
  // ==========================================
  {
    slug: 'bko-38',
    categorySlug: 'office-partitions',
    subcategory: 'BKO Перегородки',
    title: 'BKO 38',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Интерьерные офисные перегородки 38 мм с ПВХ прижимом',
    image: pics.office,
    specs: [
      'Ширина профиля стойки/ригеля: 38 мм',
      'Варианты остекления: Двойное / Комбинированное',
      'Тип фиксации остекления: ПВХ клипса + декоративная крышка',
      'Толщина заполнения: 4 мм / 6 мм / 8 мм'
    ],
    description: 'Система интерьерных офисных перегородок BKO 38. Позволяет создавать легкие и элегантные зонирующие конструкции с двойным остеклением и жалюзи.',
    related: ['bko-40', 'aldox', 'sistem-w45']
  },
  {
    slug: 'bko-40',
    categorySlug: 'office-partitions',
    subcategory: 'BKO Перегородки',
    title: 'BKO 40',
    brand: 'Akfa / ALL WINDOWS',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Усиленные офисные перегородки 40 мм с кронштейным креплением',
    image: pics.facade,
    specs: [
      'Ширина профиля стойки/ригеля: 40 мм',
      'Высота профиля стойки: 57 мм',
      'Варианты остекления: Двойное / Комбинированное',
      'Тип фиксации остекления: декоративная крышка',
      'Толщина заполнения: 4 мм / 6 мм / 8 мм',
      'Тип крепления стойки с ригелем: кронштейн (Bracket)'
    ],
    description: 'Усиленная перегородочная система BKO 40 с высотой стойки 57 мм и кронштейным узлом сопряжения для надежного и безопасного зонирования офисных центров и банков.',
    related: ['bko-38', 'aldox', 'sistem-w55-d55']
  },

  // ==========================================
  // --- 6. ВИТРАЖИ, РОЛЬСТАВНИ, ПЕРИЛА, СЕТКИ ---
  // ==========================================
  {
    slug: 'panoramic-jumbo',
    categorySlug: 'stained-glass',
    title: 'Крупноформатные витражи Jumbo Glass',
    brand: 'ALL WINDOWS',
    subtitle: 'Джамбо-форматы до 6000 × 3210 мм',
    image: pics.glass,
    specs: ['Форматы по проекту', 'Закалённый триплекс', 'Мультифункциональные энергосберегающие стекла', 'Гарантия герметичности'],
    description: 'Максимальный обзор и световой проем для премиальных резиденций, шоурумов и двухсветных гостиных.',
    related: ['solar-control-glass', 'sistem-bf85']
  },
  {
    slug: 'solar-control-glass',
    categorySlug: 'stained-glass',
    title: 'Солнцезащитные витражи Solar Control',
    brand: 'ALL WINDOWS',
    subtitle: 'Защита от перегрева летом и теплопотерь зимой',
    image: pics.detail,
    specs: ['Стекла AGC / Guardian', 'Отражение до 70% тепловой энергии солнца', 'Высокая светопрозрачность', 'Экономия на кондиционировании'],
    description: 'Специальные стекла с напылением ионов серебра для жаркого климата Ташкента.',
    related: ['panoramic-jumbo', 'jp-facade-system']
  },
  {
    slug: 'akfa-shutters-foam',
    categorySlug: 'rolling-shutters',
    title: 'Пенозаполненные рольставни Akfa',
    brand: 'Akfa',
    subtitle: 'Ламели 39 / 45 / 55 мм · Тепло- и шумозащита',
    image: pics.tower,
    specs: ['Алюминиевый профиль с пенополиуретаном', 'Ручное и автоматическое управление', 'Встроенный и накладной монтаж', 'Защита от солнца и шума'],
    description: 'Современная защита оконных проемов от яркого солнца, пыли, уличного шума и теплопотерь.',
    related: ['akfa-shutters-extruded', 'akfa-garage-doors']
  },
  {
    slug: 'akfa-shutters-extruded',
    categorySlug: 'rolling-shutters',
    title: 'Антивандальные экструдированные роллеты',
    brand: 'Akfa',
    subtitle: 'Усиленная защита окон и витрин первых этажей',
    image: pics.facade,
    specs: ['Цельнотянутый усиленный алюминий', 'Высокий класс взломостойкости', 'Автоматика Somfy / Mosel', 'Окраска по каталогу RAL'],
    description: 'Надежная защита для коммерческих помещений, банков, магазинов и частных домов.',
    related: ['akfa-shutters-foam', 'akfa-garage-doors']
  },
  {
    slug: 'akfa-garage-doors',
    categorySlug: 'rolling-shutters',
    title: 'Роллетные ворота Akfa 77 мм',
    brand: 'Akfa',
    subtitle: 'Для въездных групп и гаражей',
    image: pics.workshop,
    specs: ['Широкая ламель 77 мм', 'Электропривод с дистанционным пультом', 'Аварийное ручное открывание', 'Компактный короб'],
    description: 'Удобное и компактное решение для перекрытия широких въездных проемов и гаражных боксов.',
    related: ['akfa-shutters-extruded', 'akfa-shutters-foam']
  },
  {
    slug: 'railing-profile',
    categorySlug: 'glass-railings',
    title: 'Ограждения на зажимном профиле',
    brand: 'ALL WINDOWS',
    subtitle: 'Нижний несущий алюминиевый профиль',
    image: pics.detail,
    specs: ['Закаленный триплекс 12–21.5 мм', 'Скрытый монтаж профиля в пол', 'Без вертикальных стоек', 'Нагрузка до 1.5 кН/м'],
    description: 'Сплошное стекло от пола без стоек для балконов, террас, эксплуатируемых кровель и атриумов.',
    related: ['railing-spiders', 'panoramic-jumbo']
  },
  {
    slug: 'railing-spiders',
    categorySlug: 'glass-railings',
    title: 'Точечные ограждения на спайдерах',
    brand: 'ALL WINDOWS',
    subtitle: 'Крепления из нержавеющей стали AISI 304/316',
    image: pics.interior,
    specs: ['Точечные коннекторы (боковое крепление)', 'Закаленный триплекс', 'Идеально для лестничных маршей', 'Эстетичный минимализм'],
    description: 'Стеклянные панели монтируются в торец перекрытия или лестничного марша, сохраняя полезную ширину прохода.',
    related: ['railing-profile']
  },
  {
    slug: 'net-plisse',
    categorySlug: 'mosquito-nets',
    title: 'Раздвижные москитные сетки Плиссе',
    brand: 'ALL WINDOWS',
    subtitle: 'Складываются гармошкой · Для больших проемов',
    image: pics.residence,
    specs: ['Складывание гармошкой', 'Ширина проема до 6 метров', 'Полотно Fiberglass / Антипыль', 'Алюминиевый каркас в цвет окна'],
    description: 'Инновационные москитные сетки плиссе, которые аккуратно собираются сбоку проема и не требуют места для распахивания.',
    related: ['net-frame', 'standart-bkh-60']
  },
  {
    slug: 'net-frame',
    categorySlug: 'mosquito-nets',
    title: 'Рамочные съемные сетки',
    brand: 'ALL WINDOWS',
    subtitle: 'Надежная классическая защита для всех окон',
    image: pics.detail,
    specs: ['Экструдированный алюминиевый профиль', 'Усиленные металлические z-крепления', 'Полотно Антикошка (Pet Screen) / Стандарт', 'Простой монтаж и снятие'],
    description: 'Легкосъемные практичные рамочные сетки для ПВХ и алюминиевых окон любых размеров.',
    related: ['net-plisse', 'engelberg-7000']
  }
];

const projects = [
  { slug: 'fazo-residence', title: 'ЖК «Fazo Residence»', type: 'Жилые комплексы', city: 'Ташкент', image: pics.residence, text: 'Панорамные окна и раздвижные системы для приватных террас.', systems: 'Engelberg 8000 · Lift-slide' },
  { slug: 'aminar-house', title: 'ЖК «Aminar House»', type: 'Жилые комплексы', city: 'Ташкент', image: pics.tower, text: 'Фасадное остекление и алюминиевые окна для жилого комплекса в центре Ташкента.', systems: 'JP façade · Aldoks Neo' },
  { slug: 'apex-bank', title: 'Apex Bank', type: 'Коммерческие', city: 'Ташкент', image: pics.facade, text: 'Структурное остекление входной группы и стеклянные ограждения.', systems: 'JP façade · Triplex' },
  { slug: 'gulsanam', title: 'ЖК «Gulsanam»', type: 'Частные', city: 'Ташкент', image: pics.glass, text: 'Тёплое остекление частного дома, витражи и роллетные системы.', systems: 'Aldoks Neo · Akfa' },
];

function Meta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let node = document.querySelector(selector);
      if (!node) { node = document.createElement('meta'); document.head.appendChild(node); }
      node.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'name', 'description');
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description');
    setMeta('meta[property="og:description"]', 'content', description);
  }, [title, description]);
  return null;
}

function CountUp({ 
  value, 
  duration = 1.8, 
  suffix = '', 
  prefix = '' 
}: { 
  value: number | string; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10px' });
  
  let targetNum = typeof value === 'number' ? value : 0;
  let targetPrefix = prefix;
  let targetSuffix = suffix;

  if (typeof value === 'string') {
    const match = value.match(/^([^\d]*)([\d\s,.]+)(.*)$/);
    if (match) {
      targetPrefix = prefix || match[1];
      targetNum = parseFloat(match[2].replace(/\s/g, '').replace(',', '.')) || 0;
      targetSuffix = suffix || match[3];
    }
  }

  const [displayValue, setDisplayValue] = useState(0);
  const prevValueRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;
    const from = prevValueRef.current;
    const to = targetNum;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayValue(latest);
      },
      onComplete() {
        prevValueRef.current = to;
      }
    });
    return () => controls.stop();
  }, [isInView, targetNum, duration]);

  const formattedNum = Math.round(displayValue).toLocaleString('ru-RU');

  return (
    <span ref={ref} className="tabular-nums">
      {targetPrefix}
      {isInView ? formattedNum : '0'}
      {targetSuffix}
    </span>
  );
}

function UniqueSelect({
  label,
  value,
  onChange,
  options,
  placeholder = 'Выберите...',
  testId,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string; badge?: string; desc?: string }[];
  placeholder?: string;
  testId?: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(o => o.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative border-b border-black/20 pb-3 transition-all ${open ? 'z-50' : 'z-10'}`}>
      <span className="block text-xs font-semibold text-black/70 mb-1.5">{label}</span>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 text-left py-1 text-base md:text-lg font-bold text-[#151515] outline-none transition group cursor-pointer"
        data-testid={testId}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown size={18} className={`text-black/60 transition-transform duration-200 shrink-0 ${open ? 'rotate-180 text-[#816a3f]' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-[100] overflow-hidden rounded-2xl border border-[#c6a15b]/40 bg-[#171717] shadow-2xl backdrop-blur-xl"
          >
            <div className="custom-scrollbar max-h-64 overflow-y-auto p-2 space-y-1">
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-xs sm:text-sm transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#c6a15b] font-bold text-black shadow-sm'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex flex-col truncate pr-2">
                      <span className="truncate">{opt.label}</span>
                      {opt.desc && (
                        <span className={`text-[10px] truncate ${isSelected ? 'text-black/70 font-normal' : 'text-white/45'}`}>
                          {opt.desc}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {opt.badge && (
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-mono ${
                          isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-white/70'
                        }`}>
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && <Check size={14} className="shrink-0 text-black" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NumberStepperInput({
  label,
  value,
  onChange,
  placeholder = '1000',
  min = 100,
  max = 10000,
  step = 50,
  testId,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  testId?: string;
}) {
  const handleStep = (delta: number) => {
    const current = parseInt(value, 10) || parseInt(placeholder, 10) || 0;
    const next = Math.max(min, Math.min(max, current + delta));
    onChange(String(next));
  };

  return (
    <div className="border-b border-black/20 pb-2">
      <span className="block text-xs font-semibold text-black/70 mb-1">{label}</span>
      <div className="flex items-center justify-between gap-1.5">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          className="w-full bg-transparent py-1 text-base font-bold text-[#151515] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          data-testid={testId}
        />
        <div className="flex flex-col items-center justify-center rounded-lg border border-black/15 bg-black/5 p-0.5 shadow-xs shrink-0">
          <button
            type="button"
            onClick={() => handleStep(step)}
            aria-label="Увеличить"
            className="flex size-4.5 items-center justify-center rounded text-black/60 hover:bg-[#c6a15b] hover:text-black transition-colors cursor-pointer active:scale-90"
          >
            <ChevronUp size={12} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => handleStep(-step)}
            aria-label="Уменьшить"
            className="flex size-4.5 items-center justify-center rounded text-black/60 hover:bg-[#c6a15b] hover:text-black transition-colors cursor-pointer active:scale-90"
          >
            <ChevronDown size={12} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
      <img src="/favicon.png" alt="ALL WINDOWS" className="size-8 sm:size-9 object-contain shrink-0" />
      <span className="hidden border-l border-[#c6a15b]/40 pl-3 text-[9px] leading-tight tracking-[.2em] text-white/60 sm:block">
        ALL<br />WINDOWS
      </span>
    </Link>
  );
}

function EstimateModal({ open, onClose, initialProduct = '' }: { open: boolean; onClose: () => void; initialProduct?: string }) {
  const [status, setStatus] = useState<'form' | 'loading' | 'done'>('form');
  const [name, setName] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [product, setProduct] = useState(initialProduct); 
  const [comment, setComment] = useState('');

  useEffect(() => { 
    if (open) { 
      setStatus('form'); 
      setProduct(initialProduct); 
    } 
  }, [open, initialProduct]);

  const submit = (e: FormEvent) => { 
    e.preventDefault(); 
    if (!name.trim() || phone.replace(/\D/g, '').length < 9) return; 
    setStatus('loading'); 
    window.setTimeout(() => setStatus('done'), 900); 
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-lg rounded-xl border border-[#c6a15b]/30 bg-[#171717] p-6 md:p-9" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            onClick={e => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute right-5 top-5 text-white/50 hover:text-[#d4b16a]" aria-label="Закрыть" data-testid="button-close-modal">
              <X size={20} />
            </button>
            {status === 'done' ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 grid size-14 place-items-center rounded-full bg-[#c6a15b] text-[#101010]">
                  <Check />
                </div>
                <h2 className="font-display text-3xl font-extrabold">Заявка принята</h2>
                <p className="mt-3 text-sm text-white/60">Спасибо, {name}. Специалист ALL WINDOWS свяжется с вами в рабочее время.</p>
                <button onClick={onClose} className="mt-8 border-b border-[#c6a15b] pb-1 text-sm text-[#d4b16a]" data-testid="button-modal-done">
                  Вернуться на сайт
                </button>
              </div>
            ) : (
              <>
                <p className="mb-2 text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">ALL WINDOWS / 01</p>
                <h2 className="font-display text-3xl font-extrabold">Рассчитать проект</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Оставьте контакты — подготовим предварительную стоимость и предложим время замера.</p>
                <form onSubmit={submit} className="mt-7 space-y-4">
                  <label className="block text-xs text-white/55">
                    Ваше имя
                    <input value={name} onChange={e => setName(e.target.value)} required placeholder="Имя" className="mt-2 w-full rounded-lg border border-white/10 bg-[#0e0e0e] px-4 py-3 text-sm outline-none transition focus:border-[#c6a15b]" data-testid="input-estimate-name" />
                  </label>
                  <label className="block text-xs text-white/55">
                    Телефон
                    <input value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+998 (__) ___-__-__" className="mt-2 w-full rounded-lg border border-white/10 bg-[#0e0e0e] px-4 py-3 text-sm outline-none transition focus:border-[#c6a15b]" data-testid="input-estimate-phone" />
                  </label>
                  <label className="block text-xs text-white/55">
                    Тип продукции / Система
                    <select value={product} onChange={e => setProduct(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-[#0e0e0e] px-4 py-3 text-sm outline-none focus:border-[#c6a15b]" data-testid="select-estimate-product">
                      <option value="">Выберите решение</option>
                      {categories.map(c => <option key={c.slug} value={c.title}>{c.title}</option>)}
                    </select>
                  </label>
                  <label className="block text-xs text-white/55">
                    Комментарий
                    <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Площадь, адрес или задача" rows={3} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#0e0e0e] px-4 py-3 text-sm outline-none focus:border-[#c6a15b]" data-testid="textarea-estimate-comment" />
                  </label>
                  <button disabled={status === 'loading'} className="gold-gradient mt-2 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-[#121212] disabled:opacity-60" data-testid="button-submit-estimate">
                    {status === 'loading' ? 'Отправляем…' : <>Отправить заявку <ArrowRight size={16} /></>}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Header({ lang, setLang, onEstimate }: { lang: Lang; setLang: (l: Lang) => void; onEstimate: () => void }) {
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const [location] = useLocation(); 
  const t = copy(lang);

  useEffect(() => { 
    const f = () => setScrolled(window.scrollY > 24); 
    window.addEventListener('scroll', f); 
    return () => window.removeEventListener('scroll', f); 
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? 'border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur-xl' : 'bg-gradient-to-b from-black/60 to-transparent'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-8 py-5 lg:px-12 xl:px-14">
        <Logo />
        <nav className="hidden items-center gap-7 xl:flex">
          {t.nav.map((n, i) => { 
            const href = ['/products', '/projects', '/about', '/services', '/contacts'][i]; 
            const isActive = location === href || (href === '/products' && location.startsWith('/products'));
            return (
              <Link key={href} href={href} className={`text-[11px] uppercase tracking-[.1em] transition hover:text-[#d4b16a] ${isActive ? 'text-[#d4b16a]' : 'text-white/65'}`} data-testid={`link-nav-${href.slice(1)}`}>
                {n}
              </Link>
            ); 
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+998888001800" className="hidden items-center gap-2 text-xs text-white/75 lg:flex" data-testid="link-header-phone">
            <Phone size={14} className="text-[#d4b16a]" /> +998 88 800 18 00
          </a>
          <button onClick={onEstimate} className="hidden h-8 items-center justify-center rounded-full bg-[#c6a15b] px-3.5 text-[9.5px] font-bold uppercase tracking-wider text-[#111] transition hover:bg-[#e0c083] cursor-pointer lg:inline-flex" data-testid="button-header-estimate">
            {t.estimate}
          </button>
          <div className="relative flex h-8 items-center rounded-full border border-white/15 bg-black/40 p-0.5 text-[10px] font-bold tracking-wider backdrop-blur-sm">
            {(['ru', 'uz'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`relative z-10 flex h-full items-center justify-center rounded-full px-2.5 uppercase transition-colors duration-200 cursor-pointer ${
                  lang === l ? 'text-[#111]' : 'text-white/50 hover:text-white/80'
                }`}
                data-testid={`button-language-${l}`}
              >
                {lang === l && (
                  <motion.div
                    layoutId="activeLangIndicator"
                    className="absolute inset-0 rounded-full bg-[#c6a15b] shadow-sm"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{l.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-white/15 xl:hidden" aria-label="Меню" data-testid="button-mobile-menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-[#111]/95 px-5 pb-6 pt-3 xl:hidden">
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-3 pt-1">
              <span className="text-xs text-white/50 font-medium">Язык сайта / Til</span>
              <div className="relative flex items-center rounded-full border border-white/15 bg-black/50 p-0.5 text-[10px] font-bold tracking-widest">
                {(['ru', 'uz'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`relative z-10 rounded-full px-3 py-1 uppercase transition-colors duration-200 ${
                      lang === l ? 'text-[#111]' : 'text-white/50 hover:text-white/80'
                    }`}
                    data-testid={`button-mobile-language-${l}`}
                  >
                    {lang === l && (
                      <motion.div
                        layoutId="activeMobileLangIndicator"
                        className="absolute inset-0 rounded-full bg-[#c6a15b] shadow-sm"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{l.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
            {t.nav.map((n, i) => { 
              const href = ['/products', '/projects', '/about', '/services', '/contacts'][i]; 
              return (
                <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-white/10 py-3.5 text-sm text-white/80" data-testid={`link-mobile-nav-${href.slice(1)}`}>
                  {n}<ArrowUpRight className="float-right text-[#c6a15b]" size={16} />
                </Link>
              ); 
            })}
            <button onClick={() => { setOpen(false); onEstimate(); }} className="mt-5 w-full rounded-full bg-[#c6a15b] py-3 text-sm font-bold text-black" data-testid="button-mobile-estimate">
              {t.estimate}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer({ onEstimate }: { onEstimate: () => void }) {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-8 py-16 md:grid-cols-4 lg:px-12 xl:px-14">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-6 max-w-[210px] text-sm leading-6 text-white/45">
            Оконные, дверные и фасадные системы для современной архитектуры Ташкента.
          </p>
          <p className="mt-9 text-[10px] uppercase tracking-[.2em] text-[#c6a15b]">Bizning yo'nalish</p>
        </div>
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[#c6a15b]">Навигация</p>
          <div className="space-y-3 text-sm text-white/55">
            <Link href="/products" className="block hover:text-white" data-testid="link-footer-products">Продукция</Link>
            <Link href="/projects" className="block hover:text-white" data-testid="link-footer-projects">Наши объекты</Link>
            <Link href="/about" className="block hover:text-white" data-testid="link-footer-about">О компании</Link>
            <Link href="/services" className="block hover:text-white" data-testid="link-footer-services">Услуги</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[#c6a15b]">Контакты</p>
          <div className="space-y-3 text-sm text-white/55">
            <a href="tel:+998888001800" className="block hover:text-white" data-testid="link-footer-phone">+998 88 800 18 00</a>
            <p>Ташкент, ул. Мукими, 15</p>
            <p>Пн–Сб · 09:00–18:00</p>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[.2em] text-[#c6a15b]">Связаться</p>
          <p className="mb-5 text-sm leading-6 text-white/55">Расскажите о задаче — ответим с расчётом и сроками.</p>
          <button onClick={onEstimate} className="flex items-center gap-2 text-sm text-[#d4b16a]" data-testid="button-footer-estimate">
            Оставить заявку <ArrowRight size={15} />
          </button>
          <div className="mt-7 flex gap-4 text-white/45">
            <a href="https://instagram.com/all_windows" aria-label="Instagram" data-testid="link-footer-instagram"><Instagram size={18} /></a>
            <a href="https://t.me/all_windows" aria-label="Telegram" data-testid="link-footer-telegram"><Send size={18} /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] justify-between border-t border-white/10 px-6 sm:px-8 py-5 text-[10px] text-white/30 lg:px-12 xl:px-14">
        <span>© 2019–2026 ALL WINDOWS (ООО «VINNIAN GROUP»)</span>
        <span>Проектирование · Производство · Монтаж</span>
      </div>
    </footer>
  );
}

function Shell({ children, lang, setLang, onEstimate }: { children: ReactNode; lang: Lang; setLang: (l: Lang) => void; onEstimate: (p?: string) => void }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="site-noise min-h-[100dvh] bg-[#0d0d0d]">
      <Header lang={lang} setLang={setLang} onEstimate={() => onEstimate()} />
      {children}
      <Footer onEstimate={() => onEstimate()} />
      <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2 md:hidden">
        <a href="tel:+998888001800" className="grid size-12 place-items-center rounded-full bg-[#c6a15b] text-[#111] shadow-xl" aria-label="Позвонить" data-testid="button-floating-call"><Phone size={18} /></a>
        <a href="https://t.me/all_windows" className="grid size-12 place-items-center rounded-full border border-[#c6a15b] bg-[#141414] text-[#d4b16a]" aria-label="Telegram" data-testid="button-floating-telegram"><Send size={18} /></a>
      </div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-5 flex items-center gap-4">
        <span className={`text-[10px] uppercase tracking-[.28em] ${light ? 'text-[#816a3f]' : 'text-[#d4b16a]'}`}>{eyebrow}</span>
        <span className={`h-px w-16 ${light ? 'bg-[#816a3f]' : 'bg-[#c6a15b]'}`} />
      </div>
      <h2 className={`font-display text-4xl font-extrabold leading-[1.08] tracking-[-.04em] md:text-6xl ${light ? 'text-[#151515]' : 'text-white'}`}>{title}</h2>
      {text && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-black/55' : 'text-white/50'}`}>{text}</p>}
    </div>
  );
}

function Home({ onEstimate, lang }: { onEstimate: (p?: string) => void; lang: Lang }) {
  const t = copy(lang); 
  const [slide, setSlide] = useState(0);

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(categories[0]?.slug || 'windows-doors');
  const availableProducts = products.filter(p => p.categorySlug === selectedCategorySlug);
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(availableProducts[0]?.slug || '');

  const [formGlass, setFormGlass] = useState('Двухкамерный энергосберегающий');
  const [formWidth, setFormWidth] = useState('1800');
  const [formHeight, setFormHeight] = useState('1400');
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formComment, setFormComment] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const onCategoryChange = (newCatSlug: string) => {
    setSelectedCategorySlug(newCatSlug);
    const nextProducts = products.filter(p => p.categorySlug === newCatSlug);
    if (nextProducts.length > 0) {
      setSelectedProductSlug(nextProducts[0].slug);
    }
  };

  const selectedCategoryObj = categories.find(c => c.slug === selectedCategorySlug) || categories[0];
  const selectedProductObj = products.find(p => p.slug === selectedProductSlug) || availableProducts[0] || products[0];

  const handleHomeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || formPhone.replace(/\D/g, '').length < 9) return;
    setFormStatus('loading');
    window.setTimeout(() => {
      setFormStatus('done');
    }, 800);
  };

  const categoryOptions = categories.map(c => {
    const count = products.filter(p => p.categorySlug === c.slug).length;
    return {
      label: c.title,
      value: c.slug,
      desc: c.subtitle,
      badge: `${count} ${count === 1 ? 'система' : count < 5 ? 'системы' : 'систем'}`,
    };
  });

  const productOptions = availableProducts.map(p => ({
    label: p.title,
    value: p.slug,
    badge: p.brandCountry || p.brand,
    desc: p.subtitle,
  }));

  const glassOptions = [
    { label: 'Двухкамерный энергосберегающий Low-E', value: 'Двухкамерный энергосберегающий', desc: 'Максимальная теплоизоляция для жилых помещений' },
    { label: 'Двухкамерный мультифункциональный', value: 'Двухкамерный мультифункциональный', desc: 'Защита от солнца летом и сохранение тепла зимой' },
    { label: 'Однокамерный стандартный', value: 'Однокамерный стандартный', desc: 'Для веранд, неотапливаемых террас и внутренних дверей' },
    { label: 'Триплекс безопасный (ламинированный)', value: 'Триплекс безопасный (ламинированный)', desc: 'Повышенная безопасность и защита от взлома' },
    { label: 'Закаленное стекло (Tempered)', value: 'Закаленное стекло', desc: 'Для стеклянных перегородок, ограждений и витражей' },
  ];

  const testimonials = [
    { n: 'Алексей С.', o: 'Aminar House', q: 'Команда выдержала график фасадных работ и аккуратно прошла все узлы примыкания.' }, 
    { n: 'Малика Р.', o: 'Частный дом, Ташкент', q: 'Панорамные окна получились именно такими, как в проекте. Отдельно отмечу работу замерщика.' }, 
    { n: 'Илья К.', o: 'Fazo Residence', q: 'Понятный расчёт, собственное производство и монтаж без простоев на объекте.' }
  ];

  return (
    <>
      <Meta title="ALL WINDOWS — окна, двери и фасады в Ташкенте" description="Производство алюминиевых и ПВХ окон, дверей, фасадных и раздвижных систем в Ташкенте." />
      <main>
        <section className="relative flex h-[100svh] max-h-[100svh] min-h-[540px] flex-col justify-end overflow-hidden border-b border-white/10 pb-6 sm:pb-10 md:pb-14 pt-20 sm:pt-24 md:pt-28">
          <img src={pics.hero} alt="Панорамное остекление современного дома" className="absolute inset-0 size-full object-cover object-center opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-black/20" />
          <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-14">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-4xl">
              <p className="mb-3 sm:mb-5 text-[10px] uppercase tracking-[.3em] text-[#e0c083]">Производство в Ташкенте · с 2019 года</p>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[.95] tracking-[-.06em] text-white">
                Свет.<br />
                <span className="text-[#d4b16a]">Точная форма.</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-base md:text-lg leading-relaxed text-white/65">
                Производство окон, дверей и фасадных систем для частных и коммерческих объектов. Алюминий, ПВХ, витражи, раздвижные решения.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-wrap gap-3">
                <button onClick={() => onEstimate()} className="gold-gradient flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-[#111]" data-testid="button-hero-estimate">
                  {t.estimate} <ArrowRight size={17} />
                </button>
                <a href="tel:+998888001800" className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#c6a15b] hover:text-[#d4b16a]" data-testid="link-hero-phone">
                  <Phone size={16} /> {t.call}
                </a>
              </div>
            </motion.div>
            <div className="mt-6 sm:mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[.18em] text-white/40">
              <span>01</span>
              <span className="h-px w-24 bg-white/25" />
              <span>Архитектура, которая работает</span>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#111]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-14">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
              <Benefit icon={<Factory />} title="Своё производство" text="Цех в Ташкенте, контроль каждого заказа" />
              <Benefit icon={<FileCheck2 />} title="Профили и фурнитура" text="Aldoks, Engelberg, Akfa, Roto, Master" />
              <Benefit icon={<Wrench />} title="Монтаж под ключ" text="От замера до регулировки на объекте" />
              <Benefit icon={<ShieldCheck />} title="Гарантия" text="Фиксируем обязательства в договоре" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 sm:px-8 py-24 lg:px-12 xl:px-14">
          <SectionIntro eyebrow="01 / Продукция" title="Системы для света и воздуха" text="Подбираем конфигурацию по архитектуре, нагрузке и сценарию использования — не по шаблону." />
          <div className="grid gap-3 md:grid-cols-12">
            {categories.slice(0, 6).map((p, i) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className={`group image-zoom relative min-h-[270px] overflow-hidden rounded-xl border border-white/10 ${i === 0 || i === 3 || i === 4 ? 'md:col-span-7' : 'md:col-span-5'}`} data-testid={`card-home-product-${p.slug}`}>
                <img src={p.image} alt={p.title} className="absolute inset-0 size-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="relative flex h-full min-h-[270px] flex-col justify-end p-6">
                  <span className="mb-2 text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">0{i + 1} / AW system</span>
                  <h3 className="font-display text-2xl font-extrabold">{p.title}</h3>
                  <span className="mt-4 flex items-center gap-2 text-xs text-white/55 transition group-hover:text-[#d4b16a]">
                    {t.details} <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/products" className="mt-8 inline-flex items-center gap-3 border-b border-[#c6a15b] pb-2 text-sm text-[#d4b16a]" data-testid="link-all-products">
            Весь каталог <ArrowRight size={15} />
          </Link>
        </section>

        <section className="bg-[#d9c8a3] px-6 sm:px-8 py-10 sm:py-14 md:py-16 text-[#151515] lg:px-12 xl:px-14 flex flex-col justify-center min-h-[100svh] relative z-20">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-6 md:mb-8 max-w-3xl">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[.28em] text-[#816a3f]">02 / Заявка на расчёт</span>
                <span className="h-px w-16 bg-[#816a3f]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-[-.04em] text-[#151515]">Заявка на индивидуальный расчёт</h2>
              <p className="mt-2.5 max-w-xl text-xs sm:text-sm leading-6 text-black/60">Выберите категорию и систему из нашего каталога — специалист свяжется с вами с готовой сметой.</p>
            </div>

            {formStatus === 'done' ? (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center rounded-2xl bg-[#171717] p-8 md:p-12 text-center text-white max-w-xl mx-auto shadow-2xl border border-[#c6a15b]/30 my-4">
                <div className="mb-4 grid size-14 place-items-center rounded-full bg-[#c6a15b] text-black">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Заявка принята!</h3>
                <p className="mt-3 text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
                  Спасибо, {formName}. Заявка на систему «{selectedProductObj?.title}» ({selectedCategoryObj.title}) успешно получена. Специалист ALL WINDOWS свяжется с вами в течение рабочего дня.
                </p>
                <button
                  type="button"
                  onClick={() => { setFormStatus('idle'); setFormName(''); setFormPhone(''); setFormComment(''); }}
                  className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition cursor-pointer"
                >
                  Отправить другую заявку
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleHomeSubmit} className="relative z-30 max-w-4xl">
                <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  <div>
                    <UniqueSelect
                      label="1. Категория продукции"
                      value={selectedCategorySlug}
                      onChange={onCategoryChange}
                      options={categoryOptions}
                      testId="select-home-category"
                    />
                  </div>

                  <div>
                    <UniqueSelect
                      label={`2. Система / Продукт (${selectedCategoryObj.title})`}
                      value={selectedProductSlug}
                      onChange={setSelectedProductSlug}
                      options={productOptions}
                      placeholder="Выберите систему..."
                      testId="select-home-product"
                    />
                  </div>

                  <div>
                    <UniqueSelect
                      label="3. Тип стеклопакета / заполнения"
                      value={formGlass}
                      onChange={setFormGlass}
                      options={glassOptions}
                      testId="select-home-glass"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <NumberStepperInput
                      label="Ширина, мм"
                      value={formWidth}
                      onChange={setFormWidth}
                      placeholder="1800"
                      step={50}
                      testId="input-home-width"
                    />

                    <NumberStepperInput
                      label="Высота, мм"
                      value={formHeight}
                      onChange={setFormHeight}
                      placeholder="1400"
                      step={50}
                      testId="input-home-height"
                    />
                  </div>

                  <label className="border-b border-black/20 pb-2 text-xs font-semibold">
                    Ваше имя *
                    <input 
                      required 
                      value={formName} 
                      onChange={e => setFormName(e.target.value)} 
                      placeholder="Имя"
                      className="mt-1 block w-full bg-transparent py-1 text-base font-bold outline-none placeholder:text-black/40" 
                      data-testid="input-home-name" 
                    />
                  </label>

                  <label className="border-b border-black/20 pb-2 text-xs font-semibold">
                    Номер телефона *
                    <input 
                      required 
                      type="tel"
                      value={formPhone} 
                      onChange={e => setFormPhone(e.target.value)} 
                      placeholder="+998 (__) ___-__-__"
                      className="mt-1 block w-full bg-transparent py-1 text-base font-bold outline-none placeholder:text-black/40" 
                      data-testid="input-home-phone" 
                    />
                  </label>

                  <label className="border-b border-black/20 pb-2 text-xs font-semibold sm:col-span-2">
                    Комментарий или адрес объекта
                    <input 
                      value={formComment} 
                      onChange={e => setFormComment(e.target.value)} 
                      placeholder="Количество проёмов, адрес замера или пожелания"
                      className="mt-1 block w-full bg-transparent py-1 text-sm font-medium outline-none placeholder:text-black/40" 
                      data-testid="input-home-comment" 
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button 
                    disabled={formStatus === 'loading'} 
                    type="submit" 
                    className="gold-gradient flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-sm font-bold text-black shadow-lg hover:shadow-xl transition cursor-pointer disabled:opacity-60" 
                    data-testid="button-home-submit"
                  >
                    {formStatus === 'loading' ? 'Отправка…' : <>Отправить заявку <ArrowRight size={17} /></>}
                  </button>
                  <span className="text-xs text-black/55 font-medium">
                    Ответим и рассчитаем в течение 24 часов
                  </span>
                </div>
              </form>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 sm:px-8 py-24 lg:px-12 xl:px-14">
          <SectionIntro eyebrow="03 / Наши объекты" title="Конструкции в реальной архитектуре" text="Не просто каталог решений — результат, который каждый день работает в городе." />
          <div className="grid gap-3 md:grid-cols-2">
            {projects.slice(0, 3).map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={`group image-zoom relative overflow-hidden rounded-xl ${i === 0 ? 'md:row-span-2' : ''}`} data-testid={`card-home-project-${p.slug}`}>
                <img src={p.image} alt={p.title} className={`size-full min-h-[260px] object-cover ${i === 0 ? 'md:min-h-[540px]' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">{p.type}</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-xs text-white/60">{p.systems}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="mt-8 inline-flex items-center gap-3 border-b border-[#c6a15b] pb-2 text-sm text-[#d4b16a]" data-testid="link-home-projects">
            Смотреть все объекты <ArrowRight size={15} />
          </Link>
        </section>

        <section className="border-y border-white/10 bg-[#111]">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-14">
            <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
              <Stat value="98+" label="реализованных проектов" />
              <Stat value="2 400+" label="клиентов доверили нам окна" />
              <Stat value="7" label="лет в производстве (с 2019 года)" />
              <Stat value="24 ч" label="средний ответ по заявке" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:px-8 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-12 xl:px-14">
          <SectionIntro eyebrow="04 / Процесс" title="От идеи до точного проёма" text="Один ответственный подрядчик на всех этапах — от инженерного решения до последней регулировки." />
          <div className="divide-y divide-white/10">
            {['Заявка и консультация', 'Бесплатный замер', 'Расчёт и договор', 'Производство в Ташкенте', 'Монтаж и гарантия'].map((s, i) => (
              <div key={s} className="flex items-center justify-between py-5">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-[#c6a15b]">0{i + 1}</span>
                  <span className="font-display text-xl font-bold">{s}</span>
                </div>
                <ArrowUpRight size={18} className="text-white/35" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#151515] px-6 sm:px-8 py-24 lg:px-12 xl:px-14">
          <div className="mx-auto max-w-[900px]">
            <SectionIntro eyebrow="05 / Отзывы" title="Говорят люди, которые живут и работают в этих пространствах" />
            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div key={slide} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <p className="max-w-2xl font-display text-2xl font-semibold leading-snug md:text-4xl">«{testimonials[slide].q}»</p>
                  <div className="mt-8 flex items-center gap-4 text-xs">
                    <span className="font-bold">{testimonials[slide].n}</span>
                    <span className="text-white/35">/</span>
                    <span className="text-[#d4b16a]">{testimonials[slide].o}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 right-0 flex gap-2">
                <button onClick={() => setSlide((slide + testimonials.length - 1) % testimonials.length)} className="grid size-10 place-items-center rounded-full border border-white/15" aria-label="Предыдущий отзыв" data-testid="button-testimonial-prev">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={() => setSlide((slide + 1) % testimonials.length)} className="grid size-10 place-items-center rounded-full border border-white/15" aria-label="Следующий отзыв" data-testid="button-testimonial-next">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Cta onEstimate={onEstimate} />
      </main>
    </>
  );
}

function Benefit({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { 
  return (
    <div className="py-7 px-4 md:py-8 md:px-6 first:pl-0 last:pr-0">
      <div className="mb-5 text-[#d4b16a]">{icon}</div>
      <h3 className="font-display text-sm font-bold">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-white/45">{text}</p>
    </div>
  ); 
}

function Stat({ value, label }: { value: string; label: string }) { 
  return (
    <div className="p-6 text-center md:p-10">
      <p className="font-display text-3xl font-extrabold text-[#d4b16a] md:text-5xl">
        <CountUp value={value} />
      </p>
      <p className="mx-auto mt-3 max-w-[130px] text-[10px] uppercase leading-4 tracking-wider text-white/45">{label}</p>
    </div>
  ); 
}

function Cta({ onEstimate }: { onEstimate: (p?: string) => void }) { 
  return (
    <section className="relative overflow-hidden px-6 sm:px-8 py-24 lg:px-12 xl:px-14">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${pics.workshop})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
      <div className="absolute inset-0 bg-[#0d0d0d]/85" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">06 / Начать проект</p>
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-6xl">Ваш проём —<br />наша точная работа.</h2>
        </div>
        <button onClick={() => onEstimate()} className="gold-gradient flex shrink-0 items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-black" data-testid="button-cta-estimate">
          Обсудить проект <ArrowUpRight size={17} />
        </button>
      </div>
    </section>
  ); 
}

// --- LEVEL 1: MAIN CATEGORIES PAGE ---
function ProductsPage({ onEstimate }: { onEstimate: (p?: string) => void }) { 
  return (
    <PageFrame title="Продукция" eyebrow="Каталог систем" intro="Оконные, дверные, фасадные, раздвижные и интерьерные решения — спроектированы для климата, архитектуры и надежной эксплуатации в Узбекистане.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const count = products.filter(p => p.categorySlug === c.slug).length;
          return (
            <Link key={c.slug} href={`/products/${c.slug}`} className="group image-zoom relative min-h-[340px] overflow-hidden rounded-xl border border-white/10" data-testid={`card-category-${c.slug}`}>
              <img src={c.image} alt={c.title} className="absolute inset-0 size-full object-cover opacity-60 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative flex min-h-[340px] flex-col justify-end p-7">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">0{i + 1} / system</p>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-white/80"><CountUp value={count} duration={0.8} /> {count === 1 ? 'система' : count < 5 ? 'системы' : 'систем'}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-extrabold">{c.title}</h2>
                <p className="mt-1.5 text-xs text-white/60 line-clamp-2">{c.subtitle}</p>
                <span className="mt-5 flex items-center gap-2 text-xs text-[#d4b16a] font-semibold">{copy('ru').details} <ArrowRight size={14} /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </PageFrame>
  ); 
}

// --- LEVEL 2: CATEGORY PAGE WITH SUBCATEGORY FILTER & PRODUCT CARDS GRID ---
function CategoryProductsPage({ onEstimate }: { onEstimate: (p?: string) => void }) {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find(c => c.slug === categorySlug) ?? categories[0];
  const allItems = products.filter(p => p.categorySlug === category.slug);

  const subcategories = Array.from(
    new Set(allItems.map(p => p.subcategory).filter(Boolean))
  ) as string[];

  const [selectedSub, setSelectedSub] = useState<string>('all');

  useEffect(() => {
    setSelectedSub('all');
  }, [categorySlug]);

  const items = selectedSub === 'all' 
    ? allItems 
    : allItems.filter(p => p.subcategory === selectedSub);

  return (
    <PageFrame 
      eyebrow={`Продукция / ${category.title}`} 
      title={category.title} 
      intro={category.description}
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b16a] hover:underline">
          <ChevronLeft size={16} /> Вернуться ко всем категориям
        </Link>
        <span className="text-xs text-white/40"><CountUp value={items.length} duration={0.6} /> {items.length === 1 ? 'система' : items.length < 5 ? 'системы' : 'систем'}</span>
      </div>

      {subcategories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedSub('all')}
            className={`rounded-full border px-4 py-2 text-xs transition font-semibold ${
              selectedSub === 'all'
                ? 'border-[#c6a15b] bg-[#c6a15b] text-black shadow-md'
                : 'border-white/15 bg-[#151515] text-white/60 hover:border-[#c6a15b] hover:text-white'
            }`}
            data-testid="filter-sub-all"
          >
            Все (<CountUp value={allItems.length} duration={0.6} />)
          </button>
          {subcategories.map(sub => {
            const subCount = allItems.filter(p => p.subcategory === sub).length;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`rounded-full border px-4 py-2 text-xs transition font-semibold ${
                  selectedSub === sub
                    ? 'border-[#c6a15b] bg-[#c6a15b] text-black shadow-md'
                    : 'border-white/15 bg-[#151515] text-white/60 hover:border-[#c6a15b] hover:text-white'
                }`}
                data-testid={`filter-sub-${sub}`}
              >
                {sub} (<CountUp value={subCount} duration={0.6} />)
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link 
            key={p.slug} 
            href={`/products/${category.slug}/${p.slug}`} 
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#151515] transition duration-300 hover:border-[#c6a15b]"
            data-testid={`card-product-${p.slug}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} className="size-full object-cover transition duration-500 group-hover:scale-105 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                <span className="rounded bg-[#c6a15b] px-2.5 py-1 text-[9px] font-bold text-black uppercase">
                  {p.brandCountry || p.brand}
                </span>
                {p.subcategory && (
                  <span className="rounded bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 text-[9px] font-semibold text-white/90">
                    {p.subcategory}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#d4b16a] font-mono">{p.brand}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-[#d4b16a] transition">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/55 line-clamp-2">{p.subtitle}</p>

                <div className="mt-4 space-y-1.5">
                  {p.specs.slice(0, 4).map(s => (
                    <div key={s} className="flex items-start gap-2 text-[11px] text-white/70">
                      <Check size={12} className="text-[#c6a15b] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-xs text-[#d4b16a] font-semibold">{copy('ru').details}</span>
                <ArrowRight size={14} className="text-[#d4b16a] transition group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}

// --- LEVEL 3: PRODUCT DETAIL PAGE ---
function ProductDetail({ onEstimate }: { onEstimate: (p?: string) => void }) { 
  const { categorySlug, productSlug, id } = useParams<{ categorySlug?: string; productSlug?: string; id?: string }>(); 
  const slug = productSlug || id;
  const product = products.find(p => p.slug === slug) ?? products[0]; 
  const category = categories.find(c => c.slug === product.categorySlug) ?? categories[0];

  return (
    <PageFrame title={product.title} eyebrow={`Продукция / ${category.title} / ${product.title}`} intro={product.description}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link href={`/products/${category.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b16a] hover:underline">
          <ChevronLeft size={16} /> Назад к системам «{category.title}»
        </Link>
        {product.subcategory && (
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-mono text-white/70">
            {product.subcategory}
          </span>
        )}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
        <div className="overflow-hidden rounded-xl">
          <img src={product.image} alt={product.title} className="aspect-[4/3] size-full object-cover" />
        </div>
        <div className="rounded-xl border border-white/10 bg-[#151515] p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">Технические характеристики</p>
            <span className="rounded bg-white/10 px-2.5 py-1 text-[10px] font-mono text-white/80">{product.brand}</span>
          </div>
          <div className="mt-4 divide-y divide-white/10">
            {product.specs.map(s => (
              <div key={s} className="flex items-start gap-3 py-3 text-sm text-white/75">
                <Check size={15} className="text-[#c6a15b] shrink-0 mt-1" />
                <span>{s}</span>
              </div>
            ))}
          </div>
          <button onClick={() => onEstimate(product.title)} className="gold-gradient mt-7 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold text-black" data-testid="button-product-estimate">
            Рассчитать проект <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="mt-20">
        <p className="mb-6 text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">Детали и применение</p>
        <div className="grid gap-3 md:grid-cols-3">
          <img src={pics.detail} alt="Деталь оконной системы" className="h-60 w-full rounded-xl object-cover" />
          <img src={pics.interior} alt="Интерьер с остеклением" className="h-60 w-full rounded-xl object-cover" />
          <img src={pics.workshop} alt="Производство оконных систем" className="h-60 w-full rounded-xl object-cover" />
        </div>
      </div>
      {product.related && product.related.length > 0 && (
        <div className="mt-20">
          <SectionIntro eyebrow="Выбирают вместе" title="Соберите полный комплект" />
          <div className="grid gap-3 sm:grid-cols-2">
            {product.related.map(relSlug => { 
              const r = products.find(p => p.slug === relSlug);
              if (!r) return null;
              return (
                <Link key={r.slug} href={`/products/${r.categorySlug}/${r.slug}`} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#151515] p-4 transition hover:border-[#c6a15b]" data-testid={`link-related-${r.slug}`}>
                  <img src={r.image} alt={r.title} className="size-20 rounded-lg object-cover shrink-0" />
                  <div>
                    <h3 className="font-display text-base font-bold">{r.title}</h3>
                    <p className="mt-1 text-xs text-white/45 line-clamp-1">{r.subtitle}</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-[#c6a15b] shrink-0" size={16} />
                </Link>
              ); 
            })}
          </div>
        </div>
      )}
    </PageFrame>
  ); 
}

function PageFrame({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) { 
  return (
    <>
      <Meta title={`${title} — ALL WINDOWS`} description={intro} />
      <main className="mx-auto max-w-[1440px] px-6 sm:px-8 pb-24 pt-28 sm:pt-32 md:pt-36 lg:px-12 xl:px-14">
        <div className="mb-10 sm:mb-12 max-w-4xl">
          <p className="mb-4 flex items-center gap-4 text-[10px] uppercase tracking-[.28em] text-[#d4b16a]">
            {eyebrow}<span className="h-px w-16 bg-[#c6a15b]" />
          </p>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold leading-[1] tracking-[-.05em] md:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/55">{intro}</p>
        </div>
        {children}
      </main>
    </>
  ); 
}

function ProjectsPage() { 
  const [filter, setFilter] = useState('Все'); 
  const filters = ['Все', 'Жилые комплексы', 'Коммерческие', 'Частные']; 
  const shown = filter === 'Все' ? projects : projects.filter(p => p.type === filter); 

  return (
    <PageFrame eyebrow="Портфолио" title="Наши объекты" intro="Реальные фасады, окна и входные группы, выполненные командой ALL WINDOWS в Ташкенте.">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-xs transition ${filter === f ? 'border-[#c6a15b] bg-[#c6a15b] text-black' : 'border-white/15 text-white/55 hover:border-[#c6a15b]'}`} data-testid={`button-filter-${f}`}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {shown.map(p => (
          <Link href={`/projects/${p.slug}`} key={p.slug} className="group image-zoom relative min-h-[430px] overflow-hidden rounded-xl" data-testid={`card-project-${p.slug}`}>
            <img src={p.image} alt={p.title} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <div className="relative flex min-h-[430px] flex-col justify-end p-7">
              <p className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">{p.type} · {p.city}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold">{p.title}</h2>
              <p className="mt-2 max-w-sm text-sm text-white/60">{p.text}</p>
              <span className="mt-6 flex items-center gap-2 text-xs text-[#d4b16a]">Открыть проект <ArrowUpRight size={14} /></span>
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  ); 
}

function ProjectDetail() { 
  const { slug } = useParams<{ slug: string }>(); 
  const p = projects.find(x => x.slug === slug) ?? projects[0]; 

  return (
    <PageFrame eyebrow={`Объекты / ${p.city}`} title={p.title} intro={p.text}>
      <div className="grid gap-3 md:grid-cols-[1.4fr_.6fr]">
        <img src={p.image} alt={p.title} className="h-[430px] w-full rounded-xl object-cover md:h-[620px]" />
        <div className="grid gap-3">
          <img src={pics.detail} alt="Деталь системы на объекте" className="h-[300px] w-full rounded-xl object-cover" />
          <div className="rounded-xl border border-[#c6a15b]/30 bg-[#151515] p-6">
            <p className="text-[10px] uppercase tracking-[.22em] text-[#d4b16a]">Системы</p>
            <p className="mt-4 font-display text-2xl font-bold">{p.systems}</p>
            <div className="mt-8 flex items-center gap-3 text-xs text-white/45">
              <Ruler size={16} className="text-[#c6a15b]" /> Проектирование и монтаж AW
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">Задача</p>
          <p className="mt-3 text-sm leading-6 text-white/60">{p.text}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">Решение</p>
          <p className="mt-3 text-sm leading-6 text-white/60">Подготовили узлы, согласовали образцы и выполнили монтаж поэтажно без остановки работ.</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">География</p>
          <p className="mt-3 text-sm leading-6 text-white/60">Ташкент, Узбекистан<br />Срок по проекту — поэтапно</p>
        </div>
      </div>
    </PageFrame>
  ); 
}

function AboutPage() { 
  return (
    <PageFrame eyebrow="Компания / 2019—2026" title="Производим то, что проектируют архитекторы" intro="ALL WINDOWS — производитель окон, дверей и фасадных систем в Ташкенте с 2019 года. Мы соединяем инженерную точность цеха с вниманием к тому, как человек будет жить в пространстве.">
      <div className="grid gap-3 md:grid-cols-2">
        <img src={pics.workshop} alt="Производственный цех ALL WINDOWS" className="h-[450px] w-full rounded-xl object-cover" />
        <div className="rounded-xl bg-[#d9c8a3] p-8 text-[#151515] md:p-12">
          <p className="text-[10px] uppercase tracking-[.25em] text-[#816a3f]">Наш подход</p>
          <p className="mt-8 font-display text-3xl font-extrabold leading-tight">Каждый миллиметр имеет значение.</p>
          <p className="mt-7 text-sm leading-7 text-black/60">
            Работаем с частными заказчиками, дизайнерами, застройщиками и генеральными подрядчиками. Являемся официальным партнером и переработчиком систем Sistem Aluminium (Турция: 65, 75, 85 серии), ASAŞ (Турция: 64, 75 серии), Deceuninck (ПВХ: 6000, 7000, 8000 серии) и Akfa.
          </p>
        </div>
      </div>
      <div className="my-24 grid gap-10 md:grid-cols-3">
        <div>
          <Factory className="text-[#c6a15b]" />
          <h2 className="mt-5 font-display text-xl font-bold">Производство в Ташкенте</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Собственный цех с 2019 года, оборудование для точного раскроя и сборки. Контролируем заказ на каждом этапе.</p>
        </div>
        <div>
          <Zap className="text-[#c6a15b]" />
          <h2 className="mt-5 font-display text-xl font-bold">Профильная экспертиза</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Sistem Aluminium, ASAŞ, Deceuninck, Aldoks Neo, Engelberg, JP — подбираем систему под нагрузку и архитектуру.</p>
        </div>
        <div>
          <GlassWater className="text-[#c6a15b]" />
          <h2 className="mt-5 font-display text-xl font-bold">Собранная команда</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Замерщики, конструкторы и монтажники говорят на одном техническом языке.</p>
        </div>
      </div>
      <SectionIntro eyebrow="Сертификаты и контроль" title="Документы на материалы. Ответственность за результат." />
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#151515] p-6">
          <FileCheck2 className="text-[#c6a15b]" />
          <p className="mt-8 text-sm font-bold">Сертификаты профилей</p>
          <p className="mt-2 text-xs text-white/45">Предоставляем по запросу к расчёту</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#151515] p-6">
          <ShieldCheck className="text-[#c6a15b]" />
          <p className="mt-8 text-sm font-bold">Гарантия по договору</p>
          <p className="mt-2 text-xs text-white/45">Фиксируем сроки и состав работ</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#151515] p-6">
          <Ruler className="text-[#c6a15b]" />
          <p className="mt-8 text-sm font-bold">Точный замер</p>
          <p className="mt-2 text-xs text-white/45">Акт замера перед запуском в работу</p>
        </div>
      </div>
    </PageFrame>
  ); 
}

function ServicesPage() { 
  const services = [
    { icon: Ruler, title: 'Бесплатный замер', text: 'Специалист выезжает на объект, проверяет геометрию проёма и фиксирует условия монтажа.' }, 
    { icon: FileCheck2, title: 'Проектирование и расчёт', text: 'Подбираем профиль, стеклопакет, фурнитуру и формируем прозрачную спецификацию.' }, 
    { icon: Factory, title: 'Производство', text: 'Изготавливаем конструкции в собственном цехе с контролем размеров и комплектации.' }, 
    { icon: Send, title: 'Доставка', text: 'Согласуем логистику и бережно доставляем конструкции на объект в Ташкенте.' }, 
    { icon: Wrench, title: 'Монтаж', text: 'Устанавливаем, герметизируем, регулируем и сдаём объект по акту.' }, 
    { icon: ShieldCheck, title: 'Гарантийное обслуживание', text: 'Остаёмся на связи после сдачи: регулировка и постгарантийное обслуживание.' }
  ]; 

  return (
    <PageFrame eyebrow="Сервис / полный цикл" title="Один подрядчик. Весь путь проекта." intro="Убираем разрывы между проектированием, производством и монтажом. Вы получаете понятный процесс и один контакт на всех этапах.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{services.map((s, i) => (
        <div key={s.title} className="bg-[#151515] p-7 md:p-9">
          <s.icon className="text-[#c6a15b]" size={22} />
          <p className="mt-12 text-[10px] text-[#c6a15b]">0{i + 1}</p>
          <h2 className="mt-3 font-display text-xl font-bold">{s.title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">{s.text}</p>
        </div>
      ))}</div>
      <div className="mt-16 flex flex-col justify-between gap-8 rounded-xl bg-[#d9c8a3] p-8 text-[#151515] md:flex-row md:items-end md:p-12">
        <div>
          <p className="text-[10px] uppercase tracking-[.25em] text-[#816a3f]">Сервис на объекте</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold">Начните с бесплатного замера</h2>
        </div>
        <Link href="/contacts" className="flex items-center gap-2 text-sm font-bold" data-testid="link-services-contacts">
          Связаться с нами <ArrowRight size={16} />
        </Link>
      </div>
    </PageFrame>
  ); 
}

function ContactsPage() { 
  const [sent, setSent] = useState(false); 
  const [name, setName] = useState(''); 

  return (
    <PageFrame eyebrow="Контакты / Ташкент" title="Обсудим ваш объект" intro="Позвоните, напишите в Telegram или оставьте заявку — ответим по рабочим дням в течение 24 часов.">
      <div className="grid gap-3 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-xl bg-[#d9c8a3] p-8 text-[#151515] md:p-10">
          <p className="text-[10px] uppercase tracking-[.25em] text-[#816a3f]">Шоурум и производство</p>
          <p className="mt-7 font-display text-2xl font-extrabold">Ташкент,<br />ул. Мукими, 15</p>
          <div className="mt-12 space-y-5 border-t border-black/20 pt-6 text-sm">
            <a href="tel:+998888001800" className="flex items-center gap-3 font-bold" data-testid="link-contact-phone">
              <Phone size={16} /> +998 88 800 18 00
            </a>
            <a href="https://t.me/all_windows" className="flex items-center gap-3" data-testid="link-contact-telegram">
              <Send size={16} /> @all_windows
            </a>
            <p className="flex items-center gap-3"><Instagram size={16} /> @all_windows</p>
            <p className="pt-3 text-xs text-black/55">Пн–Сб · 09:00–18:00<br />Вс — выходной</p>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-white/10 bg-[#171717]">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${pics.tower})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
          <div className="absolute inset-0 bg-[#0d0d0d]/70" />
          <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
            <div>
              <p className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">Написать нам</p>
              {sent ? (
                <div className="mt-12">
                  <Check className="text-[#d4b16a]" size={28} />
                  <h2 className="mt-5 font-display text-3xl font-extrabold">Сообщение отправлено</h2>
                  <p className="mt-3 text-sm text-white/55">Мы свяжемся с вами, {name}, в течение рабочего дня.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); if (name) setSent(true); }} className="mt-8 space-y-4">
                  <input required value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя" className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#c6a15b]" data-testid="input-contact-name" />
                  <input required type="tel" placeholder="+998 (__) ___-__-__" className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#c6a15b]" data-testid="input-contact-phone" />
                  <textarea required placeholder="Расскажите о задаче" rows={4} className="w-full resize-none rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#c6a15b]" data-testid="textarea-contact-message" />
                  <button className="gold-gradient flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-black" data-testid="button-contact-submit">
                    Отправить сообщение <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-white/45">
              <span className="size-2 rounded-full bg-[#c6a15b]" /> Ответим лично, без автоответчиков
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  ); 
}

function RouterView({ lang, onEstimate }: { lang: Lang; onEstimate: (p?: string) => void }) { 
  return (
    <Switch>
      <Route path="/" component={() => <Home lang={lang} onEstimate={onEstimate} />} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={() => <ProductsPage onEstimate={onEstimate} />} />
      <Route path="/products/:categorySlug/:productSlug" component={() => <ProductDetail onEstimate={onEstimate} />} />
      <Route path="/products/:categorySlug" component={() => <CategoryProductsPage onEstimate={onEstimate} />} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route component={NotFound} />
    </Switch>
  ); 
}

function App() { 
  const [lang, setLang] = useState<Lang>('ru'); 
  const [modal, setModal] = useState(false); 
  const [initialProduct, setInitialProduct] = useState(''); 
  
  const openEstimate = (p = '') => { 
    setInitialProduct(p); 
    setModal(true); 
  }; 

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Shell lang={lang} setLang={setLang} onEstimate={openEstimate}>
            <RouterView lang={lang} onEstimate={openEstimate} />
          </Shell>
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
      <EstimateModal open={modal} initialProduct={initialProduct} onClose={() => setModal(false)} />
    </QueryClientProvider>
  ); 
}

export default App;