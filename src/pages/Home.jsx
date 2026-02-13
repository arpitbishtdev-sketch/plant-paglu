import { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const tplant =
  "https://res.cloudinary.com/dirixa5no/image/upload/f_auto,q_auto,w_1600/v1770631079/tplant_gmozdc.jpg";

const indoor =
  "https://res.cloudinary.com/dirixa5no/image/upload/f_auto,q_auto,w_1600/v1770631079/indoor_bewsd9.jpg";

const outdoor =
  "https://res.cloudinary.com/dirixa5no/image/upload/f_auto,q_auto,w_1600/v1770632296/outdoor_ygi2u4.jpg";

const pots =
  "https://res.cloudinary.com/dirixa5no/image/upload/f_auto,q_auto,w_1600/v1770632503/Ceramic_pots_nsqulq.png";

import TrustBar from "../components/TrustBar";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonial from "../components/Testimonial";
import EnquiryStrip from "../components/EnquiryStrip";

import Footer from "../components/Footer";

const slides = [
  {
    img: tplant,
    title: "Table Plants",
    subtitle: "Bring freshness to your workspace",
  },
  {
    img: indoor,
    title: "Indoor Plants",
    subtitle: "Perfect greens for your room",
  },
  { img: outdoor, title: "Outdoor Plants", subtitle: "Make your garden alive" },
  {
    img: pots,
    title: "Ceramic pots ",
    subtitle: "Style your plants beautifully",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="nav-trigger" />
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.img}
            className={`hero-bg ${i === index ? "active" : ""}`}
            alt=""
          />
        ))}

        <div className="overlay">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].subtitle}</p>
          <button onClick={() => navigate("/shop?category=all")}>
            Shop Now
          </button>
        </div>
      </section>

      <TrustBar />
      <FeaturedProducts />
      <Testimonial />
      <EnquiryStrip />
      <Footer />
    </>
  );
}
