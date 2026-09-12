
export const RESTAURANT = {
  name: 'Poke n Chill',
  address: '83 Rue Leblanc, 75015 Paris',
  phone: '+33143060795',
  phoneDisplay: '01 43 06 07 95',
  email: 'pho520balard@yahoo.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.5267330772629!2d2.2772952696801494!3d48.83709898092616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670752ea62ad5%3A0x2323a9cfdb60459e!2s83%20Rue%20Leblanc%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1784740297305!5m2!1sfr!2sfr',
  uberEatsUrl: 'https://www.ubereats.com/',       // ← à remplacer par le vrai lien
  deliverooUrl: 'https://deliveroo.fr/',           // ← à remplacer par le vrai lien
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
  { label: 'Infos & Contact', href: '#horaires' },
]

/* ───── Poké Composer ───── */

export interface PokeOption {
  name: string
  emoji: string
  extra?: number          // surcoût éventuel (en €)
}

export interface PokeStep {
  id: string
  title: string
  subtitle: string
  emoji: string
  pick: 'one' | 'many'   // sélection unique ou multiple
  options: PokeOption[]
}

export const POKE_BASE_PRICE = 12.9   // prix de départ du bowl

export const POKE_STEPS: PokeStep[] = [
  {
    id: 'base',
    title: 'Ta base',
    subtitle: 'Choisis ta base',
    emoji: '🍚',
    pick: 'one',
    options: [
      { name: 'Riz vinaigré', emoji: '🍚' },
      { name: 'Riz blanc', emoji: '🍙' },
      { name: 'Riz rouge', emoji: '🌾' },
    ],
  },
  {
    id: 'protein',
    title: 'Ta protéine',
    subtitle: 'Choisis ta protéine',
    emoji: '🐟',
    pick: 'one',
    options: [
      { name: 'Saumon', emoji: '🍣' },
      { name: 'Thon', emoji: '🐟' },
      { name: 'Poulet', emoji: '🍗' },
      { name: 'Crevettes', emoji: '🦐' },
    ],
  },
  {
    id: 'legumes',
    title: 'Tes légumes',
    subtitle: 'Choisis tes légumes',
    emoji: '🥬',
    pick: 'many',
    options: [
      { name: 'Carottes', emoji: '🥕' },
      { name: 'Haricots rouges', emoji: '🫘' },
      { name: 'Tofu', emoji: '🧈' },
      { name: 'Avocat', emoji: '🥑' },
      { name: 'Maïs', emoji: '🌽' },
      { name: 'Tomate', emoji: '🍅' },
      { name: 'Chou blanc mariné', emoji: '🥬' },
      { name: 'Radis marinées (daïkon)', emoji: '🔴' },
      { name: 'Concombre', emoji: '🥒' },
      { name: 'Algue', emoji: '🌊' },
      { name: 'Wakamé', emoji: '🌿' },
      { name: 'Betteraves rouges', emoji: '🟣' },
      { name: 'Lentilles', emoji: '🫛' },
      { name: 'Corail', emoji: '🪸' },
    ],
  },
  {
    id: 'toppings',
    title: 'Tes toppings',
    subtitle: 'Choisis tes toppings',
    emoji: '✨',
    pick: 'many',
    options: [
      { name: 'Sésame blanc / noir', emoji: '⚪' },
      { name: 'Oignons frits', emoji: '🧅' },
      { name: 'Cacahuètes', emoji: '🥜' },
      { name: 'Mangue', emoji: '🥭' },
    ],
  },
  {
    id: 'sauce',
    title: 'Ta sauce',
    subtitle: 'Choisis ta sauce',
    emoji: '🫙',
    pick: 'one',
    options: [
      { name: 'Soja sucrée', emoji: '🍯' },
      { name: 'Soja salée', emoji: '🫘' },
      { name: 'Sésame', emoji: '🥜' },
    ],
  },
]

/* ───── Crousty Tacos ───── */

export const CROUSTY_TACO_BASE = [
  'Sauce mayonnaise',
  'Sauce unagi',
  'Riz vinaigré',
  'Salade',
  'Concombre',
  'Carotte',
  'Sésame noir / blanc',
  'Masago',
]

export interface CroustyTaco {
  id: number
  name: string
  protein: string
  emoji: string
}

export const CROUSTY_TACOS: CroustyTaco[] = [
  { id: 1, name: 'Crousty Taco', protein: 'Base uniquement', emoji: '🌮' },
  { id: 2, name: 'Crousty Taco Unagi', protein: 'Anguille', emoji: '🐍' },
  { id: 3, name: 'Crousty Taco Shakz', protein: 'Saumon', emoji: '🍣' },
  { id: 4, name: 'Crousty Taco Thon Cuit', protein: 'Thon cuit', emoji: '🐟' },
  { id: 5, name: 'Crousty Taco Tempura', protein: 'Tempura', emoji: '🦐' },
  { id: 6, name: 'Crousty Taco Surimi', protein: 'Surimi', emoji: '🦀' },
]

/* ───── Sushi Rolls ───── */

export interface SushiRoll {
  id: number
  name: string
  description: string
  price: number
  emoji: string
}

export const SUSHI_ROLLS: SushiRoll[] = [
  {
    id: 1,
    name: 'California Roll',
    description: 'Saumon frais, avocat, concombre, agrémentés de graines de sésame.',
    price: 7.9,
    emoji: '🍣',
  },
  {
    id: 2,
    name: 'Salmon Roll',
    description: 'Saumon frais, avocat mûr, concombre, cream cheese, enrobés de masago.',
    price: 10.9,
    emoji: '🐟',
  },
  {
    id: 3,
    name: 'Crousty Roll',
    description: 'Saumon frais, avocat et cream cheese, accompagnés de concombre, enrobés d\'oignons frits.',
    price: 9.9,
    emoji: '🔥',
  },
  {
    id: 4,
    name: 'Tuna Roll',
    description: 'Thon cuit, avocat et concombre, accompagnés de mayonnaise.',
    price: 10.9,
    emoji: '🐟',
  },
  {
    id: 5,
    name: 'Kazan Roll',
    description: 'Surimi, avocat et concombre, enrobés de masago.',
    price: 9.9,
    emoji: '🦀',
  },
  {
    id: 6,
    name: 'Veggie Roll',
    description: 'Avocat et concombre, enrobés de graines de sésame.',
    price: 8.9,
    emoji: '🌱',
  },
  {
    id: 7,
    name: 'Tempura Roll',
    description: 'Crevette tempura et avocat, enroulés dans une feuille d\'algue nori.',
    price: 8.9,
    emoji: '🦐',
  },
  {
    id: 8,
    name: 'Lok Lak Roll',
    description: 'Riz rouge et bœuf lok lak.',
    price: 10.9,
    emoji: '🥩',
  },
]

/* ───── Bubble Tea ───── */

export const BUBBLE_TEA_PRICE = 5.8  // prix unique

export const BUBBLE_TEA_FRUITY = [
  'Fraise', 'Lychee', 'Mangue', 'Melon', 'Passion', 'Pêche',
]

export const BUBBLE_TEA_MILK = [
  { name: 'Brown Sugar', note: 'Perles de tapioca incluses' },
]

export const BUBBLE_TEA_TOPPINGS = [
  'Fraise', 'Lychee', 'Mangue', 'Melon', 'Pêche',
]

export const BUBBLE_TEA_TOPPING_EXTRA = 0.5  // +0,50 € par topping supplémentaire

/* ───── Desserts & Boissons ───── */

export type SideCategory = 'dessert' | 'boisson'

export interface SideItem {
  id: number
  name: string
  description: string
  price: number
  emoji: string
  category: SideCategory
  popular?: boolean
}

export const SIDE_CATEGORIES: { key: SideCategory | 'all'; label: string; emoji: string }[] = [
  { key: 'all', label: 'Tout', emoji: '🍽️' },
  { key: 'dessert', label: 'Desserts', emoji: '🍨' },
  { key: 'boisson', label: 'Boissons', emoji: '🥤' },
]

export const SIDE_ITEMS: SideItem[] = [
  /* ── Desserts ── */
  {
    id: 1,
    name: 'Mochi Glacé (x3)',
    description: 'Assortiment de mochis : mangue, matcha, fraise.',
    price: 5.5,
    emoji: '🍡',
    category: 'dessert',
    popular: true,
  },
  {
    id: 2,
    name: 'Perles de Coco',
    description: 'Perles de tapioca au lait de coco, mangue fraîche et menthe.',
    price: 5.9,
    emoji: '🥥',
    category: 'dessert',
  },
  {
    id: 3,
    name: 'Cheesecake Yuzu',
    description: 'Cheesecake léger parfumé au yuzu, biscuit spéculoos.',
    price: 6.5,
    emoji: '🍰',
    category: 'dessert',
  },
  {
    id: 4,
    name: 'Tiramisu Matcha',
    description: 'Tiramisu revisité au thé matcha et mascarpone onctueux.',
    price: 6.9,
    emoji: '🍵',
    category: 'dessert',
  },

  /* ── Boissons ── */
  {
    id: 5,
    name: 'Limonade Yuzu',
    description: 'Limonade fraîche au yuzu et menthe, légèrement pétillante.',
    price: 4.5,
    emoji: '🍋',
    category: 'boisson',
  },
  {
    id: 6,
    name: 'Thé Glacé Jasmin',
    description: 'Thé au jasmin infusé à froid, notes florales.',
    price: 3.9,
    emoji: '🌸',
    category: 'boisson',
  },
  {
    id: 7,
    name: 'Smoothie Mangue-Passion',
    description: 'Smoothie onctueux mangue et fruit de la passion.',
    price: 5.9,
    emoji: '🥭',
    category: 'boisson',
  },
  {
    id: 8,
    name: 'Eau Minérale / Pétillante',
    description: 'Bouteille 50cl.',
    price: 2.5,
    emoji: '💧',
    category: 'boisson',
  }
]
