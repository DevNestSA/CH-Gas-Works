import { Seo } from '../components/Seo'
import { services } from '../data/services'

export function ServicesPage() { return <main id="main"><Seo title="Services | CH Gas Works" description="Residential, commercial, industrial and compressed gas installation, repair and maintenance services from CH Gas Works." />
  <section className="page-hero"><div className="container"><p className="eyebrow eyebrow--on-dark">Our services</p><h1>Gas systems. Different applications. One experienced team.</h1><p>Explore the areas CH Gas Works covers across South Africa.</p></div></section>
  <section className="section service-detail-list"><div className="container">{services.map((s, i) => <article className="service-detail" id={s.slug} key={s.id}><div className="service-detail__number">0{i+1}</div><div><p className="eyebrow">{s.eyebrow}</p><h2>{s.title}</h2><p className="service-detail__lead">{s.summary}</p><p>{s.detail}</p></div><div className="service-detail__items"><span>Scope</span><ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div></section></main> }
