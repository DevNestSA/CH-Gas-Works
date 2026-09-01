import { Link } from 'react-router-dom'
import type { Service } from '../data/services'
import { serviceIcons } from './Icons'
import { IconArrow } from './Icons'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon]

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon />
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" to={`/services#${service.slug}`}>
        Learn more
        <IconArrow />
      </Link>
    </article>
  )
}
