import { createPortal } from "react-dom";
import { useEffect } from "react";
import "./quickPreview.css";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

export default function QuickPreview({ product, onClose }) {
  const firstImage = product.variants[Object.keys(product.variants)[0]][0];

  //   Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="preview-content">
          <div className="preview-image">
            <img src={firstImage} alt={product.name} />
          </div>

          <div className="preview-info">
            <h2>{product.name}</h2>
            <p className="price">₹{product.price}</p>
            <p>{product.description}</p>

            <p className="delivery-note">
              Delivery is currently unavailable. Pickup available at our stall.
            </p>

            <div className="preview-actions">
              <button
                className="preview-btn secondary"
                onClick={() => {
                  onClose();
                  window.location.href = `/product/${product.id}`;
                }}
              >
                See Full Details
              </button>

              <a
                href={`https://wa.me/919205152397?text=Hi, I'm interested in ${product.name}`}
                target="_blank"
                rel="noreferrer"
                className="preview-btn whatsapp"
              >
                <FaWhatsapp style={{ marginRight: "8px" }} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
