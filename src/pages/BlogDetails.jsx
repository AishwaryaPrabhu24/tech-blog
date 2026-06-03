import { useState } from "react";
import "./BlogDetails.css";
import ai from "../assets/ai.jpg";
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

const BlogDetails = () => {

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
        The Future of Artificial Intelligence
      </h1>
      <ScrollReveal>
      <img
        src={ai}
        alt="Artificial Intelligence"
        className="blog-image"
      />
      </ScrollReveal>

      <p className="para">
        Artificial Intelligence (AI) is one of the most significant technological advancements of the modern era. It refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions. AI enables computers and software systems to perform tasks that typically require human intelligence, such as problem-solving, reasoning, speech recognition, and language understanding. The development of AI has transformed various industries by improving efficiency, accuracy, and productivity. In healthcare, AI assists doctors in diagnosing diseases, analyzing medical images, and discovering new drugs. In education, AI provides personalized learning experiences tailored to individual students' needs and learning speeds. The banking sector uses AI for fraud detection, risk assessment, and customer support through chatbots. AI is also widely used in transportation, powering navigation systems and self-driving vehicles. In the retail industry, AI helps businesses understand customer preferences and improve shopping experiences through recommendation systems. Virtual assistants such as Siri, Alexa, and Google Assistant are common examples of AI applications in daily life. Machine Learning and Deep Learning are important branches of AI that enable systems to learn from data and improve over time. AI can process vast amounts of information much faster than humans, making it valuable for data analysis and decision-making. It is also used in cybersecurity to detect threats and prevent attacks. Social media platforms use AI to personalize content and advertisements based on user interests. AI-powered translation tools help people communicate across different languages. In agriculture, AI assists farmers in monitoring crops, predicting weather patterns, and increasing productivity. Manufacturing industries use AI-driven robots to automate repetitive tasks and improve production quality. AI contributes significantly to scientific research by analyzing complex datasets and identifying patterns. It plays a vital role in smart cities by optimizing traffic management and energy consumption. Despite its many benefits, AI also presents challenges such as privacy concerns, job displacement, and ethical issues. Responsible AI development is essential to ensure fairness, transparency, and accountability. Governments and organizations worldwide are creating policies to regulate AI technologies and minimize risks. AI continues to evolve rapidly, opening new opportunities for innovation and economic growth. Businesses are increasingly investing in AI to gain competitive advantages and improve customer experiences. AI-powered tools help content creators generate ideas, edit media, and enhance productivity. The integration of AI with technologies such as the Internet of Things (IoT) and cloud computing is creating smarter and more connected systems. Researchers are working toward developing more advanced AI systems capable of understanding and interacting with humans more naturally. As technology progresses, AI is expected to become an even more integral part of everyday life. Overall, Artificial Intelligence is revolutionizing the way people live, work, learn, and communicate, making it one of the most influential technologies shaping the future.

      </p>

      <p className="quote">
        “The most important shift is not that machines are becoming more intelligent, but that intelligence
        itself is becoming more accessible, scalable, and embedded in everyday systems.”
      </p>

      <h2 className="h2">The age of intelligent machines is here</h2>

      <p className="para">

The age of intelligent machines is transforming the world at an unprecedented pace.
Machines can now learn, analyze data, and make decisions with minimal human intervention.
Artificial Intelligence is being used in healthcare, education, transportation, and business.
Smart assistants help people perform daily tasks more efficiently.
Intelligent machines improve productivity by automating repetitive and complex processes.
They can identify patterns and solve problems faster than traditional computer systems.
Self-driving vehicles and AI-powered robots are becoming increasingly common.
These technologies are enhancing convenience, accuracy, and innovation across industries.
However, they also raise important concerns about privacy, security, and employment.
As intelligent machines continue to evolve, they will play a major role in shaping the future of society.

      </p>

      <h2 className="h2">How AI is reshaping industries</h2>

      <ScrollReveal>

      <div className="industry-grid">
        <div className="industry-card">
          <h3>🏥 Healthcare</h3>
          <p>AI improves diagnostics, drug discovery, and protein folding, enabling faster and more accurate medical decisions.</p>
        </div>

        <div className="industry-card">
          <h3>🎓 Education</h3>
          <p>AI enables personalized learning systems that adapt to each student's pace and understanding.</p>
        </div>

        <div className="industry-card">
          <h3>💰 Finance</h3>
          <p>AI powers fraud detection, algorithmic trading, and financial prediction systems.</p>
        </div>

        <div className="industry-card">
          <h3>🌱 Climate & Energy</h3>
          <p>AI optimizes energy grids, improves climate modeling, and supports sustainable agriculture.</p>
        </div>
      </div>
      </ScrollReveal>

      <h2 className="h2">The rise of agentic AI</h2>

      <p className="para">

The rise of Agentic AI marks a new era in artificial intelligence development.
Agentic AI refers to AI systems that can independently plan, reason, and take actions to achieve goals.
Unlike traditional AI, it can perform multiple tasks with minimal human supervision.
These systems can analyze information, make decisions, and adapt to changing situations.
Agentic AI is being used in customer support, software development, healthcare, and business operations.
It can automate complex workflows and improve overall productivity.
Organizations are adopting Agentic AI to reduce manual effort and enhance efficiency.
The technology enables AI agents to collaborate and solve problems more effectively.
It can continuously learn from feedback and improve its performance over time.
Agentic AI has the potential to transform how businesses operate and deliver services.
It can assist professionals by handling routine and time-consuming tasks.
The growing capabilities of Agentic AI are driving innovation across various industries.
However, its development also raises concerns about accountability, security, and ethical use.
Proper governance and human oversight are essential for responsible deployment.
As technology advances, Agentic AI is expected to become a powerful tool for shaping the future of work and society.

      </p>

      <h2 className="h2">The risks we must confront</h2>

      <ScrollReveal>

      <div className="industry-grid">
        <div className="industry-card">
          <h3>⚖️ Bias & Fairness</h3>
          <p>AI systems can inherit and amplify biases present in historical training data, leading to unfair outcomes and reinforcing inequalities.</p>
        </div>

        <div className="industry-card">
          <h3>🔒 Privacy</h3>
          <p>Large-scale data collection and surveillance technologies raise concerns about personal privacy, consent, and data protection.</p>
        </div>

        <div className="industry-card">
          <h3>💼 Job Displacement</h3>
          <p>Automation powered by AI may replace repetitive tasks across industries, requiring workforce adaptation and reskilling.</p>
        </div>

        <div className="industry-card">
          <h3>🎯 AI Alignment</h3>
          <p>Ensuring advanced AI systems behave according to human values and intended goals remains a significant challenge.</p>
        </div>
      </div>
      </ScrollReveal>

      <h2 className="h2">Building AI that works for everyone</h2>

      <p className="para">

Building AI that works for everyone is an important goal in modern technology.
AI systems should be designed to be fair, inclusive, and accessible to all people.
They must serve individuals from different backgrounds, languages, and cultures.
Developers should ensure that AI does not promote bias or discrimination.
Transparency and accountability are essential for building trust in AI systems.
AI should be used to solve real-world problems and improve quality of life.
Accessible AI tools can help bridge gaps in education, healthcare, and communication.
Privacy and data security must be protected when developing AI applications.
Collaboration between governments, organizations, and researchers is necessary for responsible AI development.
By creating ethical and inclusive technologies, we can build AI that benefits everyone and contributes to a better future.

      </p>

      <h2 className="h2">A shared responsibility</h2>

      <p className="para">

Artificial Intelligence is a powerful technology that impacts individuals, businesses, and society.
Ensuring its responsible use is a shared responsibility among developers, governments, organizations, and users.
Developers must create AI systems that are safe, transparent, and ethical.
Organizations should use AI in ways that respect privacy and human rights.
Governments play a key role in establishing regulations and standards for AI development.
Researchers must continue improving AI while addressing potential risks and challenges.
Users should understand the capabilities and limitations of AI technologies.
Collaboration among all stakeholders helps prevent misuse and promotes fairness.
Responsible AI practices build trust and encourage innovation.
By working together, society can ensure that AI benefits everyone and supports a better future.

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

export default BlogDetails;