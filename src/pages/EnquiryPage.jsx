import "./enquiryPage.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

export default function EnquiryPage() {
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
      <section className="enquiry">
        <div className="enquiry-layout">
          {/* LEFT — FORM */}
          <div className="enquiry-card">
            <h2>Plant Enquiry</h2>
            <p className="sub">
              Ask us anything about plants, ceramic pots or plant care
            </p>

            <form ref={form} onSubmit={sendEmail} className="enquiry-form">
              <div className="row">
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
                  name="user_phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Write your enquiry here..."
                required
              />

              <button type="submit">Send Enquiry 🌿</button>
            </form>
          </div>

          {/* RIGHT — INFO + MAP */}
          <div className="enquiry-side">
            <div className="info-card">
              <h4>Visit Our Stall</h4>
              <p>DLF Mall, Delhi</p>
              <p>Ground Floor — Plant Stall</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉️ blacksoun2305@gmail.com</p>
            </div>

            <div className="map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112046.2599860376!2d77.1918456451304!3d28.646372826326125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1770560518428!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DLF Mall Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
