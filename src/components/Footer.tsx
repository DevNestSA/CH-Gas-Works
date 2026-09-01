import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { services } from '../data/services'
import { Logo } from './Logo'

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand"><Logo variant="light" compact={false} /><p>Professional gas installation, repairs, maintenance and compressed gas services for residential, commercial and industrial clients across South Africa.</p><a className="footer-whatsapp" href={site.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></div>
      <div><h2>Company</h2><ul>{navLinks.map(l => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul></div>
      <div><h2>Services</h2><ul>{services.map(s => <li key={s.id}><Link to={`/services#${s.slug}`}>{s.title}</Link></li>)}</ul></div>
      <div><h2>Contact</h2><ul className="footer-contact"><li><span>PHONE</span><a href={site.phoneHref}>{site.phoneDisplay}</a></li><li><span>EMAIL</span><a href={site.emailHref}>{site.email}</a></li><li><span>HOURS</span><strong>{site.hours}</strong></li><li><span>AREA</span><strong>South Africa</strong></li></ul></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} CH Gas Works. All rights reserved.</span><span>Gas solutions you can trust.</span></div>
  </footer>
}
