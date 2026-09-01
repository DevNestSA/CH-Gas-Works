import { Button } from '../components/Button'
import { IconWhatsApp } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/services'
import { site, whatsappHref } from '../data/site'

const trustPoints = [
  { number: '01', title: 'Professional workmanship', text: 'A practical, professional approach to gas installation, repair and maintenance work.' },
  { number: '02', title: 'Safety-focused approach', text: 'Gas work requires care and attention. Safety remains central to the way each job is approached.' },
  { number: '03', title: 'Reliable service', text: 'Clear communication and practical solutions help make every job straightforward for the client.' },
  { number: '04', title: 'A range of clients', text: 'Services are structured for homeowners, property owners, businesses and industrial clients.' },
]

const audiences = [
  { title: 'Residential', text: 'Gas installation, repair and maintenance support for homes and residential properties.' },
  { title: 'Commercial', text: 'Practical gas services for businesses, commercial properties and day-to-day operations.' },
  { title: 'Industrial', text: 'Gas services for industrial environments and larger operational requirements.' },
]

export function HomePage() {
  const whatsapp = whatsappHref(site.whatsappDisplay, 'Hi CH Gas Works, I would like to enquire about your gas services.')

  return (
    <main id="main">
      <Seo title="CH Gas Works | Professional Gas Solutions" description="Professional gas installation, repair and maintenance solutions for residential, commercial and industrial clients." path="/" />

      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--on-dark">Professional gas solutions</p>
            <h1>Professional Gas Solutions You Can Trust</h1>
            <p className="hero__lead">Professional gas installation, repair and maintenance solutions for residential, commercial and industrial clients.</p>
            <div className="hero__actions">
              <Button to="/contact">Request a Quote</Button>
              <Button href={whatsapp} variant="secondary">
                <IconWhatsApp />
                WhatsApp Us
              </Button>
            </div>
          </div>
          <figure className="hero__visual">
            <img src="/hero-placeholder.svg" alt="Gas installation equipment and professional gas work" width="720" height="900" />
            <figcaption>Gas installation &amp; maintenance</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="services-preview-heading">
        <div className="container">
          <SectionHeading id="services-preview-heading" eyebrow="What we do" title="Gas services for homes and businesses" intro="From installations and repairs to maintenance and gas-related solutions, CH Gas Works is here to discuss your requirements." />
          <div className="card-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="trust-heading">
        <div className="container">
          <SectionHeading id="trust-heading" eyebrow="Why CH Gas Works" title="A practical approach to gas work" />
          <div className="trust-grid">{trustPoints.map((point) => <article key={point.number} className="trust-item"><span className="trust-item__num">{point.number}</span><h3>{point.title}</h3><p>{point.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="audiences-heading">
        <div className="container">
          <SectionHeading id="audiences-heading" eyebrow="Who we work with" title="Residential, commercial and industrial" tone="light" />
          <div className="audience-list">{audiences.map((item, index) => <article key={item.title} className="audience-row"><span className="audience-row__index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>
    </main>
  )
}
