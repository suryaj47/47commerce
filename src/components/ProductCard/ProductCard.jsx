import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function ProductCard({ product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <article className="product-card">
      {product.featured && <span className="featured">Best Seller</span>}
      {/* Discount Badge */}

      <span className="discount-badge">-{discount}%</span>

      {/* Wishlist */}

      <button className="wishlist-btn">
        <FiHeart />
      </button>

      {/* Image */}

      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <Link to={`/product/${product.id}`} className="quick-view">
          <FiEye />
          Quick View
        </Link>
      </div>

      {/* Details */}

      <div className="product-info">
        <p className="brand">{product.brand}</p>

        <h3>{product.name}</h3>

        <div className="rating">
          <div className="stars">{renderStars(product.rating)}</div>

          <span>
            {product.rating}({product.reviews})
          </span>
        </div>

        <div className="price">
          <span className="new-price">₹{product.price.toLocaleString()}</span>

          <span className="old-price">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        <div className="stock">
          {product.stock > 5 ? "In Stock" : "Only Few Left"}
        </div>

        <div className="delivery">🚚 Free Delivery</div>
      </div>
    </article>
  );
}

export default ProductCard;
