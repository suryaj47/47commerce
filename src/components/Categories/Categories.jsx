import "./Categories.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import electrical from "../../assets/categories/electrical.png";
import fashion from "../../assets/categories/fashion.png";
import wardrobe from "../../assets/categories/wardrobe.png";

const categories = [
  {
    id: 1,
    title: "Electrical",
    image: electrical,
    count: "30+ Products",
  },
  {
    id: 2,
    title: "Fashion",
    image: fashion,
    count: "50+ Products",
  },
  {
    id: 3,
    title: "Wardrobe",
    image: wardrobe,
    count: "30+ Products",
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="category-container">
        <div className="section-title">
          <h2>Shop By Category</h2>

          <p>Discover collections curated for every lifestyle.</p>
        </div>

        <div className="category-grid">
          <Link to="/products/fashion" className="category-card fashion">
            <img src={fashion} alt="Fashion" />

            <div className="overlay">
              <h3>Fashion</h3>

              <p>50+ Trending Products</p>

              <span>
                Explore
                <FiArrowRight />
              </span>
            </div>
          </Link>

          <Link to="/products/electrical" className="category-card electrical">
            <img src={electrical} alt="Electrical" />

            <div className="overlay">
              <h3>Electrical</h3>

              <p>30+ Premium Products</p>

              <span>
                Explore
                <FiArrowRight />
              </span>
            </div>
          </Link>

          <Link to="/products/wardrobe" className="category-card wardrobe">
            <img src={wardrobe} alt="Wardrobe" />

            <div className="overlay">
              <h3>Wardrobe</h3>

              <p>30+ Modern Collections</p>

              <span>
                Explore
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Categories;
