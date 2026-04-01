import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId 
          ? { ...item, quantity }
          : item
      ))
    }
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <Navbar 
        cartCount={totalItems}
        onCartClick={() => setShowCart(!showCart)}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />
      
      {showCart ? (
        <Cart 
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      ) : (
        <>
          <Hero />
          <ProductList 
            onAddToCart={addToCart}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
          <Newsletter />
        </>
      )}
      
      <Footer />
    </div>
  )
}

export default App
