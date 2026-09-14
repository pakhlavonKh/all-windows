export type Lang = 'ru' | 'uz';

export interface TranslationDictionary {
  nav: {
    products: string;
    projects: string;
    about: string;
    services: string;
    contacts: string;
  };
  actions: {
    estimate: string;
    call: string;
    details: string;
    allProjects: string;
    allProducts: string;
    sendRequest: string;
    openGallery: string;
    backToCatalog: string;
    backToCategory: string;
    backToHome: string;
    openMap: string;
    enlarge: string;
    submitEstimate: string;
    submitting: string;
    freeEstimateNotice: string;
    verified: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    calculateBtn: string;
    viewProjectsBtn: string;
    bottomTag: string;
  };
  benefits: {
    production: { title: string; text: string };
    profiles: { title: string; text: string };
    installation: { title: string; text: string };
    warranty: { title: string; text: string };
  };
  homeProducts: {
    eyebrow: string;
    title: string;
    text: string;
  };
  calculator: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepCategory: string;
    stepProduct: string;
    stepColor: string;
    stepGlass: string;
    width: string;
    height: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successText: (name: string, product: string, category: string, color: string) => string;
    newRequestBtn: string;
    addAnotherProduct: string;
    removeProduct: string;
    itemHeading: (index: number) => string;
    customProductPlaceholder: string;
    quantityLabel: string;
    quantityUnit: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allBtn: string;
    photosCount: (count: number) => string;
  };
  stats: {
    workshop: string;
    workshopDesc: string;
    objects: string;
    objectsDesc: string;
    warranty: string;
    warrantyDesc: string;
    experience: string;
    experienceDesc: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    navTitle: string;
    contactsTitle: string;
    touchTitle: string;
    touchDesc: string;
    leaveRequest: string;
    address: string;
    hours: string;
    copyright: string;
    tagline: string;
  };
  categories: Record<string, { title: string; subtitle: string; description: string }>;
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    approachTitle: string;
    approachHeading: string;
    approachText: string;
    feat1Title: string;
    feat1Text: string;
    feat2Title: string;
    feat2Text: string;
    feat3Title: string;
    feat3Text: string;
    certEyebrow: string;
    certTitle: string;
    certCardTitle: string;
    certCardDesc: string;
    certPoint1Title: string;
    certPoint1Text: string;
    certPoint2Title: string;
    certPoint2Text: string;
    certPoint3Title: string;
    certPoint3Text: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    bannerEyebrow: string;
    bannerTitle: string;
    bannerBtn: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    intro: string;
    showroomTitle: string;
    address: string;
    btn: string;
    scheduleTitle: string;
    scheduleText: string;
  };
}

export const translations: Record<Lang, TranslationDictionary> = {
  ru: {
    nav: {
      products: 'Продукция',
      projects: 'Объекты',
      about: 'О компании',
      services: 'Услуги',
      contacts: 'Контакты',
    },
    actions: {
      estimate: 'Заказать замер',
      call: 'Позвонить',
      details: 'Подробнее',
      allProjects: 'Все проекты',
      allProducts: 'Весь каталог',
      sendRequest: 'Отправить заявку',
      openGallery: 'Открыть галерею',
      backToCatalog: 'Назад в каталог',
      backToCategory: 'Назад к системам',
      backToHome: 'Вернуться на сайт',
      openMap: 'Открыть карту',
      enlarge: 'Нажмите для увеличения',
      submitEstimate: 'Отправить заявку на расчёт',
      submitting: 'Отправляем…',
      freeEstimateNotice: 'Бесплатный расчет сметы и выезд замерщика в Ташкенте',
      verified: 'Проверено',
    },
    hero: {
      eyebrow: 'Архитектурные решения',
      title: 'Архитектурные оконные и фасадные системы',
      subtitle: 'Проектирование, собственное производство и монтаж алюминиевых и ПВХ-конструкций под ключ в Ташкенте и по всему Узбекистану.',
      calculateBtn: 'Рассчитать проект',
      viewProjectsBtn: 'Смотреть объекты',
      bottomTag: 'Архитектура, которая работает',
    },
    benefits: {
      production: { title: 'Своё производство', text: 'Цех в Ташкенте, контроль каждого заказа' },
      profiles: { title: 'Профили и фурнитура', text: 'Aldoks, Engelberg, Akfa, Roto, Master' },
      installation: { title: 'Монтаж под ключ', text: 'От замера до регулировки на объекте' },
      warranty: { title: 'Гарантия', text: 'Фиксируем обязательства в договоре' },
    },
    homeProducts: {
      eyebrow: '01 / Продукция',
      title: 'Системы для света и воздуха',
      text: 'Подбираем конфигурацию по архитектуре, нагрузке и сценарию использования — не по шаблону.',
    },
    calculator: {
      eyebrow: '02 / Заявка на расчёт',
      title: 'Заявка на индивидуальный расчёт',
      subtitle: 'Выберите категорию и систему из нашего каталога — специалист свяжется с вами с готовой сметой.',
      stepCategory: '1. Категория продукции',
      stepProduct: '2. Система / Продукт',
      stepColor: 'Цвет профиля',
      stepGlass: '3. Тип стеклопакета / заполнения',
      width: 'Ширина, мм',
      height: 'Высота, мм',
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Имя',
      phoneLabel: 'Телефон *',
      phonePlaceholder: '+998 (__) ___-__-__',
      commentLabel: 'Комментарий или адрес объекта',
      commentPlaceholder: 'Количество проёмов, этаж, адрес замера или пожелания',
      submitBtn: 'Рассчитать стоимость',
      successTitle: 'Заявка принята!',
      successText: (name, product, category, color) =>
        `Спасибо, ${name}. Заявка на систему «${product}» (${category}) в цвете «${color}» успешно получена. Специалист ALL WINDOWS свяжется с вами в течение рабочего дня.`,
      newRequestBtn: 'Отправить другую заявку',
      addAnotherProduct: '+ Добавить ещё конструкцию',
      removeProduct: 'Удалить',
      itemHeading: (index: number) => `Конструкция #${index}`,
      customProductPlaceholder: 'Укажите название или параметры системы...',
      quantityLabel: 'Количество',
      quantityUnit: 'шт',
    },
    projectsSection: {
      eyebrow: '03 / Объекты',
      title: 'Реализованные проекты',
      subtitle: 'Частные резиденции, жилые комплексы и коммерческие здания в Ташкенте с остеклением ALL WINDOWS.',
      allBtn: 'Все проекты',
      photosCount: (count) => `${count} фото`,
    },
    stats: {
      workshop: '1 200 м²',
      workshopDesc: 'Собственный цех в Ташкенте с ЧПУ-станками',
      objects: '250+',
      objectsDesc: 'Сданных объектов: виллы, ЖК, бизнес-центры',
      warranty: '5 лет',
      warrantyDesc: 'Гарантия на профили, монтаж и герметичность',
      experience: '7+ лет',
      experienceDesc: 'Безупречной репутации на строительном рынке',
    },
    faq: {
      eyebrow: '04 / Вопросы и ответы',
      title: 'Частые вопросы заказчиков',
      items: [
        {
          q: 'Сколько времени занимает изготовление заказа?',
          a: 'Стандартные оконные и дверные конструкции изготавливаются за 7–14 рабочих дней. Сложные фасадные и спайдерные витражные системы — от 15 до 25 рабочих дней с учетом поставки специализированных стекол.',
        },
        {
          q: 'Выезжает ли замерщик бесплатно?',
          a: 'Да, в пределах города Ташкента и прилегающих районов выезд замерщика, техническая консультация и предварительный расчет сметы осуществляются полностью бесплатно.',
        },
        {
          q: 'Какая гарантия предоставляется на изделия и монтаж?',
          a: 'Мы предоставляем официальную гарантию до 5 лет на конструкции и монтажные работы, а также до 10 лет на профильные системы и стеклопакеты, что фиксируется в договоре.',
        },
        {
          q: 'Работаете ли вы с регионами Узбекистана?',
          a: 'Да, мы осуществляем проектирование, производство, доставку и профессиональный монтаж крупноформатных конструкций и витражей по всем регионам Республики Узбекистан.',
        },
      ],
    },
    footer: {
      navTitle: 'Навигация',
      contactsTitle: 'Контакты',
      touchTitle: 'Связаться',
      touchDesc: 'Расскажите о задаче — ответим с расчётом и сроками.',
      leaveRequest: 'Оставить заявку',
      address: 'Ташкент, улица Багрикенг',
      hours: 'Пн–Сб · 09:00–18:00',
      copyright: '© 2019–2026 ALL WINDOWS (ООО «VINNIAN GROUP»)',
      tagline: 'Проектирование · Производство · Монтаж',
    },
    categories: {
      'aluminium': {
        title: 'Алюминиевые окна и двери',
        subtitle: 'Sistem Aluminium · ASAŞ · Akfa TERMO · Aldox',
        description: 'Лёгкие и тёплые алюминиевые конструкции: флагманские турецкие системы Sistem Aluminium (65, 75, 85 серии) и ASAŞ Rescara (64, 75 серии), энергосберегающие серии Akfa TERMO с полиамидными термомостами (70, 77, 78, 98), а также классические системы Aldox, Aldox 2 и AKF 47 Champion.',
      },
      'pvc': {
        title: 'ПВХ окна и двери',
        subtitle: 'Deceuninck · Akfa Engelberg · Trio · Quattro',
        description: 'Теплосберегающие и шумозащитные ПВХ окна: бельгийские инновационные системы Deceuninck (6000, 7000, 8000 серии), швейцарские системы Engelberg (7000, 7600, 8000), а также практичные серии Akfa Trio (5800, 6000) и Akfa Quattro (5200, 5800, 6000).',
      },
      'sliding': {
        title: 'Раздвижные и гильотинные системы',
        subtitle: 'Гильотина · Akfa BKH · BKG · Lift & Slide',
        description: 'Свободный проём и панорамный обзор: автоматические гильотинные стеклянные системы вертикального подъема для ресторанов, веранд и террас, легкие раздвижные Akfa Econom BKG 40, теплые Standart BKH 38, подъемно-раздвижные порталы Standart BKH 60 и Premium BKH 65.',
      },
      'facade': {
        title: 'Фасадные системы',
        subtitle: 'Akfa BKF 48 · BKF 50 · BKF Max',
        description: 'Светопрозрачные стоечно-ригельные и структурные фасады Akfa: энергоэффективные Econom BKF 48, сейсмостойкие Premium BKF 50 (до 9 баллов) и ультратонкие фасады Premium BKF Max (22 мм).',
      },
      'office-partitions': {
        title: 'Офисные перегородки',
        subtitle: 'Akfa BKO 38 · BKO 40',
        description: 'Системы интерьерных офисных перегородок Akfa BKO 38 и BKO 40 с одинарным, двойным или комбинированным заполнением для создания современных рабочих пространств и кабинетов.',
      },
      'stained-glass': {
        title: 'Спайдерные системы и витражи',
        subtitle: 'Точечное остекление Spider System',
        description: 'Инновационные спайдерные системы точечного остекления фасадов, атриумов и витрин. Кронштейны из нержавеющей стали, закаленный триплекс и максимальная прозрачность.',
      },
      'rolling-shutters': {
        title: 'Рольставни и роллетные ворота',
        subtitle: 'Алюминиевые и сэндвич-профили (55 / 77 мм)',
        description: 'Защитные рольставни и автоматические роллетные ворота. Сэндвич с пенонаполнителем и цельнотянутый алюминий 55/77 мм, срок службы до 80 лет, электроприводы до 330 кг.',
      },
      'glass-railings': {
        title: 'Стеклянные перила и ограждения BKGF 90',
        subtitle: 'Система BKGF 90 · Эффектно и современно',
        description: 'Стеклянные ограждения BKGF 90 выглядят очень эффектно и современно (Glass railings BKGF 90 look very impressive and modern). Закаленный триплекс без вертикальных стоек.',
      },
      'mosquito-nets': {
        title: 'Москитные сетки',
        subtitle: 'Внутрирамные, на петлях, рамочные и раздвижные',
        description: 'Современная защита от насекомых и пыли: легкие внутрирамные сетки, сетки-двери на петлях, классические рамочные и раздвижные складные системы.',
      },
    },
    about: {
      eyebrow: 'Компания / 2019—2026',
      title: 'Производим то, что проектируют архитекторы',
      intro: 'ALL WINDOWS — производитель окон, дверей и фасадных систем в Ташкенте с 2019 года. Мы соединяем инженерную точность цеха с вниманием к тому, как человек будет жить в пространстве.',
      approachTitle: 'Наш подход',
      approachHeading: 'Каждый миллиметр имеет значение.',
      approachText: 'Работаем с частными заказчиками, дизайнерами, застройщиками и генеральными подрядчиками. Являемся официальным партнером и переработчиком систем Sistem Aluminium (Турция: 65, 75, 85 серии), ASAŞ (Турция: 64, 75 серии), Deceuninck (ПВХ: 6000, 7000, 8000 серии) и Akfa.',
      feat1Title: 'Производство в Ташкенте',
      feat1Text: 'Собственный цех с 2019 года, оборудование для точного раскроя и сборки. Контролируем заказ на каждом этапе.',
      feat2Title: 'Профильная экспертиза',
      feat2Text: 'Sistem Aluminium, ASAŞ, Deceuninck, Aldoks Neo, Engelberg, JP — подбираем систему под нагрузку и архитектуру.',
      feat3Title: 'Собранная команда',
      feat3Text: 'Замерщики, конструкторы и монтажники говорят на одном техническом языке.',
      certEyebrow: 'Сертификаты и стандарты качества',
      certTitle: 'Официальная сертификация и гарантия надежности',
      certCardTitle: 'Сертификат соответствия',
      certCardDesc: 'Официальный документ подтверждения качества',
      certPoint1Title: 'Оригинальные сертифицированные профили',
      certPoint1Text: 'Вся продукция изготавливается из сертифицированных профильных систем и комплектующих. Полное соответствие государственным стандартам и СНиП.',
      certPoint2Title: 'Многоступенчатый контроль ОТК',
      certPoint2Text: 'Контролируем геометрию, терморазрывы, герметичность уплотнителей и точность фурнитурных пазов на каждом этапе сборки до отправки на объект.',
      certPoint3Title: 'Официальная гарантия по договору',
      certPoint3Text: 'Фиксируем технические требования, сроки и гарантийные обязательства на профили, стеклопакеты и монтажные узлы в официальном договоре.',
    },
    services: {
      eyebrow: 'Сервис / полный цикл',
      title: 'Один подрядчик. Весь путь проекта.',
      intro: 'Убираем разрывы между проектированием, производством и монтажом. Вы получаете понятный процесс и один контакт на всех этапах.',
      items: [
        { title: 'Бесплатный замер', text: 'Специалист выезжает на объект, проверяет геометрию проёма и фиксирует условия монтажа.' },
        { title: 'Проектирование и расчёт', text: 'Подбираем профиль, стеклопакет, фурнитуру и формируем прозрачную спецификацию.' },
        { title: 'Производство', text: 'Изготавливаем конструкции в собственном цехе с контролем размеров и комплектации.' },
        { title: 'Доставка', text: 'Согласуем логистику и бережно доставляем конструкции на объект в Ташкенте.' },
        { title: 'Монтаж', text: 'Устанавливаем, герметизируем, регулируем и сдаём объект по акту.' },
        { title: 'Гарантийное обслуживание', text: 'Остаёмся на связи после сдачи: регулировка и постгарантийное обслуживание.' },
      ],
      bannerEyebrow: 'Сервис на объекте',
      bannerTitle: 'Начните с бесплатного замера',
      bannerBtn: 'Связаться с нами',
    },
    contacts: {
      eyebrow: 'Контакты / Ташкент',
      title: 'Обсудим ваш объект',
      intro: 'Позвоните, напишите в Telegram или оставьте заявку — ответим по рабочим дням в течение 24 часов.',
      showroomTitle: 'Шоурум и производство',
      address: 'Ташкент,\nулица Багрикенг',
      btn: 'Оставить заявку',
      scheduleTitle: 'Режим работы:',
      scheduleText: 'Пн–Сб · 09:00–18:00\nВс — выходной',
    },
  },
  uz: {
    nav: {
      products: 'Mahsulotlar',
      projects: 'Obyektlar',
      about: 'Kompaniya haqida',
      services: 'Xizmatlar',
      contacts: 'Aloqa',
    },
    actions: {
      estimate: 'O‘lchov buyurtma qilish',
      call: 'Qo‘ng‘iroq qilish',
      details: 'Batafsil',
      allProjects: 'Barcha loyihalar',
      allProducts: 'To‘liq katalog',
      sendRequest: 'Ariza qoldirish',
      openGallery: 'Galereyani ochish',
      backToCatalog: 'Katalogga qaytish',
      backToCategory: 'Tizimlarga qaytish',
      backToHome: 'Saytga qaytish',
      openMap: 'Xaritani ochish',
      enlarge: 'Kattalashtirish uchun bosing',
      submitEstimate: 'Hisoblashga ariza yuborish',
      submitting: 'Yuborilmoqda…',
      freeEstimateNotice: 'Toshkent bo‘ylab bepul smeta hisoblash va mutaxassis o‘lchovi',
      verified: 'Tekshirilgan',
    },
    hero: {
      eyebrow: 'Arxitektura yechimlari',
      title: 'Arxitekturaviy deraza va fasad tizimlari',
      subtitle: 'Toshkent va butun O‘zbekiston bo‘ylab alyuminiy va PVX konstruksiyalarni loyihalash, xususiy ishlab chiqarish va kalit ostida montaj qilish.',
      calculateBtn: 'Loyihani hisoblash',
      viewProjectsBtn: 'Obyektlarni ko‘rish',
      bottomTag: 'Amalda ishlaydigan arxitektura',
    },
    benefits: {
      production: { title: 'Xususiy ishlab chiqarish', text: 'Toshkentdagi zamonaviy sex, har bir buyurtma nazorati' },
      profiles: { title: 'Profil va furnituralar', text: 'Aldoks, Engelberg, Akfa, Roto, Master' },
      installation: { title: 'Kalit ostida montaj', text: 'O‘lchovdan tortib obyektda sozlashgacha' },
      warranty: { title: 'Kafolat', text: 'Majburiyatlarimizni shartnomada mustahkamlaymiz' },
    },
    homeProducts: {
      eyebrow: '01 / Mahsulotlar',
      title: 'Yorug‘lik va qulaylik tizimlari',
      text: 'Konfiguratsiyani bino arxitekturasi, yuklama va foydalanish talablariga moslab tanlaymiz.',
    },
    calculator: {
      eyebrow: '02 / Hisoblash arizasi',
      title: 'Individual hisoblash uchun ariza',
      subtitle: 'Katalogimizdan toifa va tizimni tanlang — mutaxassisimiz tayyor smeta bilan siz bilan bog‘lanadi.',
      stepCategory: '1. Mahsulot toifasi',
      stepProduct: '2. Tizim / Mahsulot',
      stepColor: 'Profil rangi',
      stepGlass: '3. Shisha paketi / to‘ldirish turi',
      width: 'Kengligi, mm',
      height: 'Balandligi, mm',
      nameLabel: 'Ismingiz *',
      namePlaceholder: 'Ismingiz',
      phoneLabel: 'Telefon raqamingiz *',
      phonePlaceholder: '+998 (__) ___-__-__',
      commentLabel: 'Izoh yoki obyekt manzili',
      commentPlaceholder: 'Ochilishlar soni, qavat, o‘lchov manzili yoki istaklar',
      submitBtn: 'Narxni hisoblash',
      successTitle: 'Ariza qabul qilindi!',
      successText: (name, product, category, color) =>
        `Rahmat, ${name}. «${product}» (${category}) tizimiga «${color}» rangida arizangiz muvaffaqiyatli qabul qilindi. ALL WINDOWS mutaxassisi tez orada siz bilan bog‘lanadi.`,
      newRequestBtn: 'Boshqa ariza yuborish',
      addAnotherProduct: '+ Yangi mahsulot qo‘shish',
      removeProduct: 'O‘chirish',
      itemHeading: (index: number) => `Konstruksiya #${index}`,
      customProductPlaceholder: 'Tizim nomi yoki parametrlarini kiriting...',
      quantityLabel: 'Miqdori',
      quantityUnit: 'dona',
    },
    projectsSection: {
      eyebrow: '03 / Obyektlar',
      title: 'Amalga oshirilgan loyihalar',
      subtitle: 'ALL WINDOWS tomonidan oynalangan Toshkentdagi xususiy villalar, turar-joy majmualari va biznes markazlari.',
      allBtn: 'Barcha loyihalar',
      photosCount: (count) => `${count} ta rasm`,
    },
    stats: {
      workshop: '1 200 m²',
      workshopDesc: 'Toshkentdagi CNC stanoklar bilan jihozlangan xususiy sex',
      objects: '250+',
      objectsDesc: 'Topshirilgan obyektlar: villalar, TJM, biznes markazlar',
      warranty: '5 yil',
      warrantyDesc: 'Profillar, montaj va germetiklikka rasmiy kafolat',
      experience: '7+ yil',
      experienceDesc: 'Qurilish bozorida mustahkam ishonchli obro‘',
    },
    faq: {
      eyebrow: '04 / Savol-javoblar',
      title: 'Mijozlarning eng ko‘p beradigan savollari',
      items: [
        {
          q: 'Buyurtmani tayyorlash qancha vaqt oladi?',
          a: 'Standart deraza va eshik konstruksiyalari 7–14 ish kunida tayyorlanadi. Murakkab fasad va spayder vitraj tizimlari ixtisoslashtirilgan oynalar yetkazib berilishiga qarab 15 dan 25 ish kunigacha vaqt oladi.',
        },
        {
          q: 'Mutaxassis o‘lchovga bepul keladimi?',
          a: 'Ha, Toshkent shahri va unga yondosh hududlar bo‘ylab mutaxassis o‘lchovi, texnik maslahat va dastlabki smeta hisoblash butunlay bepul amalga oshiriladi.',
        },
        {
          q: 'Mahsulotlar va montajga qanday kafolat beriladi?',
          a: 'Biz konstruksiya va montaj ishlariga 5 yilgacha, profil tizimlari va oyna paketlariga 10 yilgacha rasmiy kafolat beramiz, bu esa shartnomada qat’iy belgilanadi.',
        },
        {
          q: 'O‘zbekiston viloyatlari bo‘ylab ishlaysizmi?',
          a: 'Ha, biz butun O‘zbekiston Respublikasi bo‘ylab yirik formatli konstruksiyalar va vitrajlarni loyihalash, ishlab chiqarish, yetkazish va professional montaj qilishni amalga oshiramiz.',
        },
      ],
    },
    footer: {
      navTitle: 'Navigatsiya',
      contactsTitle: 'Aloqa',
      touchTitle: 'Bog‘lanish',
      touchDesc: 'Loyihangiz haqida ayting — hisob-kitob va muddatlarni ma’lum qilamiz.',
      leaveRequest: 'Ariza qoldirish',
      address: 'Toshkent shahri, Bag‘rikeng ko‘chasi',
      hours: 'Dush–Shanba · 09:00–18:00',
      copyright: '© 2019–2026 ALL WINDOWS («VINNIAN GROUP» MChJ)',
      tagline: 'Loyihalash · Ishlab chiqarish · Montaj',
    },
    categories: {
      'aluminium': {
        title: 'Alyuminiy deraza va eshiklar',
        subtitle: 'Sistem Aluminium · ASAŞ · Akfa TERMO · Aldox',
        description: 'Yengil va issiq alyuminiy konstruksiyalar: Turkiyaning yetakchi Sistem Aluminium (65, 75, 85 seriyalar) va ASAŞ Rescara (64, 75 seriyalar), poliamid termoko‘priklarga ega energiya tejovchi Akfa TERMO (70, 77, 78, 98), shuningdek klassik Aldox, Aldox 2 va AKF 47 Champion tizimlari.',
      },
      'pvc': {
        title: 'PVX deraza va eshiklar',
        subtitle: 'Deceuninck · Akfa Engelberg · Trio · Quattro',
        description: 'Issiqlikni saqlovchi va shovqindan himoya qiluvchi PVX derazalar: Belgiya innovatsion Deceuninck tizimlari (6000, 7000, 8000 seriyalar), Shveytsariya Engelberg tizimlari (7000, 7600, 8000), hamda qulay Akfa Trio (5800, 6000) va Akfa Quattro (5200, 5800, 6000).',
      },
      'sliding': {
        title: 'Surma va gilyotina tizimlari',
        subtitle: 'Gilyotina · Akfa BKH · BKG · Lift & Slide',
        description: 'Keng ochilish va panoramali ko‘rinish: restoran, veranda va terassalar uchun vertikal ko‘tariluvchi avtomatik gilyotina tizimlari, yengil surma Akfa Econom BKG 40, issiq Standart BKH 38, ko‘tarilib suriluvchi Standart BKH 60 va Premium BKH 65 portallari.',
      },
      'facade': {
        title: 'Fasad tizimlari',
        subtitle: 'Akfa BKF 48 · BKF 50 · BKF Max',
        description: 'Akfa vitraj ustun-to‘sinli va strukturaviy fasadlari: tejamkor Econom BKF 48, seysmik bardoshli Premium BKF 50 (9 ballgacha) va ultra-ingichka Premium BKF Max (22 mm) fasad tizimlari.',
      },
      'office-partitions': {
        title: 'Ofis to‘siqlari',
        subtitle: 'Akfa BKO 38 · BKO 40',
        description: 'Zamonaviy ish joylari va kabinetlarni tashkil etish uchun bir qavatli, ikki qavatli yoki kombinatsiyalangan to‘ldirishga ega Akfa BKO 38 va BKO 40 interyer to‘siq tizimlari.',
      },
      'stained-glass': {
        title: 'Spayder tizimlari va vitrajlar',
        subtitle: 'Spider System nuqtali mahkamlash',
        description: 'Fasadlar, atriumlar va vitrinalar uchun innovatsion spayderli nuqtali oyna tizimlari. Zanglamaydigan po‘lat kronshteynlar, toblangan tripleks va maksimal shaffoflik.',
      },
      'rolling-shutters': {
        title: 'Rolstavnilar va rollet darvozalar',
        subtitle: 'Alyuminiy va sendvich profillar (55 / 77 mm)',
        description: 'Himoya rolstavnilari va avtomatik rollet darvozalar. Ko‘pikli sendvich va quyma alyuminiy 55/77 mm, 80 yilgacha xizmat muddati, 330 kg gacha yuk ko‘taruvchi elektroprivodlar.',
      },
      'glass-railings': {
        title: 'BKGF 90 shisha to‘siqlar va panjaralar',
        subtitle: 'BKGF 90 tizimi · Zamonaviy va ta’sirchan ko‘rinish',
        description: 'BKGF 90 shisha to‘siqlari juda jozibali va zamonaviy ko‘rinadi (Glass railings BKGF 90 look very impressive and modern). Vertikal ustunlarsiz toblangan xavfsiz tripleks.',
      },
      'mosquito-nets': {
        title: 'Chivinlarga qarshi to‘rlar',
        subtitle: 'Ichki romli, ilmoqli, romli va surma tizimlar',
        description: 'Hasharotlar va changdan zamonaviy himoya: burg‘ulashsiz o‘rnatiladigan ichki romli to‘rlar, ilmoqli eshik-to‘rlar, klassik romli va surma plisse tizimlari.',
      },
    },
    about: {
      eyebrow: 'Kompaniya / 2019—2026',
      title: 'Arxitektorlar loyihalagan yechimlarni ishlab chiqaramiz',
      intro: 'ALL WINDOWS — 2019 yildan buyon Toshkentda deraza, eshik va fasad tizimlarini ishlab chiqaruvchi yetakchi korxona. Biz muhandislik aniqligini odamlar hayot kechiradigan makon qulayligi bilan uyg‘unlashtiramiz.',
      approachTitle: 'Bizning yondashuv',
      approachHeading: 'Har bir millimetr muhim ahamiyatga ega.',
      approachText: 'Biz xususiy buyurtmachilar, dizaynerlar, quruvchilar va bosh pudratchilar bilan hamkorlik qilamiz. Sistem Aluminium (Turkiya: 65, 75, 85 seriyalar), ASAŞ (Turkiya: 64, 75 seriyalar), Deceuninck (Belgiya PVX: 6000, 7000, 8000 seriyalar) va Akfa tizimlarining rasmiy hamkori va qayta ishlovchisimiz.',
      feat1Title: 'Toshkentdagi ishlab chiqarish',
      feat1Text: '2019 yildan buyon faoliyat yuritayotgan sex, aniq kesish va yig‘ish uskunalari. Buyurtmani har bir bosqichda to‘liq nazorat qilamiz.',
      feat2Title: 'Profil ekspertizasi',
      feat2Text: 'Sistem Aluminium, ASAŞ, Deceuninck, Aldoks Neo, Engelberg — tizimni bino arxitekturasi va yuklamasiga qarab tanlaymiz.',
      feat3Title: 'Tajribali jamoa',
      feat3Text: 'O‘lchovchilar, konstruktorlar va montajchilar yagona texnik tilda gaplashadilar.',
      certEyebrow: 'Sertifikatlar va sifat standartlari',
      certTitle: 'Rasmiy sertifikatlash va ishonchlilik kafolati',
      certCardTitle: 'Muvofiqlik sertifikati',
      certCardDesc: 'Mahsulot sifatini tasdiqlovchi rasmiy davlat hujjati',
      certPoint1Title: 'Original sertifikatlangan profillar',
      certPoint1Text: 'Barcha mahsulotlar sertifikatlangan profil tizimlari va butlovchi qismlardan tayyorlanadi. Davlat standartlari va QMQ talablariga to‘liq javob beradi.',
      certPoint2Title: 'Ko‘p bosqichli sifat nazorati (OTK)',
      certPoint2Text: 'Yig‘ishning har bir bosqichida va obyektga jo‘natishdan oldin geometriya, termoko‘priklar, zichlagichlar va furnitura aniqligini qat’iy tekshiramiz.',
      certPoint3Title: 'Shartnoma bo‘yicha rasmiy kafolat',
      certPoint3Text: 'Texnik talablar, muddatlar hamda profil, oyna va montaj uzellariga beriladigan barcha kafolat majburiyatlarini rasmiy shartnomada belgilaymiz.',
    },
    services: {
      eyebrow: 'Xizmatlar / to‘liq sikl',
      title: 'Yagona pudratchi. Loyihaning barcha bosqichlari.',
      intro: 'Loyihalash, ishlab chiqarish va montaj o‘rtasidagi uzilishlarni bartaraf etamiz. Siz barcha bosqichlarda shaffof jarayon va bitta ishonchli hamkorga ega bo‘lasiz.',
      items: [
        { title: 'Bepul o‘lchov', text: 'Mutaxassis obyektga boradi, ochilish geometriyasini tekshiradi va montaj sharoitlarini aniqlaydi.' },
        { title: 'Loyihalash va hisoblash', text: 'Profil, oyna paketi, furniturani tanlab, shaffof va tushunarli smeta taqdim etamiz.' },
        { title: 'Ishlab chiqarish', text: 'Konstruksiyalarni o‘z sexida o‘lchamlar va butlovchi qismlar nazorati ostida tayyorlaymiz.' },
        { title: 'Yetkazib berish', text: 'Logistikani kelishib, konstruksiyalarni Toshkentdagi obyektga ehtiyotkorlik bilan yetkazamiz.' },
        { title: 'Montaj', text: 'O‘rnatamiz, germetiklaymiz, sozlaymiz va dalolatnoma asosida obyektni topshiramiz.' },
        { title: 'Kafolatli xizmat', text: 'Topshirilgandan so‘ng ham aloqadamiz: sozlash va kafolatdan keyingi servis xizmatlari.' },
      ],
      bannerEyebrow: 'Obyektdagi xizmat',
      bannerTitle: 'Bepul o‘lchovdan boshlang',
      bannerBtn: 'Biz bilan bog‘lanish',
    },
    contacts: {
      eyebrow: 'Aloqa / Toshkent',
      title: 'Obyektingizni muhokama qilamiz',
      intro: 'Qo‘ng‘iroq qiling, Telegram orqali yozing yoki ariza qoldiring — ish kunlarida 24 soat ichida javob beramiz.',
      showroomTitle: 'Shourum va ishlab chiqarish',
      address: 'Toshkent shahri,\nBag‘rikeng ko‘chasi',
      btn: 'Ariza qoldirish',
      scheduleTitle: 'Ish tartibi:',
      scheduleText: 'Dush–Shanba · 09:00–18:00\nYakshanba — dam olish kuni',
    },
  },
};
