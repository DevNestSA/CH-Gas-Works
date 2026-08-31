import { Link } from 'react-router-dom'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  const icons = { home: '⌂', commercial: '▦', industrial: '◉', compressed: '◎' }
  return <article className="service-card">
    <div className="service-card__top"><span className="service-card__icon">{icons[service.icon]}</span><span>0{['domestic','commercial','industrial','compressed'].indexOf(service.id)+1}</span></div>
    <p className="eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.summary}</p>
    <ul>{service.items.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul>
    <Link className="service-card__link" to={`/services#${service.slug}`}>Explore service <span>→</span></Link>
  </article>
}
