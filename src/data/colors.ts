export interface ColorOption {
  code: string;
  nameRu: string;
  nameUz: string;
  hex: string;
  type: 'solid' | 'wood' | 'metallic';
  textureUrl?: string;
  popular?: boolean;
}

export const colorPalette: ColorOption[] = [
  // Solid RAL Colors
  { code: 'RAL 7016', nameRu: 'Антрацитово-серый (Anthracite Grey)', nameUz: 'Antrasit kulrang', hex: '#383e42', type: 'solid', popular: true },
  { code: 'RAL 9005', nameRu: 'Глубокий чёрный (Jet Black)', nameUz: 'To‘liq qora', hex: '#111315', type: 'solid', popular: true },
  { code: 'RAL 9016', nameRu: 'Ярко-белый (Traffic White)', nameUz: 'Yorqin oq', hex: '#f7f8f8', type: 'solid', popular: true },
  { code: 'RAL 7024', nameRu: 'Графитово-серый (Graphite Grey)', nameUz: 'Grafit kulrang', hex: '#474a50', type: 'solid', popular: true },
  { code: 'RAL 8017', nameRu: 'Шоколадно-коричневый (Chocolate Brown)', nameUz: 'Shokolad jigarrang', hex: '#442d25', type: 'solid', popular: true },
  { code: 'RAL 7035', nameRu: 'Светло-серый (Light Grey)', nameUz: 'Och kulrang', hex: '#c5c7c4', type: 'solid' },
  { code: 'RAL 9006', nameRu: 'Белый алюминий (White Aluminium)', nameUz: 'Oq alyuminiy metallik', hex: '#a5a8a6', type: 'metallic' },
  { code: 'RAL 7021', nameRu: 'Черно-серый (Black Grey)', nameUz: 'Qora-kulrang', hex: '#2f3234', type: 'solid' },
  { code: 'RAL 6005', nameRu: 'Зеленый мох (Moss Green)', nameUz: 'Yashil mox', hex: '#154332', type: 'solid' },
  { code: 'RAL 1015', nameRu: 'Светлая слоновая кость (Light Ivory)', nameUz: 'Fil suyagi', hex: '#e6d2b5', type: 'solid' },

  // Woodgrain & Texture Finishes
  { code: 'GOLDEN OAK', nameRu: 'Золотой дуб (Golden Oak)', nameUz: 'Oltin eman', hex: '#945d31', type: 'wood', popular: true },
  { code: 'DARK OAK', nameRu: 'Тёмный дуб (Dark Oak)', nameUz: 'To‘q eman', hex: '#4c2e1b', type: 'wood', popular: true },
  { code: 'WALNUT', nameRu: 'Орех (Walnut)', nameUz: 'Yong‘oq', hex: '#5f3a22', type: 'wood', popular: true },
  { code: 'MAHOGANY', nameRu: 'Махагон (Mahogany)', nameUz: 'Qizil yog‘och', hex: '#541f17', type: 'wood' },
  { code: 'ANODIZED SILVER', nameRu: 'Анодированное серебро (E6/EV1)', nameUz: 'Anodlangan kumush', hex: '#b8bcc0', type: 'metallic' },
  { code: 'CHAMPAGNE BRONZE', nameRu: 'Шампань Бронза (Anodized Bronze)', nameUz: 'Shampan bronza', hex: '#7c6853', type: 'metallic', popular: true }
];
