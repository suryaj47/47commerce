import "./Success.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function Success() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(true);

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const processingTimer = setTimeout(() => {
      setProcessing(false);
    }, 2000);

    return () => clearTimeout(processingTimer);
  }, []);

  useEffect(() => {
    if (processing) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);

          navigate("/");

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [processing, navigate]);

  const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="success-page">
      {!processing && <Confetti recycle={false} numberOfPieces={250} />}

      {processing ? (
        <div className="processing-card">
          <div className="loader"></div>

          <h2>Processing Your Order</h2>

          <p>Please wait while we confirm your purchase.</p>
        </div>
      ) : (
        <div className="success-card">
          <div className="success-icon">✓</div>

          <h1>Order Placed Successfully!</h1>

          <h3>🎉 Congratulations 🎉</h3>

          <p>
            Thank you for shopping with us.
            <br />
            Your order has been successfully placed.
          </p>

          <div className="order-info">
            <div>
              <span>Order ID</span>
              <strong>{orderId}</strong>
            </div>

            <div>
              <span>Estimated Delivery</span>
              <strong>3 - 5 Business Days</strong>
            </div>
          </div>

          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{
                width: `${countdown * 20}%`,
              }}
            ></div>
          </div>

          <p className="redirect">
            Redirecting to Home in
            <strong> {countdown} </strong>
            seconds...
          </p>

          <Link to="/" className="home-btn">
            Continue Shopping
          </Link>
        </div>
      )}
    </main>
  );
}

export default Success;
