import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div className="product-image">{product.emoji}</div>
        <div className="product-badge">{product.discount}% OFF</div>
      </div>

      <div className="product-content">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          {'⭐'.repeat(product.rating)}
          <span className="rating-count">({product.reviews})</span>
        </div>

        <div className="product-pricing">
          <span className="price-original">${product.originalPrice}</span>
          <span className="price-current">${product.price}</span>
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          <span className="btn-icon">+</span>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
