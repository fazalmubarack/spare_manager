import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>Spare Market</h3>
          <p>
            Spare Market is your trusted platform for buying high-quality
            automobile spare parts with fast delivery and secure payments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/orders">My Orders</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4><Link to="/contact">Contact Us</Link></h4>
          <p>Email: <a href="mailto:support@sparemarket.com">support@sparemarket.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Chennai, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Spare Market. All Rights Reserved.
      </div>
    </footer>
  );
}
