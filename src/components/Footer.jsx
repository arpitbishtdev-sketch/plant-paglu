import "./footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Mon - Sun: 10AM – 10PM</p>
          <p>Open All Holidays</p>
        </div>

        {/* CENTER BRAND */}
        <div className="footer-center">
          <h2>Plant Paglu Here</h2>
          <div className="social-icons">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/plantpagluhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* Facebook (add later if available) */}
            <a href="#">
              <FaFacebookF />
            </a>

            {/* WhatsApp with prefilled message */}
            <a
              href="https://wa.me/919205152397?text=Hi%20Plant%20Paglu,%20I%20am%20interested%20in%20your%20plants.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className="icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Visit Our Stall</h4>
          <p>Exhibition Stall – Plant Paglu Here</p>
          <p>DLF Mall of India, Noida</p>
          <p>Ground Floor</p>
          <p>+91 92051 52397</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Plant Paglu Here. All rights reserved.
      </div>
    </footer>
  );
}
