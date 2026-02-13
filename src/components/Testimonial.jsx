import { useState } from "react";
import "./testimonial.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    text: "Plants arrived fresh and beautifully packed. My room feels alive now.",
    name: "Arjun Mehta",
    role: "Home Gardener",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Best quality pots I’ve seen online. Premium finish and fast delivery.",
    name: "Ritika Sharma",
    role: "Interior Designer",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "The website experience itself feels premium. Loved shopping here.",
    name: "Karan Verma",
    role: "Plant Lover",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

export default function Testimonial() {
  const [i, setI] = useState(0);

  const prev = () => setI((i - 1 + reviews.length) % reviews.length);
  const next = () => setI((i + 1) % reviews.length);

  return (
    <section className="testi">
      <h2>What Our Customers Say ?</h2>

      <div className="testi-wrapper">
        {[0, 1].map((offset) => {
          const review = reviews[(i + offset) % reviews.length];
          return (
            <div className="testi-card" key={offset}>
              <div className="quote-icon">“</div>

              <p className="quote">{review.text}</p>

              <img src={review.img} alt="" />
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          );
        })}

        <div className="arrows">
          <FaChevronLeft onClick={prev} />
          <FaChevronRight onClick={next} />
        </div>
      </div>
    </section>
  );
}
