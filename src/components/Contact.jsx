import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Лівий блок - форма */}
        <div className="contact-form">
          <h2>Get in touch with Us and send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>

        {/* Правий блок - Карта */}
        <div className="contact-map">
          <iframe
            title="Barber Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509363!2d144.95373531590494!3d-37.81627974202147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWFyYWtjaCBDaXR5LCDQodCo0JA!5e0!3m2!1sen!2sus!4v1632877432691!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer з контактами */}
      <footer className="contact-footer">
        <div className="footer-section">
          <h3>Get in touch with Us and send a Message</h3>
          <p>contact@barberco.com</p>
          <p>+123 456 789 101</p>
          <p>Headquarters : 836th Avenue, 3rd Floor, New York,</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday : 10:00 am - 05:00 pm</p>
          <p>Saturday : 10:00 am - 02:00 pm</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-contacts">
            <div className="social-name">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/insta.svg" alt="Instagram" />
                Instagram
              </a>
            </div>
            <div className="social-name">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/fb.svg" alt="Facebook" />
                Facebook
              </a>
            </div>
            <div className="social-name">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/twit.svg" alt="Twitter" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
