import "./about.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const heroImages = [
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770637260/a1_fvezdx.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770638215/a2_hxzgnz.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770638227/a3_ysbjkf.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770637264/a4_p7j3o1.jpg",
  "https://res.cloudinary.com/dirixa5no/image/upload/v1770637266/a5_pracix.jpg",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.background = "#e9ecef";
    return () => {
      document.body.style.background = "#ffffff";
    };
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-left">
          <span className="hero-tag">About Plant Paglu</span>
          <h1>Who We Are</h1>
          <p>
            We bring nature closer to your everyday spaces with handpicked
            plants, artistic ceramic pots and genuine plant care guidance.
          </p>
        </div>

        <div className="hero-right">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`hero-img ${i === index ? "active" : ""}`}
              alt=""
            />
          ))}
        </div>
      </section>

      {/* BLOCK 1 */}
      <section className="about-block">
        <div className="about-img">
          <img src={heroImages[1]} alt="" />
        </div>
        <div className="about-content glass">
          <h2>Our Goal</h2>
          <p>
            Our goal is simple — make homes, desks and offices feel alive. Every
            plant we curate is chosen for beauty, freshness and ease of care.
          </p>
        </div>
      </section>

      {/* BLOCK 2 (reverse) */}
      <section className="about-block reverse">
        <div className="about-img">
          <img src={heroImages[2]} alt="" />
        </div>
        <div className="about-content glass">
          <h2>What Makes Us Different</h2>
          <p>
            We don’t just sell plants. We help you choose the right plant, the
            right pot and guide you on how to take care of it.
          </p>
        </div>
      </section>

      {/* BLOCK 3 */}
      <section className="about-block">
        <div className="about-img">
          <img src={heroImages[3]} alt="" />
        </div>
        <div className="about-content glass">
          <h2>Greener Spaces</h2>
          <p>
            Whether it’s your study table, office desk or living room — we help
            you add a fresh, calming green touch everywhere.
          </p>
        </div>
      </section>

      {/* BLOCK 4 (reverse) */}
      <section className="about-block reverse">
        <div className="about-img">
          <img src={heroImages[4]} alt="" />
        </div>
        <div className="about-content glass">
          <h2>Visit Us Offline</h2>
          <p>
            You can experience our plants in real life at our DLF Mall stall,
            where we personally help you choose your perfect plant.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
