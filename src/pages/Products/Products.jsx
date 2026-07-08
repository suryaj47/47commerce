import "./Products.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { products } from "../../data/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const keyword = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(keyword) ||
      product.brand.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="products-page">
      <p className="breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <span>Products</span>
      </p>
      <section className="products-header">
        <div className="header-top">
          <div className="title-wrap">
            <h1>Our Products</h1>

            <p className="lead">
              Discover premium furniture, wardrobes and electrical appliances
              crafted for modern living.
            </p>
          </div>

          <div className="search-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search products, brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="products-grid-section">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="no-products">
            <h2>No Products Found</h2>

            <p>Try searching with another keyword.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
