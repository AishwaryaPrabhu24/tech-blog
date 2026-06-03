import { useState } from "react";
import "./BlogDetails.css";
import cyber from "../assets/cyber.jpg";
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


const CyberDetails = () => {

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
        Cybersecurity Threats in 2026
      </h1>
      <ScrollReveal>
      <img
        src={cyber}
        alt="Cybersecurity Threats"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Cybersecurity has become one of the most critical concerns for businesses,
        governments, and individuals worldwide. As technology continues to advance,
        cybercriminals are developing increasingly sophisticated attack methods that
        target sensitive information, financial systems, and critical infrastructure.
        In 2026, organizations face a rapidly evolving threat landscape where traditional
        security measures are no longer sufficient. Understanding emerging cyber threats
        and implementing proactive security strategies has become essential for protecting
        digital assets and maintaining trust in connected systems.
      </p>

      <p className="quote">
        “Cybersecurity is no longer just an IT concern — it is a business, economic, and societal necessity.”
      </p>

      <h2 className="h2">The Evolving Threat Landscape</h2>

      <p className="para">
        The digital world is becoming increasingly interconnected through cloud computing,
        artificial intelligence, IoT devices, and remote work environments. While these
        technologies offer significant benefits, they also expand the attack surface
        available to cybercriminals. Modern cyberattacks are more targeted, automated,
        and difficult to detect than ever before. Organizations must continuously adapt
        their security strategies to defend against emerging threats and vulnerabilities.
      </p>

      <h2 className="h2">Major Cyber Threats in 2026</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🎣 Phishing Attacks</h3>
          <p>
            AI-powered phishing campaigns create convincing messages
            designed to steal credentials and sensitive information.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔐 Ransomware</h3>
          <p>
            Attackers encrypt critical data and demand payments,
            causing significant operational disruption.
          </p>
        </div>

        <div className="industry-card">
          <h3>🤖 AI-Powered Attacks</h3>
          <p>
            Cybercriminals use artificial intelligence to automate
            attacks and identify vulnerabilities faster.
          </p>
        </div>

        <div className="industry-card">
          <h3>☁️ Cloud Security Risks</h3>
          <p>
            Misconfigured cloud environments remain a major source
            of data breaches and security incidents.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">The Rise of AI in Cybercrime</h2>

      <p className="para">
        Artificial intelligence is transforming both cybersecurity defenses and cyberattacks.
        Threat actors now use AI tools to generate realistic phishing emails, create deepfake
        content, automate malware development, and bypass traditional security controls.
        As AI capabilities improve, organizations must leverage advanced AI-driven security
        solutions to detect threats and respond more effectively to incidents.
      </p>

      <h2 className="h2">Critical Areas at Risk</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🏦 Financial Systems</h3>
          <p>
            Banks and financial institutions remain prime targets
            for fraud, ransomware, and data theft.
          </p>
        </div>

        <div className="industry-card">
          <h3>🏥 Healthcare</h3>
          <p>
            Medical records and healthcare systems are valuable
            targets for cybercriminals.
          </p>
        </div>

        <div className="industry-card">
          <h3>🏭 Critical Infrastructure</h3>
          <p>
            Energy grids, transportation systems, and utilities
            face increasing cyber risks.
          </p>
        </div>

        <div className="industry-card">
          <h3>📱 Personal Devices</h3>
          <p>
            Smartphones and connected devices are increasingly
            targeted through malware and scams.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Best Practices for Protection</h2>

      <p className="para">
        Organizations should adopt a multi-layered security approach that includes
        strong authentication, regular software updates, employee awareness training,
        network monitoring, and incident response planning. Zero Trust security models,
        endpoint protection systems, and continuous threat intelligence monitoring can
        significantly improve resilience against modern cyber threats. Individuals should
        also practice good cyber hygiene by using strong passwords, enabling multi-factor
        authentication, and remaining cautious of suspicious links and messages.
      </p>

      <h2 className="h2">The Future of Cybersecurity</h2>

      <p className="para">
        The future of cybersecurity will be driven by automation, artificial intelligence,
        and proactive threat detection. Security teams will increasingly rely on AI-powered
        systems to analyze vast amounts of data, identify anomalies, and respond to threats
        in real time. Governments and international organizations will continue developing
        cybersecurity frameworks and regulations to protect digital infrastructure and
        promote global cooperation against cybercrime.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Cybersecurity threats in 2026 are more advanced, persistent, and sophisticated than
        ever before. As organizations embrace digital transformation, the importance of
        protecting systems, data, and users continues to grow. By understanding emerging
        threats, investing in modern security technologies, and promoting cybersecurity
        awareness, businesses and individuals can better defend themselves against the
        evolving challenges of the digital age.
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

export default CyberDetails;
