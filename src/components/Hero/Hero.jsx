import "./Hero.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroMain from "../../assets/hero-main.png";

import img1 from "../../assets/secondary/img1.png";
import img2 from "../../assets/secondary/img2.png";
import img3 from "../../assets/secondary/img3.png";
import img4 from "../../assets/secondary/img4.png";

const secondaryImages = [img1, img2, img3, img4];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % secondaryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-badge">✨ New Collection 2026</span>

          <h1>
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p>
            Discover premium fashion, electrical gadgets and wardrobe essentials
            from the world's most trusted brands.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-btn">
              Shop Now
            </Link>

            <Link to="/products" className="secondary-btn">
              Explore Products
            </Link>
          </div>

          <div className="hero-rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <span>Trusted by 10,000+ Happy Customers</span>
          </div>
        </div>

        {/* Right Images */}

        <div className="hero-images">
          <div className="main-image">
            <img src={secondaryImages[currentImage]} alt="Hero Product" />
          </div>

          <div className="thumbnail-slider">
            {secondaryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={currentImage === index ? "thumb active" : "thumb"}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
