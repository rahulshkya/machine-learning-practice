import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Discover Modern Innovation</h2>
        <p className="hero-subtitle">Premium products with exceptional quality and style</p>
        <button className="hero-btn">Shop Now</button>
      </div>

      <div className="hero-background">
        <div className="floating-item item-1">📱</div>
        <div className="floating-item item-2">👜</div>
        <div className="floating-item item-3">🎧</div>
        <div className="floating-item item-4">⌚</div>
        <div className="floating-item item-5">💄</div>
      </div>
    </section>
  )
}

export default Hero
