// UI translations for the Europe pages. The Japan page is an archive and is not translated.
// Data strings (luggage names, card titles, place names...) are translated through `P`,
// keyed by their English text, so new data still works: anything without a phrase shows in English.

export type Lang = 'en' | 'de' | 'fr' | 'it' | 'es';

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'es', label: 'Español', short: 'ES' },
];

const en = {
  'nav.home': 'Home',
  'nav.cards': 'Cards',
  'nav.luggage': 'Luggage',
  'nav.old': 'Old travels · Japan',
  'lang.label': 'Language',

  'hero.greeting': 'Hello · Servus',
  'hero.current': 'Currently an Exchange Student at Technical University of Munich, Germany',
  'hero.currentSub': 'Derzeit Austauschstudent an der Technischen Universität München',
  'hero.linkedin': 'LinkedIn',
  'hero.whatsapp': 'Open WhatsApp',

  'loc.title': 'Locations',
  'loc.duration': 'Travel Duration:',

  'lug.kicker': 'Luggage',
  'lug.title': 'Luggage Info',
  'lug.sub': 'Every bag on this trip. Tap one to see its details and current status.',
  'lug.openPage': 'Open luggage page',
  'lug.size': 'Size',
  'lug.colour': 'Colour',
  'lug.updated': 'Updated',
  'lug.close': 'Close',
  'status.with-owner': 'With owner',
  'status.checked-in': 'Checked in',
  'status.in-storage': 'In storage',
  'status.lost': 'Missing',

  'contact.title': 'Contact Details',
  'contact.phone': 'Phone',
  'contact.germany': 'Germany',
  'contact.indiaPrimary': 'India, Primary',
  'contact.indiaSecondary': 'India, Secondary',
  'contact.toBeAdded': 'to be added',
  'contact.email': 'Email',
  'contact.professional': 'Professional',
  'contact.emergency': 'Emergency',
  'contact.euNumber': 'EU-wide emergency number',
  'lost.title': 'Lost & Found',
  'lost.main': 'If this luggage is found, please contact me using the information above or hand it over to the nearest airline staff. Thank you very much.',
  'lost.alt': 'Falls dieses Gepäck gefunden wird, kontaktieren Sie mich bitte über die oben genannten Angaben oder geben Sie es beim nächsten Flughafenpersonal ab. Vielen Dank.',

  'about.title': 'About Me',
  'about.vertical': 'PROFILE',
  'about.name': 'Full Name',
  'about.nationality': 'Nationality',
  'about.nationalityValue': 'Indian',
  'about.blood': 'Blood Group',
  'about.languages': 'Languages Known',
  'about.english': 'English',
  'about.hindi': 'Hindi',
  'about.marathi': 'Marathi',

  'foot.h': 'Danke schön!',
  'foot.sub': 'Thank you very much!',
  'foot.rights': 'All Rights Reserved.',

  'act.call': 'Call',
  'act.email': 'Email',
  'act.whatsapp': 'WhatsApp',

  'cards.kicker': 'Collection',
  'cards.title': 'Travel cards',
  'cards.sub': 'A collection of the luggage tags made for each trip. Tap a card to flip it.',
  'cards.flip': 'Tap to flip',
};

export type Key = keyof typeof en;
type Dict = Record<Key, string>;

const de: Dict = {
  'nav.home': 'Start',
  'nav.cards': 'Karten',
  'nav.luggage': 'Gepäck',
  'nav.old': 'Frühere Reisen · Japan',
  'lang.label': 'Sprache',

  'hero.greeting': 'Servus · Hallo',
  'hero.current': 'Derzeit Austauschstudent an der Technischen Universität München, Deutschland',
  'hero.currentSub': 'Currently an exchange student at the Technical University of Munich',
  'hero.linkedin': 'LinkedIn',
  'hero.whatsapp': 'WhatsApp öffnen',

  'loc.title': 'Orte',
  'loc.duration': 'Reisezeit:',

  'lug.kicker': 'Gepäck',
  'lug.title': 'Gepäck-Info',
  'lug.sub': 'Jedes Gepäckstück dieser Reise. Antippen für Details und den aktuellen Status.',
  'lug.openPage': 'Gepäck-Seite öffnen',
  'lug.size': 'Größe',
  'lug.colour': 'Farbe',
  'lug.updated': 'Aktualisiert',
  'lug.close': 'Schließen',
  'status.with-owner': 'Beim Besitzer',
  'status.checked-in': 'Aufgegeben',
  'status.in-storage': 'Eingelagert',
  'status.lost': 'Vermisst',

  'contact.title': 'Kontakt',
  'contact.phone': 'Telefon',
  'contact.germany': 'Deutschland',
  'contact.indiaPrimary': 'Indien, primär',
  'contact.indiaSecondary': 'Indien, sekundär',
  'contact.toBeAdded': 'folgt',
  'contact.email': 'E-Mail',
  'contact.professional': 'Beruflich',
  'contact.emergency': 'Notfall',
  'contact.euNumber': 'EU-weite Notrufnummer',
  'lost.title': 'Verloren & Gefunden',
  'lost.main': 'Falls dieses Gepäck gefunden wird, kontaktieren Sie mich bitte über die oben genannten Angaben oder geben Sie es beim nächsten Flughafenpersonal ab. Vielen Dank.',
  'lost.alt': 'If this luggage is found, please contact me using the information above or hand it over to the nearest airline staff. Thank you very much.',

  'about.title': 'Über mich',
  'about.vertical': 'PROFIL',
  'about.name': 'Name',
  'about.nationality': 'Staatsangehörigkeit',
  'about.nationalityValue': 'Indisch',
  'about.blood': 'Blutgruppe',
  'about.languages': 'Sprachen',
  'about.english': 'Englisch',
  'about.hindi': 'Hindi',
  'about.marathi': 'Marathi',

  'foot.h': 'Danke schön!',
  'foot.sub': 'Vielen Dank!',
  'foot.rights': 'Alle Rechte vorbehalten.',

  'act.call': 'Anrufen',
  'act.email': 'E-Mail',
  'act.whatsapp': 'WhatsApp',

  'cards.kicker': 'Sammlung',
  'cards.title': 'Reisekarten',
  'cards.sub': 'Eine Sammlung der Gepäckanhänger jeder Reise. Karte antippen zum Umdrehen.',
  'cards.flip': 'Zum Umdrehen tippen',
};

const fr: Dict = {
  'nav.home': 'Accueil',
  'nav.cards': 'Cartes',
  'nav.luggage': 'Bagages',
  'nav.old': 'Anciens voyages · Japon',
  'lang.label': 'Langue',

  'hero.greeting': 'Bonjour · Servus',
  'hero.current': 'Actuellement étudiant en échange à l’Université technique de Munich, Allemagne',
  'hero.currentSub': 'Derzeit Austauschstudent an der Technischen Universität München',
  'hero.linkedin': 'LinkedIn',
  'hero.whatsapp': 'Ouvrir WhatsApp',

  'loc.title': 'Lieux',
  'loc.duration': 'Durée du voyage :',

  'lug.kicker': 'Bagages',
  'lug.title': 'Infos bagages',
  'lug.sub': 'Tous les bagages de ce voyage. Touchez-en un pour voir ses détails et son statut actuel.',
  'lug.openPage': 'Ouvrir la page bagages',
  'lug.size': 'Taille',
  'lug.colour': 'Couleur',
  'lug.updated': 'Mis à jour',
  'lug.close': 'Fermer',
  'status.with-owner': 'Avec le propriétaire',
  'status.checked-in': 'Enregistré',
  'status.in-storage': 'En consigne',
  'status.lost': 'Manquant',

  'contact.title': 'Coordonnées',
  'contact.phone': 'Téléphone',
  'contact.germany': 'Allemagne',
  'contact.indiaPrimary': 'Inde, principal',
  'contact.indiaSecondary': 'Inde, secondaire',
  'contact.toBeAdded': 'à venir',
  'contact.email': 'E-mail',
  'contact.professional': 'Professionnel',
  'contact.emergency': 'Urgence',
  'contact.euNumber': 'Numéro d’urgence européen',
  'lost.title': 'Objets trouvés',
  'lost.main': 'Si ce bagage est retrouvé, merci de me contacter avec les informations ci-dessus ou de le remettre au personnel de la compagnie aérienne le plus proche. Merci beaucoup.',
  'lost.alt': 'Falls dieses Gepäck gefunden wird, kontaktieren Sie mich bitte über die oben genannten Angaben oder geben Sie es beim nächsten Flughafenpersonal ab. Vielen Dank.',

  'about.title': 'À propos de moi',
  'about.vertical': 'PROFIL',
  'about.name': 'Nom complet',
  'about.nationality': 'Nationalité',
  'about.nationalityValue': 'Indienne',
  'about.blood': 'Groupe sanguin',
  'about.languages': 'Langues parlées',
  'about.english': 'Anglais',
  'about.hindi': 'Hindi',
  'about.marathi': 'Marathi',

  'foot.h': 'Merci beaucoup !',
  'foot.sub': 'Danke schön!',
  'foot.rights': 'Tous droits réservés.',

  'act.call': 'Appeler',
  'act.email': 'E-mail',
  'act.whatsapp': 'WhatsApp',

  'cards.kicker': 'Collection',
  'cards.title': 'Cartes de voyage',
  'cards.sub': 'Une collection des étiquettes de bagage de chaque voyage. Touchez une carte pour la retourner.',
  'cards.flip': 'Touchez pour retourner',
};

const it: Dict = {
  'nav.home': 'Home',
  'nav.cards': 'Carte',
  'nav.luggage': 'Bagagli',
  'nav.old': 'Viaggi passati · Giappone',
  'lang.label': 'Lingua',

  'hero.greeting': 'Ciao · Servus',
  'hero.current': 'Attualmente studente in scambio presso l’Università Tecnica di Monaco, Germania',
  'hero.currentSub': 'Derzeit Austauschstudent an der Technischen Universität München',
  'hero.linkedin': 'LinkedIn',
  'hero.whatsapp': 'Apri WhatsApp',

  'loc.title': 'Luoghi',
  'loc.duration': 'Durata del viaggio:',

  'lug.kicker': 'Bagagli',
  'lug.title': 'Info bagagli',
  'lug.sub': 'Tutti i bagagli di questo viaggio. Tocca una scheda per vedere i dettagli e lo stato attuale.',
  'lug.openPage': 'Apri la pagina bagagli',
  'lug.size': 'Dimensione',
  'lug.colour': 'Colore',
  'lug.updated': 'Aggiornato',
  'lug.close': 'Chiudi',
  'status.with-owner': 'Con il proprietario',
  'status.checked-in': 'Registrato',
  'status.in-storage': 'In deposito',
  'status.lost': 'Mancante',

  'contact.title': 'Contatti',
  'contact.phone': 'Telefono',
  'contact.germany': 'Germania',
  'contact.indiaPrimary': 'India, principale',
  'contact.indiaSecondary': 'India, secondario',
  'contact.toBeAdded': 'da aggiungere',
  'contact.email': 'E-mail',
  'contact.professional': 'Professionale',
  'contact.emergency': 'Emergenza',
  'contact.euNumber': 'Numero di emergenza UE',
  'lost.title': 'Oggetti smarriti',
  'lost.main': 'Se questo bagaglio viene trovato, la preghiamo di contattarmi tramite le informazioni sopra indicate o di consegnarlo al personale della compagnia aerea più vicino. Grazie mille.',
  'lost.alt': 'Falls dieses Gepäck gefunden wird, kontaktieren Sie mich bitte über die oben genannten Angaben oder geben Sie es beim nächsten Flughafenpersonal ab. Vielen Dank.',

  'about.title': 'Chi sono',
  'about.vertical': 'PROFILO',
  'about.name': 'Nome completo',
  'about.nationality': 'Nazionalità',
  'about.nationalityValue': 'Indiana',
  'about.blood': 'Gruppo sanguigno',
  'about.languages': 'Lingue parlate',
  'about.english': 'Inglese',
  'about.hindi': 'Hindi',
  'about.marathi': 'Marathi',

  'foot.h': 'Grazie mille!',
  'foot.sub': 'Danke schön!',
  'foot.rights': 'Tutti i diritti riservati.',

  'act.call': 'Chiama',
  'act.email': 'E-mail',
  'act.whatsapp': 'WhatsApp',

  'cards.kicker': 'Collezione',
  'cards.title': 'Carte di viaggio',
  'cards.sub': 'Una collezione delle etichette bagaglio di ogni viaggio. Tocca una carta per girarla.',
  'cards.flip': 'Tocca per girare',
};

const es: Dict = {
  'nav.home': 'Inicio',
  'nav.cards': 'Tarjetas',
  'nav.luggage': 'Equipaje',
  'nav.old': 'Viajes anteriores · Japón',
  'lang.label': 'Idioma',

  'hero.greeting': 'Hola · Servus',
  'hero.current': 'Actualmente estudiante de intercambio en la Universidad Técnica de Múnich, Alemania',
  'hero.currentSub': 'Derzeit Austauschstudent an der Technischen Universität München',
  'hero.linkedin': 'LinkedIn',
  'hero.whatsapp': 'Abrir WhatsApp',

  'loc.title': 'Lugares',
  'loc.duration': 'Duración del viaje:',

  'lug.kicker': 'Equipaje',
  'lug.title': 'Info del equipaje',
  'lug.sub': 'Todas las maletas de este viaje. Toca una para ver sus detalles y su estado actual.',
  'lug.openPage': 'Abrir la página de equipaje',
  'lug.size': 'Tamaño',
  'lug.colour': 'Color',
  'lug.updated': 'Actualizado',
  'lug.close': 'Cerrar',
  'status.with-owner': 'Con el propietario',
  'status.checked-in': 'Facturado',
  'status.in-storage': 'En consigna',
  'status.lost': 'Perdido',

  'contact.title': 'Contacto',
  'contact.phone': 'Teléfono',
  'contact.germany': 'Alemania',
  'contact.indiaPrimary': 'India, principal',
  'contact.indiaSecondary': 'India, secundario',
  'contact.toBeAdded': 'por añadir',
  'contact.email': 'Correo electrónico',
  'contact.professional': 'Profesional',
  'contact.emergency': 'Emergencia',
  'contact.euNumber': 'Número de emergencias de la UE',
  'lost.title': 'Objetos perdidos',
  'lost.main': 'Si encuentra este equipaje, póngase en contacto conmigo con los datos anteriores o entréguelo al personal de la aerolínea más cercano. Muchas gracias.',
  'lost.alt': 'Falls dieses Gepäck gefunden wird, kontaktieren Sie mich bitte über die oben genannten Angaben oder geben Sie es beim nächsten Flughafenpersonal ab. Vielen Dank.',

  'about.title': 'Sobre mí',
  'about.vertical': 'PERFIL',
  'about.name': 'Nombre completo',
  'about.nationality': 'Nacionalidad',
  'about.nationalityValue': 'India',
  'about.blood': 'Grupo sanguíneo',
  'about.languages': 'Idiomas',
  'about.english': 'Inglés',
  'about.hindi': 'Hindi',
  'about.marathi': 'Maratí',

  'foot.h': '¡Muchas gracias!',
  'foot.sub': 'Danke schön!',
  'foot.rights': 'Todos los derechos reservados.',

  'act.call': 'Llamar',
  'act.email': 'Correo',
  'act.whatsapp': 'WhatsApp',

  'cards.kicker': 'Colección',
  'cards.title': 'Tarjetas de viaje',
  'cards.sub': 'Una colección de las etiquetas de equipaje de cada viaje. Toca una tarjeta para darle la vuelta.',
  'cards.flip': 'Toca para girar',
};

export const DICT: Record<Lang, Dict> = { en, de, fr, it, es };

// [de, fr, it, es]
const P: Record<string, [string, string, string, string]> = {
  // places
  'Munich Residence (Current Address)': ['Wohnsitz München (aktuelle Adresse)', 'Résidence à Munich (adresse actuelle)', 'Residenza a Monaco (indirizzo attuale)', 'Residencia en Múnich (dirección actual)'],
  'University Address (TUM, Munich)': ['Universitätsadresse (TUM, München)', 'Adresse universitaire (TUM, Munich)', 'Indirizzo universitario (TUM, Monaco)', 'Dirección universitaria (TUM, Múnich)'],
  'India Residence (Home)': ['Wohnsitz Indien (Zuhause)', 'Résidence en Inde (domicile)', 'Residenza in India (casa)', 'Residencia en la India (hogar)'],
  'Emergency contact (India)': ['Notfallkontakt (Indien)', 'Contact d’urgence (Inde)', 'Contatto di emergenza (India)', 'Contacto de emergencia (India)'],
  'Munich, Germany': ['München, Deutschland', 'Munich, Allemagne', 'Monaco di Baviera, Germania', 'Múnich, Alemania'],
  // dates
  'Oct 2026': ['Okt. 2026', 'oct. 2026', 'ott. 2026', 'oct. 2026'],
  'Oct 2026 – Mar 2027': ['Okt. 2026 – März 2027', 'oct. 2026 – mars 2027', 'ott. 2026 – mar. 2027', 'oct. 2026 – mar. 2027'],
  '13 Jun – 12 Jul 2026': ['13. Juni – 12. Juli 2026', '13 juin – 12 juil. 2026', '13 giu – 12 lug 2026', '13 jun – 12 jul 2026'],
  // cards
  'Germany Luggage Tag': ['Gepäckanhänger Deutschland', 'Étiquette bagage Allemagne', 'Etichetta bagaglio Germania', 'Etiqueta de equipaje Alemania'],
  'Japan Luggage Tag': ['Gepäckanhänger Japan', 'Étiquette bagage Japon', 'Etichetta bagaglio Giappone', 'Etiqueta de equipaje Japón'],
  'Munich · TUM Exchange': ['München · TUM-Austausch', 'Munich · Échange TUM', 'Monaco · Scambio TUM', 'Múnich · Intercambio TUM'],
  'Japan · Tokyo': ['Japan · Tokio', 'Japon · Tokyo', 'Giappone · Tokyo', 'Japón · Tokio'],
  // luggage names
  'Large Skybags Suitcase': ['Großer Skybags-Koffer', 'Grande valise Skybags', 'Valigia Skybags grande', 'Maleta Skybags grande'],
  'Medium Skybags Suitcase': ['Mittlerer Skybags-Koffer', 'Valise Skybags moyenne', 'Valigia Skybags media', 'Maleta Skybags mediana'],
  'Large Travel Backpack': ['Großer Reiserucksack', 'Grand sac à dos de voyage', 'Zaino da viaggio grande', 'Mochila de viaje grande'],
  'Small Backpack / Laptop Bag': ['Kleiner Rucksack / Laptoptasche', 'Petit sac à dos / sac pour ordinateur', 'Zaino piccolo / borsa per laptop', 'Mochila pequeña / bolso para portátil'],
  'Passport Bag': ['Passtasche', 'Pochette passeport', 'Porta passaporto', 'Funda de pasaporte'],
  // kinds
  Suitcase: ['Koffer', 'Valise', 'Valigia', 'Maleta'],
  Backpack: ['Rucksack', 'Sac à dos', 'Zaino', 'Mochila'],
  Pouch: ['Etui', 'Pochette', 'Custodia', 'Funda'],
  // sizes
  'Large (check-in)': ['Groß (Aufgabegepäck)', 'Grande (bagage en soute)', 'Grande (bagaglio da stiva)', 'Grande (facturación)'],
  Medium: ['Mittel', 'Moyenne', 'Media', 'Mediana'],
  Large: ['Groß', 'Grande', 'Grande', 'Grande'],
  Small: ['Klein', 'Petit', 'Piccolo', 'Pequeño'],
  // colours
  'Sky green': ['Himmelgrün', 'Vert ciel', 'Verde cielo', 'Verde cielo'],
  Grey: ['Grau', 'Gris', 'Grigio', 'Gris'],
  'Dark grey': ['Dunkelgrau', 'Gris foncé', 'Grigio scuro', 'Gris oscuro'],
  'Navy blue': ['Marineblau', 'Bleu marine', 'Blu navy', 'Azul marino'],
  // summaries
  'The main checked-in bag, a large green Skybags hard-shell trolley.': [
    'Das Hauptgepäckstück zum Aufgeben: ein großer grüner Skybags-Hartschalentrolley.',
    'Le bagage principal en soute : un grand trolley rigide Skybags vert.',
    'Il bagaglio principale da stiva: un grande trolley rigido Skybags verde.',
    'La maleta principal facturada: un trolley rígido Skybags grande de color verde.',
  ],
  'Medium-size twin of the large suitcase, same green with 8 wheels.': [
    'Mittelgroßes Pendant zum großen Koffer, gleiches Grün, 8 Rollen.',
    'Jumelle de taille moyenne de la grande valise, même vert, 8 roues.',
    'Gemella di media grandezza della valigia grande, stesso verde, 8 ruote.',
    'Gemela mediana de la maleta grande, mismo verde y 8 ruedas.',
  ],
  'Large grey travel backpack for longer trips.': [
    'Großer grauer Reiserucksack für längere Reisen.',
    'Grand sac à dos de voyage gris pour les longs séjours.',
    'Grande zaino da viaggio grigio per i viaggi più lunghi.',
    'Mochila de viaje grande y gris para viajes largos.',
  ],
  'Everyday small backpack that also carries the laptop.': [
    'Kleiner Alltagsrucksack, der auch den Laptop trägt.',
    'Petit sac à dos du quotidien qui transporte aussi l’ordinateur.',
    'Piccolo zaino di tutti i giorni che porta anche il laptop.',
    'Mochila pequeña de diario que también lleva el portátil.',
  ],
  'Small pouch for the passport and travel documents.': [
    'Kleine Tasche für Reisepass und Reisedokumente.',
    'Petite pochette pour le passeport et les documents de voyage.',
    'Piccola custodia per passaporto e documenti di viaggio.',
    'Pequeña funda para el pasaporte y los documentos de viaje.',
  ],
  // features
  '8 spinner wheels': ['8 Doppelrollen', '8 roues pivotantes', '8 ruote girevoli', '8 ruedas giratorias'],
  'Hard shell': ['Hartschale', 'Coque rigide', 'Guscio rigido', 'Carcasa rígida'],
  'Check-in size': ['Aufgabegepäck-Größe', 'Taille bagage en soute', 'Misura da stiva', 'Tamaño de facturación'],
  'Matches the large one': ['Passend zum großen Koffer', 'Assorti à la grande valise', 'Abbinata a quella grande', 'Combina con la grande'],
  'Travel backpack': ['Reiserucksack', 'Sac à dos de voyage', 'Zaino da viaggio', 'Mochila de viaje'],
  'Large capacity': ['Großes Volumen', 'Grande capacité', 'Grande capacità', 'Gran capacidad'],
  'Laptop compartment': ['Laptopfach', 'Compartiment ordinateur', 'Scomparto laptop', 'Compartimento para portátil'],
  'Daily carry': ['Für den Alltag', 'Usage quotidien', 'Uso quotidiano', 'Uso diario'],
  'Passport & documents': ['Reisepass & Dokumente', 'Passeport et documents', 'Passaporto e documenti', 'Pasaporte y documentos'],
  'Always on person': ['Immer am Körper', 'Toujours sur moi', 'Sempre con me', 'Siempre conmigo'],
};

const IDX: Partial<Record<Lang, number>> = { de: 0, fr: 1, it: 2, es: 3 };

export function translatePhrase(lang: Lang, text: string): string {
  const i = IDX[lang];
  if (i === undefined) return text;
  return P[text]?.[i] ?? text;
}
