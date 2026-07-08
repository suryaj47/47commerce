import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}

        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="47commerce" />

            <h2>47commerce</h2>
          </div>

          <p>
            Discover premium furniture, electrical appliances, and home
            essentials designed to elevate your lifestyle.
          </p>

          <div className="social-icons">
            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiTwitter />
            </a>

            <a href="#">
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart</Link>
        </div>

        {/* Categories */}

        <div className="footer-section">
          <h3>Categories</h3>

          <Link to="/products/electrical">Electrical</Link>

          <Link to="/products/furniture">Furniture</Link>

          <Link to="/products/wardrobe">Wardrobe</Link>
        </div>

        {/* Contact */}

        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FiMapPin />
            Bangalore, India
          </p>

          <p>
            <FiPhone />
            +91 98765 43210
          </p>

          <p>
            <FiMail />
            support@47commerce.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>47commerce</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
