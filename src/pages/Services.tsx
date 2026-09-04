import { Seo } from '../components/Seo'
import { services } from '../data/services'
import { products } from '../data/products'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceGallery } from '../components/ServiceGallery'

export function ServicesPage() {
  return (
    <main id="main">

      <Seo
        title="Services | CH Gas Works"
        description="Residential, commercial, industrial and compressed gas installation, repair and maintenance services from CH Gas Works."
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">

          <p className="eyebrow">
            Our services
          </p>

          <h1>
            Gas systems.
            <br />
            Different applications.
            <br />
            One experienced team.
          </h1>

          <p>
            Explore the areas CH Gas Works covers across South Africa.
          </p>

        </div>
      </section>


      {/* Services */}
      <section className="section service-detail-list">
        <div className="container">

          {services.map((s, i) => (
            <article
              className="service-detail"
              id={s.slug}
              key={s.id}
            >

              <div className="service-detail__number">
                {String(i + 1).padStart(2, '0')}
              </div>


              <div className="service-detail__content">

                <p className="eyebrow">
                  {s.eyebrow}
                </p>

                <h2>
                  {s.title}
                </h2>

                <p className="service-detail__lead">
                  {s.summary}
                </p>

                <p>
                  {s.detail}
                </p>

              </div>


              <ServiceGallery
                images={s.images}
                title={s.title}
              />


              <div className="service-detail__items">

                <span>
                  Scope
                </span>

                <ul>
                  {s.items.map(item => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

            </article>
          ))}

        </div>
      </section>


      {/* Products & Equipment */}
      <section className="section products-section">
        <div className="container">

          <div className="products-section__header">

            <div>
              <p className="eyebrow">
                Products & equipment
              </p>

              <h2>
                Equipment
                <br />
                we install.
              </h2>
            </div>

          </div>

          <div className="products-grid">

            {products.map((product, i) => (
              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-card__image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                <div className="product-card__body">

                  <div className="product-card__meta">

                    <span className="product-card__number">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <p className="product-card__category">
                        {product.category}
                      </p>

                      <h3>
                        {product.name}
                      </h3>
                    </div>

                  </div>

                  <p className="product-card__description">
                    {product.description}
                  </p>

                  <a
                    href="/contact"
                    className="product-card__link"
                  >
                    Enquire about installation
                    <span aria-hidden="true"> →</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="section products-cta">
        <div className="container products-cta__inner">

          <div>

            <p className="eyebrow">
              Need assistance?
            </p>

            <h2>
              Need a gas installation?
            </h2>

            <p>
              Get in touch with CH Gas Works for professional advice
              and a quotation.
            </p>

          </div>

          <a
            href="/contact"
            className="btn btn--primary"
          >
            Contact us
            <span aria-hidden="true"> →</span>
          </a>

        </div>
      </section>

    </main>
  )
}