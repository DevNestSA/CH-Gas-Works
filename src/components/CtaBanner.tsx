import { Button } from './Button'
import { IconWhatsApp } from './Icons'
import { site, whatsappHref } from '../data/site'

type CtaBannerProps = { title?: string; text?: string }

export function CtaBanner({ title = 'Need a Gas Solution?', text = 'Get in touch with CH Gas Works to discuss your requirements.' }: CtaBannerProps) {
  const whatsapp = whatsappHref(site.whatsappDisplay, 'Hi CH Gas Works, I would like to enquire about your gas services.')
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="container cta-banner__inner">
        <div><p className="eyebrow eyebrow--on-dark">Get in touch</p><h2 id="cta-heading">{title}</h2><p>{text}</p></div>
        <div className="cta-banner__actions"><Button to="/contact">Request a Quote</Button><Button href={whatsapp} variant="secondary"><IconWhatsApp />WhatsApp Us</Button></div>
      </div>
    </section>
  )
}
