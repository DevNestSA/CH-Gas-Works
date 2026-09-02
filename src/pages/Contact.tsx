import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { services } from '../data/services'
import emailjs from '@emailjs/browser'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [setOpen] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()

  setSubmitting(true)
  setError('')

  const form = e.currentTarget
  const formData = new FormData(form)

  const templateParams = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  }

  try {
    console.log('PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    console.log('SERVICE ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('TEMPLATE ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )

    setSubmitted(true)
    form.reset()
  } catch (error) {
    console.error('EmailJS error:', error)

    setError(
      'We could not send your enquiry right now. Please try again or contact us directly.'
    )
  } finally {
    setSubmitting(false)
  }
}

  return (
    <main id="main">

      <Seo
        title="Contact | CH Gas Works"
        description="Contact CH Gas Works by phone, email or WhatsApp for gas installation, repair and maintenance enquiries."
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">
            Get in touch
          </p>

          <h1>
            Tell us what you need.
          </h1>

          <p>
            For a quote or service enquiry, contact CH Gas Works directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          <aside className="contact-panel">

            <p className="eyebrow">
              Direct contact
            </p>

            <h2>
              Speak to CH Gas Works.
            </h2>

            <p>
              Prefer a quick conversation? WhatsApp is available for enquiries.
            </p>

            <div className="contact-method">
              <span>PHONE / WHATSAPP</span>

              <a href={site.phoneHref}>
                {site.phoneDisplay}
              </a>

              <a
                className="contact-wa"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp →
              </a>
            </div>

            <div className="contact-method">
              <span>EMAIL</span>

              <a href={site.emailHref}>
                {site.email}
              </a>
            </div>

            <div className="contact-method">
              <span>HOURS</span>

              <strong>
                {site.hours}
              </strong>
            </div>

            <div className="contact-method">
              <span>SERVICE AREA</span>

              <strong>
                Throughout South Africa
              </strong>
            </div>

          </aside>

          <div className="form-panel">

            <div className="form-panel__intro">

              <p className="eyebrow">
                Online enquiry
              </p>

              <h2>
                Request a quote
              </h2>

              <p>
                Send your details below and we'll get back to you.
              </p>

            </div>

            {submitted ? (

              <div className="form-success">

                <span>✓</span>

                <h2>
                  Enquiry sent
                </h2>

                <p>
                  Thank you for contacting CH Gas Works.
                  Your enquiry has been sent successfully.
                </p>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                  }}
                >
                  Send another enquiry
                </Button>

                <Button
                  to="/" onClick={() => setOpen(false)}>
                  Return Home
                </Button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-grid">

                  <label>
                    Name

                    <input
                      required
                      name="name"
                      autoComplete="name"
                    />
                  </label>

                  <label>
                    Phone

                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    Email

                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                    />
                  </label>

                  <label>
                    Service

                    <select
                      required
                      name="service"
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select a service
                      </option>

                      {services.map(s => (
                        <option
                          key={s.id}
                          value={s.title}
                        >
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="form-grid__full">
                    Message

                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Tell us a little about the gas work you need…"
                    />
                  </label>

                </div>

                {error && (
                  <p className="form-error">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                >
                  {submitting
                    ? 'Sending enquiry...'
                    : 'Send enquiry'}
                </Button>

              </form>

            )}

          </div>

        </div>
      </section>

    </main>
  )
}