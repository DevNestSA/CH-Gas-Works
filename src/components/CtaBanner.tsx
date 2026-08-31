import { site } from '../data/site'
import { Button } from './Button'

export function CtaBanner() {
  return <section className="cta-banner"><div className="container cta-banner__inner"><div><p className="eyebrow eyebrow--on-dark">Need a gas solution?</p><h2>Let’s discuss your requirements.</h2><p>From residential installations to commercial, industrial and compressed gas systems, CH Gas Works can help with your project.</p></div><div className="cta-banner__actions"><Button to="/contact">Request a Quote</Button><a className="btn btn--on-dark" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp Us</a></div></div></section>
}
