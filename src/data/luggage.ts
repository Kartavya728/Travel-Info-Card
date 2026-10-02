// Luggage inventory. Replace `image` with a real photo in /public/luggage when you have it.

export type LuggageStatus = 'with-owner' | 'checked-in' | 'in-storage' | 'lost';

export interface LuggageItem {
  id: string;
  name: string;
  kind: 'Suitcase' | 'Backpack' | 'Pouch';
  size: string;
  color: string;
  swatch: string;
  image: string;
  summary: string;
  features: string[];
  status: LuggageStatus;
  location: string;
  updated: string;
}

const STATUS = { status: 'with-owner' as LuggageStatus, location: 'Munich, Germany', updated: 'Oct 2026' };

export const LUGGAGE: LuggageItem[] = [
  {
    id: 'large-suitcase',
    name: 'Large Skybags Suitcase',
    kind: 'Suitcase',
    size: 'Large (check-in)',
    color: 'Sky green',
    swatch: '#5fcf9a',
    image: '/luggage/large-suitcase.svg',
    summary: 'The main checked-in bag, a large green Skybags hard-shell trolley.',
    features: ['8 spinner wheels', 'Hard shell', 'Skybags', 'Check-in size'],
    ...STATUS,
  },
  {
    id: 'medium-suitcase',
    name: 'Medium Skybags Suitcase',
    kind: 'Suitcase',
    size: 'Medium',
    color: 'Sky green',
    swatch: '#5fcf9a',
    image: '/luggage/medium-suitcase.svg',
    summary: 'Medium-size twin of the large suitcase, same green with 8 wheels.',
    features: ['8 spinner wheels', 'Hard shell', 'Skybags', 'Matches the large one'],
    ...STATUS,
  },
  {
    id: 'large-backpack',
    name: 'Large Travel Backpack',
    kind: 'Backpack',
    size: 'Large',
    color: 'Grey',
    swatch: '#8b93a0',
    image: '/luggage/large-backpack.svg',
    summary: 'Large grey travel backpack for longer trips.',
    features: ['Grey', 'Travel backpack', 'Large capacity'],
    ...STATUS,
  },
  {
    id: 'small-backpack',
    name: 'Small Backpack / Laptop Bag',
    kind: 'Backpack',
    size: 'Small',
    color: 'Dark grey',
    swatch: '#7a8290',
    image: '/luggage/small-backpack.svg',
    summary: 'Everyday small backpack that also carries the laptop.',
    features: ['Laptop compartment', 'Daily carry', 'Small'],
    ...STATUS,
  },
  {
    id: 'passport-bag',
    name: 'Passport Bag',
    kind: 'Pouch',
    size: 'Pouch',
    color: 'Navy blue',
    swatch: '#2b4a8c',
    image: '/luggage/passport-bag.svg',
    summary: 'Small pouch for the passport and travel documents.',
    features: ['Passport & documents', 'Always on person'],
    ...STATUS,
  },
];
