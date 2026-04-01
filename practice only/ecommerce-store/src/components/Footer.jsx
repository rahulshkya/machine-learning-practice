import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About ModernShop</h3>
          <p>
            Your trusted e-commerce platform for premium products with exceptional quality and modern design.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">f</a>
            <a href="#" className="social-link">𝕏</a>
            <a href="#" className="social-link">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ModernShop. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  )
}

export default Footer
