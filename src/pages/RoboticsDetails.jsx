import { useState } from "react";
import "./BlogDetails.css";
import robotics from "../assets/robotics.jpg";
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

const RoboticsDetails = () => {
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
        Future of Robotics and Automation
      </h1>
      <ScrollReveal>
      <img
        src={robotics}
        alt="Robotics and Automation"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Robotics and automation are transforming industries across the world by
        improving efficiency, accuracy, and productivity. Modern robots are no
        longer limited to repetitive factory tasks. They are becoming smarter,
        more adaptable, and capable of working alongside humans in complex
        environments. Advances in Artificial Intelligence, Machine Learning,
        sensors, and computing power are enabling robots to make decisions,
        analyze data, and perform tasks with greater autonomy. From healthcare
        and manufacturing to agriculture and logistics, robotics is shaping the
        future of work and redefining how businesses operate in the digital age.
      </p>

      <p className="quote">
        “The future belongs to intelligent machines that can collaborate with humans to solve complex problems and improve everyday life.”
      </p>

      <h2 className="h2">The Evolution of Robotics</h2>

      <p className="para">
        Robotics has evolved significantly over the past few decades. Early
        industrial robots were designed to perform simple, repetitive tasks in
        controlled environments. Today’s robots are equipped with advanced
        sensors, computer vision systems, and AI-powered algorithms that allow
        them to understand their surroundings and adapt to changing conditions.
        This evolution is making robots more flexible and capable of handling
        tasks that previously required human intelligence and judgment.
      </p>

      <h2 className="h2">Applications of Robotics</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🏭 Manufacturing</h3>
          <p>
            Robots improve production efficiency, reduce errors,
            and automate repetitive assembly line tasks.
          </p>
        </div>

        <div className="industry-card">
          <h3>🏥 Healthcare</h3>
          <p>
            Robotic systems assist in surgeries, patient care,
            rehabilitation, and medical diagnostics.
          </p>
        </div>

        <div className="industry-card">
          <h3>🚚 Logistics</h3>
          <p>
            Automated robots streamline warehouse operations,
            inventory management, and package delivery.
          </p>
        </div>

        <div className="industry-card">
          <h3>🌾 Agriculture</h3>
          <p>
            Smart robots help farmers monitor crops, automate
            harvesting, and improve agricultural productivity.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Automation and Smart Systems</h2>

      <p className="para">
        Automation involves using technology to perform tasks with minimal
        human intervention. Modern automation systems combine robotics,
        Artificial Intelligence, and data analytics to create intelligent
        workflows. Businesses use automation to reduce operational costs,
        improve consistency, and increase productivity. Smart factories,
        autonomous vehicles, and intelligent supply chains are examples of
        how automation is reshaping industries worldwide.
      </p>

      <h2 className="h2">Emerging Technologies</h2>
      <ScrollReveal>

      <div className="industry-grid">

        <div className="industry-card">
          <h3>🤖 AI-Powered Robots</h3>
          <p>
            Artificial Intelligence enables robots to learn,
            adapt, and make decisions independently.
          </p>
        </div>

        <div className="industry-card">
          <h3>👁️ Computer Vision</h3>
          <p>
            Advanced cameras and image processing allow robots
            to recognize objects and navigate environments.
          </p>
        </div>

        <div className="industry-card">
          <h3>🌐 IoT Integration</h3>
          <p>
            Connected devices enable robots to communicate,
            share data, and operate efficiently.
          </p>
        </div>

        <div className="industry-card">
          <h3>🦾 Collaborative Robots</h3>
          <p>
            Cobots work safely alongside humans, enhancing
            productivity without replacing workers.
          </p>
        </div>

      </div>
      </ScrollReveal>

      <h2 className="h2">Benefits of Robotics and Automation</h2>

      <p className="para">
        Robotics and automation provide numerous advantages, including increased
        efficiency, improved accuracy, reduced operational costs, and enhanced
        workplace safety. Automated systems can perform repetitive tasks
        continuously without fatigue, allowing human workers to focus on more
        strategic and creative activities. Organizations that embrace automation
        gain a competitive advantage through higher productivity and faster
        decision-making processes.
      </p>

      <h2 className="h2">Challenges and Concerns</h2>

      <p className="para">
        Despite their benefits, robotics and automation present challenges.
        Concerns about job displacement, cybersecurity risks, implementation
        costs, and ethical considerations remain important issues. Businesses
        must ensure that automation technologies are deployed responsibly and
        that employees are provided with opportunities for reskilling and
        adaptation. Balancing technological advancement with social and economic
        considerations will be critical for long-term success.
      </p>

      <h2 className="h2">The Future Ahead</h2>

      <p className="para">
        The future of robotics and automation is filled with exciting
        possibilities. As AI, machine learning, and sensor technologies continue
        to advance, robots will become more intelligent, autonomous, and
        capable of performing increasingly complex tasks. From smart cities and
        autonomous transportation systems to advanced healthcare solutions and
        space exploration, robotics will play a central role in shaping the next
        generation of innovation. Organizations that embrace these technologies
        today will be better positioned to thrive in the rapidly evolving digital
        economy.
      </p>

      <h2 className="h2">Conclusion</h2>

      <p className="para">
        Robotics and automation are driving a new era of technological
        transformation. By combining intelligent machines with advanced
        automation systems, industries can achieve greater efficiency,
        productivity, and innovation. While challenges remain, the continued
        development of robotics promises significant benefits for businesses,
        workers, and society as a whole. The next generation of intelligent
        machines is not a distant vision—it is already beginning to shape the
        future of the world around us.
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

export default RoboticsDetails;