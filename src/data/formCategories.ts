import { Lang } from './translations';

export interface FormProductOption {
  value: string;
  labelRu: string;
  labelUz: string;
  descRu?: string;
  descUz?: string;
  badgeRu?: string;
  badgeUz?: string;
}

export interface FormCategoryConfig {
  slug: string;
  catalogCategorySlug: string;
  type: 'window' | 'door' | 'other';
  titleRu: string;
  titleUz: string;
  subtitleRu: string;
  subtitleUz: string;
  defaultWidth: string;
  defaultHeight: string;
  products: FormProductOption[];
}

export interface FormProductItem {
  id: string;
  categorySlug: string;
  productSlug: string;
  customProductTitle: string;
  color: string;
  glass: string;
  width: string;
  height: string;
  quantity: string;
}

export const CUSTOM_PRODUCT_VALUE = 'custom_product';

export const FORM_CATEGORIES: FormCategoryConfig[] = [
  // 1. АЛЮМИНИЕВЫЕ ОКНА (Aluminium Windows)
  {
    slug: 'aluminium-windows',
    catalogCategorySlug: 'aluminium',
    type: 'window',
    titleRu: 'Алюминиевые окна',
    titleUz: 'Alyuminiy derazalar',
    subtitleRu: 'Akfa TERMO · Sistem · ASAŞ · Aldox',
    subtitleUz: 'Akfa TERMO · Sistem · ASAŞ · Aldox',
    defaultWidth: '1800',
    defaultHeight: '1400',
    products: [
      {
        value: 'termo-77',
        labelRu: 'Akfa TERMO 77 (Окна)',
        labelUz: 'Akfa TERMO 77 (Deraza tizimi)',
        descRu: 'Флагманская теплая серия 77 мм с термомостом 34 мм',
        descUz: '34 mm termoko‘prikli flagman 77 mm issiq deraza tizimi',
        badgeRu: 'Akfa · 77 мм',
        badgeUz: 'Akfa · 77 mm'
      },
      {
        value: 'termo-70',
        labelRu: 'Akfa TERMO 70 (Окна)',
        labelUz: 'Akfa TERMO 70 (Deraza tizimi)',
        descRu: 'Усиленная теплая оконная система 70 мм для жилых домов',
        descUz: 'Turar-joylar uchun 70 mm mustahkamlangan issiq tizim',
        badgeRu: 'Akfa · 70 мм',
        badgeUz: 'Akfa · 70 mm'
      },
      {
        value: 'termo-98',
        labelRu: 'Akfa TERMO 98 (Окна)',
        labelUz: 'Akfa TERMO 98 (Deraza tizimi)',
        descRu: 'Сверхпрочная архитектурная серия для высоких нагрузок',
        descUz: 'Yuqori yuklamalar uchun mustahkam arxitekturaviy seriya',
        badgeRu: 'Akfa · 70 мм',
        badgeUz: 'Akfa · 70 mm'
      },
      {
        value: 'sistem-75',
        labelRu: 'Sistem Aluminium 75 (Окна)',
        labelUz: 'Sistem Aluminium 75 (Deraza tizimi)',
        descRu: 'Премиальные турецкие термо-окна 75 мм',
        descUz: 'Turkiya premium 75 mm termo-deraza profili',
        badgeRu: 'Турция 🇹🇷',
        badgeUz: 'Turkiya 🇹🇷'
      },
      {
        value: 'sistem-65',
        labelRu: 'Sistem Aluminium 65 (Окна)',
        labelUz: 'Sistem Aluminium 65 (Deraza tizimi)',
        descRu: 'Энергоэффективные турецкие окна 65 мм',
        descUz: 'Energiya tejovchi Turkiya 65 mm deraza profili',
        badgeRu: 'Турция 🇹🇷',
        badgeUz: 'Turkiya 🇹🇷'
      },
      {
        value: 'asas-75',
        labelRu: 'ASAŞ Rescara RWT 75 (Окна)',
        labelUz: 'ASAŞ Rescara RWT 75 (Deraza tizimi)',
        descRu: 'Высокотехнологичные окна с максимальной звукоизоляцией',
        descUz: 'Maksimal shovqin izolyatsiyali yuqori texnologik derazalar',
        badgeRu: 'Турция 🇹🇷',
        badgeUz: 'Turkiya 🇹🇷'
      },
      {
        value: 'aldox',
        labelRu: 'Akfa Aldox (Окна)',
        labelUz: 'Akfa Aldox (Deraza tizimi)',
        descRu: 'Классические легкие алюминиевые окна',
        descUz: 'Klassik yengil alyuminiy derazalar',
        badgeRu: 'Akfa Aldox',
        badgeUz: 'Akfa Aldox'
      },
      {
        value: 'aldox-2',
        labelRu: 'Akfa Aldox 2 (Окна)',
        labelUz: 'Akfa Aldox 2 (Deraza tizimi)',
        descRu: 'Усиленная серия Aldox с улучшенной геометрией',
        descUz: 'Yaxshilangan geometriyaga ega mustahkam Aldox seriyasi',
        badgeRu: 'Akfa Aldox 2',
        badgeUz: 'Akfa Aldox 2'
      },
      {
        value: 'akf-47',
        labelRu: 'Akfa AKF 47 Champion',
        labelUz: 'Akfa AKF 47 Champion',
        descRu: 'Оконная серия 47 мм для витражей и перегородок',
        descUz: 'Vitraj va to‘siqlar uchun 47 mm deraza seriyasi',
        badgeRu: 'Akfa 47',
        badgeUz: 'Akfa 47'
      }
    ]
  },

  // 2. АЛЮМИНИЕВЫЕ ДВЕРИ (Aluminium Doors)
  {
    slug: 'aluminium-doors',
    catalogCategorySlug: 'aluminium',
    type: 'door',
    titleRu: 'Алюминиевые двери',
    titleUz: 'Alyuminiy eshiklar',
    subtitleRu: 'Входные группы · TERMO двери · Aldox',
    subtitleUz: 'Kirish guruhlari · TERMO eshiklar · Aldox',
    defaultWidth: '900',
    defaultHeight: '2100',
    products: [
      {
        value: 'termo-77-doors',
        labelRu: 'Akfa TERMO 77 Двери',
        labelUz: 'Akfa TERMO 77 Eshiklar',
        descRu: 'Теплая дверная система с термомостом 28 мм для парадного входа',
        descUz: 'Asosiy kirish uchun 28 mm termoko‘prikli issiq eshik tizimi',
        badgeRu: 'Akfa TERMO',
        badgeUz: 'Akfa TERMO'
      },
      {
        value: 'termo-70-doors',
        labelRu: 'Akfa TERMO 70 Двери',
        labelUz: 'Akfa TERMO 70 Eshiklar',
        descRu: 'Усиленная входная термо-дверь со створкой до 160 кг',
        descUz: '160 kg gacha tabaqaga ega mustahkamlangan kirish termo-eshigi',
        badgeRu: 'Akfa TERMO',
        badgeUz: 'Akfa TERMO'
      },
      {
        value: 'termo-98-doors',
        labelRu: 'Akfa TERMO 98 Двери',
        labelUz: 'Akfa TERMO 98 Eshiklar',
        descRu: 'Архитектурные входные группы для высокой проходимости',
        descUz: 'Yuqori o‘tish harakati uchun arxitekturaviy kirish guruhlari',
        badgeRu: 'Akfa TERMO',
        badgeUz: 'Akfa TERMO'
      },
      {
        value: 'sistem-75-doors',
        labelRu: 'Sistem Aluminium 75 Двери',
        labelUz: 'Sistem Aluminium 75 Eshiklar',
        descRu: 'Премиальные турецкие алюминиевые двери высокой надежности',
        descUz: 'Yuqori ishonchlilikka ega Turkiya premium alyuminiy eshiklari',
        badgeRu: 'Турция 🇹🇷',
        badgeUz: 'Turkiya 🇹🇷'
      },
      {
        value: 'asas-75-doors',
        labelRu: 'ASAŞ Rescara RWT 75 Двери',
        labelUz: 'ASAŞ Rescara RWT 75 Eshiklar',
        descRu: 'Входные энергосберегающие термо-двери',
        descUz: 'Energiyani tejovchi kirish termo-eshiklari',
        badgeRu: 'Турция 🇹🇷',
        badgeUz: 'Turkiya 🇹🇷'
      },
      {
        value: 'aldox-doors',
        labelRu: 'Akfa Aldox Двери',
        labelUz: 'Akfa Aldox Eshiklar',
        descRu: 'Офисные, торговые и внутренние алюминиевые двери',
        descUz: 'Ofis, savdo va ichki alyuminiy eshiklar',
        badgeRu: 'Akfa Aldox',
        badgeUz: 'Akfa Aldox'
      },
      {
        value: 'aldox-2-doors',
        labelRu: 'Akfa Aldox 2 Двери',
        labelUz: 'Akfa Aldox 2 Eshiklar',
        descRu: 'Усиленные входные и межкомнатные двери Aldox 2',
        descUz: 'Mustahkamlangan kirish va xonalararo Aldox 2 eshiklari',
        badgeRu: 'Akfa Aldox 2',
        badgeUz: 'Akfa Aldox 2'
      }
    ]
  },

  // 3. ПВХ ОКНА (PVC Windows)
  {
    slug: 'pvc-windows',
    catalogCategorySlug: 'pvc',
    type: 'window',
    titleRu: 'ПВХ окна',
    titleUz: 'PVX derazalar',
    subtitleRu: 'Deceuninck · Engelberg · Trio · Quattro',
    subtitleUz: 'Deceuninck · Engelberg · Trio · Quattro',
    defaultWidth: '1800',
    defaultHeight: '1400',
    products: [
      {
        value: 'deceuninck-8000',
        labelRu: 'Deceuninck Favorit Space 8000',
        labelUz: 'Deceuninck Favorit Space 8000',
        descRu: 'Инновационные 6-камерные окна 80 мм (Бельгия / Международный)',
        descUz: '80 mm li 6 kamerali innovatsion derazalar (Belgiya)',
        badgeRu: 'Бельгия 🇧🇪',
        badgeUz: 'Belgiya 🇧🇪'
      },
      {
        value: 'deceuninck-7000',
        labelRu: 'Deceuninck Bautec Neo 7000',
        labelUz: 'Deceuninck Bautec Neo 7000',
        descRu: 'Энергосберегающие 5-камерные окна 70 мм',
        descUz: '70 mm li 5 kamerali energiya tejovchi derazalar',
        badgeRu: 'Бельгия 🇧🇪',
        badgeUz: 'Belgiya 🇧🇪'
      },
      {
        value: 'deceuninck-6000',
        labelRu: 'Deceuninck Ligapro 6000',
        labelUz: 'Deceuninck Ligapro 6000',
        descRu: 'Практичные 3-камерные окна 60 мм повышенной белизны',
        descUz: '60 mm li 3 kamerali amaliy derazalar',
        badgeRu: 'Бельгия 🇧🇪',
        badgeUz: 'Belgiya 🇧🇪'
      },
      {
        value: 'engelberg-8000',
        labelRu: 'Engelberg 8000 Окна',
        labelUz: 'Engelberg 8000 Derazalar',
        descRu: 'Премиальные швейцарские энергоэффективные окна 80 мм',
        descUz: '80 mm li premium Shveytsariya derazalari',
        badgeRu: 'Швейцария 🇨🇭',
        badgeUz: 'Shveytsariya 🇨🇭'
      },
      {
        value: 'engelberg-7600',
        labelRu: 'Engelberg 7600 Окна',
        labelUz: 'Engelberg 7600 Derazalar',
        descRu: 'Швейцарские технологии 76 мм с высокими термопоказателями',
        descUz: 'Yuqori termo ko‘rsatkichli 76 mm Shveytsariya derazalari',
        badgeRu: 'Швейцария 🇨🇭',
        badgeUz: 'Shveytsariya 🇨🇭'
      },
      {
        value: 'engelberg-7000',
        labelRu: 'Engelberg 7000 Окна',
        labelUz: 'Engelberg 7000 Derazalar',
        descRu: 'Популярная серия 70 мм для квартир и загородных домов',
        descUz: 'Xonadon va dala hovlilar uchun ommabop 70 mm seriya',
        badgeRu: 'Швейцария 🇨🇭',
        badgeUz: 'Shveytsariya 🇨🇭'
      },
      {
        value: 'trio-6000',
        labelRu: 'Akfa Trio 6000 Окна',
        labelUz: 'Akfa Trio 6000 Derazalar',
        descRu: 'Классические 3-камерные ПВХ окна 60 мм',
        descUz: 'Klassik 3 kamerali 60 mm PVX derazalar',
        badgeRu: 'Akfa Trio',
        badgeUz: 'Akfa Trio'
      },
      {
        value: 'trio-5800',
        labelRu: 'Akfa Trio 5800 Окна',
        labelUz: 'Akfa Trio 5800 Derazalar',
        descRu: 'Доступные надежные окна 58 мм',
        descUz: 'Hamyonbop va ishonchli 58 mm derazalar',
        badgeRu: 'Akfa Trio',
        badgeUz: 'Akfa Trio'
      },
      {
        value: 'quattro-6000',
        labelRu: 'Akfa Quattro 6000 Окна',
        labelUz: 'Akfa Quattro 6000 Derazalar',
        descRu: '4-камерные энергосберегающие окна 60 мм',
        descUz: '4 kamerali 60 mm energiya tejovchi derazalar',
        badgeRu: 'Akfa Quattro',
        badgeUz: 'Akfa Quattro'
      },
      {
        value: 'quattro-5800',
        labelRu: 'Akfa Quattro 5800 Окна',
        labelUz: 'Akfa Quattro 5800 Derazalar',
        descRu: 'Оптимальная 4-камерная серия 58 мм',
        descUz: 'Optimal 4 kamerali 58 mm seriya',
        badgeRu: 'Akfa Quattro',
        badgeUz: 'Akfa Quattro'
      }
    ]
  },

  // 4. ПВХ ДВЕРИ (PVC Doors)
  {
    slug: 'pvc-doors',
    catalogCategorySlug: 'pvc',
    type: 'door',
    titleRu: 'ПВХ двери',
    titleUz: 'PVX eshiklar',
    subtitleRu: 'Входные группы · Балконные двери · Engelberg',
    subtitleUz: 'Kirish guruhlari · Balkon eshiklari · Engelberg',
    defaultWidth: '900',
    defaultHeight: '2100',
    products: [
      {
        value: 'deceuninck-doors',
        labelRu: 'Deceuninck Входные ПВХ двери',
        labelUz: 'Deceuninck PVX kirish eshiklari',
        descRu: 'Усиленный профиль 70 мм со стальным армированием и многозапорным замком',
        descUz: 'Po‘lat armaturali va ko‘p nuqtali qulflarga ega 70 mm kuchaytirilgan profil',
        badgeRu: 'Бельгия 🇧🇪',
        badgeUz: 'Belgiya 🇧🇪'
      },
      {
        value: 'engelberg-8000-doors',
        labelRu: 'Engelberg 8000 Входные двери',
        labelUz: 'Engelberg 8000 Kirish eshiklari',
        descRu: 'Премиум входные ПВХ двери 80 мм с максимальной тепло- и звукоизоляцией',
        descUz: 'Maksimal issiqlik va tovush izolyatsiyali 80 mm premium kirish eshiklari',
        badgeRu: 'Швейцария 🇨🇭',
        badgeUz: 'Shveytsariya 🇨🇭'
      },
      {
        value: 'engelberg-7000-doors',
        labelRu: 'Engelberg 7000 Балконные и входные двери',
        labelUz: 'Engelberg 7000 Balkon va kirish eshiklari',
        descRu: 'Надежные двери со штульповым или обычным открыванием',
        descUz: 'Shtulp yoki standart ochiluvchi ishonchli eshiklar',
        badgeRu: 'Швейцария 🇨🇭',
        badgeUz: 'Shveytsariya 🇨🇭'
      },
      {
        value: 'trio-6000-doors',
        labelRu: 'Akfa Trio 6000 Двери',
        labelUz: 'Akfa Trio 6000 Eshiklar',
        descRu: 'Балконные и межкомнатные ПВХ двери для жилых помещений',
        descUz: 'Turar-joylar uchun balkon va xonalararo PVX eshiklar',
        badgeRu: 'Akfa Trio',
        badgeUz: 'Akfa Trio'
      },
      {
        value: 'quattro-6000-doors',
        labelRu: 'Akfa Quattro 6000 Двери',
        labelUz: 'Akfa Quattro 6000 Eshiklar',
        descRu: 'Усиленные 4-камерные двери с прочной фурнитурой',
        descUz: 'Mustahkam furniturali 4 kamerali eshiklar',
        badgeRu: 'Akfa Quattro',
        badgeUz: 'Akfa Quattro'
      }
    ]
  },

  // 5. РАЗДВИЖНЫЕ СИСТЕМЫ (Sliding)
  {
    slug: 'sliding',
    catalogCategorySlug: 'sliding',
    type: 'other',
    titleRu: 'Раздвижные и гильотинные системы',
    titleUz: 'Surma va gilyotina tizimlari',
    subtitleRu: 'Гильотина · Akfa BKH · BKG · Lift & Slide',
    subtitleUz: 'Gilyotina · Akfa BKH · BKG · Lift & Slide',
    defaultWidth: '3000',
    defaultHeight: '2400',
    products: [
      {
        value: 'guillotine',
        labelRu: 'Автоматическая гильотинная система',
        labelUz: 'Avtomatik gilyotina tizimi',
        descRu: 'Вертикальный моторизованный подъем для ресторанов, веранд и террас',
        descUz: 'Restoran, veranda va terasalar uchun vertikal motorli ko‘tarilish',
        badgeRu: 'Автоматика',
        badgeUz: 'Avtomatika'
      },
      {
        value: 'bkh-65',
        labelRu: 'Standart BKH 65 Lift & Slide',
        labelUz: 'Standart BKH 65 Lift & Slide',
        descRu: 'Премиум подъемно-раздвижной портал для широких проемов',
        descUz: 'Keng oraliqlar uchun premium ko‘tarilma-surma portal',
        badgeRu: 'Lift & Slide',
        badgeUz: 'Lift & Slide'
      },
      {
        value: 'bkh-60',
        labelRu: 'Standart BKH 60 Lift & Slide',
        labelUz: 'Standart BKH 60 Lift & Slide',
        descRu: 'Теплый подъемно-сдвижной портал со скрытой фурнитурой',
        descUz: 'Yashirin furniturali issiq ko‘tarilma-surma portal',
        badgeRu: 'Lift & Slide',
        badgeUz: 'Lift & Slide'
      },
      {
        value: 'bkh-38',
        labelRu: 'Standart BKH 38 (Тёплая раздвижная)',
        labelUz: 'Standart BKH 38 (Issiq surma)',
        descRu: 'Тёплая раздвижная серия для коттеджей и балконов',
        descUz: 'Kottej va balkonlar uchun issiq surma seriya',
        badgeRu: 'Теплая',
        badgeUz: 'Issiq'
      },
      {
        value: 'bkg-40',
        labelRu: 'Econom BKG 40 (Холодная раздвижная)',
        labelUz: 'Econom BKG 40 (Sovuq surma)',
        descRu: 'Лёгкая раздвижная система для беседок и внутренних перегородок',
        descUz: 'Shiypon va ichki to‘siqlar uchun yengil surma tizim',
        badgeRu: 'Эконом',
        badgeUz: 'Ekonom'
      }
    ]
  },

  // 6. ФАСАДНЫЕ СИСТЕМЫ (Facade)
  {
    slug: 'facade',
    catalogCategorySlug: 'facade',
    type: 'other',
    titleRu: 'Фасадные системы',
    titleUz: 'Fasad tizimlari',
    subtitleRu: 'Akfa BKF 48 · BKF 50 · BKF Max',
    subtitleUz: 'Akfa BKF 48 · BKF 50 · BKF Max',
    defaultWidth: '4000',
    defaultHeight: '3000',
    products: [
      {
        value: 'bkf-max',
        labelRu: 'Premium BKF Max 22 мм',
        labelUz: 'Premium BKF Max 22 mm',
        descRu: 'Ультратонкий фасад с видимой шириной профиля всего 22 мм',
        descUz: 'Ko‘rinadigan profil kengligi bor-yo‘g‘i 22 mm li ingichka fasad',
        badgeRu: '22 мм ультратонкий',
        badgeUz: '22 mm ingichka'
      },
      {
        value: 'bkf-50',
        labelRu: 'Premium BKF 50 (Сейсмостойкий)',
        labelUz: 'Premium BKF 50 (Seysmoto‘lqinli)',
        descRu: 'Стоечно-ригельный фасад высокой сейсмостойкости до 9 баллов',
        descUz: '9 ballgacha seysmik bardoshli ustun-rigel fasadi',
        badgeRu: 'Сейсмостойкий 9 б.',
        badgeUz: '9 ballga chidamli'
      },
      {
        value: 'bkf-48',
        labelRu: 'Econom BKF 48 (Классический)',
        labelUz: 'Econom BKF 48 (Klassik fasad)',
        descRu: 'Классическое структурное и полуструктурное остекление',
        descUz: 'Klassik strukturaviy va yarim strukturaviy oynabandlik',
        badgeRu: 'BKF 48',
        badgeUz: 'BKF 48'
      }
    ]
  },

  // 7. ОФИСНЫЕ ПЕРЕГОРОДКИ (Office Partitions)
  {
    slug: 'office-partitions',
    catalogCategorySlug: 'office-partitions',
    type: 'other',
    titleRu: 'Офисные перегородки',
    titleUz: 'Ofis to‘siqlari',
    subtitleRu: 'Akfa BKO 38 · BKO 40',
    subtitleUz: 'Akfa BKO 38 · BKO 40',
    defaultWidth: '3000',
    defaultHeight: '2700',
    products: [
      {
        value: 'bko-40',
        labelRu: 'Akfa BKO 40 (Двойное заполнение)',
        labelUz: 'Akfa BKO 40 (Ikki qavatli to‘ldirish)',
        descRu: 'Офисные перегородки с двойным стеклом и встроенными жалюзи',
        descUz: 'Ikki qavatli shisha va ichki jaluzi o‘rnatish imkoniyati',
        badgeRu: 'Звукоизоляция 40 дБ',
        badgeUz: 'Shovqindan himoya'
      },
      {
        value: 'bko-38',
        labelRu: 'Akfa BKO 38 (Одинарное заполнение)',
        labelUz: 'Akfa BKO 38 (Bir qavatli to‘ldirish)',
        descRu: 'Элегантные перегородки для кабинетов и open-space',
        descUz: 'Kabinet va open-space uchun nafis to‘siqlar',
        badgeRu: 'BKO 38',
        badgeUz: 'BKO 38'
      },
      {
        value: 'all-glass-partition',
        labelRu: 'Цельностеклянные перегородки',
        labelUz: 'Butunlay shishali to‘siqlar',
        descRu: 'Бескаркасные перегородки из закаленного триплекса 10–12 мм',
        descUz: '10–12 mm li toblangan xavfsiz shishadan ramalarsiz to‘siqlar',
        badgeRu: 'Бескаркасные',
        badgeUz: 'Ramalarsiz'
      }
    ]
  },

  // 8. СПАЙДЕРНЫЕ СИСТЕМЫ И ВИТРАЖИ (Stained glass / Spider systems)
  {
    slug: 'stained-glass',
    catalogCategorySlug: 'stained-glass',
    type: 'other',
    titleRu: 'Спайдерные системы и витражи',
    titleUz: 'Spayder tizimlari va vitrajlar',
    subtitleRu: 'Точечное остекление Spider System',
    subtitleUz: 'Spider System nuqtali oynabandlik',
    defaultWidth: '3000',
    defaultHeight: '3000',
    products: [
      {
        value: 'spider-system',
        labelRu: 'Spider System (Точечное остекление)',
        labelUz: 'Spider System (Nuqtali oynabandlik)',
        descRu: 'Кронштейны из нержавеющей стали AISI 316 и закаленный триплекс',
        descUz: 'AISI 316 zanglamas po‘lat kronshteynlar va toblangan tripleks',
        badgeRu: 'AISI 316',
        badgeUz: 'AISI 316'
      },
      {
        value: 'panoramic-stained',
        labelRu: 'Панорамное витражное остекление',
        labelUz: 'Panoramali vitraj oynabandligi',
        descRu: 'Крупноформатные стеклянные фасады и витрины автосалонов',
        descUz: 'Katta formatli shisha fasadlar va vitrinalar',
        badgeRu: 'Панорама',
        badgeUz: 'Panorama'
      },
      {
        value: 'atrium-skylight',
        labelRu: 'Стеклянные купола и зенитные фонари',
        labelUz: 'Shisha gumbazlar va zenit fonarlari',
        descRu: 'Кровельное остекление атриумов с подогревом и защитой от града',
        descUz: 'Atriumlarning tom qismidagi oynabandlik',
        badgeRu: 'Кровля',
        badgeUz: 'Tom qismi'
      }
    ]
  },

  // 9. РОЛЬСТАВНИ И ВОРОТА (Rolling shutters)
  {
    slug: 'rolling-shutters',
    catalogCategorySlug: 'rolling-shutters',
    type: 'other',
    titleRu: 'Рольставни и роллетные ворота',
    titleUz: 'Himoya darvozalari va roletlar',
    subtitleRu: 'Алюминиевые и сэндвич-профили (55 / 77 мм)',
    subtitleUz: 'Alyuminiy va sendvich-profillar (55 / 77 mm)',
    defaultWidth: '2000',
    defaultHeight: '2200',
    products: [
      {
        value: 'shutter-55-foam',
        labelRu: 'Пенонаполненные рольставни 55 мм',
        labelUz: 'Ko‘pikli himoya roletlari 55 mm',
        descRu: 'Тепло- и шумоизоляция окон первых этажей и коттеджей',
        descUz: 'Kottej va birinchi qavat derazalari uchun issiqlik va shovqindan himoya',
        badgeRu: 'Теплозащита',
        badgeUz: 'Issiqlik himoyasi'
      },
      {
        value: 'shutter-55-extrude',
        labelRu: 'Антивандальные рольставни 55 мм',
        labelUz: 'Antivandal roletlar 55 mm',
        descRu: 'Цельнотянутый экструдированный алюминий высокой прочности',
        descUz: 'Yuqori mustahkamlikka ega quyma alyuminiy profil',
        badgeRu: 'Антивандал',
        badgeUz: 'Antivandal'
      },
      {
        value: 'garage-gates-77',
        labelRu: 'Роллетные гаражные ворота 77 мм',
        labelUz: 'Garaj rolet darvozalari 77 mm',
        descRu: 'Автоматические ворота с электроприводом и аварийным подъемом',
        descUz: 'Elektro-privodli va avariya holatida ochiluvchi avtomatik darvozalar',
        badgeRu: 'Ворота 77 мм',
        badgeUz: 'Darvoza 77 mm'
      }
    ]
  },

  // 10. СТЕКЛЯННЫЕ ПЕРИЛА И ОГРАЖДЕНИЯ (Glass railings)
  {
    slug: 'glass-railings',
    catalogCategorySlug: 'glass-railings',
    type: 'other',
    titleRu: 'Стеклянные перила и ограждения',
    titleUz: 'Shisha panjaralar va to‘siqlar',
    subtitleRu: 'Система BKGF 90 · Эффектно и современно',
    subtitleUz: 'BKGF 90 tizimi · Zamonaviy va xavfsiz',
    defaultWidth: '3000',
    defaultHeight: '1100',
    products: [
      {
        value: 'bkgf-90',
        labelRu: 'Стеклянные перила BKGF 90',
        labelUz: 'BKGF 90 shisha panjaralari',
        descRu: 'Нижний несущий алюминиевый профиль, закаленный триплекс 8+8 или 10+10 мм',
        descUz: 'Pastki yuk ko‘taruvchi alyuminiy profil, toblangan 8+8 yoki 10+10 mm tripleks',
        badgeRu: 'BKGF 90',
        badgeUz: 'BKGF 90'
      },
      {
        value: 'point-railings',
        labelRu: 'Точечные перила на коннекторах',
        labelUz: 'Nuqtali konnektorli panjaralar',
        descRu: 'Торцевое точечное крепление для лестничных маршей',
        descUz: 'Zina qirralariga nuqtali mahkamlanadigan shisha to‘siqlar',
        badgeRu: 'Точечные',
        badgeUz: 'Nuqtali'
      },
      {
        value: 'balcony-railings',
        labelRu: 'Ограждения для балконов и террас',
        labelUz: 'Balkon va terasalar uchun to‘siqlar',
        descRu: 'Стойкие к ветровым нагрузкам панорамные прозрачные перила',
        descUz: 'Shamolga chidamli shaffof panoramali himoya to‘siqlari',
        badgeRu: 'Триплекс',
        badgeUz: 'Tripleks'
      }
    ]
  },

  // 11. МОСКИТНЫЕ СЕТКИ (Mosquito nets)
  {
    slug: 'mosquito-nets',
    catalogCategorySlug: 'mosquito-nets',
    type: 'other',
    titleRu: 'Москитные сетки',
    titleUz: 'Chivin to‘rlari',
    subtitleRu: 'Внутрирамные, на петлях, рамочные и раздвижные',
    subtitleUz: 'Ramali, ilmoqli va surma tizimlar',
    defaultWidth: '800',
    defaultHeight: '1400',
    products: [
      {
        value: 'net-plisse',
        labelRu: 'Раздвижная сетка-плиссе',
        labelUz: 'Plisse surma chivin to‘ri',
        descRu: 'Складывающаяся гармошкой сетка для дверей и порталов',
        descUz: 'Eshik va portallar uchun garmoshka kabi yig‘iluvchi to‘r',
        badgeRu: 'Плиссе',
        badgeUz: 'Plisse'
      },
      {
        value: 'net-inframe',
        labelRu: 'Внутрирамная сетка (Anvis)',
        labelUz: 'Ichki ramali to‘r (Anvis)',
        descRu: 'Устанавливается без сверления рам на специальных защелках',
        descUz: 'Romni burg‘ilamasdan maxsus qisqichlar bilan o‘rnatiladi',
        badgeRu: 'Без сверления',
        badgeUz: 'Teshmasdan'
      },
      {
        value: 'net-hinged-door',
        labelRu: 'Дверная москитная сетка на петлях',
        labelUz: 'Ilmoqli eshik to‘ri',
        descRu: 'Усиленный алюминиевый профиль с магнитным фиксатором и доводчиком',
        descUz: 'Magnitli qulflash va dovodchikli mustahkam eshik to‘ri',
        badgeRu: 'Дверная',
        badgeUz: 'Eshik uchun'
      },
      {
        value: 'net-frame',
        labelRu: 'Классическая рамочная сетка',
        labelUz: 'Klassik ramali to‘r',
        descRu: 'Практичная алюминиевая рамка с полотном Fiberglass',
        descUz: 'Fiberglass to‘qimasi bilan amaliy alyuminiy rom',
        badgeRu: 'Стандарт',
        badgeUz: 'Standart'
      }
    ]
  }
];

export function getFormCategory(slug: string): FormCategoryConfig {
  return FORM_CATEGORIES.find(c => c.slug === slug) || FORM_CATEGORIES[0];
}

export function getFormCategoryOptions(lang: Lang) {
  return FORM_CATEGORIES.map(c => ({
    value: c.slug,
    label: lang === 'uz' ? c.titleUz : c.titleRu,
    desc: lang === 'uz' ? c.subtitleUz : c.subtitleRu,
    badge: `${c.products.length} ${lang === 'uz' ? 'ta' : 'систем'}`
  }));
}

export function getFormProductOptions(categorySlug: string, lang: Lang) {
  const cat = getFormCategory(categorySlug);
  const items = cat.products.map(p => ({
    value: p.value,
    label: lang === 'uz' ? p.labelUz : p.labelRu,
    desc: lang === 'uz' ? p.descUz : p.descRu,
    badge: lang === 'uz' ? (p.badgeUz || '') : (p.badgeRu || '')
  }));

  // Append "Custom product / other system" option
  items.push({
    value: CUSTOM_PRODUCT_VALUE,
    label: lang === 'uz' ? '✏️ Boshqa tizim / O‘zingizning variantingiz' : '✏️ Свой вариант / Другая система',
    desc: lang === 'uz' ? 'Katalogda bo‘lmagan tizim yoki o‘lchamni ko‘rsatish' : 'Указать систему или вариант не из списка',
    badge: lang === 'uz' ? 'O‘z varianti' : 'Индивидуально'
  });

  return items;
}

export function createDefaultFormItem(categorySlug = 'aluminium-windows', initialColor = 'Антрацит матовый (RAL 7016)'): FormProductItem {
  const cat = getFormCategory(categorySlug);
  const firstProd = cat.products[0]?.value || '';
  return {
    id: `item_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    categorySlug,
    productSlug: firstProd,
    customProductTitle: '',
    color: initialColor,
    glass: 'Двухкамерный энергосберегающий',
    width: cat.defaultWidth,
    height: cat.defaultHeight,
    quantity: '1'
  };
}
