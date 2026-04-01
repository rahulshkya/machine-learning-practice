import { useMemo } from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ onAddToCart, searchQuery, selectedCategory }) {
  const products = [
    {
      id: 1,
      name: 'Pro Max Smartphone',
      emoji: '📱',
      category: 'electronics',
      price: 899,
      originalPrice: 1299,
      discount: 30,
      description: 'Latest flagship with amazing camera',
      rating: 5,
      reviews: 328,
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      emoji: '🎧',
      category: 'electronics',
      price: 249,
      originalPrice: 399,
      discount: 37,
      description: 'Premium noise-cancelling audio',
      rating: 5,
      reviews: 512,
    },
    {
      id: 3,
      name: 'Elegant Watch',
      emoji: '⌚',
      category: 'fashion',
      price: 199,
      originalPrice: 349,
      discount: 43,
      description: 'Luxury smartwatch with fitness tracking',
      rating: 4,
      reviews: 287,
    },
    {
      id: 4,
      name: 'Designer Handbag',
      emoji: '👜',
      category: 'fashion',
      price: 449,
      originalPrice: 799,
      discount: 44,
      description: 'Genuine leather premium collection',
      rating: 5,
      reviews: 421,
    },
    {
      id: 5,
      name: 'Makeup Kit',
      emoji: '💄',
      category: 'fashion',
      price: 79,
      originalPrice: 129,
      discount: 38,
      description: 'Professional cosmetic collection',
      rating: 4,
      reviews: 356,
    },
    {
      id: 6,
      name: 'Smart Robot Vacuum',
      emoji: '🤖',
      category: 'home',
      price: 599,
      originalPrice: 999,
      discount: 40,
      description: 'Intelligent navigation cleaning system',
      rating: 5,
      reviews: 198,
    },
    {
      id: 7,
      name: 'LED Desk Lamp',
      emoji: '💡',
      category: 'home',
      price: 89,
      originalPrice: 149,
      discount: 40,
      description: 'Energy-efficient with touch control',
      rating: 4,
      reviews: 273,
    },
    {
      id: 8,
      name: 'Coffee Maker',
      emoji: '☕',
      category: 'home',
      price: 159,
      originalPrice: 279,
      discount: 43,
      description: 'Programmable brewing perfection',
      rating: 5,
      reviews: 402,
    },
    {
      id: 9,
      name: 'Running Shoes',
      emoji: '👟',
      category: 'sports',
      price: 129,
      originalPrice: 229,
      discount: 43,
      description: 'Lightweight performance wear',
      rating: 5,
      reviews: 567,
    },
    {
      id: 10,
      name: 'Yoga Mat',
      emoji: '🧘',
      category: 'sports',
      price: 39,
      originalPrice: 69,
      discount: 43,
      description: 'Non-slip premium material',
      rating: 4,
      reviews: 178,
    },
    {
      id: 11,
      name: 'Basketball',
      emoji: '🏀',
      category: 'sports',
      price: 49,
      originalPrice: 89,
      discount: 44,
      description: 'Official size professional grade',
      rating: 5,
      reviews: 234,
    },
    {
      id: 12,
      name: 'Gaming Console',
      emoji: '🎮',
      category: 'electronics',
      price: 399,
      originalPrice: 699,
      discount: 43,
      description: '4K gaming with ray tracing',
      rating: 5,
      reviews: 645,
    },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section className="product-list-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover {filteredProducts.length} amazing products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <span className="no-products-emoji">🔍</span>
            <p>No products found. Try adjusting your search!</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductList
