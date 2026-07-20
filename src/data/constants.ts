export const MENU_URL =
  'https://cdn.website.dish.co/media/58/85/8684167/Menu-1.pdf'

export const RESTAURANT = {
  name: 'Phở 520',
  address: '85 Rue Leblanc, 75015 Paris',
  phone: '+33145511158',
  phoneDisplay: '01 45 51 11 58',
  email: 'pho520balard@yahoo.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.1!2d2.278135!3d48.8370839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701b4f58251b%3A0x5c5931309db0ee65!2s85%20Rue%20Leblanc%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1',
}

export interface Specialty {
  emoji: string
  title: string
  desc: string
}

export const SPECIALTIES: Specialty[] = [
  {
    emoji: '🍜',
    title: 'Phở Traditionnel',
    desc: 'Bouillon mijoté pendant des heures, nouilles de riz et herbes fraîches.',
  },
  {
    emoji: '🥖',
    title: 'Bánh Mì',
    desc: 'Sandwich croustillant garni de viandes, pickles et coriandre.',
  },
  {
    emoji: '🥢',
    title: 'Bò Bún',
    desc: 'Vermicelles, bœuf grillé, nems et sauce nuoc-mam.',
  },
  {
    emoji: '🫕',
    title: 'Soupe Thaï',
    desc: 'Saveurs thaïlandaises épicées et parfumées au lait de coco.',
  },
  {
    emoji: '🥬',
    title: 'Plats Végétariens',
    desc: 'Une sélection de plats sains et savoureux à base de légumes.',
  },
  {
    emoji: '🍨',
    title: 'Desserts',
    desc: 'Crème glacée, fruits frais et douceurs vietnamiennes.',
  },
]

export interface HourEntry {
  day: string
  time: string
  closed?: boolean
}

export const HOURS: HourEntry[] = [
  { day: 'Lundi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Mardi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Mercredi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Jeudi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Vendredi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Samedi', time: '11h45 – 14h15 / 18h45 – 22h15' },
  { day: 'Dimanche', time: 'Fermé', closed: true },
]

export const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Spécialités', href: '#specialties' },
  { label: 'Horaires', href: '#horaires' },
  { label: 'Contact', href: '#contact' },
]
