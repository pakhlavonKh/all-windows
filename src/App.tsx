import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { 
  ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, 
  Factory, FileCheck2, GlassWater, Instagram, Menu, Phone, Ruler, Send, 
  ShieldCheck, Sparkles, X, Wrench, Zap 
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import '@/index.css';

type Lang = 'ru' | 'uz';
const queryClient = new QueryClient();

const pics = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
  tower: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82',
  interior: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82',
  glass: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82',
  facade: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=82',
  workshop: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=82',
  detail: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82',
  residence: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
};

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
    subtitle: 'Aldoks Neo · точная геометрия', 
    image: pics.detail, 
    description: 'Лёгкие и тёплые алюминиевые конструкции с чистой архитектурной линией. Профили ведущих турецких и отечественных производителей: Sistem Aluminium, ASAŞ и Akfa.' 
  },
  { 
    slug: 'pvc', 
    title: 'ПВХ окна', 
    subtitle: 'Engelberg Infinity · Engelberg 8000', 
    image: pics.interior, 
    description: 'Теплосберегающие и шумозащитные ПВХ окна от международных брендов: инновационные системы Deceuninck (6000, 7000, 8000 серии) и премиальные Engelberg.' 
  },
  { 
    slug: 'facade', 
    title: 'Фасадные системы', 
    subtitle: 'JP · стойка-ригель · структурное остекление', 
    image: pics.facade, 
    description: 'Светопрозрачные фасады, которые держат масштаб здания. Проектируем узлы, изготавливаем и монтируем системы для коммерческой и жилой архитектуры.' 
  },
  { 
    slug: 'stained-glass', 
    title: 'Витражи и панорамное остекление', 
    subtitle: 'Свет как часть архитектуры', 
    image: pics.glass, 
    description: 'Панорамные решения с большим световым проёмом. Подбираем формулу стекла по инсоляции, нагрузке и сценарию использования пространства.' 
  },
  { 
    slug: 'sliding', 
    title: 'Раздвижные системы', 
    subtitle: 'Балконы · террасы · зимние сады', 
    image: pics.hero, 
    description: 'Свободный проём и плавный ход. Складывающиеся системы-гармошки Sistem BF85 и подъемно-раздвижные порталы Lift & Slide для террас.' 
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
  // --- АЛЮМИНИЕВЫЕ ОКНА И ДВЕРИ ---
  {
    slug: 'sistem-wh85',
    categorySlug: 'aluminium',
    title: 'Sistem Aluminium WH85',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Ultra Performance Hinged System · 85 серия',
    image: pics.detail,
    specs: ['Монтажная глубина рамы 85 мм', 'Створка 95 мм', 'Терморазрыв полиамид 34 мм', 'Стеклопакет до 64 мм', 'Флагман термоизоляции'],
    description: 'Флагманская алюминиевая поворотно-откидная система ультра-высокой энергоэффективности от Sistem Aluminium (Турция). Спроектирована для проектов с повышенными требованиями к пассивному энергосбережению.',
    related: ['sistem-wh70', 'sistem-bf85', 'asas-rwt75']
  },
  {
    slug: 'sistem-wh70',
    categorySlug: 'aluminium',
    title: 'Sistem Aluminium WH70 / W75',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'High Performance Insulated Serie · 75 серия',
    image: pics.hero,
    specs: ['Монтажная глубина 75 мм', 'Термомост 24–30 мм', 'Стеклопакет до 52 мм', 'Звукоизоляция до 42 дБ', 'Европейский паз под фурнитуру'],
    description: 'Высокоэффективная теплая алюминиевая система 75 серии для окон и дверей. Обеспечивает превосходную звукоизоляцию и ветроустойчивость.',
    related: ['sistem-wh85', 'sistem-w65', 'asas-rwt75']
  },
  {
    slug: 'sistem-w65',
    categorySlug: 'aluminium',
    title: 'Sistem Aluminium W65',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Insulated Window & Door Serie · 65 серия',
    image: pics.residence,
    specs: ['Монтажная глубина 65 мм', 'Термомост 20 мм полиамид', 'Стеклопакет до 44 мм', 'Универсальная теплая серия'],
    description: 'Классическая теплая серия 65 мм от Sistem Aluminium. Надежное решение для масштабного остекления коммерческих зданий и жилых резиденций.',
    related: ['sistem-wh70', 'asas-rwt64', 'akfa-aldoks']
  },
  {
    slug: 'asas-rwt75',
    categorySlug: 'aluminium',
    title: 'ASAŞ Rescara RWT 75',
    brand: 'ASAŞ',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'High Thermal Architectural System · 75 серия',
    image: pics.facade,
    specs: ['Монтажная глубина 75 мм', 'Полиамидный термомост 34 мм', 'Стеклопакет до 56 мм', 'Теплопроводность Uf = 1.3 W/m²K'],
    description: 'Премиальная архитектурная алюминиевая система Rescara RWT 75 от ведущего турецкого концерна ASAŞ. Разработана для высотных башен и вилл.',
    related: ['asas-rwt64', 'sistem-wh85', 'akfa-aldoks']
  },
  {
    slug: 'asas-rwt64',
    categorySlug: 'aluminium',
    title: 'ASAŞ Rescara RWT 64',
    brand: 'ASAŞ',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Architectural Window & Door System · 64 серия',
    image: pics.detail,
    specs: ['Монтажная глубина 64 мм', 'Термомост 24 мм', 'Стеклопакет до 46 мм', 'Европейские стандарты качества'],
    description: 'Инженерная алюминиевая система 64 серии от ASAŞ (Турция). Обеспечивает стабильную геометрию и надежную теплоизоляцию.',
    related: ['asas-rwt75', 'sistem-w65', 'akfa-aldoks']
  },
  {
    slug: 'akfa-aldoks',
    categorySlug: 'aluminium',
    title: 'Akfa Aldoks Neo & Trio',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    subtitle: 'Aldoks Neo · точная геометрия',
    image: pics.detail,
    specs: ['Монтажная глубина 45–50 мм', 'Тёплая и холодная серии', 'Стеклопакет до 32 мм', 'Фурнитура Master / Stublina'],
    description: 'Легкие и практичные алюминиевые конструкции Akfa. Тёплые системы для жилых интерьеров и холодные — для лоджий, балконов и витрин.',
    related: ['sistem-w65', 'sistem-w45', 'sliding-lift']
  },
  {
    slug: 'sistem-w55-d55',
    categorySlug: 'aluminium',
    title: 'Sistem Aluminium W55 / D55',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Дверные входные группы высокой проходимости',
    image: pics.workshop,
    specs: ['Монтажная глубина 55 мм', 'Усиленные угловые сухари', 'Холодное и тёплое исполнение', 'Регулируемые дверные коробки'],
    description: 'Серия для распашных входных групп интенсивной проходимости (магазины, входные холлы, бизнес-центры).',
    related: ['akfa-aldoks', 'sistem-w45']
  },
  {
    slug: 'sistem-w45',
    categorySlug: 'aluminium',
    title: 'Sistem Aluminium W45',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Интерьерные перегородки и межкомнатные двери',
    image: pics.facade,
    specs: ['Монтажная глубина 45 мм', 'Холодный профиль / интерьер', 'Толщина заполнения 4–24 мм', 'Узкая видимая ширина'],
    description: 'Элегантная система без терморазрыва 45 мм для внутренних офисных перегородок, кабинетов и остекления летних террас.',
    related: ['akfa-aldoks', 'sistem-w55-d55']
  },

  // --- ПВХ ОКНА ---
  {
    slug: 'deceuninck-ligapro',
    categorySlug: 'pvc',
    title: 'Deceuninck ЛИГАПРО (LIGAPRO)',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Флагманская ПВХ система 76 мм / 6 камер · 8000 серия',
    image: pics.interior,
    specs: ['Ширина профиля 76 мм', '6 воздушных камер', 'Стеклопакет до 50 мм', 'Класс профиля А', 'Теплоизоляция 1.05 м²·°C/Вт'],
    description: 'Новейшая разработка Deceuninck — система ЛИГАПРО 76 мм с 6 камерами. Создана для бескомпромиссного сохранения тепла и тишины.',
    related: ['deceuninck-favorit-space', 'engelberg-8000', 'deceuninck-favorit']
  },
  {
    slug: 'deceuninck-favorit-space',
    categorySlug: 'pvc',
    title: 'Deceuninck ФАВОРИТ СПЭЙС',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Инновационное окно Класса А · 76 мм / 6 камер',
    image: pics.residence,
    specs: ['Ширина профиля 76 мм', '6 камер', '3 контура уплотнения (средний контур)', 'Стеклопакет до 48 мм'],
    description: 'Премиальное энергосберегающее окно с 3 контурами уплотнения, полностью блокирующее сквозняки и уличную пыль.',
    related: ['deceuninck-ligapro', 'deceuninck-favorit', 'deceuninck-bautec-neo']
  },
  {
    slug: 'deceuninck-favorit',
    categorySlug: 'pvc',
    title: 'Deceuninck ФАВОРИТ',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Тихие окна класса А для шумного города · 71 мм / 5 камер · 7000 серия',
    image: pics.interior,
    specs: ['Ширина профиля 71 мм', '5 камер', 'Стеклопакет до 47 мм', 'Класс профиля А'],
    description: 'Система Deceuninck Фаворит разработана для акустического и теплового комфорта в городе. Эффективно снижает уровень шума.',
    related: ['deceuninck-bautec-neo', 'deceuninck-bautec-urban', 'engelberg-8000']
  },
  {
    slug: 'deceuninck-bautec-neo',
    categorySlug: 'pvc',
    title: 'Deceuninck БАУТЕК НЕО',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Комфорт по выгодной цене · 71 мм / 5 камер · 7000 серия',
    image: pics.detail,
    specs: ['Ширина профиля 71 мм', '5 камер', 'Стеклопакет до 46 мм', 'Теплоизоляция 0.85 м²·°C/Вт'],
    description: 'Современная 5-камерная система 71 мм, объединяющая передовые бельгийские стандарты с оптимизированной стоимостью.',
    related: ['deceuninck-bautec-urban', 'deceuninck-forward', 'deceuninck-eco60']
  },
  {
    slug: 'deceuninck-bautec-urban',
    categorySlug: 'pvc',
    title: 'Deceuninck БАУТЕК УРБАН',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Хит продаж для городской среды · 71 мм / 5 камер · 7000 серия',
    image: pics.glass,
    specs: ['Ширина профиля 71 мм', '5 камер', 'Стеклопакет до 40 мм', 'Хит продаж'],
    description: 'Бестселлер в линейке Deceuninck — сбалансированные характеристики для остекления многоквартирных домов в Узбекистане.',
    related: ['deceuninck-bautec-neo', 'deceuninck-forward', 'engelberg-8000']
  },
  {
    slug: 'deceuninck-forward',
    categorySlug: 'pvc',
    title: 'Deceuninck ФОРВАРД',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Надежные и практичные окна · 60 мм / 3 камеры · 6000 серия',
    image: pics.tower,
    specs: ['Ширина профиля 60 мм', '3 камеры', 'Стеклопакет до 38 мм', 'Класс профиля B'],
    description: 'Классическая компактная 3-камерная система 60 мм для балконов, дач и хозяйственных помещений.',
    related: ['deceuninck-eco60', 'deceuninck-bautec-urban']
  },
  {
    slug: 'deceuninck-eco60',
    categorySlug: 'pvc',
    title: 'Deceuninck ЭКО 60',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия 🇧🇪',
    subtitle: 'Универсальное окно по доступной цене · 60 мм / 4 камеры · 6000 серия',
    image: pics.workshop,
    specs: ['Ширина профиля 60 мм', '4 камеры', 'Стеклопакет до 32 мм', 'Экономичный выбор'],
    description: 'Экономичная 4-камерная система 60 мм от Deceuninck с улучшенным теплосбережением.',
    related: ['deceuninck-forward', 'deceuninck-bautec-neo']
  },
  {
    slug: 'engelberg-8000',
    categorySlug: 'pvc',
    title: 'Engelberg 8000',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    subtitle: 'Премиум система 80 мм / 6 камер',
    image: pics.interior,
    specs: ['Монтажная глубина 80 мм', '6 камер', 'Стеклопакет до 52 мм', 'Класс энергосбережения A+'],
    description: 'Теплосберегающие окна для квартир и коттеджей. Профили Engelberg с усиленным армированием и безупречной геометрией.',
    related: ['deceuninck-ligapro', 'engelberg-infinity']
  },
  {
    slug: 'engelberg-infinity',
    categorySlug: 'pvc',
    title: 'Engelberg Infinity',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    subtitle: 'Дизайнерская серия с закругленным штапиком',
    image: pics.residence,
    specs: ['Монтажная глубина 70 мм', '5 камер', 'Стеклопакет до 40 мм', 'Глянцевая поверхность'],
    description: 'Элегантный профиль с плавными контурами и защитой от выцветания на солнце.',
    related: ['engelberg-8000', 'deceuninck-favorit']
  },

  // --- ФАСАДНЫЕ СИСТЕМЫ ---
  {
    slug: 'jp-facade-system',
    categorySlug: 'facade',
    title: 'Стоечно-ригельный фасад JP 50',
    brand: 'JP / Akfa',
    subtitle: 'Классическое фасадное остекление',
    image: pics.facade,
    specs: ['Ширина стойки 50 мм', 'Глубина стойки 50–250 мм', 'Заполнение до 52 мм', 'Высота конструкции до 6 м'],
    description: 'Классическая стоечно-ригельная фасадная система с декоративными прижимными планками для бизнес-центров и высотных зданий.',
    related: ['jp-structural-facade', 'panoramic-jumbo']
  },
  {
    slug: 'jp-structural-facade',
    categorySlug: 'facade',
    title: 'Структурное остекление JP',
    brand: 'JP / ALL WINDOWS',
    subtitle: 'Сплошное остекление без наружных прижимных планок',
    image: pics.tower,
    specs: ['Гладкая стеклянная поверхность фасада', 'Специальный структурный силикон Dow Corning', 'Встроенные скрытые лючки', 'Триплекс 8+8 / 10+10 мм'],
    description: 'Эффект единого зеркального монолита. Полное отсутствие внешних металлических планок на фасаде.',
    related: ['jp-facade-system', 'panoramic-jumbo']
  },

  // --- ВИТРАЖИ И ПАНОРАМНОЕ ОСТЕКЛЕНИЕ ---
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

  // --- РАЗДВИЖНЫЕ СИСТЕМЫ ---
  {
    slug: 'sistem-bf85',
    categorySlug: 'sliding',
    title: 'Sistem Aluminium BF 85 (Гармошка)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    subtitle: 'Складывающаяся раздвижная система с нижним ходом · 85 серия',
    image: pics.hero,
    specs: ['Открывание проема до 95%', 'Нижняя несущая опора (Bottom Carriage)', 'Высота створки до 3.2 м', 'Вес створки до 140 кг', 'Теплый терморазрыв'],
    description: 'Премиальная складная дверная система BF 85. Позволяет открыть проем практически полностью, объединяя интерьер с террасой.',
    related: ['sliding-lift', 'sistem-wh85']
  },
  {
    slug: 'sliding-lift',
    categorySlug: 'sliding',
    title: 'Подъемно-раздвижные системы Lift & Slide',
    brand: 'Sistem Aluminium / Akfa',
    subtitle: 'Панорамные порталы со створками до 400 кг',
    image: pics.residence,
    specs: ['Механизм Lift & Slide', 'Створка до 400 кг', 'Ширина проема до 12 м', 'Низкий безбарьерный порог 20 мм'],
    description: 'Плавный ход тяжелых панорамных створок одним движением руки без лишних усилий.',
    related: ['sistem-bf85', 'panoramic-jumbo']
  },

  // --- РОЛЬСТАВНИ И РОЛЛЕТНЫЕ ВОРОТА ---
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

  // --- СТЕКЛЯННЫЕ ПЕРИЛА И ОГРАЖДЕНИЯ ---
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

  // --- МОСКИТНЫЕ СЕТКИ ---
  {
    slug: 'net-plisse',
    categorySlug: 'mosquito-nets',
    title: 'Раздвижные москитные сетки Плиссе',
    brand: 'ALL WINDOWS',
    subtitle: 'Складываются гармошкой · Для больших проемов',
    image: pics.residence,
    specs: ['Складывание гармошкой', 'Ширина проема до 6 метров', 'Полотно Fiberglass / Антипыль', 'Алюминиевый каркас в цвет окна'],
    description: 'Инновационные москитные сетки плиссе, которые аккуратно собираются сбоку проема и не требуют места для распахивания.',
    related: ['net-frame', 'sliding-lift']
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
    related: ['net-plisse', 'deceuninck-ligapro']
  }
];

const projects = [
  { slug: 'aminar-house', title: 'ЖК «Aminar House»', type: 'Жилые комплексы', city: 'Ташкент', image: pics.tower, text: 'Фасадное остекление и алюминиевые окна для жилого комплекса в центре Ташкента.', systems: 'JP façade · Aldoks Neo' },
  { slug: 'apex-bank', title: 'Apex Bank', type: 'Коммерческие', city: 'Ташкент', image: pics.facade, text: 'Структурное остекление входной группы и стеклянные ограждения.', systems: 'JP façade · Triplex' },
  { slug: 'fazo-residence', title: 'ЖК «Fazo Residence»', type: 'Жилые комплексы', city: 'Ташкент', image: pics.residence, text: 'Панорамные окна и раздвижные системы для приватных террас.', systems: 'Engelberg 8000 · Lift-slide' },
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

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
      <span className="font-display text-2xl tracking-[-.08em] text-[#d4b16a]">AW</span>
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
                  <button disabled={status === 'loading'} className="gold-gradient mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-[#121212] disabled:opacity-60" data-testid="button-submit-estimate">
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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-10">
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
          <div className="flex rounded-full border border-white/15 p-0.5 text-[10px] font-bold tracking-widest">
            <button onClick={() => setLang('ru')} className={`rounded-full px-2 py-1 ${lang === 'ru' ? 'bg-[#c6a15b] text-[#111]' : 'text-white/50'}`} data-testid="button-language-ru">RU</button>
            <button onClick={() => setLang('uz')} className={`rounded-full px-2 py-1 ${lang === 'uz' ? 'bg-[#c6a15b] text-[#111]' : 'text-white/50'}`} data-testid="button-language-uz">UZ</button>
          </div>
          <a href="tel:+998888001800" className="hidden items-center gap-2 text-xs text-white/75 lg:flex" data-testid="link-header-phone">
            <Phone size={14} className="text-[#d4b16a]" /> +998 88 800 18 00
          </a>
          <button onClick={onEstimate} className="hidden rounded-lg bg-[#c6a15b] px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#111] transition hover:bg-[#e0c083] lg:block" data-testid="button-header-estimate">
            {t.estimate}
          </button>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-lg border border-white/15 xl:hidden" aria-label="Меню" data-testid="button-mobile-menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-[#111]/95 px-5 pb-6 pt-3 xl:hidden">
            {t.nav.map((n, i) => { 
              const href = ['/products', '/projects', '/about', '/services', '/contacts'][i]; 
              return (
                <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-white/10 py-4 text-sm text-white/80" data-testid={`link-mobile-nav-${href.slice(1)}`}>
                  {n}<ArrowUpRight className="float-right text-[#c6a15b]" size={16} />
                </Link>
              ); 
            })}
            <button onClick={() => { setOpen(false); onEstimate(); }} className="mt-5 w-full rounded-lg bg-[#c6a15b] py-3 text-sm font-bold text-black" data-testid="button-mobile-estimate">
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
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-4 lg:px-10">
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
            <Link href="/components" className="block hover:text-white" data-testid="link-footer-components">Комплектующие</Link>
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
      <div className="mx-auto flex max-w-[1440px] justify-between border-t border-white/10 px-5 py-5 text-[10px] text-white/30 lg:px-10">
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
  const [calc, setCalc] = useState({ type: 'Алюминий', width: 1800, height: 1400, glass: 'Двухкамерный', leaves: 2 }); 
  const [slide, setSlide] = useState(0);

  const estimate = Math.round((calc.width * calc.height / 1000000) * (calc.type === 'ПВХ' ? 1450000 : 2050000) + calc.leaves * 320000 + (calc.glass === 'Двухкамерный' ? 480000 : 0));
  const testimonials = [
    { n: 'Алексей С.', o: 'Aminar House', q: 'Команда выдержала график фасадных работ и аккуратно прошла все узлы примыкания.' }, 
    { n: 'Малика Р.', o: 'Частный дом, Ташкент', q: 'Панорамные окна получились именно такими, как в проекте. Отдельно отмечу работу замерщика.' }, 
    { n: 'Илья К.', o: 'Fazo Residence', q: 'Понятный расчёт, собственное производство и монтаж без простоев на объекте.' }
  ];

  return (
    <>
      <Meta title="ALL WINDOWS — окна, двери и фасады в Ташкенте" description="Производство алюминиевых и ПВХ окон, дверей, фасадных и раздвижных систем в Ташкенте." />
      <main>
        <section className="relative flex min-h-[760px] items-end overflow-hidden border-b border-white/10 pb-16 pt-36 md:min-h-[860px] md:pb-24">
          <img src={pics.hero} alt="Панорамное остекление современного дома" className="absolute inset-0 size-full object-cover object-center opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/35 to-black/20" />
          <div className="relative mx-auto w-full max-w-[1440px] px-5 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-4xl">
              <p className="mb-7 text-[10px] uppercase tracking-[.3em] text-[#e0c083]">Производство в Ташкенте · с 2019 года</p>
              <h1 className="font-display text-5xl font-extrabold leading-[.95] tracking-[-.06em] text-white md:text-8xl">
                Свет.<br />
                <span className="text-[#d4b16a]">Точная форма.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                Производство окон, дверей и фасадных систем для частных и коммерческих объектов. Алюминий, ПВХ, витражи, раздвижные решения.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={() => onEstimate()} className="gold-gradient flex items-center gap-3 rounded-lg px-5 py-3.5 text-sm font-bold text-[#111]" data-testid="button-hero-estimate">
                  {t.estimate} <ArrowRight size={17} />
                </button>
                <a href="tel:+998888001800" className="flex items-center gap-3 rounded-lg border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-[#c6a15b] hover:text-[#d4b16a]" data-testid="link-hero-phone">
                  <Phone size={16} /> {t.call}
                </a>
              </div>
            </motion.div>
            <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[.18em] text-white/40">
              <span>01</span>
              <span className="h-px w-24 bg-white/25" />
              <span>Архитектура, которая работает</span>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#111]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            <Benefit icon={<Factory />} title="Своё производство" text="Цех в Ташкенте, контроль каждого заказа" />
            <Benefit icon={<FileCheck2 />} title="Профили и фурнитура" text="Aldoks, Engelberg, Akfa, Roto, Master" />
            <Benefit icon={<Wrench />} title="Монтаж под ключ" text="От замера до регулировки на объекте" />
            <Benefit icon={<ShieldCheck />} title="Гарантия" text="Фиксируем обязательства в договоре" />
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
          <SectionIntro eyebrow="01 / Продукция" title="Системы для света и воздуха" text="Подбираем конфигурацию по архитектуре, нагрузке и сценарию использования — не по шаблону." />
          <div className="grid gap-3 md:grid-cols-12">
            {categories.slice(0, 6).map((p, i) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className={`group image-zoom relative min-h-[270px] overflow-hidden rounded-xl border border-white/10 ${i === 0 || i === 3 ? 'md:col-span-7' : 'md:col-span-5'}`} data-testid={`card-home-product-${p.slug}`}>
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

        <section className="bg-[#d9c8a3] px-5 py-24 text-[#151515] lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <SectionIntro light eyebrow="02 / Калькулятор" title="Получите ориентир по стоимости" text="Введите размеры одного проёма. Расчёт предварительный — финальная стоимость зависит от конфигурации и монтажа." />
            <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {[['Тип профиля', 'type', ['Алюминий', 'ПВХ']], ['Стеклопакет', 'glass', ['Однокамерный', 'Двухкамерный', 'Триплекс']]].map(([label, key, opts]) => (
                  <label key={key as string} className="border-b border-black/20 pb-3 text-xs font-semibold">
                    {label as string}
                    <select value={calc[key as 'type' | 'glass']} onChange={e => setCalc({ ...calc, [key as string]: e.target.value })} className="mt-3 block w-full bg-transparent py-1 text-xl font-bold outline-none" data-testid={`select-calculator-${key}`}>
                      {(opts as string[]).map(o => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                ))}
                <label className="border-b border-black/20 pb-3 text-xs font-semibold">
                  Ширина, мм
                  <input type="number" value={calc.width} onChange={e => setCalc({ ...calc, width: Number(e.target.value) })} className="mt-3 block w-full bg-transparent py-1 text-xl font-bold outline-none" data-testid="input-calculator-width" />
                </label>
                <label className="border-b border-black/20 pb-3 text-xs font-semibold">
                  Высота, мм
                  <input type="number" value={calc.height} onChange={e => setCalc({ ...calc, height: Number(e.target.value) })} className="mt-3 block w-full bg-transparent py-1 text-xl font-bold outline-none" data-testid="input-calculator-height" />
                </label>
                <label className="border-b border-black/20 pb-3 text-xs font-semibold">
                  Количество створок
                  <input type="number" min="1" max="8" value={calc.leaves} onChange={e => setCalc({ ...calc, leaves: Number(e.target.value) })} className="mt-3 block w-full bg-transparent py-1 text-xl font-bold outline-none" data-testid="input-calculator-leaves" />
                </label>
              </div>
              <div className="flex flex-col justify-between rounded-xl bg-[#171717] p-7 text-white">
                <div>
                  <p className="text-[10px] uppercase tracking-[.2em] text-[#d4b16a]">Предварительная стоимость</p>
                  <p className="mt-5 font-display text-4xl font-extrabold">{estimate.toLocaleString('ru-RU')} <span className="text-base font-normal text-white/55">сум</span></p>
                  <p className="mt-4 text-xs leading-5 text-white/45">За один проём · без учёта монтажа и доставки</p>
                </div>
                <button onClick={() => onEstimate(calc.type)} className="mt-10 flex items-center justify-between border-t border-white/15 pt-4 text-sm text-[#d4b16a]" data-testid="button-calculator-submit">
                  Отправить на точный расчёт <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
          <SectionIntro eyebrow="03 / Наши объекты" title="Конструкции в реальной архитектуре" text="Не просто каталог решений — результат, который каждый день работает в городе." />
          <div className="grid gap-3 md:grid-cols-2">
            {projects.map((p, i) => (
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
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            <Stat value="98+" label="реализованных проектов" />
            <Stat value="2 400+" label="клиентов доверили нам окна" />
            <Stat value="7" label="лет в производстве (с 2019 года)" />
            <Stat value="24 ч" label="средний ответ по заявке" />
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
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

        <section className="bg-[#151515] px-5 py-24 lg:px-10">
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
    <div className="p-6 md:p-8">
      <div className="mb-5 text-[#d4b16a]">{icon}</div>
      <h3 className="font-display text-sm font-bold">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-white/45">{text}</p>
    </div>
  ); 
}

function Stat({ value, label }: { value: string; label: string }) { 
  return (
    <div className="p-6 text-center md:p-10">
      <p className="font-display text-3xl font-extrabold text-[#d4b16a] md:text-5xl">{value}</p>
      <p className="mx-auto mt-3 max-w-[130px] text-[10px] uppercase leading-4 tracking-wider text-white/45">{label}</p>
    </div>
  ); 
}

function Cta({ onEstimate }: { onEstimate: (p?: string) => void }) { 
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-10">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${pics.workshop})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
      <div className="absolute inset-0 bg-[#0d0d0d]/85" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">06 / Начать проект</p>
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-6xl">Ваш проём —<br />наша точная работа.</h2>
        </div>
        <button onClick={() => onEstimate()} className="gold-gradient flex shrink-0 items-center gap-3 rounded-lg px-6 py-4 text-sm font-bold text-black" data-testid="button-cta-estimate">
          Обсудить проект <ArrowUpRight size={17} />
        </button>
      </div>
    </section>
  ); 
}

// --- LEVEL 1: MAIN CATEGORIES PAGE ---
function ProductsPage({ onEstimate }: { onEstimate: (p?: string) => void }) { 
  return (
    <PageFrame title="Продукция" eyebrow="Каталог систем" intro="Оконные, дверные и фасадные решения — спроектированы для климата, архитектуры и ежедневной эксплуатации Ташкента.">
      <div className="grid gap-3 md:grid-cols-2">
        {categories.map((c, i) => (
          <Link key={c.slug} href={`/products/${c.slug}`} className="group image-zoom relative min-h-[340px] overflow-hidden rounded-xl border border-white/10" data-testid={`card-category-${c.slug}`}>
            <img src={c.image} alt={c.title} className="absolute inset-0 size-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="relative flex min-h-[340px] flex-col justify-end p-7">
              <p className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">0{i + 1} / system</p>
              <h2 className="mt-2 max-w-sm font-display text-3xl font-extrabold">{c.title}</h2>
              <p className="mt-2 text-sm text-white/55">{c.subtitle}</p>
              <span className="mt-6 flex items-center gap-2 text-xs text-[#d4b16a]">{copy('ru').details} <ArrowRight size={14} /></span>
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  ); 
}

// --- LEVEL 2: CATEGORY PAGE WITH PRODUCT CARDS GRID ---
function CategoryProductsPage({ onEstimate }: { onEstimate: (p?: string) => void }) {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find(c => c.slug === categorySlug) ?? categories[0];
  const items = products.filter(p => p.categorySlug === category.slug);

  return (
    <PageFrame 
      eyebrow={`Продукция / ${category.title}`} 
      title={category.title} 
      intro={category.description}
    >
      <div className="mb-8 flex items-center justify-between">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b16a] hover:underline">
          <ChevronLeft size={16} /> Вернуться ко всем категориям
        </Link>
        <span className="text-xs text-white/40">{items.length} {items.length === 1 ? 'система' : items.length < 5 ? 'системы' : 'систем'}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Link 
            key={p.slug} 
            href={`/products/${category.slug}/${p.slug}`} 
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#151515] transition duration-300 hover:border-[#c6a15b]"
            data-testid={`card-product-${p.slug}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} className="size-full object-cover transition duration-500 group-hover:scale-105 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              <div className="absolute left-3 top-3">
                <span className="rounded bg-[#c6a15b] px-2.5 py-1 text-[9px] font-bold text-black uppercase">
                  {p.brandCountry || p.brand}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#d4b16a] font-mono">{p.brand}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-[#d4b16a] transition">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/55 line-clamp-2">{p.subtitle}</p>

                <div className="mt-4 space-y-1">
                  {p.specs.slice(0, 3).map(s => (
                    <div key={s} className="flex items-center gap-2 text-[11px] text-white/70">
                      <Check size={12} className="text-[#c6a15b] shrink-0" />
                      <span className="truncate">{s}</span>
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
      <div className="mb-6">
        <Link href={`/products/${category.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4b16a] hover:underline">
          <ChevronLeft size={16} /> Назад к системам «{category.title}»
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
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
              <div key={s} className="flex items-center gap-3 py-3.5 text-sm text-white/75">
                <Check size={15} className="text-[#c6a15b]" />{s}
              </div>
            ))}
          </div>
          <button onClick={() => onEstimate(product.title)} className="gold-gradient mt-7 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold text-black" data-testid="button-product-estimate">
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
                  <img src={r.image} alt={r.title} className="size-20 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-display text-base font-bold">{r.title}</h3>
                    <p className="mt-1 text-xs text-white/45">{r.subtitle}</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-[#c6a15b]" size={16} />
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
      <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-40 lg:px-10">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 flex items-center gap-4 text-[10px] uppercase tracking-[.28em] text-[#d4b16a]">
            {eyebrow}<span className="h-px w-16 bg-[#c6a15b]" />
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1] tracking-[-.05em] md:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">{intro}</p>
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
                  <button className="gold-gradient flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-black" data-testid="button-contact-submit">
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

function ComponentsPage() { 
  const openings = ['Глухая створка', 'Поворотная', 'Откидная', 'Поворотно-откидная', 'Раздвижная']; 
  return (
    <PageFrame eyebrow="Комплектующие / детали" title="Система начинается с деталей" intro="Стеклопакет, открывание и фурнитура влияют на ежедневный комфорт не меньше профиля. Помогаем выбрать конфигурацию осознанно.">
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#151515] p-7 md:p-9">
          <h2 className="font-display text-2xl font-bold">Стеклопакеты</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Сравниваем теплотехнику и шумоизоляцию под помещение.</p>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 text-sm">
            <div className="grid grid-cols-3 bg-[#c6a15b] p-3 text-[10px] font-bold uppercase tracking-wider text-black">
              <span>Тип</span><span>Тепло</span><span>Шум</span>
            </div>
            {[
              ['Однокамерный', '2.1 м²·°C/Вт', '31 дБ'], 
              ['Двухкамерный', '3.2 м²·°C/Вт', '36 дБ'], 
              ['Трёхкамерный', '4.1 м²·°C/Вт', '41 дБ']
            ].map(r => (
              <div key={r[0]} className="grid grid-cols-3 border-t border-white/10 p-3 text-white/65">
                <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#151515] p-7 md:p-9">
          <h2 className="font-display text-2xl font-bold">Типы открывания</h2>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {openings.map((o, i) => (
              <div key={o} className="rounded-lg border border-white/10 p-4">
                <div className="mb-5 grid size-14 place-items-center border border-[#c6a15b]/60 text-[#c6a15b]">
                  <span className="text-xl">{['□', '↗', '↙', '↗', '↔'][i]}</span>
                </div>
                <p className="text-xs text-white/65">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#151515] p-7">
          <Wrench className="text-[#c6a15b]" />
          <h2 className="mt-8 font-display text-xl font-bold">Фурнитура Master и Roto</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Поворотно-откидные механизмы для тёплых алюминиевых окон с точной регулировкой прижима.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#151515] p-7">
          <CircleMark />
          <h2 className="mt-8 font-display text-xl font-bold">Ручки Stublina</h2>
          <p className="mt-3 text-sm leading-6 text-white/50">Эргономичные ручки для алюминиевых окон. Финиши под архитектуру интерьера.</p>
        </div>
        <div className="rounded-xl border border-[#c6a15b]/30 bg-[#d9c8a3] p-7 text-[#151515]">
          <p className="text-[10px] uppercase tracking-[.22em] text-[#816a3f]">Конструкция</p>
          <h2 className="mt-5 font-display text-xl font-bold">Узел оконной рамы</h2>
          <div className="mt-8 border-l-2 border-[#816a3f] pl-4 text-xs leading-7 text-black/60">
            Стеклопакет<br />Уплотнитель<br />Штапик<br />Армирование<br />Подставочный профиль
          </div>
        </div>
      </div>
    </PageFrame>
  ); 
}

function CircleMark() { 
  return <div className="grid size-6 place-items-center rounded-full border border-[#c6a15b] text-[10px] text-[#c6a15b]">S</div>; 
}

function RouterView({ lang, onEstimate }: { lang: Lang; onEstimate: (p?: string) => void }) { 
  return (
    <Switch>
      <Route path="/" component={() => <Home lang={lang} onEstimate={onEstimate} />} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={() => <ProductsPage onEstimate={onEstimate} />} />
      <Route path="/products/:categorySlug/:productSlug" component={() => <ProductDetail onEstimate={onEstimate} />} />
      <Route path="/products/:categorySlug" component={() => <CategoryProductsPage onEstimate={onEstimate} />} />
      <Route path="/components" component={ComponentsPage} />
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