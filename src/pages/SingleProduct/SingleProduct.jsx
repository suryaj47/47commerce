import "./SingleProduct.css";

import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  console.log(id);

  const product = products.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image,
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Product Not Found</h2>

        <Link to="/">Return Home</Link>
      </section>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  return (
    <main className="single-product">
      {/* Breadcrumb */}

      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to={`/products/${product.category.toLowerCase()}`}>
          {product.category}
        </Link>

        <span>/</span>

        <strong>{product.name}</strong>
      </div>

      {/* Main */}

      <section className="product-container">
        {/* LEFT */}

        <div className="gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>

          {product.images && (
            <div className="thumbnail-list">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                  className={selectedImage === img ? "active-thumb" : ""}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}

        <div className="details">
          <p className="brand">{product.brand}</p>

          <h1>{product.name}</h1>

          <div className="rating">
            ⭐ {product.rating}
            <span>({product.reviews} Reviews)</span>
          </div>

          <div className="price">
            <span className="current-price">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="old-price">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>

          <p className="stock">
            {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <p className="description">{product.description}</p>

          {/* Quantity */}

          <div className="quantity">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              −
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* Buttons */}

          <div className="buttons">
            <button
              className="cart-btn"
              onClick={() => addToCart(product, quantity)}
            >
              Add To Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => {
                addToCart(product, quantity);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>

          {/* Specifications */}

          <div className="specifications">
            <h3>Specifications</h3>

            <table>
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>

                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}

      <section className="related">
        <h2>You May Also Like</h2>

        <ProductGrid products={relatedProducts} />
      </section>
    </main>
  );
}

export default SingleProduct;
