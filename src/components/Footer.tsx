import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { services } from '../data/services'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" compact={false} />

          <p>
            Professional gas installation, repairs, maintenance and compressed
            gas services for residential, commercial and industrial clients
            across South Africa.
          </p>

          <div className="footer-social">
            <a
              className="footer-whatsapp"
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span>↗</span>
            </a>

            <a
              className="footer-facebook"
              href="https://www.facebook.com/profile.php?id=61593661547081"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit CH Gas Works on Facebook"
              title="CH Gas Works on Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.027 1.792-4.7 4.533-4.7 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.885v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"
                />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div>
          <h2>Company</h2>
          <ul>
            {navLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map(s => (
              <li key={s.id}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <span>PHONE</span>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </li>

            <li>
              <span>EMAIL</span>
              <a href={site.emailHref}>{site.email}</a>
            </li>

            <li>
              <span>HOURS</span>
              <strong>{site.hours}</strong>
            </li>

            <li>
              <span>AREA</span>
              <strong>South Africa</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} CH Gas Works. All rights reserved.
        </span>

        <span>Gas solutions you can trust.</span>
      </div>
    </footer>
  )
}