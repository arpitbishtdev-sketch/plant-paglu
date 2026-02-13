import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./pg.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

export default function PersonalGuidance() {
  const [mode, setMode] = useState("email");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7bxi9j", //   service id
        "template_v025x7l", //   Contact Us template (admin ko mail)
        form.current,
        "ndj81A_cbhMHHPOoW", //   yaha apni public key dalna
      )
      .then(() => {
        toast.success(
          "Enquiry sent successfully 🌿 We’ll contact you shortly.",
        );
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };
  return (
    <>
      {/* HERO CONTACT */}
      <section className="pg-hero">
        <img
          src="https://res.cloudinary.com/dirixa5no/image/upload/v1770705090/pc1_wxww4e.png"
          className="pg-bg"
        />

        <div className="pg-card glass">
          <div className="pg-toggle">
            <button
              className={mode === "email" ? "active" : ""}
              onClick={() => setMode("email")}
            >
              Email Us
            </button>

            <button
              className={mode === "social" ? "active" : ""}
              onClick={() => setMode("social")}
            >
              Social Media
            </button>
          </div>

          <div className={`pg-animated ${mode}`}>
            <div className="pg-email">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your space..."
                  required
                />
                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="pg-social-icons">
              <a
                href="https://wa.me/919205152397"
                target="_blank"
                rel="noreferrer"
                className="wa"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="https://www.instagram.com/plantpagluhere"
                target="_blank"
                rel="noreferrer"
                className="ig"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pg-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112046.2599860376!2d77.1918456451304!3d28.646372826326125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin"
          loading="lazy"
        />
      </section>
      <Footer />
    </>
  );
}
