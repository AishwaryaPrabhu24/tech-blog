import { useState } from "react";
import "./BlogDetails.css";
import quantum from "../assets/quantum.jpg";
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


const QuantumDetails = () => {
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
        Quantum Computing Explained Simply
      </h1>
       
      <ScrollReveal>
      <img
        src={quantum}
        alt="Quantum Computing"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Quantum computing is one of the most exciting emerging technologies of the modern era.
        Unlike traditional computers that process information using bits represented as 0s and 1s,
        quantum computers use quantum bits, or qubits, which can exist in multiple states
        simultaneously. This unique capability allows quantum computers to solve certain complex
        problems much faster than classical computers. Although the technology is still in its
        early stages, researchers and technology companies are investing heavily in quantum
        computing because of its potential to revolutionize industries such as healthcare,
        cybersecurity, finance, and scientific research.
      </p>

      <p className="quote">
        “Quantum computing is not about replacing traditional computers — it is about solving problems that classical computers struggle to handle.”
      </p>

      <h2 className="h2">What is Quantum Computing?</h2>

      <p className="para">
        Quantum computing is a field of computing that uses the principles of quantum mechanics
        to process information. Traditional computers perform calculations using binary bits,
        whereas quantum computers use qubits that can represent multiple possibilities at the
        same time. This property, known as superposition, allows quantum systems to perform
        calculations more efficiently for specific types of problems. Another important concept
        is entanglement, where qubits become interconnected and influence each other's states,
        enabling powerful computational capabilities.
      </p>

      <h2 className="h2">Key Concepts of Quantum Computing</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>⚛️ Qubits</h3>
          <p>
            The fundamental unit of quantum information that can
            represent multiple states simultaneously.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔄 Superposition</h3>
          <p>
            Enables qubits to exist in multiple states at once,
            increasing computational possibilities.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔗 Entanglement</h3>
          <p>
            A phenomenon where qubits become interconnected and
            influence each other instantly.
          </p>
        </div>

        <div className="industry-card">
          <h3>📈 Quantum Speedup</h3>
          <p>
            Allows certain calculations to be completed much
            faster than classical computers.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Applications of Quantum Computing</h2>

      <p className="para">
        Quantum computing has the potential to transform many industries. In healthcare,
        researchers can use quantum systems to simulate complex molecules and accelerate drug
        discovery. Financial institutions can improve risk analysis and portfolio optimization.
        Logistics companies may optimize transportation routes more efficiently, while
        cybersecurity experts explore both quantum-resistant encryption methods and quantum
        cryptography. Scientific research can also benefit from solving complex simulations
        that are beyond the capabilities of today's supercomputers.
      </p>

      <h2 className="h2">Benefits and Challenges</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🚀 Faster Computation</h3>
          <p>
            Solves specific complex problems significantly faster
            than traditional computing systems.
          </p>
        </div>

        <div className="industry-card">
          <h3>🧪 Scientific Discovery</h3>
          <p>
            Accelerates research in chemistry, medicine, physics,
            and material science.
          </p>
        </div>

        <div className="industry-card">
          <h3>⚠️ High Cost</h3>
          <p>
            Quantum hardware remains expensive and requires
            specialized environments to operate.
          </p>
        </div>

        <div className="industry-card">
          <h3>❄️ Technical Complexity</h3>
          <p>
            Building stable quantum systems is extremely challenging
            due to noise and error rates.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Quantum Computing vs Classical Computing</h2>

      <p className="para">
        Classical computers are highly effective for everyday tasks such as browsing the web,
        running software applications, and processing business operations. Quantum computers,
        however, are designed to solve specialized problems involving massive calculations and
        optimization challenges. Rather than replacing traditional computers, quantum systems
        are expected to work alongside classical systems, providing unique advantages where
        conventional approaches are limited.
      </p>

      <h2 className="h2">The Future of Quantum Computing</h2>

      <p className="para">
        Technology companies, universities, and governments worldwide are investing heavily in
        quantum research. As hardware becomes more reliable and scalable, quantum computing may
        unlock breakthroughs in artificial intelligence, medicine, energy optimization, and
        scientific discovery. Although practical large-scale quantum computers are still under
        development, the progress achieved in recent years suggests that quantum technology will
        become an important part of the future computing landscape.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Quantum computing represents a revolutionary approach to processing information. By
        leveraging the principles of quantum mechanics, it offers capabilities that go beyond
        traditional computing methods. While challenges remain, the potential benefits are
        enormous. As research and development continue, quantum computing is expected to play a
        significant role in solving some of the world's most complex scientific and technological
        problems.
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

export default QuantumDetails;