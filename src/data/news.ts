import { NewsItem } from '../types/news';

export const newsItems: NewsItem[] = [
  {
    id: 'golf-cart-parade',
    title: 'Naik and Georg Participate in the Grandview Golf Cart Parade',
    excerpt: 'Recent experiments demonstrate improved plasma stability using innovative magnetic field configurations.',
    content: 'The STAR_Lite team has successfully demonstrated enhanced plasma confinement...',
    image: '/images/parade_mayor.jpg',
    date: '2024-12-14',
    author: 'Dr. Georg Harrer',
    category: 'outreach'
  },
  {
    id: 'doe-grant',
    title: 'STAR_Liteshow finished',
    excerpt: 'HU Fusion receives major funding to advance university-scale fusion research initiatives.',
    content: 'The Department of Energy has recognized the potential of university-scale fusion...',
    image: '/images/star.gif',
    date: '2024-03-10',
    author: 'Dr. Calvin Lowe',
    category: 'awards'
  },
  {
    id: 'student-achievement',
    title: 'Highschool Students Test Equipment and measure Coil resistance',
    excerpt: 'Three HU Fusion students showcase their research at the prestigious IAEA conference.',
    content: 'Hampton University\'s fusion research program continues to demonstrate leadership...',
    image: '/images/KarenYunaMeasure.jpg',
    date: '2024-03-05',
    author: 'Dr. Halima Ali',
    category: 'events'
  }
];