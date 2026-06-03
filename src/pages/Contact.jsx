import "./Contact.css";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6
    }
  })
};


const Contact = () => {
  return (
    <div className="contact-page">

      {/* Heading Section */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <ScrollReveal>
        <p>
          We’re here to help and answer any question. Let’s build something amazing together.
        </p>
        </ScrollReveal>
      </div>

      {/* Grid Section */}
      <ScrollReveal>
      <div className="contact-grid">

        {/* Card 1 */}
        <div className="contact-card">
          <div className="icon">📍</div>
          <h2>Visit Office</h2>
          <p>
            TechVerse Headquarters<br />
            Chennai, Tamil Nadu, India
          </p>
        </div>

        {/* Card 2 */}
        <div className="contact-card">
          <div className="icon">📞</div>
          <h2>Call Us Now</h2>
          <p>
            +91 98765 43210<br />
            Mon - Sat (9AM - 6PM)
          </p>
        </div>

        {/* Card 3 */}
        <div className="contact-card">
          <div className="icon">✉️</div>
          <h2>Send Message</h2>
          <p>
            support@techverse.com<br />
            We reply within 24 hours
          </p>
        </div>
      </div>
      </ScrollReveal>
      
    </div>
  );
};

export default Contact;