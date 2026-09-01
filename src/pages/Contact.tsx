import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { IconClock, IconPhone, IconPin, IconWhatsApp } from '../components/Icons'
import { Seo } from '../components/Seo'
import { services } from '../data/services'
import { site, telHref, whatsappHref } from '../data/site'

function ContactValue({ href, children }: { href?: string; children: string }) {
  if (!href) return <span>{children}</span>
  return <a href={href}>{children}</a>
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const whatsapp = whatsappHref(site.whatsappDisplay, 'Hi CH Gas Works, I would like to enquire about your gas services.')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main id="main">
      <Seo
        title="Contact CH Gas Works | Request a Quote"
        description="Contact CH Gas Works to request a quote for gas installation, repair or maintenance. Contact CH Gas Works by phone or WhatsApp to discuss your gas requirements or request a quote."
        path="/contact"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Request a quote or ask about a gas job</h1>
          <p className="page-hero__lead">
            Use the form or the contact details below. The quickest way to reach CH Gas Works is by WhatsApp. You can also use the enquiry form below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-panel">
            <h2>Contact details</h2>
            <ul className="contact-list">
              <li>
                <IconPhone />
                <div>
                  <span className="contact-list__label">Phone</span>
                  <ContactValue href={telHref(site.phoneDisplay)}>
                    {site.phoneDisplay}
                  </ContactValue>
                </div>
              </li>
              <li>
                <IconWhatsApp />
                <div>
                  <span className="contact-list__label">WhatsApp</span>
                  <ContactValue href={whatsappHref(site.whatsappDisplay)}>
                    {site.whatsappDisplay}
                  </ContactValue>
                </div>
              </li>
              <li>
                <IconPin />
                <div>
                  <span className="contact-list__label">Address / service area</span>
                  <span>
                    {site.address}
                    <br />
                    {site.serviceArea}
                  </span>
                </div>
              </li>
              <li>
                <IconClock />
                <div>
                  <span className="contact-list__label">Business hours</span>
                  <span>{site.hours}</span>
                </div>
              </li>
            </ul>
            {whatsapp && <Button href={whatsapp}>
              <IconWhatsApp />
              Chat on WhatsApp
            </Button>}
          </aside>

          <div className="form-panel">
            <div className="form-panel__notice" role="note">
              Your enquiry can be submitted here for the website interface. WhatsApp is available for direct contact.
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                <h2>Form received locally</h2>
                <p>
                  Nothing has been emailed yet. Once a form service is
                  connected, this step will send your message to CH Gas Works.
                </p>
                <Button type="button" variant="secondary" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
                <h2>Enquiry form</h2>
                <div className="form-grid">
                  <label>
                    Name
                    <input type="text" name="name" autoComplete="name" required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" autoComplete="email" required />
                  </label>
                  <label>
                    Phone
                    <input type="tel" name="phone" autoComplete="tel" required />
                  </label>
                  <label>
                    Service required
                    <select name="service" required defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Other / not sure">Other / not sure</option>
                    </select>
                  </label>
                  <label className="form-grid__full">
                    Message
                    <textarea name="message" rows={6} required />
                  </label>
                </div>
                <Button type="submit">Send enquiry</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
