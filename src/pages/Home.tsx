import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceCard } from '../components/ServiceCard'
import { Seo } from '../components/Seo'
import { site } from '../data/site'
import { services } from '../data/services'

export function HomePage() {
  return (
    <main id="main">

      <Seo
        title="CH Gas Works | Professional Gas Solutions"
        description="Professional gas installation, repairs, maintenance and compressed gas services across South Africa."
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero__grid container">

          <div className="hero__copy">
            <p className="eyebrow eyebrow--on-dark">
              Gas installation • repairs • maintenance
            </p>

            <h1>
              Professional gas solutions. <em>Built to last.</em>
            </h1>

            <p className="hero__lead">
              From residential gas installations to commercial, industrial
              and compressed gas systems, CH Gas Works delivers practical
              expertise backed by decades of industry experience.
            </p>

            <div className="section-actions">
              <Button to="/contact">
                Request a Quote
              </Button>

              <a
                className="btn btn--on-dark"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </div>

            <div className="hero__facts">
              <div>
                <strong>1999</strong>
                <span>gas experience since</span>
              </div>

              <div>
                <strong>2012</strong>
                <span>business established</span>
              </div>

              <div>
                <strong>RSA</strong>
                <span>work across South Africa</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__ring">
              <span>CH</span>
              <div className="hero__flame">♨</div>
            </div>

            <div className="hero__visual-card">
              <span>CH GAS WORKS</span>
              <strong>INSTALL • REPAIR • MAINTAIN</strong>
            </div>
          </div>

        </div>

        <div className="hero__edge" />
      </section>


      {/* Introduction */}
      <section className="section intro">
        <div className="container intro__grid">

          <div>
            <p className="eyebrow">
              Built on experience
            </p>

            <h2>
              Gas work with a long-term view.
            </h2>
          </div>

          <div>
            <p>
              CH Gas Works started working with gas in 1999 after joining
              Afrox, and the business was started in 2012. Today the focus
              is on delivering dependable gas installation, repair and
              maintenance services across South Africa.
            </p>

            <Link
              className="text-link"
              to="/about"
            >
              Our story <span>→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* Services Preview */}
      <section className="section section--paper services-preview">
        <div className="container">

          <div className="section-heading">
            <p className="eyebrow">
              What we do
            </p>

            <h2>
              Gas services across four specialist areas.
            </h2>

            <p>
              Residential, commercial, industrial and compressed gas work —
              clearly presented, professionally delivered.
            </p>
          </div>

          <div className="service-grid">
            {services.map(s => (
              <ServiceCard
                key={s.id}
                service={s}
              />
            ))}
          </div>

          <div className="section-actions section-actions--center">
            <Button
              to="/services"
              variant="secondary"
            >
              View all services
            </Button>
          </div>

        </div>
      </section>


      {/* Experience */}
      <section className="section experience">
        <div className="container experience__grid">

          <div className="experience__visual">
            <span>1999</span>
            <strong>25+ years</strong>
            <small>of gas industry experience</small>
          </div>

          <div>
            <p className="eyebrow">
              Experience matters
            </p>

            <h2>
              From industry experience to an independent business.
            </h2>

            <p>
              Experience gained from working with Afrox from 1999 laid the
              foundation for CH Gas Works. Since 2012, that experience has
              been applied through an independent business serving clients
              with gas installation, maintenance and repair requirements.
            </p>

            <div className="stat-row">
              <div>
                <strong>1999</strong>
                <span>Started working with gas</span>
              </div>

              <div>
                <strong>2012</strong>
                <span>CH Gas Works established</span>
              </div>

              <div>
                <strong>RSA</strong>
                <span>Service coverage</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Industry Bodies */}
      <section className="section industry-bodies">
        <div className="container">

          <div className="section-heading industry-bodies__heading">
            <p className="eyebrow">
              Industry
            </p>

            <h2>
              Working within the gas industry.
            </h2>

            <div className="industry-bodies__accent" />

            <p>
              CH Gas Works operates within the South African gas industry
              and works in line with the relevant industry bodies and
              regulatory requirements.
            </p>
          </div>

          <div className="industry-bodies__banner">

            <div className="industry-bodies__banner-heading">
              <span className="industry-bodies__line" />

              <div>
                <span className="industry-bodies__flame">♨</span>
                <h3>Industry Bodies &amp; Regulatory Framework</h3>
              </div>

              <span className="industry-bodies__line" />
            </div>

            <div className="industry-bodies__logos">

              {/* LPGSA */}
              <div className="industry-body-logo">

                <div className="industry-body-logo__image">
                  <img
                    src="/images/industry/lpgsa.png"
                    alt="LPGSA"
                  />
                </div>

                <span className="industry-body-logo__accent" />

                <h4>
                  LPGSA
                </h4>

                <p>
                  Liquefied Petroleum Gas
                  <br />
                  Association of South Africa
                </p>

              </div>

              {/* SAQCC Gas */}
              <div className="industry-body-logo">

                <div className="industry-body-logo__image">
                  <img
                    src="/images/industry/saqcc-gas.svg"
                    alt="SAQCC Gas"
                  />
                </div>

                <span className="industry-body-logo__accent" />

                <h4>
                  SAQCC Gas
                </h4>

                <p>
                  South African Qualification &amp;
                  <br />
                  Certification Committee for Gas
                </p>

              </div>

              {/* Department of Employment and Labour */}
              <div className="industry-body-logo">

                <div className="industry-body-logo__image">
                  <img
                    src="/images/industry/employment-labour.jpg"
                    alt="Department of Employment and Labour"
                  />
                </div>

                <span className="industry-body-logo__accent" />

                <h4>
                  Department of
                  <br />
                  Employment and Labour
                </h4>

                <p>
                  Relevant occupational health
                  <br />
                  and safety requirements
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/*Google Reviews 
      <section className="section reviews-preview">
        <div className="container">

          <div className="section-heading reviews-preview__heading">
            <p className="eyebrow">
              Client feedback
            </p>

            <h2>
              What our clients say.
            </h2>

            <p>
              We value the feedback of our clients and take pride in providing
              professional, reliable gas installation and maintenance services.
            </p>
          </div>

          <div className="reviews-grid">

            <article className="review-card">
              <div className="review-card__top">
                <span className="review-card__stars">★★★★★</span>
                <span className="review-card__source">Google</span>
              </div>

              <p className="review-card__text">
                “Professional service from start to finish. The team was
                knowledgeable, reliable and made the whole process easy.”
              </p>

              <div className="review-card__author">
                <strong>Google Review</strong>
                <span>Verified client feedback</span>
              </div>
            </article>

            <article className="review-card">
              <div className="review-card__top">
                <span className="review-card__stars">★★★★★</span>
                <span className="review-card__source">Google</span>
              </div>

              <p className="review-card__text">
                “Excellent workmanship and friendly service. Everything was
                explained clearly and completed professionally.”
              </p>

              <div className="review-card__author">
                <strong>Google Review</strong>
                <span>Verified client feedback</span>
              </div>
            </article>

            <article className="review-card">
              <div className="review-card__top">
                <span className="review-card__stars">★★★★★</span>
                <span className="review-card__source">Google</span>
              </div>

              <p className="review-card__text">
                “Very happy with the service. Professional, dependable and
                knowledgeable.”
              </p>

              <div className="review-card__author">
                <strong>Google Review</strong>
                <span>Verified client feedback</span>
              </div>
            </article>

          </div>

          <div className="reviews-preview__action">
            <a
              href="#"
              className="btn btn--secondary"
            >
              View us on Google
              <span aria-hidden="true"> →</span>
            </a>
          </div>

        </div>
      </section> */}

      {/* Final CTA */}
      <section className="section home-cta">
        <div className="container home-cta__inner">

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

          <Button to="/contact">
            Contact us
          </Button>

        </div>
      </section>

    </main>
  )
}