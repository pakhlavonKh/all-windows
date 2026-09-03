export interface CompanyInfo {
  legalName: string;
  brandName: string;
  shortDescriptionRu: string;
  shortDescriptionUz: string;
  fullDescriptionRu: string;
  fullDescriptionUz: string;
  establishedYear: number;
  city: string;
  addressRu: string;
  addressUz: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  telegram: string;
  instagram: string;
  workHoursRu: string;
  workHoursUz: string;
  stats: {
    value: string;
    labelRu: string;
    labelUz: string;
  }[];
  certifications: {
    titleRu: string;
    titleUz: string;
    descRu: string;
    descUz: string;
  }[];
}

export const companyData: CompanyInfo = {
  legalName: 'ООО «VINNIAN GROUP»',
  brandName: 'ALL WINDOWS',
  shortDescriptionRu: 'ООО «VINNIAN GROUP» (ALL WINDOWS) — ведущее производственное предприятие Ташкента по выпуску современных алюминиевых, ПВХ и фасадных светопрозрачных конструкций.',
  shortDescriptionUz: '«VINNIAN GROUP» MCHJ (ALL WINDOWS) — Toshkentdagi zamonaviy alyuminiy, PVX va fasad tizimlarini ishlab chiqaruvchi yetakchi korxona.',
  fullDescriptionRu: 'Компания ООО «VINNIAN GROUP» работает на рынке светопрозрачных конструкций Узбекистана с 2014 года. Мы объединяем собственное высокоточное автоматизированное производство в Ташкенте, инженерный проектный отдел и профессиональные монтажные бригады. Являемся официальным партнером и переработчиком мировых системных лидеров: Sistem Aluminium (Турция), ASAŞ Aluminium (Турция), Deceuninck (Бельгия), Akfa, а также европейской фурнитуры Roto Frank и Master Italy.',
  fullDescriptionUz: '«VINNIAN GROUP» MCHJ 2014-yildan buyon O‘zbekiston shaffof konstruksiyalar bozorida faoliyat yuritadi. Korxonamiz Toshkentdagi yuqori aniqlikdagi avtomatlashtirilgan ishlab chiqarish bazasi, muhandislik-loyiha bo‘limi va professional montaj guruhlarini birlashtiradi. Biz xalqaro yetakchi ishlab chiqaruvchilarning rasmiy hamkori hisoblanamiz: Sistem Aluminium (Turkiya), ASAŞ (Turkiya), Deceuninck (Belgiya), Akfa, Roto Frank va Master Italy.',
  establishedYear: 2014,
  city: 'Ташкент / Toshkent',
  addressRu: 'г. Ташкент, Яккасарайский район, ул. Мукими, 15',
  addressUz: 'Toshkent sh., Yakkasaroy tumani, Muqimiy ko‘chasi, 15',
  phone: '+998888001800',
  phoneFormatted: '+998 88 800 18 00',
  email: 'info@allwindows.uz',
  telegram: 'https://t.me/all_windows',
  instagram: 'https://instagram.com/all_windows',
  workHoursRu: 'Пн–Сб · 09:00–18:00 (Вс — выходной)',
  workHoursUz: 'Dush–Shan · 09:00–18:00 (Yak — dam olish kuni)',
  stats: [
    { value: '10+', labelRu: 'Лет на рынке', labelUz: 'Yillik tajriba' },
    { value: '3 200 м²', labelRu: 'Площадь цеха в Ташкенте', labelUz: 'Ishlab chiqarish maydoni' },
    { value: '98+', labelRu: 'Крупных сданных объектов', labelUz: 'Muvaffaqiyatli obyektlar' },
    { value: '2 400+', labelRu: 'Довольных клиентов', labelUz: 'Mamnun mijozlar' }
  ],
  certifications: [
    {
      titleRu: 'Сертификат соответствия ГОСТ / ISO 9001:2015',
      titleUz: 'GOST / ISO 9001:2015 muvofiqlik sertifikati',
      descRu: 'Система менеджмента качества при проектировании и производстве светопрозрачных конструкций.',
      descUz: 'Shaffof konstruksiyalarni loyihalash va ishlab chiqarishda xalqaro sifat standarti.'
    },
    {
      titleRu: 'Официальный переработчик Sistem Aluminium 🇹🇷',
      titleUz: 'Sistem Aluminium rasmiy qayta ishlovchisi 🇹🇷',
      descRu: 'Прямые системные поставки 65, 75, 85 серий и оригинальных термомостов.',
      descUz: '65, 75, 85 seriyalar va original termoko‘priklarni to‘g‘ridan-to‘g‘ri yetkazib berish.'
    },
    {
      titleRu: 'Авторизованный партнер Deceuninck 🇧🇪',
      titleUz: 'Deceuninck rasmiy avtorizatsiyalangan hamkori 🇧🇪',
      descRu: 'Сертифицированная сборка систем Лиgapro, Фаворит Спэйс и Баутек.',
      descUz: 'Ligapro, Favorit Space va Bautec tizimlarini sertifikatlangan yig‘ish.'
    },
    {
      titleRu: 'Гарантия 5 лет по договору',
      titleUz: 'Shartnoma bo‘yicha 5 yillik kafolat',
      descRu: 'Юридическая гарантия ООО «VINNIAN GROUP» на профиль, стеклопакеты, герметичность и монтаж.',
      descUz: 'Profil, oyna paketlari, germetiklik va montaj uchun rasmiy yuridik kafolat.'
    }
  ]
};
