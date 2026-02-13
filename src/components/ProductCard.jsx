import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaEye } from "react-icons/fa";
import { useState } from "react";
import QuickPreview from "./QuickPreview";
import "./productCard.css";

const message = encodeURIComponent(
  `Hi Plant Paglu 🌿,

I found your store online and I'm interested in your plants.

Please share more details.

Thank you!`,
);

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);

  const firstImage = product.variants[Object.keys(product.variants)[0]][0];

  return (
    <>
      <div className="pcard">
        <div className="pcard-img">
          <img
            src={firstImage}
            alt={product.name}
            onClick={() => navigate(`/product/${product.id}`)}
          />

          <div className="pcard-overlay">
            <div className="icon eye" onClick={() => setPreviewOpen(true)}>
              <FaEye />
            </div>

            <a
              href={`https://wa.me/919205152397?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="pcard-info">
          <h4>{product.name}</h4>
          <p className="price">₹{product.price}</p>
        </div>
      </div>

      {/* 🔥 OUTSIDE CARD */}
      {previewOpen && (
        <QuickPreview product={product} onClose={() => setPreviewOpen(false)} />
      )}
    </>
  );
}
