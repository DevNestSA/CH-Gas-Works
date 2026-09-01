import { Link } from 'react-router-dom'
export function NotFoundPage(){return <main id="main"><section className="page-hero"><div className="container"><p className="eyebrow eyebrow--on-dark">404</p><h1>Page not found.</h1><p>The page you are looking for does not exist.</p><Link className="btn btn--primary" to="/">Back to home</Link></div></section></main>}
