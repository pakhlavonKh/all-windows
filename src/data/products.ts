export type Brand = 'Sistem Aluminium' | 'ASAŞ' | 'Deceuninck' | 'Akfa' | 'Engelberg' | 'ALL WINDOWS';
export type Category = 'all' | 'aluminium' | 'pvc' | 'facade' | 'sliding' | 'doors' | 'shutters' | 'railings';

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  brand: Brand;
  brandCountry: string;
  category: Category;
  series?: string;
  image: string;
  gallery?: string[];
  specs: {
    label: string;
    value: string;
  }[];
  quickSpecs: string[];
  description: string;
  advantages: string[];
  recommendedFor: string;
  related: string[];
}

export const brands: { id: Brand; name: string; country: string; flag: string; description: string }[] = [
  {
    id: 'Sistem Aluminium',
    name: 'Sistem Aluminium',
    country: 'Турция',
    flag: '🇹🇷',
    description: 'Ведущий турецкий производитель высокотехнологичных архитектурных алюминиевых систем (65, 75, 85 серии).'
  },
  {
    id: 'ASAŞ',
    name: 'ASAŞ Aluminium',
    country: 'Турция',
    flag: '🇹🇷',
    description: 'Один из крупнейших экспортеров Турции. Серии Rescara RWT 64 и 75 для энергоэффективных фасадов и окон.'
  },
  {
    id: 'Deceuninck',
    name: 'Deceuninck',
    country: 'Бельгия / Международный',
    flag: '🇧🇪',
    description: 'Мировой лидер в области инновационных ПВХ профильных систем 6000, 7000 и 8000 серий (Лигапро, Фаворит Спэйс, Баутек).'
  },
  {
    id: 'Akfa',
    name: 'Akfa Aluminium & Steel',
    country: 'Узбекистан',
    flag: '🇺🇿',
    description: 'Крупнейший индустриальный холдинг региона: фасадные системы JP, алюминиевые серии Aldoks Neo, Trio, Thermo.'
  },
  {
    id: 'Engelberg',
    name: 'Engelberg',
    country: 'Швейцарские технологии',
    flag: '🇨🇭',
    description: 'Премиальные ПВХ системы повышенной прочности и теплоизоляции (Engelberg 7000, 8000, Infinity).'
  }
];

export const productsData: Product[] = [
  // --- SISTEM ALUMINIUM (TURKEY) ---
  {
    slug: 'sistem-wh85',
    title: 'Sistem Aluminium WH85',
    subtitle: 'Ultra Performance Hinged System · 85 серия (Турция)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'aluminium',
    series: '85 серия',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина рамы', value: '85 мм' },
      { label: 'Монтажная глубина створки', value: '95 мм' },
      { label: 'Терморазрыв (полиамид)', value: '34 мм многокамерный термомост' },
      { label: 'Толщина стеклопакета', value: 'До 64 мм' },
      { label: 'Теплоизоляция Uf', value: 'до 1.1 W/m²K' },
      { label: 'Шумоизоляция', value: 'до 46 дБ' },
      { label: 'Класс водонепроницаемости', value: 'Class E1200' },
      { label: 'Класс воздухопроницаемости', value: 'Class 4' }
    ],
    quickSpecs: ['85 мм глубина', 'Термомост 34 мм', 'Стеклопакет до 64 мм', 'Флагман термоизоляции'],
    description: 'Флагманская алюминиевая поворотно-откидная система ультра-высокой энергоэффективности от Sistem Aluminium (Турция). Спроектирована для проектов с повышенными требованиями к пассивному энергосбережению и панорамному остеклению.',
    advantages: [
      'Максимальная теплоизоляция в алюминиевом сегменте',
      'Возможность установки тяжелых энергосберегающих триплекс-стеклопакетов',
      'Премиальная фурнитура с весом створки до 200 кг',
      'Идеальная геометрия и скрытые петли'
    ],
    recommendedFor: 'Элитные коттеджи, пентхаусы, премиальные жилые комплексы и представительские офисы.',
    related: ['sistem-wh70-w75', 'sistem-bf85', 'asas-rwt75']
  },
  {
    slug: 'sistem-wh70-w75',
    title: 'Sistem Aluminium W75 / WH70',
    subtitle: 'High Performance Insulated Serie · 75 серия (Турция)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'aluminium',
    series: '75 серия',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина рамы', value: '75 мм' },
      { label: 'Монтажная глубина створки', value: '85 мм' },
      { label: 'Терморазрыв', value: '24–30 мм полиамидные вставки' },
      { label: 'Толщина стеклопакета', value: 'До 52 мм' },
      { label: 'Теплоизоляция Uf', value: '1.4 – 1.7 W/m²K' },
      { label: 'Шумоизоляция', value: 'до 42 дБ' },
      { label: 'Ветровая нагрузка', value: 'Class C5' }
    ],
    quickSpecs: ['75 мм глубина', 'Терморазрыв 24-30 мм', 'Стеклопакет до 52 мм', 'Высокая прочность'],
    description: 'Высокоэффективная теплая алюминиевая система 75 серии для окон и дверей. Обеспечивает превосходную звукоизоляцию и ветроустойчивость в высотном строительстве и резиденциях.',
    advantages: [
      'Оптимальный баланс жесткости и теплофизики',
      'Устойчивость к ветровым нагрузкам на верхних этажах',
      'Европейский паз под фурнитуру Roto / Master',
      'Многоконтурное уплотнение EPDM'
    ],
    recommendedFor: 'Современные жилые комплексы, панорамные квартиры, загородные дома.',
    related: ['sistem-wh85', 'sistem-w65', 'asas-rwt75']
  },
  {
    slug: 'sistem-bf85',
    title: 'Sistem Aluminium BF 85',
    subtitle: 'Folding Door System (Гармошка с нижним ходом) · 85 серия',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'sliding',
    series: '85 серия',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Тип конструкции', value: 'Складывающаяся раздвижная система («Гармошка»)' },
      { label: 'Монтажная глубина рамы', value: '85 мм' },
      { label: 'Направляющие каретки', value: 'Усиленный нижний несущий ход (Bottom Carriage)' },
      { label: 'Макс. высота створки', value: 'До 3 200 мм' },
      { label: 'Макс. ширина створки', value: 'До 1 200 мм' },
      { label: 'Вес створки', value: 'До 140 кг на каждую панель' },
      { label: 'Толщина стеклопакета', value: 'До 48 мм' }
    ],
    quickSpecs: ['Складывание до 95%', 'Нижняя опора каретки', 'Высота до 3.2 м', 'Тёплый терморазрыв'],
    description: 'Премиальная складная дверная система BF 85 с высокой теплоизоляцией и нижним несущим роликовым механизмом. Позволяет открыть проем до 95% ширины, объединяя гостиную или ресторан с открытой террасой.',
    advantages: [
      'Полное открытие пространства без глухих секций',
      'Низкий комфортный порог в уровень пола',
      'Плавное и бесшумное скольжение кареток из нержавеющей стали',
      'Высокая герметичность от дождя и ветра'
    ],
    recommendedFor: 'Выходы на террасы, веранды, рестораны, автосалоны, зимние сады.',
    related: ['sistem-wh85', 'sistem-wh70-w75', 'sliding-panoramic']
  },
  {
    slug: 'sistem-w65',
    title: 'Sistem Aluminium W65',
    subtitle: 'Insulated Window & Door Serie (W5-W6) · 65 серия (Турция)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'aluminium',
    series: '65 серия',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина рамы', value: '65 мм' },
      { label: 'Монтажная глубина створки', value: '75 мм' },
      { label: 'Терморазрыв', value: '20 мм полиамид' },
      { label: 'Толщина стеклопакета', value: 'До 44 мм' },
      { label: 'Применение', value: 'Окна, балконные и входные двери' }
    ],
    quickSpecs: ['65 мм глубина', 'Терморазрыв 20 мм', 'Стеклопакет до 44 мм', 'Универсальная классика'],
    description: 'Классическая теплая серия 65 мм от Sistem Aluminium. Надежное решение для масштабного остекления коммерческих зданий, офисных центров и жилых пространств.',
    advantages: [
      'Проверенная надежность в климате Узбекистана',
      'Высокая статическая прочность',
      'Широкая номенклатура адаптеров и усилителей'
    ],
    recommendedFor: 'Городские квартиры, административные здания, бизнес-центры.',
    related: ['sistem-wh70-w75', 'asas-rwt64', 'sistem-w55']
  },
  {
    slug: 'sistem-w55',
    title: 'Sistem Aluminium W55 / D55',
    subtitle: 'Insulated & Non-insulated Window & Door Serie (W1-W4, D1-D2)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'doors',
    series: '55 серия',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина', value: '55 мм' },
      { label: 'Исполнение', value: 'Тёплая (с термомостом) и Холодная серии' },
      { label: 'Толщина заполнения', value: '4 мм – 34 мм' },
      { label: 'Дверные системы D55', value: 'Усиленные входные группы высокой проходимости' }
    ],
    quickSpecs: ['55 мм глубина', 'Входные группы D1/D2', 'Холодное/теплое исполнение', 'Высокая износостойкость'],
    description: 'Серия системных оконных и дверных профилей 55 мм: W55 для окон и D55 для распашных входных групп интенсивной проходимости (магазины, холлы, входные порталы).',
    advantages: [
      'Усиленные угловые сухари для тяжелых дверных створок',
      'Долговечность петель и замковых механизмов',
      'Возможность регулируемых коробок (Adjustable Door Frames)'
    ],
    recommendedFor: 'Входные группы магазинов, офисные двери, тамбуры, перегородки.',
    related: ['sistem-w65', 'sistem-w45', 'aluminium-aldoks']
  },
  {
    slug: 'sistem-w45',
    title: 'Sistem Aluminium W45',
    subtitle: 'Non-insulated Interior & Partition System (W9-W10)',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция 🇹🇷',
    category: 'doors',
    series: '45 серия',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина', value: '45 мм' },
      { label: 'Исполнение', value: 'Холодный профиль / интерьерная серия' },
      { label: 'Толщина стекла', value: '4–24 мм (моностекло или стеклопакет)' },
      { label: 'Особенности', value: 'Компактная видимая ширина профиля' }
    ],
    quickSpecs: ['45 мм глубина', 'Интерьерные решения', 'Минималистичный профиль', 'Офисные перегородки'],
    description: 'Элегантная система без терморазрыва 45 мм для внутренних офисных перегородок, межкомнатных дверей, холодных балконов и остекления летних террас.',
    advantages: [
      'Максимальная светопропускаемость за счет узких профилей',
      'Легкий вес и простота монтажа',
      'Экономичное решение для внутренних пространств'
    ],
    recommendedFor: 'Офисные перегородки, кабинеты, веранды, внутренние двери.',
    related: ['sistem-w55', 'aluminium-aldoks', 'glass-railings']
  },

  // --- ASAŞ (TURKEY) ---
  {
    slug: 'asas-rwt75',
    title: 'ASAŞ Rescara RWT 75',
    subtitle: 'High Thermal Architectural Aluminium System · 75 серия (Турция)',
    brand: 'ASAŞ',
    brandCountry: 'Турция 🇹🇷',
    category: 'aluminium',
    series: '75 серия',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Бренд', value: 'ASAŞ (Rescara Systems, Турция)' },
      { label: 'Монтажная глубина рамы', value: '75 мм' },
      { label: 'Монтажная глубина створки', value: '85 мм' },
      { label: 'Терморазрыв', value: 'Полиамидные термомосты 34 мм' },
      { label: 'Толщина стеклопакета', value: 'До 56 мм' },
      { label: 'Теплопроводность', value: 'Uf = 1.3 - 1.6 W/m²K' },
      { label: 'Водонепроницаемость', value: 'Class 9A (600 Pa)' }
    ],
    quickSpecs: ['75 мм глубина', 'Термомост 34 мм', 'Стеклопакет до 56 мм', 'Премиум Турция'],
    description: 'Премиальная архитектурная алюминиевая система Rescara RWT 75 от ведущего турецкого металлургического концерна ASAŞ. Разработана для высотных зданий и частных резиденций с максимальными требованиями к тепло- и ветрозащите.',
    advantages: [
      'Швейцарский и турецкий сертификаты качества',
      'Высокая энергоэффективность для жаркого лета и холодной зимы',
      'Специальная геометрия дренажных каналов',
      'Интеграция с системами «умный дом» и скрытой автоматикой'
    ],
    recommendedFor: 'Элитные высотные башни, гостиницы, загородные виллы.',
    related: ['asas-rwt64', 'sistem-wh85', 'facade-jp']
  },
  {
    slug: 'asas-rwt64',
    title: 'ASAŞ Rescara RWT 64',
    subtitle: 'Architectural Window & Door Aluminium System · 64 серия (Турция)',
    brand: 'ASAŞ',
    brandCountry: 'Турция 🇹🇷',
    category: 'aluminium',
    series: '64 серия',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Бренд', value: 'ASAŞ (Rescara Systems, Турция)' },
      { label: 'Монтажная глубина рамы', value: '64 мм' },
      { label: 'Монтажная глубина створки', value: '74 мм' },
      { label: 'Термомост', value: '24 мм полиамид' },
      { label: 'Толщина стеклопакета', value: 'До 46 мм' },
      { label: 'Звукоизоляция', value: 'до 40 дБ' }
    ],
    quickSpecs: ['64 мм глубина', 'Термомост 24 мм', 'Стеклопакет до 46 мм', 'ASAŞ Rescara'],
    description: 'Инженерная алюминиевая система 64 серии от ASAŞ (Турция). Обеспечивает стабильную геометрию и превосходную термоизоляцию при умеренном весе конструкции.',
    advantages: [
      'Оптимальная цена для турецкого системного алюминия',
      'Усиленная фальцевая зона под тяжелые стеклопакеты',
      'Совместимость со всеми типами европейской фурнитуры'
    ],
    recommendedFor: 'Многоэтажные жилые комплексы, коммерческая недвижимость.',
    related: ['asas-rwt75', 'sistem-w65', 'aluminium-aldoks']
  },

  // --- DECEUNINCK (PVC 6000, 7000, 8000 СЕРИИ) ---
  {
    slug: 'deceuninck-ligapro',
    title: 'Deceuninck ЛИГАПРО (LIGAPRO)',
    subtitle: 'Новинка! Флагманская ПВХ система 76 мм / 6 камер · 8000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '8000 серия',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля (монтажная глубина)', value: '76 мм' },
      { label: 'Количество воздушных камер', value: '6 камер' },
      { label: 'Макс. толщина стеклопакета', value: '50 мм' },
      { label: 'Класс профиля', value: 'Класс А (высший стандарт)' },
      { label: 'Коэффициент сопротивления теплопередаче', value: '1.05 м²·°C/Вт' },
      { label: 'Уплотнитель', value: 'TPE / EPDM серый и черный премиум' },
      { label: 'Срок службы профиля', value: 'Более 50 лет' }
    ],
    quickSpecs: ['76 мм ширина', '6 камер', 'Стеклопакет до 50 мм', 'Класс А · Новинка!'],
    description: 'Новейшая разработка Deceuninck — система ЛИГАПРО с монтажной шириной 76 мм и 6 воздушными камерами. Создана для бескомпромиссного сохранения тепла и тишины в современных домах.',
    advantages: [
      'Возможность установки 50 мм теплопакетов с аргоном и мультифункциональным стеклом',
      'Увеличенная высота наплава створки 25 мм для защиты от продувания',
      'Уникальный белый глянцевый состав пластика, устойчивый к ультрафиолету Ташкента',
      'Экологическая рецептура без свинца (Eco-friendly EcoLogic)'
    ],
    recommendedFor: 'Квартиры с повышенными требованиями к тишине, загородные коттеджи, энергопассивные дома.',
    related: ['deceuninck-favorit-space', 'deceuninck-favorit', 'pvc-engelberg']
  },
  {
    slug: 'deceuninck-favorit-space',
    title: 'Deceuninck ФАВОРИТ СПЭЙС (FAVORIT SPACE)',
    subtitle: 'Инновационное окно Класса А · 76 мм / 6 камер · 7000-8000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '8000 серия',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '76 мм' },
      { label: 'Количество камер', value: '6 камер' },
      { label: 'Макс. толщина стеклопакета', value: '48 мм' },
      { label: 'Контуры уплотнения', value: '3 контура уплотнения (центральное уплотнение)' },
      { label: 'Сопротивление теплопередаче', value: '1.00 м²·°C/Вт' },
      { label: 'Шумоизоляция', value: 'до 44 дБ' }
    ],
    quickSpecs: ['76 мм ширина', '6 камер', '3 контура уплотнения', 'Стеклопакет до 48 мм'],
    description: 'Премиальное энергосберегающее окно Deceuninck Фаворит Спэйс. Оснащено 3 контурами уплотнения, включая инновационный средний контур, полностью блокирующий сквозняки и уличную пыль.',
    advantages: [
      '3 контура уплотнения обеспечивают абсолютную герметичность',
      'Широкий 6-камерный профиль 76 мм защищает от перепадов температур',
      'Штапик на двух ножках для повышенной защиты от взлома',
      'Высокая звукоизоляция рядом с оживленными трассами'
    ],
    recommendedFor: 'Спальни, детские комнаты, дома рядом с магистралями, загородное строительство.',
    related: ['deceuninck-ligapro', 'deceuninck-favorit', 'deceuninck-bautec-neo']
  },
  {
    slug: 'deceuninck-favorit',
    title: 'Deceuninck ФАВОРИТ (FAVORIT)',
    subtitle: 'Тихие окна класса А для шумного города · 71 мм / 5 камер · 7000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '7000 серия',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '71 мм' },
      { label: 'Количество камер', value: '5 камер' },
      { label: 'Макс. толщина стеклопакета', value: '47 мм' },
      { label: 'Класс профиля', value: 'Класс А' },
      { label: 'Звукоизоляция', value: 'до 40 дБ' }
    ],
    quickSpecs: ['71 мм ширина', '5 камер', 'Стеклопакет до 47 мм', 'Тихие окна Класс А'],
    description: 'Система Deceuninck Фаворит разработана для создания акустического и теплового комфорта в городе. 5 камер и ширина 71 мм эффективно снижают уровень шума мегаполиса.',
    advantages: [
      'Увеличенная монтажная ширина 71 мм исключает промерзание монтажного шва',
      'Возможность установки глубокого стеклопакета до 47 мм',
      'Сертифицированный профиль с безупречной белизной'
    ],
    recommendedFor: 'Квартиры в центре города, жилые комплексы, школы и детские учреждения.',
    related: ['deceuninck-favorit-space', 'deceuninck-bautec-neo', 'deceuninck-bautec-urban']
  },
  {
    slug: 'deceuninck-bautec-neo',
    title: 'Deceuninck БАУТЕК НЕО (BAUTEC NEO)',
    subtitle: 'Комфорт и надежность по выгодной цене · 71 мм / 5 камер · 7000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '7000 серия',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '71 мм' },
      { label: 'Количество камер', value: '5 камер' },
      { label: 'Макс. толщина стеклопакета', value: '46 мм' },
      { label: 'Теплоизоляция', value: '0.85 м²·°C/Вт' }
    ],
    quickSpecs: ['71 мм ширина', '5 камер', 'Стеклопакет до 46 мм', 'Выгодная цена'],
    description: 'Баутек Нео — современная 5-камерная система 71 мм, объединяющая передовые бельгийские стандарты с оптимизированной стоимостью.',
    advantages: [
      'Полноценная ширина 71 мм по цене 60 мм систем',
      'Защита от сквозняков за счет двойного контура свариваемого уплотнителя',
      'Усиленное армирование для жесткости створки'
    ],
    recommendedFor: 'Новостройки, типовые квартиры, замена старых окон.',
    related: ['deceuninck-bautec-urban', 'deceuninck-favorit', 'deceuninck-forward']
  },
  {
    slug: 'deceuninck-bautec-urban',
    title: 'Deceuninck БАУТЕК УРБАН (BAUTEC URBAN)',
    subtitle: 'Хит продаж для городской среды · 71 мм / 5 камер · 7000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '7000 серия',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '71 мм' },
      { label: 'Количество камер', value: '5 камер' },
      { label: 'Макс. толщина стеклопакета', value: '40 мм' },
      { label: 'Теплоизоляция', value: '0.82 м²·°C/Вт' }
    ],
    quickSpecs: ['71 мм ширина', '5 камер', 'Стеклопакет до 40 мм', 'Хит продаж'],
    description: 'Бестселлер в линейке Deceuninck — система Баутек Урбан. Сбалансированные характеристики для остекления многоквартирных домов в Узбекистане.',
    advantages: [
      'Надежность проверенная годами',
      'Эстетичный закругленный штапик',
      'Совместимость с любыми ламинационными пленками'
    ],
    recommendedFor: 'Жилищные комплексы, офисы, квартиры под сдачу и для жизни.',
    related: ['deceuninck-bautec-neo', 'deceuninck-forward', 'deceuninck-eco60']
  },
  {
    slug: 'deceuninck-forward',
    title: 'Deceuninck ФОРВАРД (FORWARD)',
    subtitle: 'Надежные и практичные окна · 60 мм / 3 камеры · 6000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '6000 серия',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '60 мм' },
      { label: 'Количество камер', value: '3 камеры' },
      { label: 'Макс. толщина стеклопакета', value: '38 мм' },
      { label: 'Класс профиля', value: 'Класс B' }
    ],
    quickSpecs: ['60 мм ширина', '3 камеры', 'Стеклопакет до 38 мм', 'Практичный выбор'],
    description: 'Классическая компактная 3-камерная система 60 мм. Надежное и доступное решение для балконов, дач, складских помещений и хозяйственных блоков.',
    advantages: [
      'Доступная стоимость при европейском качестве полимера',
      'Простота в уходе и долговечность',
      'Стеклопакет до 38 мм'
    ],
    recommendedFor: 'Балконы, лоджии, дачи, подсобные помещения, объекты с базовым бюджетом.',
    related: ['deceuninck-eco60', 'deceuninck-bautec-neo', 'pvc-engelberg']
  },
  {
    slug: 'deceuninck-eco60',
    title: 'Deceuninck ЭКО 60 (ECO 60)',
    subtitle: 'Универсальное окно по доступной цене · 60 мм / 4 камеры · 6000 серия',
    brand: 'Deceuninck',
    brandCountry: 'Бельгия / Международный 🇧🇪',
    category: 'pvc',
    series: '6000 серия',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина профиля', value: '60 мм' },
      { label: 'Количество камер', value: '4 камеры' },
      { label: 'Макс. толщина стеклопакета', value: '32 мм' },
      { label: 'Теплоизоляция', value: '0.72 м²·°C/Вт' }
    ],
    quickSpecs: ['60 мм ширина', '4 камеры', 'Стеклопакет до 32 мм', 'Экономичный выбор'],
    description: 'Экономичная 4-камерная система шириной 60 мм от Deceuninck. Сочетает компактные габариты и 4 воздушные камеры для улучшенного теплосбережения.',
    advantages: [
      '4 камеры в габаритах 60 мм',
      'Экологичный состав без токсичных стабилизаторов',
      'Устойчивость к ультрафиолету'
    ],
    recommendedFor: 'Бюджетные новостройки, балконы, дачные дома.',
    related: ['deceuninck-forward', 'deceuninck-bautec-urban', 'pvc-engelberg']
  },

  // --- AKFA & ENGELBERG & CORE SYSTEMS ---
  {
    slug: 'aluminium-aldoks',
    title: 'Алюминиевые системы Akfa Aldoks Neo',
    subtitle: 'Aldoks Neo & Trio · точная архитектурная геометрия',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    category: 'aluminium',
    series: 'Aldoks Neo / 45-50',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Система', value: 'Akfa Aldoks Neo / Trio' },
      { label: 'Монтажная глубина', value: '45–50 мм' },
      { label: 'Толщина стеклопакета', value: 'до 32 мм' },
      { label: 'Фурнитура', value: 'Master, Stublina, Roto' }
    ],
    quickSpecs: ['Aldoks Neo', '45 мм глубина', 'Тёплая / холодная серия', 'Стеклопакет до 32 мм'],
    description: 'Лёгкие и прочные алюминиевые конструкции Akfa. Тёплые системы для жилых интерьеров и холодные — для лоджий, террас, входных тамбуров и коммерческих витрин.',
    advantages: [
      'Доступность и быстрые сроки производства в Ташкенте',
      'Разнообразие цветов по каталогу Akfa Steel RAL',
      'Легкость и прочность конструкции'
    ],
    recommendedFor: 'Жилые комплексы, балконы, террасы, магазины.',
    related: ['sistem-w65', 'facade-jp', 'sliding-panoramic']
  },
  {
    slug: 'pvc-engelberg',
    title: 'ПВХ системы Engelberg 8000 & 7000',
    subtitle: 'Engelberg Infinity · Engelberg 8000 · Швейцарские стандарты',
    brand: 'Engelberg',
    brandCountry: 'Швейцарские технологии 🇨🇭',
    category: 'pvc',
    series: '8000 серия',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Монтажная глубина', value: '80 мм' },
      { label: 'Количество камер', value: '6 камер' },
      { label: 'Толщина стеклопакета', value: 'до 52 мм' },
      { label: 'Класс энергосбережения', value: 'A+' }
    ],
    quickSpecs: ['6 камер', '80 мм глубина', 'Стеклопакет до 52 мм', 'Класс A+'],
    description: 'Теплосберегающие окна для квартир, коттеджей и офисов. Профили Engelberg с усиленным армированием и премиальной геометрией.',
    advantages: [
      'Швейцарский стандарт рецептуры ПВХ',
      'Высокая стойкость к деформации',
      'Превосходная тепло- и шумоизоляция'
    ],
    recommendedFor: 'Квартиры, частные коттеджи, офисы.',
    related: ['deceuninck-ligapro', 'deceuninck-favorit-space', 'mosquito-nets']
  },
  {
    slug: 'facade-jp',
    title: 'Фасадные стоечно-ригельные системы JP & Akfa',
    subtitle: 'JP Façade · структурное и полуструктурное остекление',
    brand: 'Akfa',
    brandCountry: 'Узбекистан / Международный 🇺🇿',
    category: 'facade',
    series: 'JP 50 / JP 60',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Ширина видимой стойки', value: '50–60 мм' },
      { label: 'Глубина стойки', value: '50–250 мм (по расчету ветровых нагрузок)' },
      { label: 'Толщина заполнения', value: 'до 52 мм (триплекс / закаленное)' },
      { label: 'Высота конструкции', value: 'до 6 м без промежуточных перекрытий' }
    ],
    quickSpecs: ['JP Façade system', 'Стойка 50–250 мм', 'Заполнение до 52 мм', 'Высота до 6 м'],
    description: 'Светопрозрачные стоечно-ригельные фасады для бизнес-центров, торговых галерей и современных резиденций. Проектируем узлы, изготавливаем конструкции в цехе ООО «VINNIAN GROUP» и монтируем под ключ.',
    advantages: [
      'Возможность сплошного остекления фасада любого масштаба',
      'Высокая сейсмостойкость и ветроустойчивость',
      'Интеграция скрытых открывающихся створок (лючков)'
    ],
    recommendedFor: 'Бизнес-центры, банки, автосалоны, элитные виллы.',
    related: ['stained-glass-panoramic', 'sistem-wh85', 'asas-rwt75']
  },
  {
    slug: 'stained-glass-panoramic',
    title: 'Витражи и панорамное остекление',
    subtitle: 'Свет как часть архитектуры · Закалённое стекло и триплекс',
    brand: 'ALL WINDOWS',
    brandCountry: 'ООО «VINNIAN GROUP» 🇺🇿',
    category: 'facade',
    series: 'Panorama Custom',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Форматы', value: 'Крупноформатные джамбо-размеры' },
      { label: 'Стекло', value: 'Закалённое / Триплекс 6+6, 8+8 мм' },
      { label: 'Покрытия', value: 'Мультифункциональные, энергосберегающие, солнцезащитные' },
      { label: 'Гарантия', value: 'Гарантия герметичности по договору' }
    ],
    quickSpecs: ['Форматы по проекту', 'Закалённое / триплекс', 'Солнцезащита', 'Герметичность'],
    description: 'Панорамные витражные решения с увеличенным световым проемом. Подбираем формулы стекла под ориентацию по сторонам света и инсоляцию в Ташкенте.',
    advantages: [
      'Максимальное естественное освещение',
      'Защита от перегрева летом и теплопотерь зимой',
      'Абсолютная безопасность при случайном ударе'
    ],
    recommendedFor: 'Двухсветные гостиные, пентхаусы, рестораны, автосалоны.',
    related: ['facade-jp', 'sistem-bf85', 'sliding-panoramic']
  },
  {
    slug: 'sliding-panoramic',
    title: 'Подъемно-раздвижные системы (Lift & Slide)',
    subtitle: 'Sistem Aluminium & Akfa Panorama · Створки до 400 кг',
    brand: 'Sistem Aluminium',
    brandCountry: 'Турция / Узбекистан 🇹🇷',
    category: 'sliding',
    series: 'Lift-Slide 120/150',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Механизм', value: 'Подъемно-раздвижной (Lift & Slide)' },
      { label: 'Вес одной створки', value: 'до 400 кг' },
      { label: 'Высота створки', value: 'до 3.5 м' },
      { label: 'Порог', value: 'Безбарьерный тёплый порог 15–20 мм' }
    ],
    quickSpecs: ['Lift & Slide', 'Створка до 400 кг', 'Открывание до 75%', 'Низкий порог'],
    description: 'Плавный ход тяжелых панорамных створок одним движением руки. Позволяет закрывать огромные проемы шириной до 12 метров.',
    advantages: [
      'Панорамный вид без лишних перемычек',
      'Легкое скольжение даже при створках весом 350+ кг',
      'Идеальная защита от сквозняков и ливней'
    ],
    recommendedFor: 'Выходы на террасы, бассейны, зимние сады.',
    related: ['sistem-bf85', 'sistem-wh85', 'stained-glass-panoramic']
  },
  {
    slug: 'rolling-shutters',
    title: 'Рольставни и роллетные ворота Akfa',
    subtitle: 'Пенозаполненные и экструдированные ламели · Автоматика Somfy / Mosel',
    brand: 'Akfa',
    brandCountry: 'Узбекистан 🇺🇿',
    category: 'shutters',
    series: 'Akfa Security',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Материал', value: 'Алюминиевые ламели 39 / 45 / 55 / 77 мм' },
      { label: 'Тип ламелей', value: 'Пенонаполненные и антивандальные экструдированные' },
      { label: 'Управление', value: 'Электропривод (пульт, клавиша, со смартфона) / ручное' },
      { label: 'Монтаж', value: 'Встроенный в проем или накладной' }
    ],
    quickSpecs: ['Ламель 39/45/55/77 мм', 'Автоматика Somfy/Mosel', 'Антивандальная защита', 'Тепло- и шумоизоляция'],
    description: 'Защитные и солнцезащитные роллетные системы. Защищают окна и витрины от взлома, уличного шума, пыли и яркого южного солнца.',
    advantages: [
      'Энергосбережение: снижают нагрев помещения летом до 70%',
      'Надежная защита от несанкционированного проникновения',
      'Возможность интеграции с умным домом'
    ],
    recommendedFor: 'Коттеджи, первые этажи, магазины, гаражи, банки.',
    related: ['pvc-engelberg', 'mosquito-nets', 'aluminium-aldoks']
  },
  {
    slug: 'glass-railings',
    title: 'Цельностеклянные перила и ограждения',
    subtitle: 'Безопасность без визуальных границ · Триплекс 10+10 / 8+8 мм',
    brand: 'ALL WINDOWS',
    brandCountry: 'ООО «VINNIAN GROUP» 🇺🇿',
    category: 'railings',
    series: 'Crystal View',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Стекло', value: 'Закаленный триплекс 12–21.5 мм' },
      { label: 'Крепление', value: 'Алюминиевый зажимной нижний профиль / точечные спайдеры' },
      { label: 'Поручень', value: 'Минималистичный алюминиевый / из нержавеющей стали / без поручня' },
      { label: 'Нагрузка', value: 'Соответствует стандартам безопасности до 1.5 кН/м' }
    ],
    quickSpecs: ['Триплекс 12–21.5 мм', 'Нижний профиль / спайдеры', 'Для лестниц и террас', 'Нержавеющая сталь AISI 304/316'],
    description: 'Современные ограждения балконов, террас, эксплуатируемых кровель и лестничных маршей из сверхпрочного закаленного триплекса.',
    advantages: [
      '100% прозрачность и визуальная легкость',
      'Безопасность: триплекс не осыпается даже при разрушении',
      'Устойчивость к погодным факторам и коррозии'
    ],
    recommendedFor: 'Балконы, атриумы, террасы, лестницы, бассейны.',
    related: ['stained-glass-panoramic', 'sistem-bf85', 'facade-jp']
  },
  {
    slug: 'mosquito-nets',
    title: 'Москитные системы (Плиссе и рамочные)',
    subtitle: 'Алюминиевый профиль · Сетка Fiberglass и Антипыль (Poll-tex)',
    brand: 'ALL WINDOWS',
    brandCountry: 'ООО «VINNIAN GROUP» 🇺🇿',
    category: 'shutters',
    series: 'Comfort Protect',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
    specs: [
      { label: 'Типы', value: 'Рамочные съемные, дверные распашные, раздвижные Плиссе (гармошка)' },
      { label: 'Полотно', value: 'Стандарт Fiberglass, Антикошка (Pet Screen), Антипыль (Poll-tex)' },
      { label: 'Каркас', value: 'Экструдированный алюминий с порошковым покрытием в цвет окна' }
    ],
    quickSpecs: ['Рамочные / Плиссе', 'Fiberglass / Антикошка', 'Алюминиевый каркас', 'Любые размеры'],
    description: 'Профессиональные защитные сетки для любых типов окон и дверей. Раздвижные плиссе-сетки идеальны для крупногабаритных террасных проемов.',
    advantages: [
      'Точная посадка без зазоров',
      'Полотно плиссе складывается гармошкой и не занимает места',
      'Повышенная прочность полотна против домашних животных'
    ],
    recommendedFor: 'Окна и двери квартир, коттеджей, загородных домов.',
    related: ['pvc-engelberg', 'deceuninck-favorit-space', 'sistem-wh85']
  }
];
