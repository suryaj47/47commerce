import "./FeaturedProducts.css";

import { Link } from "react-router-dom";

import { products } from "../../data/products";

import ProductCard from "../ProductCard/ProductCard";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="featured-products">
      <div className="featured-top">
        <div className="featured-title">
          <span className="featured-tag">Featured Collection</span>

          <h2>
            Premium Picks
            <br />
            Curated for You
          </h2>

          <p>
            Explore our most loved products across fashion, electrical and
            wardrobe collections.
          </p>
        </div>

        <Link to="/products" className="view-all-btn">
          View All Products →
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".featured-prev",
          nextEl: ".featured-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={25}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="featured-nav">
        <button className="swiper-button-prev featured-prev" type="button">
          <FaArrowLeft />
        </button>
        <button className="swiper-button-next featured-next" type="button">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
