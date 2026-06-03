import "./Services.css";
import serviceImg from "../assets/OurServices.jpg"; 
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


const Services = () => {
  return (
    <div className="services-page">

      {/* HERO SECTION */}
      <ScrollReveal>
      <section className="services-hero">

        <div className="services-left">
          <span className="tag">OUR SERVICES</span>

          <h1>
            We Build Modern
            <br />
            Digital Experiences
          </h1>

          <p>
            TechVerse provides high-quality technology content, learning resources,
            and development insights to help students and developers grow in the
            modern tech world.
          </p>

        </div>

        <div className="services-right">
          <img src={serviceImg} alt="Services" />
        </div>

      </section>
      </ScrollReveal>

      {/* SERVICES GRID */}
      <ScrollReveal>
      <section className="services-grid">

        <div className="service-card">
          <h3>🚀 Web Development</h3>
          <p>Modern responsive websites using React, Next.js and APIs.</p>
        </div>

        <div className="service-card">
          <h3>🤖 AI Solutions</h3>
          <p>Insights and implementation of Artificial Intelligence systems.</p>
        </div>

        <div className="service-card">
          <h3>☁️ Cloud Services</h3>
          <p>Scalable cloud architecture and deployment guidance.</p>
        </div>

        <div className="service-card">
          <h3>🔒 Cyber Security</h3>
          <p>Security awareness, ethical hacking and protection strategies.</p>
        </div>

        <div className="service-card">
          <h3>📊 Data Science</h3>
          <p>Data analytics, machine learning and business intelligence.</p>
        </div>

        <div className="service-card">
          <h3>⚡ Performance Optimization</h3>
          <p>Improve speed, SEO and overall application performance.</p>
        </div>

      </section>
      </ScrollReveal>

    </div>
  );
};

export default Services;