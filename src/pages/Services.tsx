import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { serviceIcons } from '../components/Icons'
import { services } from '../data/services'

export function ServicesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <main id="main">
      <Seo
        title="Gas Services | CH Gas Works"
        description="Gas installation, repair, maintenance and related gas services for residential, commercial and industrial clients."
        path="/services"
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Gas installation, repair and maintenance</h1>
          <p className="page-hero__lead">
            Explore the gas services offered by CH Gas Works. Contact us to discuss the specific requirements of your project.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Overview"
            title="Our services"
            intro="Our services cover a range of residential, commercial and industrial gas requirements."
          />
          <div className="service-detail-list">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="service-detail"
                >
                  <div className="service-detail__icon">
                    <Icon />
                  </div>
                  <div className="service-detail__body">
                    <h2>{service.title}</h2>
                    <p>{service.detail}</p>
                    <Button to="/contact" variant="ghost">
                      Request this service
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section products-section" aria-labelledby="products-heading">
        <div className="container">
          <div className="products-section__heading">
            <div>
              <p className="eyebrow">Products &amp; equipment</p>
              <h2 id="products-heading">Gas equipment for your application</h2>
            </div>
            <p>
              A selection of gas appliances supplied by CH Gas Works. Contact us to discuss the product and installation requirements for your project.
            </p>
          </div>

          <div className="products-grid">
            <article className="product-card">
              <div className="product-card__image">
                <img src="/images/products/AEG-gas-hob.jpg" alt="AEG gas hob" />
              </div>
              <div className="product-card__content">
                <p className="product-card__category">Gas appliance</p>
                <h3>AEG Gas Hob</h3>
                <p className="product-card__description">Gas hob for domestic cooking applications.</p>
                <a className="product-card__link" href="/contact">Enquire <span>→</span></a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-card__image">
                <img src="/images/products/Hisense-5-burner-gas-hob.jpg" alt="Hisense 5-burner gas hob" />
              </div>
              <div className="product-card__content">
                <p className="product-card__category">Gas appliance</p>
                <h3>Hisense 5-Burner Gas Hob</h3>
                <p className="product-card__description">Five-burner gas hob for residential cooking applications.</p>
                <a className="product-card__link" href="/contact">Enquire <span>→</span></a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-card__image">
                <img src="/images/products/Paloma-26L-gas-geyser.jpg" alt="Paloma Eco Max 26 gas geyser" />
              </div>
              <div className="product-card__content">
                <p className="product-card__category">Gas water heating</p>
                <h3>Paloma Eco Max 26</h3>
                <p className="product-card__description">26 L/min gas geyser for suitable domestic hot-water applications.</p>
                <a className="product-card__link" href="/contact">Enquire <span>→</span></a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-card__image">
                <img src="/images/products/Defy-DGS902-gas-electric-stove.jpg" alt="Defy DGS902 gas and electric stove" />
              </div>
              <div className="product-card__content">
                <p className="product-card__category">Gas appliance</p>
                <h3>Defy DGS902</h3>
                <p className="product-card__description">Gas and electric stove for domestic cooking applications.</p>
                <a className="product-card__link" href="/contact">Enquire <span>→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
