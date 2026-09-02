export interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
}

export const products = [
  {
    id: 'gas-hobs',
    name: 'Gas Hobs',
    category: 'Kitchen Appliances',
    image: '/images/products/gas-hob.webp',
    description:
      'Professional installation of gas hobs for residential and commercial kitchens.',
  },

  {
    id: 'gas-stoves',
    name: 'Gas & Gas/Electric Stoves',
    category: 'Kitchen Appliances',
    image: '/images/products/gas-stove.jpg',
    description:
      'Installation of gas and combination gas/electric stoves for a range of kitchen applications.',
  },

  {
    id: 'gas-geysers',
    name: 'Gas Geysers',
    category: 'Water Heating',
    image: '/images/products/gas-geyser.png',
    description:
      'Gas geyser installation for efficient domestic and commercial hot-water applications.',
  },

  {
    id: 'lpg-cylinders',
    name: 'LPG Cylinders',
    category: 'Gas Equipment',
    image: '/images/products/lpg-cylinder.webp',
    description:
      'Installation and connection of LPG cylinders and associated gas equipment.',
  },

  {
    id: 'gas-regulators',
    name: 'Gas Regulators',
    category: 'Gas Equipment',
    image: '/images/products/gas-regulator.webp',
    description:
      'Installation and replacement of gas regulators as part of a complete gas system.',
  },

  {
    id: 'gas-burners',
    name: 'Gas Burners',
    category: 'Gas Equipment',
    image: '/images/products/gas-burner.jpg',
    description:
      'Installation of gas burners and equipment for suitable domestic and commercial applications.',
  },

  {
    id: 'solar-lighting',
    name: 'Solar Lighting Systems',
    category: 'Solar Equipment',
    image: '/images/products/solar-lighting.jpg',
    description:
      'Installation of solar lighting systems where suitable for the application.',
  },
]