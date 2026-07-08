import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/clerk-react";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { totalItems } = useCart();

  const { user } = useUser();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* =========================
            LOGO
        ========================== */}

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="47commerce Logo" />
          <span>47commerce</span>
        </Link>

        {/* =========================
            NAVIGATION
        ========================== */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
            <FiShoppingCart />

            <span>Cart</span>

            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>

          {/* =========================
              AUTH SECTION
          ========================== */}

          <div className="auth-buttons">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="login-btn">Login</button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="signup-btn">Sign Up</button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="user-profile">
                <span className="user-name">Hi, {user?.firstName}</span>

                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: {
                        width: "44px",
                        height: "44px",
                      },
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* =========================
            MOBILE MENU
        ========================== */}

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
