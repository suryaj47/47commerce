import "./ProductDetails.css";

import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";

import ProductGrid from "../../components/ProductGrid/ProductGrid";

function ProductDetails() {
  const { category } = useParams();
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );

  const categoryInfo = {
    electrical: {
      title: "Electrical Collection",
      description:
        "Discover innovative electrical products designed to simplify and enhance your everyday life.",
    },

    fashion: {
      title: "Fashion Collection",
      description:
        "Explore premium fashion products that combine style, comfort, and elegance.",
    },

    wardrobe: {
      title: "Wardrobe Collection",
      description:
        "Organize your home with modern, stylish, and spacious wardrobe solutions.",
    },
  };

  const info = categoryInfo[category.toLowerCase()];

  return (
    <main className="product-details-page">
      <section className="category-banner">
        <p className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products/${category.toLowerCase()}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </p>

        <h1>{info?.title}</h1>

        <p>{info?.description}</p>
      </section>

      <section className="category-products">
        <ProductGrid products={categoryProducts} />
      </section>
    </main>
  );
}

export default ProductDetails;
