export const MENU_URL =
  'https://cdn.website.dish.co/media/58/85/8684167/Menu-1.pdf'

export const RESTAURANT = {
  name: 'Poke n Chill',
  address: '83 Rue Leblanc, 75015 Paris',
  phone: '+33143060795',
  phoneDisplay: '01 43 06 07 95',
  email: 'pho520balard@yahoo.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.054575201348!2d2.275560576845586!3d48.83707510220591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67075297985ff%3A0xe51d45fa8cb7e959!2sPho%20520!5e0!3m2!1sfr!2sfr!4v1784550689531!5m2!1sfr!2sfr',
}

export interface Specialty {
  emoji: string
  title: string
  desc: string
}

export const SPECIALTIES: Specialty[] = [
  {
    emoji: '🍜',
    title: 'Phở traditionnel',
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
    title: 'Soupe thaï',
    desc: 'Saveurs thaïlandaises épicées et parfumées au lait de coco.',
  },
  {
    emoji: '🥬',
    title: 'Plats végétariens',
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
