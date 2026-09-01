import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceCard } from '../components/ServiceCard'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { services } from '../data/services'

export function HomePage() {
  return <main id="main">
    <Seo title="CH Gas Works | Professional Gas Solutions" description="Professional gas installation, repairs, maintenance and compressed gas services across South Africa." />
    <section className="hero">
      <div className="hero__grid container">
        <div className="hero__copy"><p className="eyebrow eyebrow--on-dark">Gas installation • repairs • maintenance</p><h1>Professional gas solutions. <em>Built to last.</em></h1><p className="hero__lead">From residential gas installations to commercial, industrial and compressed gas systems, CH Gas Works delivers practical expertise backed by decades of industry experience.</p><div className="section-actions"><Button to="/contact">Request a Quote</Button><a className="btn btn--on-dark" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {site.whatsappDisplay}</a></div><div className="hero__facts"><div><strong>1999</strong><span>gas experience since</span></div><div><strong>2012</strong><span>business established</span></div><div><strong>RSA</strong><span>work across South Africa</span></div></div></div>
        <div className="hero__visual"><div className="hero__ring"><span>CH</span><div className="hero__flame">♨</div></div><div className="hero__visual-card"><span>CH GAS WORKS</span><strong>INSTALL • REPAIR • MAINTAIN</strong></div></div>
      </div>
      <div className="hero__edge" />
    </section>

    <section className="section intro"><div className="container intro__grid"><div><p className="eyebrow">Built on experience</p><h2>Gas work with a long-term view.</h2></div><div><p>CH Gas Works started working with gas in 1999 after joining Afrox, and the business was started in 2012. Today the focus is on delivering dependable gas installation, repair and maintenance services across South Africa.</p><Link className="text-link" to="/about">Our story <span>→</span></Link></div></div></section>

    <section className="section section--paper services-preview"><div className="container"><div className="section-heading"><p className="eyebrow">What we do</p><h2>Gas services across four specialist areas.</h2><p>Residential, commercial, industrial and compressed gas work — clearly presented, professionally delivered.</p></div><div className="service-grid">{services.map(s => <ServiceCard key={s.id} service={s} />)}</div><div className="section-actions section-actions--center"><Button to="/services" variant="secondary">View all services</Button></div></div></section>

    <section className="section experience"><div className="container experience__grid"><div className="experience__visual"><span>1999</span><strong>25+ years</strong><small>of gas industry experience</small></div><div><p className="eyebrow">Experience matters</p><h2>From industry experience to an independent business.</h2><p>Experience gained from working with Afrox from 1999 laid the foundation for CH Gas Works. Since 2012, that experience has been applied through an independent business serving clients with gas installation, maintenance and repair requirements.</p><div className="stat-row"><div><strong>1999</strong><span>Started working with gas</span></div><div><strong>2012</strong><span>CH Gas Works established</span></div><div><strong>RSA</strong><span>Service coverage</span></div></div></div></div></section>

  </main>
}
