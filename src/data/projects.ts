// Sultania
import sultania1 from '@/assets/imgs/projects/sultania1.jpg';
import sultania2 from '@/assets/imgs/projects/sultania2.jpg';
import sultania3 from '@/assets/imgs/projects/sultania3.jpg';

// TMZ
import tmz1 from '@/assets/imgs/projects/tmz1.jpg';
import tmz2 from '@/assets/imgs/projects/tmz2.jpg';
import tmz3 from '@/assets/imgs/projects/tmz3.jpg';
import tmz4 from '@/assets/imgs/projects/tmz4.jpg';
import tmz5 from '@/assets/imgs/projects/tmz5.jpg';

// Salar
import salar1 from '@/assets/imgs/projects/salar1.jpg';
import salar2 from '@/assets/imgs/projects/salar2.jpg';
import salar3 from '@/assets/imgs/projects/salar3.jpg';

// Labzak
import labzak from '@/assets/imgs/projects/labzak.jpg';

// Bobur
import bobur1 from '@/assets/imgs/projects/bobur1.jpg';
import bobur2 from '@/assets/imgs/projects/bobur2.jpg';
import bobur3 from '@/assets/imgs/projects/bobur3.jpg';

// Feruza
import feruza1 from '@/assets/imgs/projects/feruza1.jpg';
import feruza2 from '@/assets/imgs/projects/feruza2.jpg';
import feruza3 from '@/assets/imgs/projects/feruza3.jpg';
import feruza4 from '@/assets/imgs/projects/feruza4.jpg';
import feruza5 from '@/assets/imgs/projects/feruza5.jpg';

// Sayram
import sayram from '@/assets/imgs/projects/sayram.jpg';

// Abu Dabi
import abudabi1 from '@/assets/imgs/projects/abudabi1.jpg';
import abudabi2 from '@/assets/imgs/projects/abudabi2.jpg';
import abudabi3 from '@/assets/imgs/projects/abudabi3.jpg';

// Ventum Plaza
import ventumplaza1 from '@/assets/imgs/projects/ventumplaza1.jpg';
import ventumplaza2 from '@/assets/imgs/projects/ventumplaza2.jpg';
import ventumplaza3 from '@/assets/imgs/projects/ventumplaza3.jpg';
import ventumplaza4 from '@/assets/imgs/projects/ventumplaza4.jpg';

// Luminar
import luminar1 from '@/assets/imgs/projects/luminar.jpg';
import luminar2 from '@/assets/imgs/projects/luminar2.jpg';
import luminar3 from '@/assets/imgs/projects/luminar3.jpg';
import luminar4 from '@/assets/imgs/projects/luminar4.jpg';

// Fazo Residence
import fazo1 from '@/assets/imgs/projects/fazo1.jpg';
import fazo2 from '@/assets/imgs/projects/fazo2.jpg';
import fazo3 from '@/assets/imgs/projects/fazo3.jpg';

// Oyoyun
import oyoyun1 from '@/assets/imgs/projects/oyoyun1.jpg';
import oyoyun2 from '@/assets/imgs/projects/oyoyun2.jpg';

// Chinobod
import chinibod from '@/assets/imgs/projects/chinibod.jpg';

// Apex Tower
import apex1 from '@/assets/imgs/projects/apex1.jpg';
import apex2 from '@/assets/imgs/projects/apex2.jpg';
import apex3 from '@/assets/imgs/projects/apex3.jpg';

// Jangoh
import jangoh1 from '@/assets/imgs/projects/jangoh1.jpg';
import jangoh2 from '@/assets/imgs/projects/jangoh2.jpg';

// MTT
import mtt from '@/assets/imgs/projects/mtt.jpg';

// Clinic
import clinic from '@/assets/imgs/projects/clinic.jpg';

// Sky Avenue
import skyavenue1 from '@/assets/imgs/projects/skyavenue1.jpg';
import skyavenue2 from '@/assets/imgs/projects/skyavenue2.jpg';
import skyavenue3 from '@/assets/imgs/projects/skyavenue3.jpg';

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
