import alyuksAntrasit from '@/assets/imgs/colors/alyuks-antrasit.webp';
import dubMokko from '@/assets/imgs/colors/dub-mokko.webp';
import matteksAntrasit from '@/assets/imgs/colors/matteks-antrasit.webp';
import metbrashKvarz from '@/assets/imgs/colors/metbrash-kvarz.webp';
import metbrashPlatin from '@/assets/imgs/colors/metbrash-platin.webp';
import metbrashSeriy from '@/assets/imgs/colors/metbrash-seriy.webp';
import orex from '@/assets/imgs/colors/orex.webp';
import panitedCoalGrey from '@/assets/imgs/colors/panited-coal-grey.webp';
import sheffildskiyBetoniyDub from '@/assets/imgs/colors/sheffildskiy-betoniy-dub.webp';
import sheffildskiyVisokogorniyDub from '@/assets/imgs/colors/sheffildskiy-visokogorniy-dub.webp';
import shefildskiySeriyDub from '@/assets/imgs/colors/shefildskiy-seriy-dub.webp';
import solodoviyDub from '@/assets/imgs/colors/solodoviy-dub.webp';
import svetliyDub from '@/assets/imgs/colors/svetliy-dub.webp';
import ternoviyOrex from '@/assets/imgs/colors/ternoviy-orex.webp';
import vinchester from '@/assets/imgs/colors/vinchester.webp';
import zalDub from '@/assets/imgs/colors/zal-dub.webp';

export interface WindowColor {
  id: string;
  name: string;
  nameUz: string;
  image: string;
  type: 'matte' | 'metallic' | 'wood';
}

export const windowColors: WindowColor[] = [
  { id: 'alyuks-antrasit', name: 'Алюкс антрацит', nameUz: 'Alux Antrasit', image: alyuksAntrasit, type: 'matte' },
  { id: 'matteks-antrasit', name: 'Маттекс антрацит', nameUz: 'Mattex Antrasit', image: matteksAntrasit, type: 'matte' },
  { id: 'panited-coal-grey', name: 'Painted Coal Grey', nameUz: 'Coal Grey', image: panitedCoalGrey, type: 'matte' },
  { id: 'metbrash-kvarz', name: 'Метбраш кварц', nameUz: 'Metbrush Kvars', image: metbrashKvarz, type: 'metallic' },
  { id: 'metbrash-platin', name: 'Метбраш платин', nameUz: 'Metbrush Platin', image: metbrashPlatin, type: 'metallic' },
  { id: 'metbrash-seriy', name: 'Метбраш серый', nameUz: 'Metbrush Kulrang', image: metbrashSeriy, type: 'metallic' },
  { id: 'dub-mokko', name: 'Дуб мокко', nameUz: 'Mokko eman', image: dubMokko, type: 'wood' },
  { id: 'zal-dub', name: 'Золотой дуб', nameUz: 'Oltin eman', image: zalDub, type: 'wood' },
  { id: 'svetliy-dub', name: 'Светлый дуб', nameUz: 'Och eman', image: svetliyDub, type: 'wood' },
  { id: 'solodoviy-dub', name: 'Солодовый дуб', nameUz: 'Solod eman', image: solodoviyDub, type: 'wood' },
  { id: 'shefildskiy-seriy-dub', name: 'Шеффилдский серый дуб', nameUz: 'Sheffild kulrang eman', image: shefildskiySeriyDub, type: 'wood' },
  { id: 'sheffildskiy-betoniy-dub', name: 'Шеффилдский бетонный дуб', nameUz: 'Sheffild beton eman', image: sheffildskiyBetoniyDub, type: 'wood' },
  { id: 'sheffildskiy-visokogorniy-dub', name: 'Шеффилдский высокогорный дуб', nameUz: 'Sheffild tog‘ emani', image: sheffildskiyVisokogorniyDub, type: 'wood' },
  { id: 'vinchester', name: 'Винчестер', nameUz: 'Vinchester', image: vinchester, type: 'wood' },
  { id: 'orex', name: 'Орех', nameUz: 'Yong‘oq', image: orex, type: 'wood' },
  { id: 'ternoviy-orex', name: 'Терновый орех', nameUz: 'Tikanli yong‘oq', image: ternoviyOrex, type: 'wood' },
];

export default windowColors;
