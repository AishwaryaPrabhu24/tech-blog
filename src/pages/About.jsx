import "./About.css";
import ai from "../assets/aboutimg.jpg";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";

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


const About = () => {
  
  return (
    <div className="about-page">

      {/* Hero Section */}
    <ScrollReveal>
      <section className="about-hero">

        <div className="about-left">
          <span className="tag">ABOUT TECHVERSE</span>

          <h1>
            Exploring Technology,
            <br />
            Inspiring Innovation
          </h1>

          <p>
            TechVerse is a modern technology platform dedicated to making
            Artificial Intelligence, Programming, Cybersecurity, Cloud
            Computing, Robotics, Data Science, and Emerging Technologies
            simple and accessible for everyone.
          </p>

          <div className="stats">

            <div>
              <h2>100+</h2>
              <span>Articles</span>
            </div>

            <div>
              <h2>10+</h2>
              <span>Categories</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Learning</span>
            </div>

          </div>
        </div>

        <div className="about-right">
          <img src={ai} alt="Technology" />
        </div>

      </section>

      {/* Mission */}
      <section className="about-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to simplify complex technology concepts and help
          students, developers, and technology enthusiasts stay updated
          with the latest innovations. We believe learning technology
          should be simple, practical, and inspiring.
        </p>

      </section>
      </ScrollReveal>

      <ScrollReveal>
      {/* Features */}
      <section className="features">

        <div className="feature-card">
          <h3>🤖 Artificial Intelligence</h3>
          <p>
            Learn about AI, Machine Learning, Generative AI,
            and future intelligent systems.
          </p>
        </div>

        <div className="feature-card">
          <h3>☁️ Cloud Computing</h3>
          <p>
            Explore cloud platforms, virtualization,
            scalability, and infrastructure services.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Cyber Security</h3>
          <p>
            Understand cyber threats, ethical hacking,
            and security best practices.
          </p>
        </div>

        <div className="feature-card">
          <h3>💻 Programming</h3>
          <p>
            Master coding languages, frameworks,
            and software development.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Data Science</h3>
          <p>
            Discover analytics, machine learning,
            and big data technologies.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚛️ Quantum Computing</h3>
          <p>
            Explore the future of computing through
            quantum technologies.
          </p>
        </div>

      </section>

      {/* Vision Section */}
      <section className="vision-section">

        <div className="vision-card">
          <h2>🎯 Vision</h2>

          <p>
            To become a trusted technology platform that empowers
            learners through knowledge, promotes innovation,
            and inspires the next generation of technology leaders.
          </p>
        </div>

        <div className="vision-card">
          <h2>🚀 Why Choose Us?</h2>

          <p>
            We provide clear explanations, modern technology insights,
            practical knowledge, and engaging content designed for
            students, developers, and professionals.
          </p>
        </div>

      </section>

      {/* Extra About Content */}
      <section className="about-section">

        <h2>Who We Are</h2>

        <p>
          TechVerse was created with the goal of making technology
          education accessible to everyone. Whether you are a beginner
          learning your first programming language or a professional
          exploring advanced technologies, our platform provides
          valuable resources to help you grow.
        </p>

        <p>
          We cover trending topics such as Artificial Intelligence,
          Cybersecurity, Web Development, Cloud Computing,
          Data Science, Robotics, and Quantum Computing.
          Our articles are designed to be informative, practical,
          and easy to understand.
        </p>

        <p>
          Technology is constantly evolving, and staying updated is
          essential. Through TechVerse, we aim to bridge the gap
          between innovation and learning by providing content that
          inspires curiosity and encourages continuous growth.
        </p>

      </section>
      </ScrollReveal>

    </div>

    
  );
};

export default About;