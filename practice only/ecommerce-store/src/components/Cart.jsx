import './Cart.css'

function Cart({ cartItems, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = cartItems.length > 0 ? 15 : 0
  const total = subtotal + tax + shipping

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h2 className="cart-title">Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-emoji">🛒</span>
            <p>Your cart is empty</p>
            <p className="empty-cart-subtitle">Add some products to get started!</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">{item.emoji}</div>
                  
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                  </div>

                  <div className="cart-item-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <div className="cart-item-price">
                    <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                    <p className="unit-price">@${item.price}</p>
                  </div>

                  <button 
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                    title="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
