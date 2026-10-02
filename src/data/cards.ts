// Travel card collection. Add a card by dropping its images in /public and adding an entry.
// Entries without `front` render a "coming soon" placeholder.

export interface TravelCard {
  id: string;
  title: string;
  region: string;
  period: string;
  front?: string;
  back?: string;
  aspect: string; // CSS aspect-ratio of the card images
  accent: string; // used for the placeholder
  note?: string;
}

export const CARDS: TravelCard[] = [
  {
    id: 'germany',
    title: 'Germany Luggage Tag',
    region: 'Munich · TUM Exchange',
    period: 'Oct 2026 – Mar 2027',
    front: '/travel-info-card-germany-front.png',
    back: '/travel-info-card-germany-back.png',
    aspect: '631 / 365',
    accent: '#003399',
  },
  {
    id: 'japan',
    title: 'Japan Luggage Tag',
    region: 'Japan · Tokyo',
    period: '13 Jun – 12 Jul 2026',
    front: '/travel-info-card-japan-front.jpeg',
    back: '/travel-info-card-japan-back.jpeg',
    aspect: '1280 / 805',
    accent: '#c00000',
  },
];
