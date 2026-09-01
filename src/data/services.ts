export type Service = {
  id: string
  slug: string
  title: string
  eyebrow: string
  summary: string
  detail: string
  icon: 'home' | 'commercial' | 'industrial' | 'compressed'
  items: string[]
}

export const services: Service[] = [
  {
    id: 'domestic',
    slug: 'domestic-residential',
    title: 'Domestic & Residential',
    eyebrow: 'Homes & residential properties',
    summary: 'Professional gas work for homes, including installations and Certificates of Compliance for insurance requirements.',
    detail: 'CH Gas Works provides gas installation services for residential properties, with a focus on practical, professional installations for everyday home applications.',
    icon: 'home',
    items: ['Certificates of Compliance for insurance', 'Gas hob installations', 'Gas stove installations', 'Gas geyser installations'],
  },
  {
    id: 'commercial',
    slug: 'commercial-gas-installations',
    title: 'Commercial Gas Installations',
    eyebrow: 'Commercial & food-service sites',
    summary: 'Gas installation solutions for restaurants, food trailers, school feeding schemes and factories.',
    detail: 'Commercial installations are tailored to the requirements of the site and equipment, including both liquid and vapour gas installations.',
    icon: 'commercial',
    items: ['Restaurant equipment', 'Food trailers', 'School feeding schemes', 'Factories', 'Liquid gas installations', 'Vapour gas installations'],
  },
  {
    id: 'industrial',
    slug: 'industrial-gas-installations',
    title: 'Industrial Gas Installations',
    eyebrow: 'Bulk LPG & industrial systems',
    summary: 'Installation, maintenance and repair services for bulk LPG tank systems and industrial gas applications.',
    detail: 'Industrial work includes bulk LPG tank installations together with ongoing maintenance, repairs and re-certification of bulk tanks.',
    icon: 'industrial',
    items: ['Bulk LPG tank installations', 'Bulk tank maintenance', 'Bulk tank repairs', 'Re-certification of bulk tanks'],
  },
  {
    id: 'compressed',
    slug: 'compressed-gasses',
    title: 'Compressed Gasses',
    eyebrow: 'Medical & specialist gas systems',
    summary: 'Installation, repairs and maintenance for medical, laboratory and specialist compressed gas systems.',
    detail: 'CH Gas Works works with a broad range of compressed gas and vacuum systems, supporting installations, repairs and maintenance.',
    icon: 'compressed',
    items: ['Medical Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium', 'Acetylene', 'Argon', 'Entenox', 'Nitrous Oxide', 'Vacuum systems', 'Medical Air'],
  },
]
