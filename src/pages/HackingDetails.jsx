import { useState } from "react";
import "./BlogDetails.css";
import hacking from "../assets/hacking.jpg";
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

const HackingDetails = () => {
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
        Ethical Hacking: A Beginner's Guide
      </h1>
      <ScrollReveal>
      <img
        src={hacking}
        alt="Ethical Hacking"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Ethical hacking is the practice of identifying security vulnerabilities in
        computer systems, networks, and applications with permission from the owner.
        Unlike malicious hackers, ethical hackers use their skills to strengthen
        cybersecurity and protect organizations from potential attacks. As cyber
        threats continue to grow in complexity, businesses increasingly rely on
        ethical hackers to assess security weaknesses before cybercriminals can
        exploit them. Ethical hacking plays a vital role in modern cybersecurity
        by helping organizations maintain secure digital environments and protect
        sensitive information from unauthorized access.
      </p>

      <p className="quote">
        “The best way to defend a system is to think like an attacker and secure every possible weakness before it can be exploited.”
      </p>

      <h2 className="h2">What is Ethical Hacking?</h2>

      <p className="para">
        Ethical hacking involves legally testing systems, applications, and networks
        to discover vulnerabilities. Ethical hackers follow a structured approach to
        identify weaknesses, document findings, and recommend security improvements.
        Their goal is not to damage systems but to strengthen them against real-world
        cyber threats. Organizations often hire certified ethical hackers to perform
        security assessments and penetration testing as part of their cybersecurity
        strategy.
      </p>

      <h2 className="h2">Types of Ethical Hacking</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🌐 Network Hacking</h3>
          <p>
            Testing network infrastructure to identify vulnerabilities
            such as open ports, weak protocols, and misconfigurations.
          </p>
        </div>

        <div className="industry-card">
          <h3>💻 Web Application Testing</h3>
          <p>
            Finding security flaws in websites and applications,
            including SQL injection and cross-site scripting attacks.
          </p>
        </div>

        <div className="industry-card">
          <h3>📱 Mobile Security</h3>
          <p>
            Assessing Android and iOS applications for weaknesses
            that could expose user data or system functionality.
          </p>
        </div>

        <div className="industry-card">
          <h3>☁️ Cloud Security</h3>
          <p>
            Evaluating cloud platforms and services to ensure
            secure storage, access control, and data protection.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Penetration Testing Process</h2>

      <p className="para">
        Penetration testing is a key component of ethical hacking. The process
        typically begins with information gathering, where the tester collects
        details about the target system. Next comes vulnerability scanning and
        analysis to identify potential weaknesses. Ethical hackers then attempt
        controlled exploitation to determine the impact of discovered flaws.
        Finally, they produce detailed reports and recommendations to help
        organizations improve their security posture.
      </p>

      <h2 className="h2">Essential Skills for Beginners</h2>

      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🐧 Linux Knowledge</h3>
          <p>
            Understanding Linux commands and environments is
            essential for security testing and analysis.
          </p>
        </div>

        <div className="industry-card">
          <h3>🌍 Networking</h3>
          <p>
            Knowledge of protocols, IP addressing, DNS,
            routing, and network security concepts.
          </p>
        </div>

        <div className="industry-card">
          <h3>💡 Programming</h3>
          <p>
            Languages such as Python, JavaScript, and Bash
            help automate testing and exploit development.
          </p>
        </div>

        <div className="industry-card">
          <h3>🔍 Security Tools</h3>
          <p>
            Familiarity with tools like Nmap, Wireshark,
            Burp Suite, and Metasploit is highly valuable.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Common Security Threats</h2>

      <p className="para">
        Ethical hackers regularly encounter threats such as phishing attacks,
        ransomware, password attacks, social engineering, and web application
        vulnerabilities. Understanding these threats helps professionals design
        stronger defenses and educate users about cybersecurity best practices.
        Organizations that proactively address these risks are better prepared
        to prevent data breaches and financial losses.
      </p>

      <h2 className="h2">Career Opportunities</h2>

      <p className="para">
        Ethical hacking offers a wide range of career opportunities, including
        penetration tester, security analyst, cybersecurity consultant, incident
        responder, and security engineer. With the increasing demand for cybersecurity
        professionals worldwide, ethical hacking has become one of the most rewarding
        and rapidly growing fields in the technology industry. Certifications such as
        CEH, CompTIA Security+, and OSCP can help beginners build credibility and
        advance their careers.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Ethical hacking is an essential part of modern cybersecurity. By identifying
        vulnerabilities before attackers can exploit them, ethical hackers help
        organizations protect valuable information and maintain trust. For beginners,
        learning ethical hacking provides an exciting opportunity to develop technical
        skills, solve complex security challenges, and contribute to a safer digital
        world. As cyber threats continue to evolve, ethical hackers will remain at
        the forefront of defending systems and securing the future of technology.
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

export default HackingDetails;