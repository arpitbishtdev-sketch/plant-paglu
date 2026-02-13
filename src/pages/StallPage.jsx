import "./stallpage.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function StallPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % 2);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="stall-page">
      {/* HERO */}
      <section className="stall-hero">
        <div className="stall-slides">
          <img
            src="https://res.cloudinary.com/dirixa5no/image/upload/v1770647771/s3_njaxth.jpg"
            className={`stall-img ${index === 0 ? "active" : ""}`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dirixa5no/image/upload/v1770647773/s2_uguucy.jpg"
            className={`stall-img ${index === 1 ? "active" : ""}`}
            alt=""
          />
        </div>

        <div className="stall-overlay">
          <h1>Visit Our Stall</h1>
          <p>DLF Mall, Noida — Ground Floor</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="stall-intro">
        <h2>Experience Plants In Real Life</h2>
        <p>
          Step into a refreshing green corner where Plant Paglu brings nature
          closer to your everyday life. Discover indoor plants, ceramic
          planters, and expert advice that helps you choose the perfect plant
          for your home, office, or gifting needs.
        </p>
      </section>

      {/* CARDS */}
      <section className="stall-cards">
        <div className="stall-card">
          <h4>📍 Location</h4>
          <p>DLF Mall of India, Ground Floor</p>
        </div>

        <div className="stall-card">
          <h4>🕒 Timings</h4>
          <p>11:00 AM — 9:30 PM (All Days)</p>
        </div>

        <div className="stall-card">
          <h4>🌿 What You'll Find</h4>
          <p>Indoor Plants, Ceramic Pots, Soil Mix & Guidance</p>
        </div>
      </section>

      {/* MAP */}
      <section className="stall-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112046.2599860376!2d77.1918456451304!3d28.646372826326125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1770560518428!5m2!1sen!2sin"
          loading="lazy"
          title="DLF Mall Location"
        />
      </section>

      <Footer />
    </div>
  );
}
