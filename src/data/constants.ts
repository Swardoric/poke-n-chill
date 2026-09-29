
export const RESTAURANT = {
  name: 'Poke n Chill',
  address: '83 Rue Leblanc, 75015 Paris',
  phone: '+33143060795',
  phoneDisplay: '01 43 06 07 95',
  email: 'pokenchillbalard@yahoo.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.5267330772629!2d2.2772952696801494!3d48.83709898092616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670752ea62ad5%3A0x2323a9cfdb60459e!2s83%20Rue%20Leblanc%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1784740297305!5m2!1sfr!2sfr',
  uberEatsUrl: 'https://www.ubereats.com/fr/store/poke-n-chill/IhPtizZ2S82O_M0uRzw-Eg?diningMode=DELIVERY&surfaceName=',       // ← à remplacer par le vrai lien
  deliverooUrl: 'https://deliveroo.fr/',           // ← à remplacer par le vrai lien
}

export interface Specialty {
  emoji: string
  title: string
  desc: string
}

export const SPECIALTIES: Specialty[] = [
  {
    emoji: '🥗',
    title: 'Poke Bowl',
    desc: 'Une base savoureuse et des ingrédients frais pour créer le bowl qui vous ressemble!',
  },
  {
    emoji: '🍣',
    title: 'Sushi Roll',
    desc: 'Des rouleaux généreux et frais, une nouvelle manière de savourer vos sushis!',
  },
  {
    emoji: '🌮',
    title: 'Crousty Taco',
    desc: 'Un taco garni de nombreux toppings, enveloppé dune feuille dalgue nori qui en fera craquer plus dun!',
  },
  {
    emoji: '🍙',
    title: 'Onigiri',
    desc: 'Du riz japonais délicatement façonné, fourré de savoureuse garnitures!',
  },
  {
    emoji: '🥬',
    title: 'Inari',
    desc: 'De petites poches de tofu frit garnie de riz vinaigrés accompagnés de ses toppings.',
  },
  {
    emoji: '🧋',
    title: 'Bubble Tea',
    desc: 'Une boisson fraîche et gourmande avec un thé parfumé pour parfaire pour compléter vos plats.',
  },
]

export interface HourEntry {
  day: string
  time: string
  closed?: boolean
}

export const HOURS: HourEntry[] = [
  { day: 'Lundi', time: '11h30 - 21h30' },
  { day: 'Mardi', time: '11h30 - 21h30' },
  { day: 'Mercredi', time: '11h30 - 21h30' },
  { day: 'Jeudi', time: '11h30 - 21h30' },
  { day: 'Vendredi', time: '11h30 - 21h30' },
  { day: 'Samedi', time: '11h30 - 21h30' },
  { day: 'Dimanche', time: 'Fermé', closed: true },
]

export const NAV_LINKS = [
  { label: 'À propos', href: '/' },
  { label: 'Infos & Contact', href: '/infos' },
]

/* ───── Poké Composer ───── */

export interface PokeOption {
  name: string
  emoji: string
  extra?: number
}

export interface PokeStep {
  id: string
  title: string
  subtitle: string
  emoji: string
  pick: 'one' | 'many'
  options: PokeOption[]
}

export interface PokeBowlSize {
  label: string
  price: number
  base: number
  proteins: number
  legumes: number
  sauces: number
  formulaPrice: number   // PokeBowl + Boisson 33cl
}

export const POKE_SIZES: PokeBowlSize[] = [
  { label: 'M', price: 11.9, base: 1, proteins: 1, legumes: 4, sauces: 1, formulaPrice: 12.9 },
  { label: 'L', price: 14.9, base: 1, proteins: 2, legumes: 5, sauces: 2, formulaPrice: 15.9 },
]

export const POKE_EXTRAS = [
  { name: 'Extra légume', price: 1 },
  { name: 'Extra protéine', price: 2 },
  { name: 'Extra sauce', price: 0.5 },
]

export const POKE_STEPS: PokeStep[] = [
  {
    id: 'base',
    title: 'Ta base',
    subtitle: 'Choisis ta base',
    emoji: '🍚',
    pick: 'one',
    options: [
      { name: 'Riz noir (complet)', emoji: '🍚' },
      { name: 'Riz blanc', emoji: '🍚' },
      { name: 'Salade', emoji: '🥬' },
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
      { name: 'Poulet citronnelle', emoji: '🍗' },
      { name: 'Crevettes', emoji: '🦐' },
      { name: 'Gyoza (4 pièces)', emoji: '🥟' },
    ],
  },
  {
    id: 'legumes',
    title: 'Tes légumes',
    subtitle: 'Choisis tes légumes (La disponnibilité de chaques légumes peuvent varier)',
    emoji: '🥬',
    pick: 'many',
    options: [
      { name: 'Carottes', emoji: '🥕' },
      { name: 'Haricots rouges', emoji: '🫘' },
      { name: 'Tofu', emoji: '🧈' },
      { name: 'Avocat', emoji: '🥑' },
      { name: 'Maïs', emoji: '🌽' },
      { name: 'Tomate-cerise', emoji: '🍅' },
      { name: 'Chou blanc', emoji: '🥬' },
      { name: 'Chou rouge', emoji: '🥬' },
      { name: 'Radis marinées (daïkon)', emoji: '🔴' },
      { name: 'Concombre', emoji: '🥒' },
      { name: 'Algue Wakame', emoji: '🌊' },
      { name: 'Brocolis', emoji: '🥦' },
      { name: 'Betteraves', emoji: '🟣' },
      { name: 'Lentilles', emoji: '🫘' },
      { name: 'Mozarella', emoji: '🪸' },
      { name: 'Mangue', emoji: '🥭' },
      { name: 'Edamame', emoji: '🫛' },
      { name: 'Oignons rouge', emoji: '🧅' },
      { name: 'Ananas', emoji: '🍍' },
      { name: 'Artichauts', emoji: '🥬' },
      { name: 'Champignon', emoji: '🍄‍🟫' },
      { name: 'Gingembre', emoji: '🫚' },
      { name: 'Olive', emoji: '🫒' },
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
      { name: 'Wasabi', emoji: '🟢' },
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
  { id: 1, name: 'Crousty Taco Poulet', protein: 'Poulet citronnelle', emoji: '🌮' },
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
    price: 10.9,
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
    price: 10.9,
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
    price: 10.9,
    emoji: '🦀',
  },
  {
    id: 6,
    name: 'Veggie Roll',
    description: 'Avocat et concombre, enrobés de graines de sésame.',
    price: 10.9,
    emoji: '🌱',
  },
  {
    id: 7,
    name: 'Tempura Roll',
    description: 'Crevette tempura et avocat, enroulés dans une feuille d\'algue nori.',
    price: 10.9,
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
  'Fraise', 'Lychee', 'Mangue', 'Myrtille', 'Passion', 'Pêche',
]

export const BUBBLE_TEA_MILK = [
  { name: 'Brown Sugar', note: 'Perles de tapioca incluses' },
]

export const BUBBLE_TEA_TOPPINGS = [
  'Fraise', 'Lychee', 'Mangue', 'Myrtille', 'Pêche','passion',
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
    name: 'Mochi',
    description: 'Thé vert/myrtille/yuzu/cerise/sakura/chocolat/ sésame/mangue.',
    price: 3,
    emoji: '🍡',
    category: 'dessert',
    popular: false,
  },
  {
    id: 2,
    name: 'Tiramisu',
    description: 'Cookies & cream / chocolat & caramel / fraise.',
    price: 3,
    emoji: '🥥',
    category: 'dessert',
  },
  {
    id: 3,
    name: 'Mousse au chocolat',
    description: '',
    price: 3,
    emoji: '🍫',
    category: 'dessert',
  },
  {
    id: 4,
    name: 'Gateaux coeur coulant au chocolat',
    description: '',
    price: 6.9,
    emoji: '🍫',
    category: 'dessert',
  },

  /* ── Boissons ── */
  
 
]
