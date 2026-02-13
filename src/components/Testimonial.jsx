import { useState } from "react";
import "./testimonial.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    text: "Absolutely loved the quality of the plants. Fresh, vibrant and beautifully packed.",
    name: "Tanisha Bisht",
    role: "Happy Customer",
    img: "https://res.cloudinary.com/dirixa5no/image/upload/v1770964868/rev1_kuykek.jpg",
  },
  {
    text: "Premium ceramic pots and smooth shopping experience. Highly recommended!",
    name: "Aarav Sharma",
    role: "Plant Enthusiast",
    img: "https://res.cloudinary.com/dirixa5no/image/upload/v1770965907/rev2_blxsrl.png",
  },
  {
    text: "Delivery was quick and the packaging was top notch. Loved the detailing.",
    name: "Meera Kapoor",
    role: "Interior Designer",
    img: "https://res.cloudinary.com/dirixa5no/image/upload/v1770965911/rev3_twsl4z.png",
  },
  {
    text: "The plants instantly changed the vibe of my workspace. Totally worth it!",
    name: "Hardeep",
    role: "Office Buyer",
    img: "https://res.cloudinary.com/dirixa5no/image/upload/v1770965960/rev4_gm4orq.png",
  },
];

export default function Testimonial() {
  const [i, setI] = useState(0);

  const prev = () =>
    setI((prev) => (prev - 1 + reviews.length) % reviews.length);

  const next = () => setI((prev) => (prev + 1) % reviews.length);

  return (
    <section className="testi">
      <h2>What Our Customers Say ?</h2>

      <div className="testi-wrapper">
        {/* Desktop carousel */}
        <div
          className="testi-track desktop"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div className="testi-card" key={index}>
              <div className="quote-icon">“</div>
              <p className="quote">{review.text}</p>
              <img src={review.img} alt="" />
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          ))}
        </div>

        {/* Arrows for desktop */}
        <div className="arrows desktop">
          <FaChevronLeft onClick={prev} />
          <FaChevronRight onClick={next} />
        </div>

        {/* Swipe version (mobile & tablet) */}
        <div className="testi-track mobile">
          {reviews.map((review, index) => (
            <div className="testi-card" key={index}>
              <div className="quote-icon">“</div>
              <p className="quote">{review.text}</p>
              <img src={review.img} alt="" />
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
