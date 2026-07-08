import "./Checkout.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { cart, totalItems, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "address",
      "city",
      "state",
      "pincode",
    ];

    const missingFields = requiredFields.filter(
      (field) => !formData[field].trim(),
    );

    if (missingFields.length > 0) {
      setErrorMessage(
        "Please fill all required fields before placing your order.",
      );
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <main className="checkout-page">
      <form className="checkout-form" onSubmit={placeOrder}>
        <h2>Shipping Information</h2>

        <div className="input-grid">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          placeholder="Address"
          rows="4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="input-grid">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Payment Method</h2>

        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={formData.payment === "Cash on Delivery"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Card"
              checked={formData.payment === "Card"}
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={formData.payment === "UPI"}
              onChange={handleChange}
            />
            UPI
          </label>
        </div>
      </form>

      <aside className="checkout-summary">
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

        <div className="total">
          <span>Total</span>
          <span>₹{totalPrice.toLocaleString()}</span>
        </div>
        {errorMessage && <p className="checkout-error">{errorMessage}</p>}
        <button type="button" onClick={placeOrder}>
          Place Order
        </button>
      </aside>
    </main>
  );
}

export default Checkout;
