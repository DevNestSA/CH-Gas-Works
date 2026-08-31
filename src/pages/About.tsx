import { Seo } from '../components/Seo'

export function AboutPage() {
  return (
    <main id="main">
      <Seo
        title="About | CH Gas Works"
        description="Discover the story behind CH Gas Works, with gas industry experience dating back to 1999 and an independent business established in 2012."
      />

      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow eyebrow--on-dark">About CH Gas Works</p>

          <h1>
            Experience built
            <br />
            <span>around gas.</span>
          </h1>

          <p className="page-hero__lead">
            From industry experience that began in 1999 to an independent
            business established in 2012, CH Gas Works brings years of
            practical gas experience to every project.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section about-intro">
        <div className="container about-intro__grid">
          <div className="about-intro__label">
            <p className="eyebrow">Our story</p>
            <span className="about-intro__line" />
          </div>

          <div className="about-intro__content">
            <h2>
              A career in gas became
              <span> CH Gas Works.</span>
            </h2>

            <p className="lead">
              The journey began in 1999, when the owner started working in the
              gas industry while employed by Afrox.
            </p>

            <p>
              That experience formed the foundation for a career working with
              gas systems and understanding the practical demands of
              installation, maintenance and repair work.
            </p>

            <p>
              In 2012, that experience became the foundation for an
              independent business when CH Gas Works was established.
            </p>

            <p>
              Today, CH Gas Works provides gas services across residential,
              commercial and industrial applications, as well as compressed
              gas and vacuum systems, with work carried out throughout South
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--dark about-timeline">
        <div className="container">
          <div className="section-heading section-heading--light">
            <p className="eyebrow eyebrow--on-dark">The journey</p>

            <h2>
              More than two decades
              <br />
              of gas experience.
            </h2>
          </div>

          <div className="about-timeline__track">
            <article className="about-timeline__item">
              <div className="about-timeline__number">01</div>

              <div className="about-timeline__year">1999</div>

              <div className="about-timeline__content">
                <h3>Entering the gas industry</h3>

                <p>
                  The owner began working with gas while employed by Afrox,
                  beginning a career in the gas industry.
                </p>
              </div>
            </article>

            <article className="about-timeline__item">
              <div className="about-timeline__number">02</div>

              <div className="about-timeline__year">2012</div>

              <div className="about-timeline__content">
                <h3>CH Gas Works begins</h3>

                <p>
                  After years of industry experience, CH Gas Works was
                  established as an independent business.
                </p>
              </div>
            </article>

            <article className="about-timeline__item">
              <div className="about-timeline__number">03</div>

              <div className="about-timeline__year">Today</div>

              <div className="about-timeline__content">
                <h3>Serving across South Africa</h3>

                <p>
                  CH Gas Works provides domestic, commercial, industrial and
                  compressed gas services throughout South Africa.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section about-capabilities">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What we work with</p>

            <h2>
              From residential installations
              <br />
              to specialised gas systems.
            </h2>

            <p>
              CH Gas Works works across a broad range of gas applications,
              from domestic installations through to commercial, industrial
              and compressed gas systems.
            </p>
          </div>

          <div className="about-capabilities__grid">
            <article className="capability-card">
              <span className="capability-card__number">01</span>

              <div>
                <p className="capability-card__eyebrow">Domestic</p>
                <h3>Residential Gas</h3>

                <p>
                  Gas installations for homes, including gas hobs, stoves and
                  gas geysers, as well as Certificates of Compliance for
                  insurance.
                </p>
              </div>
            </article>

            <article className="capability-card">
              <span className="capability-card__number">02</span>

              <div>
                <p className="capability-card__eyebrow">Commercial</p>
                <h3>Commercial Gas</h3>

                <p>
                  Gas installations for restaurant equipment, food trailers,
                  school feeding schemes and factories, including liquid and
                  vapour gas installations.
                </p>
              </div>
            </article>

            <article className="capability-card">
              <span className="capability-card__number">03</span>

              <div>
                <p className="capability-card__eyebrow">Industrial</p>
                <h3>Industrial Gas</h3>

                <p>
                  Bulk LPG tank installations together with maintenance,
                  repairs and re-certification of bulk tanks.
                </p>
              </div>
            </article>

            <article className="capability-card">
              <span className="capability-card__number">04</span>

              <div>
                <p className="capability-card__eyebrow">Specialised</p>
                <h3>Compressed Gases</h3>

                <p>
                  Installation, repair and maintenance of compressed gas and
                  vacuum systems across a range of medical and industrial
                  applications.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section about-coverage">
        <div className="container about-coverage__inner">
          <div>
            <p className="eyebrow eyebrow--on-dark">Coverage</p>

            <h2>
              Wherever the work
              <br />
              takes us.
            </h2>
          </div>

          <div className="about-coverage__copy">
            <p>
              CH Gas Works carries out gas installation, repair and maintenance
              work throughout South Africa.
            </p>

            <div className="about-coverage__details">
              <div>
                <span>Operating hours</span>
                <strong>08:00 — 17:00</strong>
              </div>

              <div>
                <span>Phone / WhatsApp</span>
                <strong>082 474 3960</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>chgas@live.co.za</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container about-cta__inner">
          <div>
            <p className="eyebrow">Start a conversation</p>

            <h2>
              Need a gas installation,
              <br />
              repair or maintenance?
            </h2>
          </div>

          <div className="about-cta__actions">
            <a
              href="https://wa.me/27824743960?text=Hello%20CH%20Gas%20Works%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              WhatsApp CH Gas Works
            </a>

            <a href="tel:+27824743960" className="button button--secondary">
              Call 082 474 3960
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

