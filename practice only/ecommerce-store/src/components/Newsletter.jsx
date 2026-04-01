import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-subtitle">
          Subscribe to our newsletter for exclusive deals and updates
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="success-message">
            ✓ Thanks for subscribing!
          </div>
        )}
      </div>

      <div className="newsletter-background">
        <div className="floatingBg"></div>
      </div>
    </section>
  )
}

export default Newsletter
