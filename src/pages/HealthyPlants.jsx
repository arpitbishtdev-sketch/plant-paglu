import "./healthyplants.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const heroImages = [
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770702573/hero3_aioztr.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770702572/cp2_rpe1qx.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770702572/hero1_puos3t.jpg",
];

export default function HealthyPlants() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hp-page">
      {/* HERO */}
      <section className="hp-hero">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`hp-hero-img ${i === index ? "active" : ""}`}
            alt=""
          />
        ))}

        <div className="hp-hero-text">
          <h1>Healthy, Handpicked Plants</h1>
          <p>Carefully selected greens paired with premium ceramic pots</p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="hp-section">
        <div className="hp-img">
          <img src="https://res.cloudinary.com/dirixa5no/image/upload/v1770703017/hp1_rzwzd7.jpg" />
        </div>
        <div className="hp-text">
          <h2>Plants That Feel Alive</h2>
          <p>
            Every plant is chosen for freshness, health and aesthetic appeal —
            perfect for homes, desks and workspaces.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="hp-section reverse">
        <div className="hp-img">
          <img src="https://res.cloudinary.com/dirixa5no/image/upload/v1770703013/cp1_jlumv1.jpg" />
        </div>
        <div className="hp-text">
          <h2>Premium Ceramic Pots</h2>
          <p>
            Artistic, minimal and elegant pots that complement the beauty of
            your plants.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="hp-section">
        <div className="hp-img">
          <img src="https://res.cloudinary.com/dirixa5no/image/upload/v1770704109/p1_ccep03.png" />
        </div>
        <div className="hp-text">
          <h2>Styled For Every Space</h2>
          <p>
            From study tables to living rooms — add a calming green touch
            everywhere.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="hp-section reverse">
        <div className="hp-img">
          <img src="https://res.cloudinary.com/dirixa5no/image/upload/v1770702573/hp2_abjqjr.jpg" />
        </div>
        <div className="hp-text">
          <h2>Guidance You Can Trust</h2>
          <p>
            We don’t just sell plants. We guide you to choose and care for the
            right one.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
