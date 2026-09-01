export interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 'aeg-gas-hob',
    name: 'AEG Gas Hob',
    category: 'Gas Hobs',
    description:
      'Built-in gas hob with four burners for efficient and reliable cooking.',
    image: '/images/products/aeg-gas-hob.jpg',
  },
  {
    id: 'hisense-5-burner-gas-hob',
    name: 'Hisense 5-Burner Gas Hob',
    category: 'Gas Hobs',
    description:
      'Spacious five-burner gas hob designed for performance and convenience.',
    image: '/images/products/hisense-5-burner-gas-hob.jpg',
  },
  {
    id: 'paloma-26l-gas-geyser',
    name: 'Paloma 26 L/min Gas Geyser',
    category: 'Gas Geysers',
    description:
      'High-capacity gas geyser ideal for medium to large homes and multiple bathrooms.',
    image: '/images/products/paloma-26l-gas-geyser.jpg',
  },
  {
    id: 'defy-dgs902',
    name: 'Defy Gas/Electric Stove Black DGS902',
    category: 'Gas / Electric Stoves',
    description:
      'Versatile gas/electric stove in a black finish with oven and hob for everyday cooking.',
    image: '/images/products/defy-dgs902.jpg',
  },
  {
    id: 'solar-lighting-kit',
    name: 'Solar Lighting Kit',
    category: 'Solar Lighting',
    description:
      'Complete solar lighting solution for reliable off-grid energy and illumination.',
    image: '/images/products/solar-lighting-kit.jpg',
  },
]