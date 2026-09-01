import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'

const values = [
  { title: 'Professionalism', text: 'Every job deserves a clear, practical and professional approach from the first conversation through to completion.' },
  { title: 'Safety', text: 'Gas work needs to be treated with care. Safety and responsible workmanship are central to the service provided.' },
  { title: 'Practical service', text: 'The focus is on understanding what the client needs and providing a straightforward gas solution for the job.' },
]

export function AboutPage() {
  return (
    <main id="main">
      <Seo title="About CH Gas Works | Professional Gas Services" description="Learn about CH Gas Works and its professional approach to gas installation, repair and maintenance for residential, commercial and industrial clients." path="/about" />
      <section className="page-hero"><div className="container"><p className="eyebrow">About</p><h1>A professional gas company built around safe, practical work</h1><p className="page-hero__lead">CH Gas Works provides gas installation, repair and maintenance services for homeowners, property owners, businesses and industrial clients.</p></div></section>
      <section className="section"><div className="container prose-layout"><SectionHeading eyebrow="Introduction" title="Who we are" /><div className="prose"><p>CH Gas Works is a South African gas installation and maintenance company focused on practical gas solutions for residential, commercial and industrial clients.</p><p>Whether the requirement is a new installation, a repair, maintenance or a gas-related project, the goal is to provide a professional service and a solution suited to the job.</p></div></div></section>
      <section className="section section--mist"><div className="container prose-layout"><SectionHeading eyebrow="Our approach" title="Built around the work" /><div className="prose"><p>CH Gas Works takes a straightforward approach: understand the requirement, assess the work involved and provide a practical solution.</p><p>The company is positioned to work with homeowners, businesses and industrial clients, with safety and professional workmanship kept at the centre of the service.</p></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="How we work" title="Mission and values" /><div className="value-grid">{values.map((value) => <article key={value.title} className="value-card"><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>
      <section className="section section--ink"><div className="container split-block"><div><p className="eyebrow eyebrow--on-dark">Safety first</p><h2>Professionalism and safety</h2></div><div className="prose prose--on-dark"><p>Gas work needs to be approached responsibly. CH Gas Works places professional workmanship and safety at the centre of its service.</p><p>For a specific installation, repair or maintenance requirement, get in touch to discuss the work and the appropriate next step.</p></div></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="Capability" title="Built for more than one type of client" intro="CH Gas Works works across residential, commercial and industrial requirements." /><div className="audience-list audience-list--light"><article className="audience-row"><span className="audience-row__index">01</span><h3>Residential</h3><p>Gas solutions for homes and residential properties.</p></article><article className="audience-row"><span className="audience-row__index">02</span><h3>Commercial</h3><p>Gas services for businesses and commercial premises.</p></article><article className="audience-row"><span className="audience-row__index">03</span><h3>Industrial</h3><p>Gas services for industrial clients and larger operational requirements.</p></article></div><div className="section-actions"><Button to="/contact">Request a Quote</Button><Button to="/services" variant="secondary">View services</Button></div></div></section>
    </main>
  )
}
