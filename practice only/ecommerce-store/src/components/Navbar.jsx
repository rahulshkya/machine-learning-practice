import { useState } from 'react'
import './Navbar.css'

function Navbar({ cartCount, onCartClick, onSearchChange, onCategoryChange }) {
  const [searchOpen, setSearchOpen] = useState(false)

  const categories = ['all', 'electronics', 'fashion', 'home', 'sports']

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">💎</span>
          <h1>ModernShop</h1>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className="category-btn"
              onClick={() => onCategoryChange(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <button className="cart-btn" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
