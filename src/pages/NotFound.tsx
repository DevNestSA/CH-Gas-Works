import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <main id="main" className="section">
      <Seo
        title="Page not found | CH Gas Works"
        description="The requested page could not be found."
        path="/404"
      />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page is not available</h1>
        <p>
          The link may be out of date. Return to the homepage or contact CH Gas
          Works from the contact page.
        </p>
        <p>
          <Link className="text-link" to="/">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
