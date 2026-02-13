import "./featured.css";

import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section className="featured">
      <h2 className="featured-title">Featured Products</h2>

      <div className="grid">
        {products.slice(0, 8).map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="img-box">
              <span className="badge">-10%</span>

              <img
                src={
                  product.variants.default
                    ? product.variants.default[0]
                    : Object.values(product.variants)[0][0]
                }
                alt={product.name}
              />
            </div>

            <div className="card-content">
              <h4>{product.name}</h4>
              <div className="price">
                <span className="new">₹{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
