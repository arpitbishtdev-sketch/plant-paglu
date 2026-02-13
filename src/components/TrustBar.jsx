import "./trustbar.css";
import { Link } from "react-router-dom";
import { FaLeaf, FaStore, FaHandsHelping } from "react-icons/fa";

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="trust-inner">
        <Link
          to="/healthy-plants"
          className="trust-item"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FaLeaf className="trust-icon" />
          <div className="trust-text">
            <h4>Healthy, Handpicked Plants</h4>
            <p>Carefully selected plants paired with premium ceramic pots</p>
          </div>
        </Link>

        <Link
          to="/stall"
          className="trust-item"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FaStore className="trust-icon" />
          <div className="trust-text">
            <h4>Visit Our Stall at DLF Mall</h4>
            <p>Experience the plants in person at our offline store</p>
          </div>
        </Link>

        <Link
          to="/personal-guidance"
          className="trust-item"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FaHandsHelping className="trust-icon" />
          <div className="trust-text">
            <h4>Personal Guidance</h4>
            <p>We help you choose the right plant for your space</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
