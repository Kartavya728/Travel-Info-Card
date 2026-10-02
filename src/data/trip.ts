// Edit this file to update the Europe page.

export const TRIP = {
  title: 'Europe 2026–27',
  durationLabel: 'Oct 2026 – Mar 2027',
  tagline: 'TUM Exchange Student · IIT Mandi',
};

export interface Place {
  id: 'munich' | 'tum' | 'india';
  title: string;
  address: string;
  mapQuery: string;
}

export const PLACES: Place[] = [
  {
    id: 'munich',
    title: 'Munich Residence (Current Address)',
    address: 'Max-Bill-Straße 67, Room 0428, 80807 München, Germany',
    mapQuery: 'Max-Bill-Straße 67, 80807 München, Germany',
  },
  {
    id: 'tum',
    title: 'University Address (TUM, Munich)',
    address: 'Technical University of Munich, Arcisstraße 21, 80333 München, Germany',
    mapQuery: 'Technical University of Munich, Arcisstraße 21, 80333 München',
  },
  {
    id: 'india',
    title: 'India Residence (Home)',
    address: 'Flat No. 4, Radhey Niwas, Jadhavvasti, Kalas, Pune – 411015, Maharashtra, India',
    mapQuery: 'Radhey Niwas, Jadhavvasti, Kalas, Pune, Maharashtra, India',
  },
];

export const CONTACT = {
  germanPhone: '+49', // fill in once the German SIM is active, e.g. '+49 151 2345678'
  indianPhones: ['+91 8668944955', '+91 7507297767'],
  primaryEmail: 'go43niv@mytum.de',
  secondaryEmail: 'b24199@students.iitmandi.ac.in',
  emergencyName: 'Emergency contact (India)',
  emergencyPhone: '+91 8149244074',
};

export const EMERGENCY_EU = '112';

export const WHATSAPP_URL = 'https://wa.me/918668944955';
