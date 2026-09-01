import { Link } from 'react-router-dom'
import { navLinks, site, telHref, whatsappHref } from '../data/site'
import { services } from '../data/services'
import { Logo } from './Logo'
import { IconPhone, IconPin, IconWhatsApp } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo variant="dark" /><p>Professional gas installation, repair and maintenance solutions for residential, commercial and industrial clients.</p></div>
        <div><h2>Navigation</h2><ul>{navLinks.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}<li><Link to="/contact">Request a Quote</Link></li></ul></div>
        <div><h2>Services</h2><ul>{services.map((service) => <li key={service.id}><Link to={`/services#${service.slug}`}>{service.title}</Link></li>)}</ul></div>
        <div><h2>Contact</h2><ul className="footer-contact"><li><IconPhone /><a href={telHref(site.phoneDisplay)}>+27 82 474 3960</a></li><li><IconWhatsApp /><a href={whatsappHref(site.whatsappDisplay, 'Hi CH Gas Works, I would like to enquire about your gas services.')}>WhatsApp us</a></li><li><IconPin /><span>{site.address}<br />{site.serviceArea}</span></li></ul></div>
      </div>
      <div className="footer-base"><div className="container footer-base__inner"><p>© {year} CH Gas Works. All rights reserved.</p><p>Professional gas solutions</p></div></div>
    </footer>
  )
}
