import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import Footer from "../components/Footer";
import "./productDetail.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const currentUrl = encodeURIComponent(window.location.href);

  if (!product) return <h2>Product not found</h2>;

  // Get first variant automatically
  const firstVariant = Object.keys(product.variants)[0];
  const images = product.variants[firstVariant];

  const [mainImage, setMainImage] = useState(images[0]);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= images.length ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? images.length - visibleCount : prev - 1,
    );
  };

  return (
    <>
      <div className="product-page-container">
        <div className="product-wrapper">
          {/* Left Side: Images */}
          {/* Left Side: Images */}
          <div className="product-image-section">
            <div className="main-image-container">
              <img src={mainImage} alt={product.name} className="main-image" />
            </div>

            <div className="thumbnail-wrapper">
              {images.length > visibleCount && (
                <button className="thumb-arrow left" onClick={prevSlide}>
                  ‹
                </button>
              )}

              <div className="thumbnail-row">
                {images
                  .slice(startIndex, startIndex + visibleCount)
                  .map((img, index) => (
                    <div
                      key={index}
                      className="thumb-wrapper"
                      onClick={() => setMainImage(img)}
                    >
                      <img src={img} alt={`Thumb ${index}`} />
                    </div>
                  ))}
              </div>

              {images.length > visibleCount && (
                <button className="thumb-arrow right" onClick={nextSlide}>
                  ›
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">₹{product.price}</p>

            <p className="product-description">{product.description}</p>

            <div className="action-row">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-main"
              >
                WhatsApp Enquiry
              </a>

              <button className="btn-wishlist">
                <span className="heart-icon">❤</span>
              </button>
            </div>

            <div className="whatsapp-section">
              <p className="contact-text">
                Questions? Contact us via WhatsApp:
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>

            <div className="share-section">
              <span>Share:</span>
              <div className="social-icons">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href={`https://wa.me/?text=Check this product: ${currentUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="social-circle whatsapp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
