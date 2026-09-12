import alyuksAntrasit from '@/assets/imgs/colors/alyuks-antrasit.png';
import dubMokko from '@/assets/imgs/colors/dub-mokko.png';
import matteksAntrasit from '@/assets/imgs/colors/matteks-antrasit.png';
import metbrashKvarz from '@/assets/imgs/colors/metbrash-kvarz.png';
import metbrashPlatin from '@/assets/imgs/colors/metbrash-platin.png';
import metbrashSeriy from '@/assets/imgs/colors/metbrash-seriy.png';
import orex from '@/assets/imgs/colors/orex.png';
import panitedCoalGrey from '@/assets/imgs/colors/panited-coal-grey.png';
import sheffildskiyBetoniyDub from '@/assets/imgs/colors/sheffildskiy-betoniy-dub.png';
import sheffildskiyVisokogorniyDub from '@/assets/imgs/colors/sheffildskiy-visokogorniy-dub.png';
import shefildskiySeriyDub from '@/assets/imgs/colors/shefildskiy-seriy-dub.png';
import solodoviyDub from '@/assets/imgs/colors/solodoviy-dub.png';
import svetliyDub from '@/assets/imgs/colors/svetliy-dub.png';
import ternoviyOrex from '@/assets/imgs/colors/ternoviy-orex.png';
import vinchester from '@/assets/imgs/colors/vinchester.png';
import zalDub from '@/assets/imgs/colors/zal-dub.png';

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
