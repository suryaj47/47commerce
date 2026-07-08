import "./Cart.css";

import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <h1>Your Cart is Empty</h1>

        <p>Add some amazing products to your cart.</p>

        <Link to="/" className="continue-btn">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-left">
        <h1>Shopping Cart</h1>

        <p>{totalItems} Items</p>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>

              <p>{item.brand}</p>

              <span>₹{item.price.toLocaleString()}</span>
            </div>

            <div className="quantity-box">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <div className="subtotal">
              ₹{(item.price * item.quantity).toLocaleString()}
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}

        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <aside className="cart-summary">
        <h2>Order Summary</h2>

        <div>
          <span>Items</span>

          <span>{totalItems}</span>
        </div>

        <div>
          <span>Subtotal</span>

          <span>₹{totalPrice.toLocaleString()}</span>
        </div>

        <div>
          <span>Shipping</span>

          <span>FREE</span>
        </div>

        <hr />

        <div className="grand-total">
          <span>Total</span>

          <span>₹{totalPrice.toLocaleString()}</span>
        </div>

        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </aside>
    </main>
  );
}

export default Cart;
