export type Service = {
  id: string
  slug: string
  title: string
  summary: string
  detail: string
  icon: 'install' | 'repair' | 'maintain' | 'appliance' | 'manifold' | 'commercial' | 'industrial' | 'coc'
}

export const services: Service[] = [
  {
    id: 'installations', slug: 'gas-installations', title: 'Gas Installations',
    summary: 'Professional gas installation services for residential, commercial and industrial requirements.',
    detail: 'CH Gas Works provides gas installation services for homes, businesses and industrial environments, with each project approached according to the client’s requirements.', icon: 'install',
  },
  {
    id: 'repairs', slug: 'gas-repairs', title: 'Gas Repairs',
    summary: 'Practical repair services for gas installations and related equipment.',
    detail: 'When a gas installation or related equipment needs attention, CH Gas Works can assess the requirement and provide practical repair support.', icon: 'repair',
  },
  {
    id: 'maintenance', slug: 'gas-maintenance', title: 'Gas Maintenance',
    summary: 'Maintenance services to help keep gas installations operating reliably.',
    detail: 'Regular maintenance can help identify issues early and keep gas installations in good working order. Contact CH Gas Works to discuss your maintenance requirements.', icon: 'maintain',
  },
  {
    id: 'appliances', slug: 'gas-appliances', title: 'Gas Appliances',
    summary: 'Gas appliance services for residential and business requirements.',
    detail: 'CH Gas Works can assist with gas appliance-related requirements. Contact us with the appliance and work you need so the job can be discussed before proceeding.', icon: 'appliance',
  },
  {
    id: 'manifolds', slug: 'gas-manifolds', title: 'Gas Manifolds',
    summary: 'Gas manifold solutions for installations that require organised gas distribution.',
    detail: 'Gas manifolds form part of many multi-appliance installations. CH Gas Works can discuss manifold requirements for residential, commercial or industrial applications.', icon: 'manifold',
  },
  {
    id: 'commercial', slug: 'commercial-gas-solutions', title: 'Commercial Gas Solutions',
    summary: 'Gas installation, repair and maintenance support for commercial properties and businesses.',
    detail: 'Commercial properties often have practical gas requirements that need dependable service. CH Gas Works works with businesses to discuss installation, repair and maintenance needs.', icon: 'commercial',
  },
  {
    id: 'industrial', slug: 'industrial-gas-solutions', title: 'Industrial Gas Solutions',
    summary: 'Gas services for industrial sites and larger operational requirements.',
    detail: 'CH Gas Works provides a structured starting point for industrial gas requirements, including installation, repair and maintenance work. Contact us to discuss your site and requirements.', icon: 'industrial',
  },
  {
    id: 'coc', slug: 'certificates-of-compliance', title: 'Certificates of Compliance',
    summary: 'Assistance with gas compliance documentation where applicable.',
    detail: 'For projects requiring compliance documentation, contact CH Gas Works to discuss the work completed and the documentation required for your installation.', icon: 'coc',
  },
]
