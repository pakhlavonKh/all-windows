import type { Lang } from './translations';
import type { Product, Category } from '@/App';

export interface ProductTranslation {
  titleUz: string;
  subtitleUz: string;
  descriptionUz: string;
  specsUz: string[];
  subcategoryUz?: string;
}

export const subcategoriesUz: Record<string, string> = {
  'TERMO серия': 'TERMO seriyasi',
  'Aldox / Холодные': 'Aldox / Sovuq seriyalar',
  'Sistem Aluminium (Турция)': 'Sistem Aluminium (Turkiya)',
  'ASAŞ Rescara (Турция)': 'ASAŞ Rescara (Turkiya)',
  'Deceuninck (Бельгия)': 'Deceuninck (Belgiya)',
  'Akfa Engelberg (Швейцария)': 'Akfa Engelberg (Shveysariya)',
  'Akfa Trio / Quattro': 'Akfa Trio / Quattro',
  'Холодные': 'Sovuq seriyalar',
  'Теплые': 'Issiq seriyalar',
  'Подъемно-раздвижные': 'Ko‘tarma-surma portallar',
  'Гильотина': 'Gilotina tizimlari',
  'Стоечно-ригельные': 'Ustun-to‘sinli fasadlar',
  'Структурные': 'Strukturaviy fasadlar',
  'Офисные перегородки': 'Ofis to‘siqlari',
  'Спайдерные системы': 'Spider tizimlari',
  'Рольставни': 'Rolstavnilar',
  'Роллетные ворота': 'Rollet darvozalar',
  'Стеклянные перила': 'Shisha panjaralar',
  'Перила': 'Panjaralar',
  'Москитные сетки': 'Moskit to‘rlari',
  'Сетки': 'To‘rlar',
};

export const productTranslations: Record<string, ProductTranslation> = {
  // ==========================================
  // --- 1. ALYUMINIY DERAZA VA ESHIKLAR ---
  // ==========================================
  'termo-70': {
    titleUz: 'Akfa TERMO 70',
    subtitleUz: 'Mustahkamlangan 70 mm issiq alyuminiy tizim',
    subcategoryUz: 'TERMO seriyasi',
    descriptionUz: 'Yuqori mustahkamlik va shovqin izolyatsiyasiga ega Akfa TERMO 70 premium tizimi. Qalinligi 50 mm gacha bo‘lgan ikki kamerali energiya tejovchi oyna paketlarini o‘rnatish imkonini beradi.',
    specsUz: [
      'Romning montaj chuqurligi: 70 mm',
      'Rom kengligi: 70 mm',
      'Tabaqa kengligi: 75,5 mm',
      'Oyna paketining qalinligi: 20 mm – 50 mm',
      'Termoko‘prik kengligi: 24 mm',
      'Tabaqaning maksimal vazni: deraza 100 kg / eshik 160 kg',
      'Ochilish turi: Ichkariga ochilish (deraza / eshik)',
      'Derazalar uchun: 2200 mm × 1200 mm gacha',
      'Eshik yechimlari: 2800 mm × 1400 mm gacha',
    ],
  },
  'termo-77': {
    titleUz: 'Akfa TERMO 77',
    subtitleUz: 'Ko‘p kamerali poliamid termoko‘prikli premium tizim',
    subcategoryUz: 'TERMO seriyasi',
    descriptionUz: 'Akfa TERMO 77 — ko‘p qavatli binolar va kottejlar uchun maksimal energiya tejovchi tizim. Kuchaytirilgan shamol yuklamalariga to‘liq bardoshli.',
    specsUz: [
      'Rom montaj chuqurligi: 77 mm',
      'Tabaqa kengligi: 85 mm',
      'Oyna paketi qalinligi: 24 mm – 52 mm',
      'Termoko‘prik: 34 mm (poliamid)',
      'Ovoz izolyatsiyasi: 42 dB gacha',
      'Issiqlik qarshiligi: yuqori toifa A+',
    ],
  },
  'termo-98': {
    titleUz: 'Akfa TERMO 98',
    subtitleUz: 'Maksimal energiya tejamkorlikka ega flagman alyuminiy tizim',
    subcategoryUz: 'TERMO seriyasi',
    descriptionUz: 'Akfa TERMO 98 flagman tizimi passiv uylar va qat’iy energiya samaradorligi standartlariga ega arxitektura obyektlari uchun mo‘ljallangan.',
    specsUz: [
      'Rom montaj chuqurligi: 98 mm',
      'Oyna paketi: 58 mm gacha 3 kamerali',
      'Termoizolyatsiya: maksimal koeffitsiyent',
      'Fasad va vitrajlar bilan to‘liq integratsiya',
    ],
  },
  'ywd-78-thermo': {
    titleUz: 'Akfa YWD 78 THERMO',
    subtitleUz: 'Tijorat va jamoat binolari uchun mustahkam eshik tizimi',
    subcategoryUz: 'TERMO seriyasi',
    descriptionUz: 'Og‘ir yuklamali jamoat va tijorat binolari uchun mo‘ljallangan mustahkam issiq eshik tizimi.',
    specsUz: [
      'Profil chuqurligi: 78 mm',
      'Eshik tabaqasining yuk ko‘tarishi: 200 kg gacha',
      'Sikllar soni: 500 000 dan ortiq ochilib-yopilish',
    ],
  },
  'aldox': {
    titleUz: 'Akfa Aldox',
    subtitleUz: 'Klassik sovuq alyuminiy tizim',
    subcategoryUz: 'Aldox / Sovuq seriyalar',
    descriptionUz: 'Ichki to‘siqlar, vitrinalar, ofis eshiklari va fasadning sovuq zonalari uchun sinovdan o‘tgan klassik alyuminiy konstruksiya.',
    specsUz: [
      'Rom montaj chuqurligi: 45 mm',
      'Oyna qalinligi: 4 mm dan 20 mm gacha',
      'Yengil va mustahkam profil',
    ],
  },
  'aldox-2': {
    titleUz: 'Akfa Aldox 2',
    subtitleUz: 'Qovurg‘alari kuchaytirilgan yangilangan Aldox tizimi',
    subcategoryUz: 'Aldox / Sovuq seriyalar',
    descriptionUz: 'Kuchaytirilgan qattiqlik qovurg‘alariga ega bo‘lib, baland vitrinalar va mustahkam ichki eshiklar uchun juda qulay.',
    specsUz: [
      'Kuchaytirilgan profil devori',
      'Kengaytirilgan furnitura pazi',
      'Baland vitrinalar uchun mustahkam tayanch',
    ],
  },
  'akf-47-champion': {
    titleUz: 'Akfa AKF 47 CHAMPION',
    subtitleUz: 'Yengil vitrinalar va oynavandlik uchun tejamkor tizim',
    subcategoryUz: 'Aldox / Sovuq seriyalar',
    descriptionUz: 'Savdo pavilyonlari, tamburlar va yengil vitrina konstruksiyalari uchun qulay yechim.',
    specsUz: [
      'Profil chuqurligi: 47 mm',
      'Tejamkor narx va tez montaj',
    ],
  },
  'sistem-wh65': {
    titleUz: 'Sistem Aluminium WH65',
    subtitleUz: 'Turkiya premium arxitektura profili 65 mm',
    subcategoryUz: 'Sistem Aluminium (Turkiya)',
    descriptionUz: 'Turkiyaning mashhur Sistem Aluminium zavodining 65 mm termoko‘prikli premium tizimi.',
    specsUz: [
      'Profil chuqurligi: 65 mm',
      'Yevropa standarti poliamid termouzilma',
      'Shovqin izolyatsiyasi: 40 dB',
    ],
  },
  'sistem-wh75': {
    titleUz: 'Sistem Aluminium WH75',
    subtitleUz: 'Kottej va biznes-markazlar uchun 75 mm issiq tizim',
    subcategoryUz: 'Sistem Aluminium (Turkiya)',
    descriptionUz: 'Zamonaviy kottejlar va biznes-markazlar uchun yuqori energiya tejovchi xususiyatlarga ega turk tizimi.',
    specsUz: [
      'Rom chuqurligi: 75 mm',
      'Oyna paketi: 44 mm gacha',
      'Termoko‘prik: 34 mm',
    ],
  },
  'sistem-wh85': {
    titleUz: 'Sistem Aluminium WH85',
    subtitleUz: 'Katta o‘lchamli konstruksiyalar uchun 85 mm flagman tizim',
    subcategoryUz: 'Sistem Aluminium (Turkiya)',
    descriptionUz: 'Katta vitrajlar va polgacha oynalangan xonadonlar uchun maksimal qattiqlik va issiqlik izolyatsiyasi.',
    specsUz: [
      'Profil chuqurligi: 85 mm',
      'Maksimal mustahkamlik va shamolga bardoshlik',
    ],
  },
  'asas-rwt64': {
    titleUz: 'ASAŞ Rescara RWT 64',
    subtitleUz: 'Yevropa sifatidagi turk me’moriy alyuminiy tizimi',
    subcategoryUz: 'ASAŞ Rescara (Turkiya)',
    descriptionUz: 'ASAŞ Aluminium — Turkiyadagi eng yirik eksportchi. RWT 64 seriyasi zamonaviy fasad va derazalar uchun qulay.',
    specsUz: [
      'Gabarit chuqurligi: 64 mm',
      'Yevropa furniturasiga to‘liq moslik',
    ],
  },
  'asas-rwt75': {
    titleUz: 'ASAŞ Rescara RWT 75',
    subtitleUz: 'Yuqori energiya samaradorligiga ega ASAŞ RWT 75 tizimi',
    subcategoryUz: 'ASAŞ Rescara (Turkiya)',
    descriptionUz: 'Qishki sovuq va yozgi issiqdan mukammal himoya qiluvchi kuchaytirilgan poliamid izolyatsiyali tizim.',
    specsUz: [
      'Profil chuqurligi: 75 mm',
      'Premium darajadagi germetiklik va issiqlik',
    ],
  },

  // ==========================================
  // --- 2. PLASTIK DERAZA VA ESHIKLAR (PVX) ---
  // ==========================================
  'deceuninck-6000': {
    titleUz: 'Deceuninck 6000 (Bautec Neo)',
    subtitleUz: 'Belgiya brendi, 71 mm 5 kamerali PVX tizim',
    subcategoryUz: 'Deceuninck (Belgiya)',
    descriptionUz: 'Deceuninck 6000 — 5 kamerali, 71 mm montaj kengligiga ega tejamkor va ishonchli Belgiya tizimi.',
    specsUz: [
      'Montaj kengligi: 71 mm',
      'Kameralar soni: 5 ta kamera',
      'Oyna paketi: 44 mm gacha',
      'A toifali ekologik toza polimer',
    ],
  },
  'deceuninck-7000': {
    titleUz: 'Deceuninck 7000 (Favorit Space)',
    subtitleUz: '3 konturli zichlagichga ega 76 mm 6 kamerali tizim',
    subcategoryUz: 'Deceuninck (Belgiya)',
    descriptionUz: '3 ta zichlash konturiga ega 76 mm kenglikdagi tizim shovqin va changdan a’lo darajada himoya qiladi.',
    specsUz: [
      'Montaj chuqurligi: 76 mm',
      'Kameralar soni: 6 ta kamera',
      '3 konturli innovatsion TPE zichlagich',
      'Ovoz izolyatsiyasi: 44 dB gacha',
    ],
  },
  'deceuninck-8000': {
    titleUz: 'Deceuninck 8000 (Elegante)',
    subtitleUz: 'Innovatsion 84 mm 6 kamerali premium tizim',
    subcategoryUz: 'Deceuninck (Belgiya)',
    descriptionUz: 'Mukofot sovrindori bo‘lgan zamonaviy dizayn, alyuminiy ko‘rinishi va maksimal energiya tejamkorlik.',
    specsUz: [
      'Montaj chuqurligi: 84 mm',
      'Kameralar soni: 6 ta kamera',
      'Oyna paketi: 56 mm gacha',
      'Red Dot Award dizayn mukofoti sovrindori',
    ],
  },
  'engelberg-7000': {
    titleUz: 'Akfa Engelberg 7000',
    subtitleUz: 'Shveysariya texnologiyasi asosidagi 70 mm 4 kamerali profil',
    subcategoryUz: 'Akfa Engelberg (Shveysariya)',
    descriptionUz: 'Engelberg 7000 — yuqori qattiqlikdagi va sifatli laminatsiyaga ega Shveysariya texnologiyali profil.',
    specsUz: [
      'Rom chuqurligi: 70 mm',
      'Kameralar soni: 4 ta kamera',
      'Mustahkamlangan metall armatura',
    ],
  },
  'engelberg-7600': {
    titleUz: 'Akfa Engelberg 7600',
    subtitleUz: 'Oshirilgan issiqlik izolyatsiyali 76 mm 5 kamerali tizim',
    subcategoryUz: 'Akfa Engelberg (Shveysariya)',
    descriptionUz: 'Harorat tebranishlariga chidamli, keng oyna paketlarini o‘rnatish imkoniyatiga ega.',
    specsUz: [
      'Rom chuqurligi: 76 mm',
      'Kameralar soni: 5 ta kamera',
      'Oyna paketi: 40 mm gacha',
    ],
  },
  'engelberg-8000': {
    titleUz: 'Akfa Engelberg 8000',
    subtitleUz: 'Maksimal shovqin va issiqlik izolyatsiyali 80 mm 6 kamerali flagman',
    subcategoryUz: 'Akfa Engelberg (Shveysariya)',
    descriptionUz: 'Premium kottejlar va shovqinli shahar magistrallari bo‘yidagi uylar uchun mukammal sokinlik.',
    specsUz: [
      'Rom chuqurligi: 80 mm',
      'Kameralar soni: 6 ta kamera',
      'Eng yuqori toifadagi A+ issiqlik tejamkorlik',
    ],
  },
  'akfa-trio-6000': {
    titleUz: 'Akfa Trio 6000',
    subtitleUz: 'Ommabop 60 mm 3 kamerali PVX tizim',
    subcategoryUz: 'Akfa Trio / Quattro',
    descriptionUz: 'Kvartiralar va uylar uchun sinovdan o‘tgan amaliy va ishonchli deraza tizimi.',
    specsUz: [
      'Montaj kengligi: 60 mm',
      'Kameralar soni: 3 ta',
      'Standart turar-joylar uchun eng ommabop yechim',
    ],
  },
  'akfa-quattro-5800': {
    titleUz: 'Akfa Quattro 5800',
    subtitleUz: 'Kvartiralar uchun qulay 58 mm 4 kamerali profil',
    subcategoryUz: 'Akfa Trio / Quattro',
    descriptionUz: '4 kamerali tuzilishi tufayli klassik 3 kamerali profillardan ko‘ra ko‘proq issiqlikni saqlaydi.',
    specsUz: [
      'Montaj kengligi: 58 mm',
      'Kameralar soni: 4 ta',
      'Yaxshilangan energiya tejamkorlik',
    ],
  },
  'akfa-quattro-6000': {
    titleUz: 'Akfa Quattro 6000',
    subtitleUz: '60 mm kenglikdagi 4 kamerali kuchaytirilgan PVX tizim',
    subcategoryUz: 'Akfa Trio / Quattro',
    descriptionUz: 'Barqaror geometriya, oson parvarish va uzoq xizmat muddati.',
    specsUz: [
      'Montaj kengligi: 60 mm',
      'Kameralar soni: 4 ta',
    ],
  },
  'akfa-trio-5800': {
    titleUz: 'Akfa Trio 5800',
    subtitleUz: '58 mm 3 kamerali standart profil',
    subcategoryUz: 'Akfa Trio / Quattro',
    descriptionUz: 'Standart turar-joy xonalari uchun maqbul narx va sifat mutanosibligi.',
    specsUz: [
      'Montaj kengligi: 58 mm',
      'Kameralar soni: 3 ta',
    ],
  },
  'akfa-quattro-5200': {
    titleUz: 'Akfa Quattro 5200',
    subtitleUz: 'Yengil konstruksiyalar uchun 52 mm ixcham profil',
    subcategoryUz: 'Akfa Trio / Quattro',
    descriptionUz: 'Balkonlar va yordamchi xonalarni oynavand qilish uchun tejamkor yechim.',
    specsUz: [
      'Montaj kengligi: 52 mm',
      'Ixcham va tejamkor',
    ],
  },

  // ==========================================
  // --- 3. SURMA VA GILOTINA TIZIMLARI ---
  // ==========================================
  'econom-bkg-40': {
    titleUz: 'Akfa Econom BKG 40',
    subtitleUz: 'Balkon va verandalarni oynavand qilish uchun yengil surma tizim',
    subcategoryUz: 'Sovuq surma tizimlar',
    descriptionUz: 'Joyni tejovchi, bir nechta relsli yengil surma oynavandlik tizimi.',
    specsUz: [
      'Profil montaj chuqurligi: 40 mm',
      'Relslar soni: 2 va 3 relsli yo‘laklar',
      'Silliq va shovqinsiz roliklar',
    ],
  },
  'standart-bkh-38': {
    titleUz: 'Akfa Standart BKH 38',
    subtitleUz: 'Yaxshilangan germetiklikka ega surma tizim',
    subcategoryUz: 'Standart surma tizimlar',
    descriptionUz: 'Shamol va changdan himoya qiluvchi zichlagichlarga ega surma derazalar.',
    specsUz: [
      'Profil chuqurligi: 38 mm',
      'Chang va shamoldan himoya',
    ],
  },
  'standart-bkh-60': {
    titleUz: 'Akfa Standart BKH 60',
    subtitleUz: 'Keng teshiklar uchun kuchaytirilgan surma tizim',
    subcategoryUz: 'Ko‘tarma-surma portallar',
    descriptionUz: 'Katta o‘lchamli oynavand eshiklar va terassalar uchun qulay surma konstruksiya.',
    specsUz: [
      'Profil chuqurligi: 60 mm',
      'Katta tabaqalarni o‘rnatish imkoniyati',
    ],
  },
  'premium-bkh-65': {
    titleUz: 'Akfa Premium BKH 65',
    subtitleUz: 'Termoko‘prikli premium ko‘tarma-surma (Lift & Slide) portal',
    subcategoryUz: 'Ko‘tarma-surma portallar',
    descriptionUz: 'Og‘ir shisha paketli eshiklar bitta barmoq harakati bilan yengil sirpanadi, mukammal issiqlik izolyatsiyasini ta’minlaydi.',
    specsUz: [
      'Profil chuqurligi: 65 mm',
      'Lift & Slide (ko‘tarilib surilish) mexanizmi',
      'Tabaqaning maksimal vazni: 300 kg gacha',
      'Maksimal issiqlik saqlash darajasi',
    ],
  },
  'guillotine-system': {
    titleUz: 'Avtomatik gilotina tizimi (Guillotine Glass)',
    subtitleUz: 'Masofadan boshqariladigan vertikal ko‘tariluvchi shisha tizim',
    subcategoryUz: 'Gilotina tizimlari',
    descriptionUz: 'Restoranlar, qahvaxonalar va ayvonlar uchun pult yordamida vertikal ochiluvchi motorli oynavand to‘siq.',
    specsUz: [
      'Ko‘tarilish turi: Somfy / Becker motorli vertikal harakat',
      'Boshqaruv: Masofaviy pult va smartfon',
      'Shisha: 8–10 mm toblangan yoki 20 mm oyna paketi',
      'Pastki panel: Avtomatik shisha panjara vazifasini bajaradi',
    ],
  },

  // ==========================================
  // --- 4. FASAD TIZIMLARI ---
  // ==========================================
  'econom-bkf-48': {
    titleUz: 'Akfa Econom BKF 48',
    subtitleUz: 'Energiya tejovchi ustun-to‘sinli fasad tizimi',
    subcategoryUz: 'Ustun-to‘sinli fasadlar',
    descriptionUz: 'Tijorat binolari va do‘konlar uchun yengil va zamonaviy alyuminiy shisha fasad.',
    specsUz: [
      'Ko‘rinadigan chiziq kengligi: 48 mm',
      'Katta vitrajlar uchun mustahkam konstruksiya',
    ],
  },
  'premium-bkf-50': {
    titleUz: 'Akfa Premium BKF 50',
    subtitleUz: '9 balli seysmik bardoshlikka ega fasad tizimi',
    subcategoryUz: 'Ustun-to‘sinli fasadlar',
    descriptionUz: 'Seysmik jihatdan mustahkamlangan, og‘ir oynalarga mo‘ljallangan me’moriy fasad tizimi.',
    specsUz: [
      'Ko‘rinadigan profil kengligi: 50 mm',
      'Seysmik bardoshlik: 9 ball gacha',
      'Shisha paketi: 50 mm gacha',
    ],
  },
  'premium-bkf-max': {
    titleUz: 'Akfa Premium BKF MAX',
    subtitleUz: '22 mm ultra-ingichka ko‘rinadigan chiziqli fasad',
    subcategoryUz: 'Strukturaviy fasadlar',
    descriptionUz: 'Maksimal shaffoflik va zamonaviy arxitektura uchun yupqa profilli strukturaviy fasad.',
    specsUz: [
      'Ko‘rinadigan chiziq: bor-yo‘g‘i 22 mm',
      'Maksimal tabiiy yorug‘lik kirishi',
    ],
  },

  // ==========================================
  // --- 5. OFIS TO‘SIQLARI ---
  // ==========================================
  'bko-38': {
    titleUz: 'Akfa BKO 38',
    subtitleUz: 'Yagona oynali ixcham ichki to‘siqlar',
    subcategoryUz: 'Ofis to‘siqlari',
    descriptionUz: 'Ofis zonalari va kabinetlarni qulay ajratish uchun yengil va zamonaviy shisha to‘siqlar.',
    specsUz: [
      'Profil chuqurligi: 38 mm',
      'To‘ldirish: 4–8 mm toblangan shisha',
    ],
  },
  'bko-40': {
    titleUz: 'Akfa BKO 40',
    subtitleUz: 'Ikki qavatli oynavandlik va jalyuzi o‘rnatish imkoniyatiga ega tizim',
    subcategoryUz: 'Ofis to‘siqlari',
    descriptionUz: 'Yuqori akustik izolyatsiya talab qilinadigan muzokaralar xonalari va rahbar kabinetlari uchun.',
    specsUz: [
      'Profil chuqurligi: 40 mm',
      'O‘rnatilgan jalyuzilar bilan moslik',
      'Yuqori darajadagi shovqin izolyatsiyasi',
    ],
  },

  // ==========================================
  // --- 6. SPIDER TIZIMLARI (VITRAJLАR) ---
  // ==========================================
  'spider-glazing': {
    titleUz: 'Spider tizimli oynavandlik (Spider Glass)',
    subtitleUz: 'Zanglamaydigan po‘lat kronshteynli romsiz fasad oynavandligi',
    subcategoryUz: 'Spider tizimlari',
    descriptionUz: 'Maksimal shaffoflik beruvchi tochechniy spider kronshteynlari va toblangan tripleks oynali zamonaviy arxitektura yechimi.',
    specsUz: [
      'Kronshteyn materiali: AISI 304 / 316 zanglamaydigan po‘lat',
      'Kronshteyn nurlari: 1, 2, 3 va 4 nurli mahkamlagichlar',
      'Shisha turi: 12 mm dan 24 mm gacha toblangan xavfsiz tripleks',
      'Sharnirli rutellar: teflon qistirmali vibratsiyani so‘ndiruvchi',
      'Qo‘llanishi: Savdo markazlari, biznes-markazlar, avtosalonlar va atriymlar',
    ],
  },
  'panoramic-jumbo': {
    titleUz: 'Spider tizimli oynavandlik (Spider Glass)',
    subtitleUz: 'Zanglamaydigan po‘lat kronshteynli romsiz fasad oynavandligi',
    subcategoryUz: 'Spider tizimlari',
    descriptionUz: 'Maksimal shaffoflik beruvchi tochechniy spider kronshteynlari va toblangan tripleks oynali zamonaviy arxitektura yechimi.',
    specsUz: [
      'Kronshteyn materiali: AISI 304 / 316 zanglamaydigan po‘lat',
      'Kronshteyn nurlari: 1, 2, 3 va 4 nurli mahkamlagichlar',
      'Shisha turi: 12 mm dan 24 mm gacha toblangan xavfsiz tripleks',
      'Sharnirli rutellar: teflon qistirmali vibratsiyani so‘ndiruvchi',
      'Qo‘llanishi: Savdo markazlari, biznes-markazlar, avtosalonlar va atriymlar',
    ],
  },

  // ==========================================
  // --- 7. ROLLET DARVOZALAR VA ROLSTAVNILAR ---
  // ==========================================
  'akfa-shutters-foam': {
    titleUz: 'Akfa rolstavnilari (Sendvich & Alyuminiy)',
    subtitleUz: 'Deraza va eshik teshiklari uchun alyuminiy va sendvich rolstavnilar',
    subcategoryUz: 'Rolstavnilar',
    descriptionUz: 'Quyosh nurlari, shovqin, chang va tashqi xavflardan ishonchli himoya qiluvchi zamonaviy rolstavnilar.',
    specsUz: [
      'Lamellar turi: Penonapolniy (sendvich) yoki yaxlit alyuminiy',
      'Lamellar kengligi: 55 mm va 77 mm',
      'Maksimal balandlik: 5 metr gacha',
      'Boshqaruv: Masofaviy pult, kalitli tugma yoki dastaki mexanizm',
      'Xizmat muddati: 50–80 yil',
    ],
  },
  'akfa-shutters-extruded': {
    titleUz: 'Ekstrudirovanniy rolstavnilar Akfa',
    subtitleUz: 'Antivandal kuchaytirilgan yaxlit alyuminiy roletlar',
    subcategoryUz: 'Rolstavnilar',
    descriptionUz: 'Birinchi qavatlar, do‘konlar va banklar uchun buzib kirishga qarshi mustahkam roletlar.',
    specsUz: [
      'Qattiq alyuminiy qotishmasi',
      'Antivandal yuqori xavfsizlik toifasi',
    ],
  },
  'akfa-garage-doors': {
    titleUz: 'Akfa rollet darvozalari 77 mm',
    subtitleUz: 'Avtoturargoh, garaj va omborlar uchun avtomatlashtirilgan darvozalar',
    subcategoryUz: 'Rollet darvozalar',
    descriptionUz: 'Joyni tejaydigan, shift ostiga rulon shaklida yig‘iladigan qulay va xavfsiz garaj darvozalari.',
    specsUz: [
      'Profil: 77 mm kuchaytirilgan sendvich va ekstrudirovanniy lamellar',
      'Elektr dvigatel: 60 kg dan 330 kg gacha yuk ko‘tarish quvvati',
      'Avariyaviy ochish: Elektr uzilganda dastaki richag bilan ochish',
      'Himoya: Avtomatik to‘siqni sezish datchigi',
    ],
  },

  // ==========================================
  // --- 8. SHISHA PANJARALAR (BKGF 90) ---
  // ==========================================
  'railing-profile': {
    titleUz: 'BKGF 90 shisha to‘siq va panjaralari',
    subtitleUz: 'BKGF 90 qisqichli profiliga ega zamonaviy va ta’sirchan shisha panjaralar',
    subcategoryUz: 'Shisha panjaralar',
    descriptionUz: 'Ajoyib va zamonaviy ko‘rinishga ega BKGF 90 shisha to‘siqlari: zinapoyalar, balkonlar, atriumlar va ochiq terassalar uchun toblangan mustahkam tripleks.',
    specsUz: [
      'Tizim: BKGF 90 alyuminiy qisqichli profil',
      'Shisha: 12 mm dan 20 mm gacha xavfsiz toblangan tripleks',
      'Dizayn: Romsiz, toza panoramali shaffof ko‘rinish',
      'Yuklama bardoshi: Qat’iy xavfsizlik standartlariga to‘liq javob beradi',
    ],
  },
  'railing-spiders': {
    titleUz: 'BKGF 90 shisha to‘siq va panjaralari',
    subtitleUz: 'BKGF 90 qisqichli profiliga ega zamonaviy va ta’sirchan shisha panjaralar',
    subcategoryUz: 'Shisha panjaralar',
    descriptionUz: 'Ajoyib va zamonaviy ko‘rinishga ega BKGF 90 shisha to‘siqlari: zinapoyalar, balkonlar, atriumlar va ochiq terassalar uchun toblangan mustahkam tripleks.',
    specsUz: [
      'Tizim: BKGF 90 alyuminiy qisqichli profil',
      'Shisha: 12 mm dan 20 mm gacha xavfsiz toblangan tripleks',
      'Dizayn: Romsiz, toza panoramali shaffof ko‘rinish',
      'Yuklama bardoshi: Qat’iy xavfsizlik standartlariga to‘liq javob beradi',
    ],
  },

  // ==========================================
  // --- 9. MOSKIT TO‘RLARI ---
  // ==========================================
  'mosquito-inside-frame': {
    titleUz: 'Rom ichidagi to‘r (Vnutriramnaya)',
    subtitleUz: 'Rom ichiga qo‘yiladigan yengil to‘r',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Romning ichki qismiga o‘rnatiladigan va maxsus buriluvchi fiksatorlar bilan zichlagichga qistirib qo‘yiladigan yengil moskit to‘ri.',
    specsUz: [
      'O‘rnatish: Burg‘ulashsiz, romning ichiga maxsus aylanuvchi ilmoqlar bilan',
      'Mato: Mustahkam fiberglass tola',
      'Tozalash: Bir necha daqiqada oson yechiladi va yuviladi',
    ],
  },
  'mosquito-hinged': {
    titleUz: 'Oshiq-moshiqli to‘r (Na petlyax)',
    subtitleUz: 'Oson ochilib-yopiladigan to‘rli eshik',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Eshik va balkonlar uchun mo‘ljallangan to‘rli eshik. Oson ochiladi va yopiladi, zarurat tug‘ilganda bir necha daqiqada ilmoqlaridan yechib olinadi.',
    specsUz: [
      'Mexanizm: Kuchaytirilgan oshiq-moshiqlar va magnitli fiksator',
      'Konstruksiya: Ichki mustahkamlovchi ko‘ndalang to‘sin',
      'Qo‘llanishi: Balkon eshiklari, terassalar va kirish zonalari',
    ],
  },
  'mosquito-frame': {
    titleUz: 'Romli to‘r (Ramochnaya)',
    subtitleUz: 'Tashqi tomondan o‘rnatiladigan ommabop konstruksiya',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Romning tashqi tarafiga qotiriladigan eng ommabop moskit to‘ri. Birovning yordamisiz osongina yechiladi va qayta o‘rnatiladi.',
    specsUz: [
      'Rom: Alyuminiy emallangan profil',
      'Mahkamlash: Z-shaklidagi ishonchli ushlagichlar',
      'Parvarish: Suv va sovunli eritmada oson yuviladi',
    ],
  },
  'mosquito-sliding': {
    titleUz: 'Surma to‘r (Razdvizhnaya)',
    subtitleUz: 'Zamonaviy va qulay buklanuvchi plisse to‘r',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Surma moskit to‘rlari – hasharotlardan himoya qilish uchun zamonaviy va qulay yechim. Buklanuvchi plisse konstruksiyasi tufayli osongina suriladi va joyni tejaydi.',
    specsUz: [
      'Konstruksiya: Akkordeon (plisse) shaklida yig‘iluvchi to‘r',
      'Harakat: Pastki past profilli rels bo‘ylab silliq siljish',
      'Qulaylik: Katta eshiklar va panoramali portallar uchun ideal',
    ],
  },
  'mosquito-plisse': {
    titleUz: 'Surma to‘r (Razdvizhnaya plisse)',
    subtitleUz: 'Zamonaviy va qulay buklanuvchi plisse to‘r',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Surma moskit to‘rlari – hasharotlardan himoya qilish uchun zamonaviy va qulay yechim. Buklanuvchi plisse konstruksiyasi tufayli osongina suriladi va joyni tejaydi.',
    specsUz: [
      'Konstruksiya: Akkordeon (plisse) shaklida yig‘iluvchi to‘r',
      'Harakat: Pastki past profilli rels bo‘ylab silliq siljish',
      'Qulaylik: Katta eshiklar va panoramali portallar uchun ideal',
    ],
  },
  'mosquito-door': {
    titleUz: 'Oshiq-moshiqli to‘r (Na petlyax)',
    subtitleUz: 'Oson ochilib-yopiladigan to‘rli eshik',
    subcategoryUz: 'Moskit to‘rlari',
    descriptionUz: 'Eshik va balkonlar uchun mo‘ljallangan to‘rli eshik. Oson ochiladi va yopiladi, zarurat tug‘ilganda bir necha daqiqada ilmoqlaridan yechib olinadi.',
    specsUz: [
      'Mexanizm: Kuchaytirilgan oshiq-moshiqlar va magnitli fiksator',
      'Konstruksiya: Ichki mustahkamlovchi ko‘ndalang to‘sin',
      'Qo‘llanishi: Balkon eshiklari, terassalar va kirish zonalari',
    ],
  },
};

/**
 * Returns product with translated fields when lang === 'uz'
 */
export function getTranslatedProduct(p: Product, lang: Lang): Product {
  if (lang !== 'uz') return p;
  const t = productTranslations[p.slug];

  let brandCountry = p.brandCountry;
  if (brandCountry) {
    brandCountry = brandCountry
      .replace('Узбекистан', 'O‘zbekiston')
      .replace('Турция', 'Turkiya')
      .replace('Бельгия', 'Belgiya')
      .replace('Международный', 'Xalqaro')
      .replace('Швейцарские технологии', 'Shveysariya texnologiyasi');
  }

  const subcategory = t?.subcategoryUz || (p.subcategory ? (subcategoriesUz[p.subcategory] || p.subcategory) : undefined);

  if (!t) {
    return {
      ...p,
      brandCountry,
      subcategory,
    };
  }

  return {
    ...p,
    title: t.titleUz || p.title,
    subtitle: t.subtitleUz || p.subtitle,
    description: t.descriptionUz || p.description,
    specs: t.specsUz && t.specsUz.length > 0 ? t.specsUz : p.specs,
    subcategory,
    brandCountry,
  };
}
