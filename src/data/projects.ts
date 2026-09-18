// Sultania
import sultania1 from '@/assets/imgs/projects/sultania1.webp';
import sultania2 from '@/assets/imgs/projects/sultania2.webp';
import sultania3 from '@/assets/imgs/projects/sultania3.webp';

// TMZ
import tmz1 from '@/assets/imgs/projects/tmz1.webp';
import tmz2 from '@/assets/imgs/projects/tmz2.webp';
import tmz3 from '@/assets/imgs/projects/tmz3.webp';
import tmz4 from '@/assets/imgs/projects/tmz4.webp';
import tmz5 from '@/assets/imgs/projects/tmz5.webp';

// Salar
import salar1 from '@/assets/imgs/projects/salar1.webp';
import salar2 from '@/assets/imgs/projects/salar2.webp';
import salar3 from '@/assets/imgs/projects/salar3.webp';

// Labzak
import labzak from '@/assets/imgs/projects/labzak.webp';

// Bobur
import bobur1 from '@/assets/imgs/projects/bobur1.webp';
import bobur2 from '@/assets/imgs/projects/bobur2.webp';
import bobur3 from '@/assets/imgs/projects/bobur3.webp';

// Feruza
import feruza1 from '@/assets/imgs/projects/feruza1.webp';
import feruza2 from '@/assets/imgs/projects/feruza2.webp';
import feruza3 from '@/assets/imgs/projects/feruza3.webp';
import feruza4 from '@/assets/imgs/projects/feruza4.webp';
import feruza5 from '@/assets/imgs/projects/feruza5.webp';

// Sayram
import sayram from '@/assets/imgs/projects/sayram.webp';

// Abu Dabi
import abudabi1 from '@/assets/imgs/projects/abudabi1.webp';
import abudabi2 from '@/assets/imgs/projects/abudabi2.webp';
import abudabi3 from '@/assets/imgs/projects/abudabi3.webp';

// Ventum Plaza
import ventumplaza1 from '@/assets/imgs/projects/ventumplaza1.webp';
import ventumplaza2 from '@/assets/imgs/projects/ventumplaza2.webp';
import ventumplaza3 from '@/assets/imgs/projects/ventumplaza3.webp';
import ventumplaza4 from '@/assets/imgs/projects/ventumplaza4.webp';

// Luminar
import luminar1 from '@/assets/imgs/projects/luminar.webp';
import luminar2 from '@/assets/imgs/projects/luminar2.webp';
import luminar3 from '@/assets/imgs/projects/luminar3.webp';
import luminar4 from '@/assets/imgs/projects/luminar4.webp';

// Fazo Residence
import fazo1 from '@/assets/imgs/projects/fazo1.webp';
import fazo2 from '@/assets/imgs/projects/fazo2.webp';
import fazo3 from '@/assets/imgs/projects/fazo3.webp';

// Oyoyun
import oyoyun1 from '@/assets/imgs/projects/oyoyun1.webp';
import oyoyun2 from '@/assets/imgs/projects/oyoyun2.webp';

// Chinobod
import chinibod from '@/assets/imgs/projects/chinibod.webp';

// Apex Tower
import apex1 from '@/assets/imgs/projects/apex1.webp';
import apex2 from '@/assets/imgs/projects/apex2.webp';
import apex3 from '@/assets/imgs/projects/apex3.webp';

// Jangoh
import jangoh1 from '@/assets/imgs/projects/jangoh1.webp';
import jangoh2 from '@/assets/imgs/projects/jangoh2.webp';

// MTT
import mtt from '@/assets/imgs/projects/mtt.webp';

// Clinic
import clinic from '@/assets/imgs/projects/clinic.webp';

// Sky Avenue
import skyavenue1 from '@/assets/imgs/projects/skyavenue1.webp';
import skyavenue2 from '@/assets/imgs/projects/skyavenue2.webp';
import skyavenue3 from '@/assets/imgs/projects/skyavenue3.webp';

export interface Project {
  slug: string;
  title: string;
  type: 'Жилые комплексы' | 'Коммерческие' | 'Социальные объекты' | 'Частные объекты';
  city: string;
  image?: string;
  images: string[];
  isTextOnly?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sultania',
    title: 'ЖК «Sultania»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: sultania1,
    images: [sultania1, sultania2, sultania3]
  },
  {
    slug: 'tmz',
    title: 'ТМЗ «Тошкент металлургия заводи»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: tmz1,
    images: [tmz1, tmz2, tmz3, tmz4, tmz5]
  },
  {
    slug: 'apex-tower',
    title: 'БЦ «Apex Tower»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: apex1,
    images: [apex1, apex2, apex3]
  },
  {
    slug: 'ventum-plaza',
    title: 'БЦ «Ventum plaza»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: ventumplaza1,
    images: [ventumplaza1, ventumplaza2, ventumplaza3, ventumplaza4]
  },
  {
    slug: 'salar',
    title: 'ТРЦ «Salar»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: salar1,
    images: [salar1, salar2, salar3]
  },
  {
    slug: 'luminar',
    title: 'ЖК «Luminar»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: luminar1,
    images: [luminar1, luminar2, luminar3, luminar4]
  },
  {
    slug: 'sky-avenue',
    title: 'ЖК «Sky avenue»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: skyavenue1,
    images: [skyavenue1, skyavenue2, skyavenue3]
  },
  {
    slug: 'fazo-residence',
    title: 'ЖК «Fazo residence»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: fazo1,
    images: [fazo1, fazo2, fazo3]
  },
  {
    slug: 'labzak',
    title: 'ЖК «Labzak»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: labzak,
    images: [labzak]
  },
  {
    slug: 'bobur',
    title: 'ЖК «Bobur»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: bobur1,
    images: [bobur1, bobur2, bobur3]
  },
  {
    slug: 'feruza',
    title: 'ЖК «Feruza»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: feruza1,
    images: [feruza1, feruza2, feruza3, feruza4, feruza5]
  },
  {
    slug: 'sayram',
    title: 'ЖК «Sayram»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: sayram,
    images: [sayram]
  },
  {
    slug: 'abudabi',
    title: 'ЖК «Abu dabi»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: abudabi1,
    images: [abudabi1, abudabi2, abudabi3]
  },
  {
    slug: 'oyoyun',
    title: 'БЦ «Oyoyun»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: oyoyun1,
    images: [oyoyun1, oyoyun2]
  },
  {
    slug: 'chinobod',
    title: 'ОЦ «Chinobod»',
    type: 'Коммерческие',
    city: 'Ташкент',
    image: chinibod,
    images: [chinibod]
  },
  {
    slug: 'jangoh',
    title: 'ЖК «Jangoh»',
    type: 'Жилые комплексы',
    city: 'Ташкент',
    image: jangoh1,
    images: [jangoh1, jangoh2]
  },
  {
    slug: 'mtt',
    title: 'МТТ',
    type: 'Социальные объекты',
    city: 'Ташкент',
    image: mtt,
    images: [mtt]
  },
  {
    slug: 'clinic',
    title: 'Клиника',
    type: 'Социальные объекты',
    city: 'Ташкент',
    image: clinic,
    images: [clinic]
  },
  {
    slug: 'private-houses',
    title: 'Более 350+ частных домов',
    type: 'Частные объекты',
    city: 'Ташкент и область',
    image: '',
    images: [],
    isTextOnly: true
  }
];
