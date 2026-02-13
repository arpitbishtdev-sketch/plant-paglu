import "./enquiry.css";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EnquiryStrip() {
  const navigate = useNavigate();

  return (
    <section className="enquiry-strip">
      <h2>
        Have a Question About Our Plants<span>?</span>
      </h2>

      <div className="enquiry-bar" onClick={() => navigate("/enquiry")}>
        <FaEnvelope />
        <span>Ask us anything about plants, pots or care…</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/enquiry");
          }}
        >
          Enquire About Our Plants
        </button>
      </div>
    </section>
  );
}
