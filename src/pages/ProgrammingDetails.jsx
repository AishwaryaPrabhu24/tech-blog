import { useState } from "react";
import "./BlogDetails.css";
import programming from "../assets/programming.jpg";
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

const ProgrammingDetails = () => {
   // ✅ reactions state
    const [reactions, setReactions] = useState({
      heart: 0,
      like: 0,
      sad: 0,
      cry: 0,
    });
  
    // ✅ handle reaction click
    const handleReaction = (type) => {
      setReactions((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    };
  
    // ✅ share functions
    const handleWhatsAppShare = () => {
      const url = window.location.href;
      window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
    };
  
    const handleLinkedInShare = () => {
      const url = window.location.href;
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    };
  
    const handleCopyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    };
  return (
    <div className="page">

      <h1 className="title">
        Top Programming Languages in 2026
      </h1>

      <ScrollReveal>
      <img
        src={programming}
        alt="Programming Languages"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Programming languages continue to evolve alongside technology, shaping
        the future of software development, artificial intelligence, cloud
        computing, cybersecurity, and mobile applications. As businesses adopt
        new technologies and digital transformation accelerates, developers are
        expected to learn modern programming languages that offer performance,
        scalability, and flexibility. In 2026, certain languages remain highly
        sought after because of their strong ecosystems, industry demand, and
        ability to support emerging technologies. Understanding these languages
        can help students and professionals stay competitive in the rapidly
        changing technology landscape.
      </p>

      <p className="quote">
        “The best programming language is not the most popular one—it is the one that helps solve real-world problems efficiently.”
      </p>

      <h2 className="h2">Why Programming Languages Matter</h2>

      <p className="para">
        Programming languages are the foundation of software development. They
        enable developers to build websites, mobile applications, enterprise
        systems, AI models, cloud platforms, and countless digital solutions.
        Different languages are designed for different purposes, and choosing
        the right one can significantly impact performance, development speed,
        and maintainability. As technology advances, developers must adapt by
        learning languages that align with industry trends and future demands.
      </p>

      <h2 className="h2">Most In-Demand Languages in 2026</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🐍 Python</h3>
          <p>
            Widely used in Artificial Intelligence, Machine Learning,
            Data Science, Automation, and Web Development.
          </p>
        </div>

        <div className="industry-card">
          <h3>☕ Java</h3>
          <p>
            Popular for enterprise applications, Android
            development, and large-scale business systems.
          </p>
        </div>

        <div className="industry-card">
          <h3>⚛️ JavaScript</h3>
          <p>
            The backbone of modern web development,
            powering interactive websites and applications.
          </p>
        </div>

        <div className="industry-card">
          <h3>🚀 TypeScript</h3>
          <p>
            Enhances JavaScript with type safety,
            making large applications easier to maintain.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Languages Driving Emerging Technologies</h2>

      <p className="para">
        Emerging technologies such as Artificial Intelligence, Cloud Computing,
        Blockchain, and Cybersecurity are creating demand for specialized
        programming skills. Python dominates AI and machine learning, while
        JavaScript and TypeScript continue to lead web development. Languages
        such as Go and Rust are gaining popularity due to their performance,
        security, and cloud-native capabilities. Organizations increasingly seek
        developers who can work across multiple technologies and programming
        environments.
      </p>

      <h2 className="h2">Specialized Programming Languages</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🦀 Rust</h3>
          <p>
            Known for memory safety, security, and high
            performance in system-level programming.
          </p>
        </div>

        <div className="industry-card">
          <h3>🐹 Go</h3>
          <p>
            Developed by Google and widely used for cloud
            infrastructure and scalable backend services.
          </p>
        </div>

        <div className="industry-card">
          <h3>📱 Kotlin</h3>
          <p>
            The preferred language for modern Android
            application development.
          </p>
        </div>

        <div className="industry-card">
          <h3>🎮 C++</h3>
          <p>
            Essential for game development, embedded
            systems, and performance-critical applications.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Skills Employers Look For</h2>

      <p className="para">
        Employers increasingly value developers who possess strong problem-solving
        abilities and practical project experience. Knowledge of frameworks,
        cloud technologies, databases, version control systems, and DevOps
        practices often complements programming language expertise. Full-stack
        development, AI integration, and cybersecurity awareness are becoming
        important skills across many technology roles.
      </p>

      <h2 className="h2">Career Opportunities</h2>

      <p className="para">
        Mastering modern programming languages opens doors to careers such as
        Software Developer, Full Stack Engineer, Data Scientist, AI Engineer,
        Cloud Architect, Mobile App Developer, DevOps Engineer, and Cybersecurity
        Specialist. As organizations continue investing in digital transformation,
        demand for skilled programmers remains strong across industries worldwide.
      </p>

      <h2 className="h2">The Future of Programming</h2>

      <p className="para">
        The future of programming will be influenced by Artificial Intelligence,
        automation, low-code platforms, and cloud-native development. While AI
        tools can assist developers in generating code and improving productivity,
        human creativity, logic, and problem-solving skills remain irreplaceable.
        Developers who continuously learn and adapt to new technologies will be
        best positioned for success in the coming years.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        The programming landscape in 2026 is diverse and full of opportunities.
        Languages such as Python, Java, JavaScript, TypeScript, Go, Rust, and
        Kotlin continue to dominate various technology domains. By learning the
        right programming languages and staying updated with industry trends,
        developers can build rewarding careers and contribute to the next
        generation of technological innovation.
      </p>

      {/* ===================== REACTIONS ===================== */}
      <div className="reaction-box">
        <h3>React to this article</h3>

        <div className="reactions">
          <button onClick={() => handleReaction("heart")}>
            ❤️ {reactions.heart}
          </button>

          <button onClick={() => handleReaction("like")}>
            👎 {reactions.like}
          </button>

          <button onClick={() => handleReaction("sad")}>
            😢 {reactions.sad}
          </button>

          <button onClick={() => handleReaction("cry")}>
            😭 {reactions.cry}
          </button>
        </div>
      </div>

      {/* ===================== SHARE ===================== */}
      <div className="share-box">
        <h3>Share this article</h3>

        <div className="share-buttons">
          <button onClick={handleWhatsAppShare}>
            📱 WhatsApp
          </button>

          <button onClick={handleLinkedInShare}>
            💼 LinkedIn
          </button>

          <button onClick={handleCopyLink}>
            🔗 Copy Link
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProgrammingDetails;